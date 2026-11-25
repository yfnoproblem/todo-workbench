#!/usr/bin/env python3
import json
import os
import base64
import re
import shutil
import subprocess
import sys
import threading
from datetime import date, datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, urlparse

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(ROOT, ".todo-data.json")
DATA_HISTORY_DIR = os.path.join(ROOT, ".todo-data-history")
ISSUE_ASSET_DIR = os.path.join(ROOT, "issue-assets")
DESKTOP_ALARM_SCRIPT = os.path.join(ROOT, "desktop_pet_alarm.py")
DATA_LOCK = threading.Lock()
DATA_COLLECTION_KEYS = (
    "todos",
    "reminders",
    "issueDrafts",
    "memoItems",
    "projects",
    "projectItems",
    "larkCalendarRecords",
    "t46OpenEvents",
    "monthlyItems",
)
# Collections added later: if an older cached front end posts without the key,
# keep what is on disk instead of wiping it.
OPTIONAL_COLLECTION_KEYS = ("monthlyItems",)
MONTHLY_CHECKS_KEY = "monthlyChecks"
# Tombstones: {"todos": {id: deletedAtISO}, ...}. A record whose id is tombstoned is dropped
# on every save unless its own updatedAt/createdAt is later than deletedAt.
DELETED_RECORDS_KEY = "deletedRecords"
# Collections that get tombstones. t46OpenEvents (externally synced) and
# larkCalendarRecords (keyed by calendar event key, never deleted in the UI) are excluded.
TOMBSTONE_KEYS = (
    "todos",
    "reminders",
    "issueDrafts",
    "memoItems",
    "projects",
    "projectItems",
    "monthlyItems",
)


def _record_key(record):
    if isinstance(record, dict) and record.get("id") not in (None, ""):
        return f"id:{record['id']}"
    return f"value:{json.dumps(record, ensure_ascii=False, sort_keys=True)}"


def _record_timestamp(record):
    if not isinstance(record, dict):
        return ""
    return str(record.get("updatedAt") or record.get("createdAt") or "")


def _merge_record_lists(existing, incoming):
    merged = {}
    order = []
    for record in existing or []:
        key = _record_key(record)
        if key not in merged:
            order.append(key)
        merged[key] = record
    for record in incoming or []:
        key = _record_key(record)
        if key not in merged:
            order.append(key)
            merged[key] = record
            continue
        if _record_timestamp(record) > _record_timestamp(merged[key]):
            merged[key] = record
    return [merged[key] for key in order]


def _check_timestamp(value):
    if isinstance(value, dict):
        return str(value.get("updatedAt") or "")
    return ""


def _merge_monthly_checks(existing, incoming):
    """monthlyChecks = {"YYYY-MM": {itemId: {"done": bool, "updatedAt": iso} | bool}}.
    Merge by month, then by item id; the newer updatedAt wins (incoming wins ties)."""
    result = {}
    for month, items in (existing or {}).items():
        if isinstance(items, dict):
            result[month] = dict(items)
    for month, items in (incoming or {}).items():
        if not isinstance(items, dict):
            continue
        target = result.setdefault(month, {})
        for item_id, value in items.items():
            if item_id not in target or _check_timestamp(value) >= _check_timestamp(target[item_id]):
                target[item_id] = value
    return result


def _parse_ts(value):
    if not value:
        return 0.0
    try:
        parsed = datetime.fromisoformat(str(value).replace("Z", "+00:00"))
        if parsed.tzinfo is None:
            parsed = parsed.astimezone()
        return parsed.timestamp()
    except Exception:
        return 0.0


def _utc_now_iso():
    return datetime.now(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z")


def _normalize_tombstones(value):
    result = {}
    if not isinstance(value, dict):
        return result
    for key, entries in value.items():
        if key not in TOMBSTONE_KEYS or not isinstance(entries, dict):
            continue
        result[key] = {str(i): str(t) for i, t in entries.items() if i not in (None, "") and t}
    return result


def _merge_tombstones(existing, incoming):
    """Union by collection and id; keep the later deletedAt."""
    result = _normalize_tombstones(existing)
    for key, entries in _normalize_tombstones(incoming).items():
        target = result.setdefault(key, {})
        for record_id, deleted_at in entries.items():
            if record_id not in target or _parse_ts(deleted_at) > _parse_ts(target[record_id]):
                target[record_id] = deleted_at
    return {key: entries for key, entries in result.items() if entries}


def _apply_tombstones(records, entries):
    if not entries:
        return records
    kept = []
    for record in records or []:
        if isinstance(record, dict) and str(record.get("id", "")) in entries:
            deleted_at = _parse_ts(entries[str(record["id"])])
            if _parse_ts(record.get("updatedAt") or record.get("createdAt")) <= deleted_at:
                continue
        kept.append(record)
    return kept


def _new_saved_at():
    return datetime.now().astimezone().isoformat(timespec="microseconds")


def _archive_current_data(max_versions=100):
    if not os.path.exists(DATA_FILE):
        return
    try:
        os.makedirs(DATA_HISTORY_DIR, exist_ok=True)
        timestamp = datetime.now().strftime("%Y%m%dT%H%M%S%f")
        shutil.copy2(DATA_FILE, os.path.join(DATA_HISTORY_DIR, f"todo-data-{timestamp}.json"))
        history_files = sorted(
            (
                os.path.join(DATA_HISTORY_DIR, name)
                for name in os.listdir(DATA_HISTORY_DIR)
                if name.endswith(".json")
            ),
            key=os.path.getmtime,
            reverse=True,
        )
        for stale_file in history_files[max_versions:]:
            os.remove(stale_file)
    except OSError:
        pass


def _command_path(name):
    extra_paths = [
        os.path.expanduser("~/.local/bin"),
        "/opt/homebrew/bin",
        "/usr/local/bin",
    ]
    env_path = os.pathsep.join([os.environ.get("PATH", ""), *extra_paths])
    return shutil.which(name, path=env_path) or name


def _first_value(data, keys):
    for key in keys:
        if isinstance(data, dict) and data.get(key) not in (None, ""):
            return data.get(key)
    return None


def _format_event_time(value):
    if value in (None, ""):
        return ""
    if isinstance(value, dict):
        value = _first_value(value, ["date_time", "datetime", "time", "timestamp", "date"])
    if value in (None, ""):
        return ""
    text = str(value)
    try:
        if re.fullmatch(r"\d{10,13}", text):
            timestamp = int(text)
            if timestamp > 10_000_000_000:
                timestamp = timestamp / 1000
            return datetime.fromtimestamp(timestamp).strftime("%H:%M")
        parsed = datetime.fromisoformat(text.replace("Z", "+00:00"))
        return parsed.strftime("%H:%M")
    except Exception:
        match = re.search(r"(\d{1,2}:\d{2})", text)
        return match.group(1) if match else text


def _collect_lark_events(node, events):
    if isinstance(node, list):
        for item in node:
            _collect_lark_events(item, events)
        return
    if not isinstance(node, dict):
        return

    title = _first_value(node, ["summary", "title", "subject", "name"])
    start = _first_value(node, ["start_time", "start", "startTime"])
    end = _first_value(node, ["end_time", "end", "endTime"])
    event_id = _first_value(node, ["event_id", "id", "eventId"])
    if title and (start or end):
        start_text = _format_event_time(start)
        end_text = _format_event_time(end)
        events.append({
            "id": str(event_id or f"{title}-{start_text}-{end_text}"),
            "title": str(title),
            "start": start_text,
            "end": end_text,
            "timeText": f"{start_text} - {end_text}" if start_text and end_text else start_text or end_text,
            "raw": node,
        })
        return

    for value in node.values():
        _collect_lark_events(value, events)


def _parse_lark_cli_json(output):
    text = (output or "").strip()
    if not text:
        return {}
    try:
        return json.loads(text)
    except Exception:
        start = text.find("{")
        end = text.rfind("}")
        if start >= 0 and end > start:
            return json.loads(text[start:end + 1])
        raise


MAX_REQUEST_BYTES = 25 * 1024 * 1024


class TodoHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def _send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _read_json_body(self, max_bytes=MAX_REQUEST_BYTES):
        raw_length = self.headers.get("Content-Length", "0")
        try:
            length = int(raw_length)
        except ValueError:
            self._send_json(400, {"error": "Invalid Content-Length header."})
            return None
        if length < 0:
            self._send_json(400, {"error": "Invalid Content-Length header."})
            return None
        if length > max_bytes:
            self._send_json(413, {"error": "Request payload too large."})
            return None
        try:
            raw = self.rfile.read(length) if length else b"{}"
            payload = json.loads(raw.decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError):
            self._send_json(400, {"error": "Invalid JSON body."})
            return None
        if not isinstance(payload, dict):
            self._send_json(400, {"error": "JSON body must be an object."})
            return None
        return payload

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/lark-calendar/today":
            params = parse_qs(parsed.query)
            target_date = params.get("date", [date.today().isoformat()])[0]
            if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", target_date):
                self._send_json(400, {"ok": False, "error": "Invalid date."})
                return
            try:
                result = subprocess.run(
                    [
                        _command_path("lark-cli"),
                        "calendar",
                        "+agenda",
                        "--as",
                        "user",
                        "--start",
                        target_date,
                        "--end",
                        target_date,
                        "--format",
                        "json",
                    ],
                    cwd=ROOT,
                    capture_output=True,
                    text=True,
                    encoding="utf-8",
                    errors="replace",
                    timeout=20,
                )
                output = "\n".join(part for part in [result.stdout, result.stderr] if part).strip()
                payload = _parse_lark_cli_json(output) if output else {}
                if result.returncode != 0 or payload.get("ok") is False:
                    err_val = payload.get("error")
                    err_obj = err_val if isinstance(err_val, dict) else {}
                    self._send_json(200, {
                        "ok": False,
                        "date": target_date,
                        "events": [],
                        "error": err_obj.get("message") or (err_val if isinstance(err_val, str) else None) or output or "Failed to load Lark calendar.",
                        "hint": err_obj.get("hint", ""),
                        "notice": payload.get("_notice", {}),
                    })
                    return
                events = []
                _collect_lark_events(payload, events)
                events.sort(key=lambda item: (item.get("start") or "99:99", item.get("title") or ""))
                self._send_json(200, {"ok": True, "date": target_date, "events": events})
            except FileNotFoundError:
                self._send_json(200, {"ok": False, "date": target_date, "events": [], "error": "没有找到 lark-cli。"})
            except Exception as error:
                self._send_json(200, {"ok": False, "date": target_date, "events": [], "error": str(error)})
            return

        if parsed.path == "/api/data":
            try:
                with DATA_LOCK:
                    if os.path.exists(DATA_FILE):
                        with open(DATA_FILE, "r", encoding="utf-8") as file:
                            data = json.load(file)
                    else:
                        data = {}
                    for key in DATA_COLLECTION_KEYS:
                        data.setdefault(key, [])
                    data.setdefault(MONTHLY_CHECKS_KEY, {})
                    data.setdefault(DELETED_RECORDS_KEY, {})
                self._send_json(200, data)
            except Exception as error:
                self._send_json(500, {"error": str(error)})
            return
        super().do_GET()

    def do_POST(self):
        parsed_path = urlparse(self.path).path
        if parsed_path == "/api/issue-assets":
            payload = self._read_json_body(max_bytes=16 * 1024 * 1024)
            if payload is None:
                return
            try:
                data_url = payload.get("dataUrl", "")
                if not isinstance(data_url, str):
                    self._send_json(400, {"error": "Invalid dataUrl."})
                    return
                match = re.match(r"^data:image/([a-zA-Z0-9.+-]+);base64,(.+)$", data_url)
                if not match:
                    self._send_json(400, {"error": "Only base64 image data URLs are supported."})
                    return

                extension = match.group(1).lower().replace("jpeg", "jpg")
                if extension not in {"png", "jpg", "gif", "webp"}:
                    self._send_json(400, {"error": "Unsupported image format."})
                    return

                try:
                    raw_bytes = base64.b64decode(match.group(2), validate=True)
                except Exception:
                    self._send_json(400, {"error": "Invalid base64 image data."})
                    return

                safe_stem = re.sub(r"[^a-zA-Z0-9_-]+", "-", os.path.splitext(str(payload.get("filename", "screenshot")))[0]).strip("-") or "screenshot"
                safe_id = re.sub(r"[^a-zA-Z0-9_-]+", "-", str(payload.get("id", ""))).strip("-")
                filename = f"{safe_stem}-{safe_id}.{extension}" if safe_id else f"{safe_stem}.{extension}"
                filename = os.path.basename(re.sub(r"[^a-zA-Z0-9_.-]+", "-", filename))

                os.makedirs(ISSUE_ASSET_DIR, exist_ok=True)
                asset_root = os.path.realpath(ISSUE_ASSET_DIR)
                target = os.path.realpath(os.path.join(asset_root, filename))
                if os.path.commonpath([asset_root, target]) != asset_root:
                    self._send_json(400, {"error": "Invalid asset path."})
                    return
                with open(target, "wb") as file:
                    file.write(raw_bytes)
                self._send_json(200, {"src": f"/issue-assets/{filename}"})
            except Exception as error:
                self._send_json(500, {"error": str(error)})
            return

        if parsed_path == "/api/desktop-alarm":
            payload = self._read_json_body(max_bytes=64 * 1024)
            if payload is None:
                return
            if not os.path.exists(DESKTOP_ALARM_SCRIPT):
                self._send_json(200, {"ok": False, "error": "Desktop alarm helper not installed."})
                return
            try:
                task = str(payload.get("task") or "固定提醒")
                time_text = str(payload.get("time") or "")
                subprocess.Popen(
                    [
                        sys.executable,
                        DESKTOP_ALARM_SCRIPT,
                        json.dumps({"task": task, "time": time_text}, ensure_ascii=False),
                    ],
                    cwd=ROOT,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL,
                )
                self._send_json(200, {"ok": True})
            except Exception as error:
                self._send_json(500, {"ok": False, "error": str(error)})
            return

        if parsed_path != "/api/data":
            self.send_error(404)
            return

        payload = self._read_json_body()
        if payload is None:
            return
        try:
            with DATA_LOCK:
                existing_data = {}
                if os.path.exists(DATA_FILE):
                    with open(DATA_FILE, "r", encoding="utf-8") as file:
                        existing_data = json.load(file)

                base_saved_at = payload.get("baseSavedAt")
                current_saved_at = existing_data.get("savedAt")
                merged = bool(existing_data) and base_saved_at != current_saved_at
                data = {}
                tombstones = _merge_tombstones(
                    existing_data.get(DELETED_RECORDS_KEY), payload.get(DELETED_RECORDS_KEY)
                )
                deleted_now = _utc_now_iso()
                for key in DATA_COLLECTION_KEYS:
                    if key not in payload:
                        # Any collection the client did not send is kept as-is (never wiped).
                        data[key] = existing_data.get(key, [])
                        continue
                    if not merged and key in TOMBSTONE_KEYS and isinstance(payload.get(key), list):
                        # Direct replace: the client had the latest revision, so ids that
                        # disappeared were deleted on purpose -> record tombstones server-side.
                        incoming_ids = {
                            str(r["id"]) for r in payload[key]
                            if isinstance(r, dict) and r.get("id") not in (None, "")
                        }
                        for record in existing_data.get(key, []) or []:
                            if not isinstance(record, dict) or record.get("id") in (None, ""):
                                continue
                            record_id = str(record["id"])
                            if record_id not in incoming_ids:
                                # It existed on disk until now, so it is being deleted now.
                                tombstones.setdefault(key, {})[record_id] = deleted_now
                    incoming = payload.get(key, [])
                    if key == "t46OpenEvents" and not incoming and existing_data.get(key):
                        incoming = existing_data[key]
                    data[key] = (
                        _merge_record_lists(existing_data.get(key, []), incoming)
                        if merged
                        else incoming
                    )
                    if key in TOMBSTONE_KEYS:
                        data[key] = _apply_tombstones(data[key], tombstones.get(key))
                data[DELETED_RECORDS_KEY] = tombstones
                incoming_checks = payload.get(MONTHLY_CHECKS_KEY)
                existing_checks = existing_data.get(MONTHLY_CHECKS_KEY) or {}
                if not isinstance(incoming_checks, dict):
                    data[MONTHLY_CHECKS_KEY] = existing_checks
                elif merged:
                    data[MONTHLY_CHECKS_KEY] = _merge_monthly_checks(existing_checks, incoming_checks)
                else:
                    data[MONTHLY_CHECKS_KEY] = incoming_checks
                data["savedAt"] = _new_saved_at()

                _archive_current_data()
                tmp_file = f"{DATA_FILE}.{threading.get_ident()}.tmp"
                try:
                    with open(tmp_file, "w", encoding="utf-8") as file:
                        json.dump(data, file, ensure_ascii=False, indent=2)
                        file.flush()
                        os.fsync(file.fileno())
                    os.replace(tmp_file, DATA_FILE)
                finally:
                    if os.path.exists(tmp_file):
                        os.remove(tmp_file)
            response = {"ok": True, "savedAt": data["savedAt"], "merged": merged}
            if merged:
                response["data"] = data
            self._send_json(200, response)
        except Exception as error:
            self._send_json(500, {"error": str(error)})


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 4173), TodoHandler)
    server.serve_forever()

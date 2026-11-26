(() => {
  const THEME_KEY = "todo-workbench:theme";
  const RITUAL_KEY = "todo-workbench:ritual";
  const BIRTHDAY_GREETED_KEY = "todo-workbench:1212-greeted";
  const BASE_TITLE = "Todo 工作台 · made of stardust";

  const root = document.documentElement;
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggleButton");
  const toggleLabel = document.getElementById("themeToggleLabel");
  const ritualBtn = document.getElementById("ritualToggleButton");
  const heroDateStamp = document.getElementById("heroDateStamp");
  const heroBalloonBtn = document.getElementById("heroBalloonButton");
  const liujinDockBtn = document.getElementById("liujinDockBtn");
  const notePopover = document.getElementById("stardustNotePopover");
  const countdownEl = document.getElementById("stardustCountdown");
  const quoteTextEl = document.getElementById("stardustQuoteText");
  const quoteSourceEl = document.getElementById("stardustQuoteSource");
  const nextQuoteBtn = document.getElementById("stardustNextQuoteBtn");
  const signoffEl = document.getElementById("stardustSignoff");
  const signoffQuoteEl = document.getElementById("stardustSignoffQuote");
  const signoffCloseBtn = document.getElementById("stardustSignoffClose");
  const flightLayer = document.getElementById("balloonFlightLayer");

  const STARDUST_QUOTES = [
    { text: "成长与自我发光不是太阳的权利，你也可以。", source: "马嘉祺 · 温柔语录" },
    { text: "自己接纳自己、自己认可自己、自己热爱自己，自己永远是自己的勇士。", source: "马嘉祺 · 温柔语录" },
    { text: "别追逐风，你就在风中。", source: "《偷》" },
    { text: "在复杂中坚持着简单，希望自己能够不忘初心。", source: "马嘉祺 · 温柔语录" },
    { text: "过去｜现在｜未来，每一步都在向光而行。", source: "EP《心室》" },
    { text: "一封写给年少自己的温柔回信，也送给认真生活的此刻。", source: "《致年少的自己》" },
    { text: "在既定重启的星期一里，也拥有属于自己的温柔节律。", source: "EP《所以开始既定重启的星期一》" },
  ];

  let isQuietMode = false;
  let quoteIndex = new Date().getDate() % STARDUST_QUOTES.length;
  let todayState = { done: 0, total: 0, initialized: false };
  let isAlarmOpen = false;
  let signoffTimer = null;
  let balloonGradSeq = 0;

  function isBirthdayToday(now = new Date()) {
    return now.getMonth() === 11 && now.getDate() === 12;
  }

  function getDaysUntilBirthday(now = new Date()) {
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let target = new Date(now.getFullYear(), 11, 12);
    if (startOfToday > target) {
      target = new Date(now.getFullYear() + 1, 11, 12);
    }
    return Math.round((target.getTime() - startOfToday.getTime()) / 86400000);
  }

  function getTimeRhythmMotto(total, doneCount, now = new Date()) {
    if (total > 0 && doneCount === total) {
      return isQuietMode ? "今日事已毕 · 一起去未来" : "今日事已毕 · 一起去未来 ✦";
    }
    if (isQuietMode) {
      return "一起去未来";
    }
    const hour = now.getHours();
    const minute = now.getMinutes();
    const day = now.getDay();
    if (hour > 22 || (hour === 22 && minute >= 30) || hour < 4) {
      return "致不肯睡的灵魂 · 早点收工";
    }
    if (day === 1) {
      return "既定重启的星期一 · 慢慢来";
    }
    if (day === 5) {
      return "Fri Friday · 这周辛苦啦";
    }
    if (day === 0 || day === 6) {
      return "周末加更不加课 ✦";
    }
    return "一起去未来";
  }

  window.__getStardustMotto = (total, doneCount) => getTimeRhythmMotto(total, doneCount);

  function updateDocumentTitle() {
    if (isAlarmOpen) {
      document.title = "✦ 星光提醒 · Todo 工作台";
      return;
    }
    if (todayState.total > 0 && todayState.done === todayState.total) {
      document.title = "✦ 今日已清零 · Todo 工作台";
      return;
    }
    if (isBirthdayToday()) {
      document.title = "✦ 12.12 · Todo 工作台";
      return;
    }
    document.title = BASE_TITLE;
  }

  function applyTheme(theme, { immediate = false } = {}) {
    const isDay = theme === "day";
    if (!immediate) {
      root.classList.add("is-theme-switching");
    }
    if (isDay) {
      root.setAttribute("data-theme", "day");
    } else {
      root.removeAttribute("data-theme");
    }
    if (toggleLabel) {
      toggleLabel.textContent = isDay ? "星夜追光" : "月白日间";
    }
    if (!immediate) {
      void root.offsetWidth;
      requestAnimationFrame(() => {
        root.classList.remove("is-theme-switching");
      });
    }
    try {
      localStorage.setItem(THEME_KEY, isDay ? "day" : "night");
    } catch {
      // Ignore storage errors in restricted environments.
    }
  }

  function applyRitualMode(quiet) {
    isQuietMode = Boolean(quiet);
    body.classList.toggle("is-quiet-mode", isQuietMode);
    if (ritualBtn) {
      ritualBtn.setAttribute("aria-pressed", isQuietMode ? "false" : "true");
      ritualBtn.textContent = isQuietMode ? "安静模式" : "开启中 ✦";
    }
    const mottoEl = document.getElementById("todayProgressMotto");
    if (mottoEl) {
      mottoEl.textContent = getTimeRhythmMotto(todayState.total, todayState.done);
    }
    try {
      localStorage.setItem(RITUAL_KEY, isQuietMode ? "quiet" : "on");
    } catch {
      // Ignore storage errors.
    }
  }

  function initThemeAndRitual() {
    let savedTheme = "night";
    let savedRitual = "on";
    try {
      savedTheme = localStorage.getItem(THEME_KEY) || "night";
      savedRitual = localStorage.getItem(RITUAL_KEY) || "on";
    } catch {
      savedTheme = "night";
      savedRitual = "on";
    }
    applyTheme(savedTheme, { immediate: true });
    applyRitualMode(savedRitual === "quiet");

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "day" ? "night" : "day";
        applyTheme(next);
      });
    }
    if (ritualBtn) {
      ritualBtn.addEventListener("click", () => {
        applyRitualMode(!isQuietMode);
      });
    }
  }

  function renderQuote() {
    const q = STARDUST_QUOTES[quoteIndex % STARDUST_QUOTES.length];
    if (quoteTextEl) quoteTextEl.textContent = `“${q.text}”`;
    if (quoteSourceEl) quoteSourceEl.textContent = `—— ${q.source}`;
  }

  function renderBirthdayAndCountdown() {
    if (!heroDateStamp) return;
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const is1212 = isBirthdayToday(now);
    const daysLeft = getDaysUntilBirthday(now);

    heroDateStamp.textContent = is1212 ? "12.12 · 生日快乐 ✦" : `${mm}.${dd}`;
    heroDateStamp.classList.toggle("is-birthday", is1212);
    body.classList.toggle("is-birthday-day", is1212);

    if (countdownEl) {
      countdownEl.textContent = is1212 ? "12.12 · 生日快乐，一起去未来 ✦" : `距离 12.12 还有 ${daysLeft} 天 ✦`;
    }
    renderQuote();
    updateDocumentTitle();

    if (is1212 && !isQuietMode) {
      let greeted = false;
      try {
        greeted = sessionStorage.getItem(BIRTHDAY_GREETED_KEY) === "1";
      } catch {
        greeted = false;
      }
      if (!greeted) {
        try {
          sessionStorage.setItem(BIRTHDAY_GREETED_KEY, "1");
        } catch {
          // Ignore storage errors.
        }
        window.setTimeout(() => {
          spawnCelebrationBalloons(null, { count: 7, stampText: "12.12 · Happy Birthday ✦" });
        }, 420);
      }
    }
  }

  function toggleNotePopover(forceOpen = null) {
    if (!notePopover || !heroDateStamp) return;
    const nextOpen = forceOpen === null ? notePopover.hidden : Boolean(forceOpen);
    notePopover.hidden = !nextOpen;
    heroDateStamp.setAttribute("aria-expanded", nextOpen ? "true" : "false");
  }

  function initNotePopover() {
    if (!heroDateStamp || !notePopover) return;
    heroDateStamp.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleNotePopover();
    });
    if (nextQuoteBtn) {
      nextQuoteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        quoteIndex = (quoteIndex + 1) % STARDUST_QUOTES.length;
        renderQuote();
      });
    }
    document.addEventListener("click", (event) => {
      if (!notePopover.hidden && !notePopover.contains(event.target) && event.target !== heroDateStamp) {
        toggleNotePopover(false);
      }
    });
  }

  function updateTangram(svgId, done, total) {
    const svg = document.getElementById(svgId);
    if (!svg) return;
    const pieces = svg.querySelectorAll(".tangram-piece");
    const litCount = total > 0 ? (done >= total ? 7 : Math.min(6, Math.round((done / total) * 7))) : 0;
    pieces.forEach((piece, idx) => {
      piece.classList.toggle("is-lit", idx < litCount);
    });
    svg.setAttribute("title", `《心室》七巧板进度 · 已点亮 ${litCount}/7 块`);
  }

  function resolveAnchorRect(originEl) {
    if (!originEl || typeof originEl.getBoundingClientRect !== "function") return null;
    const row = originEl.closest?.(".todo-card, .closeout-item, .monthly-item, .reminder-card, .today-progress-footer");
    const target = row || originEl;
    const rect = target.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return null;
    return rect;
  }

  function spawnSparkleAt(x, y, size = 12, delay = 0, sx = 16) {
    if (!flightLayer || isQuietMode) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;
    const star = document.createElement("div");
    star.className = "flying-sparkle";
    star.style.left = `${Math.min(window.innerWidth - 20, Math.max(12, x))}px`;
    star.style.top = `${Math.max(40, y)}px`;
    star.style.setProperty("--sw", `${size}px`);
    star.style.setProperty("--sdelay", `${delay}s`);
    star.style.setProperty("--sx", `${sx}px`);
    star.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z"/></svg>`;
    flightLayer.appendChild(star);
    window.setTimeout(() => star.remove(), 2100);
  }

  function createBalloonNode({ x, top, w, h, dur, delay, dx, rot, c2, c3 }) {
    balloonGradSeq += 1;
    const gradId = `bGrad-${balloonGradSeq}`;
    const node = document.createElement("div");
    node.className = "flying-balloon";
    node.style.left = `${Math.min(window.innerWidth - 44, Math.max(12, x))}px`;
    node.style.top = `${top}px`;
    node.style.setProperty("--bw", `${w}px`);
    node.style.setProperty("--bh", `${h}px`);
    node.style.setProperty("--bdur", dur);
    node.style.setProperty("--bdelay", `${delay}s`);
    node.style.setProperty("--dx", `${dx}px`);
    node.style.setProperty("--rot", `${rot}deg`);
    node.innerHTML = `
      <svg viewBox="0 0 36 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="${gradId}" cx="35%" cy="28%" r="72%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="50%" stop-color="${c2}"/>
            <stop offset="100%" stop-color="${c3}"/>
          </radialGradient>
        </defs>
        <ellipse cx="18" cy="18" rx="13.5" ry="16.5" fill="url(#${gradId})"/>
        <ellipse cx="13" cy="12" rx="3.1" ry="4.8" fill="#ffffff" opacity="0.58" transform="rotate(-17 13 12)"/>
        <path d="M18 34.5c-1.5 6 3 10 0 18" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity="0.72"/>
      </svg>
    `;
    return node;
  }

  function showReducedStamp(text, left, top, durationMs = 1200) {
    if (!flightLayer) return;
    const stamp = document.createElement("span");
    stamp.className = "flying-stamp";
    stamp.textContent = text;
    stamp.style.left = `${Math.min(window.innerWidth - 110, Math.max(110, left))}px`;
    stamp.style.top = `${Math.max(72, top)}px`;
    stamp.style.animation = `sky-stamp-reduced ${durationMs}ms ease forwards`;
    flightLayer.appendChild(stamp);
    window.setTimeout(() => stamp.remove(), durationMs + 100);
  }

  function spawnFloatingBalloons(originEl, preCapturedRect = null) {
    if (!flightLayer || isQuietMode) return;
    const rect = preCapturedRect || resolveAnchorRect(originEl);
    const baseLeft = rect ? rect.left : Math.max(40, window.innerWidth * 0.18);
    const baseWidth = rect ? Math.max(rect.width, 200) : Math.min(window.innerWidth * 0.5, 520);
    const baseTop = rect ? Math.max(120, Math.min(rect.top + 8, window.innerHeight - 60)) : window.innerHeight * 0.45;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showReducedStamp("made of stardust ✦", baseLeft + baseWidth * 0.5, baseTop - 28, 1100);
      return;
    }
    if (flightLayer.childElementCount >= 18) return;

    const specs = [
      { ratio: 0.34, w: 30, h: 46, delay: 0, dx: -14, rot: -5, c2: "#efe8ff", c3: "#a78bfa" },
      { ratio: 0.62, w: 34, h: 52, delay: 0.08, dx: 16, rot: 5, c2: "#dfd4ff", c3: "#6b4eff" },
    ];
    for (const s of specs) {
      const node = createBalloonNode({ ...s, x: baseLeft + baseWidth * s.ratio - s.w / 2, top: baseTop, dur: "1.75s" });
      flightLayer.appendChild(node);
      window.setTimeout(() => node.remove(), 2100);
    }
    spawnSparkleAt(baseLeft + baseWidth * 0.48, baseTop + 4, 11, 0.06, 18);
  }

  function spawnCelebrationBalloons(originEl, { count = 6, stampText = "今日事已毕 · 一起去未来 ✦" } = {}) {
    if (!flightLayer || isQuietMode) return;
    const rect = resolveAnchorRect(originEl);
    const baseLeft = rect ? rect.left : Math.max(40, window.innerWidth * 0.16);
    const baseWidth = rect ? Math.max(rect.width, 280) : Math.min(window.innerWidth * 0.68, 760);
    const baseTop = rect ? Math.max(140, Math.min(rect.top, window.innerHeight - 60)) : window.innerHeight * 0.72;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showReducedStamp(stampText, window.innerWidth * 0.5, baseTop - 32, 1300);
      return;
    }
    if (flightLayer.childElementCount >= 24) return;

    const palette = [
      { c2: "#efe8ff", c3: "#a78bfa" },
      { c2: "#dfd4ff", c3: "#6b4eff" },
      { c2: "#e6ddff", c3: "#7c5cff" },
      { c2: "#f3eeff", c3: "#c4b5fd" },
    ];
    for (let i = 0; i < count; i += 1) {
      const p = palette[i % palette.length];
      const ratio = count === 1 ? 0.5 : 0.12 + (0.76 * i) / (count - 1);
      const w = 30 + (i % 3) * 5;
      const node = createBalloonNode({
        x: baseLeft + baseWidth * ratio - w / 2,
        top: baseTop,
        w,
        h: Math.round(w * 1.54),
        dur: "2.25s",
        delay: i * 0.07,
        dx: (i % 2 === 0 ? -1 : 1) * (14 + (i % 3) * 6),
        rot: (i % 2 === 0 ? -1 : 1) * (4 + (i % 3)),
        c2: p.c2,
        c3: p.c3,
      });
      flightLayer.appendChild(node);
      window.setTimeout(() => node.remove(), 2700);
    }

    for (let j = 0; j < 4; j += 1) {
      spawnSparkleAt(baseLeft + baseWidth * (0.2 + j * 0.2), baseTop, 11 + (j % 2) * 3, 0.08 + j * 0.09, j % 2 === 0 ? -20 : 22);
    }

    const stamp = document.createElement("span");
    stamp.className = "flying-stamp";
    stamp.textContent = stampText;
    stamp.style.left = `${Math.min(window.innerWidth - 130, Math.max(130, baseLeft + baseWidth * 0.5))}px`;
    stamp.style.top = `${Math.max(84, baseTop - 22)}px`;
    stamp.style.setProperty("--sdur", "2.25s");
    flightLayer.appendChild(stamp);
    window.setTimeout(() => stamp.remove(), 2400);
  }

  function showSignoffCard() {
    if (!signoffEl || !signoffQuoteEl || isQuietMode) return;
    const q = STARDUST_QUOTES[quoteIndex % STARDUST_QUOTES.length];
    quoteIndex = (quoteIndex + 1) % STARDUST_QUOTES.length;
    signoffQuoteEl.textContent = `“${q.text}”`;
    signoffEl.hidden = false;
    window.clearTimeout(signoffTimer);
    signoffTimer = window.setTimeout(() => {
      if (signoffEl) signoffEl.hidden = true;
    }, 5600);
  }

  function initHeroBalloonEasterEgg() {
    if (!heroBalloonBtn) return;
    let tapCount = 0;
    let tapResetTimer = null;

    heroBalloonBtn.addEventListener("click", () => {
      heroBalloonBtn.classList.remove("is-boing");
      void heroBalloonBtn.offsetWidth;
      heroBalloonBtn.classList.add("is-boing");

      const rect = heroBalloonBtn.getBoundingClientRect();
      tapCount += 1;
      window.clearTimeout(tapResetTimer);
      tapResetTimer = window.setTimeout(() => {
        tapCount = 0;
      }, 6000);

      if (tapCount >= 12) {
        tapCount = 0;
        if (!isQuietMode) {
          spawnCelebrationBalloons(heroBalloonBtn, { count: 6, stampText: "12.12 · 月白星海为你亮起 ✦" });
          for (let i = 0; i < 8; i += 1) {
            spawnSparkleAt(
              window.innerWidth * (0.14 + (i / 7) * 0.72),
              rect.top + 40 + (i % 3) * 28,
              10 + (i % 3) * 3,
              i * 0.08,
              (i % 2 === 0 ? -1 : 1) * 26
            );
          }
        }
        return;
      }

      spawnSparkleAt(rect.left + rect.width * 0.5, rect.top + 28, 12, 0, tapCount % 2 === 0 ? -18 : 18);
      quoteIndex = (quoteIndex + 1) % STARDUST_QUOTES.length;
      renderQuote();
    });
  }

  function initLiujinPetInteraction() {
    if (!liujinDockBtn) return;
    liujinDockBtn.addEventListener("click", () => {
      liujinDockBtn.classList.remove("is-petted");
      void liujinDockBtn.offsetWidth;
      liujinDockBtn.classList.add("is-petted");
      const rect = liujinDockBtn.getBoundingClientRect();
      spawnSparkleAt(rect.left + rect.width * 0.5, rect.top + 6, 11, 0, -10);
      spawnSparkleAt(rect.left + rect.width * 0.72, rect.top + 10, 9, 0.08, 12);
    });
  }

  function handleProgressEvent(scope, done, total) {
    if (scope === "monthly") {
      updateTangram("monthlyTangram", done, total);
      return;
    }
    if (scope === "today") {
      const hadPendingToday = todayState.initialized && todayState.total > 0 && todayState.done < todayState.total;
      const isNowAllDone = total > 0 && done === total;
      const shouldCelebrateAllClear = hadPendingToday && isNowAllDone;

      todayState = { done, total, initialized: true };
      updateTangram("todayTangram", done, total);
      updateDocumentTitle();

      const mottoEl = document.getElementById("todayProgressMotto");
      if (mottoEl) {
        mottoEl.textContent = getTimeRhythmMotto(total, done);
      }

      if (shouldCelebrateAllClear) {
        const footer = document.getElementById("todayProgressFooter");
        const track = footer?.querySelector(".progress-track");
        if (track) {
          track.classList.remove("is-shimmering");
          void track.offsetWidth;
          track.classList.add("is-shimmering");
        }
        spawnCelebrationBalloons(footer, { count: 6, stampText: "今日事已毕 · 一起去未来 ✦" });
        showSignoffCard();
      }
    }
  }

  function syncInitialProgressFromDom() {
    const todayText = document.getElementById("todayProgressText")?.textContent || "";
    const todayMatch = todayText.match(/(\d+)\s*\/\s*(\d+)/);
    if (todayMatch) {
      handleProgressEvent("today", Number(todayMatch[1]), Number(todayMatch[2]));
    }
    const monthlyText = document.getElementById("monthlyProgress")?.textContent || "";
    const monthlyMatch = monthlyText.match(/(\d+)\s*\/\s*(\d+)/);
    if (monthlyMatch) {
      handleProgressEvent("monthly", Number(monthlyMatch[1]), Number(monthlyMatch[2]));
    }
  }

  function syncChipAriaPressed() {
    document.querySelectorAll(".chip-button").forEach((chip) => {
      chip.setAttribute("aria-pressed", chip.classList.contains("is-active") ? "true" : "false");
    });
  }

  function initDeleteConfirmGuard() {
    document.addEventListener(
      "click",
      (event) => {
        const delBtn = event.target.closest("button.small-button.danger");
        if (!delBtn) return;
        const label = delBtn.textContent.trim();
        if (label === "删除") {
          event.preventDefault();
          event.stopImmediatePropagation();
          delBtn.dataset.origLabel = label;
          delBtn.textContent = "确认删除?";
          delBtn.classList.add("is-confirming");
          window.setTimeout(() => {
            if (delBtn.isConnected && delBtn.classList.contains("is-confirming")) {
              delBtn.textContent = delBtn.dataset.origLabel || "删除";
              delBtn.classList.remove("is-confirming");
            }
          }, 3000);
        }
      },
      true
    );
  }

  function initKeyboardShortcuts() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        const alarm = document.getElementById("alarmOverlay");
        if (alarm && !alarm.hidden) {
          const snoozeBtn = alarm.querySelector('[data-alarm-action="snooze-10"]');
          if (snoozeBtn) snoozeBtn.click();
          return;
        }
        if (notePopover && !notePopover.hidden) {
          toggleNotePopover(false);
          heroDateStamp?.focus();
          return;
        }
        if (signoffEl && !signoffEl.hidden) {
          signoffEl.hidden = true;
          return;
        }
        const toolsMenu = document.getElementById("topbarToolsMenu");
        if (toolsMenu && toolsMenu.open) {
          toolsMenu.open = false;
          return;
        }
        const finishEditBtn = document.getElementById("inspectorOpenDetailBtn");
        if (finishEditBtn && !finishEditBtn.hidden && finishEditBtn.textContent.trim() === "完成编辑") {
          const inspector = document.getElementById("todayInspector");
          if (inspector && document.activeElement instanceof HTMLElement && inspector.contains(document.activeElement)) {
            document.activeElement.blur();
          }
          finishEditBtn.click();
          return;
        }
        const closeBtn = Array.from(document.querySelectorAll(".todo-card.is-expanded button")).find(
          (b) => b.textContent.trim() === "收起"
        );
        if (closeBtn) closeBtn.click();
        return;
      }

      const tag = (event.target && event.target.tagName) || "";
      const isEditing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || event.target?.isContentEditable;
      const alarm = document.getElementById("alarmOverlay");
      if (alarm && !alarm.hidden) return;

      if (event.key === "/" && !isEditing) {
        const activeTab = body.getAttribute("data-active-tab") || "today";
        const targetInput = activeTab === "review" ? document.getElementById("reviewSearch") : activeTab === "today" ? document.getElementById("todoInput") : null;
        if (targetInput && targetInput.offsetParent !== null) {
          event.preventDefault();
          targetInput.focus();
        }
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key === "Enter" && isEditing) {
        const form = event.target.closest("form");
        if (form) {
          event.preventDefault();
          form.requestSubmit ? form.requestSubmit() : form.submit();
        }
      }
    });
  }

  function initCompletionAndEvents() {
    window.addEventListener("stardust:progress", (event) => {
      const detail = event.detail || {};
      handleProgressEvent(detail.scope, Number(detail.done || 0), Number(detail.total || 0));
    });

    window.addEventListener("stardust:alarm", (event) => {
      isAlarmOpen = Boolean(event.detail?.open);
      updateDocumentTitle();
    });

    if (signoffCloseBtn && signoffEl) {
      signoffCloseBtn.addEventListener("click", () => {
        signoffEl.hidden = true;
      });
    }

    document.addEventListener("change", (event) => {
      const target = event.target;
      if (
        target &&
        target.matches("input[type='checkbox']:not([data-todo-field='needsReview'])") &&
        target.checked
      ) {
        if (target.closest(".todo-card, .closeout-item, .monthly-item, .project-todo-row")) {
          spawnFloatingBalloons(target, resolveAnchorRect(target));
        }
      }
    });

    // Capture phase ensures we read the task row's bounding rect BEFORE app.js re-renders and detaches the button.
    document.addEventListener(
      "click",
      (event) => {
        const btn = event.target.closest("button");
        if (btn && btn.textContent.trim() === "完成") {
          const anchorRect = resolveAnchorRect(btn);
          spawnFloatingBalloons(btn, anchorRect);
        }
      },
      true
    );

    document.addEventListener("click", (event) => {
      const toolsMenu = document.getElementById("topbarToolsMenu");
      if (toolsMenu && toolsMenu.open && !toolsMenu.contains(event.target) && !event.target.closest?.(".zine-select-menu")) {
        toolsMenu.open = false;
      }
      if (event.target.closest(".chip-button")) {
        requestAnimationFrame(syncChipAriaPressed);
      }
    });

    syncChipAriaPressed();
  }

  initThemeAndRitual();
  renderBirthdayAndCountdown();
  initNotePopover();
  initHeroBalloonEasterEgg();
  initLiujinPetInteraction();
  initDeleteConfirmGuard();
  initKeyboardShortcuts();
  initCompletionAndEvents();
  syncInitialProgressFromDom();
})();

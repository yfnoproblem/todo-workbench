const STORAGE_KEY = "weekly-reminders:v1";
const TODO_STORAGE_KEY = "todo-workbench:v1";
const ISSUE_STORAGE_KEY = "todo-issue-drafts:v1";
const MEMO_STORAGE_KEY = "todo-memo-items:v1";
const PROJECT_STORAGE_KEY = "todo-projects:v1";
const PROJECT_ITEM_STORAGE_KEY = "todo-project-items:v1";
const LARK_CALENDAR_STORAGE_KEY = "todo-lark-calendar-state:v1";
const T46_EVENT_STORAGE_KEY = "todo-t46-open-events:v1";
const APP_STATE_KEY = "todo-workbench-state:v1";
const MONTHLY_ITEM_STORAGE_KEY = "todo-monthly-items:v1";
const MONTHLY_CHECK_STORAGE_KEY = "todo-monthly-checks:v1";
const DELETED_RECORDS_STORAGE_KEY = "todo-deleted-records:v1";
const TOMBSTONE_COLLECTIONS = ["todos", "reminders", "issueDrafts", "memoItems", "projects", "projectItems", "monthlyItems"];
const DAILY_CLOSEOUT_TIME = "18:30";
const dayNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

const tabButtons = document.querySelectorAll(".tab-button");
const viewSections = document.querySelectorAll(".view-section");
const form = document.querySelector("#reminderForm");
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const targetInput = document.querySelector("#targetInput");
const dateInput = document.querySelector("#dateInput");
const customDateField = document.querySelector("#customDateField");
const ownerInput = document.querySelector("#ownerInput");
const ownerCustomInput = document.querySelector("#ownerCustomInput");
const moduleInput = document.querySelector("#moduleInput");
const priorityInput = document.querySelector("#priorityInput");
const todoInboxList = document.querySelector("#todoInboxList");
const todoDatedList = document.querySelector("#todoDatedList");
const todoInboxEmpty = document.querySelector("#todoInboxEmpty");
const todoDatedEmpty = document.querySelector("#todoDatedEmpty");
const inboxCount = document.querySelector("#inboxCount");
const datedCount = document.querySelector("#datedCount");
const reviewFilter = document.querySelector("#reviewFilter");
const reviewSearch = document.querySelector("#reviewSearch");
const reviewList = document.querySelector("#reviewList");
const reviewEmpty = document.querySelector("#reviewEmpty");
const archivedProjectList = document.querySelector("#archivedProjectList");
const archivedProjectEmpty = document.querySelector("#archivedProjectEmpty");
const archivedProjectCount = document.querySelector("#archivedProjectCount");
const taskInput = document.querySelector("#taskInput");
const dayInput = document.querySelector("#dayInput");
const dayInputs = document.querySelectorAll('input[name="days"]');
const timeInput = document.querySelector("#timeInput");
const addTimeButton = document.querySelector("#addTimeButton");
const selectedTimeList = document.querySelector("#selectedTimeList");
const list = document.querySelector("#reminderList");
const todayReminderList = document.querySelector("#todayReminderList");
const todayReminderEmpty = document.querySelector("#todayReminderEmpty");
const todayReminderCount = document.querySelector("#todayReminderCount");
const larkCalendarList = document.querySelector("#larkCalendarList");
const larkCalendarEmpty = document.querySelector("#larkCalendarEmpty");
const larkCalendarCount = document.querySelector("#larkCalendarCount");
const refreshLarkCalendarButton = document.querySelector("#refreshLarkCalendarButton");
const dailyCloseout = document.querySelector("#dailyCloseout");
const closeoutCount = document.querySelector("#closeoutCount");
const closeoutEmpty = document.querySelector("#closeoutEmpty");
const closeoutList = document.querySelector("#closeoutList");
const emptyState = document.querySelector("#emptyState");
const toast = document.querySelector("#toast");
const clockText = document.querySelector("#clockText");
const permissionButton = document.querySelector("#permissionButton");
const exportButton = document.querySelector("#exportButton");
const exportRangeInput = document.querySelector("#exportRangeInput");
const importButton = document.querySelector("#importButton");
const importFile = document.querySelector("#importFile");
const issueForm = document.querySelector("#issueForm");
const issueTitleInput = document.querySelector("#issueTitleInput");
const issueModuleInput = document.querySelector("#issueModuleInput");
const issuePriorityInput = document.querySelector("#issuePriorityInput");
const issueNotesInput = document.querySelector("#issueNotesInput");
const issueImageInput = document.querySelector("#issueImageInput");
const issueDropZone = document.querySelector("#issueDropZone");
const issuePendingImages = document.querySelector("#issuePendingImages");
const issueSyncTodoInput = document.querySelector("#issueSyncTodoInput");
const issueList = document.querySelector("#issueList");
const issueEmpty = document.querySelector("#issueEmpty");
const issueCount = document.querySelector("#issueCount");
const memoForm = document.querySelector("#memoForm");
const memoTextInput = document.querySelector("#memoTextInput");
const memoImageInput = document.querySelector("#memoImageInput");
const memoDropZone = document.querySelector("#memoDropZone");
const memoPendingImages = document.querySelector("#memoPendingImages");
const memoList = document.querySelector("#memoList");
const memoEmpty = document.querySelector("#memoEmpty");
const memoCount = document.querySelector("#memoCount");
const projectForm = document.querySelector("#projectForm");
const projectNameInput = document.querySelector("#projectNameInput");
const projectTypeInput = document.querySelector("#projectTypeInput");
const projectOwnerInput = document.querySelector("#projectOwnerInput");
const projectNextStepInput = document.querySelector("#projectNextStepInput");
const projectTodayList = document.querySelector("#projectTodayList");
const projectTodayEmpty = document.querySelector("#projectTodayEmpty");
const projectTodayCount = document.querySelector("#projectTodayCount");
const projectItemList = document.querySelector("#projectItemList");
const projectItemEmpty = document.querySelector("#projectItemEmpty");
const projectItemCount = document.querySelector("#projectItemCount");
const projectList = document.querySelector("#projectList");
const projectEmpty = document.querySelector("#projectEmpty");
const projectCount = document.querySelector("#projectCount");
const projectDetail = document.querySelector("#projectDetail");
const calendarMonthInput = document.querySelector("#calendarMonthInput");
const calendarProjectFilter = document.querySelector("#calendarProjectFilter");
const calendarProjectCount = document.querySelector("#calendarProjectCount");
const calendarProjectCards = document.querySelector("#calendarProjectCards");
const calendarProjectExpanded = document.querySelector("#calendarProjectExpanded");
const calendarMain = document.querySelector("#calendarMain");
const calendarNodeDetail = document.querySelector("#calendarNodeDetail");
const alarmOverlay = document.querySelector("#alarmOverlay");
const alarmTitle = document.querySelector("#alarmTitle");
const alarmTime = document.querySelector("#alarmTime");
const alarmBody = document.querySelector("#alarmBody");
const monthlyView = document.querySelector("#monthlyView");
const monthlyForm = document.querySelector("#monthlyForm");
const monthlyGroupInput = document.querySelector("#monthlyGroupInput");
const monthlyTitleInput = document.querySelector("#monthlyTitleInput");
const monthlyNotesInput = document.querySelector("#monthlyNotesInput");
const monthlyGroupOptions = document.querySelector("#monthlyGroupOptions");
const monthlyGroups = document.querySelector("#monthlyGroups");
const monthlyEmpty = document.querySelector("#monthlyEmpty");
const monthlyMonthLabel = document.querySelector("#monthlyMonthLabel");
const monthlyProgress = document.querySelector("#monthlyProgress");

const moduleOptions = [
  "活动创建与报名",
  "补位与出席",
  "物料与打印",
  "酒吧与场地",
  "客服与反馈",
  "财务与结款",
  "技术需求",
  "人员分工",
  "市场/小红书",
  "复盘与优化",
];
const priorityOptions = ["今天必须", "重要推进", "可顺手做", "先记着"];
const statusOptions = ["未开始", "进行中", "等别人", "已完成", "需复盘", "已归档"];
const issueStatusOptions = ["待写", "已写", "先放着"];
const memoCategoryOptions = ["先记着", "要推进", "要盯时间", "固定流程", "待写 Issue"];
const memoStatusOptions = ["待整理", "已读待判断", "待讨论", "已整理", "已归档", "先放着"];
const projectTypeOptions = ["运营项目", "技术需求", "场地/物料", "客服反馈", "市场内容", "其他"];
const projectStatusOptions = ["推进中", "等别人", "待拆 Todo", "暂停", "已完成", "已归档"];
const projectItemStatusOptions = ["资料", "待拆", "已吸收", "已拆 Todo", "已生成 Todo", "已处理", "已归档"];
const calendarProjectColors = ["#f8d66d", "#93d9a3", "#8fc7ff", "#f5a7c8", "#c5b4ff", "#ffbd80", "#85d9d1", "#d8df75"];
const calendarActivityColors = {
  bar: "#f6c453",
  restaurant: "#78c98e",
  afternoon_tea: "#8fc7ff",
  default: "#c5b4ff",
};
const calendarActivityTypeLabels = {
  bar: "酒局",
  restaurant: "饭局",
  afternoon_tea: "下午茶",
};
const defaultProjectStages = ["时间节点"];

let reminders = loadReminders();
let todos = loadTodos();
let issueDrafts = loadIssueDrafts();
let memoItems = loadMemoItems();
let projects = loadProjects();
let projectItems = loadProjectItems();
let larkCalendarRecords = loadLarkCalendarRecords();
let t46OpenEvents = loadT46OpenEvents();
let monthlyItems = loadMonthlyItems();
let monthlyChecks = loadMonthlyChecks();
let deletedRecords = loadDeletedRecords();
let localChangeCounter = 0;
let savedChangeCounter = 0;
let serverRefreshInFlight = false;
let monthlyMonthCursor = toDateKey(new Date()).slice(0, 7);
let editingMonthlyItemId = null;
let appState = loadAppState();
let toastTimer;
let expandedTodoId = null;
let expandedMemoId = null;
let expandedProjectItemId = null;
let selectedProjectId = null;
let calendarSelectedProjectId = null;
let calendarExpandedProjectId = null;
let calendarViewMode = "stage";
let calendarMonthCursor = toDateKey(new Date()).slice(0, 7);
let selectedCalendarNodeId = null;
let selectedCalendarActivityGroupKey = null;
let expandedLarkCalendarId = null;
let fileSaveTimer;
let fileHydrationPending = canUseFileStorage();
let fileSaveRequestedDuringHydration = false;
let fileRevision = null;
let fileSaveInFlight = false;
let fileSaveQueued = false;
let pendingIssueScreenshots = [];
let pendingMemoScreenshots = [];
let pendingMemoAttachments = [];
let selectedMemoCategory = "先记着";
let selectedMemoStatus = "待整理";
let memoFilter = "due";
let draggedTodoId = null;
let larkCalendarEvents = [];
let larkCalendarStatus = "idle";
let larkCalendarError = "";
let larkCalendarHint = "";
let activeAlarm = null;

function switchTab(tabName) {
  document.body.dataset.activeTab = tabName;
  const heroTitleEl = document.getElementById("heroTitle");
  const tabLabels = {
    today: "今日工作台",
    calendar: "工作日历",
    projects: "项目跟进",
    memos: "先放这儿",
    issues: "待写 Issue",
    monthly: "月度清单",
    review: "日程回顾",
    reminders: "固定提醒设置",
  };
  if (heroTitleEl && tabLabels[tabName]) {
    heroTitleEl.textContent = tabLabels[tabName];
  }
  for (const button of tabButtons) {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
    if (isActive && typeof button.scrollIntoView === "function") {
      button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }
  for (const section of viewSections) {
    section.classList.toggle("is-active", section.dataset.view === tabName);
  }
  if (tabName === "today") {
    requestAnimationFrame(() => todoInput.focus());
  }
  if (tabName === "issues") {
    requestAnimationFrame(() => issueTitleInput?.focus());
  }
  if (tabName === "memos") {
    requestAnimationFrame(() => memoTextInput?.focus());
  }
  if (tabName === "projects") {
    renderProjects();
    requestAnimationFrame(() => projectNameInput?.focus());
  }
  if (tabName === "calendar") {
    renderWorkCalendar();
  }
  if (tabName === "monthly") {
    renderMonthlyChecklist();
  }
}

function loadReminders() {
  try {
    return (JSON.parse(localStorage.getItem(STORAGE_KEY)) || []).map(normalizeReminder);
  } catch {
    return [];
  }
}

function getReminderDays(reminder) {
  const rawDays = Array.isArray(reminder.days) ? reminder.days : [reminder.day];
  return [...new Set(rawDays.map(Number).filter((day) => day >= 0 && day <= 6))].sort((a, b) => a - b);
}

function getReminderTimes(reminder) {
  const rawTimes = reminder.schedules
    ? getReminderSchedules(reminder).map((schedule) => schedule.time)
    : Array.isArray(reminder.times) ? reminder.times : [reminder.time];
  const times = rawTimes
    .map((time) => String(time || "").trim())
    .filter((time) => /^\d{2}:\d{2}$/.test(time));
  return [...new Set(times)].sort((a, b) => a.localeCompare(b));
}

function getReminderSchedules(reminder) {
  const rawSchedules = Array.isArray(reminder.schedules)
    ? reminder.schedules
    : getReminderDays(reminder).flatMap((day) => getReminderTimes({ time: reminder.time, times: reminder.times }).map((time) => ({ day, time })));
  const schedules = rawSchedules
    .map((schedule) => ({
      day: Number(schedule.day),
      time: String(schedule.time || "").trim(),
    }))
    .filter((schedule) => schedule.day >= 0 && schedule.day <= 6 && /^\d{2}:\d{2}$/.test(schedule.time));
  const deduped = new Map();
  for (const schedule of schedules) {
    deduped.set(`${schedule.day}-${schedule.time}`, schedule);
  }
  return [...deduped.values()].sort((a, b) => a.day - b.day || a.time.localeCompare(b.time));
}

function normalizeReminder(reminder) {
  const schedules = getReminderSchedules(reminder);
  const days = [...new Set(schedules.map((schedule) => schedule.day))].sort((a, b) => a - b);
  const times = [...new Set(schedules.map((schedule) => schedule.time))].sort((a, b) => a.localeCompare(b));
  return {
    ...reminder,
    days: days.length ? days : [5],
    times: times.length ? times : ["17:00"],
    schedules: schedules.length ? schedules : [{ day: 5, time: "17:00" }],
    firedKeys: Array.isArray(reminder.firedKeys) ? reminder.firedKeys : [],
    completedDates: Array.isArray(reminder.completedDates) ? reminder.completedDates : [],
    completedKeys: Array.isArray(reminder.completedKeys) ? reminder.completedKeys : [],
    skippedKeys: Array.isArray(reminder.skippedKeys) ? reminder.skippedKeys : [],
    snoozedAlarms: Array.isArray(reminder.snoozedAlarms) ? reminder.snoozedAlarms : [],
    day: undefined,
    time: undefined,
  };
}

let storageQuotaWarned = false;

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    if (!storageQuotaWarned) {
      storageQuotaWarned = true;
      const isQuota = error?.name === "QuotaExceededError" || error?.code === 22;
      if (typeof showToast === "function") {
        showToast(isQuota
          ? "浏览器本地缓存空间已满，改动仍会尝试保存到本地文件。"
          : "浏览器暂不支持本地缓存，改动仍会尝试保存到本地文件。");
      }
    }
    return false;
  }
}

function saveReminders() {
  safeStorageSet(STORAGE_KEY, JSON.stringify(reminders));
  saveToFileSoon();
}

function loadAppState() {
  try {
    return JSON.parse(localStorage.getItem(APP_STATE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveAppState() {
  safeStorageSet(APP_STATE_KEY, JSON.stringify(appState));
}

function normalizeTodo(todo) {
  return {
    owner: "我",
    notes: "",
    ideas: "",
    screenshots: [],
    needsReview: false,
    status: "未开始",
    sortOrder: null,
    stageId: "",
    reminderDays: -1,
    ...todo,
    screenshots: normalizeScreenshots(todo.screenshots),
  };
}

function loadTodos() {
  try {
    return (JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || []).map(normalizeTodo);
  } catch {
    return [];
  }
}

function saveTodos() {
  safeStorageSet(TODO_STORAGE_KEY, JSON.stringify(todos));
  saveToFileSoon();
}

function normalizeScreenshots(screenshots) {
  if (!Array.isArray(screenshots)) return [];
  return screenshots
    .map((screenshot) => ({
      id: screenshot.id || uid(),
      name: screenshot.name || "截图",
      src: screenshot.src || screenshot.dataUrl || "",
      createdAt: screenshot.createdAt || new Date().toISOString(),
    }))
    .filter((screenshot) => screenshot.src);
}

function normalizeMemoAttachments(attachments) {
  if (!Array.isArray(attachments)) return [];
  return attachments
    .map((attachment) => ({
      id: attachment.id || uid(),
      name: attachment.name || "附件",
      type: attachment.type || "text/markdown",
      content: attachment.content || "",
      createdAt: attachment.createdAt || new Date().toISOString(),
    }))
    .filter((attachment) => attachment.content);
}

function normalizeIssueDraft(issue) {
  return {
    id: issue.id || uid(),
    title: issue.title || "待写 Issue",
    module: issue.module || "技术需求",
    priority: issue.priority || "先记着",
    notes: issue.notes || "",
    status: issue.status || "待写",
    linkedTodoId: issue.linkedTodoId || null,
    screenshots: normalizeScreenshots(issue.screenshots),
    createdAt: issue.createdAt || new Date().toISOString(),
    updatedAt: issue.updatedAt || issue.createdAt || new Date().toISOString(),
  };
}

function loadIssueDrafts() {
  try {
    return (JSON.parse(localStorage.getItem(ISSUE_STORAGE_KEY)) || []).map(normalizeIssueDraft);
  } catch {
    return [];
  }
}

function saveIssueDrafts() {
  safeStorageSet(ISSUE_STORAGE_KEY, JSON.stringify(issueDrafts));
  saveToFileSoon();
}

function getDefaultMemoReviewDate(status = selectedMemoStatus) {
  const today = new Date();
  if (status === "待讨论") return toDateKey(addDays(today, 1));
  return toDateKey(getNextMonday(today));
}

function normalizeMemoItem(item) {
  const status = memoStatusOptions.includes(item.status) ? item.status : "待整理";
  const category = memoCategoryOptions.includes(item.category) ? item.category : "先记着";
  return {
    id: item.id || uid(),
    title: item.title || "先放这儿",
    body: item.body || "",
    category,
    status,
    module: item.module || "",
    reviewDate: item.reviewDate || getDefaultMemoReviewDate(status),
    postponeCount: Number.isFinite(Number(item.postponeCount)) ? Number(item.postponeCount) : 0,
    linkedTodoId: item.linkedTodoId || null,
    linkedIssueId: item.linkedIssueId || null,
    sourceTodoId: item.sourceTodoId || null,
    projectId: item.projectId || null,
    projectItemId: item.projectItemId || null,
    logs: Array.isArray(item.logs) ? item.logs : [],
    flags: Array.isArray(item.flags) ? item.flags : [],
    screenshots: normalizeScreenshots(item.screenshots),
    attachments: normalizeMemoAttachments(item.attachments),
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt || item.createdAt || new Date().toISOString(),
  };
}

function loadMemoItems() {
  try {
    return (JSON.parse(localStorage.getItem(MEMO_STORAGE_KEY)) || []).map(normalizeMemoItem);
  } catch {
    return [];
  }
}

function saveMemoItems() {
  safeStorageSet(MEMO_STORAGE_KEY, JSON.stringify(memoItems));
  saveToFileSoon();
}

function getProjectDefaultColor(seed = "") {
  const text = String(seed || "");
  const total = [...text].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return calendarProjectColors[total % calendarProjectColors.length];
}

function normalizeProjectStages(stages) {
  const rawStages = Array.isArray(stages) && stages.length
    ? stages
    : defaultProjectStages.map((name, index) => ({ id: `stage-${index}`, name, order: index }));
  return rawStages.map((stage, index) => ({
    id: stage.id || `stage-${index}`,
    name: stage.name || defaultProjectStages[index] || `阶段 ${index + 1}`,
    order: Number.isFinite(Number(stage.order)) ? Number(stage.order) : index,
  })).sort((a, b) => a.order - b.order);
}

function createProjectStage(name, order = 0) {
  return {
    id: `stage-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: name || `阶段 ${order + 1}`,
    order,
  };
}

function getStageFallbackId(project, excludedStageId = "") {
  return (project?.stages || []).find((stage) => stage.id !== excludedStageId)?.id || "";
}

function normalizeProject(project = {}) {
  const now = new Date().toISOString();
  const id = project.id || uid();
  const status = projectStatusOptions.includes(project.status) ? project.status : "推进中";
  return {
    id,
    name: project.name || "未命名项目",
    type: projectTypeOptions.includes(project.type) ? project.type : "运营项目",
    status,
    owner: project.owner || "我",
    nextStep: project.nextStep || "",
    color: project.color || getProjectDefaultColor(project.name || id),
    date: /^\d{4}-\d{2}-\d{2}$/.test(project.date || "") ? project.date : "",
    notes: project.notes || "",
    stages: normalizeProjectStages(project.stages),
    logs: Array.isArray(project.logs) ? project.logs : [],
    archivedAt: project.archivedAt || (["已完成", "已归档"].includes(status) ? project.updatedAt || now : ""),
    createdAt: project.createdAt || now,
    updatedAt: project.updatedAt || project.createdAt || now,
  };
}

function loadProjects() {
  try {
    return (JSON.parse(localStorage.getItem(PROJECT_STORAGE_KEY)) || []).map(normalizeProject);
  } catch {
    return [];
  }
}

function saveProjects() {
  safeStorageSet(PROJECT_STORAGE_KEY, JSON.stringify(projects));
  saveToFileSoon();
}

function normalizeProjectItem(item = {}) {
  const now = new Date().toISOString();
  const kind = ["material", "breakdown"].includes(item.kind)
    ? item.kind
    : item.status === "先放着" ? "material" : "breakdown";
  const fallbackStatus = kind === "material" ? "资料" : "待拆";
  const status = projectItemStatusOptions.includes(item.status) ? item.status : fallbackStatus;
  const splitTodoIds = Array.isArray(item.splitTodoIds)
    ? item.splitTodoIds
    : item.linkedTodoId ? [item.linkedTodoId] : [];
  return {
    id: item.id || uid(),
    projectId: item.projectId || "",
    title: item.title || getMemoTitle(item.body || "") || "待拆事项",
    body: item.body || "",
    kind,
    status,
    owner: item.owner || "我",
    reviewDate: item.reviewDate || "",
    sourceMemoId: item.sourceMemoId || null,
    linkedTodoId: item.linkedTodoId || null,
    splitTodoIds,
    done: Boolean(item.done) || ["已吸收", "已拆 Todo", "已生成 Todo", "已处理", "已归档"].includes(status),
    screenshots: normalizeScreenshots(item.screenshots),
    attachments: normalizeMemoAttachments(item.attachments),
    logs: Array.isArray(item.logs) ? item.logs : [],
    createdAt: item.createdAt || now,
    updatedAt: item.updatedAt || item.createdAt || now,
  };
}

function loadProjectItems() {
  try {
    return (JSON.parse(localStorage.getItem(PROJECT_ITEM_STORAGE_KEY)) || []).map(normalizeProjectItem);
  } catch {
    return [];
  }
}

function saveProjectItems() {
  safeStorageSet(PROJECT_ITEM_STORAGE_KEY, JSON.stringify(projectItems));
  saveToFileSoon();
}

function normalizeLarkCalendarRecord(record) {
  return {
    key: record.key || uid(),
    status: record.status || "未完成",
    notes: record.notes || "",
    ideas: record.ideas || "",
    updatedAt: record.updatedAt || new Date().toISOString(),
  };
}

function getDateFromDateTime(value) {
  const text = String(value || "");
  const match = text.match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : "";
}

function getTimeFromDateTime(value) {
  const text = String(value || "");
  const match = text.match(/T(\d{2}:\d{2})/);
  if (match) return match[1];
  const fallback = text.match(/\b(\d{1,2}:\d{2})\b/);
  return fallback ? fallback[1].padStart(5, "0") : "";
}

function normalizeActivityType(eventType = "") {
  const type = String(eventType || "").trim();
  if (type === "bar" || /酒局/.test(type)) return "bar";
  if (type === "restaurant" || /饭局|餐/.test(type)) return "restaurant";
  if (type === "afternoon_tea" || /下午茶|午后/.test(type)) return "afternoon_tea";
  return type || "default";
}

function normalizeT46OpenEvent(event = {}) {
  const startTime = event.startTime || event.start_time || "";
  const eventType = normalizeActivityType(event.eventType || event.event_type);
  return {
    id: String(event.id || event.eventId || event.event_id || uid()),
    name: event.name || event.title || "未命名活动",
    city: event.city || "",
    date: /^\d{4}-\d{2}-\d{2}$/.test(event.date || "") ? event.date : getDateFromDateTime(startTime),
    time: /^\d{1,2}:\d{2}$/.test(event.time || "") ? String(event.time).padStart(5, "0") : getTimeFromDateTime(startTime),
    eventType,
    syncedAt: event.syncedAt || new Date().toISOString(),
  };
}

function loadT46OpenEvents() {
  try {
    return (JSON.parse(localStorage.getItem(T46_EVENT_STORAGE_KEY)) || []).map(normalizeT46OpenEvent);
  } catch {
    return [];
  }
}

function saveT46OpenEvents() {
  safeStorageSet(T46_EVENT_STORAGE_KEY, JSON.stringify(t46OpenEvents));
  safeStorageSet(MONTHLY_ITEM_STORAGE_KEY, JSON.stringify(monthlyItems));
  safeStorageSet(MONTHLY_CHECK_STORAGE_KEY, JSON.stringify(monthlyChecks));
  safeStorageSet(DELETED_RECORDS_STORAGE_KEY, JSON.stringify(deletedRecords));
  saveToFileSoon();
}

function loadLarkCalendarRecords() {
  try {
    return (JSON.parse(localStorage.getItem(LARK_CALENDAR_STORAGE_KEY)) || []).map(normalizeLarkCalendarRecord);
  } catch {
    return [];
  }
}

function saveLarkCalendarRecords() {
  safeStorageSet(LARK_CALENDAR_STORAGE_KEY, JSON.stringify(larkCalendarRecords));
  saveToFileSoon();
}

function getLarkCalendarRecord(key) {
  let record = larkCalendarRecords.find((item) => item.key === key);
  if (!record) {
    record = normalizeLarkCalendarRecord({ key });
    larkCalendarRecords.push(record);
  }
  return record;
}

function createMemoFromTodo(todo, overrides = {}) {
  return normalizeMemoItem({
    id: uid(),
    title: todo.title,
    body: [richToText(todo.notes), richToText(todo.ideas)].filter(Boolean).join("\n\n"),
    category: "先记着",
    status: "待整理",
    module: todo.module || "",
    reviewDate: getDefaultMemoReviewDate("待整理"),
    screenshots: todo.screenshots || [],
    flags: ["来自 Todo"],
    sourceTodoId: todo.id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...overrides,
  });
}

function migrateInboxTodosToMemos() {
  const inboxTodos = todos.filter((todo) => !todo.date);
  if (!inboxTodos.length) return false;
  for (const todo of inboxTodos) {
    const exists = memoItems.some((memo) => memo.sourceTodoId === todo.id);
    if (!exists) {
      memoItems.push(createMemoFromTodo(todo));
    }
  }
  markDeleted("todos", inboxTodos.map((todo) => todo.id));
  todos = todos.filter((todo) => todo.date);
  return true;
}

// ---------- 删除标记（tombstone） ----------
// deletedRecords = { todos: { id: deletedAtISO }, ... }。服务器合并时会丢掉这些 id，避免旧页面把删掉的记录救回来。
function normalizeDeletedRecords(value) {
  const result = {};
  if (!value || typeof value !== "object" || Array.isArray(value)) return result;
  for (const key of TOMBSTONE_COLLECTIONS) {
    const entries = value[key];
    if (!entries || typeof entries !== "object") continue;
    const clean = {};
    for (const [id, deletedAt] of Object.entries(entries)) {
      if (id && deletedAt) clean[id] = String(deletedAt);
    }
    if (Object.keys(clean).length) result[key] = clean;
  }
  return result;
}

function loadDeletedRecords() {
  try {
    return normalizeDeletedRecords(JSON.parse(localStorage.getItem(DELETED_RECORDS_STORAGE_KEY)) || {});
  } catch {
    return {};
  }
}

function mergeDeletedRecords(serverValue = {}, localValue = {}) {
  const result = normalizeDeletedRecords(serverValue);
  for (const [key, entries] of Object.entries(normalizeDeletedRecords(localValue))) {
    const target = result[key] || (result[key] = {});
    for (const [id, deletedAt] of Object.entries(entries)) {
      if (!target[id] || Date.parse(deletedAt) > Date.parse(target[id])) target[id] = deletedAt;
    }
  }
  return result;
}

function markDeleted(collection, ids) {
  const list = Array.isArray(ids) ? ids : [ids];
  const now = new Date().toISOString();
  const bucket = deletedRecords[collection] || (deletedRecords[collection] = {});
  for (const id of list) {
    if (id) bucket[String(id)] = now;
  }
}

function isTombstoned(collection, record) {
  const deletedAt = record?.id ? deletedRecords[collection]?.[String(record.id)] : null;
  if (!deletedAt) return false;
  const recordTime = Date.parse(record.updatedAt || record.createdAt || "") || 0;
  return recordTime <= (Date.parse(deletedAt) || 0);
}

function dropTombstoned(collection, records) {
  return records.filter((record) => !isTombstoned(collection, record));
}

function applyDeletedRecordsToState() {
  todos = dropTombstoned("todos", todos);
  reminders = dropTombstoned("reminders", reminders);
  issueDrafts = dropTombstoned("issueDrafts", issueDrafts);
  memoItems = dropTombstoned("memoItems", memoItems);
  projects = dropTombstoned("projects", projects);
  projectItems = dropTombstoned("projectItems", projectItems);
  monthlyItems = dropTombstoned("monthlyItems", monthlyItems);
}
// ---------- 删除标记 end ----------

function canUseFileStorage() {
  return window.location.protocol === "http:" || window.location.protocol === "https:";
}

function getFileStatePayload() {
  return {
    todos,
    reminders,
    issueDrafts,
    memoItems,
    projects,
    projectItems,
    larkCalendarRecords,
    t46OpenEvents,
    monthlyItems,
    monthlyChecks,
    deletedRecords,
    baseSavedAt: fileRevision,
    savedAt: new Date().toISOString(),
  };
}

function mergeFileRecords(serverRecords = [], localRecords = []) {
  const merged = new Map();
  const recordKey = (record) => record?.id ? `id:${record.id}` : `value:${JSON.stringify(record)}`;
  const recordTime = (record) => String(record?.updatedAt || record?.createdAt || "");
  for (const record of serverRecords) merged.set(recordKey(record), record);
  for (const record of localRecords) {
    const key = recordKey(record);
    const serverRecord = merged.get(key);
    if (!serverRecord || recordTime(record) > recordTime(serverRecord)) merged.set(key, record);
  }
  return [...merged.values()];
}

function persistLocalCollections() {
  safeStorageSet(TODO_STORAGE_KEY, JSON.stringify(todos));
  safeStorageSet(STORAGE_KEY, JSON.stringify(reminders));
  safeStorageSet(ISSUE_STORAGE_KEY, JSON.stringify(issueDrafts));
  safeStorageSet(MEMO_STORAGE_KEY, JSON.stringify(memoItems));
  safeStorageSet(PROJECT_STORAGE_KEY, JSON.stringify(projects));
  safeStorageSet(PROJECT_ITEM_STORAGE_KEY, JSON.stringify(projectItems));
  safeStorageSet(LARK_CALENDAR_STORAGE_KEY, JSON.stringify(larkCalendarRecords));
  safeStorageSet(T46_EVENT_STORAGE_KEY, JSON.stringify(t46OpenEvents));
  safeStorageSet(MONTHLY_ITEM_STORAGE_KEY, JSON.stringify(monthlyItems));
  safeStorageSet(MONTHLY_CHECK_STORAGE_KEY, JSON.stringify(monthlyChecks));
  safeStorageSet(DELETED_RECORDS_STORAGE_KEY, JSON.stringify(deletedRecords));
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 15000) {
  if (typeof AbortController === "undefined" || !timeoutMs) {
    return fetch(url, options);
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function applyMergedFileData(data) {
  todos = mergeFileRecords(data.todos, todos).map(normalizeTodo);
  reminders = mergeFileRecords(data.reminders, reminders).map(normalizeReminder);
  issueDrafts = mergeFileRecords(data.issueDrafts, issueDrafts).map(normalizeIssueDraft);
  memoItems = mergeFileRecords(data.memoItems, memoItems).map(normalizeMemoItem);
  projects = mergeFileRecords(data.projects, projects).map(normalizeProject);
  projectItems = mergeFileRecords(data.projectItems, projectItems).map(normalizeProjectItem);
  larkCalendarRecords = mergeFileRecords(data.larkCalendarRecords, larkCalendarRecords).map(normalizeLarkCalendarRecord);
  t46OpenEvents = mergeFileRecords(data.t46OpenEvents, t46OpenEvents).map(normalizeT46OpenEvent);
  if (Array.isArray(data.monthlyItems)) monthlyItems = mergeFileRecords(data.monthlyItems, monthlyItems).map(normalizeMonthlyItem);
  if (data.monthlyChecks && typeof data.monthlyChecks === "object") monthlyChecks = mergeMonthlyChecks(data.monthlyChecks, monthlyChecks);
  deletedRecords = mergeDeletedRecords(data.deletedRecords, deletedRecords);
  applyDeletedRecordsToState();
  persistLocalCollections();
  renderTodos();
  renderMemoItems();
  renderProjects();
  renderWorkCalendar();
  renderIssueDrafts();
  renderMonthlyChecklist();
  render();
}

function setSaveStatus(state, text) {
  const badge = document.getElementById("saveStatusBadge");
  if (!badge) return;
  badge.textContent = text;
  badge.classList.toggle("is-saving", state === "saving");
  badge.classList.toggle("is-error", state === "error");
  if (state === "error") {
    badge.setAttribute("role", "button");
    badge.tabIndex = 0;
    badge.title = "点击重试保存到本地文件";
  } else {
    badge.removeAttribute("role");
    badge.removeAttribute("tabindex");
    badge.title = "本地数据持久化状态";
  }
}

async function flushFileSave({ useBeacon = false } = {}) {
  if (!canUseFileStorage() || fileHydrationPending) return;
  clearTimeout(fileSaveTimer);
  fileSaveTimer = undefined;
  const body = JSON.stringify(getFileStatePayload());
  const changeCounterAtSend = localChangeCounter;
  if (useBeacon && navigator.sendBeacon) {
    navigator.sendBeacon("/api/data", new Blob([body], { type: "application/json" }));
    return;
  }
  if (fileSaveInFlight) {
    fileSaveQueued = true;
    return;
  }
  fileSaveInFlight = true;
  setSaveStatus("saving", "保存中…");
  try {
    const response = await fetchWithTimeout("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    }, 15000);
    if (!response.ok) {
      const err = new Error(`Save failed: ${response.status}`);
      err.status = response.status;
      throw err;
    }
    const result = await response.json();
    fileRevision = result.savedAt || fileRevision;
    savedChangeCounter = Math.max(savedChangeCounter, changeCounterAtSend);
    setSaveStatus("saved", "已本地保存");
    if (result.merged && result.data) applyMergedFileData(result.data);
  } catch (error) {
    setSaveStatus("error", "保存失败 · 点击重试");
    if (error?.status === 413) {
      showToast("数据体积超过本地保存上限，请清理过大截图后点击顶部状态重试。");
    } else if (error?.status === 400) {
      showToast("本地保存请求格式异常，请稍后点击顶部状态重试。");
    } else if (error?.name === "AbortError") {
      showToast("本地保存超时，已暂存浏览器；点击顶部状态可重试。");
    } else {
      showToast("本地数据文件暂时没有保存成功，请确认工作台服务在运行（点击顶部状态可重试）。");
    }
  } finally {
    fileSaveInFlight = false;
    if (fileSaveQueued) {
      fileSaveQueued = false;
      flushFileSave();
    }
  }
}

function saveToFileSoon() {
  if (!canUseFileStorage()) {
    setSaveStatus("saved", "已存浏览器");
    return;
  }
  setSaveStatus("saving", "保存中…");
  localChangeCounter += 1;
  if (fileHydrationPending) {
    fileSaveRequestedDuringHydration = true;
    return;
  }
  clearTimeout(fileSaveTimer);
  fileSaveTimer = setTimeout(() => flushFileSave(), 250);
}

function persistAll() {
  persistLocalCollections();
  saveToFileSoon();
}

let fileHydrationFailed = false;

function reviveSnapshotFromTombstone(collection, snapshot) {
  const deletedAt = deletedRecords[collection]?.[snapshot.id];
  if (deletedRecords[collection]) {
    delete deletedRecords[collection][snapshot.id];
  }
  const revivedTs = Math.max(Date.now(), (Date.parse(deletedAt || "") || 0) + 1);
  snapshot.updatedAt = new Date(revivedTs).toISOString();
  return snapshot;
}

async function hydrateFromFile() {
  if (!canUseFileStorage()) return;
  try {
    const response = await fetchWithTimeout("/api/data", { cache: "no-store" }, 12000);
    if (!response.ok) {
      fileHydrationFailed = true;
      setSaveStatus("error", "读取失败 · 点击重试");
      showToast(`读取本地数据失败（${response.status}），先使用浏览器里的缓存数据。`);
      return;
    }
    fileHydrationFailed = false;
    setSaveStatus("saved", "已本地保存");
    const data = await response.json();
    fileRevision = data.savedAt || null;
    const serverHasData = Boolean(data.savedAt) || Boolean(data.todos?.length) || Boolean(data.reminders?.length) || Boolean(data.issueDrafts?.length) || Boolean(data.memoItems?.length) || Boolean(data.projects?.length) || Boolean(data.projectItems?.length) || Boolean(data.larkCalendarRecords?.length) || Boolean(data.t46OpenEvents?.length);

    if (serverHasData) {
      todos = (Array.isArray(data.todos) ? data.todos : []).map(normalizeTodo);
      reminders = (Array.isArray(data.reminders) ? data.reminders : []).map(normalizeReminder);
      issueDrafts = (Array.isArray(data.issueDrafts) ? data.issueDrafts : []).map(normalizeIssueDraft);
      memoItems = (Array.isArray(data.memoItems) ? data.memoItems : []).map(normalizeMemoItem);
      projects = (Array.isArray(data.projects) ? data.projects : []).map(normalizeProject);
      projectItems = (Array.isArray(data.projectItems) ? data.projectItems : []).map(normalizeProjectItem);
      larkCalendarRecords = (Array.isArray(data.larkCalendarRecords) ? data.larkCalendarRecords : []).map(normalizeLarkCalendarRecord);
      t46OpenEvents = (Array.isArray(data.t46OpenEvents) ? data.t46OpenEvents : []).map(normalizeT46OpenEvent);
      if (Array.isArray(data.monthlyItems)) monthlyItems = data.monthlyItems.map(normalizeMonthlyItem);
      if (data.monthlyChecks && typeof data.monthlyChecks === "object") monthlyChecks = normalizeMonthlyChecks(data.monthlyChecks);
      deletedRecords = mergeDeletedRecords(data.deletedRecords, deletedRecords);
      applyDeletedRecordsToState();
      const migrated = migrateInboxTodosToMemos();
      persistLocalCollections();
      fileSaveRequestedDuringHydration = migrated;
      renderTodos();
      renderMemoItems();
      renderProjects();
      renderWorkCalendar();
      renderIssueDrafts();
      renderMonthlyChecklist();
      render();
      return;
    }

    if (todos.length || reminders.length || issueDrafts.length || memoItems.length || projects.length || projectItems.length || larkCalendarRecords.length || t46OpenEvents.length) {
      fileSaveRequestedDuringHydration = true;
    }
  } catch {
    fileHydrationFailed = true;
    setSaveStatus("error", "读取失败 · 点击重试");
    showToast("暂时没读到本地数据文件，我会先使用浏览器里的数据。");
  } finally {
    fileHydrationPending = false;
    if (fileSaveRequestedDuringHydration) {
      fileSaveRequestedDuringHydration = false;
      saveToFileSoon();
    }
  }
}

function downloadText(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportData() {
  const range = getExportRange(exportRangeInput.value);
  const markdown = buildMarkdownExport(range);
  downloadText(
    `todo-workbench-${range.slug}-${toDateKey(new Date())}.md`,
    markdown,
    "text/markdown;charset=utf-8",
  );
  showToast(`已导出 ${range.label} Markdown。`);
}

async function importData(file) {
  const MAX_IMPORT_BYTES = 25 * 1024 * 1024;
  if (!file || file.size > MAX_IMPORT_BYTES) {
    showToast("导入文件过大（超过 25MB），请检查所选备份文件。");
    return;
  }
  try {
    const data = JSON.parse(await file.text());
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      showToast("导入失败：JSON 顶层结构必须是对象。");
      return;
    }
    const recognizedKeys = ["todos", "reminders", "issueDrafts", "memoItems", "projects", "projectItems", "monthlyItems", "monthlyChecks"];
    const hasRecognized = recognizedKeys.some((key) => key in data);
    if (!hasRecognized) {
      showToast("导入失败：文件中未找到工作台数据字段。");
      return;
    }
    const incomingTodos = Array.isArray(data.todos) ? data.todos : [];
    const incomingMemos = Array.isArray(data.memoItems) ? data.memoItems : [];
    const incomingProjects = Array.isArray(data.projects) ? data.projects : [];
    const incomingReminders = Array.isArray(data.reminders) ? data.reminders : [];
    const ok = window.confirm(
      `确认导入备份？将加载 ${incomingTodos.length} 条待办、${incomingMemos.length} 条备忘、${incomingProjects.length} 个项目、${incomingReminders.length} 条固定提醒，并覆盖当前数据。`,
    );
    if (!ok) return;
    todos = incomingTodos.map(normalizeTodo);
    reminders = incomingReminders.map(normalizeReminder);
    issueDrafts = (Array.isArray(data.issueDrafts) ? data.issueDrafts : []).map(normalizeIssueDraft);
    memoItems = incomingMemos.map(normalizeMemoItem);
    projects = incomingProjects.map(normalizeProject);
    projectItems = (Array.isArray(data.projectItems) ? data.projectItems : []).map(normalizeProjectItem);
    t46OpenEvents = (Array.isArray(data.t46OpenEvents) ? data.t46OpenEvents : []).map(normalizeT46OpenEvent);
    if (Array.isArray(data.monthlyItems)) monthlyItems = data.monthlyItems.map(normalizeMonthlyItem);
    if (data.monthlyChecks && typeof data.monthlyChecks === "object" && !Array.isArray(data.monthlyChecks)) {
      monthlyChecks = normalizeMonthlyChecks(data.monthlyChecks);
    }
    migrateInboxTodosToMemos();
    persistAll();
    renderMonthlyChecklist();
    renderTodos();
    renderMemoItems();
    renderProjects();
    renderWorkCalendar();
    renderIssueDrafts();
    render();
    showToast("数据已导入。");
  } catch {
    showToast("导入失败，请确认选择的是工作台导出的有效 JSON 文件。");
  }
}

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function getNextMonday(from = new Date()) {
  const next = new Date(from);
  const daysUntil = ((8 - next.getDay()) % 7) || 7;
  next.setDate(next.getDate() + daysUntil);
  return next;
}

function getTargetDate() {
  const today = new Date();
  if (targetInput.value === "today") return toDateKey(today);
  if (targetInput.value === "tomorrow") {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return toDateKey(tomorrow);
  }
  return dateInput.value || toDateKey(today);
}

function getOwnerValue() {
  if (ownerInput.value !== "custom") return ownerInput.value;
  return ownerCustomInput.value.trim() || "我";
}

function resetOwnerField() {
  ownerInput.value = "我";
  ownerCustomInput.value = "";
  ownerInput.classList.remove("is-hidden");
  ownerCustomInput.classList.add("is-hidden");
}

function formatDateLabel(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const today = toDateKey(new Date());
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = toDateKey(tomorrowDate);
  const label = new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  }).format(date);
  if (dateKey === today) return `今天 ${label}`;
  if (dateKey === tomorrow) return `明天 ${label}`;
  return label;
}

function getWorkbenchDateRank(dateKey) {
  const today = toDateKey(new Date());
  if (dateKey === today) return 0;
  if (dateKey > today) return 1;
  return 2;
}

function compareWorkbenchDates(dateA, dateB) {
  const rankA = getWorkbenchDateRank(dateA);
  const rankB = getWorkbenchDateRank(dateB);
  if (rankA !== rankB) return rankA - rankB;
  if (rankA === 2) return dateB.localeCompare(dateA);
  return dateA.localeCompare(dateB);
}

function getExportRange(type) {
  const today = new Date();
  const start = new Date(today);
  const end = new Date(today);

  if (type === "month") {
    start.setDate(1);
    end.setMonth(end.getMonth() + 1, 0);
    return {
      type,
      label: "本月",
      slug: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`,
      start: toDateKey(start),
      end: toDateKey(end),
    };
  }

  if (type === "all") {
    const dated = todos.map((todo) => todo.date).filter(Boolean).sort();
    return {
      type,
      label: "全部",
      slug: "all",
      start: dated[0] || toDateKey(today),
      end: dated[dated.length - 1] || toDateKey(today),
    };
  }

  const weekday = today.getDay() || 7;
  start.setDate(today.getDate() - weekday + 1);
  end.setDate(start.getDate() + 6);
  return {
    type: "week",
    label: "本周",
    slug: `${toDateKey(start)}_${toDateKey(end)}`,
    start: toDateKey(start),
    end: toDateKey(end),
  };
}

function isTodoInExportRange(todo, range) {
  if (range.type === "all") return true;
  return Boolean(todo.date && todo.date >= range.start && todo.date <= range.end);
}

function summarizeBy(items, key) {
  return items.reduce((result, item) => {
    const value = item[key] || "未填写";
    result[value] = (result[value] || 0) + 1;
    return result;
  }, {});
}

function markdownEscape(value) {
  return String(value || "")
    .replaceAll("\\", "\\\\")
    .replaceAll("|", "\\|")
    .replaceAll("\r", "")
    .trim();
}

function formatExportDate(dateKey) {
  if (!dateKey) return "待分配";
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);
}

function formatCountSentence(counts) {
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN"));
  if (!entries.length) return "暂无记录";
  return entries.map(([name, count]) => `${name} ${count} 项`).join("，");
}

function groupTodosBy(items, key) {
  return items.reduce((result, todo) => {
    const value = todo[key] || "未填写";
    result[value] ||= [];
    result[value].push(todo);
    return result;
  }, {});
}

function getTodoContext(todo, includeDate = true) {
  const parts = [];
  if (includeDate) parts.push(formatExportDate(todo.date));
  if (todo.priority) parts.push(todo.priority);
  if (todo.owner && todo.owner !== "我") parts.push(`负责人：${todo.owner}`);
  return parts.join("，");
}

function appendReadableTodo(lines, todo, options = {}) {
  const status = isTodoFinished(todo) ? "已完成" : todo.status;
  const context = getTodoContext(todo, options.includeDate);
  const suffix = context ? `（${context}）` : "";
  lines.push(`- ${status}｜【${todo.module || "未分板块"}】${markdownEscape(todo.title)}${suffix}`);
  appendTodoNotes(lines, todo);
}

function appendTodoNotes(lines, todo) {
  const notes = richToText(todo.notes);
  const ideas = richToText(todo.ideas);
  if (notes) lines.push(`  - 备注：${markdownEscape(notes)}`);
  if (ideas) lines.push(`  - 想法：${markdownEscape(ideas)}`);
  if (todo.screenshots?.length) lines.push(`  - 截图：${todo.screenshots.length} 张`);
}

function buildMarkdownExport(range) {
  const items = todos
    .filter((todo) => isTodoInExportRange(todo, range))
    .sort((a, b) => {
      const dateA = a.date || "9999-12-31";
      const dateB = b.date || "9999-12-31";
      return dateA.localeCompare(dateB) || a.createdAt.localeCompare(b.createdAt);
    });
  const doneCount = items.filter(isTodoFinished).length;
  const pendingCount = items.length - doneCount;
  const reviewCount = items.filter((todo) => todo.needsReview || todo.status === "需复盘").length;
  const datedItems = items.filter((todo) => todo.date);
  const inboxItems = items.filter((todo) => !todo.date);
  const completedItems = items.filter(isTodoFinished);
  const openItems = items.filter((todo) => !isTodoFinished(todo));
  const reviewItems = items.filter((todo) => todo.needsReview || todo.status === "需复盘" || richToText(todo.ideas));
  const statusText = formatCountSentence(summarizeBy(items, "status"));
  const moduleText = formatCountSentence(summarizeBy(items, "module"));
  const rangeText = range.type === "all" ? `${range.start} 至 ${range.end}` : `${formatExportDate(range.start)} 至 ${formatExportDate(range.end)}`;

  const lines = [
    `# ${range.label}活动运营复盘`,
    "",
    `复盘范围：${rangeText}`,
    `导出时间：${new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium", timeStyle: "short" }).format(new Date())}`,
    "",
    "## 一句话概览",
    "",
    `这个周期一共记录了 ${items.length} 项工作，已经完成 ${doneCount} 项，还有 ${pendingCount} 项没有收尾。${reviewCount ? `其中 ${reviewCount} 项值得单独复盘。` : "目前没有特别标记为复盘的事项。"}`,
    "",
    `从状态看：${statusText}。`,
    `从业务板块看：${moduleText}。`,
    "",
  ];

  lines.push("## 已经推进完成的事", "");
  if (!completedItems.length) {
    lines.push("这个周期还没有标记完成的任务。", "");
  } else {
    const groups = groupTodosBy(completedItems, "module");
    for (const [module, group] of Object.entries(groups)) {
      lines.push(`### ${module}`, "");
      for (const todo of group) {
        appendReadableTodo(lines, todo);
      }
      lines.push("");
    }
  }

  lines.push("## 还没收尾的事", "");
  if (!openItems.length) {
    lines.push("这个周期的任务都已经收尾。", "");
  } else {
    lines.push("下面这些事项适合作为下一轮工作台的起点：", "");
    for (const todo of openItems) {
      appendReadableTodo(lines, todo);
    }
    lines.push("");
  }

  lines.push("## 值得复盘的线索", "");
  if (!reviewItems.length) {
    lines.push("没有单独标记复盘，也没有留下发散思考。", "");
  } else {
    for (const todo of reviewItems) {
      appendReadableTodo(lines, todo);
    }
    lines.push("");
  }

  const openIssues = issueDrafts.filter((issue) => issue.status !== "已写");
  lines.push("## 待写 Issue", "");
  if (!openIssues.length) {
    lines.push("当前没有待写 Issue。", "");
  } else {
    for (const issue of openIssues) {
      const suffix = [issue.priority, issue.module, `${issue.screenshots.length} 张截图`].filter(Boolean).join("，");
      lines.push(`- ${issue.status}｜${markdownEscape(issue.title)}（${suffix}）`);
      if (issue.notes) lines.push(`  - 说明：${markdownEscape(issue.notes)}`);
    }
    lines.push("");
  }

  const activeMemos = memoItems.filter((item) => !isMemoFinal(item));
  lines.push("## 备忘箱", "");
  if (!activeMemos.length) {
    lines.push("当前没有需要继续看的备忘。", "");
  } else {
    for (const item of activeMemos.sort((a, b) => a.reviewDate.localeCompare(b.reviewDate))) {
      const suffix = [item.category, item.status, `回看：${formatExportDate(item.reviewDate)}`].join("，");
      lines.push(`- ${markdownEscape(item.title)}（${suffix}）`);
      if (item.body && item.body !== item.title) lines.push(`  - 内容：${markdownEscape(item.body)}`);
      for (const log of [...(item.logs || [])].sort((a, b) => a.createdAt.localeCompare(b.createdAt))) {
        lines.push(`  - 记录（${formatExportDate(toDateKey(new Date(log.createdAt)))}）：${markdownEscape(log.text)}`);
      }
      if (item.screenshots?.length) lines.push(`  - 截图：${item.screenshots.length} 张`);
      if (item.attachments?.length) lines.push(`  - 附件：${item.attachments.map((attachment) => markdownEscape(attachment.name)).join("、")}`);
    }
    lines.push("");
  }

  const activeProjects = projects.filter((project) => !["已完成", "已归档"].includes(project.status));
  lines.push("## 项目跟进", "");
  if (!activeProjects.length) {
    lines.push("当前没有推进中的项目。", "");
  } else {
    for (const project of activeProjects.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))) {
      const openItems = sortProjectItems(getProjectOpenItems(project.id));
      lines.push(`### ${markdownEscape(project.name)}`, "");
      lines.push(`状态：${markdownEscape(project.status)}｜类型：${markdownEscape(project.type)}｜负责人：${markdownEscape(project.owner)}`);
      if (project.nextStep) lines.push(`下一步：${markdownEscape(project.nextStep)}`);
      if (!openItems.length) {
        lines.push("- 没有待拆事项。");
      } else {
        for (const item of openItems) {
          lines.push(`- ${markdownEscape(item.status)}｜${markdownEscape(item.title)}（处理：${formatExportDate(item.reviewDate)}）`);
          if (item.body) lines.push(`  - 内容：${markdownEscape(item.body)}`);
          if (item.screenshots?.length) lines.push(`  - 图片：${item.screenshots.length} 张`);
          if (item.attachments?.length) lines.push(`  - 附件：${item.attachments.map((attachment) => markdownEscape(attachment.name)).join("、")}`);
        }
      }
      lines.push("");
    }
  }

  lines.push("## 每日流水", "");
  if (!datedItems.length) {
    lines.push("- 这个范围内没有带日期的任务。", "");
  } else {
    const groups = datedItems.reduce((result, todo) => {
      result[todo.date] ||= [];
      result[todo.date].push(todo);
      return result;
    }, {});

    for (const [dateKey, group] of Object.entries(groups)) {
      const completedInDay = group.filter(isTodoFinished).length;
      lines.push(`### ${formatExportDate(dateKey)}`, "");
      lines.push(`当天记录 ${group.length} 项，完成 ${completedInDay} 项，未完成 ${group.length - completedInDay} 项。`, "");
      for (const todo of group) {
        appendReadableTodo(lines, todo, { includeDate: false });
      }
      lines.push("");
    }
  }

  if (range.type === "all" && inboxItems.length) {
    lines.push("## 待分配", "");
    for (const todo of inboxItems) {
      appendReadableTodo(lines, todo);
    }
    lines.push("");
  }

  const activeReminders = reminders.filter((reminder) => !reminder.paused);
  lines.push("## 固定提醒", "");
  if (!activeReminders.length) {
    lines.push("当前没有启用中的固定提醒。", "");
  } else {
    lines.push("当前还在启用的固定提醒：", "");
    for (const reminder of activeReminders.sort((a, b) => getNextOccurrence(a) - getNextOccurrence(b))) {
      lines.push(`- ${formatReminderSchedule(reminder)}：${markdownEscape(reminder.task)}`);
    }
    lines.push("");
  }

  return `${lines.join("\n").replace(/\n{3,}/g, "\n\n")}\n`;
}

function showToast(message, options = null) {
  clearTimeout(toastTimer);
  toast.innerHTML = "";
  const textSpan = document.createElement("span");
  textSpan.textContent = message;
  toast.append(textSpan);
  if (options && typeof options.onUndo === "function") {
    const undoBtn = document.createElement("button");
    undoBtn.type = "button";
    undoBtn.className = "toast-undo-btn";
    undoBtn.textContent = options.undoLabel || "撤销";
    undoBtn.addEventListener("click", () => {
      clearTimeout(toastTimer);
      toast.classList.remove("is-visible");
      options.onUndo();
    });
    toast.append(undoBtn);
  }
  toast.classList.add("is-visible");
  const duration = options && typeof options.onUndo === "function" ? 5600 : 4200;
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), duration);
}

function makeField(labelText, control) {
  const label = document.createElement("label");
  label.className = "field";
  const labelName = document.createElement("span");
  labelName.textContent = labelText;
  label.append(labelName, control);
  return label;
}

function makeInput(type, value, field) {
  const input = document.createElement("input");
  input.type = type;
  input.value = value || "";
  input.dataset.todoField = field;
  return input;
}

function makeSelect(value, field, options) {
  const select = document.createElement("select");
  select.dataset.todoField = field;
  for (const optionText of options) {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    option.selected = optionText === value;
    select.append(option);
  }
  return select;
}

function makeTextarea(value, field, placeholder) {
  const textarea = document.createElement("textarea");
  textarea.value = value || "";
  textarea.placeholder = placeholder;
  textarea.dataset.todoField = field;
  return textarea;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isLikelyHtml(value) {
  return /<\/?[a-z][\s\S]*>/i.test(value || "");
}

function plainTextToHtml(value) {
  return escapeHtml(value)
    .split(/\n{2,}/)
    .map((block) => `<p>${block.replaceAll("\n", "<br>")}</p>`)
    .join("");
}

function normalizeRichValue(value) {
  if (!value) return "";
  return isLikelyHtml(value) ? sanitizeRichHtml(value) : plainTextToHtml(value);
}

function sanitizeRichHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html || "";
  const allowedTags = new Set(["B", "STRONG", "I", "EM", "U", "MARK", "OL", "UL", "LI", "P", "BR", "DIV", "BLOCKQUOTE", "IMG"]);

  function clean(node) {
    for (const child of [...node.childNodes]) {
      if (child.nodeType === Node.TEXT_NODE) continue;
      if (child.nodeType !== Node.ELEMENT_NODE || !allowedTags.has(child.tagName)) {
        child.replaceWith(document.createTextNode(child.textContent || ""));
        continue;
      }

      if (child.tagName === "IMG") {
        const src = child.getAttribute("src") || "";
        const alt = child.getAttribute("alt") || "备注图片";
        for (const attribute of [...child.attributes]) child.removeAttribute(attribute.name);
        if (src.startsWith("/issue-assets/") || src.startsWith("data:image/")) {
          child.setAttribute("src", src);
          child.setAttribute("alt", alt);
        } else {
          child.remove();
          continue;
        }
      } else {
        for (const attribute of [...child.attributes]) {
          child.removeAttribute(attribute.name);
        }
      }
      clean(child);
    }
  }

  clean(template.content);
  return template.innerHTML;
}

function richToText(html) {
  const template = document.createElement("template");
  template.innerHTML = sanitizeRichHtml(html || "");
  for (const br of [...template.content.querySelectorAll("br")]) br.replaceWith("\n");
  for (const block of [...template.content.querySelectorAll("p, div, li, blockquote")]) {
    block.append(document.createTextNode("\n"));
  }
  return (template.content.textContent || "").trim();
}

function makeRichEditor(value, field, placeholder) {
  const editorWrap = document.createElement("div");
  editorWrap.className = "rich-editor";

  const toolbar = document.createElement("div");
  toolbar.className = "rich-toolbar";
  toolbar.innerHTML = `
    <button class="rich-tool" type="button" data-rich-action="bold" title="加粗"><strong>B</strong></button>
    <button class="rich-tool" type="button" data-rich-action="insertOrderedList" title="编号列表">1.</button>
    <button class="rich-tool" type="button" data-rich-action="insertUnorderedList" title="项目符号">•</button>
    <button class="rich-tool" type="button" data-rich-action="highlight" title="高亮">高亮</button>
    <button class="rich-tool" type="button" data-rich-action="formatBlock" data-rich-value="blockquote" title="想法块">想法块</button>
    <button class="rich-tool" type="button" data-rich-action="image" title="插入图片">图片</button>
  `;

  const editor = document.createElement("div");
  editor.className = "rich-input";
  editor.contentEditable = "true";
  editor.setAttribute("role", "textbox");
  editor.setAttribute("aria-multiline", "true");
  editor.setAttribute("aria-label", field === "notes" ? "任务备注" : field === "ideas" ? "发散思考" : "富文本编辑");
  editor.dataset.todoRichField = field;
  editor.dataset.placeholder = placeholder;
  editor.innerHTML = normalizeRichValue(value);

  editorWrap.append(toolbar, editor);
  return editorWrap;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const MAX_MARKDOWN_BYTES = 2 * 1024 * 1024;

async function storeIssueImage(file) {
  if (file.size > MAX_IMAGE_BYTES) {
    showToast(`图片「${file.name || "截图"}」超过 10MB，已跳过。`);
    return null;
  }
  let dataUrl;
  try {
    dataUrl = await readFileAsDataUrl(file);
  } catch {
    showToast(`读取图片「${file.name || "截图"}」失败。`);
    return null;
  }
  if (canUseFileStorage()) {
    try {
      const response = await fetchWithTimeout("/api/issue-assets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: uid(),
          filename: file.name,
          type: file.type,
          dataUrl,
        }),
      }, 15000);
      if (response.ok) {
        const payload = await response.json();
        return payload.src || dataUrl;
      }
      showToast("截图未能写入本地文件夹，已暂存在浏览器内。");
    } catch {
      showToast("截图暂时没有写进本地文件夹，我先保存在浏览器里。");
    }
  }
  return dataUrl;
}

function insertHtmlAtCaret(editor, html) {
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) {
    editor.focus();
    document.execCommand("insertHTML", false, html);
    return;
  }
  let range = selection.getRangeAt(0);
  if (!editor.contains(range.commonAncestorContainer)) {
    editor.focus();
    range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  range.deleteContents();
  const template = document.createElement("template");
  template.innerHTML = html;
  const fragment = template.content;
  const lastNode = fragment.lastChild;
  range.insertNode(fragment);
  if (lastNode) {
    range.setStartAfter(lastNode);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

async function insertImagesIntoRichEditor(editor, files) {
  const imageFiles = [...files].filter((file) => file.type.startsWith("image/"));
  if (!imageFiles.length) return false;
  editor.focus();
  let inserted = 0;
  for (const file of imageFiles) {
    const src = await storeIssueImage(file);
    if (!src) continue;
    insertHtmlAtCaret(editor, `<p><img src="${escapeHtml(src)}" alt="${escapeHtml(file.name || "备注图片")}"></p>`);
    inserted += 1;
  }
  if (!inserted) return false;
  editor.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertFromPaste" }));
  showToast(`${inserted} 张图片已放进任务备注。`);
  return true;
}

async function addIssueFiles(files) {
  const imageFiles = [...files].filter((file) => file.type.startsWith("image/"));
  if (!imageFiles.length) {
    showToast("这里只接收截图图片。");
    return;
  }

  for (const file of imageFiles) {
    const src = await storeIssueImage(file);
    if (!src) continue;
    pendingIssueScreenshots.push({
      id: uid(),
      name: file.name || "截图",
      src,
      createdAt: new Date().toISOString(),
    });
  }
  renderPendingIssueScreenshots();
  showToast(`${imageFiles.length} 张截图已放进待写 Issue。`);
}

function makeScreenshotGallery(screenshots) {
  const gallery = document.createElement("div");
  gallery.className = "screenshot-gallery";
  for (const screenshot of normalizeScreenshots(screenshots)) {
    const link = document.createElement("a");
    link.href = screenshot.src;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.title = screenshot.name;

    const image = document.createElement("img");
    image.src = screenshot.src;
    image.alt = screenshot.name || "Issue 截图";
    link.append(image);
    gallery.append(link);
  }
  return gallery;
}

function renderPendingIssueScreenshots() {
  issuePendingImages.innerHTML = "";
  if (!pendingIssueScreenshots.length) return;

  for (const screenshot of pendingIssueScreenshots) {
    const item = document.createElement("div");
    item.className = "pending-image";
    item.innerHTML = `
      <img src="${screenshot.src}" alt="${escapeHtml(screenshot.name)}" />
      <button class="small-button" type="button" data-pending-image-remove="${screenshot.id}">移除</button>
    `;
    issuePendingImages.append(item);
  }
}

function getIssueTodoTitle(issue) {
  return `写 Issue：${issue.title}`;
}

function ensureIssueTodo(issue) {
  const existing = issue.linkedTodoId ? todos.find((todo) => todo.id === issue.linkedTodoId) : null;
  if (existing) {
    existing.title = getIssueTodoTitle(issue);
    existing.module = issue.module;
    existing.priority = issue.priority;
    existing.notes = issue.notes ? plainTextToHtml(issue.notes) : existing.notes;
    existing.screenshots = normalizeScreenshots(issue.screenshots);
    return existing.id;
  }

  const todo = {
    id: uid(),
    title: getIssueTodoTitle(issue),
    date: toDateKey(new Date()),
    module: issue.module,
    priority: issue.priority,
    status: "未开始",
    owner: "我",
    notes: issue.notes ? plainTextToHtml(issue.notes) : "",
    ideas: "",
    screenshots: normalizeScreenshots(issue.screenshots),
    needsReview: false,
    sourceIssueId: issue.id,
    sortOrder: Date.now(),
    createdAt: new Date().toISOString(),
  };
  todos.push(todo);
  return todo.id;
}

function resetIssueForm() {
  issueForm.reset();
  issueModuleInput.value = "技术需求";
  issuePriorityInput.value = "先记着";
  issueSyncTodoInput.checked = false;
  pendingIssueScreenshots = [];
  renderPendingIssueScreenshots();
  issueTitleInput.focus();
}

function makeIssueCard(issue) {
  const card = document.createElement("article");
  card.className = `issue-card${issue.status === "已写" ? " is-done" : ""}`;
  card.dataset.id = issue.id;

  const main = document.createElement("div");
  main.className = "issue-main";
  const title = document.createElement("p");
  title.className = "issue-title";
  title.textContent = issue.title;

  const meta = document.createElement("div");
  meta.className = "todo-meta";
  for (const text of [issue.priority, issue.module, issue.status, `${issue.screenshots.length} 张截图`]) {
    const pill = document.createElement("span");
    pill.className = text === issue.priority ? "pill priority" : "pill";
    pill.textContent = text;
    meta.append(pill);
  }

  const notes = document.createElement("textarea");
  notes.className = "issue-notes issue-notes-edit";
  notes.dataset.issueField = "notes";
  notes.placeholder = "补充说明、期望改法、影响范围、验收标准都可以写在这里";
  notes.value = issue.notes || "";
  main.append(title, meta, notes);

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.innerHTML = `
    <button class="small-button" type="button" data-issue-action="todo">${issue.linkedTodoId ? "更新 Todo" : "转 Todo"}</button>
    <button class="small-button" type="button" data-issue-action="done">${issue.status === "已写" ? "撤回" : "已写"}</button>
    <button class="small-button danger" type="button" data-issue-action="delete">删除</button>
  `;

  card.append(main, actions);
  if (issue.screenshots.length) {
    card.append(makeScreenshotGallery(issue.screenshots));
  }
  return card;
}

function renderIssueDrafts() {
  const sorted = [...issueDrafts].sort((a, b) => {
    const statusDiff = Number(a.status === "已写") - Number(b.status === "已写");
    return statusDiff || b.createdAt.localeCompare(a.createdAt);
  });

  issueList.innerHTML = "";
  issueEmpty.style.display = sorted.length ? "none" : "block";
  issueCount.textContent = `${sorted.length} 项`;
  for (const issue of sorted) {
    issueList.append(makeIssueCard(issue));
  }
}

async function addMemoFiles(files) {
  const markdownFiles = [...files].filter(isMarkdownFile);
  const imageFiles = [...files].filter((file) => file.type.startsWith("image/"));
  if (!imageFiles.length && !markdownFiles.length) {
    showToast("这里只接收截图图片或 Markdown 文件。");
    return;
  }

  let addedMarkdown = 0;
  for (const file of markdownFiles) {
    if (await addPendingMemoMarkdownAttachment(file)) addedMarkdown += 1;
  }

  let addedImages = 0;
  for (const file of imageFiles) {
    const src = await storeIssueImage(file);
    if (!src) continue;
    pendingMemoScreenshots.push({
      id: uid(),
      name: file.name || "截图",
      src,
      createdAt: new Date().toISOString(),
    });
    addedImages += 1;
  }
  renderPendingMemoScreenshots();
  const parts = [];
  if (addedMarkdown) parts.push(`${addedMarkdown} 个 Markdown 已作为附件待提交`);
  if (addedImages) parts.push(`${addedImages} 张截图已放进备忘箱`);
  if (parts.length) showToast(parts.join("，") + "。");
}

function isMarkdownFile(file) {
  const name = (file.name || "").toLowerCase();
  return name.endsWith(".md") || name.endsWith(".markdown") || file.type === "text/markdown";
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

async function addPendingMemoMarkdownAttachment(file) {
  if (file.size > MAX_MARKDOWN_BYTES) {
    showToast(`Markdown「${file.name || "附件"}」超过 2MB，已跳过。`);
    return false;
  }
  let body = "";
  try {
    body = (await readFileAsText(file)).trim();
  } catch {
    showToast(`读取文件「${file.name || "附件"}」失败。`);
    return false;
  }
  if (!body) return false;
  pendingMemoAttachments.push({
    id: uid(),
    name: file.name || "Markdown.md",
    type: file.type || "text/markdown",
    content: body,
    createdAt: new Date().toISOString(),
  });
  return true;
}

function renderPendingMemoScreenshots() {
  memoPendingImages.innerHTML = "";
  for (const screenshot of pendingMemoScreenshots) {
    const item = document.createElement("div");
    item.className = "pending-image";
    item.innerHTML = `
      <img src="${screenshot.src}" alt="${escapeHtml(screenshot.name)}" />
      <button class="small-button" type="button" data-pending-memo-image-remove="${screenshot.id}">移除</button>
    `;
    memoPendingImages.append(item);
  }
  for (const attachment of pendingMemoAttachments) {
    const item = document.createElement("div");
    item.className = "pending-file";
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(attachment.name)}</strong>
        <span>Markdown 附件</span>
      </div>
      <button class="small-button" type="button" data-pending-memo-attachment-remove="${attachment.id}">移除</button>
    `;
    memoPendingImages.append(item);
  }
}

function updateMemoChips() {
  document.querySelectorAll("[data-memo-category]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.memoCategory === selectedMemoCategory);
  });
  document.querySelectorAll("[data-memo-status]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.memoStatus === selectedMemoStatus);
  });
  document.querySelectorAll("[data-memo-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.memoFilter === memoFilter);
  });
}

function getMemoTitle(text) {
  return (text || "")
    .split(/\n/)
    .map((line) => line.trim())
    .find(Boolean)
    ?.slice(0, 80) || "先放这儿";
}

function isMemoDue(item) {
  const today = toDateKey(new Date());
  return !isMemoFinal(item) && (item.reviewDate <= today || item.status === "待整理" || item.status === "已读待判断" || item.status === "待讨论");
}

function isMemoFinal(item) {
  return item.status === "已整理" || item.status === "已归档";
}

function getCurrentWeekRange() {
  const today = new Date();
  const day = today.getDay() || 7;
  const start = addDays(today, 1 - day);
  const end = addDays(start, 6);
  return {
    start: toDateKey(start),
    end: toDateKey(end),
  };
}

function isMemoInWeeklyReview(item) {
  if (isMemoFinal(item)) return false;
  const { start, end } = getCurrentWeekRange();
  const createdDate = toDateKey(new Date(item.createdAt || Date.now()));
  return item.reviewDate <= end || (createdDate >= start && createdDate <= end);
}

function getMemoExitLabel(item) {
  if (item.status === "已归档") return "出口：归档";
  if (item.status === "已整理") return "出口：已处理";
  if (item.linkedIssueId || item.category === "待写 Issue") return "出口：Issue";
  if (item.linkedTodoId || item.category === "要推进" || item.category === "要盯时间") return "出口：Todo";
  if (item.status === "待讨论") return "出口：讨论";
  if (item.status === "已读待判断") return "出口：待判断";
  return "出口：先判断";
}

function getFilteredMemos() {
  if (memoFilter === "all") return memoItems;
  if (memoFilter === "weekly") return memoItems.filter(isMemoInWeeklyReview);
  if (memoFilter === "discussion") return memoItems.filter((item) => item.status === "待讨论");
  if (memoFilter === "issues") return memoItems.filter((item) => item.category === "待写 Issue" || item.linkedIssueId);
  if (memoFilter === "done") return memoItems.filter((item) => item.status === "已整理");
  if (memoFilter === "archived") return memoItems.filter((item) => item.status === "已归档");
  return memoItems.filter(isMemoDue);
}

function postponeMemo(item, target) {
  const today = new Date();
  if (target === "tomorrow") item.reviewDate = toDateKey(addDays(today, 1));
  if (target === "nextWeek") item.reviewDate = toDateKey(getNextMonday(today));
  if (target === "waiting") {
    item.reviewDate = toDateKey(getNextMonday(today));
    item.status = "待讨论";
  }
  item.postponeCount += 1;
  item.updatedAt = new Date().toISOString();
}

function ensureMemoTodo(item) {
  const existing = item.linkedTodoId ? todos.find((todo) => todo.id === item.linkedTodoId) : null;
  if (existing) return existing.id;

  const todo = {
    id: uid(),
    title: item.title,
    date: toDateKey(new Date()),
    module: item.module || (item.category === "待写 Issue" ? "技术需求" : "复盘与优化"),
    priority: item.category === "要推进" || item.status === "待讨论" ? "重要推进" : "先记着",
    status: "未开始",
    owner: "我",
    notes: item.body ? plainTextToHtml(item.body) : "",
    ideas: "",
    screenshots: normalizeScreenshots(item.screenshots),
    needsReview: false,
    sourceMemoId: item.id,
    sortOrder: Date.now(),
    createdAt: new Date().toISOString(),
  };
  todos.push(todo);
  return todo.id;
}

function ensureMemoIssue(item) {
  const existing = item.linkedIssueId ? issueDrafts.find((issue) => issue.id === item.linkedIssueId) : null;
  if (existing) return existing.id;

  const issue = normalizeIssueDraft({
    id: uid(),
    title: item.title,
    module: item.module || "技术需求",
    priority: "先记着",
    notes: item.body,
    status: "待写",
    screenshots: normalizeScreenshots(item.screenshots),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  issueDrafts.push(issue);
  return issue.id;
}

function makeMemoSelect(value, field, options) {
  const select = document.createElement("select");
  select.dataset.memoField = field;
  for (const optionText of options) {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    option.selected = optionText === value;
    select.append(option);
  }
  return select;
}

function makeMemoDetail(item) {
  const detail = document.createElement("div");
  detail.className = "memo-detail";

  const logInput = makeMemoTextarea("", "newLog", "新增一条记录，例如：今天和 Jeff 对齐了，先等设计稿");
  const logButton = document.createElement("button");
  logButton.className = "small-button";
  logButton.type = "button";
  logButton.dataset.memoAction = "add-log";
  logButton.textContent = "增加记录";

  const logs = document.createElement("div");
  logs.className = "memo-log-list";
  const normalizedLogs = [...(item.logs || [])].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  logs.innerHTML = normalizedLogs.length
    ? normalizedLogs.map((log) => `
      <div class="memo-log-item">
        <span>${escapeHtml(new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(log.createdAt)))}</span>
        <p>${escapeHtml(log.text)}</p>
      </div>
    `).join("")
    : `<p class="memo-log-empty">还没有追加记录。</p>`;

  detail.append(
    makeField("新增记录", logInput),
    logButton,
    logs,
  );
  return detail;
}

function makeMemoInput(type, value, field) {
  const input = document.createElement("input");
  input.type = type;
  input.value = value || "";
  input.dataset.memoField = field;
  return input;
}

function makeMemoTextarea(value, field, placeholder) {
  const textarea = document.createElement("textarea");
  textarea.value = value || "";
  textarea.placeholder = placeholder;
  textarea.dataset.memoField = field;
  return textarea;
}

function makeMemoCard(item) {
  const card = document.createElement("article");
  const isExpanded = item.id === expandedMemoId;
  card.className = `memo-card${isMemoFinal(item) ? " is-done" : ""}${isExpanded ? " is-expanded" : ""}`;
  card.dataset.id = item.id;

  const main = document.createElement("div");
  main.className = "memo-main";
  const title = isExpanded ? makeMemoInput("text", item.title, "title") : document.createElement("p");
  title.className = isExpanded ? "memo-title memo-title-input" : "memo-title";
  if (!isExpanded) title.textContent = item.title;

  const meta = document.createElement("div");
  meta.className = "todo-meta";
  if (isExpanded) {
    meta.classList.add("memo-edit-meta");
    meta.append(
      makeMemoSelect(item.category, "category", memoCategoryOptions),
      makeMemoSelect(item.status, "status", memoStatusOptions),
      makeMemoInput("date", item.reviewDate, "reviewDate"),
    );
    for (const text of [
      item.postponeCount ? `已顺延 ${item.postponeCount} 次` : "",
      item.linkedTodoId ? "已生成待办" : "",
      item.linkedIssueId ? "已转 Issue" : "",
      item.projectId ? `已入项目：${getProjectById(item.projectId)?.name || "项目"}` : "",
    ].filter(Boolean)) {
      const pill = document.createElement("span");
      pill.className = "pill";
      pill.textContent = text;
      meta.append(pill);
    }
  } else {
    const tags = [
      item.category,
      item.status,
      getMemoExitLabel(item),
      `回看 ${formatDateLabel(item.reviewDate)}`,
      item.postponeCount ? `已顺延 ${item.postponeCount} 次` : "",
      item.linkedTodoId ? "已生成待办" : "",
      item.linkedIssueId ? "已转 Issue" : "",
      item.projectId ? `项目 ${getProjectById(item.projectId)?.name || "已关联"}` : "",
      item.screenshots?.length ? `截图 ${item.screenshots.length} 张` : "",
      item.attachments?.length ? `附件 ${item.attachments.length} 个` : "",
    ].filter(Boolean);

    for (const text of tags) {
      const pill = document.createElement("span");
      pill.className = text === item.category || text.startsWith("出口：") ? "pill priority memo-exit-pill" : "pill";
      pill.textContent = text;
      meta.append(pill);
    }
  }

  const body = isExpanded
    ? makeMemoTextarea(item.body, "body", "可以继续补充背景、想法、待讨论点、链接和下一步线索")
    : document.createElement("p");
  body.className = isExpanded ? "memo-body memo-body-input" : "memo-body memo-body-preview";
  if (!isExpanded) body.textContent = item.body || "还没有补充内容。";
  main.append(title, meta, body);

  const actions = document.createElement("div");
  actions.className = "memo-actions";
  actions.innerHTML = !isExpanded
    ? `<button class="small-button" type="button" data-memo-action="detail">详情</button>`
    : isMemoFinal(item) || item.status === "先放着"
      ? `
      <button class="small-button" type="button" data-memo-action="detail">${isExpanded ? "收起" : "详情"}</button>
      <button class="small-button" type="button" data-memo-action="reopen">重新提醒</button>
      <button class="small-button danger" type="button" data-memo-action="delete">删除</button>
    `
      : `
      <button class="small-button" type="button" data-memo-action="detail">${isExpanded ? "收起" : "详情"}</button>
      <button class="small-button" type="button" data-memo-action="todo">生成待办</button>
      <button class="small-button" type="button" data-memo-action="project">加入项目</button>
      <button class="small-button" type="button" data-memo-action="issue">转为 Issue</button>
      <button class="small-button" type="button" data-memo-action="done">已整理</button>
      <details class="memo-more-menu">
        <summary class="small-button">更多 ▾</summary>
        <div class="memo-more-panel">
          <button class="small-button" type="button" data-memo-action="tomorrow">明天再看</button>
          <button class="small-button" type="button" data-memo-action="nextWeek">下周再看</button>
          <button class="small-button" type="button" data-memo-action="waiting">继续等</button>
          <button class="small-button" type="button" data-memo-action="read">已读</button>
          <button class="small-button" type="button" data-memo-action="archive">归档</button>
          <button class="small-button" type="button" data-memo-action="park">先放着</button>
          <button class="small-button danger" type="button" data-memo-action="delete">删除</button>
        </div>
      </details>
    `;

  card.append(main, actions);
  if (isExpanded && item.screenshots.length) {
    card.append(makeScreenshotGallery(item.screenshots));
  }
  if (isExpanded && item.attachments.length) {
    card.append(makeMemoAttachmentList(item.attachments));
  }
  if (isExpanded) {
    card.append(makeMemoDetail(item));
  }
  return card;
}

function makeMemoAttachmentList(attachments) {
  const list = document.createElement("div");
  list.className = "memo-attachment-list";
  for (const attachment of normalizeMemoAttachments(attachments)) {
    const link = document.createElement("a");
    link.className = "memo-attachment";
    link.href = `data:${encodeURIComponent(attachment.type)};charset=utf-8,${encodeURIComponent(attachment.content)}`;
    link.download = attachment.name;
    link.textContent = attachment.name;
    list.append(link);
  }
  return list;
}

function renderMemoItems() {
  updateMemoChips();
  const items = getFilteredMemos().sort((a, b) => {
    const dueDiff = Number(!isMemoDue(a)) - Number(!isMemoDue(b));
    return dueDiff || a.reviewDate.localeCompare(b.reviewDate) || b.createdAt.localeCompare(a.createdAt);
  });

  memoList.innerHTML = "";
  memoEmpty.style.display = items.length ? "none" : "block";
  memoCount.textContent = `${items.length} 项`;
  for (const item of items) {
    memoList.append(makeMemoCard(item));
  }
}

function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId) || null;
}

function isProjectItemClosed(item) {
  return Boolean(item.done) || ["已吸收", "已拆 Todo", "已生成 Todo", "已处理", "已归档"].includes(item.status);
}

function getProjectOpenItems(projectId) {
  return projectItems.filter((item) => item.projectId === projectId && !isProjectItemClosed(item));
}

function getProjectMaterials(projectId) {
  return projectItems.filter((item) => item.projectId === projectId && item.kind === "material" && !isProjectItemClosed(item));
}

function getProjectBreakdownItems(projectId) {
  return projectItems.filter((item) => item.projectId === projectId && item.kind === "breakdown" && !isProjectItemClosed(item));
}

function getProjectTodos(projectId) {
  return todos
    .filter((todo) => todo.projectId === projectId)
    .sort((a, b) => Number(isTodoFinished(a)) - Number(isTodoFinished(b)) || compareTodosWithinDate(a, b));
}

function getProjectStage(project, stageId) {
  return (project?.stages || [])[0] && (project.stages.find((stage) => stage.id === stageId) || project.stages[0]);
}

function getProjectNodes(projectId) {
  return todos
    .filter((todo) => todo.projectId === projectId)
    .sort((a, b) => {
      const dateCompare = (a.date || "9999-99-99").localeCompare(b.date || "9999-99-99");
      return dateCompare || getTodoSortValue(a) - getTodoSortValue(b) || a.createdAt.localeCompare(b.createdAt);
    });
}

function isProjectArchived(project) {
  return ["已完成", "已归档"].includes(project?.status);
}

function getActiveProjects() {
  return projects.filter((project) => !isProjectArchived(project));
}

function getCalendarProjects() {
  return getActiveProjects();
}

function ensureCalendarSelection() {
  const visibleProjects = getCalendarProjects();
  if (calendarSelectedProjectId && !visibleProjects.some((project) => project.id === calendarSelectedProjectId)) {
    calendarSelectedProjectId = null;
    calendarExpandedProjectId = null;
    selectedCalendarNodeId = null;
  }
  if (!calendarSelectedProjectId && visibleProjects.length) {
    calendarSelectedProjectId = visibleProjects[0].id;
  }
  if (!calendarExpandedProjectId && calendarSelectedProjectId) {
    calendarExpandedProjectId = calendarSelectedProjectId;
  }
  if (calendarMonthInput && !calendarMonthInput.value) {
    calendarMonthInput.value = calendarMonthCursor;
  }
}

function createCalendarNode(project, values = {}) {
  if (!project) return null;
  const title = (values.title || "新节点").trim();
  const stageId = values.stageId || project.stages?.[0]?.id || "";
  const todo = normalizeTodo({
    id: uid(),
    title,
    date: values.date || "",
    module: values.department || values.module || "人员分工",
    priority: "重要推进",
    status: values.status || "未开始",
    owner: values.owner || project.owner || "我",
    notes: values.notes ? plainTextToHtml(values.notes) : "",
    ideas: "",
    needsReview: false,
    projectId: project.id,
    stageId,
    reminderDays: Number.isFinite(Number(values.reminderDays)) ? Number(values.reminderDays) : -1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  todos.push(todo);
  project.updatedAt = new Date().toISOString();
  selectedCalendarNodeId = todo.id;
  calendarSelectedProjectId = project.id;
  calendarExpandedProjectId = project.id;
  return todo;
}

function getCalendarNodeById(nodeId) {
  return todos.find((todo) => todo.id === nodeId && todo.projectId) || null;
}

function getCalendarScopeProjects() {
  if (calendarProjectFilter?.value === "all") return getCalendarProjects();
  const project = getProjectById(calendarProjectFilter?.value || calendarSelectedProjectId);
  return project ? [project] : [];
}

function makeCalendarProjectCard(project) {
  const nodes = getProjectNodes(project.id);
  const doneCount = nodes.filter(isTodoFinished).length;
  const unscheduledCount = nodes.filter((node) => !node.date).length;
  const card = document.createElement("article");
  card.className = `calendar-project-card${project.id === calendarSelectedProjectId ? " is-selected" : ""}`;
  card.dataset.calendarProjectId = project.id;
  card.style.setProperty("--project-color", project.color);
  card.innerHTML = `
    <div class="calendar-card-color"></div>
    <div>
      <p class="calendar-project-name">${escapeHtml(project.name)}</p>
      <div class="todo-meta">
        <span class="pill">${nodes.length} 节点</span>
        <span class="pill">${doneCount} 已完成</span>
        <span class="pill">${unscheduledCount} 未排期</span>
      </div>
    </div>
  `;
  return card;
}

function renderCalendarProjectOptions() {
  if (!calendarProjectFilter) return;
  const currentValue = calendarProjectFilter.value || "all";
  calendarProjectFilter.innerHTML = `<option value="all">全部项目</option>`;
  for (const project of getCalendarProjects()) {
    const option = document.createElement("option");
    option.value = project.id;
    option.textContent = project.name;
    option.selected = currentValue === project.id;
    calendarProjectFilter.append(option);
  }
  if ([...calendarProjectFilter.options].some((option) => option.value === currentValue)) {
    calendarProjectFilter.value = currentValue;
  } else {
    calendarProjectFilter.value = "all";
  }
}

function renderCalendarProjectCards() {
  if (!calendarProjectCards) return;
  ensureCalendarSelection();
  const visibleProjects = getCalendarProjects();
  calendarProjectCards.innerHTML = "";
  if (calendarProjectCount) calendarProjectCount.textContent = `${visibleProjects.length} 个`;
  for (const project of visibleProjects) {
    calendarProjectCards.append(makeCalendarProjectCard(project));
  }

  const project = getProjectById(calendarExpandedProjectId || calendarSelectedProjectId);
  if (!calendarProjectExpanded) return;
  if (!project) {
    calendarProjectExpanded.innerHTML = `<p class="project-detail-empty">还没有项目。可以从项目跟进或这里新建项目。</p>`;
    return;
  }
  const nodes = getProjectNodes(project.id);
  const doneCount = nodes.filter(isTodoFinished).length;
  const unscheduledCount = nodes.filter((node) => !node.date).length;
  calendarProjectExpanded.style.setProperty("--project-color", project.color);
  calendarProjectExpanded.innerHTML = `
    <article class="calendar-project-hero">
      <div>
        <p class="eyebrow">当前项目</p>
        <h3>${escapeHtml(project.name)}</h3>
        <div class="todo-meta">
          <span class="pill priority">${escapeHtml(project.status)}</span>
          <span class="pill">负责人 ${escapeHtml(project.owner || "我")}</span>
          ${project.date ? `<span class="pill">截止 ${escapeHtml(formatDateLabel(project.date))}</span>` : ""}
          <span class="pill">${nodes.length} 节点</span>
          <span class="pill">${doneCount} 已完成</span>
          <span class="pill">${unscheduledCount} 未排期</span>
        </div>
        <p class="project-next">${escapeHtml(project.nextStep || project.notes || "还没有写当前重点。")}</p>
      </div>
      <div class="project-actions">
        <button class="small-button" type="button" data-calendar-action="collapse-project">收起</button>
        <button class="primary-button" type="button" data-calendar-action="new-node">新增节点</button>
      </div>
    </article>
  `;
}

function makeCalendarNodeCard(todo, options = {}) {
  const project = getProjectById(todo.projectId);
  const stage = getProjectStage(project, todo.stageId);
  const noteText = richToText(todo.notes || "");
  const card = document.createElement("article");
  card.className = `calendar-node-card${todo.id === selectedCalendarNodeId ? " is-selected" : ""}${isTodoFinished(todo) ? " is-done" : ""}`;
  card.dataset.calendarNodeId = todo.id;
  card.style.setProperty("--project-color", project?.color || "#93d9a3");
  card.innerHTML = `
    <div class="calendar-node-title-row">
      <span class="calendar-node-color"></span>
      <strong>${escapeHtml(todo.title)}</strong>
    </div>
    <div class="todo-meta">
      <span class="pill">${escapeHtml(project?.name || "未归属项目")}</span>
      <span class="pill">${escapeHtml(stage?.name || "未分阶段")}</span>
      <span class="pill">${escapeHtml(todo.status || "未开始")}</span>
      ${todo.module ? `<span class="pill">${escapeHtml(todo.module)}</span>` : ""}
      ${noteText ? `<span class="pill priority">含备注</span>` : ""}
    </div>
    ${options.showDate && todo.date ? `<p class="calendar-node-note">${escapeHtml(formatDateLabel(todo.date))}</p>` : ""}
  `;
  return card;
}

function makeCalendarProjectDateCard(project) {
  const card = document.createElement("article");
  card.className = "calendar-node-card calendar-project-date-card";
  card.dataset.calendarProjectId = project.id;
  card.style.setProperty("--project-color", project.color || "#93d9a3");
  card.innerHTML = `
    <div class="calendar-node-title-row">
      <span class="calendar-node-color"></span>
      <strong>${escapeHtml(project.name)}</strong>
    </div>
    <div class="todo-meta">
      <span class="pill priority">项目</span>
      <span class="pill">${escapeHtml(project.status || "推进中")}</span>
      <span class="pill">负责人 ${escapeHtml(project.owner || "我")}</span>
    </div>
  `;
  return card;
}

function makeCalendarActivityCard(activity) {
  const type = normalizeActivityType(activity.eventType);
  const color = calendarActivityColors[type] || calendarActivityColors.default;
  const card = document.createElement("article");
  card.className = "calendar-activity-card";
  card.dataset.activityType = type;
  card.dataset.activityGroupKey = activity.groupKey;
  card.style.setProperty("--activity-color", color);
  card.innerHTML = `
    <div class="calendar-activity-title">
      <span></span>
      <strong>${escapeHtml(activity.groupName || activity.name)}</strong>
    </div>
    <div class="todo-meta">
      <span class="pill priority">${escapeHtml(calendarActivityTypeLabels[type] || "活动")}</span>
      <span class="pill">${escapeHtml(activity.count || 1)} 城市</span>
      ${activity.time ? `<span class="pill">${escapeHtml(activity.time)}</span>` : ""}
    </div>
  `;
  return card;
}

function getCalendarActivityGroupName(activity) {
  return String(activity.name || "活动")
    .replace(/[（(][^()（）]*[)）]/g, "")
    .replace(/\s*-\s*\d{1,2}\/\d{1,2}.*$/, "")
    .replace(/\s+/g, " ")
    .trim() || "活动";
}

function getCalendarActivityGroupKey(activity) {
  return [
    activity.date || "",
    activity.time || "",
    normalizeActivityType(activity.eventType),
    getCalendarActivityGroupName(activity),
  ].join("|");
}

function getCalendarActivityGroups(activities) {
  const groups = new Map();
  for (const activity of activities) {
    const groupKey = getCalendarActivityGroupKey(activity);
    if (!groups.has(groupKey)) {
      groups.set(groupKey, {
        ...activity,
        groupKey,
        groupName: getCalendarActivityGroupName(activity),
        activities: [],
        count: 0,
      });
    }
    const group = groups.get(groupKey);
    group.activities.push(activity);
    group.count = group.activities.length;
  }
  return [...groups.values()].sort((a, b) => {
    return (a.time || "").localeCompare(b.time || "") || (a.groupName || "").localeCompare(b.groupName || "", "zh-CN");
  });
}

function getCalendarActivityGroupByKey(groupKey) {
  return getCalendarActivityGroups(t46OpenEvents).find((group) => group.groupKey === groupKey) || null;
}

function renderStageView(project) {
  const wrap = document.createElement("div");
  wrap.className = "calendar-stage-wrap";
  wrap.innerHTML = `
    <div class="calendar-stage-tools">
      <span>${escapeHtml(project.stages?.length || 0)} 个阶段，可按项目节奏自定义</span>
      <button class="small-button" type="button" data-calendar-action="add-stage">+ 阶段</button>
    </div>
  `;
  const stageGrid = document.createElement("div");
  stageGrid.className = "calendar-stage-view";
  for (const stage of project.stages || []) {
    const section = document.createElement("section");
    section.className = "calendar-stage-column";
    const stageNodes = getProjectNodes(project.id).filter((node) => (node.stageId || project.stages[0]?.id) === stage.id);
    section.innerHTML = `
      <div class="calendar-stage-head">
        <div>
          <h3>${escapeHtml(stage.name)}</h3>
          <span>${stageNodes.length} 节点</span>
        </div>
        <div class="calendar-stage-actions">
          <button class="icon-button" type="button" title="改名" aria-label="改名 ${escapeHtml(stage.name)}" data-calendar-action="rename-stage" data-stage-id="${escapeHtml(stage.id)}">✎</button>
          <button class="icon-button" type="button" title="删除阶段" aria-label="删除 ${escapeHtml(stage.name)}" data-calendar-action="delete-stage" data-stage-id="${escapeHtml(stage.id)}">×</button>
        </div>
      </div>
    `;
    const listEl = document.createElement("div");
    listEl.className = "calendar-node-list";
    if (stageNodes.length) {
      for (const node of stageNodes) listEl.append(makeCalendarNodeCard(node, { showDate: true }));
    } else {
      listEl.innerHTML = `<p class="project-detail-empty">这个阶段还没有节点。</p>`;
    }
    section.append(listEl);
    stageGrid.append(section);
  }
  wrap.append(stageGrid);
  return wrap;
}

function renderTimelineView(project) {
  const nodes = getProjectNodes(project.id);
  const groups = new Map();
  for (const node of nodes) {
    const key = node.date || "未排期";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(node);
  }
  const wrap = document.createElement("div");
  wrap.className = "calendar-timeline-view";
  const tools = document.createElement("div");
  tools.className = "calendar-timeline-tools";
  tools.innerHTML = `
    <div>
      <p class="eyebrow">${escapeHtml(project.name)}</p>
      <strong>按日期梳理项目节点</strong>
    </div>
    <button class="primary-button" type="button" data-calendar-action="new-node">新增节点</button>
  `;
  wrap.append(tools);
  const keys = [...groups.keys()].sort((a, b) => {
    if (a === "未排期") return -1;
    if (b === "未排期") return 1;
    return a.localeCompare(b);
  });
  if (!keys.length) {
    wrap.insertAdjacentHTML("beforeend", `<p class="project-detail-empty">还没有节点，点击右上角新增第一条。</p>`);
    return wrap;
  }
  for (const key of keys) {
    const group = document.createElement("section");
    group.className = "calendar-timeline-group";
    group.innerHTML = `<h3>${key === "未排期" ? "未排期" : escapeHtml(formatDateLabel(key))}</h3>`;
    const listEl = document.createElement("div");
    listEl.className = "calendar-node-list";
    for (const node of groups.get(key)) listEl.append(makeCalendarNodeCard(node));
    group.append(listEl);
    wrap.append(group);
  }
  return wrap;
}

function addMonthsToKey(monthKey, offset) {
  const [year, month] = monthKey.split("-").map(Number);
  const date = new Date(year, month - 1 + offset, 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function getMonthDays(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  const first = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const mondayOffset = (first.getDay() + 6) % 7;
  const days = Array.from({ length: mondayOffset }, () => null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push(`${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`);
  }
  while (days.length % 7 !== 0) days.push(null);
  return days;
}

function renderCalendarMonth(monthKey, nodes, projectDates, activities) {
  const month = document.createElement("section");
  month.className = "calendar-month";
  const [year, monthNumber] = monthKey.split("-");
  month.innerHTML = `
    <div class="calendar-month-head">
      <h3>${Number(monthNumber)}月</h3>
      <span>${year}</span>
    </div>
    <div class="calendar-weekdays">
      ${["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((day) => `<span>${day}</span>`).join("")}
    </div>
  `;
  const grid = document.createElement("div");
  grid.className = "calendar-month-grid";
  for (const dateKey of getMonthDays(monthKey)) {
    const cell = document.createElement("div");
    cell.className = `calendar-day${dateKey === toDateKey(new Date()) ? " is-today" : ""}${dateKey ? "" : " is-empty"}`;
    if (!dateKey) {
      grid.append(cell);
      continue;
    }
    const dayNodes = nodes.filter((node) => node.date === dateKey);
    const dayProjects = projectDates.filter((project) => project.date === dateKey);
    const dayActivityGroups = getCalendarActivityGroups(activities.filter((activity) => activity.date === dateKey));
    cell.dataset.calendarDate = dateKey;
    cell.innerHTML = `
      <div class="calendar-day-head">
        <strong>${Number(dateKey.slice(-2))}</strong>
      </div>
    `;
    const listEl = document.createElement("div");
    listEl.className = "calendar-day-nodes";
    for (const activity of dayActivityGroups) listEl.append(makeCalendarActivityCard(activity));
    for (const project of dayProjects) listEl.append(makeCalendarProjectDateCard(project));
    for (const node of dayNodes) listEl.append(makeCalendarNodeCard(node));
    if (dayProjects.length || dayNodes.length || dayActivityGroups.length) cell.append(listEl);
    grid.append(cell);
  }
  month.append(grid);
  return month;
}

function renderCalendarGridView() {
  const scopeProjects = getCalendarScopeProjects();
  const scopeIds = new Set(scopeProjects.map((project) => project.id));
  const nodes = todos.filter((todo) => todo.projectId && todo.date && scopeIds.has(todo.projectId));
  const projectDates = scopeProjects.filter((project) => project.date);
  const wrap = document.createElement("div");
  wrap.className = "calendar-grid-view";
  for (let offset = 0; offset < 3; offset += 1) {
    wrap.append(renderCalendarMonth(addMonthsToKey(calendarMonthCursor, offset), nodes, projectDates, t46OpenEvents));
  }
  return wrap;
}

function renderCalendarNodeDetail() {
  if (!calendarNodeDetail) return;
  const activityGroup = selectedCalendarActivityGroupKey ? getCalendarActivityGroupByKey(selectedCalendarActivityGroupKey) : null;
  if (activityGroup) {
    calendarNodeDetail.hidden = false;
    const type = normalizeActivityType(activityGroup.eventType);
    const activities = [...activityGroup.activities].sort((a, b) => (a.city || "").localeCompare(b.city || "", "zh-CN"));
    calendarNodeDetail.innerHTML = `
      <div class="calendar-detail-head">
        <p class="eyebrow">开放报名活动</p>
        <h3>${escapeHtml(activityGroup.groupName)}</h3>
      </div>
      <div class="todo-meta">
        <span class="pill priority">${escapeHtml(calendarActivityTypeLabels[type] || "活动")}</span>
        <span class="pill">${escapeHtml(activityGroup.date ? formatDateLabel(activityGroup.date) : "未定日期")}</span>
        ${activityGroup.time ? `<span class="pill">${escapeHtml(activityGroup.time)}</span>` : ""}
        <span class="pill">${activities.length} 城市</span>
      </div>
      <div class="calendar-activity-city-list">
        ${activities.map((activity) => `
          <article>
            <strong>${escapeHtml(activity.city || "城市待确认")}</strong>
            <span>${escapeHtml(activity.name || activityGroup.groupName)}</span>
          </article>
        `).join("")}
      </div>
    `;
    return;
  }
  const todo = getCalendarNodeById(selectedCalendarNodeId);
  const project = todo ? getProjectById(todo.projectId) : getProjectById(calendarSelectedProjectId);
  if (!todo || !project) {
    calendarNodeDetail.hidden = true;
    calendarNodeDetail.innerHTML = "";
    return;
  }
  calendarNodeDetail.hidden = false;
  const stages = project.stages || [];
  calendarNodeDetail.innerHTML = `
    <div class="calendar-detail-head">
      <p class="eyebrow">节点详情</p>
      <h3>${escapeHtml(todo.title)}</h3>
    </div>
    <label class="field">
      <span>节点名称</span>
      <input data-calendar-detail-field="title" type="text" value="${escapeHtml(todo.title)}" maxlength="120" />
    </label>
    <label class="field">
      <span>所属项目</span>
      <select data-calendar-detail-field="projectId">
        ${getCalendarProjects().map((item) => `<option value="${escapeHtml(item.id)}"${item.id === todo.projectId ? " selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}
      </select>
    </label>
    <label class="field">
      <span>阶段</span>
      <select data-calendar-detail-field="stageId">
        ${stages.map((stage) => `<option value="${escapeHtml(stage.id)}"${stage.id === todo.stageId ? " selected" : ""}>${escapeHtml(stage.name)}</option>`).join("")}
      </select>
    </label>
    <label class="field">
      <span>日期</span>
      <input data-calendar-detail-field="date" type="date" value="${escapeHtml(todo.date || "")}" />
    </label>
    <label class="field">
      <span>状态</span>
      <select data-calendar-detail-field="status">
        ${["未开始", "进行中", "已完成"].map((status) => `<option value="${status}"${status === todo.status ? " selected" : ""}>${status}</option>`).join("")}
      </select>
    </label>
    <label class="field">
      <span>负责部门</span>
      <input data-calendar-detail-field="module" type="text" value="${escapeHtml(todo.module || "")}" list="calendarDepartmentSuggestions" />
      <datalist id="calendarDepartmentSuggestions">
        <option value="市场"></option>
        <option value="设计"></option>
        <option value="统筹"></option>
        <option value="活动运营"></option>
        <option value="现场执行"></option>
        <option value="技术"></option>
      </datalist>
    </label>
    <label class="field">
      <span>备注</span>
      <textarea data-calendar-detail-field="notes">${escapeHtml(richToText(todo.notes || ""))}</textarea>
    </label>
    <div class="project-actions">
      <button class="primary-button" type="button" data-calendar-action="save-node">保存</button>
      <button class="small-button" type="button" data-calendar-action="copy-node">复制</button>
      <button class="small-button danger" type="button" data-calendar-action="delete-node">删除</button>
    </div>
  `;
}

function renderCalendarMain() {
  if (!calendarMain) return;
  ensureCalendarSelection();
  const project = getProjectById(calendarSelectedProjectId);
  calendarMain.innerHTML = "";
  document.querySelectorAll("[data-calendar-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.calendarView === calendarViewMode);
  });
  if (calendarViewMode === "calendar") {
    calendarMain.append(renderCalendarGridView());
    return;
  }
  if (!project) {
    calendarMain.innerHTML = `<p class="project-detail-empty">先创建一个项目，再梳理阶段和排期。</p>`;
    return;
  }
  calendarMain.append(calendarViewMode === "timeline" ? renderTimelineView(project) : renderStageView(project));
}

function renderWorkCalendar() {
  if (!calendarProjectCards || !calendarMain) return;
  ensureCalendarSelection();
  renderCalendarProjectOptions();
  renderCalendarProjectCards();
  renderCalendarMain();
  renderCalendarNodeDetail();
}

function sortProjectItems(items) {
  return [...items].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt) || b.createdAt.localeCompare(a.createdAt));
}

function ensureQuickProject(name) {
  const normalizedName = (name || "").trim();
  if (!normalizedName) return null;
  const existing = projects.find((project) => project.name.trim().toLowerCase() === normalizedName.toLowerCase());
  if (existing) return existing;

  const project = normalizeProject({
    name: normalizedName,
    type: projectTypeInput?.value || "运营项目",
    owner: projectOwnerInput?.value || "我",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  projects.push(project);
  selectedProjectId = project.id;
  return project;
}

function createProjectItemFromMemo(memo, projectId) {
  return normalizeProjectItem({
    projectId,
    title: memo.title,
    body: memo.body,
    kind: "material",
    status: "资料",
    owner: memo.owner || "我",
    sourceMemoId: memo.id,
    screenshots: memo.screenshots,
    attachments: memo.attachments,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

function createProjectItem(project, values = {}) {
  const title = (values.title || "").trim();
  if (!project || !title) return null;
  const kind = values.kind === "todo" ? "breakdown" : values.kind === "breakdown" ? "breakdown" : "material";
  const item = normalizeProjectItem({
    id: uid(),
    projectId: project.id,
    title,
    body: (values.body || "").trim(),
    kind,
    owner: (values.owner || project.owner || "我").trim(),
    reviewDate: "",
    status: values.status || (kind === "material" ? "资料" : "待拆"),
    screenshots: normalizeScreenshots(values.screenshots),
    attachments: normalizeMemoAttachments(values.attachments),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  projectItems.push(item);
  project.updatedAt = new Date().toISOString();
  return item;
}

function mapProjectTypeToModule(type) {
  if (type === "技术需求") return "技术需求";
  if (type === "场地/物料") return "物料与打印";
  if (type === "客服反馈") return "客服与反馈";
  if (type === "市场内容") return "市场/小红书";
  return "人员分工";
}

function createProjectTodo(project, values = {}, sourceItem = null) {
  const title = (values.title || sourceItem?.title || "").trim();
  if (!project || !title) return null;
  const todo = normalizeTodo({
    id: uid(),
    title,
    date: values.date || toDateKey(new Date()),
    module: mapProjectTypeToModule(project.type),
    priority: "重要推进",
    status: "未开始",
    owner: (values.owner || sourceItem?.owner || project.owner || "我").trim(),
    notes: values.notes ? plainTextToHtml(values.notes) : sourceItem?.body ? plainTextToHtml(sourceItem.body) : "",
    ideas: "",
    needsReview: false,
    screenshots: sourceItem?.screenshots || [],
    sourceProjectItemId: sourceItem?.id || null,
    projectId: project.id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  todos.push(todo);
  project.updatedAt = new Date().toISOString();
  return todo;
}

function ensureProjectItemTodo(item, values = {}) {
  if (item.linkedTodoId && todos.some((todo) => todo.id === item.linkedTodoId)) return item.linkedTodoId;
  const project = getProjectById(item.projectId);
  const todo = createProjectTodo(project, {
    title: values.title || item.title,
    date: values.date || item.reviewDate || toDateKey(new Date()),
    owner: values.owner || item.owner || project?.owner || "我",
    notes: values.notes || item.body || "",
  }, item);
  if (!todo) return null;
  item.linkedTodoId = todo.id;
  item.splitTodoIds = [...new Set([...(item.splitTodoIds || []), todo.id])];
  item.status = "已生成 Todo";
  item.done = true;
  item.updatedAt = new Date().toISOString();
  return todo.id;
}

function splitProjectItemToTodos(item, values = {}) {
  const project = getProjectById(item.projectId);
  if (!project) return [];
  const rawLines = String(values.lines || "").trim() || item.body || "";
  const lines = rawLines
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => !/^(补充|备注|说明|背景|细节)[:：]/.test(line))
    .filter(Boolean);
  const titles = lines.length ? lines : [item.title].filter(Boolean);
  const created = [];
  for (const title of titles) {
    const todo = createProjectTodo(project, {
      title,
      date: values.date || toDateKey(new Date()),
      owner: values.owner || item.owner || project.owner || "我",
      notes: item.body || "",
    }, item);
    if (todo) created.push(todo);
  }
  if (created.length) {
    item.splitTodoIds = [...new Set([...(item.splitTodoIds || []), ...created.map((todo) => todo.id)])];
    item.status = "已拆 Todo";
    item.done = true;
    item.updatedAt = new Date().toISOString();
  }
  return created;
}

function makeProjectSelect(value, field, options) {
  const select = document.createElement("select");
  select.dataset.projectField = field;
  for (const optionText of options) {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    option.selected = optionText === value;
    select.append(option);
  }
  return select;
}

function makeProjectInput(type, value, field) {
  const input = document.createElement("input");
  input.type = type;
  input.value = value || "";
  input.dataset.projectField = field;
  return input;
}

function makeProjectItemInput(type, value, field) {
  const input = document.createElement("input");
  input.type = type;
  input.value = value || "";
  input.dataset.projectItemField = field;
  return input;
}

function makeProjectItemSelect(value, field, options) {
  const select = document.createElement("select");
  select.dataset.projectItemField = field;
  for (const optionText of options) {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    option.selected = optionText === value;
    select.append(option);
  }
  return select;
}

function makeProjectCard(project) {
  const card = document.createElement("article");
  const materials = getProjectMaterials(project.id);
  const breakdownItems = getProjectBreakdownItems(project.id);
  const linkedTodos = todos.filter((todo) => todo.projectId === project.id && !isTodoFinished(todo));
  card.className = `project-card${project.id === selectedProjectId ? " is-selected" : ""}`;
  card.dataset.projectId = project.id;
  card.style.setProperty("--project-color", project.color || getProjectDefaultColor(project.name));
  card.innerHTML = `
    <div class="project-card-top">
      <p class="project-title">${escapeHtml(project.name)}</p>
      <div class="project-card-actions">
        <button class="small-button" type="button" data-project-action="quick-add">+ 待办</button>
        <button class="small-button" type="button" data-project-action="open">详情</button>
        <button class="small-button archive-project-card-button" type="button" data-project-action="archive" title="完成并归档项目">归档</button>
      </div>
    </div>
    <div class="todo-meta">
      <span class="pill priority">${escapeHtml(project.status)}</span>
      <span class="pill">${escapeHtml(project.type)}</span>
      <span class="pill">负责人 ${escapeHtml(project.owner)}</span>
      ${materials.length ? `<span class="pill">资料 ${materials.length}</span>` : ""}
      ${breakdownItems.length ? `<span class="pill">待拆 ${breakdownItems.length}</span>` : ""}
      ${linkedTodos.length ? `<span class="pill">Todo ${linkedTodos.length}</span>` : ""}
    </div>
    <p class="project-next">${escapeHtml(project.nextStep || "还没有写下一步。")}</p>
  `;
  return card;
}

function makeProjectCapture(project) {
  const composer = document.createElement("section");
  composer.className = "project-item-composer";
  composer.innerHTML = `
    <div class="project-item-composer-head">
      <div>
        <p class="eyebrow">直接往项目里写</p>
        <h3>项目收集入口</h3>
      </div>
    </div>
    <div class="project-item-composer-grid">
      <label class="field project-item-title-field">
        <span>一句话</span>
        <input id="projectCaptureTitleInput" data-project-capture-field="title" type="text" placeholder="例如：库存字段口径、盒子物料方案、报名排序逻辑" maxlength="120" autocomplete="off" />
      </label>
      <label class="field">
        <span>放到哪里</span>
        <select data-project-capture-field="kind">
          <option value="material" selected>资料池</option>
          <option value="breakdown">待拆事项</option>
          <option value="todo">实际 Todo</option>
        </select>
      </label>
      <label class="field project-capture-date-field is-hidden">
        <span>Todo 日期</span>
        <input data-project-capture-field="date" type="date" value="${escapeHtml(toDateKey(new Date()))}" />
      </label>
      <label class="field">
        <span>负责人</span>
        <input data-project-capture-field="owner" type="text" value="${escapeHtml(project.owner || "我")}" maxlength="24" />
      </label>
      <label class="field project-item-body-field">
        <span>内容</span>
        <textarea id="projectCaptureTextInput" data-project-capture-field="body" placeholder="可以先扔背景、想法、会议结论、风险；需要执行时再拆成一条条 Todo。"></textarea>
      </label>
    </div>
    <div class="project-item-composer-actions">
      <button class="primary-button" type="button" data-project-capture-action="add">加入项目</button>
    </div>
  `;
  return composer;
}

function syncProjectCaptureDateVisibility(scope = projectDetail) {
  const kindInput = scope?.querySelector('[data-project-capture-field="kind"]');
  const dateField = scope?.querySelector(".project-capture-date-field");
  if (!kindInput || !dateField) return;
  dateField.classList.toggle("is-hidden", kindInput.value !== "todo");
}

function makeProjectMaterialCard(item) {
  const project = getProjectById(item.projectId);
  const isExpanded = item.id === expandedProjectItemId;
  const card = document.createElement("article");
  card.className = `project-item-card project-material-card${isExpanded ? " is-expanded" : ""}`;
  card.dataset.projectItemId = item.id;

  const sourceMemo = item.sourceMemoId ? memoItems.find((memo) => memo.id === item.sourceMemoId) : null;
  const sourceText = sourceMemo ? "来自先放这儿" : "项目资料";
  const meta = [
    "资料池",
    project?.name || "未归属项目",
    item.owner ? `负责人 ${item.owner}` : "",
    sourceText,
    item.screenshots?.length ? `图片 ${item.screenshots.length}` : "",
    item.attachments?.length ? `附件 ${item.attachments.length}` : "",
  ].filter(Boolean);

  const main = document.createElement("div");
  main.className = "project-item-main";
  main.innerHTML = isExpanded
    ? `
      <div class="project-inline-edit">
        <label class="field">
          <span>标题</span>
          <input data-project-item-field="title" type="text" value="${escapeHtml(item.title)}" maxlength="120" />
        </label>
        <label class="field">
          <span>负责人</span>
          <input data-project-item-field="owner" type="text" value="${escapeHtml(item.owner || "我")}" maxlength="24" />
        </label>
        <label class="field project-inline-body">
          <span>内容</span>
          <textarea data-project-item-field="body" placeholder="项目背景、会议结论、灵感、截图说明都可以留在这里">${escapeHtml(item.body || "")}</textarea>
        </label>
      </div>
      <div class="todo-meta">
        ${meta.map((text, index) => `<span class="pill${index === 0 ? " priority" : ""}">${escapeHtml(text)}</span>`).join("")}
      </div>
    `
    : `
      <p class="project-item-title">${escapeHtml(item.title)}</p>
      <div class="todo-meta">
        ${meta.map((text, index) => `<span class="pill${index === 0 ? " priority" : ""}">${escapeHtml(text)}</span>`).join("")}
      </div>
      <p class="project-item-body">${escapeHtml(item.body || "还没有补充内容。")}</p>
    `;

  const actions = document.createElement("div");
  actions.className = "project-actions";
  actions.innerHTML = `
    <button class="small-button" type="button" data-project-item-action="detail">${isExpanded ? "收起" : "详情"}</button>
    <button class="small-button" type="button" data-project-item-action="to-breakdown">转待拆</button>
    <button class="small-button" type="button" data-project-item-action="todo">转 Todo</button>
    <button class="small-button" type="button" data-project-item-action="archive">归档</button>
  `;

  card.append(main, actions);

  if (isExpanded) {
    if (item.screenshots.length) card.append(makeScreenshotGallery(item.screenshots));
    if (item.attachments.length) card.append(makeMemoAttachmentList(item.attachments));
  }

  return card;
}

function makeProjectBreakdownCard(item) {
  const isExpanded = item.id === expandedProjectItemId;
  const card = document.createElement("article");
  card.className = `project-item-card project-breakdown-card${isExpanded ? " is-expanded" : ""}`;
  card.dataset.projectItemId = item.id;

  const main = document.createElement("div");
  main.className = "project-item-main project-check-row";
  main.innerHTML = `
    <label class="project-check">
      <input type="checkbox" data-project-item-action="done" />
      <span>${escapeHtml(item.title)}</span>
    </label>
    <div class="todo-meta">
      <span class="pill priority">待拆事项</span>
      ${item.owner ? `<span class="pill">负责人 ${escapeHtml(item.owner)}</span>` : ""}
      ${item.sourceMemoId ? `<span class="pill">来自先放这儿</span>` : ""}
    </div>
    <p class="project-item-body">${escapeHtml(item.body || "还没有补充内容。")}</p>
  `;

  const actions = document.createElement("div");
  actions.className = "project-actions";
  actions.innerHTML = `
    <button class="small-button" type="button" data-project-item-action="split">${isExpanded ? "收起" : "拆 Todo"}</button>
    <button class="small-button" type="button" data-project-item-action="todo">直接转 Todo</button>
    <button class="small-button" type="button" data-project-item-action="archive">归档</button>
  `;
  card.append(main, actions);

  if (isExpanded) {
    const detail = document.createElement("div");
    detail.className = "project-item-detail project-split-box";
    detail.innerHTML = `
      <label class="field">
        <span>拆成实际 Todo</span>
        <textarea data-project-split-field="lines" placeholder="每行一个 Todo，例如：&#10;整理库存字段口径&#10;确认安全库存线&#10;和运营确认表格样例"></textarea>
      </label>
      <div class="detail-grid">
        <label class="field">
          <span>Todo 日期</span>
          <input data-project-split-field="date" type="date" value="${escapeHtml(toDateKey(new Date()))}" />
        </label>
        <label class="field">
          <span>负责人</span>
          <input data-project-split-field="owner" type="text" value="${escapeHtml(item.owner || "我")}" maxlength="24" />
        </label>
      </div>
      <div class="project-item-composer-actions">
        <button class="primary-button" type="button" data-project-split-action="generate">生成实际 Todo</button>
      </div>
    `;
    card.append(detail);
    if (item.screenshots.length) card.append(makeScreenshotGallery(item.screenshots));
    if (item.attachments.length) card.append(makeMemoAttachmentList(item.attachments));
  }
  return card;
}

function makeProjectTodoRow(todo) {
  const project = getProjectById(todo.projectId);
  const noteText = richToText(todo.notes || "");
  const row = document.createElement("article");
  row.className = `project-todo-row${isTodoFinished(todo) ? " is-done" : ""}`;
  row.dataset.todoId = todo.id;
  row.innerHTML = `
    <div class="project-check">
      <input type="checkbox" data-project-todo-action="toggle" ${isTodoFinished(todo) ? "checked" : ""} />
      <span>${escapeHtml(todo.title)}</span>
    </div>
    <div class="todo-meta">
      <span class="pill priority">实际 Todo</span>
      <span class="pill">项目 ${escapeHtml(project?.name || "未归属")}</span>
      <span class="pill">${todo.date ? escapeHtml(formatDateLabel(todo.date)) : "未排期"}</span>
      <span class="pill">负责人 ${escapeHtml(todo.owner || "我")}</span>
    </div>
    ${noteText ? `<p class="project-todo-note">${escapeHtml(noteText.length > 120 ? `${noteText.slice(0, 120)}...` : noteText)}</p>` : ""}
  `;
  return row;
}

function makeProjectSection(title, count, emptyText, children, sectionKey) {
  const section = document.createElement("section");
  section.className = `project-flow-section project-flow-section--${sectionKey}`;
  section.dataset.projectSection = sectionKey;
  section.innerHTML = `
    <div class="project-flow-head">
      <h3>${escapeHtml(title)}</h3>
      <span>${count} 项</span>
    </div>
  `;
  const listEl = document.createElement("div");
  listEl.className = sectionKey === "todos" ? "project-todo-list" : "project-detail-items";
  if (children.length) {
    for (const child of children) listEl.append(child);
  } else {
    listEl.innerHTML = `<p class="project-detail-empty">${escapeHtml(emptyText)}</p>`;
  }
  section.append(listEl);
  return section;
}

function renderProjectDetail() {
  if (!projectDetail) return;
  const project = getProjectById(selectedProjectId);
  if (!project || isProjectArchived(project)) {
    projectDetail.innerHTML = `<p class="project-detail-empty">选一个项目，就能看它的资料池、待拆事项和实际 Todo。</p>`;
    return;
  }

  const materials = sortProjectItems(getProjectMaterials(project.id));
  const breakdownItems = sortProjectItems(getProjectBreakdownItems(project.id));
  const linkedTodos = getProjectTodos(project.id);
  projectDetail.innerHTML = "";
  projectDetail.style.setProperty("--project-color", project.color || getProjectDefaultColor(project.name));

  const fields = document.createElement("div");
  fields.className = "detail-grid";
  fields.append(
    makeField("项目名", makeProjectInput("text", project.name, "name")),
    makeField("类型", makeProjectSelect(project.type, "type", projectTypeOptions)),
    makeField("状态", makeProjectSelect(project.status, "status", projectStatusOptions)),
    makeField("负责人", makeProjectInput("text", project.owner, "owner")),
  );

  const detailHead = document.createElement("div");
  detailHead.className = "project-detail-head";
  detailHead.innerHTML = `
    <div>
      <p class="eyebrow">当前项目</p>
      <h3>${escapeHtml(project.name)}</h3>
    </div>
    <button class="small-button archive-project-button" type="button" data-project-detail-action="archive">完成并归档</button>
  `;

  projectDetail.append(
    detailHead,
    fields,
    makeProjectCapture(project),
    makeProjectSection("资料池", materials.length, "可以把背景、会议结论、Markdown 附件先扔在这里。", materials.map(makeProjectMaterialCard), "materials"),
    makeProjectSection("待拆事项", breakdownItems.length, "这里放还没拆清楚的事；不设日期，拆成实际 Todo 时再定时间。", breakdownItems.map(makeProjectBreakdownCard), "breakdown"),
    makeProjectSection("实际 Todo", linkedTodos.length, "拆出来的 Todo 会在这里，也会按日期同步到今日工作台。", linkedTodos.map(makeProjectTodoRow), "todos"),
  );
  syncProjectCaptureDateVisibility(projectDetail);
}

function renderProjects() {
  if (!projectList) return;
  const activeProjects = getActiveProjects().sort((a, b) => {
    const aOpen = getProjectOpenItems(a.id).length + getProjectTodos(a.id).length;
    const bOpen = getProjectOpenItems(b.id).length + getProjectTodos(b.id).length;
    return Number(bOpen > 0) - Number(aOpen > 0) || b.updatedAt.localeCompare(a.updatedAt);
  });
  if (!selectedProjectId && activeProjects.length) selectedProjectId = activeProjects[0].id;
  if (selectedProjectId && !activeProjects.some((project) => project.id === selectedProjectId)) {
    selectedProjectId = activeProjects[0]?.id || null;
  }

  projectList.innerHTML = "";
  if (projectEmpty) projectEmpty.style.display = activeProjects.length ? "none" : "block";
  if (projectCount) projectCount.textContent = `${activeProjects.length} 个`;

  for (const project of activeProjects) projectList.append(makeProjectCard(project));
  renderProjectDetail();
}

function archiveProject(project) {
  if (!project) return false;
  const prevStatus = project.status;
  const prevArchivedAt = project.archivedAt || null;
  const now = new Date().toISOString();
  project.status = "已归档";
  project.archivedAt = now;
  project.updatedAt = now;
  if (calendarSelectedProjectId === project.id) calendarSelectedProjectId = null;
  if (calendarExpandedProjectId === project.id) calendarExpandedProjectId = null;
  const selectedNode = getCalendarNodeById(selectedCalendarNodeId);
  if (selectedNode?.projectId === project.id) selectedCalendarNodeId = null;
  selectedProjectId = getActiveProjects()[0]?.id || null;
  saveProjects();
  renderProjects();
  renderWorkCalendar();
  renderReview();
  showToast(`已归档项目「${project.name}」。`, {
    onUndo: () => {
      project.status = prevStatus || "推进中";
      project.archivedAt = prevArchivedAt;
      project.updatedAt = new Date().toISOString();
      selectedProjectId = project.id;
      saveProjects();
      renderProjects();
      renderWorkCalendar();
      renderReview();
      showToast(`已撤销归档「${project.name}」。`);
    },
  });
  return true;
}

function makeTodoDetail(todo) {
  const detail = document.createElement("div");
  detail.className = "todo-detail";

  const titleInput = makeInput("text", todo.title, "title");
  titleInput.maxLength = 120;
  const titleWrap = makeField("任务标题", titleInput);

  const detailGrid = document.createElement("div");
  detailGrid.className = "detail-grid";
  detailGrid.append(
    makeField("负责人", makeInput("text", todo.owner, "owner")),
    makeField("状态", makeSelect(todo.status, "status", statusOptions)),
    makeField("日期", makeInput("date", todo.date, "date")),
    makeField("优先级", makeSelect(todo.priority, "priority", priorityOptions)),
  );

  const moduleSelect = makeSelect(todo.module, "module", moduleOptions);
  const reviewLabel = document.createElement("label");
  reviewLabel.className = "check-field";
  const reviewCheck = document.createElement("input");
  reviewCheck.type = "checkbox";
  reviewCheck.checked = Boolean(todo.needsReview);
  reviewCheck.dataset.todoField = "needsReview";
  reviewLabel.append(reviewCheck, document.createTextNode("需要复盘"));

  const secondGrid = document.createElement("div");
  secondGrid.className = "detail-grid";
  secondGrid.append(makeField("业务板块", moduleSelect), reviewLabel);

  const writing = document.createElement("div");
  writing.className = "detail-writing";
  writing.append(
    makeField("任务备注", makeRichEditor(todo.notes, "notes", "进展、链接、对接信息、下一步动作都可以写在这里")),
    makeField("发散思考", makeRichEditor(todo.ideas, "ideas", "随便写想法、风险、灵感、待讨论点；先不需要整理")),
  );

  detail.append(titleWrap, detailGrid, secondGrid, writing);
  if (todo.screenshots?.length) {
    const screenshots = document.createElement("div");
    screenshots.className = "todo-screenshots";
    const label = document.createElement("p");
    label.className = "detail-label";
    label.textContent = "相关截图";
    screenshots.append(label, makeScreenshotGallery(todo.screenshots));
    detail.append(screenshots);
  }
  return detail;
}

function canReorderTodo(todo) {
  return todo.date === toDateKey(new Date());
}

function getTodoSortValue(todo) {
  const value = Number(todo.sortOrder);
  if (Number.isFinite(value)) return value;
  const created = new Date(todo.createdAt).getTime();
  return Number.isFinite(created) ? created : 0;
}

function compareTodosWithinDate(a, b) {
  const finishedDiff = Number(isTodoFinished(a)) - Number(isTodoFinished(b));
  if (finishedDiff) return finishedDiff;
  return getTodoSortValue(a) - getTodoSortValue(b) || a.createdAt.localeCompare(b.createdAt);
}

function compareTodayPriorityTodos(a, b) {
  const priorityRank = { "今天必须": 0, "重要推进": 1 };
  const priorityDiff = (priorityRank[a.priority] ?? 2) - (priorityRank[b.priority] ?? 2);
  return priorityDiff || compareTodosWithinDate(a, b);
}

function moveTodoWithinToday(todo, direction) {
  if (!canReorderTodo(todo)) return false;
  const peers = todos
    .filter((item) => item.date === todo.date && isTodoFinished(item) === isTodoFinished(todo))
    .sort(compareTodosWithinDate);
  const index = peers.findIndex((item) => item.id === todo.id);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= peers.length) return false;
  [peers[index], peers[nextIndex]] = [peers[nextIndex], peers[index]];
  peers.forEach((item, order) => {
    item.sortOrder = (order + 1) * 1000;
  });
  return true;
}

function reorderTodoWithinToday(draggedId, targetId, insertAfter = false) {
  if (!draggedId || !targetId || draggedId === targetId) return false;
  const dragged = todos.find((item) => item.id === draggedId);
  const target = todos.find((item) => item.id === targetId);
  if (!dragged || !target) return false;
  if (!canReorderTodo(dragged) || !canReorderTodo(target)) return false;
  if (isTodoFinished(dragged) !== isTodoFinished(target)) return false;

  const peers = todos
    .filter((item) => item.date === target.date && isTodoFinished(item) === isTodoFinished(target))
    .sort(compareTodosWithinDate);
  const draggedIndex = peers.findIndex((item) => item.id === draggedId);
  const targetIndex = peers.findIndex((item) => item.id === targetId);
  if (draggedIndex < 0 || targetIndex < 0) return false;

  const [moved] = peers.splice(draggedIndex, 1);
  let insertIndex = peers.findIndex((item) => item.id === targetId);
  if (insertIndex < 0) return false;
  if (insertAfter) insertIndex += 1;
  peers.splice(insertIndex, 0, moved);
  peers.forEach((item, order) => {
    item.sortOrder = (order + 1) * 1000;
  });
  return true;
}

let selectedInspectorTodoId = null;
let inspectorEditMode = false;

function isDesktopInspectorMode() {
  return window.matchMedia("(min-width: 1025px)").matches;
}

window.matchMedia("(min-width: 1025px)").addEventListener("change", () => {
  renderTodos();
});

function getActiveInspectorTodo() {
  const nonArchived = todos.filter((item) => item && item.status !== "已归档");
  const todayKey = toDateKey(new Date());
  const todayItems = nonArchived.filter((item) => item.date === todayKey);
  return (
    (selectedInspectorTodoId && nonArchived.find((item) => item.id === selectedInspectorTodoId)) ||
    todayItems.find((item) => item.status !== "已完成") ||
    nonArchived.find((item) => item.status !== "已完成") ||
    nonArchived[0] ||
    null
  );
}

function renderTodayInspector() {
  const inspector = document.getElementById("todayInspector");
  const notesBody = document.getElementById("inspectorNotesBody");
  const thinkingBody = document.getElementById("inspectorThinkingBody");
  const openBtn = document.getElementById("inspectorOpenDetailBtn");
  const progressText = document.getElementById("todayProgressText");
  const progressFill = document.getElementById("todayProgressFill");
  const progressFooter = document.getElementById("todayProgressFooter");
  if (!inspector || !notesBody || !thinkingBody) return;

  const todayKey = toDateKey(new Date());
  const nonArchived = todos.filter((item) => item && item.status !== "已归档");
  const todayItems = nonArchived.filter((item) => item.date === todayKey);
  if (progressText && progressFill && progressFooter) {
    const total = todayItems.length;
    const doneCount = todayItems.filter((item) => item.status === "已完成").length;
    progressText.textContent = `今日完成 ${doneCount}/${total}`;
    const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;
    progressFill.style.width = `${pct}%`;
    const motto = progressFooter.querySelector(".progress-motto");
    if (motto) {
      motto.textContent =
        typeof window.__getStardustMotto === "function"
          ? window.__getStardustMotto(total, doneCount)
          : total > 0 && doneCount === total
            ? "今日事已毕 · 一起去未来 ✦"
            : "一起去未来";
    }
    progressFooter.classList.toggle("is-all-done", total > 0 && doneCount === total);
    window.dispatchEvent(
      new CustomEvent("stardust:progress", {
        detail: { scope: "today", done: doneCount, total },
      })
    );
  }

  const target = getActiveInspectorTodo();
  document.querySelectorAll(".todo-card.is-selected").forEach((el) => el.classList.remove("is-selected"));

  if (!target) {
    selectedInspectorTodoId = null;
    inspectorEditMode = false;
    delete inspector.dataset.inspectorTodoId;
    notesBody.innerHTML = `<p class="inspector-placeholder">点击左侧任意任务，即可在这里聚焦查看或编辑它的备注与发散思考。</p>`;
    thinkingBody.innerHTML = `<p class="inspector-placeholder">活动灵感、现场动线与复盘想法会沉淀在这里。</p>`;
    if (openBtn) openBtn.hidden = true;
    return;
  }

  selectedInspectorTodoId = target.id;
  inspector.dataset.inspectorTodoId = target.id;
  const matchedCard = document.querySelector(`.todo-card[data-id="${CSS.escape(target.id)}"]`);
  if (matchedCard) matchedCard.classList.add("is-selected");

  if (openBtn) {
    openBtn.hidden = false;
    openBtn.textContent = inspectorEditMode ? "完成编辑" : "就地编辑";
    openBtn.onclick = () => {
      inspectorEditMode = !inspectorEditMode;
      renderTodayInspector();
      if (inspectorEditMode) {
        requestAnimationFrame(() => notesBody.querySelector(".rich-input")?.focus());
      }
    };
  }

  if (inspectorEditMode) {
    notesBody.innerHTML = "";
    thinkingBody.innerHTML = "";

    const titleInput = makeInput("text", target.title, "title");
    titleInput.className = "inspector-title-input";
    titleInput.maxLength = 120;
    titleInput.setAttribute("aria-label", "任务标题");
    titleInput.placeholder = "输入任务标题";

    const metaGrid = document.createElement("div");
    metaGrid.className = "inspector-meta-grid";
    const reviewLabel = document.createElement("label");
    reviewLabel.className = "check-field";
    const reviewCheck = document.createElement("input");
    reviewCheck.type = "checkbox";
    reviewCheck.checked = Boolean(target.needsReview);
    reviewCheck.dataset.todoField = "needsReview";
    reviewLabel.append(reviewCheck, document.createTextNode("需要复盘"));

    metaGrid.append(
      makeField("负责人", makeInput("text", target.owner, "owner")),
      makeField("状态", makeSelect(target.status, "status", statusOptions)),
      makeField("日期", makeInput("date", target.date, "date")),
      makeField("优先级", makeSelect(target.priority, "priority", priorityOptions)),
      makeField("业务板块", makeSelect(target.module, "module", moduleOptions)),
      reviewLabel,
    );

    const notesWrap = document.createElement("div");
    notesWrap.className = "inspector-editor-block";
    notesWrap.append(makeRichEditor(target.notes, "notes", "进展、链接、对接信息、下一步动作都可以写在这里"));

    notesBody.append(titleInput, metaGrid, notesWrap);
    if (target.screenshots?.length) {
      const shots = document.createElement("div");
      shots.className = "inspector-screenshots";
      shots.append(makeScreenshotGallery(target.screenshots));
      notesBody.append(shots);
    }

    const ideasWrap = document.createElement("div");
    ideasWrap.className = "inspector-editor-block";
    ideasWrap.append(makeRichEditor(target.ideas, "ideas", "随便写想法、风险、灵感、待讨论点；先不需要整理"));
    thinkingBody.append(ideasWrap);
    return;
  }

  const safeNotesHtml = normalizeRichValue(target.notes || "");
  const safeIdeasHtml = normalizeRichValue(target.ideas || "");
  const notesText = richToText(safeNotesHtml);
  const ideasText = richToText(safeIdeasHtml);
  const hasNotesContent = Boolean(notesText) || /<img\b/i.test(safeNotesHtml);
  const hasIdeasContent = Boolean(ideasText) || /<img\b/i.test(safeIdeasHtml);
  const safeTitle = escapeHtml(target.title || "");

  notesBody.innerHTML = hasNotesContent
    ? `<p class="inspector-task-name">${safeTitle}</p><div class="inspector-rich">${safeNotesHtml}</div>`
    : `<p class="inspector-task-name">${safeTitle}</p><p class="inspector-placeholder">暂无任务备注，点击「就地编辑」即可记录。</p>`;

  if (target.screenshots?.length) {
    const shots = document.createElement("div");
    shots.className = "inspector-screenshots";
    shots.append(makeScreenshotGallery(target.screenshots));
    notesBody.append(shots);
  }

  thinkingBody.innerHTML = hasIdeasContent
    ? `<div class="inspector-rich">${safeIdeasHtml}</div>`
    : `<p class="inspector-placeholder">暂无发散思考，随时补充你的活动灵感。</p>`;
}

function makeTodoCard(todo) {
  const item = document.createElement("li");
  const isExpanded = !isDesktopInspectorMode() && todo.id === expandedTodoId;
  const isSelected = todo.id === selectedInspectorTodoId;
  item.className = `todo-card${todo.status === "已完成" ? " is-done" : ""}${isExpanded ? " is-expanded" : ""}${isSelected ? " is-selected" : ""}`;
  item.dataset.id = todo.id;
  if (canReorderTodo(todo)) {
    item.draggable = true;
  }

  const topRow = document.createElement("div");
  topRow.className = "todo-card-top";

  const main = document.createElement("div");
  main.className = "todo-main";

  const title = document.createElement("p");
  title.className = "todo-title";
  title.textContent = todo.title;

  const meta = document.createElement("div");
  meta.className = "todo-meta";

  const isUrgent = todo.priority === "今天必须";
  const ownerName = todo.owner || "我";
  const fields = [
    { text: todo.priority, className: isUrgent ? "pill priority" : "meta-text" },
    todo.projectId ? { text: `项目：${getProjectById(todo.projectId)?.name || "未归属项目"}`, className: "pill subtle" } : null,
    todo.needsReview ? { text: "需复盘", className: "pill priority" } : null,
    ownerName !== "我" ? { text: ownerName, className: "pill subtle" } : null,
    { text: todo.module, className: "meta-text" },
    todo.status && todo.status !== "未开始" ? { text: todo.status, className: "meta-text" } : null,
  ].filter(Boolean);

  for (const field of fields) {
    const tag = document.createElement("span");
    tag.className = field.className;
    tag.textContent = field.text;
    meta.append(tag);
  }

  main.append(title, meta);

  const actions = document.createElement("div");
  actions.className = "actions";
  const reorderActions = canReorderTodo(todo)
    ? `
      <span class="small-button drag-handle" draggable="true" tabindex="0" role="button" title="按住拖动或按上下方向键排序" aria-label="按住拖动或按上下方向键排序">↕</span>
    `
    : "";
  const detailLabel = isDesktopInspectorMode()
    ? (isSelected && inspectorEditMode ? "编辑中" : "编辑")
    : (isExpanded ? "收起" : "详情");
  actions.innerHTML = todo.date
    ? `
      ${reorderActions}
      <button class="small-button" type="button" data-todo-action="detail" title="编辑备注与详情">${detailLabel}</button>
      <button class="small-button" type="button" data-todo-action="done" title="完成">${todo.status === "已完成" ? "撤回" : "完成"}</button>
      <button class="small-button danger" type="button" data-todo-action="delete" title="删除">删除</button>
    `
    : `
      <button class="small-button" type="button" data-todo-action="detail" title="编辑备注与详情">${detailLabel}</button>
      <button class="small-button" type="button" data-todo-action="today" title="放到今天">今天</button>
      <button class="small-button danger" type="button" data-todo-action="delete" title="删除">删除</button>
    `;

  topRow.append(main, actions);
  item.append(topRow);
  if (isExpanded) {
    item.append(makeTodoDetail(todo));
  }
  return item;
}

function isTodoFinished(todo) {
  return todo.status === "已完成" || todo.status === "已归档";
}

function getTodayUnfinishedTodos() {
  const today = toDateKey(new Date());
  return todos.filter((todo) => todo.date === today && !isTodoFinished(todo));
}

function getCloseoutTodos(now = new Date()) {
  const today = toDateKey(now);
  const includeToday = shouldShowDailyCloseout(now);
  return todos.filter((todo) => {
    if (!todo.date || isTodoFinished(todo)) return false;
    if (todo.date < today) return true;
    return includeToday && todo.date === today;
  });
}

function shouldShowDailyCloseout(now = new Date()) {
  const current = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  return current >= DAILY_CLOSEOUT_TIME;
}

function getCloseoutTarget(action) {
  const today = new Date();
  if (action === "today") return toDateKey(today);
  if (action === "tomorrow") return toDateKey(addDays(today, 1));
  if (action === "dayAfterTomorrow") return toDateKey(addDays(today, 2));
  if (action === "nextMonday") return toDateKey(getNextMonday(today));
  return toDateKey(addDays(today, 1));
}

function getCloseoutTargetLabel(action) {
  if (action === "memo") return "先放这儿";
  return formatDateLabel(getCloseoutTarget(action));
}

function getSelectedReminderDays() {
  return [...dayInputs].filter((input) => input.checked).map((input) => Number(input.value));
}

function setSelectedReminderDays(days) {
  const selected = new Set(days.map(Number));
  for (const input of dayInputs) {
    input.checked = selected.has(Number(input.value));
  }
}

function getSelectedReminderSchedules() {
  return [...selectedTimeList.querySelectorAll("[data-selected-schedule]")]
    .map((item) => ({
      day: Number(item.dataset.day),
      time: item.dataset.time,
    }))
    .sort((a, b) => a.day - b.day || a.time.localeCompare(b.time));
}

function setSelectedReminderSchedules(schedules) {
  const deduped = new Map();
  for (const schedule of schedules) {
    const day = Number(schedule.day);
    const time = String(schedule.time || "").trim();
    if (day >= 0 && day <= 6 && /^\d{2}:\d{2}$/.test(time)) {
      deduped.set(`${day}-${time}`, { day, time });
    }
  }
  const selected = [...deduped.values()].sort((a, b) => a.day - b.day || a.time.localeCompare(b.time));
  selectedTimeList.innerHTML = "";
  for (const schedule of selected) {
    const chip = document.createElement("span");
    chip.className = "time-chip";
    chip.dataset.selectedSchedule = `${schedule.day}-${schedule.time}`;
    chip.dataset.day = String(schedule.day);
    chip.dataset.time = schedule.time;
    chip.innerHTML = `<span>${dayNames[schedule.day]} ${schedule.time}</span><button type="button" data-schedule-remove="${schedule.day}-${schedule.time}" aria-label="移除 ${dayNames[schedule.day]} ${schedule.time}">×</button>`;
    selectedTimeList.append(chip);
  }
}

function addSelectedReminderSchedule(time = timeInput.value) {
  if (!/^\d{2}:\d{2}$/.test(time || "")) {
    showToast("先选择一个提醒时间。");
    return;
  }
  const days = getSelectedReminderDays();
  if (!days.length) {
    showToast("至少选择一个提醒日期。");
    return;
  }
  setSelectedReminderSchedules([
    ...getSelectedReminderSchedules(),
    ...days.map((day) => ({ day, time })),
  ]);
}

function moveTodoFromCloseout(todo, action, customDate = null) {
  if (action === "done") {
    todo.status = "已完成";
    todo.updatedAt = new Date().toISOString();
    return "已完成";
  }
  if (action === "memo") {
    memoItems.push(createMemoFromTodo(todo));
    markDeleted("todos", todo.id);
    todos = todos.filter((item) => item.id !== todo.id);
    saveMemoItems();
    return "先放这儿";
  }
  if (action === "custom" && customDate) {
    todo.date = customDate;
    return formatDateLabel(customDate);
  }
  todo.date = getCloseoutTarget(action);
  return getCloseoutTargetLabel(action);
}

function makeCloseoutItem(todo) {
  const item = document.createElement("li");
  item.className = "closeout-item";
  item.dataset.id = todo.id;

  const main = document.createElement("div");
  main.className = "todo-main";

  const title = document.createElement("p");
  title.className = "closeout-title";
  title.textContent = todo.title;

  const meta = document.createElement("div");
  meta.className = "todo-meta";
  const today = toDateKey(new Date());
  const dateLabel = todo.date < today ? `已过期 ${formatDateLabel(todo.date)}` : `原定 ${formatDateLabel(todo.date)}`;
  for (const text of [dateLabel, todo.priority, todo.module, todo.owner || "我", todo.status]) {
    const pill = document.createElement("span");
    pill.className = text === dateLabel || text === todo.priority ? "pill priority" : "pill";
    pill.textContent = text;
    meta.append(pill);
  }

  main.append(title, meta);

  const actions = document.createElement("div");
  actions.className = "closeout-quick-actions";
  actions.innerHTML = `
    <button class="small-button" type="button" data-closeout-action="done">完成</button>
    <button class="small-button" type="button" data-closeout-action="today">今天</button>
    <button class="small-button" type="button" data-closeout-action="tomorrow">明天</button>
    <button class="small-button" type="button" data-closeout-action="dayAfterTomorrow">后天</button>
    <button class="small-button" type="button" data-closeout-action="nextMonday">下周一</button>
    <button class="small-button" type="button" data-closeout-action="memo">先放这儿</button>
    <span class="closeout-date-control">
      <input type="date" data-closeout-date value="${getCloseoutTarget("tomorrow")}" min="${toDateKey(new Date())}" aria-label="选择转移日期" />
      <button class="small-button" type="button" data-closeout-action="custom">改日期</button>
    </span>
  `;

  item.append(main, actions);
  return item;
}

function renderDailyCloseout() {
  const items = getCloseoutTodos().sort((a, b) => a.date.localeCompare(b.date) || a.createdAt.localeCompare(b.createdAt));
  const showPanel = items.length || shouldShowDailyCloseout();
  dailyCloseout.classList.toggle("is-visible", showPanel);
  closeoutCount.textContent = `${items.length} 项待收尾`;
  closeoutEmpty.style.display = showPanel && !items.length ? "block" : "none";
  closeoutList.innerHTML = "";

  for (const todo of items) {
    closeoutList.append(makeCloseoutItem(todo));
  }
}

function getTodayTodoSection(todo) {
  if (isTodoFinished(todo)) return "done";
  if (todo.larkEventKey) return "lark";
  if (todo.priority === "今天必须" || todo.priority === "重要推进") return "now";
  return "later";
}

function makeTodoSection(titleText, items) {
  const group = document.createElement("section");
  group.className = "date-group todo-priority-section";

  const title = document.createElement("div");
  title.className = "date-title";
  title.innerHTML = `<span>${titleText}</span><span>${items.length} 项</span>`;

  const groupList = document.createElement("ul");
  groupList.className = "date-group-list";
  for (const todo of items) {
    groupList.append(makeTodoCard(todo));
  }

  group.append(title, groupList);
  return group;
}

function renderTodos() {
  const inboxTodos = todos.filter((todo) => !todo.date);
  const datedTodos = todos.filter((todo) => todo.date);
  const todayKey = toDateKey(new Date());
  const todayTodos = datedTodos.filter((todo) => todo.date === todayKey);
  const futureTodos = datedTodos.filter((todo) => todo.date !== todayKey);

  todoInboxList.innerHTML = "";
  todoDatedList.innerHTML = "";
  todoInboxEmpty.style.display = inboxTodos.length ? "none" : "block";
  todoDatedEmpty.style.display = datedTodos.length ? "none" : "block";
  inboxCount.textContent = `${inboxTodos.length} 项`;
  datedCount.textContent = `${datedTodos.length} 项`;

  for (const todo of inboxTodos) {
    todoInboxList.append(makeTodoCard(todo));
  }

  const todaySections = [
    ["now", "现在优先做"],
    ["lark", "日程相关动作"],
    ["later", "有空再处理"],
    ["done", "已完成"],
  ];
  for (const [sectionKey, label] of todaySections) {
    const sectionItems = todayTodos
      .filter((todo) => getTodayTodoSection(todo) === sectionKey)
      .sort(sectionKey === "now" ? compareTodayPriorityTodos : compareTodosWithinDate);
    if (sectionItems.length) {
      todoDatedList.append(makeTodoSection(label, sectionItems));
    }
  }

  const groups = Object.entries(futureTodos
    .sort((a, b) => compareWorkbenchDates(a.date, b.date) || compareTodosWithinDate(a, b))
    .reduce((result, todo) => {
      result[todo.date] ||= [];
      result[todo.date].push(todo);
      return result;
    }, {}))
    .sort(([dateA], [dateB]) => compareWorkbenchDates(dateA, dateB));

  for (const [dateKey, items] of groups) {
    const group = document.createElement("section");
    group.className = "date-group";

    const title = document.createElement("div");
    title.className = "date-title";
    title.innerHTML = `<span>${formatDateLabel(dateKey)}</span><span>${items.length} 项</span>`;

    const groupList = document.createElement("ul");
    groupList.className = "date-group-list";
    for (const todo of items) {
      groupList.append(makeTodoCard(todo));
    }

    group.append(title, groupList);
    todoDatedList.append(group);
  }

  renderDailyCloseout();
  renderTodayInspector();
  renderReview();
}

function todoMatchesSearch(todo, query) {
  if (!query) return true;
  const text = [todo.title, todo.module, todo.priority, todo.status, todo.owner, todo.notes, todo.ideas, todo.date]
    .join(" ")
    .toLowerCase();
  return text.includes(query.toLowerCase());
}

function makeReviewRow(todo) {
  const row = document.createElement("article");
  row.className = "review-row";

  const date = document.createElement("div");
  date.className = "review-date";
  date.textContent = todo.date ? formatDateLabel(todo.date) : "待分配";

  const main = document.createElement("div");
  const title = document.createElement("p");
  title.className = "review-title";
  title.textContent = todo.title;

  const meta = document.createElement("div");
  meta.className = "todo-meta";
  const ownerName = todo.owner || "我";
  const reviewFields = [
    { text: todo.priority, className: todo.priority === "今天必须" ? "pill priority" : "meta-text" },
    todo.needsReview ? { text: "需复盘", className: "pill priority" } : null,
    ownerName !== "我" ? { text: ownerName, className: "pill subtle" } : null,
    { text: todo.module, className: "meta-text" },
    { text: todo.status, className: "meta-text" },
  ].filter(Boolean);
  for (const field of reviewFields) {
    const tag = document.createElement("span");
    tag.className = field.className;
    tag.textContent = field.text;
    meta.append(tag);
  }

  main.append(title, meta);

  const noteText = [richToText(todo.notes), richToText(todo.ideas)].filter(Boolean).join("\n");
  if (noteText) {
    const note = document.createElement("p");
    note.className = "review-note";
    note.textContent = noteText.length > 140 ? `${noteText.slice(0, 140)}...` : noteText;
    main.append(note);
  }

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.innerHTML = `<button class="small-button" type="button" data-review-open="${todo.id}">查看</button>`;

  row.append(date, main, actions);
  return row;
}

function archivedProjectMatchesSearch(project, query) {
  if (!query) return true;
  const nodes = getProjectNodes(project.id);
  const projectEntries = projectItems.filter((item) => item.projectId === project.id);
  return [
    project.name,
    project.type,
    project.owner,
    project.notes,
    project.nextStep,
    ...nodes.map((todo) => todo.title),
    ...projectEntries.map((item) => `${item.title} ${item.body}`),
  ].join(" ").toLowerCase().includes(query.toLowerCase());
}

function makeArchivedProjectReviewCard(project) {
  const nodes = getProjectNodes(project.id);
  const materials = getProjectMaterials(project.id);
  const breakdownItems = getProjectBreakdownItems(project.id);
  const archivedDate = String(project.archivedAt || project.updatedAt || "").slice(0, 10);
  const card = document.createElement("details");
  card.className = "archived-project-card";
  card.style.setProperty("--project-color", project.color || getProjectDefaultColor(project.name));
  card.innerHTML = `
    <summary>
      <span class="archived-project-color"></span>
      <span class="archived-project-summary">
        <strong>${escapeHtml(project.name)}</strong>
        <span>${escapeHtml(archivedDate ? formatDateLabel(archivedDate) : "归档时间待确认")}</span>
      </span>
      <span class="archived-project-counts">${nodes.length} 个节点 · ${materials.length} 项资料 · ${breakdownItems.length} 项待拆</span>
    </summary>
    <div class="archived-project-body">
      <div class="todo-meta">
        <span class="pill priority">${escapeHtml(project.status)}</span>
        <span class="pill">${escapeHtml(project.type)}</span>
        <span class="pill">负责人 ${escapeHtml(project.owner || "我")}</span>
      </div>
      ${project.notes ? `<p>${escapeHtml(project.notes)}</p>` : ""}
      ${nodes.length ? `
        <div class="archived-project-node-list">
          ${nodes.map((todo) => `<span>${escapeHtml(todo.date ? formatDateLabel(todo.date) : "未排期")} · ${escapeHtml(todo.title)} · ${escapeHtml(todo.status || "未开始")}</span>`).join("")}
        </div>
      ` : `<p class="project-detail-empty">这个项目没有时间节点。</p>`}
    </div>
  `;
  return card;
}

function renderArchivedProjects(query = "") {
  if (!archivedProjectList || !archivedProjectEmpty || !archivedProjectCount) return;
  const archivedProjects = projects
    .filter(isProjectArchived)
    .filter((project) => archivedProjectMatchesSearch(project, query))
    .sort((a, b) => (b.archivedAt || b.updatedAt).localeCompare(a.archivedAt || a.updatedAt));
  archivedProjectList.innerHTML = "";
  archivedProjectEmpty.style.display = archivedProjects.length ? "none" : "block";
  archivedProjectCount.textContent = `${archivedProjects.length} 个`;
  for (const project of archivedProjects) archivedProjectList.append(makeArchivedProjectReviewCard(project));
}

function renderReview() {
  const today = toDateKey(new Date());
  const query = reviewSearch.value.trim();
  const filter = reviewFilter.value;
  renderArchivedProjects(query);

  let items = todos.filter((todo) => todoMatchesSearch(todo, query));
  if (filter === "past") {
    items = items.filter((todo) => todo.date && todo.date < today);
  }
  if (filter === "done") {
    items = items.filter((todo) => todo.status === "已完成" || todo.status === "已归档");
  }
  if (filter === "review") {
    items = items.filter((todo) => todo.needsReview || todo.status === "需复盘");
  }

  items.sort((a, b) => {
    const dateA = a.date || "9999-12-31";
    const dateB = b.date || "9999-12-31";
    return dateB.localeCompare(dateA) || b.createdAt.localeCompare(a.createdAt);
  });

  reviewList.innerHTML = "";
  reviewEmpty.style.display = items.length ? "none" : "block";
  let lastDateKey = null;
  for (const todo of items) {
    const dateKey = todo.date || "__unscheduled__";
    if (dateKey !== lastDateKey) {
      const heading = document.createElement("div");
      heading.className = "review-date-heading";
      heading.textContent = todo.date ? formatDateLabel(todo.date) : "待分配";
      reviewList.append(heading);
      lastDateKey = dateKey;
    }
    reviewList.append(makeReviewRow(todo));
  }
}

function formatNext(reminder, from = new Date()) {
  const next = getNextOccurrence(reminder, from);
  const date = new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(next);
  return `下次：${date}`;
}

function formatReminderDays(reminder) {
  const days = getReminderDays(reminder);
  if (days.length === 7) return "每天";
  if (days.length === 5 && days.every((day, index) => day === index + 1)) return "工作日";
  return days.map((day) => dayNames[day]).join("、");
}

function formatReminderTimes(reminder) {
  return getReminderTimes(reminder).join("、");
}

function formatReminderSchedule(reminder) {
  return getReminderSchedules(reminder)
    .map((schedule) => `${dayNames[schedule.day]} ${schedule.time}`)
    .join("；");
}

function makeReminderScheduleEditor(reminder) {
  const editor = document.createElement("div");
  editor.className = "reminder-schedule-editor";

  const chips = document.createElement("div");
  chips.className = "reminder-schedule-list";
  for (const schedule of getReminderSchedules(reminder)) {
    const chip = document.createElement("span");
    chip.className = "time-chip";
    chip.innerHTML = `
      <span>${dayNames[schedule.day]} ${schedule.time}</span>
      <button type="button" data-action="remove-schedule" data-day="${schedule.day}" data-time="${schedule.time}" aria-label="移除 ${dayNames[schedule.day]} ${schedule.time}">×</button>
    `;
    chips.append(chip);
  }

  const addRow = document.createElement("div");
  addRow.className = "reminder-schedule-add";
  const daySelect = document.createElement("select");
  daySelect.dataset.scheduleDay = "";
  for (const day of [1, 2, 3, 4, 5, 6, 0]) {
    const option = document.createElement("option");
    option.value = String(day);
    option.textContent = dayNames[day];
    option.selected = day === new Date().getDay();
    daySelect.append(option);
  }

  const time = document.createElement("input");
  time.type = "time";
  time.value = "17:00";
  time.dataset.scheduleTime = "";

  const add = document.createElement("button");
  add.className = "small-button";
  add.type = "button";
  add.dataset.action = "add-schedule";
  add.textContent = "加入";

  addRow.append(daySelect, time, add);
  editor.append(chips, addRow);
  return editor;
}

function getNextOccurrence(reminder, from = new Date()) {
  return getReminderSchedules(reminder)
    .map(({ day, time }) => {
      const [hour, minute] = time.split(":").map(Number);
      const next = new Date(from);
      next.setHours(hour, minute, 0, 0);
      let daysUntil = day - next.getDay();
      if (daysUntil < 0 || (daysUntil === 0 && next <= from)) {
        daysUntil += 7;
      }
      next.setDate(next.getDate() + daysUntil);
      return next;
    })
    .sort((a, b) => a - b)[0];
}

function isReminderToday(reminder, date = new Date()) {
  return !reminder.paused && getReminderSchedules(reminder).some((schedule) => schedule.day === date.getDay());
}

function getReminderOccurrenceKey(date, time) {
  return `${toDateKey(date)} ${time}`;
}

function isReminderCompletedToday(reminder, time, date = new Date()) {
  const occurrenceKey = getReminderOccurrenceKey(date, time);
  return (reminder.completedKeys || []).includes(occurrenceKey) || (
    getReminderTimes(reminder).length === 1 && (reminder.completedDates || []).includes(toDateKey(date))
  );
}

function isReminderSkippedToday(reminder, time, date = new Date()) {
  return (reminder.skippedKeys || []).includes(getReminderOccurrenceKey(date, time));
}

function setReminderCompletedToday(reminder, time, completed, date = new Date()) {
  const occurrenceKey = getReminderOccurrenceKey(date, time);
  const keys = new Set(reminder.completedKeys || []);
  if (completed) {
    keys.add(occurrenceKey);
  } else {
    keys.delete(occurrenceKey);
  }
  reminder.completedKeys = [...keys].sort();
}

function setReminderSkippedToday(reminder, time, skipped, date = new Date()) {
  const occurrenceKey = getReminderOccurrenceKey(date, time);
  const keys = new Set(reminder.skippedKeys || []);
  if (skipped) keys.add(occurrenceKey);
  else keys.delete(occurrenceKey);
  reminder.skippedKeys = [...keys].sort();
}

function makeReminderCard(reminder, compact = false, occurrenceTime = null) {
  const displayTime = occurrenceTime || formatReminderTimes(reminder);
  const isCompletedToday = compact && isReminderCompletedToday(reminder, occurrenceTime);
  const item = document.createElement("li");
  item.className = `reminder-card${reminder.paused ? " is-paused" : ""}${isCompletedToday ? " is-done" : ""}`;
  item.dataset.id = reminder.id;
  if (occurrenceTime) item.dataset.time = occurrenceTime;

  const main = document.createElement("div");
  main.className = "reminder-main";

  const title = document.createElement("p");
  title.className = "task-title";
  title.textContent = reminder.task;

  const meta = document.createElement("div");
  meta.className = "task-meta";
  meta.innerHTML = compact
    ? `<span>今天 ${displayTime}</span><span>${isCompletedToday ? "今日已完成" : "待完成"}</span>`
    : `
      <span>${formatReminderSchedule(reminder)}</span>
      <span>${reminder.paused ? "已暂停" : "已启用"}</span>
      <span>${formatNext(reminder)}</span>
    `;

  main.append(title, meta);

  item.append(main);
  const actions = document.createElement("div");
  actions.className = "actions";
  actions.innerHTML = compact
    ? `<button class="small-button" type="button" data-action="complete-today" title="${isCompletedToday ? "撤回今日完成" : "标记今日完成"}">${isCompletedToday ? "撤回" : "完成"}</button>`
    : `
      <button class="small-button" type="button" data-action="test" title="测试提醒">测试</button>
      <button class="small-button" type="button" data-action="toggle" title="${reminder.paused ? "启用" : "暂停"}">${reminder.paused ? "启用" : "暂停"}</button>
      <button class="small-button danger" type="button" data-action="delete" title="删除">删除</button>
    `;
  item.append(actions);
  if (!compact) {
    item.append(makeReminderScheduleEditor(reminder));
  }
  return item;
}

function renderTodayReminders() {
  const items = reminders
    .filter((reminder) => isReminderToday(reminder))
    .flatMap((reminder) => getReminderSchedules(reminder)
      .filter((schedule) => schedule.day === new Date().getDay())
      .map((schedule) => ({ reminder, time: schedule.time })))
    .sort((a, b) => a.time.localeCompare(b.time) || a.reminder.task.localeCompare(b.reminder.task, "zh-CN"));

  todayReminderList.innerHTML = "";
  todayReminderEmpty.style.display = items.length ? "none" : "block";
  todayReminderCount.textContent = `${items.length} 项`;

  for (const item of items) {
    todayReminderList.append(makeReminderCard(item.reminder, true, item.time));
  }
}

function getLarkEventKey(event) {
  return event.id || `${event.title}-${event.start}-${event.end}-${event.date || toDateKey(new Date())}`;
}

function makeLarkCalendarItem(event) {
  const item = document.createElement("li");
  const key = getLarkEventKey(event);
  const record = getLarkCalendarRecord(key);
  const isExpanded = expandedLarkCalendarId === key;
  item.className = `lark-calendar-item${record.status === "已完成" ? " is-done" : ""}${isExpanded ? " is-expanded" : ""}`;
  item.dataset.id = key;

  const main = document.createElement("div");
  main.className = "lark-calendar-main";

  const time = document.createElement("span");
  time.className = "lark-calendar-time";
  time.textContent = event.timeText || "全天";

  const title = document.createElement("p");
  title.className = "lark-calendar-title";
  title.textContent = event.title || "未命名日程";

  main.append(time, title);

  const actions = document.createElement("div");
  actions.className = "lark-calendar-actions";
  actions.innerHTML = `
    <button class="small-button" type="button" data-lark-calendar-action="detail">${isExpanded ? "收起" : "详情"}</button>
    <button class="small-button" type="button" data-lark-calendar-action="done">${record.status === "已完成" ? "撤回" : "完成"}</button>
  `;

  item.append(main, actions);
  if (isExpanded) {
    item.append(makeLarkCalendarDetail(event, record));
  }
  return item;
}

function makeLarkCalendarDetail(event, record) {
  const detail = document.createElement("div");
  detail.className = "lark-calendar-detail";

  const summary = document.createElement("p");
  summary.className = "lark-calendar-summary";
  summary.textContent = [event.timeText || "全天", event.title || "未命名日程"].filter(Boolean).join(" · ");

  const writing = document.createElement("div");
  writing.className = "detail-writing";
  writing.append(
    makeLarkRichField("日程记录", record.notes, "notes", "这场会/培训/沟通的结论、现场情况、后续要点"),
    makeLarkRichField("后续想法", record.ideas, "ideas", "这里可以放暂时还没变成 Todo 的想法"),
  );

  detail.append(summary, writing);
  return detail;
}

function makeLarkRichField(labelText, value, field, placeholder) {
  const control = makeRichEditor(value, field, placeholder);
  const editor = control.querySelector("[data-todo-rich-field]");
  if (editor) {
    delete editor.dataset.todoRichField;
    editor.dataset.larkCalendarRichField = field;
  }
  return makeField(labelText, control);
}

function renderLarkCalendar() {
  if (!larkCalendarList) return;
  larkCalendarList.innerHTML = "";

  if (larkCalendarStatus === "loading") {
    larkCalendarCount.textContent = "同步中";
    larkCalendarEmpty.style.display = "block";
    larkCalendarEmpty.querySelector("p").textContent = "正在读取飞书日程。";
    larkCalendarEmpty.querySelector("span").textContent = "稍等一下，我会把今天的硬时间安排拉进来。";
    return;
  }

  if (larkCalendarStatus === "error") {
    larkCalendarCount.textContent = "未连接";
    larkCalendarEmpty.style.display = "block";
    larkCalendarEmpty.querySelector("p").textContent = "暂未连接飞书日历";
    const rawLarkMsg = larkCalendarHint || larkCalendarError || "";
    const friendlyLarkMsg = /lark-cli/i.test(rawLarkMsg)
      ? "本地可选功能，未配置飞书同步时不影响日常待办使用。"
      : (rawLarkMsg || "完成授权后这里会自动同步今天的日程。");
    larkCalendarEmpty.querySelector("span").textContent = friendlyLarkMsg;
    return;
  }

  larkCalendarCount.textContent = `${larkCalendarEvents.length} 项`;
  larkCalendarEmpty.style.display = larkCalendarEvents.length ? "none" : "block";
  larkCalendarEmpty.querySelector("p").textContent = "今天飞书日历里没有日程。";
  larkCalendarEmpty.querySelector("span").textContent = "如果临时加了会，点刷新就能重新同步。";

  for (const event of larkCalendarEvents) {
    larkCalendarList.append(makeLarkCalendarItem(event));
  }
}

async function fetchLarkCalendar() {
  if (!canUseFileStorage()) return;
  larkCalendarStatus = "loading";
  renderLarkCalendar();
  try {
    const response = await fetchWithTimeout(`/api/lark-calendar/today?date=${toDateKey(new Date())}`, { cache: "no-store" }, 22000);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!data.ok) {
      larkCalendarEvents = [];
      larkCalendarStatus = "error";
      larkCalendarError = data.error || "";
      larkCalendarHint = data.hint || "";
      renderLarkCalendar();
      return;
    }
    larkCalendarEvents = Array.isArray(data.events) ? data.events : [];
    larkCalendarStatus = "ready";
    larkCalendarError = "";
    larkCalendarHint = "";
    renderLarkCalendar();
  } catch (error) {
    larkCalendarStatus = "error";
    larkCalendarError = error?.name === "AbortError"
      ? "读取飞书日程超时，请稍后点刷新重试。"
      : "暂时没读到飞书日程，请确认本地工作台服务在运行。";
    larkCalendarHint = "";
    renderLarkCalendar();
  }
}

function render() {
  list.innerHTML = "";
  emptyState.style.display = reminders.length ? "none" : "block";

  const sorted = [...reminders].sort((a, b) => getNextOccurrence(a) - getNextOccurrence(b));
  for (const reminder of sorted) {
    list.append(makeReminderCard(reminder));
  }
  renderTodayReminders();
  renderLarkCalendar();
  renderProjects();
  renderWorkCalendar();
}

async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    showToast("这个浏览器不支持系统通知，我会使用页面内提醒。");
    return false;
  }
  if (Notification.permission === "granted") {
    showToast("浏览器通知已开启。");
    return true;
  }
  if (Notification.permission === "denied") {
    showToast("浏览器通知被关闭了，可以在浏览器设置里重新允许。");
    return false;
  }
  const permission = await Notification.requestPermission();
  showToast(permission === "granted" ? "浏览器通知已开启。" : "未开启浏览器通知，我会使用页面内提醒。");
  return permission === "granted";
}

function notify(reminder, time = null) {
  const title = "每周提醒";
  const body = `现在该做：${reminder.task}${time ? `（${time}）` : ""}`;
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body });
  }
  showToast(body);
  showAlarm(reminder, time || getReminderTimes(reminder)[0] || "");
  showDesktopPetAlarm(reminder, time || "");
}

function notifyDailyCloseout(count) {
  const title = "待收尾任务";
  const body = `还有 ${count} 项任务需要重新安排日期，可以一键转到今天、明天、后天、下周一或自选日期。`;
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body });
  }
  showToast(body);
  playChime();
}

let alarmReturnFocusEl = null;

function playChime() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    const context = new AudioContext();
    const gain = context.createGain();
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 880;
    gain.gain.setValueAtTime(0.001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.16, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.42);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.onended = () => {
      context.close?.().catch?.(() => {});
    };
    oscillator.start();
    oscillator.stop(context.currentTime + 0.46);
  } catch {
    // Ignore autoplay or AudioContext limits in restricted browsers.
  }
}

function showAlarm(reminder, time) {
  if (!alarmOverlay || !alarmTitle || !alarmBody || !alarmTime) return;
  if (alarmOverlay.hidden && document.activeElement instanceof HTMLElement) {
    alarmReturnFocusEl = document.activeElement;
  }
  activeAlarm = {
    reminderId: reminder.id,
    time,
  };
  alarmTitle.textContent = reminder.task;
  alarmTime.textContent = time ? `✦ 星光提醒 · ${time}` : "✦ 固定提醒";
  alarmBody.textContent = "如果不方便立刻处理，可以先稍后提醒；忙完记得回来点已完成。";
  alarmOverlay.hidden = false;
  window.dispatchEvent(new CustomEvent("stardust:alarm", { detail: { open: true } }));
  playChime();
  requestAnimationFrame(() => {
    alarmOverlay.querySelector('button[data-alarm-action="done"]')?.focus();
  });
}

function showDesktopPetAlarm(reminder, time) {
  if (!canUseFileStorage()) return;
  fetch("/api/desktop-alarm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      task: reminder.task,
      time,
    }),
  }).catch(() => {});
}

function closeAlarm() {
  activeAlarm = null;
  if (alarmOverlay) alarmOverlay.hidden = true;
  window.dispatchEvent(new CustomEvent("stardust:alarm", { detail: { open: false } }));
  if (alarmReturnFocusEl && alarmReturnFocusEl.isConnected) {
    alarmReturnFocusEl.focus();
  }
  alarmReturnFocusEl = null;
}

alarmOverlay?.addEventListener("keydown", (event) => {
  if (event.key !== "Tab" || alarmOverlay.hidden) return;
  const focusable = Array.from(alarmOverlay.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), [tabindex]:not([tabindex="-1"])'));
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

function snoozeReminder(reminder, time, minutes) {
  const now = new Date();
  const snoozeAt = new Date(now.getTime() + minutes * 60 * 1000);
  reminder.snoozedAlarms = [
    ...(reminder.snoozedAlarms || []),
    {
      id: uid(),
      originalKey: getReminderOccurrenceKey(now, time),
      time,
      dueAt: snoozeAt.toISOString(),
    },
  ];
}

function fireSnoozedAlarms(now = new Date()) {
  let changed = false;
  for (const reminder of reminders) {
    if (reminder.paused || !Array.isArray(reminder.snoozedAlarms)) continue;
    const due = reminder.snoozedAlarms.filter((item) => new Date(item.dueAt) <= now);
    if (!due.length) continue;
    reminder.snoozedAlarms = reminder.snoozedAlarms.filter((item) => new Date(item.dueAt) > now);
    changed = true;
    for (const item of due) {
      notify(reminder, item.time);
    }
  }
  if (changed) {
    saveReminders();
    render();
  }
}

function tick() {
  const now = new Date();
  clockText.textContent = new Intl.DateTimeFormat("zh-CN", {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(now);

  const todayKey = toDateKey(now);
  const current = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  let changed = false;
  for (const reminder of reminders) {
    if (reminder.paused) continue;
    if (!getReminderSchedules(reminder).some((schedule) => schedule.day === now.getDay() && schedule.time === current)) continue;
    if (isReminderCompletedToday(reminder, current, now) || isReminderSkippedToday(reminder, current, now)) continue;
    const firedKey = `${todayKey} ${current}`;
    if ((reminder.firedKeys || []).includes(firedKey)) continue;

    reminder.firedKeys = [...new Set([...(reminder.firedKeys || []), firedKey])].sort();
    changed = true;
    notify(reminder, current);
  }

  if (changed) {
    saveReminders();
    render();
  }

  fireSnoozedAlarms(now);

  const closeoutItems = getCloseoutTodos(now);
  if (shouldShowDailyCloseout(now) && closeoutItems.length && appState.lastCloseoutPrompt !== todayKey) {
    appState.lastCloseoutPrompt = todayKey;
    saveAppState();
    notifyDailyCloseout(closeoutItems.length);
  }
  renderDailyCloseout();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const task = taskInput.value.trim();
  let schedules = getSelectedReminderSchedules();
  if (!task) return;
  if (!schedules.length) {
    addSelectedReminderSchedule();
    schedules = getSelectedReminderSchedules();
  }
  if (!schedules.length) {
    showToast("至少加入一个提醒时间表。");
    return;
  }

  reminders.push({
    id: uid(),
    task,
    days: [...new Set(schedules.map((schedule) => schedule.day))].sort((a, b) => a - b),
    times: [...new Set(schedules.map((schedule) => schedule.time))].sort((a, b) => a.localeCompare(b)),
    schedules,
    paused: false,
    firedKeys: [],
    completedKeys: [],
    createdAt: new Date().toISOString(),
  });
  saveReminders();
  render();
  form.reset();
  setSelectedReminderDays([5]);
  setSelectedReminderSchedules([{ day: 5, time: "17:00" }]);
  timeInput.value = "17:00";
  taskInput.focus();
  showToast("提醒已添加。");

  if ("Notification" in window && Notification.permission === "default") {
    await requestNotificationPermission();
  }
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = todoInput.value.trim();
  if (!title) return;

  if (targetInput.value === "memo") {
    memoItems.push(normalizeMemoItem({
      id: uid(),
      title,
      body: title,
      category: "先记着",
      status: "待整理",
      module: moduleInput.value,
      owner: getOwnerValue(),
      reviewDate: getDefaultMemoReviewDate("待整理"),
      screenshots: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    saveMemoItems();
    renderMemoItems();
    todoInput.value = "";
    resetOwnerField();
    todoInput.focus();
    showToast("已放进先放这儿。");
    return;
  }

  const date = getTargetDate();
  todos.push({
    id: uid(),
    title,
    date,
    module: moduleInput.value,
    priority: priorityInput.value,
    status: "未开始",
    owner: getOwnerValue(),
    notes: "",
    ideas: "",
    needsReview: false,
    createdAt: new Date().toISOString(),
  });

  saveTodos();
  renderTodos();
  todoInput.value = "";
  resetOwnerField();
  todoInput.focus();
  showToast(`已加入 ${formatDateLabel(date)}。`);
});

memoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const body = memoTextInput.value.trim();
  if (!body && !pendingMemoScreenshots.length && !pendingMemoAttachments.length) {
    showToast("先写一句话，或者放一张截图 / Markdown 进来。");
    return;
  }

  const firstAttachment = pendingMemoAttachments[0];
  const item = normalizeMemoItem({
    id: uid(),
    title: getMemoTitle(body) || (pendingMemoScreenshots.length ? "截图备忘" : firstAttachment?.name || "附件备忘"),
    body,
    category: selectedMemoCategory,
    status: selectedMemoStatus,
    reviewDate: getDefaultMemoReviewDate(selectedMemoStatus),
    screenshots: pendingMemoScreenshots,
    attachments: pendingMemoAttachments,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  if (item.category === "待写 Issue") {
    item.linkedIssueId = ensureMemoIssue(item);
    saveIssueDrafts();
  }

  memoItems.push(item);
  saveMemoItems();
  renderMemoItems();
  renderIssueDrafts();
  memoTextInput.value = "";
  pendingMemoScreenshots = [];
  pendingMemoAttachments = [];
  selectedMemoCategory = "先记着";
  selectedMemoStatus = "待整理";
  renderPendingMemoScreenshots();
  renderMemoItems();
  memoTextInput.focus();
  showToast(item.linkedIssueId ? "已放进备忘箱，也同步到待写 Issue。" : "已放进备忘箱。");
});

projectForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = projectNameInput.value.trim();
  if (!name) {
    showToast("先写一个项目名。");
    return;
  }

  const project = normalizeProject({
    id: uid(),
    name,
    type: projectTypeInput.value,
    owner: projectOwnerInput.value.trim() || "我",
    nextStep: projectNextStepInput.value.trim(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  projects.push(project);
  selectedProjectId = project.id;
  calendarSelectedProjectId = project.id;
  calendarExpandedProjectId = project.id;
  saveProjects();
  renderProjects();
  renderWorkCalendar();
  projectForm.reset();
  projectOwnerInput.value = "我";
  projectNameInput.focus();
  showToast("项目已创建。");
});

issueForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = issueTitleInput.value.trim();
  if (!title) return;

  const issue = normalizeIssueDraft({
    id: uid(),
    title,
    module: issueModuleInput.value,
    priority: issuePriorityInput.value,
    notes: issueNotesInput.value.trim(),
    status: "待写",
    screenshots: pendingIssueScreenshots,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  if (issueSyncTodoInput.checked) {
    issue.linkedTodoId = ensureIssueTodo(issue);
    saveTodos();
  }

  issueDrafts.push(issue);
  saveIssueDrafts();
  renderIssueDrafts();
  renderTodos();
  resetIssueForm();
  showToast(issue.linkedTodoId ? "已保存 Issue，并放进今天 Todo。" : "已保存到待写 Issue。");
});

targetInput.addEventListener("change", () => {
  customDateField.classList.toggle("is-hidden", targetInput.value !== "custom");
  if (targetInput.value === "custom" && !dateInput.value) {
    dateInput.value = toDateKey(new Date());
  }
});

ownerInput.addEventListener("change", () => {
  const isCustom = ownerInput.value === "custom";
  ownerInput.classList.toggle("is-hidden", isCustom);
  ownerCustomInput.classList.toggle("is-hidden", !isCustom);
  if (isCustom) ownerCustomInput.focus();
});

ownerCustomInput.addEventListener("blur", () => {
  if (ownerCustomInput.value.trim()) return;
  ownerInput.value = "我";
  ownerInput.classList.remove("is-hidden");
  ownerCustomInput.classList.add("is-hidden");
});

document.addEventListener("click", (event) => {
  const alarmButton = event.target.closest("button[data-alarm-action]");
  if (alarmButton) {
    if (!activeAlarm) {
      closeAlarm();
      return;
    }
    const reminder = reminders.find((item) => item.id === activeAlarm.reminderId);
    if (!reminder) {
      closeAlarm();
      return;
    }

    const action = alarmButton.dataset.alarmAction;
    if (action === "done") {
      setReminderCompletedToday(reminder, activeAlarm.time, true);
      showToast("提醒已完成。");
    }
    if (action === "snooze-10" || action === "snooze-30") {
      const minutes = action === "snooze-10" ? 10 : 30;
      snoozeReminder(reminder, activeAlarm.time, minutes);
      showToast(`${minutes} 分钟后再次提醒。`);
    }
    if (action === "skip") {
      setReminderSkippedToday(reminder, activeAlarm.time, true);
      showToast("今天不再提醒这一项。");
    }

    saveReminders();
    render();
    closeAlarm();
    return;
  }

  const larkCalendarButton = event.target.closest("button[data-lark-calendar-action]");
  if (larkCalendarButton) {
    const row = larkCalendarButton.closest(".lark-calendar-item");
    const key = row?.dataset.id;
    const sourceEvent = larkCalendarEvents.find((item) => getLarkEventKey(item) === key);
    if (!key || !sourceEvent) return;

    const record = getLarkCalendarRecord(key);
    if (larkCalendarButton.dataset.larkCalendarAction === "detail") {
      expandedLarkCalendarId = expandedLarkCalendarId === key ? null : key;
    }

    if (larkCalendarButton.dataset.larkCalendarAction === "done") {
      record.status = record.status === "已完成" ? "未完成" : "已完成";
      record.updatedAt = new Date().toISOString();
      showToast(record.status === "已完成" ? "日程已完成。" : "已撤回未完成。");
    }

    saveLarkCalendarRecords();
    renderLarkCalendar();
    return;
  }

  const calendarViewButton = event.target.closest("button[data-calendar-view]");
  if (calendarViewButton) {
    calendarViewMode = calendarViewButton.dataset.calendarView;
    renderWorkCalendar();
    return;
  }

  const calendarNavButton = event.target.closest("button[data-calendar-nav]");
  if (calendarNavButton) {
    const action = calendarNavButton.dataset.calendarNav;
    if (action === "prev") calendarMonthCursor = addMonthsToKey(calendarMonthCursor, -3);
    if (action === "next") calendarMonthCursor = addMonthsToKey(calendarMonthCursor, 3);
    if (action === "today") calendarMonthCursor = toDateKey(new Date()).slice(0, 7);
    if (calendarMonthInput) calendarMonthInput.value = calendarMonthCursor;
    renderWorkCalendar();
    return;
  }

  const calendarProjectCard = event.target.closest(".calendar-project-card");
  if (calendarProjectCard && !event.target.closest("button, input, select, textarea, a")) {
    calendarSelectedProjectId = calendarProjectCard.dataset.calendarProjectId;
    calendarExpandedProjectId = calendarSelectedProjectId;
    selectedCalendarNodeId = null;
    selectedCalendarActivityGroupKey = null;
    if (calendarProjectFilter) calendarProjectFilter.value = calendarSelectedProjectId;
    renderWorkCalendar();
    return;
  }

  const calendarProjectDateCard = event.target.closest(".calendar-project-date-card");
  if (calendarProjectDateCard && !event.target.closest("button, input, select, textarea, a")) {
    calendarSelectedProjectId = calendarProjectDateCard.dataset.calendarProjectId;
    calendarExpandedProjectId = calendarSelectedProjectId;
    selectedCalendarNodeId = null;
    selectedCalendarActivityGroupKey = null;
    if (calendarProjectFilter) calendarProjectFilter.value = calendarSelectedProjectId;
    renderWorkCalendar();
    return;
  }

  const calendarActivityCard = event.target.closest(".calendar-activity-card");
  if (calendarActivityCard && !event.target.closest("button, input, select, textarea, a")) {
    selectedCalendarActivityGroupKey = calendarActivityCard.dataset.activityGroupKey;
    selectedCalendarNodeId = null;
    renderWorkCalendar();
    return;
  }

  const calendarNodeCard = event.target.closest(".calendar-node-card");
  if (calendarNodeCard && !event.target.closest("button, input, select, textarea, a")) {
    selectedCalendarNodeId = calendarNodeCard.dataset.calendarNodeId;
    selectedCalendarActivityGroupKey = null;
    const node = getCalendarNodeById(selectedCalendarNodeId);
    if (node) {
      calendarSelectedProjectId = node.projectId;
      calendarExpandedProjectId = node.projectId;
    }
    renderWorkCalendar();
    return;
  }

  const calendarActionButton = event.target.closest("button[data-calendar-action]");
  if (calendarActionButton) {
    const action = calendarActionButton.dataset.calendarAction;
    let project = getProjectById(calendarSelectedProjectId);

    function openCalendarInlinePrompt(placeholder, initialValue, submitLabel, onSubmit) {
      const toolbar = document.querySelector("#workCalendarView .calendar-toolbar");
      if (!toolbar) return;
      document.querySelector("#workCalendarView .calendar-inline-prompt")?.remove();
      const bar = document.createElement("form");
      bar.className = "calendar-inline-prompt";
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = placeholder;
      input.value = initialValue || "";
      input.maxLength = 80;
      const okBtn = document.createElement("button");
      okBtn.type = "submit";
      okBtn.className = "primary-button";
      okBtn.textContent = submitLabel || "确认";
      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = "small-button";
      cancelBtn.textContent = "取消";
      cancelBtn.addEventListener("click", () => bar.remove());
      bar.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          bar.remove();
        }
      });
      bar.addEventListener("submit", (e) => {
        e.preventDefault();
        const val = input.value.trim();
        if (!val) {
          showToast("名称不能为空。");
          input.focus();
          return;
        }
        bar.remove();
        onSubmit(val);
      });
      bar.append(input, okBtn, cancelBtn);
      toolbar.after(bar);
      input.focus();
      input.select();
    }

    if (action === "new-project") {
      openCalendarInlinePrompt("输入新项目名称，例如：5.20 酒吧联名活动", "", "创建项目", (name) => {
        const created = normalizeProject({
          id: uid(),
          name,
          owner: "我",
          type: "运营项目",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        projects.push(created);
        calendarSelectedProjectId = created.id;
        calendarExpandedProjectId = created.id;
        selectedProjectId = created.id;
        saveProjects();
        renderProjects();
        renderWorkCalendar();
        showToast("项目已创建，并同步到项目跟进。");
      });
      return;
    }

    if (action === "collapse-project") {
      calendarExpandedProjectId = "";
      renderCalendarProjectCards();
      return;
    }

    if (action === "add-stage") {
      if (!project) {
        showToast("先选择或新建一个项目。");
        return;
      }
      openCalendarInlinePrompt("输入新阶段名称，例如：场地确认", "", "新增阶段", (name) => {
        project.stages = normalizeProjectStages([
          ...(project.stages || []),
          createProjectStage(name, project.stages?.length || 0),
        ]);
        project.updatedAt = new Date().toISOString();
        saveProjects();
        renderProjects();
        renderWorkCalendar();
        showToast("阶段已新增。");
      });
      return;
    }

    if (action === "rename-stage") {
      if (!project) return;
      const stage = (project.stages || []).find((item) => item.id === calendarActionButton.dataset.stageId);
      if (!stage) return;
      openCalendarInlinePrompt("修改阶段名称", stage.name, "保存名称", (name) => {
        stage.name = name;
        project.updatedAt = new Date().toISOString();
        saveProjects();
        renderTodos();
        renderProjects();
        renderWorkCalendar();
        showToast("阶段名称已更新。");
      });
      return;
    }

    if (action === "delete-stage") {
      if (!project) return;
      const stageId = calendarActionButton.dataset.stageId;
      const stage = (project.stages || []).find((item) => item.id === stageId);
      if (!stage) return;
      if ((project.stages || []).length <= 1) {
        showToast("至少保留一个阶段。");
        return;
      }
      const prevStages = (project.stages || []).map((s) => ({ ...s }));
      const fallbackStageId = getStageFallbackId(project, stageId);
      const affectedNodes = getProjectNodes(project.id).filter((node) => (node.stageId || project.stages[0]?.id) === stageId);
      const prevNodeStages = affectedNodes.map((n) => ({ id: n.id, stageId: n.stageId }));
      project.stages = normalizeProjectStages(project.stages.filter((item) => item.id !== stageId));
      for (const node of affectedNodes) {
        node.stageId = fallbackStageId;
        node.updatedAt = new Date().toISOString();
      }
      project.updatedAt = new Date().toISOString();
      saveTodos();
      saveProjects();
      renderTodos();
      renderProjects();
      renderWorkCalendar();
      showToast(affectedNodes.length ? `阶段「${stage.name}」已删除，节点已移至其他阶段。` : `阶段「${stage.name}」已删除。`, {
        onUndo: () => {
          project.stages = prevStages;
          for (const entry of prevNodeStages) {
            const node = todos.find((t) => t.id === entry.id);
            if (node) node.stageId = entry.stageId;
          }
          project.updatedAt = new Date().toISOString();
          saveTodos();
          saveProjects();
          renderTodos();
          renderProjects();
          renderWorkCalendar();
          showToast(`已恢复阶段「${stage.name}」。`);
        },
      });
      return;
    }

    if (action === "new-node" || action === "add-stage-node" || action === "add-date-node") {
      if (!project) {
        showToast("先选择或新建一个项目。");
        return;
      }
      const node = createCalendarNode(project, {
        title: action === "add-date-node" ? "新日历节点" : "新项目节点",
        stageId: calendarActionButton.dataset.stageId || project.stages?.[0]?.id || "",
        date: calendarActionButton.dataset.date || "",
      });
      saveTodos();
      saveProjects();
      renderTodos();
      renderProjects();
      renderWorkCalendar();
      requestAnimationFrame(() => calendarNodeDetail?.querySelector('[data-calendar-detail-field="title"]')?.focus());
      showToast("节点已创建。");
      return;
    }

    const currentNode = getCalendarNodeById(selectedCalendarNodeId);
    if (!currentNode) return;

    if (action === "save-node") {
      const titleInput = calendarNodeDetail?.querySelector('[data-calendar-detail-field="title"]');
      const projectInput = calendarNodeDetail?.querySelector('[data-calendar-detail-field="projectId"]');
      const nextProject = getProjectById(projectInput?.value);
      if (!titleInput?.value.trim() || !nextProject) {
        showToast("节点名称和所属项目必填。");
        return;
      }
      currentNode.title = titleInput.value.trim();
      currentNode.projectId = nextProject.id;
      currentNode.stageId = calendarNodeDetail.querySelector('[data-calendar-detail-field="stageId"]')?.value || nextProject.stages?.[0]?.id || "";
      currentNode.date = calendarNodeDetail.querySelector('[data-calendar-detail-field="date"]')?.value || "";
      currentNode.status = calendarNodeDetail.querySelector('[data-calendar-detail-field="status"]')?.value || "未开始";
      currentNode.module = calendarNodeDetail.querySelector('[data-calendar-detail-field="module"]')?.value || "";
      currentNode.notes = plainTextToHtml(calendarNodeDetail.querySelector('[data-calendar-detail-field="notes"]')?.value || "");
      currentNode.updatedAt = new Date().toISOString();
      calendarSelectedProjectId = nextProject.id;
      calendarExpandedProjectId = nextProject.id;
      saveTodos();
      renderTodos();
      renderProjects();
      renderWorkCalendar();
      showToast("节点已保存。");
      return;
    }

    if (action === "copy-node") {
      const clone = normalizeTodo({
        ...currentNode,
        id: uid(),
        title: `${currentNode.title} 副本`,
        status: "未开始",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      todos.push(clone);
      selectedCalendarNodeId = clone.id;
      saveTodos();
      renderTodos();
      renderProjects();
      renderWorkCalendar();
      showToast("节点已复制。");
      return;
    }

    if (action === "delete-node") {
      const snapshot = { ...currentNode };
      markDeleted("todos", currentNode.id);
      todos = todos.filter((todo) => todo.id !== currentNode.id);
      selectedCalendarNodeId = null;
      saveTodos();
      renderTodos();
      renderProjects();
      renderWorkCalendar();
      showToast("节点已删除。", {
        onUndo: () => {
          reviveSnapshotFromTombstone("todos", snapshot);
          todos.push(snapshot);
          selectedCalendarNodeId = snapshot.id;
          saveTodos();
          renderTodos();
          renderProjects();
          renderWorkCalendar();
          showToast("已恢复节点。");
        },
      });
      return;
    }
  }

  const memoCategoryButton = event.target.closest("button[data-memo-category]");
  if (memoCategoryButton) {
    selectedMemoCategory = memoCategoryButton.dataset.memoCategory;
    if (selectedMemoCategory === "待写 Issue") selectedMemoStatus = "待整理";
    renderMemoItems();
    return;
  }

  const memoStatusButton = event.target.closest("button[data-memo-status]");
  if (memoStatusButton) {
    selectedMemoStatus = memoStatusButton.dataset.memoStatus;
    renderMemoItems();
    return;
  }

  const memoFilterButton = event.target.closest("button[data-memo-filter]");
  if (memoFilterButton) {
    memoFilter = memoFilterButton.dataset.memoFilter;
    renderMemoItems();
    return;
  }

  const pendingMemoRemove = event.target.closest("button[data-pending-memo-image-remove]");
  if (pendingMemoRemove) {
    pendingMemoScreenshots = pendingMemoScreenshots.filter((screenshot) => screenshot.id !== pendingMemoRemove.dataset.pendingMemoImageRemove);
    renderPendingMemoScreenshots();
    return;
  }

  const pendingMemoAttachmentRemove = event.target.closest("button[data-pending-memo-attachment-remove]");
  if (pendingMemoAttachmentRemove) {
    pendingMemoAttachments = pendingMemoAttachments.filter((attachment) => attachment.id !== pendingMemoAttachmentRemove.dataset.pendingMemoAttachmentRemove);
    renderPendingMemoScreenshots();
    return;
  }

  const projectButton = event.target.closest("button[data-project-action]");
  if (projectButton) {
    const card = projectButton.closest(".project-card");
    const project = getProjectById(card?.dataset.projectId);
    if (!project) return;
    if (projectButton.dataset.projectAction === "archive") {
      archiveProject(project);
      return;
    }
    selectedProjectId = project.id;
    renderProjects();
    if (projectButton.dataset.projectAction === "quick-add") {
      requestAnimationFrame(() => {
        projectDetail?.scrollIntoView({ behavior: "smooth", block: "center" });
        document.querySelector("#projectCaptureTitleInput")?.focus();
      });
    } else {
      projectDetail?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    return;
  }

  const projectDetailAction = event.target.closest("button[data-project-detail-action]");
  if (projectDetailAction?.dataset.projectDetailAction === "archive") {
    const project = getProjectById(selectedProjectId);
    archiveProject(project);
    return;
  }

  const projectCaptureButton = event.target.closest("button[data-project-capture-action]");
  if (projectCaptureButton) {
    const project = getProjectById(selectedProjectId);
    if (!project) return;
    const titleInput = projectDetail?.querySelector('[data-project-capture-field="title"]');
    const kindInput = projectDetail?.querySelector('[data-project-capture-field="kind"]');
    const dateInput = projectDetail?.querySelector('[data-project-capture-field="date"]');
    const ownerInput = projectDetail?.querySelector('[data-project-capture-field="owner"]');
    const bodyInput = projectDetail?.querySelector('[data-project-capture-field="body"]');
    const title = titleInput?.value || getMemoTitle(bodyInput?.value || "");
    const kind = kindInput?.value || "material";

    if (kind === "todo") {
      const todo = createProjectTodo(project, {
        title,
        date: dateInput?.value || toDateKey(new Date()),
        owner: ownerInput?.value || project.owner || "我",
        notes: bodyInput?.value || "",
      });
      if (!todo) {
        showToast("先写一句话，才能生成实际 Todo。");
        titleInput?.focus();
        return;
      }
      saveTodos();
      saveProjects();
      showToast("已加入项目实际 Todo，并同步到今日工作台。");
      expandedTodoId = todo.id;
    } else {
      const item = createProjectItem(project, {
        kind,
        title,
        owner: ownerInput?.value || project.owner || "我",
        body: bodyInput?.value || "",
      });
      if (!item) {
        showToast("先写一句话，才能加入项目。");
        titleInput?.focus();
        return;
      }
      expandedProjectItemId = item.id;
      saveProjects();
      saveProjectItems();
      showToast(kind === "breakdown" ? "已加入待拆事项。" : "已加入资料池。");
    }

    titleInput.value = "";
    bodyInput.value = "";
    renderProjects();
    renderTodos();
    renderWorkCalendar();
    return;
  }

  const projectSplitButton = event.target.closest("button[data-project-split-action]");
  if (projectSplitButton) {
    const card = projectSplitButton.closest(".project-item-card");
    const item = projectItems.find((entry) => entry.id === card?.dataset.projectItemId);
    if (!item) return;
    const linesInput = card.querySelector('[data-project-split-field="lines"]');
    const dateInput = card.querySelector('[data-project-split-field="date"]');
    const ownerInput = card.querySelector('[data-project-split-field="owner"]');
    const created = splitProjectItemToTodos(item, {
      lines: linesInput?.value || "",
      date: dateInput?.value || toDateKey(new Date()),
      owner: ownerInput?.value || item.owner || "我",
    });
    if (!created.length) {
      showToast("先写一条要拆出来的 Todo。");
      linesInput?.focus();
      return;
    }
    expandedProjectItemId = null;
    saveTodos();
    saveProjectItems();
    saveProjects();
    renderProjects();
    renderTodos();
    renderWorkCalendar();
    showToast(`已拆成 ${created.length} 条实际 Todo。`);
    return;
  }

  const projectTodoButton = event.target.closest("[data-project-todo-action]");
  if (projectTodoButton) {
    const row = projectTodoButton.closest(".project-todo-row");
    const todo = todos.find((entry) => entry.id === row?.dataset.todoId);
    if (!todo) return;
    todo.status = projectTodoButton.checked ? "已完成" : "未开始";
    todo.updatedAt = new Date().toISOString();
    saveTodos();
    renderProjects();
    renderTodos();
    renderWorkCalendar();
    showToast(projectTodoButton.checked ? "项目 Todo 已完成。" : "项目 Todo 已改回未开始。");
    return;
  }

  const legacyNewProjectItemButton = event.target.closest("button[data-project-new-item-action]");
  if (legacyNewProjectItemButton) {
    const project = getProjectById(selectedProjectId);
    if (!project) return;
    const titleInput = projectDetail?.querySelector('[data-project-item-new="title"]');
    const dateInput = projectDetail?.querySelector('[data-project-item-new="reviewDate"]');
    const ownerInput = projectDetail?.querySelector('[data-project-item-new="owner"]');
    const bodyInput = projectDetail?.querySelector('[data-project-item-new="body"]');
    const item = createProjectItem(project, {
      title: titleInput?.value || "",
      kind: "breakdown",
      owner: ownerInput?.value || project.owner || "我",
      body: bodyInput?.value || "",
    });
    if (!item) {
      showToast("先写一个具体待办。");
      titleInput?.focus();
      return;
    }

    if (legacyNewProjectItemButton.dataset.projectNewItemAction === "todo") {
      ensureProjectItemTodo(item, { date: dateInput?.value || toDateKey(new Date()) });
      saveTodos();
      showToast("已加入项目，并生成正式 Todo。");
    } else {
      showToast("已加入项目待办。");
    }
    expandedProjectItemId = item.id;
    saveProjects();
    saveProjectItems();
    renderProjects();
    renderTodos();
    renderWorkCalendar();
    requestAnimationFrame(() => document.querySelector(`.project-item-card[data-project-item-id="${item.id}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
    return;
  }

  const projectCard = event.target.closest(".project-card");
  if (projectCard && !event.target.closest("button, input, select, textarea, a")) {
    const project = getProjectById(projectCard.dataset.projectId);
    if (!project) return;
    selectedProjectId = project.id;
    renderProjects();
    return;
  }

  const projectItemButton = event.target.closest("button[data-project-item-action]");
  if (projectItemButton) {
    const card = projectItemButton.closest(".project-item-card");
    const item = projectItems.find((entry) => entry.id === card?.dataset.projectItemId);
    if (!item) return;

    const action = projectItemButton.dataset.projectItemAction;
    if (action === "detail") {
      expandedProjectItemId = expandedProjectItemId === item.id ? null : item.id;
      selectedProjectId = item.projectId || selectedProjectId;
      renderProjects();
      return;
    }

    if (action === "split") {
      expandedProjectItemId = expandedProjectItemId === item.id ? null : item.id;
      selectedProjectId = item.projectId || selectedProjectId;
      renderProjects();
      return;
    }

    if (action === "to-breakdown") {
      item.kind = "breakdown";
      item.status = "待拆";
      item.done = false;
      item.updatedAt = new Date().toISOString();
      showToast("已转成待拆事项。");
    }

    if (action === "archive") {
      item.status = "已归档";
      item.done = true;
      item.updatedAt = new Date().toISOString();
      showToast("已归档。");
    }

    if (action === "todo") {
      ensureProjectItemTodo(item);
      saveTodos();
      showToast("已生成正式 Todo。");
    }

    if (action === "done") {
      item.status = "已处理";
      item.done = true;
      item.updatedAt = new Date().toISOString();
      showToast("待拆事项已处理。");
    }

    const project = getProjectById(item.projectId);
    if (project) project.updatedAt = new Date().toISOString();
    saveProjects();
    saveProjectItems();
    renderProjects();
    renderTodos();
    return;
  }

  const memoButton = event.target.closest("button[data-memo-action]");
  if (memoButton) {
    const card = memoButton.closest(".memo-card");
    const item = memoItems.find((memo) => memo.id === card?.dataset.id);
    if (!item) return;

    const action = memoButton.dataset.memoAction;
    if (action === "delete") {
      const snapshot = { ...item };
      markDeleted("memoItems", item.id);
      memoItems = memoItems.filter((memo) => memo.id !== item.id);
      if (expandedMemoId === item.id) expandedMemoId = null;
      showToast("备忘已删除。", {
        onUndo: () => {
          reviveSnapshotFromTombstone("memoItems", snapshot);
          memoItems.unshift(snapshot);
          saveMemoItems();
          renderMemoItems();
          showToast("已恢复备忘。");
        },
      });
    }

    if (action === "detail") {
      expandedMemoId = expandedMemoId === item.id ? null : item.id;
      renderMemoItems();
      return;
    }

    if (action === "add-log") {
      const input = card.querySelector('[data-memo-field="newLog"]');
      const text = input?.value.trim();
      if (!text) {
        showToast("先写一点记录内容。");
        return;
      }
      item.logs = [
        ...(item.logs || []),
        { id: uid(), text, createdAt: new Date().toISOString() },
      ];
      item.updatedAt = new Date().toISOString();
      input.value = "";
      showToast("记录已增加。");
    }

    if (action === "tomorrow" || action === "nextWeek" || action === "waiting") {
      postponeMemo(item, action);
      showToast(action === "tomorrow" ? "明天再看。" : action === "nextWeek" ? "下周再看。" : "已标记继续等。");
    }

    if (action === "todo") {
      item.linkedTodoId = ensureMemoTodo(item);
      item.flags = [...new Set([...(item.flags || []), "已生成待办"])];
      item.status = "已整理";
      item.updatedAt = new Date().toISOString();
      saveTodos();
      showToast("已生成今天的 Todo，并标为已整理。");
    }

    if (action === "issue") {
      item.category = "待写 Issue";
      item.linkedIssueId = ensureMemoIssue(item);
      item.flags = [...new Set([...(item.flags || []), "已转 Issue"])];
      item.status = "已整理";
      item.updatedAt = new Date().toISOString();
      saveIssueDrafts();
      showToast("已同步到待写 Issue，并标为已整理。");
    }

    if (action === "done") {
      item.status = "已整理";
      item.updatedAt = new Date().toISOString();
      showToast("已整理，会从默认视野里退下去。");
    }

    if (action === "read") {
      item.status = "已读待判断";
      item.updatedAt = new Date().toISOString();
      showToast("已标记为已读待判断。");
    }

    if (action === "project") {
      const existingPicker = card.querySelector(".memo-project-picker");
      if (existingPicker) {
        existingPicker.remove();
        return;
      }
      const picker = document.createElement("div");
      picker.className = "memo-project-picker";
      const activeProjects = getActiveProjects();
      const select = document.createElement("select");
      select.setAttribute("aria-label", "选择已有项目");
      const emptyOpt = document.createElement("option");
      emptyOpt.value = "";
      emptyOpt.textContent = activeProjects.length ? "选择已有项目…" : "暂无已有项目";
      select.append(emptyOpt);
      for (const p of activeProjects) {
        const opt = document.createElement("option");
        opt.value = p.name;
        opt.textContent = p.name;
        select.append(opt);
      }
      const newInput = document.createElement("input");
      newInput.type = "text";
      newInput.placeholder = "或输入新项目名";
      newInput.maxLength = 80;
      const confirmBtn = document.createElement("button");
      confirmBtn.type = "button";
      confirmBtn.className = "primary-button";
      confirmBtn.textContent = "确认加入";
      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = "small-button";
      cancelBtn.textContent = "取消";

      cancelBtn.addEventListener("click", () => picker.remove());
      confirmBtn.addEventListener("click", () => {
        const projectName = newInput.value.trim() || select.value.trim();
        const project = ensureQuickProject(projectName);
        if (!project) {
          showToast("先选择一个已有项目，或输入新项目名。");
          return;
        }
        let projectItem = item.projectItemId ? projectItems.find((entry) => entry.id === item.projectItemId) : null;
        if (!projectItem) {
          projectItem = createProjectItemFromMemo(item, project.id);
          projectItems.push(projectItem);
        } else {
          projectItem.projectId = project.id;
          projectItem.updatedAt = new Date().toISOString();
        }
        item.projectId = project.id;
        item.projectItemId = projectItem.id;
        item.status = "已整理";
        item.logs = [
          ...(item.logs || []),
          { id: uid(), text: `已加入项目：${project.name}`, createdAt: new Date().toISOString() },
        ];
        item.updatedAt = new Date().toISOString();
        project.updatedAt = new Date().toISOString();
        selectedProjectId = project.id;
        saveProjects();
        saveProjectItems();
        saveMemoItems();
        renderMemoItems();
        renderProjects();
        renderTodos();
        showToast(`已加入项目：${project.name}。`);
      });

      picker.append(select, newInput, confirmBtn, cancelBtn);
      card.querySelector(".memo-actions")?.after(picker);
      newInput.focus();
      return;
    }

    if (action === "archive") {
      item.status = "已归档";
      item.updatedAt = new Date().toISOString();
      showToast("已归档，会从默认视野里退下去。");
    }

    if (action === "park") {
      item.status = "先放着";
      item.updatedAt = new Date().toISOString();
      showToast("已先放着。");
    }

    if (action === "reopen") {
      item.status = "待整理";
      item.reviewDate = toDateKey(new Date());
      item.updatedAt = new Date().toISOString();
      showToast("已重新提醒。");
    }

    saveMemoItems();
    renderMemoItems();
    renderProjects();
    renderTodos();
    renderIssueDrafts();
    return;
  }

  const pendingRemove = event.target.closest("button[data-pending-image-remove]");
  if (pendingRemove) {
    pendingIssueScreenshots = pendingIssueScreenshots.filter((screenshot) => screenshot.id !== pendingRemove.dataset.pendingImageRemove);
    renderPendingIssueScreenshots();
    return;
  }

  const issueButton = event.target.closest("button[data-issue-action]");
  if (issueButton) {
    const card = issueButton.closest(".issue-card");
    const issue = issueDrafts.find((item) => item.id === card?.dataset.id);
    if (!issue) return;

    if (issueButton.dataset.issueAction === "delete") {
      const snapshot = { ...issue };
      markDeleted("issueDrafts", issue.id);
      issueDrafts = issueDrafts.filter((item) => item.id !== issue.id);
      showToast("待写 Issue 已删除。", {
        onUndo: () => {
          reviveSnapshotFromTombstone("issueDrafts", snapshot);
          issueDrafts.unshift(snapshot);
          saveIssueDrafts();
          renderIssueDrafts();
          showToast("已恢复待写 Issue。");
        },
      });
    }

    if (issueButton.dataset.issueAction === "todo") {
      issue.linkedTodoId = ensureIssueTodo(issue);
      issue.updatedAt = new Date().toISOString();
      saveTodos();
      showToast("已同步到今天 Todo。");
    }

    if (issueButton.dataset.issueAction === "done") {
      issue.status = issue.status === "已写" ? "待写" : "已写";
      issue.updatedAt = new Date().toISOString();
      const linkedTodo = issue.linkedTodoId ? todos.find((todo) => todo.id === issue.linkedTodoId) : null;
      if (linkedTodo) {
        linkedTodo.status = issue.status === "已写" ? "已完成" : "未开始";
        saveTodos();
      }
      showToast(issue.status === "已写" ? "已标记写完。" : "已撤回待写。");
    }

    saveIssueDrafts();
    renderIssueDrafts();
    renderTodos();
    return;
  }

  const bulkCloseoutButton = event.target.closest("button[data-closeout-bulk]");
  if (bulkCloseoutButton) {
    const action = bulkCloseoutButton.dataset.closeoutBulk;
    const items = getCloseoutTodos();
    if (!items.length) {
      showToast("没有需要重新安排日期的任务。");
      return;
    }

    for (const todo of items) {
      moveTodoFromCloseout(todo, action);
    }
    saveTodos();
    renderMemoItems();
    renderTodos();
    showToast(`${items.length} 项已转到${getCloseoutTargetLabel(action)}。`);
    return;
  }

  const closeoutButton = event.target.closest("button[data-closeout-action]");
  if (closeoutButton) {
    const row = closeoutButton.closest(".closeout-item");
    const todo = todos.find((item) => item.id === row?.dataset.id);
    if (!todo) return;

    const customDate = closeoutButton.dataset.closeoutAction === "custom" ? row.querySelector("[data-closeout-date]")?.value : null;
    if (closeoutButton.dataset.closeoutAction === "custom" && !customDate) {
      showToast("先选择一个要转去的日期。");
      return;
    }
    const targetLabel = moveTodoFromCloseout(todo, closeoutButton.dataset.closeoutAction, customDate);
    saveTodos();
    renderMemoItems();
    renderTodos();
    showToast(closeoutButton.dataset.closeoutAction === "done" ? "已标记完成。" : `已转到${targetLabel}。`);
    return;
  }

  const reviewButton = event.target.closest("button[data-review-open]");
  if (reviewButton) {
    switchTab("today");
    expandedTodoId = reviewButton.dataset.reviewOpen;
    selectedInspectorTodoId = reviewButton.dataset.reviewOpen;
    inspectorEditMode = false;
    renderTodos();
    requestAnimationFrame(() => {
      document.querySelector(`.todo-card[data-id="${CSS.escape(expandedTodoId)}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    return;
  }

  const button = event.target.closest("button[data-todo-action]");
  if (!button) {
    const clickedCard = event.target.closest(".todo-card[data-id]");
    if (clickedCard && !event.target.closest("button, input, select, textarea, .rich-editor, a")) {
      selectedInspectorTodoId = clickedCard.dataset.id;
      if (inspectorEditMode) {
        renderTodos();
      } else {
        renderTodayInspector();
      }
    }
    return;
  }

  const card = button.closest(".todo-card");
  const todo = todos.find((item) => item.id === card.dataset.id);
  if (!todo) return;

  if (button.dataset.todoAction === "delete") {
    const snapshot = { ...todo };
    markDeleted("todos", todo.id);
    todos = todos.filter((item) => item.id !== todo.id);
    if (expandedTodoId === todo.id) expandedTodoId = null;
    if (selectedInspectorTodoId === todo.id) {
      selectedInspectorTodoId = null;
      inspectorEditMode = false;
    }
    showToast("Todo 已删除。", {
      onUndo: () => {
        reviveSnapshotFromTombstone("todos", snapshot);
        todos.unshift(snapshot);
        selectedInspectorTodoId = snapshot.id;
        saveTodos();
        renderTodos();
        showToast("已恢复 Todo。");
      },
    });
  }

  if (button.dataset.todoAction === "detail") {
    if (isDesktopInspectorMode()) {
      if (selectedInspectorTodoId === todo.id) {
        inspectorEditMode = !inspectorEditMode;
      } else {
        selectedInspectorTodoId = todo.id;
        inspectorEditMode = true;
      }
      renderTodos();
      if (inspectorEditMode) {
        requestAnimationFrame(() => document.querySelector("#inspectorNotesBody .rich-input")?.focus());
      }
      return;
    }
    expandedTodoId = expandedTodoId === todo.id ? null : todo.id;
  }

  if (button.dataset.todoAction === "today") {
    todo.date = toDateKey(new Date());
    todo.sortOrder = Date.now();
    showToast("已放到今天。");
  }

  if (button.dataset.todoAction === "move-up" || button.dataset.todoAction === "move-down") {
    const moved = moveTodoWithinToday(todo, button.dataset.todoAction === "move-up" ? -1 : 1);
    showToast(moved ? "优先级已调整。" : "已经到这一组的边界了。");
  }

  if (button.dataset.todoAction === "done") {
    todo.status = todo.status === "已完成" ? "未开始" : "已完成";
    todo.sortOrder = Date.now();
    todo.updatedAt = new Date().toISOString();
    showToast(todo.status === "已完成" ? "已完成。" : "已撤回。");
  }

  saveTodos();
  renderTodos();
});

document.addEventListener("keydown", (event) => {
  const handle = event.target.closest(".drag-handle");
  if (!handle) return;
  if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
  const card = handle.closest(".todo-card[data-id]");
  const todo = todos.find((item) => item.id === card?.dataset.id);
  if (!todo) return;
  event.preventDefault();
  const moved = moveTodoWithinToday(todo, event.key === "ArrowUp" ? -1 : 1);
  if (moved) {
    saveTodos();
    renderTodos();
    requestAnimationFrame(() => {
      document.querySelector(`.todo-card[data-id="${CSS.escape(todo.id)}"] .drag-handle`)?.focus();
    });
    showToast("任务顺序已调整。");
  }
});

document.addEventListener("dragstart", (event) => {
  const card = event.target.closest(".todo-card");
  if (!card || !event.target.closest(".drag-handle")) {
    if (card) event.preventDefault();
    return;
  }

  const todo = todos.find((item) => item.id === card.dataset.id);
  if (!todo || !canReorderTodo(todo)) {
    event.preventDefault();
    return;
  }

  draggedTodoId = todo.id;
  card.classList.add("is-dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", todo.id);
});

document.addEventListener("dragover", (event) => {
  const card = event.target.closest(".todo-card");
  if (!card || !draggedTodoId || card.dataset.id === draggedTodoId) return;
  const dragged = todos.find((item) => item.id === draggedTodoId);
  const target = todos.find((item) => item.id === card.dataset.id);
  if (!dragged || !target || !canReorderTodo(target) || isTodoFinished(dragged) !== isTodoFinished(target)) return;

  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  const rect = card.getBoundingClientRect();
  card.classList.toggle("is-drop-after", event.clientY > rect.top + rect.height / 2);
  card.classList.toggle("is-drop-before", event.clientY <= rect.top + rect.height / 2);
});

document.addEventListener("dragleave", (event) => {
  const card = event.target.closest(".todo-card");
  if (!card || card.contains(event.relatedTarget)) return;
  card.classList.remove("is-drop-before", "is-drop-after");
});

document.addEventListener("drop", (event) => {
  const card = event.target.closest(".todo-card");
  if (!card || !draggedTodoId) return;

  event.preventDefault();
  const rect = card.getBoundingClientRect();
  const moved = reorderTodoWithinToday(draggedTodoId, card.dataset.id, event.clientY > rect.top + rect.height / 2);
  draggedTodoId = null;
  document.querySelectorAll(".todo-card").forEach((item) => item.classList.remove("is-dragging", "is-drop-before", "is-drop-after"));
  if (moved) {
    saveTodos();
    renderTodos();
    showToast("优先级已调整。");
  }
});

function clearDragState() {
  draggedTodoId = null;
  document.querySelectorAll(".todo-card.is-dragging, .todo-card.is-drop-before, .todo-card.is-drop-after").forEach((item) => {
    item.classList.remove("is-dragging", "is-drop-before", "is-drop-after");
  });
  document.querySelectorAll(".is-dragging-image, .image-drop-zone.is-dragging").forEach((el) => {
    el.classList.remove("is-dragging-image", "is-dragging");
  });
}

document.addEventListener("dragend", clearDragState);
window.addEventListener("blur", clearDragState);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") clearDragState();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && draggedTodoId) clearDragState();
});

document.addEventListener("input", (event) => {
  const calendarMonthField = event.target.closest("#calendarMonthInput");
  if (calendarMonthField) {
    calendarMonthCursor = calendarMonthField.value || calendarMonthCursor;
    renderWorkCalendar();
    return;
  }

  const projectField = event.target.closest("[data-project-field]");
  if (projectField) {
    const project = getProjectById(selectedProjectId);
    if (!project) return;
    project[projectField.dataset.projectField] = projectField.value;
    project.updatedAt = new Date().toISOString();
    saveProjects();
    renderWorkCalendar();
    return;
  }

  const projectItemField = event.target.closest("[data-project-item-field]");
  if (projectItemField) {
    const card = projectItemField.closest(".project-item-card");
    const item = projectItems.find((entry) => entry.id === card?.dataset.projectItemId);
    if (!item) return;
    item[projectItemField.dataset.projectItemField] = projectItemField.value;
    item.updatedAt = new Date().toISOString();
    const project = getProjectById(item.projectId);
    if (project) project.updatedAt = new Date().toISOString();
    saveProjectItems();
    saveProjects();
    return;
  }

  const memoField = event.target.closest("[data-memo-field]");
  if (memoField && memoField.dataset.memoField !== "newLog") {
    const card = memoField.closest(".memo-card");
    const item = memoItems.find((memo) => memo.id === card?.dataset.id);
    if (!item) return;

    item[memoField.dataset.memoField] = memoField.value;
    item.updatedAt = new Date().toISOString();
    saveMemoItems();
    return;
  }

  const issueField = event.target.closest("[data-issue-field]");
  if (issueField) {
    const card = issueField.closest(".issue-card");
    const issue = issueDrafts.find((item) => item.id === card?.dataset.id);
    if (!issue) return;

    issue[issueField.dataset.issueField] = issueField.value;
    issue.updatedAt = new Date().toISOString();
    const linkedTodo = issue.linkedTodoId ? todos.find((todo) => todo.id === issue.linkedTodoId) : null;
    if (linkedTodo && issueField.dataset.issueField === "notes") {
      linkedTodo.notes = issue.notes ? plainTextToHtml(issue.notes) : "";
      saveTodos();
    }
    saveIssueDrafts();
    return;
  }

  const larkRichField = event.target.closest("[data-lark-calendar-rich-field]");
  if (larkRichField) {
    const row = larkRichField.closest(".lark-calendar-item");
    const key = row?.dataset.id;
    if (!key) return;

    const record = getLarkCalendarRecord(key);
    record[larkRichField.dataset.larkCalendarRichField] = sanitizeRichHtml(larkRichField.innerHTML);
    record.updatedAt = new Date().toISOString();
    saveLarkCalendarRecords();
    return;
  }

  const richField = event.target.closest("[data-todo-rich-field]");
  if (richField) {
    const host = richField.closest(".todo-card, [data-inspector-todo-id]");
    const todoId = host?.dataset.id || host?.dataset.inspectorTodoId;
    if (!todoId) return;
    const todo = todos.find((item) => item.id === todoId);
    if (!todo) return;

    todo[richField.dataset.todoRichField] = sanitizeRichHtml(richField.innerHTML);
    saveTodos();
    renderReview();
    return;
  }

  const field = event.target.closest("[data-todo-field]");
  if (!field) return;

  const host = field.closest(".todo-card, [data-inspector-todo-id]");
  const todoId = host?.dataset.id || host?.dataset.inspectorTodoId;
  if (!todoId) return;
  const todo = todos.find((item) => item.id === todoId);
  if (!todo) return;

  if (["notes", "ideas", "owner", "title"].includes(field.dataset.todoField)) {
    if (field.dataset.todoField === "title") {
      const nextTitle = field.value.trim();
      if (nextTitle) {
        todo.title = nextTitle;
        const cardTitle = document.querySelector(`.todo-card[data-id="${CSS.escape(todo.id)}"] .todo-title`);
        if (cardTitle) cardTitle.textContent = nextTitle;
      }
    } else {
      todo[field.dataset.todoField] = field.value;
    }
    saveTodos();
    renderReview();
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-rich-action]");
  if (!button) return;

  event.preventDefault();
  const editor = button.closest(".rich-editor")?.querySelector(".rich-input");
  if (!editor) return;

  editor.focus();
  const action = button.dataset.richAction;
  if (action === "image") {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.addEventListener("change", async () => {
      await insertImagesIntoRichEditor(editor, input.files || []);
    }, { once: true });
    input.click();
    return;
  }

  if (action === "highlight") {
    const sel = window.getSelection();
    if (sel && sel.rangeCount && !sel.isCollapsed && editor.contains(sel.anchorNode)) {
      const range = sel.getRangeAt(0);
      const existingMark = sel.anchorNode.parentElement?.closest("mark");
      if (existingMark && editor.contains(existingMark)) {
        existingMark.replaceWith(document.createTextNode(existingMark.textContent || ""));
      } else {
        const mark = document.createElement("mark");
        mark.append(range.extractContents());
        range.insertNode(mark);
        sel.removeAllRanges();
        const nextRange = document.createRange();
        nextRange.selectNodeContents(mark);
        sel.addRange(nextRange);
      }
    }
  } else if (action === "formatBlock") {
    document.execCommand("formatBlock", false, button.dataset.richValue || "p");
  } else {
    document.execCommand(action, false, null);
  }

  editor.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "formatSetBlockTextDirection" }));
});

document.addEventListener("change", (event) => {
  const calendarProjectField = event.target.closest("#calendarProjectFilter");
  if (calendarProjectField) {
    if (calendarProjectField.value !== "all") {
      calendarSelectedProjectId = calendarProjectField.value;
      calendarExpandedProjectId = calendarProjectField.value;
    }
    renderWorkCalendar();
    return;
  }

  const calendarMonthField = event.target.closest("#calendarMonthInput");
  if (calendarMonthField) {
    calendarMonthCursor = calendarMonthField.value || calendarMonthCursor;
    renderWorkCalendar();
    return;
  }

  const projectCaptureKind = event.target.closest('[data-project-capture-field="kind"]');
  if (projectCaptureKind) {
    syncProjectCaptureDateVisibility(projectCaptureKind.closest(".project-item-composer"));
    return;
  }

  const projectItemCheck = event.target.closest('input[type="checkbox"][data-project-item-action="done"]');
  if (projectItemCheck) {
    const card = projectItemCheck.closest(".project-item-card");
    const item = projectItems.find((entry) => entry.id === card?.dataset.projectItemId);
    if (!item) return;
    item.status = projectItemCheck.checked ? "已处理" : item.kind === "material" ? "资料" : "待拆";
    item.done = projectItemCheck.checked;
    item.updatedAt = new Date().toISOString();
    const project = getProjectById(item.projectId);
    if (project) project.updatedAt = new Date().toISOString();
    saveProjectItems();
    saveProjects();
    renderProjects();
    renderWorkCalendar();
    showToast(projectItemCheck.checked ? "已完成。" : "已改回待处理。");
    return;
  }

  const projectField = event.target.closest("[data-project-field]");
  if (projectField) {
    const project = getProjectById(selectedProjectId);
    if (!project) return;
    project[projectField.dataset.projectField] = projectField.value;
    project.updatedAt = new Date().toISOString();
    if (projectField.dataset.projectField === "status" && isProjectArchived(project)) {
      project.archivedAt ||= project.updatedAt;
      selectedProjectId = getActiveProjects()[0]?.id || null;
    }
    saveProjects();
    renderProjects();
    renderWorkCalendar();
    renderReview();
    return;
  }

  const projectItemField = event.target.closest("[data-project-item-field]");
  if (projectItemField) {
    const card = projectItemField.closest(".project-item-card");
    const item = projectItems.find((entry) => entry.id === card?.dataset.projectItemId);
    if (!item) return;
    item[projectItemField.dataset.projectItemField] = projectItemField.value;
    item.updatedAt = new Date().toISOString();
    const project = getProjectById(item.projectId);
    if (project) project.updatedAt = new Date().toISOString();
    saveProjectItems();
    saveProjects();
    renderProjects();
    renderWorkCalendar();
    return;
  }

  const memoField = event.target.closest("[data-memo-field]");
  if (memoField && memoField.dataset.memoField !== "newLog") {
    const card = memoField.closest(".memo-card");
    const item = memoItems.find((memo) => memo.id === card?.dataset.id);
    if (!item) return;

    item[memoField.dataset.memoField] = memoField.value;
    item.updatedAt = new Date().toISOString();
    saveMemoItems();
    renderMemoItems();
    return;
  }

  const field = event.target.closest("[data-todo-field]");
  if (!field) return;

  const host = field.closest(".todo-card, [data-inspector-todo-id]");
  const todoId = host?.dataset.id || host?.dataset.inspectorTodoId;
  if (!todoId) return;
  const todo = todos.find((item) => item.id === todoId);
  if (!todo) return;

  const key = field.dataset.todoField;
  if (key === "title") {
    const trimmed = field.value.trim();
    if (!trimmed) {
      field.value = todo.title;
      showToast("任务标题不能为空。");
      return;
    }
    todo.title = trimmed;
  } else if (key === "needsReview") {
    todo.needsReview = field.checked;
  } else if (key === "date") {
    todo.date = field.value || null;
  } else {
    todo[key] = field.value;
  }

  saveTodos();
  renderTodos();
});

let reviewSearchTimer;
reviewFilter.addEventListener("change", renderReview);
reviewSearch.addEventListener("input", () => {
  clearTimeout(reviewSearchTimer);
  reviewSearchTimer = setTimeout(renderReview, 150);
});

document.addEventListener("click", (event) => {
  const addTime = event.target.closest("#addTimeButton");
  if (addTime) {
    addSelectedReminderSchedule();
    return;
  }

  const removeScheduleButton = event.target.closest("button[data-schedule-remove]");
  if (removeScheduleButton) {
    const nextSchedules = getSelectedReminderSchedules().filter((schedule) => `${schedule.day}-${schedule.time}` !== removeScheduleButton.dataset.scheduleRemove);
    setSelectedReminderSchedules(nextSchedules);
    return;
  }

  const presetButton = event.target.closest("button[data-day-preset]");
  if (presetButton) {
    const preset = presetButton.dataset.dayPreset;
    if (preset === "workdays") setSelectedReminderDays([1, 2, 3, 4, 5]);
    if (preset === "everyday") setSelectedReminderDays([0, 1, 2, 3, 4, 5, 6]);
    if (preset === "clear") setSelectedReminderDays([]);
    return;
  }

  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const card = button.closest(".reminder-card");
  const reminder = reminders.find((item) => item.id === card.dataset.id);
  if (!reminder) return;

  if (button.dataset.action === "delete") {
    const snapshot = { ...reminder };
    markDeleted("reminders", reminder.id);
    reminders = reminders.filter((item) => item.id !== reminder.id);
    showToast("提醒已删除。", {
      onUndo: () => {
        reviveSnapshotFromTombstone("reminders", snapshot);
        reminders.push(snapshot);
        saveReminders();
        render();
        showToast("已恢复固定提醒。");
      },
    });
  }

  if (button.dataset.action === "toggle") {
    reminder.paused = !reminder.paused;
    showToast(reminder.paused ? "提醒已暂停。" : "提醒已启用。");
  }

  if (button.dataset.action === "test") {
    notify(reminder);
  }

  if (button.dataset.action === "add-schedule") {
    const day = Number(card.querySelector("[data-schedule-day]")?.value);
    const time = card.querySelector("[data-schedule-time]")?.value;
    if (!/^\d{2}:\d{2}$/.test(time || "")) {
      showToast("先选择一个提醒时间。");
      return;
    }
    reminder.schedules = getReminderSchedules({ schedules: [...getReminderSchedules(reminder), { day, time }] });
    reminder.days = [...new Set(reminder.schedules.map((schedule) => schedule.day))].sort((a, b) => a - b);
    reminder.times = [...new Set(reminder.schedules.map((schedule) => schedule.time))].sort((a, b) => a.localeCompare(b));
    showToast("提醒时间已加入。");
  }

  if (button.dataset.action === "remove-schedule") {
    const day = Number(button.dataset.day);
    const time = button.dataset.time;
    const nextSchedules = getReminderSchedules(reminder).filter((schedule) => !(schedule.day === day && schedule.time === time));
    if (!nextSchedules.length) {
      showToast("至少保留一个提醒时间。");
      return;
    }
    reminder.schedules = nextSchedules;
    reminder.days = [...new Set(nextSchedules.map((schedule) => schedule.day))].sort((a, b) => a - b);
    reminder.times = [...new Set(nextSchedules.map((schedule) => schedule.time))].sort((a, b) => a.localeCompare(b));
    showToast("提醒时间已移除。");
  }

  if (button.dataset.action === "complete-today") {
    const time = card.dataset.time;
    const completed = !isReminderCompletedToday(reminder, time);
    setReminderCompletedToday(reminder, time, completed);
    showToast(completed ? "今日提醒已完成。" : "已撤回今日完成。");
  }

  saveReminders();
  render();
});

permissionButton.addEventListener("click", requestNotificationPermission);
refreshLarkCalendarButton?.addEventListener("click", fetchLarkCalendar);
exportButton.addEventListener("click", exportData);
importButton.addEventListener("click", () => importFile.click());
importFile.addEventListener("change", () => {
  const [file] = importFile.files;
  if (file) {
    importData(file);
    importFile.value = "";
  }
});

memoImageInput.addEventListener("change", async () => {
  await addMemoFiles(memoImageInput.files || []);
  memoImageInput.value = "";
});

for (const eventName of ["dragenter", "dragover"]) {
  memoDropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    memoDropZone.classList.add("is-dragging");
  });
}

for (const eventName of ["dragleave", "drop"]) {
  memoDropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    memoDropZone.classList.remove("is-dragging");
  });
}

memoDropZone.addEventListener("drop", async (event) => {
  await addMemoFiles(event.dataTransfer?.files || []);
});

issueImageInput.addEventListener("change", async () => {
  await addIssueFiles(issueImageInput.files || []);
  issueImageInput.value = "";
});

for (const eventName of ["dragenter", "dragover"]) {
  issueDropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    issueDropZone.classList.add("is-dragging");
  });
}

for (const eventName of ["dragleave", "drop"]) {
  issueDropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    issueDropZone.classList.remove("is-dragging");
  });
}

issueDropZone.addEventListener("drop", async (event) => {
  await addIssueFiles(event.dataTransfer?.files || []);
});

document.addEventListener("paste", async (event) => {
  const richEditor = event.target.closest?.("[data-todo-rich-field], [data-lark-calendar-rich-field]");
  if (richEditor) {
    const files = [...(event.clipboardData?.files || [])].filter((file) => file.type.startsWith("image/"));
    if (files.length) {
      event.preventDefault();
      await insertImagesIntoRichEditor(richEditor, files);
      return;
    }
  }

  const isMemoTabOpen = document.querySelector('[data-view="memos"]')?.classList.contains("is-active");
  if (isMemoTabOpen) {
    const files = [...(event.clipboardData?.files || [])].filter((file) => file.type.startsWith("image/") || isMarkdownFile(file));
    if (!files.length) {
      const text = event.clipboardData?.getData("text/plain") || "";
      if (!looksLikeMarkdown(text)) return;
      event.preventDefault();
      insertTextIntoMemoInput(text);
      showToast("Markdown 内容已放进输入框。");
      return;
    }
    event.preventDefault();
    await addMemoFiles(files);
    return;
  }

  const isIssueTabOpen = document.querySelector('[data-view="issues"]')?.classList.contains("is-active");
  if (!isIssueTabOpen) return;
  const files = [...(event.clipboardData?.files || [])].filter((file) => file.type.startsWith("image/"));
  if (!files.length) return;
  event.preventDefault();
  await addIssueFiles(files);
});

function looksLikeMarkdown(text) {
  const value = (text || "").trim();
  if (!value) return false;
  return /^#{1,6}\s+\S/m.test(value)
    || /^[-*]\s+\S/m.test(value)
    || /^\d+\.\s+\S/m.test(value)
    || /\[[^\]]+\]\([^)]+\)/.test(value)
    || /```/.test(value);
}

function insertTextIntoMemoInput(text) {
  const current = memoTextInput.value.trim();
  memoTextInput.value = current ? `${current}\n\n${text.trim()}` : text.trim();
  memoTextInput.focus();
}

document.addEventListener("dragover", (event) => {
  const richEditor = event.target.closest?.("[data-todo-rich-field], [data-lark-calendar-rich-field]");
  if (!richEditor) return;
  const hasImage = [...(event.dataTransfer?.items || [])].some((item) => item.kind === "file" && item.type.startsWith("image/"));
  if (!hasImage) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
  richEditor.classList.add("is-dragging-image");
});

document.addEventListener("dragleave", (event) => {
  const richEditor = event.target.closest?.("[data-todo-rich-field], [data-lark-calendar-rich-field]");
  if (!richEditor || richEditor.contains(event.relatedTarget)) return;
  richEditor.classList.remove("is-dragging-image");
});

document.addEventListener("drop", async (event) => {
  const richEditor = event.target.closest?.("[data-todo-rich-field], [data-lark-calendar-rich-field]");
  if (!richEditor) return;
  const files = [...(event.dataTransfer?.files || [])].filter((file) => file.type.startsWith("image/"));
  if (!files.length) return;
  event.preventDefault();
  richEditor.classList.remove("is-dragging-image");
  await insertImagesIntoRichEditor(richEditor, files);
});

// ---------- 月度清单 ----------
function normalizeMonthlyItem(item = {}) {
  const now = new Date().toISOString();
  return {
    id: item.id || uid(),
    title: String(item.title || "").trim(),
    group: String(item.group || "").trim() || "未分组",
    notes: String(item.notes || ""),
    sortOrder: Number.isFinite(Number(item.sortOrder)) ? Number(item.sortOrder) : 0,
    createdAt: item.createdAt || now,
    updatedAt: item.updatedAt || item.createdAt || now,
    deletedAt: item.deletedAt || "",
  };
}

function normalizeMonthlyChecks(checks) {
  if (!checks || typeof checks !== "object" || Array.isArray(checks)) return {};
  const result = {};
  for (const [month, items] of Object.entries(checks)) {
    if (!/^\d{4}-\d{2}$/.test(month) || !items || typeof items !== "object") continue;
    result[month] = { ...items };
  }
  return result;
}

function monthlyCheckTime(value) {
  return value && typeof value === "object" ? String(value.updatedAt || "") : "";
}

function mergeMonthlyChecks(serverChecks = {}, localChecks = {}) {
  const result = normalizeMonthlyChecks(serverChecks);
  for (const [month, items] of Object.entries(normalizeMonthlyChecks(localChecks))) {
    const target = result[month] || (result[month] = {});
    for (const [itemId, value] of Object.entries(items)) {
      if (!(itemId in target) || monthlyCheckTime(value) > monthlyCheckTime(target[itemId])) target[itemId] = value;
    }
  }
  return result;
}

function loadMonthlyItems() {
  try {
    return (JSON.parse(localStorage.getItem(MONTHLY_ITEM_STORAGE_KEY)) || []).map(normalizeMonthlyItem);
  } catch {
    return [];
  }
}

function loadMonthlyChecks() {
  try {
    return normalizeMonthlyChecks(JSON.parse(localStorage.getItem(MONTHLY_CHECK_STORAGE_KEY)) || {});
  } catch {
    return {};
  }
}

function isMonthlyItemDone(month, itemId) {
  const value = monthlyChecks[month]?.[itemId];
  if (value && typeof value === "object") return Boolean(value.done);
  return value === true;
}

function setMonthlyItemDone(month, itemId, done) {
  if (!monthlyChecks[month]) monthlyChecks[month] = {};
  monthlyChecks[month][itemId] = { done: Boolean(done), updatedAt: new Date().toISOString() };
  persistAll();
}

function getActiveMonthlyItems() {
  return monthlyItems.filter((item) => !item.deletedAt);
}

function shiftMonthKey(monthKey, delta) {
  const [year, month] = monthKey.split("-").map(Number);
  const next = new Date(year, month - 1 + delta, 1);
  return `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
}

function formatMonthKey(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  return `${year}年${month}月`;
}

function getMonthlyGroupsInOrder(items) {
  const groups = new Map();
  for (const item of [...items].sort((a, b) => a.sortOrder - b.sortOrder || a.createdAt.localeCompare(b.createdAt))) {
    if (!groups.has(item.group)) groups.set(item.group, []);
    groups.get(item.group).push(item);
  }
  return groups;
}

function escapeMonthlyText(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function renderMonthlyChecklist() {
  if (!monthlyGroups) return;
  const month = monthlyMonthCursor;
  const currentMonth = toDateKey(new Date()).slice(0, 7);
  const items = getActiveMonthlyItems();
  const groups = getMonthlyGroupsInOrder(items);
  const doneCount = items.filter((item) => isMonthlyItemDone(month, item.id)).length;

  monthlyMonthLabel.textContent = `${formatMonthKey(month)}${month === currentMonth ? "（本月）" : ""}`;
  monthlyProgress.textContent = `已完成 ${doneCount}/${items.length}`;
  window.dispatchEvent(
    new CustomEvent("stardust:progress", {
      detail: { scope: "monthly", done: doneCount, total: items.length },
    })
  );
  monthlyEmpty.style.display = items.length ? "none" : "block";
  monthlyOptionsRefresh(groups);

  monthlyGroups.innerHTML = "";
  for (const [group, groupItems] of groups) {
    const groupDone = groupItems.filter((item) => isMonthlyItemDone(month, item.id)).length;
    const section = document.createElement("section");
    section.className = "monthly-group";
    section.innerHTML = `
      <div class="monthly-group-header">
        <h3>${escapeMonthlyText(group)}</h3>
        <span class="pill">${groupDone}/${groupItems.length}</span>
      </div>
      <div class="monthly-item-list"></div>
    `;
    const listEl = section.querySelector(".monthly-item-list");
    for (const item of groupItems) {
      listEl.append(makeMonthlyItemCard(item, month));
    }
    monthlyGroups.append(section);
  }
}

function monthlyOptionsRefresh(groups) {
  if (!monthlyGroupOptions) return;
  monthlyGroupOptions.innerHTML = "";
  const names = new Set([...groups.keys(), "月初（1–5号）", "上旬（8–12号）", "中旬", "下旬", "不固定（每月1–2次）"]);
  for (const name of names) {
    const option = document.createElement("option");
    option.value = name;
    monthlyGroupOptions.append(option);
  }
}

function makeMonthlyItemCard(item, month) {
  const done = isMonthlyItemDone(month, item.id);
  const card = document.createElement("article");
  card.className = `issue-card monthly-item${done ? " is-done" : ""}`;
  card.dataset.monthlyId = item.id;
  if (editingMonthlyItemId === item.id) {
    card.classList.add("is-editing");
    card.innerHTML = `
      <div class="monthly-edit-fields">
        <label class="field"><span>分组</span><input data-monthly-edit="group" type="text" list="monthlyGroupOptions" value="${escapeMonthlyText(item.group)}" /></label>
        <label class="field"><span>事项</span><input data-monthly-edit="title" type="text" maxlength="120" value="${escapeMonthlyText(item.title)}" /></label>
        <label class="field"><span>备注</span><textarea class="issue-notes-edit" data-monthly-edit="notes">${escapeMonthlyText(item.notes)}</textarea></label>
      </div>
      <div class="monthly-item-actions">
        <button class="small-button" type="button" data-monthly-action="save">保存</button>
        <button class="small-button" type="button" data-monthly-action="cancel">取消</button>
      </div>
    `;
    return card;
  }
  card.innerHTML = `
    <label class="monthly-item-main">
      <input type="checkbox" data-monthly-action="toggle" ${done ? "checked" : ""} />
      <span class="monthly-item-text">
        <strong class="issue-title">${escapeMonthlyText(item.title)}</strong>
        ${item.notes ? `<span class="issue-notes">${escapeMonthlyText(item.notes)}</span>` : ""}
      </span>
    </label>
    <div class="monthly-item-actions">
      <button class="small-button" type="button" data-monthly-action="up" title="上移">↑</button>
      <button class="small-button" type="button" data-monthly-action="down" title="下移">↓</button>
      <button class="small-button" type="button" data-monthly-action="edit">编辑</button>
      <button class="small-button danger" type="button" data-monthly-action="delete">删除</button>
    </div>
  `;
  return card;
}

function moveMonthlyItem(item, delta) {
  const siblings = getActiveMonthlyItems()
    .filter((other) => other.group === item.group)
    .sort((a, b) => a.sortOrder - b.sortOrder || a.createdAt.localeCompare(b.createdAt));
  const index = siblings.findIndex((other) => other.id === item.id);
  const target = siblings[index + delta];
  if (!target) return;
  const now = new Date().toISOString();
  const order = siblings.map((other) => other.id);
  [order[index], order[index + delta]] = [order[index + delta], order[index]];
  const baseOrder = Math.min(...siblings.map((other) => other.sortOrder));
  order.forEach((id, position) => {
    const record = monthlyItems.find((other) => other.id === id);
    if (record && record.sortOrder !== baseOrder + position) {
      record.sortOrder = baseOrder + position;
      record.updatedAt = now;
    }
  });
  persistAll();
  renderMonthlyChecklist();
}

monthlyForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = monthlyTitleInput.value.trim();
  if (!title) return;
  const group = monthlyGroupInput.value.trim() || "未分组";
  const now = new Date().toISOString();
  const maxOrder = Math.max(0, ...monthlyItems.map((item) => item.sortOrder || 0));
  monthlyItems.push(normalizeMonthlyItem({
    id: uid(),
    title,
    group,
    notes: monthlyNotesInput.value.trim(),
    sortOrder: maxOrder + 1,
    createdAt: now,
    updatedAt: now,
  }));
  monthlyTitleInput.value = "";
  monthlyNotesInput.value = "";
  persistAll();
  renderMonthlyChecklist();
  showToast("已加入月度清单。");
  monthlyTitleInput.focus();
});

monthlyView?.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-monthly-nav]");
  if (nav) {
    const direction = nav.dataset.monthlyNav;
    monthlyMonthCursor = direction === "today" ? toDateKey(new Date()).slice(0, 7) : shiftMonthKey(monthlyMonthCursor, direction === "prev" ? -1 : 1);
    editingMonthlyItemId = null;
    renderMonthlyChecklist();
    return;
  }
  const actionEl = event.target.closest("[data-monthly-action]");
  if (!actionEl) return;
  const card = actionEl.closest("[data-monthly-id]");
  const item = monthlyItems.find((record) => record.id === card?.dataset.monthlyId);
  if (!item) return;
  const action = actionEl.dataset.monthlyAction;
  if (action === "toggle") {
    setMonthlyItemDone(monthlyMonthCursor, item.id, actionEl.checked);
    renderMonthlyChecklist();
    return;
  }
  if (action === "edit") {
    editingMonthlyItemId = item.id;
    renderMonthlyChecklist();
    return;
  }
  if (action === "cancel") {
    editingMonthlyItemId = null;
    renderMonthlyChecklist();
    return;
  }
  if (action === "save") {
    const title = card.querySelector('[data-monthly-edit="title"]').value.trim();
    if (!title) {
      showToast("事项名称不能为空。");
      return;
    }
    item.title = title;
    item.group = card.querySelector('[data-monthly-edit="group"]').value.trim() || "未分组";
    item.notes = card.querySelector('[data-monthly-edit="notes"]').value.trim();
    item.updatedAt = new Date().toISOString();
    editingMonthlyItemId = null;
    persistAll();
    renderMonthlyChecklist();
    showToast("月度清单已更新。");
    return;
  }
  if (action === "up" || action === "down") {
    moveMonthlyItem(item, action === "up" ? -1 : 1);
    return;
  }
  if (action === "delete") {
    const now = new Date().toISOString();
    item.deletedAt = now;
    item.updatedAt = now;
    persistAll();
    renderMonthlyChecklist();
    showToast(`已从月度清单删除「${item.title}」。`, {
      onUndo: () => {
        item.deletedAt = null;
        item.updatedAt = new Date().toISOString();
        persistAll();
        renderMonthlyChecklist();
        showToast(`已恢复「${item.title}」。`);
      },
    });
  }
});
// ---------- 月度清单 end ----------

const tabButtonList = Array.from(tabButtons);
for (const button of tabButtonList) {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
  button.addEventListener("keydown", (event) => {
    const idx = tabButtonList.indexOf(button);
    if (idx < 0) return;
    let nextIdx = -1;
    if (event.key === "ArrowRight") nextIdx = (idx + 1) % tabButtonList.length;
    else if (event.key === "ArrowLeft") nextIdx = (idx - 1 + tabButtonList.length) % tabButtonList.length;
    else if (event.key === "Home") nextIdx = 0;
    else if (event.key === "End") nextIdx = tabButtonList.length - 1;
    if (nextIdx >= 0) {
      event.preventDefault();
      const targetBtn = tabButtonList[nextIdx];
      switchTab(targetBtn.dataset.tab);
      targetBtn.focus();
    }
  });
}

const saveStatusBadge = document.getElementById("saveStatusBadge");
if (saveStatusBadge) {
  const retrySave = () => {
    if (!saveStatusBadge.classList.contains("is-error")) return;
    if (fileHydrationFailed && fileRevision === null) {
      hydrateFromFile();
      return;
    }
    flushFileSave();
  };
  saveStatusBadge.addEventListener("click", retrySave);
  saveStatusBadge.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      retrySave();
    }
  });
}

window.addEventListener("online", () => {
  if (hasUnsavedLocalChanges() || saveStatusBadge?.classList.contains("is-error")) {
    flushFileSave();
  }
});

// ---------- 切回窗口时从服务器拉最新数据 ----------
function hasUnsavedLocalChanges() {
  return Boolean(fileSaveTimer) || fileSaveInFlight || fileSaveQueued || fileHydrationPending || localChangeCounter !== savedChangeCounter;
}

function isEditingInsideList() {
  const active = document.activeElement;
  if (!active || active === document.body) return false;
  if (active.isContentEditable) return true;
  if (!/^(INPUT|TEXTAREA|SELECT)$/.test(active.tagName)) return false;
  // 顶部固定表单（快速记录、Issue、备忘等）不会被重新渲染，可以放心刷新
  return !active.closest("form[id]");
}

function applyServerSnapshot(data) {
  fileRevision = data.savedAt || fileRevision;
  todos = (Array.isArray(data.todos) ? data.todos : []).map(normalizeTodo);
  reminders = (Array.isArray(data.reminders) ? data.reminders : []).map(normalizeReminder);
  issueDrafts = (Array.isArray(data.issueDrafts) ? data.issueDrafts : []).map(normalizeIssueDraft);
  memoItems = (Array.isArray(data.memoItems) ? data.memoItems : []).map(normalizeMemoItem);
  projects = (Array.isArray(data.projects) ? data.projects : []).map(normalizeProject);
  projectItems = (Array.isArray(data.projectItems) ? data.projectItems : []).map(normalizeProjectItem);
  larkCalendarRecords = (Array.isArray(data.larkCalendarRecords) ? data.larkCalendarRecords : []).map(normalizeLarkCalendarRecord);
  t46OpenEvents = (Array.isArray(data.t46OpenEvents) ? data.t46OpenEvents : []).map(normalizeT46OpenEvent);
  if (Array.isArray(data.monthlyItems)) monthlyItems = data.monthlyItems.map(normalizeMonthlyItem);
  if (data.monthlyChecks && typeof data.monthlyChecks === "object") monthlyChecks = normalizeMonthlyChecks(data.monthlyChecks);
  deletedRecords = mergeDeletedRecords(data.deletedRecords, deletedRecords);
  applyDeletedRecordsToState();
  const migrated = migrateInboxTodosToMemos();
  persistLocalCollections();
  renderTodos();
  renderMemoItems();
  renderProjects();
  renderWorkCalendar();
  renderIssueDrafts();
  renderMonthlyChecklist();
  render();
  if (migrated) saveToFileSoon();
}

async function refreshFromServerIfIdle() {
  if (!canUseFileStorage() || serverRefreshInFlight) return;
  if (document.visibilityState === "hidden") return;
  if (hasUnsavedLocalChanges() || isEditingInsideList()) return;
  serverRefreshInFlight = true;
  try {
    const response = await fetchWithTimeout("/api/data", { cache: "no-store" }, 10000);
    if (!response.ok) return;
    const data = await response.json();
    if (!data.savedAt || data.savedAt === fileRevision) return;
    // 请求期间如果用户又改了东西，就不覆盖，交给下一次保存去合并
    if (hasUnsavedLocalChanges() || isEditingInsideList()) return;
    applyServerSnapshot(data);
  } catch {
    // 服务暂时连不上就先不刷新
  } finally {
    serverRefreshInFlight = false;
  }
}

window.addEventListener("focus", () => refreshFromServerIfIdle());
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") refreshFromServerIfIdle();
});
// ---------- 切回窗口刷新 end ----------

window.addEventListener("pagehide", () => {
  if (fileSaveTimer) flushFileSave({ useBeacon: true });
});

customDateField.classList.add("is-hidden");
dateInput.value = toDateKey(new Date());
resetOwnerField();
setSelectedReminderSchedules([{ day: 5, time: "17:00" }]);
if (migrateInboxTodosToMemos()) {
  persistAll();
}
renderMemoItems();
renderProjects();
renderWorkCalendar();
renderIssueDrafts();
renderMonthlyChecklist();
renderTodos();
render();
hydrateFromFile();
fetchLarkCalendar();
tick();
setInterval(tick, 15000);
requestAnimationFrame(() => todoInput.focus());

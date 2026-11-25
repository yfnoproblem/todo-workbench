---
name: Todo 工作台 · made of stardust
description: 月白星海双面工作台 — 面向线下社交活动运营的星夜追光与月白日间双主题个人工作台
colors:
  starlight-accent: "#a78bfa"
  starlight-accent-strong: "#c4b5fd"
  violet-solid: "#6b4eff"
  day-accent-strong: "#5338c7"
  day-primary-ink: "#23173d"
  nocturne-deep: "#110b22"
  nocturne-mid: "#1a1136"
  nocturne-elevated: "rgba(31, 22, 58, 0.72)"
  nocturne-popover: "rgba(24, 16, 48, 0.96)"
  nocturne-ink: "#f6f3ff"
  nocturne-ink-muted: "#c2b9e0"
  nocturne-ink-dim: "#9e95bf"
  nocturne-hairline: "rgba(210, 195, 255, 0.2)"
  nocturne-hairline-strong: "rgba(226, 215, 255, 0.42)"
  nocturne-urgent-bg: "rgba(216, 198, 255, 0.88)"
  nocturne-urgent-ink: "#170e30"
  nocturne-mark-bg: "rgba(167, 139, 250, 0.34)"
  moonwhite-deep: "#f6f3fa"
  moonwhite-mid: "#efeaf7"
  moonwhite-elevated: "rgba(255, 255, 255, 0.78)"
  moonwhite-popover: "rgba(252, 250, 255, 0.97)"
  moonwhite-ink: "#211738"
  moonwhite-ink-muted: "#4b4068"
  moonwhite-ink-dim: "#5c517a"
  moonwhite-hairline: "rgba(33, 23, 56, 0.14)"
  moonwhite-hairline-strong: "rgba(33, 23, 56, 0.34)"
  moonwhite-mark-bg: "rgba(250, 204, 21, 0.38)"
  danger-night: "#fb7185"
  danger-day: "#be123c"
  success-night: "#6ee7b7"
  success-day: "#047857"
typography:
  display:
    fontFamily: "Cormorant Garamond, Noto Serif SC, Songti SC, STSong, Georgia, serif"
    fontSize: "clamp(2.15rem, 3.2vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "0.03em"
  editorial:
    fontFamily: "Cormorant Garamond, Noto Serif SC, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.38rem, 1.95vw, 1.82rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.03em"
  hand:
    fontFamily: "Cormorant Garamond, LXGW WenKai TC, Kaiti SC, STKaiti, Noto Serif SC, serif"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0.01em"
  view-title:
    fontFamily: "Cormorant Garamond, Noto Serif SC, Songti SC, STSong, Georgia, serif"
    fontSize: "1.42rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Plus Jakarta Sans, Noto Sans SC, -apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.4
  title:
    fontFamily: "Plus Jakarta Sans, Noto Sans SC, -apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Plus Jakarta Sans, Noto Sans SC, -apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Plus Jakarta Sans, Noto Sans SC, -apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  xs: "4px"
  sm: "6px"
  btn: "8px"
  md: "10px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "44px"
components:
  button-primary:
    backgroundColor: "{colors.violet-solid}"
    textColor: "#ffffff"
    rounded: "{rounded.btn}"
    padding: "8px 16px"
  button-primary-day:
    backgroundColor: "{colors.day-primary-ink}"
    textColor: "{colors.moonwhite-deep}"
    rounded: "{rounded.btn}"
    padding: "8px 16px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.nocturne-ink-muted}"
    rounded: "{rounded.sm}"
    padding: "5px 11px"
  button-capture-submit:
    backgroundColor: "transparent"
    textColor: "{colors.nocturne-ink}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
  select-trigger:
    backgroundColor: "{colors.nocturne-elevated}"
    textColor: "{colors.nocturne-ink}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
  pill-urgent:
    backgroundColor: "{colors.nocturne-urgent-bg}"
    textColor: "{colors.nocturne-urgent-ink}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
  input-field:
    backgroundColor: "{colors.nocturne-elevated}"
    textColor: "{colors.nocturne-ink}"
    rounded: "{rounded.sm}"
    padding: "7px 10px"
  toast-undo:
    backgroundColor: "{colors.violet-solid}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
---

# Design System: Todo 工作台 · made of stardust

## Overview

**Creative North Star: "月白星海双面工作台（The Starlight Zine Workbench）"**

这是一套为线下社交活动运营负责人定制的 Operate 模式个人工作台视觉系统。灵感取自马嘉祺应援意象「月白星紫 / 小气球 / 12.12 / 一起去未来」，在「星夜追光（Starlight Nocturne，默认）」与「月白日间（Moonwhite Day，一键瞬时切换）」两种心境之间自由流转。

我们刻意摒弃传统 SaaS 满屏圆角白卡、通用大圆角胶囊按钮与 Windows 原生蓝白控件，转而采用**无框细线杂志排版（Hairline Zine Editorial）+ 零依赖定制纸感控件**：所有列表、表单与右侧检视栏依靠极细发丝线（1px hairline）建立秩序，所有下拉框、复选框与浮层菜单均经专属磨砂宣纸/丝绒质感重绘；星尘光晕与悬浮气球只克制地停留在「今日工作台」桌面首屏与完成瞬间的微动效里，做到日常操作零干扰、收尾时刻有温度。

**Key Characteristics:**
- 双面主题瞬时切换：默认深邃丝绒星紫（Starlight Nocturne），日间一键切换柔和月白宣纸（Moonwhite Day），通过原子化过渡抑制消除切换闪烁。
- 零依赖定制控件：全站 `<select>` 由 `.zine-select` 门户磨砂浮层接管，复选框与日期框全量去 Windows 蓝，与整站杂志氛围 100% 融合。
- 纸感方圆角层级：打破“万物皆大圆角胶囊”，交互按钮收束为 `6px`/`8px` 印刷纸感方圆角，`999px` 胶囊仅留给真正的高优/异常标签与撤销 Toast。
- 桌面右侧就地编辑：1025px 以上选中任务后直接在右侧检视栏就地编辑标题、元数据与双富文本，不打断左侧任务流扫读。

## Colors

以单一星紫（Star-Violet）作为全站唯一主色家族，配合深靛星夜与柔和月白两套高对比中性色阶，确保长时间运营排期阅读不疲劳。

### Primary
- **Starlight Accent** (`starlight-accent`): 星夜模式下的交互聚焦、进度渐变与选中描边。
- **Starlight Accent Strong** (`starlight-accent-strong`): 日期分组标题、当前导航星标、斜体副标 `made of stardust`、选中星标与左侧选中条。
- **Violet Solid** (`violet-solid`): 星夜模式主操作按钮、文本选中底色、复选框选中底色与撤销 Toast 底色。
- **Day Accent Strong** (`day-accent-strong`) & **Day Primary Ink** (`day-primary-ink`): 月白日间模式下加深后的高对比强调紫与深梅紫墨主按钮底色，确保浅底文字与按钮对比度稳定 ≥4.5:1。

### Neutral
- **Nocturne Deep / Mid / Elevated / Popover** (`nocturne-deep`, `nocturne-mid`, `nocturne-elevated`, `nocturne-popover`): 星夜模式 165° 丝绒底色渐变、半透输入承载层与磨砂浮层底色。
- **Nocturne Ink / Muted / Dim** (`nocturne-ink`, `nocturne-ink-muted`, `nocturne-ink-dim`): 星夜模式三级文字层级；顶栏 `已本地保存` 状态微标使用 `nocturne-ink-muted` 保证小字对比度 ≥5.5:1。
- **Nocturne Hairline / Strong** (`nocturne-hairline`, `nocturne-hairline-strong`): 1px 细线分隔与录入下划线。
- **Moonwhite Deep / Mid / Elevated / Popover** (`moonwhite-deep`, `moonwhite-mid`, `moonwhite-elevated`, `moonwhite-popover`): 月白日间浅紫宣纸底色、控件承载层与磨砂宣纸浮层。
- **Moonwhite Ink / Muted / Dim** (`moonwhite-ink`, `moonwhite-ink-muted`, `moonwhite-ink-dim`): 月白日间深紫墨色文字层级（从不用纯黑或中性灰）。
- **Semantic Danger & Success** (`danger-night` / `danger-day`, `success-night` / `success-day`): 删除确认态、保存失败警示与完成正向反馈。
- **Theme-Safe Rich Highlight** (`nocturne-mark-bg` / `moonwhite-mark-bg`): 富文本 `<mark>` 高亮底色，分别适配星夜白字与月白墨字，杜绝硬编码浅黄底导致暗色不可读。

### Named Rules
**The Exception-Only Pill Rule.** 列表行中只有高优或异常信息（`今天必须`、`需复盘`、项目标签、非“我”负责人）才能穿胶囊外衣；常规板块与默认状态一律退为低饱和行内文字。

**The Tinted Neutral Rule.** 所有中性底色、细线与次级文字均带有微弱星紫色相倾向，禁止使用无色相纯灰（`#888` / `#ccc`）或 Windows 原生系统蓝。

## Typography

**Display & Editorial Font:** Cormorant Garamond + Noto Serif SC（fallback: `Songti SC, STSong, Georgia, serif`）
**Handwritten Accent Font:** Cormorant Garamond + LXGW WenKai TC（fallback: `Kaiti SC, STKaiti, Noto Serif SC, serif`）
**Body & UI Font:** Plus Jakarta Sans + Noto Sans SC（fallback: `-apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, sans-serif`）

**Character:** 三层中英配对——高频任务流与控件使用干练清晰的 `Plus Jakarta Sans + Noto Sans SC` 稳住可读性；首屏主标题、二级页头与斜体副标使用 `Cormorant Garamond + Noto Serif SC` 建立书信与独立音乐杂志气质；12.12 签文语录、收工签与右下时间节律微语点缀 `LXGW WenKai TC`，呼应马嘉祺手写歌谱与亲笔信的清秀温度。

### Hierarchy
- **Display** (`700`, `clamp(2.1rem, 3.2vw, 3rem)`, `1.15`, tracking `-0.02em`): 仅用于「今日工作台」首屏主标题。
- **Editorial Accent** (`300 italic`, `clamp(1.25rem, 1.8vw, 1.65rem)`, `1.25`, tracking `0.02em`): 仅用于首屏 `made of stardust · MM.DD` 与 `12.12 ✦` 彩蛋日期。
- **View Title** (`700`, `1.35rem`, `1.3`, tracking `-0.01em`): 用于 5 个二级模块顶部 `.view-header` 页头标题，右侧配低饱和一句话说明。
- **Headline** (`600`, `1.05rem`, `1.4`): 各分区标题（今日与后续日程、任务备注、发散思考、今日固定提醒、工作日历等）。
- **Title** (`500`, `1rem`, `1.5`): 单条任务标题与备忘标题，已完成态附加删除线并降至 dim 墨色。
- **Body** (`400`, `0.9rem`, `1.65`): 富文本备注、发散思考正文、引用块与说明文案。
- **Label** (`500`, `0.82rem`–`0.84rem`, `1.4`): 顶栏导航、按钮、表单字段名、日期分组眉标与 `tabular-nums` 统计数字。

### Named Rules
**The Tabular Numerals Rule.** 所有日期（`11.25`、`12.12`）、任务计数（`今日完成 1/1`）、日历日期与提醒时刻统一启用 `font-variant-numeric: tabular-nums`，保证数字对齐不跳动。

## Layout

- **容器与留白**：主容器居中限制最大宽度 `1440px`，桌面端内边距 `20px 48px 56px`，平板（`≤1024px`）收紧至 `18px 24px 48px`，移动端（`≤680px`）收紧至 `14px 14px 44px` 且开启 `overflow-x: clip`。
- **单行克制顶栏**：左侧 8 个模块标签 + 右侧 3 项精简控制（`已本地保存`、`工具 ▾` 浮层、主题切换），确保在 `1280×800` 笔记本上严格单行不折行。
- **今日工作台 62/38 细线分栏**：桌面端采用 `minmax(0, 1.62fr) minmax(300px, 1fr)` 双栏网格（间距 `44px`），右侧检视与提醒栏以左 1px 发丝线分隔，无需外框。
- **二级视图结构化网格**：
  - `先放这儿`、`项目跟进`、`待写 Issue`、`月度清单`、`固定提醒设置` 均配备 `.view-header` 标题栏。
  - `项目跟进`、`月度清单` 顶部创建表单采用自适应多列 CSS Grid；`待写 Issue` 采用 2 行 3 列 CSS Grid；`日程回顾` 采用日期分组 + 无重复日期弹性行。
  - `工作日历` 与 `项目跟进` 主体均采用 `1.8fr / 0.9fr` 主副双栏；日历月网格在窄屏下包裹于局部 `overflow-x: auto` 容器内，杜绝整页横向撑爆。
- **响应式断点**：
  - `≤1024px`：所有双栏退化为单栏堆叠，右侧检视栏转为顶部分隔线；任务编辑退回行内手风琴展开。
  - `≤680px`：背景星光自动隐藏；顶栏 8 个模块标签转为带右缘渐隐提示的单行横向滑动轨道；所有表单退化为单列全宽，移动端按钮、输入框与复选区统一保证 `min-height: 44px` 触控热区。

## Elevation & Depth

全站遵循**扁平细线分层（Flat Hairline Layering）**而非投影堆叠：静息状态下所有内容区块均贴合星夜或月白主画布，仅通过 1px 发丝线、极浅星紫微底与 2px 左侧选中强调条表达层级。中性阴影仅保留给真实浮层（定制下拉菜单、顶栏工具菜单、备忘更多菜单与闹钟对话框），杜绝暗底彩色发光阴影。

### Shadow Vocabulary
- **Balloon Ambient Glow** (`filter: drop-shadow(0 8px 24px rgba(167, 139, 250, 0.25))`): 仅用于今日首屏居中悬浮气球插画。
- **Popover Elevation (Nocturne)** (`box-shadow: 0 16px 38px rgba(0, 0, 0, 0.44)`): 暗色模式 `.zine-select-menu` 与 `.topbar-tools-panel` 磨砂浮层中性阴影。
- **Popover Elevation (Day)** (`box-shadow: 0 14px 32px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.05)`): 月白宣纸浮层轻盈层级阴影。
- **Selected Rail Indicator** (`box-shadow: inset 2px 0 0 var(--accent-strong)`): 用于当前选中任务行、项目卡片与日历节点，替代重边框。

### Named Rules
**The Atomic Theme Switch Rule.** 切换星夜/月白主题瞬间为根元素挂载临时无过渡类，待重排后下一帧移除，确保文字、按钮与画布底色同步翻转，绝不出现 180ms 白底白字残影。

**The Today-Only Atmosphere Rule.** 背景星尘四角星装饰（sparkles）仅在桌面端「今日工作台」首屏展示，切入二级表单模块或进入 `≤680px` 移动端时自动隐藏，防止装饰元素穿过按钮与输入标签。

## Shapes

- **结构容器（`0px`）**：主列表行、二级模块面板、快捷录入元信息下拉触发器与提醒说明条（`.notice`）均采用 0 圆角 + 细线，强化印刷稿件感。
- **精制控件与编辑表面（`4px` / `6px` / `8px` / `10px`）**：定制复选框使用 `4px`；幽灵按钮、筛选芯片、标准下拉触发器与输入框使用 `6px`；主操作按钮使用 `8px`；磨砂浮层菜单与闹钟弹窗使用 `10px`。
- **异常与浮层胶囊（`999px`）**：仅用于 `今天必须` / `需复盘` 等异常状态徽标与右下角撤销 Toast，让胶囊重新拥有明确的视觉语义。

## Components

所有交互控件遵循“静息克制、悬停清晰、键盘可达”的 Operate 原则，所有焦点态统一呈现 `2px solid var(--accent-strong)` 外轮廓（`outline-offset: 2px`）。

### Buttons
- **Shape:** 主按钮为 `8px` 印刷墨色圆角，幽灵/行内按钮与筛选芯片为 `6px` 精致纸感细线方圆角；`999px` 全圆胶囊仅留给 `今天必须` / `需复盘` 等异常标签与撤销 Toast。
- **Primary:** 星夜模式实心星紫（`violet-solid`）+ 微光顶边；月白模式深梅紫墨（`#23173d`）+ 暖月白字，内边距 `8px 16px`。
- **Ghost / Small Action:** 透明底 + 1px 发丝线边框，内边距 `5px 11px`，悬停提亮文字并铺浅紫微底；危险删除按钮使用语义红边，首次点击原位翻转为实心红底「确认删除?」（3 秒自动复位）。
- **Capture Submit:** 无框纯文字 `+ 记一条`，与下划线快捷录入条融为一体。

### Bespoke Select & Checkboxes
- **Editorial Custom Select (`.zine-select`):** 由 `custom-controls.js` 自动接管全站静态与动态 `<select>`。快捷录入区呈现极简下划线细线触发器；标准表单区呈现 `6px` 纸感触发器；点击或点击关联 `<label>` 弹出 `document.body` 门户磨砂浮层（自动向上防裁切），悬停浅紫微洗，选中项带 `✦` 四角星标，支持 `↑`/`↓`/`Home`/`End`/`Enter`/`Esc` 完整键盘导航。
- **Custom Checkbox:** `17×17px`、`4px` 小圆角定制勾选框，选中态为星紫（夜）/ 深梅紫墨（日）配纯白居中对勾，彻底消灭 Windows 蓝方框。

### Chips & Pills
- **Urgent Pill:** 星夜模式高对比浅紫底深靛字（`nocturne-urgent-bg` / `nocturne-urgent-ink`），月白模式深紫墨底月白字，仅用于 `今天必须` 与 `需复盘`。
- **Subtle Pill:** 浅紫微底 + 1px 细线，用于项目归属标签与外部负责人。
- **Filter Chip:** `6px` 方圆角索引标签，激活态为柔和星紫微洗底 + 亮紫边框 + 加粗墨字，并同步维护 `aria-pressed` 状态。

### Cards / Hairline Rows
- **Corner Style:** `0px`（无独立圆角外盒）。
- **Background:** 静息透明，悬停与选中铺极浅星紫微底，选中行附加左侧 2px 亮紫竖条。
- **Layout:** 任务行通过水平顶栏左右排布（左：标题 + 异常胶囊 + 静音 `.meta-text`；右：键盘可达拖拽手柄 `↕` + 编辑/完成/删除）。

### Inputs / Fields
- **Underline Quick-Capture:** 今日首屏主录入框完全无框透明，仅保留底部 1.5px 细线，聚焦时平滑转为亮紫；下方元信息条为单行横排（标签与细线自定义下拉同行对齐）。
- **Standard Fields & Date/Time:** 1px 细线 + 半透深紫/月白底 + `6px` 圆角；日期/月份/时间输入统一 `tabular-nums` 与柔和图标透明度。
- **Rich Text Editor:** 顶部 `.rich-toolbar` 承载加粗、有序/无序列表、主题安全 `<mark>` 高亮、引用想法块与插图按钮；编辑区支持 `role="textbox"`、`aria-multiline="true"` 与空态占位提示。

### Navigation & Tools Popover
- **Topbar:** 左侧 `role="tablist"` 承载 8 个模块标签（激活项配星标与底部 1.5px 亮紫指示线），右侧聚合高对比 `已本地保存` 状态微标、`工具 ▾` 磨砂浮层（收纳导出范围、导出 MD、导入 JSON 预检、系统通知）与双主题切换按钮。
- **Mobile Navigation:** `≤680px` 自动转为带右缘渐隐提示的单行横向滑动轨道，所有标签、输入框与按钮保持 `44px` 最小高度。

### Signature Components
- **Desktop Inline Inspector (`#todayInspector`):** 桌面端点击右侧「就地编辑」或左侧「编辑」，直接在右侧展开可编辑任务标题输入框、2 列元数据网格与备注/发散思考双富文本编辑器，按 `Esc` 或「完成编辑」无感退回预览态，不撑动左侧任务流。
- **Balloon Plate & Completion Flight:** 首屏悬浮 `balloon-plate.png` 气球插画（6s 轻柔上下悬浮）；勾选或完成任务时从触发点释放两枚轻盈渐变紫气球（820ms 升空消散），完整尊重 `prefers-reduced-motion: reduce`。
- **Universal Undo Toast & Inline Calendar Prompt:** 右下角星紫胶囊浮层覆盖 Todo / 备忘 / Issue / 月度清单 / 固定提醒 / 日历节点与阶段删除及项目归档（5.6 秒即时撤销恢复）；工作日历新建/改名全部使用内联表单条替代原生 `window.prompt()`；闹钟弹窗按 `Esc` 安全延后 10 分钟。

## Do's and Don'ts

### Do:
- **Do** 保持全站无框细线排版与单主色星紫体系，所有新增下拉框与复选框交由 `.zine-select` 与定制复选框样式自动接管，杜绝原生蓝白控件。
- **Do** 在桌面端（`≥1025px`）优先通过右侧 `#todayInspector` 承载选中任务的标题、元数据与富文本就地编辑，仅在窄屏退回行内展开。
- **Do** 严格遵守异常胶囊原则，列表行中仅对 `今天必须`、`需复盘`、项目标签与外部负责人使用 `999px` 胶囊，普通按钮使用 `6px`/`8px` 纸感方圆角，常规信息使用低饱和行内文字。
- **Do** 对所有破坏性操作提供非阻塞反馈（3 秒原位确认 + 5.6 秒撤销 Toast），并为导入覆盖操作提供条数预检。
- **Do** 保持 `1280px` 单行顶栏、移动端 `0` 页面级横向溢出与 `≥44px` 触控热区，宽表格/日历网格始终限制在局部横向滚动容器内。

### Don't:
- **Don't** 在卡片或列表中嵌套圆角白盒、多层彩色发光阴影或超过 1px 的装饰彩色左边框。
- **Don't** 在暗色/亮色共享的富文本或提示组件中硬编码浅黄/纯白等主题不安全背景色（必须走 `--mark-bg` 等主题 token）。
- **Don't** 使用原生 `window.prompt()` 或在同一删除动作上叠加内联确认与 `window.confirm()` 双重弹窗，也不要在首页暴露 `lark-cli` 等底层技术报错。
- **Don't** 让背景星光装饰出现在二级表单或移动端按钮背后，也不要在未同步 `body[data-active-tab]` 的情况下程序化切页。

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: 保留现有 Python 本地服务（`todo_server.py`）与 `.todo-data.json` 持久化接口；前端技术栈交由开发时推荐并决策，前提是必须保证单命令或双击直接开箱即用（无需复杂环境配置即可启动使用）。

## Users

- **主要用户**：社交线下活动运营负责人（个人工作台场景）。
- **使用情境**：日常高节奏推进线下社交活动筹备、场地对接、物料打印、报名补位、复盘归档等事务，需要一个入口极短、随时记录、不漏当日事项的本地工具。

## Product Purpose

为社交线下活动运营提供一套本地运行的专属 Todo 与运营工作台，解决通用待办工具在活动运营场景下的痛点：
- 入口够短：快速唤起、立即记录，无需在长文档中翻找定位。
- 当日不漏：默认聚焦「今日工作台」，优先处理当天必须推进的事项。
- 可回溯与文档感：保留按日期沉淀的任务记录、轻量富文本备注与发散思考，支持搜索与筛选。
- 固定提醒不干扰主视野：仅在当天显示相关固定提醒，完整规则集中管理。

## Positioning

不是通用团队协作 SaaS 或泛用待办清单，而是深度贴合「社交线下活动运营」工作流的本地个人工作台：内置活动运营专属业务板块、四级紧迫度优先级、轻量富文本思考记录、每周固定提醒与月度/项目跟进视图，所有数据本地留存、开箱即用。

## Operating Context

- **本地服务与启动**：通过 `todo_server.py` 提供本地 HTTP 服务（默认端口 `4173`，`http://127.0.0.1:4173/`），支持 `./run-todo-server.sh`、`OpenTodo.command` 及 `TodoWorkbench.app` 启动。
- **8 大核心工作台模块**：
  1. 今日工作台（`today`）：快速记录、任务归属（今天/明天/选择日期/先放这儿）、今日固定提醒、待分配与今日/后续日程。
  2. 工作日历（`calendar`）：按日历视图统筹日程与外部同步记录（如 `larkCalendarRecords`）。
  3. 项目跟进（`projects`）：项目维度与子项进度跟进。
  4. 先放这儿（`memos`）：暂未分配日期的灵感与待定事项池（`memoItems`）。
  5. 待写 Issue（`issues`）：问题/需求草稿记录与附件（`issueDrafts`、`issue-assets`）。
  6. 月度清单（`monthly`）：月度周期性检查项与勾选记录（`monthlyItems`、`monthlyChecks`）。
  7. 日程回顾（`review`）：全部任务、过去日程、已完成、需复盘筛选及跨字段搜索。
  8. 固定提醒设置（`reminders`）：按周几与时间设置的周期性提醒（暂停/启用、删除、测试提醒）。
- **数据流转**：右上角支持按周/月/全部导出 Markdown，以及导入/导出 JSON 备份。

## Capabilities and Constraints

- **数据兼容性（硬约束）**：必须 100% 兼容现有 `.todo-data.json` 数据结构（含 `todos`、`reminders`、`issueDrafts`、`memoItems`、`projects`、`projectItems`、`larkCalendarRecords`、`t46OpenEvents`、`monthlyItems`、`monthlyChecks`、`deletedRecords` tombstone 机制）及 `todo_server.py` 接口。
- **开箱即用（硬约束）**：前端美化与技术栈选型必须保证本地直接可用，不引入繁琐的外部数据库或不可离线运行的强依赖。
- **现有业务维度**：保留任务状态（未开始、进行中、等别人、已完成、需复盘、已归档）、优先级（今天必须、重要推进、可顺手做、先记着）、业务板块（活动创建与报名、补位与出席、物料与打印、酒吧与场地、客服与反馈、财务与结款、技术需求、人员分工、市场/小红书、复盘与优化）及轻量富文本编辑器（加粗、编号列表、项目符号列表、高亮、想法块）。
- **跨平台本地运行**：`todo_server.py` 已采用相对当前脚本目录的动态 `ROOT` 路径，并新增 Windows `Start-Todo.bat` 一键启动脚本。

## Evidence on Hand

- 现有前端实现：`index.html`、`styles.css`、`app.js`
- 现有本地服务：`todo_server.py`、`run-todo-server.sh`、`OpenTodo.command`、`OpenTodo.jxa.js`、`TodoWorkbench.app`
- 产品交接文档：`README.md`、`TODO_WORKBENCH_HANDOFF.md`、`design-qa.md`
- 回归测试集：`tests/` 目录下的 `.mjs` 与 `.py` 测试脚本

## Product Principles

1. **今日优先，降噪聚焦**：打开即见今日要事与当日提醒，不被非当日信息和复杂配置淹没。
2. **随手记录，文档化沉淀**：捕捉输入必须极短，同时允许每条任务下沉为带富文本备注与发散思考的微型文档。
3. **数据主权与零丢失**：所有数据本地 JSON 持久化并支持历史快照与 Tombstone 同步，任何界面升级不得破坏既有数据结构。
4. **开箱即用，轻量可靠**：本地单服务启动即用，不依赖复杂构建链路或云端账号即可完成全部日常运营工作。

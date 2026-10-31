---
term: Skill
zh: 技能
aliases: [Agent Skills, SKILL.md]
category: coding
summary: 裝著 SKILL.md 指示與相關檔案的資料夾，agent 需要時才載入。
when_to_use:
  - 有一套固定流程（寫週報、部署、審查）想讓 AI 每次照做
  - CLAUDE.md 越寫越長，想把只在特定任務用到的說明拆出去
  - 想把團隊做法打包，分享給同事或在不同 AI 工具間重用
related:
  - { slug: claude-md, rel: contrasts }
  - { slug: slash-command, rel: related }
  - { slug: plugin, rel: part-of }
  - { slug: context-window, rel: related }
  - { slug: context-engineering, rel: related }
  - { slug: coding-agent, rel: related }
diagram_caption: Agent 啟動時只讀每個 skill 的名稱與描述；任務符合時才載入完整內容，也可以用 slash command 手動叫用。
sources:
  - { title: "Agent Skills — Overview", url: "https://agentskills.io" }
  - { title: "Claude Code Docs — Skills", url: "https://code.claude.com/docs/en/skills" }
needs_verification: []
last_verified: 2026-10-30
---
Skill（Agent Skills）是把專業知識和工作流程打包給 AI agent 的格式：一個資料夾，裡面至少有一份 SKILL.md，開頭寫名稱與描述，後面是步驟說明，也可以附上腳本、範本和參考資料。它的重點是漸進載入：agent 啟動時只讀每個 skill 的名稱和描述，知道「有這個能力」；等任務符合描述，才把完整內容讀進上下文，需要時再打開附帶的檔案。所以你可以準備很多 skill，卻幾乎不佔 context window。和每次都會載入的 CLAUDE.md 相比，skill 適合放只在特定任務才用到的長流程。在 Claude Code 裡也能輸入斜線加 skill 名稱手動叫用。這個格式由 Anthropic 開發後以開放標準釋出，已有多個 AI 工具支援。

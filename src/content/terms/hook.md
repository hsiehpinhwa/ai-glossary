---
term: Hook
zh: 鉤子
aliases: [Lifecycle Hook, Agent Hook]
category: coding
summary: 在 agent 執行到特定時間點時，自動觸發的指令或腳本。
when_to_use:
  - 希望 AI 每次改完檔案都自動排版或跑 lint，而不是靠它記得
  - 要硬性禁止 AI 修改 .env 等敏感檔案或執行危險指令
  - AI 做完工作或在等你回覆時，想收到桌面通知
related:
  - { slug: harness, rel: part-of }
  - { slug: coding-agent, rel: related }
  - { slug: tool-use, rel: related }
  - { slug: guardrails, rel: enables }
  - { slug: claude-md, rel: related }
  - { slug: permission-mode, rel: related }
  - { slug: plugin, rel: related }
diagram_caption: 工具執行前的 hook 可以擋下危險動作並告訴 agent 原因，執行後的 hook 自動排版或檢查，agent 停下來時則可以發通知給你。
disambiguation: React 的 hooks（如 useState）是讓前端元件使用狀態等功能的函式；git hooks 是 Git 在 commit、push 等動作前後執行的腳本，概念相近但由 Git 觸發。本條指的是 coding agent 的 lifecycle hook。
sources:
  - { title: "Claude Code Docs — Automate actions with hooks", url: "https://code.claude.com/docs/en/hooks-guide" }
  - { title: "Git — githooks", url: "https://git-scm.com/docs/githooks" }
  - { title: "React — Built-in React Hooks", url: "https://react.dev/reference/react/hooks" }
needs_verification: []
last_verified: 2026-10-30
---
Hook 是你預先設定、由 harness 在 agent 生命週期的特定時間點自動執行的指令。常見的時間點包括：工具執行前（PreToolUse）、執行後（PostToolUse）、使用者送出 prompt 時、session 開始時，以及 agent 停下來等你的時候。例如設定「每次改完檔案就跑排版工具」，或在執行前檢查目標路徑，碰到 .env 就擋下並告訴 AI 原因，讓它換個做法。它和 CLAUDE.md 最大的差別是確定性：寫在 CLAUDE.md 的規則是給模型參考，模型可能忘記；hook 是程式，時間點一到就一定會跑。所以「一定要做」或「絕對不能做」的事，適合交給 hook。Hook 會真的在你的電腦上執行指令，套用別人寫好的設定前，先看懂它會做什麼。

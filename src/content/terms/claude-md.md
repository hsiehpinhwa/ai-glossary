---
term: CLAUDE.md
zh: 專案指示檔
aliases: [AGENTS.md, Project Instructions]
category: coding
summary: 放在專案裡、coding agent 每次開工都會先讀的 Markdown 指示檔。
when_to_use:
  - 每次開新對話都要重新交代建置指令和程式風格，想一次寫好
  - 團隊多人或多種 AI 工具要共用同一套專案規則
  - AI 一再犯同樣的錯，想把修正寫成固定規則
related:
  - { slug: coding-agent, rel: related }
  - { slug: repository, rel: part-of }
  - { slug: context-window, rel: uses }
  - { slug: context-engineering, rel: related }
  - { slug: system-prompt, rel: related }
  - { slug: memory, rel: related }
  - { slug: skill, rel: contrasts }
  - { slug: hook, rel: related }
diagram_caption: 個人層級與專案層級的指示檔在每次開工時一起載入上下文；skill 只在需要時才載入，hook 則是不經模型判斷、一定會執行的規則。
disambiguation: CLAUDE.md 是 Claude Code 使用的檔名；AGENTS.md 是多家 coding agent 共用的開放格式，用途相同。
sources:
  - { title: "Claude Code Docs — How Claude remembers your project", url: "https://code.claude.com/docs/en/memory" }
  - { title: "AGENTS.md", url: "https://agents.md/" }
needs_verification: []
last_verified: 2026-10-30
---
CLAUDE.md 是放在專案根目錄的 Markdown 檔，coding agent 每次開新 session 都會先把它讀進上下文。內容通常是建置與測試指令、程式風格、架構決策和團隊慣例，也就是「每次都得跟 AI 重講一次」的那些事。Claude Code 讀 CLAUDE.md；Codex、Cursor 等工具共用的開放格式叫 AGENTS.md，被形容為「給 agent 看的 README」，Claude Code 也能讀它。除了專案層級，也可以在個人目錄放一份，套用到你所有的專案。要注意它是上下文，不是強制設定：寫得越具體、越精簡，AI 越會遵守；要百分之百擋下某個動作，得改用 hook。內容太長也會佔用 context window，只在特定任務才用到的冗長步驟，更適合拆成需要時才載入的 skill。

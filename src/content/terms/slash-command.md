---
term: Slash Command
zh: 斜線指令
aliases: [Custom Command, Command]
category: coding
summary: 在輸入框打「/」開頭的指令，直接叫工具做一件固定的事。
when_to_use:
  - 想清空對話、壓縮上下文，不想用文字繞一圈說明
  - 常打同一段長 prompt，想存成一個短指令
  - 看教學影片時出現 /init、/compact 這類指令，想知道在做什麼
related:
  - { slug: skill, rel: related }
  - { slug: prompt, rel: related }
  - { slug: cli, rel: related }
  - { slug: claude-md, rel: related }
  - { slug: context-compaction, rel: related }
  - { slug: plugin, rel: part-of }
diagram_caption: 輸入「/」會列出可用指令：內建指令直接觸發工具功能，例如產生 CLAUDE.md 或壓縮上下文；自訂指令則載入你事先寫好的 prompt。
sources:
  - { title: "Claude Code Docs — Commands", url: "https://code.claude.com/docs/en/commands" }
  - { title: "Claude Code Docs — Skills", url: "https://code.claude.com/docs/en/skills" }
needs_verification: []
last_verified: 2026-10-30
---
Slash command 是在 AI 工具的輸入框打「/」開頭的指令。和一般 prompt 不同，它不是請模型理解你的意思，而是直接觸發工具裡的固定功能。以 Claude Code 為例，打「/」就會列出可用指令，例如 /clear 清空對話重新開始、/compact 把目前的對話摘要以釋出上下文空間、/init 自動產生 CLAUDE.md；許多 AI 工具也有類似設計。除了內建指令，你也能自己做：把常用的長 prompt 存成檔案，之後打斜線加名稱就能呼叫，後面接的文字會當成參數傳進去。在 Claude Code 裡，自訂指令已經併入 skill，兩種寫法都會產生同樣的指令。看教學影片時常看到別人打一串斜線指令，弄懂它們能省下很多重複輸入。

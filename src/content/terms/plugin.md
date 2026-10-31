---
term: Plugin
zh: 外掛
aliases: [Claude Code Plugin, Marketplace Plugin]
category: coding
summary: 把 skill、hook、MCP server 等擴充打包在一起、一次安裝的套件。
when_to_use:
  - 想直接用別人整理好的一整套工作流程，不想自己一項項設定
  - 要把團隊的 skill、hook 和工具連線分享給同事
  - 在教學裡看到「從 marketplace 安裝外掛」的步驟
related:
  - { slug: skill, rel: uses }
  - { slug: hook, rel: uses }
  - { slug: mcp-server, rel: uses }
  - { slug: subagent, rel: uses }
  - { slug: slash-command, rel: enables }
  - { slug: coding-agent, rel: related }
diagram_caption: 從 marketplace 安裝一個 plugin，裡面的 skill、subagent、hook 與 MCP server 會一起出現在之後的每個 session。
disambiguation: VS Code、JetBrains 上的「Claude Code 外掛」是讓 IDE 能使用 Claude Code 的擴充程式，和這裡說的 plugin 不同；一般軟體說的 plugin 則泛指任何外掛程式。
sources:
  - { title: "Claude Code Docs — Plugins overview", url: "https://code.claude.com/docs/en/plugins" }
needs_verification: []
last_verified: 2026-10-30
---
Plugin 是 coding agent 的擴充套件：一個資料夾裡打包了 skill、subagent、hook、MCP server 等元件，安裝一次就全部到位。以 Claude Code 為例，plugin 大多來自 marketplace，也就是列出外掛與下載位置的目錄；在對話中打 /plugin 就能瀏覽與安裝，並選擇只對自己、某個專案，或是整個團隊啟用。這些元件單獨也能用，plugin 的價值在於打包和分享：把一整套工作方式交給同事，或發布新版本讓別人更新。要注意，啟用的 plugin 在每個 session 都存在：skill 的名稱和描述會佔用上下文，MCP server 會在背景執行，hook 也會照常觸發。而且 plugin 以你的身分執行程式，安裝第三方外掛前要先確認來源可信。

---
term: MCP Server
zh: MCP 伺服器
aliases: [Local MCP Server, Remote MCP Server]
category: coding
summary: 透過 MCP 把工具、資料和 prompt 模板提供給 AI 應用的程式。
when_to_use:
  - 想讓 coding agent 能查 issue、讀設計稿或操作資料庫
  - 教學要你在設定檔加一段 MCP server 設定，想知道它會做什麼
  - 想把公司內部系統開放給 AI 使用，評估要不要自己寫一個
related:
  - { slug: mcp, rel: part-of }
  - { slug: tool-use, rel: enables }
  - { slug: api, rel: uses }
  - { slug: api-key, rel: uses }
  - { slug: coding-agent, rel: related }
  - { slug: prompt-injection, rel: related }
  - { slug: plugin, rel: related }
diagram_caption: AI 應用先詢問 MCP server 提供哪些能力，再依任務呼叫工具、讀取資料或套用 prompt 模板；遠端 server 背後通常串著外部服務的 API，需要登入授權。
sources:
  - { title: "MCP — Architecture overview", url: "https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture.md" }
  - { title: "Claude Code Docs — Connect Claude Code to tools via MCP", url: "https://code.claude.com/docs/en/mcp" }
needs_verification: []
last_verified: 2026-10-30
---
MCP server 是實作 MCP 協定、把某個系統的能力開放給 AI 應用的程式。它可以提供三種東西：工具（AI 能呼叫的動作，例如查詢資料庫、建立 issue）、資源（可讀取的資料，例如檔案內容、資料庫紀錄）和 prompt 模板。AI 應用連上後，會先詢問 server 有哪些工具，模型再依任務決定要不要呼叫。Server 有兩種跑法：本機 server 在你的電腦上以獨立程式執行，常用來讀寫檔案；遠端 server 架在服務商那邊，透過網路連線，通常要用 OAuth 或 API key 授權。許多服務都提供 MCP server，接上後 AI 就能操作它們。但它能做的事就等於 AI 能做的事，而會抓取外部內容的 server 可能帶進 prompt injection，連線前要確認來源可信。

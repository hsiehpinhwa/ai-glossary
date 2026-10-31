---
term: MCP
zh: 模型上下文協定
aliases: [Model Context Protocol]
category: coding
summary: 讓 AI 應用以統一方式連接外部工具與資料的開放標準。
when_to_use:
  - 想讓 AI 讀你的雲端文件、Notion 或資料庫，而不是手動複製貼上
  - 在 AI 工具的設定頁看到「新增 MCP server」的選項
  - 開發服務時，希望各家 AI 工具都能用同一套方式串接
related:
  - { slug: mcp-server, rel: related }
  - { slug: tool-use, rel: enables }
  - { slug: llm, rel: related }
  - { slug: api, rel: related }
  - { slug: coding-agent, rel: related }
  - { slug: prompt-injection, rel: related }
diagram_caption: AI 應用（host）為每個 MCP server 建立一個 client，server 可以在本機或遠端，把工具、資料和 prompt 模板提供給模型使用。
sources:
  - { title: "Anthropic — Introducing the Model Context Protocol", url: "https://www.anthropic.com/news/model-context-protocol" }
  - { title: "MCP — What is the Model Context Protocol?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }
  - { title: "MCP — Architecture overview", url: "https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture.md" }
needs_verification: []
last_verified: 2026-10-30
---
MCP（Model Context Protocol）是 Anthropic 在 2024 年 11 月發表的開放標準，用來連接 AI 應用和外部系統。官方比喻它是 AI 應用的 USB-C：過去每個 AI 工具要接每個服務，都得各寫一套整合；現在只要雙方都支援 MCP 就能接上。架構分三個角色：AI 應用是 host，例如 Claude Code 或 VS Code；host 為每個連線建立一個 client；另一端的 MCP server 把能力提供出來，包括可執行的工具、可讀取的資料，以及預先寫好的 prompt 模板。Server 可以在你的電腦上執行，也可以是遠端服務。對使用者來說，MCP 就是讓 AI 讀你的文件、查資料庫、操作其他軟體的管道，Claude、ChatGPT、VS Code、Cursor 等都支援。接上 server 等於把權限交給 AI，只連你信任的來源。

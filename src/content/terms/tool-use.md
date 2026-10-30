---
term: Tool Use
zh: 工具使用
aliases: [Function Calling, Tool Calling, 函式呼叫]
category: agent
summary: 讓模型依需求呼叫外部函式或服務，例如搜尋、查資料、執行程式。
when_to_use:
  - 希望 AI 能查即時資訊、讀你的檔案或操作其他系統
  - 在文件裡看到 function calling、tool call 這類 API 用語
  - 設計 agent 時，決定要開放哪些工具給模型
related:
  - { slug: llm, rel: uses }
  - { slug: agent, rel: enables }
  - { slug: agent-loop, rel: part-of }
  - { slug: api, rel: uses }
  - { slug: mcp, rel: related }
  - { slug: structured-output, rel: related }
  - { slug: computer-use, rel: related }
diagram_caption: 應用程式先告訴模型有哪些工具；模型決定呼叫時送出請求，由你的程式真正執行、呼叫外部 API，再把結果交回模型寫成回答。
sources:
  - { title: "Anthropic — Tool use with Claude", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview" }
  - { title: "OpenAI — Prompt engineering guide", url: "https://developers.openai.com/api/docs/guides/prompt-engineering.md" }
needs_verification: []
last_verified: 2026-10-30
---
Tool use 也叫 function calling，是讓模型能「動手」的機制。開發者先描述有哪些工具可用，每個工具有名稱、用途說明和參數格式；模型讀完使用者的需求，判斷需要時就回傳一個「我要呼叫某個工具，參數是這些」的請求。模型本身不會真的執行，而是由應用程式去跑函式、拿到結果，再交回給模型，讓它根據結果寫出回答。也有在服務商伺服器上直接執行的工具，例如 Anthropic 提供的網路搜尋。Tool use 是 agent 的基礎：查天氣、搜尋網頁、讀寫檔案、操作電腦，背後都是同一個流程。對使用者來說，理解這點就知道 AI 能做什麼，取決於它被接上了哪些工具。

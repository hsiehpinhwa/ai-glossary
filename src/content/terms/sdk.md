---
term: SDK
zh: 軟體開發套件
aliases: [Software Development Kit, Client SDK]
category: dev
summary: 服務商提供的一包程式庫、文件與範例，讓你更容易使用它的 API。
when_to_use:
  - AI 寫的程式裡出現 pip install 或 npm install 某家服務的套件
  - 想用幾行程式呼叫模型，不想自己處理請求細節
  - 要自己打造 agent，評估要不要用現成的 Agent SDK
related:
  - { slug: api, rel: uses }
  - { slug: api-key, rel: uses }
  - { slug: rate-limit, rel: related }
  - { slug: harness, rel: related }
  - { slug: agent, rel: related }
diagram_caption: 你的程式透過 SDK 呼叫 API：SDK 讀取 API key、組好請求、遇到 rate limit 自動重試；Agent SDK 則再往上包了一層 agent 迴圈。
sources:
  - { title: "AWS — What is an SDK?", url: "https://aws.amazon.com/what-is/sdk/" }
  - { title: "Claude Docs — Client SDKs overview", url: "https://platform.claude.com/docs/en/cli-sdks-libraries/overview" }
  - { title: "Claude Code Docs — Agent SDK overview", url: "https://code.claude.com/docs/en/agent-sdk/overview" }
needs_verification: []
last_verified: 2026-10-30
---
SDK（Software Development Kit）是服務商替特定平台或程式語言準備好的一套開發工具，通常包含程式庫、說明文件、範例程式碼和 API。直接呼叫 API，要自己組網址、處理標頭和各種錯誤；改用 SDK，裝好套件後幾行程式就能做到同樣的事。以 Claude 為例，官方提供 Python、TypeScript、Go、Java 等七種語言的 SDK，內建串流、型別檢查與自動重試，遇到 rate limit 不必自己寫重送邏輯。可以這樣分：API 是溝通的規則，SDK 是幫你遵守規則的工具箱。vibe coding 時，AI 寫出 pip install 或 npm install 某家服務的套件，多半就是在裝 SDK。另外還有 Agent SDK 這一類，把 agent 需要的迴圈、工具與上下文管理也一起包進去。

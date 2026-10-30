---
term: API Key
zh: API 金鑰
aliases: [金鑰, Secret Key]
category: dev
summary: 呼叫 API 時用來證明身分、計算用量的一串密碼。
when_to_use:
  - 第一次在自己的 app 或工具裡串接 AI 模型
  - AI 把金鑰寫進程式碼，你想確認這樣安不安全
  - 懷疑金鑰外洩，帳單或用量出現異常
related:
  - { slug: api, rel: part-of }
  - { slug: environment-variable, rel: uses }
  - { slug: backend, rel: related }
  - { slug: rate-limit, rel: related }
  - { slug: deploy, rel: related }
diagram_caption: 金鑰在服務後台產生，存進環境變數，由後端讀出後附在 API 請求裡；放進前端或 commit 進公開 repo 就可能外流被盜用。
sources:
  - { title: "Claude Docs — Authentication", url: "https://platform.claude.com/docs/en/manage-claude/authentication" }
  - { title: "Google Cloud — Best practices for managing API keys", url: "https://docs.cloud.google.com/docs/authentication/api-keys-best-practices" }
needs_verification: []
last_verified: 2026-10-30
---
API key 是服務商發給你的一串長密碼，呼叫 API 時附在請求裡，服務端靠它認出是誰在用、該算誰的帳。以 Claude API 為例，金鑰在 Console 產生，請求時放在標頭裡，官方 Python SDK 也能自動讀取 ANTHROPIC_API_KEY 這個環境變數。拿到金鑰的人就能以你的名義花錢，所以它要當成密碼保管：不要寫死在程式碼裡、不要 commit 進 repo，也不要放在使用者看得到的前端；做法是存在環境變數或密鑰管理服務，由後端代為呼叫。vibe coding 要特別小心的情況，是 AI 把金鑰直接寫進程式，再推上公開的 GitHub，被人拿去盜用、帳單暴增。一旦懷疑外洩，立刻到後台停用或刪除，再換一把新的。

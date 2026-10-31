---
term: Backend
zh: 後端
aliases: [Back-end, Server-side, 伺服器端]
category: dev
summary: 在伺服器上處理資料、商業邏輯與安全，使用者看不到的那一層。
when_to_use:
  - app 需要登入、儲存資料或收款
  - 要串接 AI 模型，又不想把 API key 暴露給使用者
  - 想分辨問題出在畫面，還是出在資料與邏輯
related:
  - { slug: frontend, rel: contrasts }
  - { slug: database, rel: uses }
  - { slug: api, rel: enables }
  - { slug: api-key, rel: uses }
  - { slug: environment-variable, rel: uses }
  - { slug: deploy, rel: related }
diagram_caption: 前端送出請求，後端檢查身分、讀寫資料庫、帶著環境變數裡的 API key 呼叫外部服務，再把結果回傳給前端。
sources:
  - { title: "AWS — Front End vs Back End", url: "https://aws.amazon.com/compare/the-difference-between-frontend-and-backend/" }
  - { title: "Google Cloud — Best practices for managing API keys", url: "https://docs.cloud.google.com/docs/authentication/api-keys-best-practices" }
needs_verification: []
last_verified: 2026-10-30
---
Backend 是應用程式在伺服器上運作、使用者看不到的部分：接收前端送來的請求、檢查身分、讀寫資料庫、呼叫第三方 API，再把結果回傳。它常用 Python、Java、Ruby 等伺服器端語言撰寫，透過 API 和前端溝通。如果前端是餐廳的用餐區，後端就是廚房：客人只看得到端出來的菜，食材、食譜和收銀都在後面處理。所有需要保密或不能被竄改的事，例如付款金額、使用者權限、API key，都該放在後端，由伺服器代為處理。用 AI 寫 app 時，「加上登入」「把資料存起來」「串接 AI 模型」這些需求出現，就代表專案需要後端。你也可以改用現成的後端服務，不必自己架伺服器。

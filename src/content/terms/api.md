---
term: API
zh: 應用程式介面
aliases: [Application Programming Interface, Web API]
category: dev
summary: 讓程式之間互相溝通的約定：送出什麼請求，就拿回什麼回應。
when_to_use:
  - 想在自己的 app 裡加上 AI 功能，需要呼叫模型服務
  - 要串接天氣、地圖、金流等第三方服務
  - 前端要向後端拿資料或送出表單
related:
  - { slug: api-key, rel: uses }
  - { slug: sdk, rel: related }
  - { slug: rate-limit, rel: related }
  - { slug: backend, rel: related }
  - { slug: webhook, rel: related }
  - { slug: mcp, rel: related }
diagram_caption: 你的 app 帶著 API key 送出請求，服務端處理後回傳資料；SDK 幫你包裝這個過程，請求太頻繁則會碰到 rate limit。
disambiguation: 在 AI 圈，「用 API」常特指用程式直接呼叫模型服務，例如 Claude API，而不是在網頁或 app 的聊天介面裡對話。
sources:
  - { title: "MDN — API (Glossary)", url: "https://developer.mozilla.org/en-US/docs/Glossary/API" }
  - { title: "AWS — Front End vs Back End", url: "https://aws.amazon.com/compare/the-difference-between-frontend-and-backend/" }
needs_verification: []
last_verified: 2026-10-30
---
API（Application Programming Interface）是軟體提供給其他程式使用的一組功能與規則，可以想成一份合約：照規定的格式送出請求，就會拿到約定好的回應。人用的是按鈕和畫面，程式用的則是 API。網路上最常見的是透過 HTTP 呼叫的 web API：你的程式送一個請求到某個網址，附上參數和身分驗證，服務端處理完再回傳資料。天氣資料、地圖、金流，還有 Claude、GPT 這些語言模型，都是用這種方式開放給開發者使用。vibe coding 做出來的 app 想加上 AI 功能，背後幾乎都是在呼叫模型的 API；這時你會接著碰到 API key、用量計費和 rate limit 這幾個詞。理解 API，就能看懂 AI 寫的程式其實是在跟誰說話。

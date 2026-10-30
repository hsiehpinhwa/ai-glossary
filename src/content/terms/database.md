---
term: Database
zh: 資料庫
aliases: [DB, 資料庫]
category: dev
summary: 有組織地存放資料，方便查詢、整理和擴充的系統。
when_to_use:
  - app 的資料一重新整理就不見，需要長期保存
  - 要存使用者帳號、訂單、留言等多人共用的資料
  - AI 建議你「接一個資料庫」，想知道那是什麼
related:
  - { slug: backend, rel: part-of }
  - { slug: vector-database, rel: related }
  - { slug: api, rel: related }
  - { slug: environment-variable, rel: related }
diagram_caption: 前端不直接碰資料庫，而是透過後端的 API 讀寫；後端用環境變數裡的連線資訊連到關聯式或 NoSQL 資料庫。
sources:
  - { title: "MDN — Database (Glossary)", url: "https://developer.mozilla.org/en-US/docs/Glossary/Database" }
  - { title: "AWS — Front End vs Back End", url: "https://aws.amazon.com/compare/the-difference-between-frontend-and-backend/" }
needs_verification: []
last_verified: 2026-10-30
---
Database 是有組織地存放資料的系統，讓資料容易查詢、整理和擴充。網站與 app 最常用的是關聯式資料庫，用 SQL 這種查詢語言存取，例如 MySQL、SQL Server；另一類統稱 NoSQL，不採用關聯式的組織方式，例如 MongoDB、Redis。使用者帳號、訂單、留言這些需要長期保存、多人共用的資料，都放在資料庫裡，通常由後端負責讀寫。vibe coding 時，只有前端的 app 常常資料一重新整理就不見，原因就是沒有接資料庫。接上之後要注意兩件事：連線網址和密碼放在環境變數，不要寫進程式；給 AI agent 操作資料庫的權限要謹慎，先備份，並把測試用和正式用的資料庫分開。

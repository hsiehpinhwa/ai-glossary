---
term: Frontend
zh: 前端
aliases: [Front-end, Client-side, 客戶端]
category: dev
summary: 使用者直接看到、操作的那一層：畫面、按鈕與互動效果。
when_to_use:
  - 請 AI 做一個網頁或 app 的畫面
  - 想分辨某個問題該在畫面端修，還是要動到後端
  - 判斷某段資料或金鑰能不能放在使用者的瀏覽器裡
related:
  - { slug: backend, rel: contrasts }
  - { slug: api, rel: uses }
  - { slug: localhost, rel: related }
  - { slug: deploy, rel: related }
  - { slug: vibe-coding, rel: related }
diagram_caption: 使用者在瀏覽器裡操作前端畫面，前端透過 API 向後端要資料再顯示；開發時先在 localhost 預覽，完成後部署上線。
sources:
  - { title: "AWS — Front End vs Back End", url: "https://aws.amazon.com/compare/the-difference-between-frontend-and-backend/" }
  - { title: "Google Cloud — Best practices for managing API keys", url: "https://docs.cloud.google.com/docs/authentication/api-keys-best-practices" }
needs_verification: []
last_verified: 2026-10-30
---
Frontend 是使用者看得到、摸得到的部分：網頁的版面、按鈕、文字、圖片，以及點下去之後畫面怎麼變化。網頁前端主要由三種技術組成：HTML 決定結構，CSS 決定樣式，JavaScript 負責互動，最後都在使用者的瀏覽器裡執行。前端需要資料或要處理重要邏輯時，會送 HTTP 請求給 backend，拿到回應再顯示出來。簡單的檢查，例如 email 格式對不對，可以先在前端做；但任何秘密都不該放在前端，因為使用者打開瀏覽器的開發工具就看得到。vibe coding 最容易上手的就是前端，AI 幾分鐘就能做出好看的頁面；真正卡關往往發生在要接資料庫、做登入或收款的時候，那些都是後端的工作。

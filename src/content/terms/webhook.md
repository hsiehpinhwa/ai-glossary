---
term: Webhook
zh: 事件通知網址
aliases: [Web Hook, 回呼網址]
category: dev
summary: 某件事發生時，服務主動發送 HTTP 請求通知你指定的網址。
when_to_use:
  - 串接金流，要在付款成功時自動開通會員
  - 想在 GitHub 有人 push 時通知其他系統
  - 本機測試時收不到第三方服務的通知
related:
  - { slug: api, rel: related }
  - { slug: backend, rel: related }
  - { slug: deploy, rel: related }
  - { slug: rate-limit, rel: related }
  - { slug: ci-cd, rel: related }
diagram_caption: 你先在服務登記網址與事件，事件發生時服務主動送出 HTTP 請求到你的後端；相對地，輪詢 API 要一直去問，容易撞到 rate limit。
sources:
  - { title: "GitHub Docs — About webhooks", url: "https://docs.github.com/en/webhooks/about-webhooks" }
  - { title: "GitHub Docs — Testing webhooks", url: "https://docs.github.com/en/webhooks/testing-webhooks" }
needs_verification: []
last_verified: 2026-10-30
---
Webhook 是「有事發生就通知我」的機制。你先在某個服務登記一個網址，並勾選關心的事件；之後事件一發生，服務就主動送一個 HTTP 請求到那個網址，附上事件的資料。相反的做法叫輪詢：每隔一段時間呼叫 API 問「有新東西嗎」，既浪費資源，也容易用光 rate limit。常見的例子有：金流服務在付款成功時通知你的後端開通會員、GitHub 在有人 push 時通知其他系統。接收的一方必須是隨時在線、外部連得到的後端網址，所以只跑在 localhost 上的程式收不到 webhook，要部署之後，或透過轉發工具才行。vibe coding 串接金流或自動化流程時，很容易卡在這一步。

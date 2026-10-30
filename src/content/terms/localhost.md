---
term: Localhost
zh: 本機
aliases: [127.0.0.1, 本機伺服器]
category: dev
summary: 指向你自己這部電腦的網址名稱，用來在上線前預覽與測試。
when_to_use:
  - AI agent 說「已經在 localhost 跑起來了，打開看看」
  - 想在上線前先在自己電腦上測試網站
  - 把 localhost 網址傳給朋友，對方卻打不開
related:
  - { slug: deploy, rel: contrasts }
  - { slug: frontend, rel: related }
  - { slug: backend, rel: related }
  - { slug: cli, rel: related }
  - { slug: environment-variable, rel: related }
diagram_caption: 在終端機啟動本機伺服器後，只有你的瀏覽器能透過 localhost 打開；要讓別人看到，得把專案部署到雲端取得公開網址。
sources:
  - { title: "RFC 6761 — Special-Use Domain Names", url: "https://www.rfc-editor.org/info/rfc6761/" }
  - { title: "IETF Draft — Let localhost be localhost", url: "https://datatracker.ietf.org/doc/html/draft-west-let-localhost-be-localhost-04" }
  - { title: "Vercel Docs — Deploying to Vercel", url: "https://vercel.com/docs/deployments" }
needs_verification: []
last_verified: 2026-10-30
---
Localhost 是電腦稱呼「我自己」的名字。網路標準規定，查詢 localhost 會指向本機的回送位址，IPv4 是 127.0.0.1，連線不會離開這部電腦。開發時，你在終端機啟動一個本機伺服器，它會給你一個像 http://localhost:3000 的網址，冒號後面的數字叫埠號，用來區分同時在跑的不同程式。這個網址只有你自己的電腦打得開，傳給朋友是看不到的。AI coding agent 做好網頁後，常會告訴你「已經在 localhost 跑起來了，打開看看」，意思是成品還在你的電腦裡，要部署到雲端才會有公開網址。localhost 是安全的試驗場：改壞了也只會影響自己，確認一切正常之後再上線，比直接改正式網站安心得多。

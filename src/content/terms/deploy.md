---
term: Deploy
zh: 部署
aliases: [Deployment, 上線, 部署]
category: dev
summary: 把程式放到伺服器上執行，讓其他人可以透過網址使用。
when_to_use:
  - 本機做好的網站想分享給朋友或客戶
  - 設定 GitHub 連到部署平台，push 後自動更新
  - 新版上線出問題，需要退回上一版
related:
  - { slug: localhost, rel: contrasts }
  - { slug: ci-cd, rel: part-of }
  - { slug: push, rel: related }
  - { slug: environment-variable, rel: uses }
  - { slug: github, rel: related }
diagram_caption: 從 localhost 開發完成後 push 到 GitHub，部署平台自動建置；非正式分支產生預覽網址，正式分支更新正式網站，出問題可以回滾。
sources:
  - { title: "Vercel Docs — Deploying to Vercel", url: "https://vercel.com/docs/deployments" }
  - { title: "Vercel Docs — Environment variables", url: "https://vercel.com/docs/environment-variables" }
needs_verification: []
last_verified: 2026-10-30
---
Deploy 是把你的程式從自己的電腦搬到伺服器上，讓任何人都能透過網址使用。以 Vercel 為例，每次成功建置都會產生一個 deployment 和專屬網址；最常見的做法是把 GitHub 上的 repository 連到平台，之後每次 push 或開 pull request 都會自動部署，也可以在終端機下一行指令直接部署。平台通常會區分環境：preview 讓你先測試、給別人看，不影響正式網站；production 才是使用者真正打開的版本，推到正式分支就會更新它。新版有問題時，可以回滾到上一個正常的部署。vibe coding 從「我的電腦上能跑」走到「朋友點得開」，中間這一步就是 deploy；別忘了把本機用的環境變數也在平台上設定好。

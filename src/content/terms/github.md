---
term: GitHub
zh: 程式碼託管平台
aliases: [GH]
category: git
summary: 在雲端存放 Git repository，並提供審查、追蹤與自動化等協作工具的平台。
when_to_use:
  - 想替 AI 幫你寫的專案留一份雲端備份
  - 要把專案連到部署平台，push 後自動更新網站
  - 尋找開源專案、AI 工具，或回報問題給作者
related:
  - { slug: git, rel: contrasts }
  - { slug: repository, rel: uses }
  - { slug: pull-request, rel: enables }
  - { slug: issue, rel: enables }
  - { slug: fork, rel: enables }
  - { slug: ci-cd, rel: enables }
diagram_caption: 本機用 Git 管理的專案推上 GitHub 後，就能用 pull request、issue、fork 協作，並透過 CI/CD 自動測試與部署。
disambiguation: GitHub 不等於 Git。Git 是版本控制工具，不需要 GitHub 也能用；GitLab、Bitbucket 是提供類似服務的其他平台。
sources:
  - { title: "GitHub Docs — About GitHub and Git", url: "https://docs.github.com/en/get-started/quickstart/about-github-and-git" }
  - { title: "GitHub Docs — Continuous integration", url: "https://docs.github.com/en/actions/get-started/continuous-integration" }
  - { title: "Vercel Docs — Deploying to Vercel", url: "https://vercel.com/docs/deployments" }
needs_verification: []
last_verified: 2026-10-30
---
GitHub 是放 Git 專案的雲端平台。Git 本身是在你電腦上記錄版本的工具；GitHub 則把這些 repository 存到雲端，再加上一整套協作功能：用 pull request 提出並審查修改、用 issue 追蹤 bug 與待辦、用 fork 參與別人的專案，還有 GitHub Actions 能在每次提交後自動跑建置和測試。許多開源專案和 AI 工具都放在這裡，所以它也是找程式、找工具的地方。對 vibe coding 的人，GitHub 常是第一個註冊的開發者帳號：把 AI 幫你寫好的專案推上去，就有了雲端備份；再連結 Vercel 這類部署平台，之後每次 push 都會自動更新網站。GitLab、Bitbucket 是功能相近的其他平台，概念大致相通。

---
term: Repository
zh: 儲存庫
aliases: [Repo, 版本庫]
category: git
summary: 存放一個專案所有檔案與完整修改歷史的地方，常簡稱 repo。
when_to_use:
  - 教學或 AI 要你「建立一個新的 repo」來放專案
  - 想把別人的開源專案下載回來，或分享自己的專案
  - 部署平台要求你連結一個 GitHub repo 才能自動上線
related:
  - { slug: git, rel: part-of }
  - { slug: commit, rel: related }
  - { slug: github, rel: related }
  - { slug: clone, rel: enables }
  - { slug: fork, rel: enables }
  - { slug: push, rel: related }
diagram_caption: 本機 repo 累積 commit，push 後同步到 GitHub 上的遠端 repo；別人可以 clone 下載，或 fork 成自己名下的副本。
sources:
  - { title: "GitHub Docs — About repositories", url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories" }
  - { title: "Pro Git — About Version Control", url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" }
  - { title: "Vercel Docs — Deploying to Vercel", url: "https://vercel.com/docs/deployments" }
needs_verification: []
last_verified: 2026-10-30
---
Repository（常簡稱 repo）是一個專案的完整家當：所有程式碼、設定檔，以及每個檔案的修改歷史。它可以只存在你的電腦上，也可以放在 GitHub 這類平台，設成公開讓網路上所有人都看得到，或設成私人，只開放給你指定的人。你在本機做 commit，歷史就累積在本機的 repo；push 之後，雲端那一份才會同步更新。別人想參與，可以 clone 一份到自己的電腦，或在 GitHub 上 fork 成自己名下的副本。用 AI 工具做專案時，repo 是最常見的工作單位：coding agent 通常在一個 repo 裡讀檔、改檔，部署平台也是連結一個 repo 來自動上線。教學說「建立一個新的 repo」，就是替這個專案開一個有版本紀錄的家。

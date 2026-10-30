---
term: Clone
zh: 複製
aliases: [git clone]
category: git
summary: 把遠端 repository 連同完整歷史下載一份到自己的電腦。
when_to_use:
  - GitHub 上開源專案的 README 第一步寫著 git clone
  - 想讓本機的 coding agent 讀取、修改某個現有專案
  - 換了新電腦，要把雲端的專案拿回來繼續做
related:
  - { slug: git, rel: part-of }
  - { slug: repository, rel: uses }
  - { slug: fork, rel: contrasts }
  - { slug: push, rel: related }
  - { slug: github, rel: related }
diagram_caption: 從 GitHub 上的 repository clone 到本機，取得完整歷史後就能修改、commit；有權限就直接 push 回去，沒有權限則先 fork 再 clone 自己那份。
sources:
  - { title: "Git — git-clone Documentation", url: "https://git-scm.com/docs/git-clone" }
  - { title: "Pro Git — About Version Control", url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" }
  - { title: "GitHub Docs — About forks", url: "https://docs.github.com/en/pull-requests/get-started/about-forks" }
needs_verification: []
last_verified: 2026-10-30
---
Clone 是把一個 repository 完整複製到你的電腦：不只是最新的檔案，連所有 commit 歷史和每條分支的資訊都一起下載，並記住它是從哪個遠端來的。指令是 git clone 加上網址，Git 會建立一個新資料夾，並切換到原專案目前使用的分支。clone 下來之後，你可以在本機自由修改、commit；如果有寫入權限，再 push 回去即可。常見情境是在 GitHub 上看到有趣的開源專案或 AI 工具，README 的第一步就寫著 git clone。要分清楚的是 clone 和 fork：clone 是把專案下載到本機，fork 是在 GitHub 上替你建一份屬於你的雲端副本。沒有權限修改原專案時，通常先 fork，再 clone 自己那一份交給 coding agent 去改。

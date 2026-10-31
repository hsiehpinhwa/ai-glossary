---
term: Push
zh: 推送／拉取
aliases: [Pull, git push, git pull]
category: git
summary: push 把本機 commit 上傳到遠端，pull 把遠端的新修改拉回本機。
when_to_use:
  - commit 完了，想把修改上傳到 GitHub 備份或分享
  - 隊友或另一臺電腦更新了專案，要先 pull 下來
  - 部署平台設定成 push 到 main 就自動上線
related:
  - { slug: commit, rel: uses }
  - { slug: repository, rel: uses }
  - { slug: merge, rel: uses }
  - { slug: merge-conflict, rel: related }
  - { slug: github, rel: related }
  - { slug: deploy, rel: enables }
diagram_caption: 本機 commit 後 push 到 GitHub 上的遠端 repository，可能觸發自動部署；別人的新修改則用 pull 拉回本機，遇到同一處被改就會出現 merge conflict。
sources:
  - { title: "Git — git-push Documentation", url: "https://git-scm.com/docs/git-push" }
  - { title: "Git — git-pull Documentation", url: "https://git-scm.com/docs/git-pull" }
  - { title: "Vercel Docs — Deploying to Vercel", url: "https://vercel.com/docs/deployments" }
needs_verification: []
last_verified: 2026-10-30
---
Push 和 pull 是本機與遠端 repository 同步的兩個方向。git push 把你在本機做的 commit 上傳到遠端，例如 GitHub，只補上對方還沒有的資料；git pull 則反過來，先下載遠端的新修改，再整合進你目前的分支。commit 只存在你的電腦，沒有 push 之前，別人看不到，雲端也沒有備份。如果遠端已經有你還沒拉過的新 commit，Git 預設會拒絕這次 push，避免蓋掉別人的歷史；這時要先 pull 下來合併，過程中可能遇到 merge conflict。許多部署平台把 push 當成上線開關：推到正式分支就自動部署，所以在 AI coding 流程裡，「push 到 main」往往等於直接改了正式網站，按下之前要先確認內容沒問題。

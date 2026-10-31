---
term: Merge
zh: 合併
aliases: [git merge, 合併]
category: git
summary: 把另一條分支的修改整合進目前所在的分支。
when_to_use:
  - 在 GitHub 上按下 pull request 的 Merge 按鈕，把修改收進主線
  - AI 在分支上做好的功能測試通過，要併回 main
  - git pull 或合併時跳出衝突，想知道發生了什麼事
related:
  - { slug: branch, rel: uses }
  - { slug: commit, rel: uses }
  - { slug: pull-request, rel: part-of }
  - { slug: merge-conflict, rel: related }
  - { slug: push, rel: related }
  - { slug: git, rel: part-of }
diagram_caption: 兩條分支從同一點分岔後各自 commit，merge 時 Git 自動整合；兩邊改到同一處就變成 merge conflict，由人決定後再完成合併。
sources:
  - { title: "Git — git-merge Documentation", url: "https://git-scm.com/docs/git-merge" }
  - { title: "Git — git-pull Documentation", url: "https://git-scm.com/docs/git-pull" }
needs_verification: []
last_verified: 2026-10-30
---
Merge 是把兩條分開發展的歷史接回一起：Git 找出兩邊從哪裡分岔，把對方之後的修改套進你目前所在的分支。如果你的分支在分岔後完全沒有新 commit，Git 只要把標籤往前移，這叫 fast-forward；兩邊都有新 commit 時，Git 會建立一個同時連到兩邊的 merge commit。多數時候 Git 能自動合好，但兩邊改到同一處，合併就會停下來變成 merge conflict，要人決定留哪個版本。在 GitHub 上按下 pull request 的 Merge 按鈕，做的就是這件事；git pull 也是先下載遠端修改，再整合進目前分支。對用 AI 寫程式的人來說，merge 是驗收的最後一步：按下去之前，先確認測試通過、預覽結果符合你的預期。

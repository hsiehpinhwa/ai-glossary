---
term: Branch
zh: 分支
aliases: [git branch, 分支]
category: git
summary: 從主線岔出的一條獨立開發路線，在上面改壞了也不影響主線。
when_to_use:
  - 讓 AI coding agent 大膽嘗試新功能，又不想動到能用的版本
  - 同時開好幾個 agent，各自在不同分支上工作避免互相干擾
  - 準備開 pull request，請人審查後再合併
related:
  - { slug: git, rel: part-of }
  - { slug: commit, rel: uses }
  - { slug: merge, rel: enables }
  - { slug: pull-request, rel: enables }
  - { slug: worktree, rel: related }
  - { slug: merge-conflict, rel: related }
diagram_caption: 從 main 開出分支，在分支上連續 commit；改好就透過 pull request 合併回 main，改壞了整條丟掉，main 不受影響。
sources:
  - { title: "Pro Git — Branches in a Nutshell", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell" }
  - { title: "GitHub Docs — Branches", url: "https://docs.github.com/en/pull-requests/reference/branches" }
needs_verification: []
last_verified: 2026-10-30
---
Branch 是專案歷史裡的一條平行路線。技術上它只是一個指向某個 commit 的可移動標籤，所以開分支幾乎不花成本；每在分支上 commit 一次，標籤就往前移一格。GitHub 上新 repo 的預設分支叫 main，Git 本身的預設名稱則是 master，它們通常代表穩定、可上線的版本。想加新功能或修 bug 時，從 main 開一條分支來改，改好、測過，再透過 pull request 或 merge 併回去；改壞了就整條丟掉，main 完全不受影響。這對用 AI coding agent 的人特別實用：讓 agent 在自己的分支上大膽嘗試，你檢查過再決定要不要收。同時開好幾個 agent 時，讓它們各用不同分支，必要時搭配 worktree，彼此的修改才不會打架。

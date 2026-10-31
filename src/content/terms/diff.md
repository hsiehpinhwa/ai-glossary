---
term: Diff
zh: 差異比對
aliases: [git diff, 差異]
category: git
summary: 列出兩個版本之間哪些行被新增、刪除或修改。
when_to_use:
  - AI coding agent 說它只改了一點點，你想親眼確認
  - 審查 pull request，判斷修改範圍是否合理
  - commit 之前，檢查這次到底改了哪些檔案
related:
  - { slug: git, rel: part-of }
  - { slug: commit, rel: related }
  - { slug: code-review, rel: enables }
  - { slug: pull-request, rel: part-of }
  - { slug: merge-conflict, rel: related }
  - { slug: ide, rel: related }
diagram_caption: 舊版本與新版本經過比對，產生標出新增與刪除的 diff；它出現在 commit 前、pull request 頁面和編輯器裡，是 code review 的主要材料。
sources:
  - { title: "Git — git-diff Documentation", url: "https://git-scm.com/docs/git-diff" }
  - { title: "GitHub Docs — About pull request reviews", url: "https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews" }
needs_verification: []
last_verified: 2026-10-30
---
Diff 是兩個版本之間的差異清單。最常見的格式以行為單位：前面標加號的是新增的行，標減號的是刪除的行，修改則顯示成刪掉一行、再加上一行。git diff 可以比對各種狀態，例如還沒 commit 的修改和上一個 commit，或兩條分支之間的差別。GitHub 的 pull request 頁面和 VS Code 這類編輯器，也都用同樣的方式把差異畫出來。對用 AI 寫程式的人，diff 是最實用的檢查工具：agent 說它只改了一個小地方，打開 diff 就能確認它有沒有順手刪掉別的功能、動了不該動的設定檔。你不必讀懂每一行，但要看得出改動範圍是否和你的要求相符；範圍越小，越容易審。

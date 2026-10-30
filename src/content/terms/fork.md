---
term: Fork
zh: 分叉
aliases: [分叉, Fork a repo]
category: git
summary: 在 GitHub 上把別人的 repository 複製一份到自己帳號底下。
when_to_use:
  - 想修改一個沒有寫入權限的開源專案，再提 pull request 回饋
  - 看到喜歡的模板或 AI 工具，想改成自己的版本
  - 想保留原專案的更新來源，同時自由實驗
related:
  - { slug: repository, rel: uses }
  - { slug: clone, rel: contrasts }
  - { slug: pull-request, rel: enables }
  - { slug: github, rel: part-of }
  - { slug: branch, rel: related }
diagram_caption: 原始專案（upstream）被 fork 成你名下的副本，clone 到本機修改並 push 回 fork，最後開 pull request 請原作者收回去。
disambiguation: 在開源社群，fork 也指專案分家：一群人拿原始碼另起爐灶，發展成獨立的新專案，和 GitHub 上的 Fork 按鈕意思相近但規模不同。
sources:
  - { title: "GitHub Docs — About forks", url: "https://docs.github.com/en/pull-requests/get-started/about-forks" }
needs_verification: []
last_verified: 2026-10-30
---
Fork 是在 GitHub 這類平台上，把別人的 repository 複製一份到你自己的帳號底下。這份副本歸你所有，設定和權限都獨立，但仍連結著它來自的原始專案，稱為 upstream。你可以在自己的 fork 裡隨意修改，改好之後發一個 pull request，請原作者把你的修改收回去。這是參與開源專案的標準流程，因為你通常沒有直接修改原專案的權限。fork 和 branch 的差別在範圍：branch 在同一個 repo 裡，適合有寫入權限的團隊；fork 是另一個獨立的 repo，自由度更高。對 vibe coding 的人來說，看到喜歡的開源模板或 AI 工具，想改成自己的版本，先按 fork、再 clone 到本機交給 agent 修改，是最常見的起手式。

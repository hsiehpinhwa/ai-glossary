---
term: Worktree
zh: 工作樹
aliases: [git worktree]
category: coding
summary: 讓同一個 repo 同時開出多個資料夾、各自在不同 branch 上工作的 Git 功能。
when_to_use:
  - 想同時讓兩三個 coding agent 各做一件事，又不想它們互改檔案
  - 手上的功能做到一半，臨時要切去修緊急 bug
  - 比較同一個任務的不同做法，各放一個資料夾並排測試
related:
  - { slug: git, rel: part-of }
  - { slug: branch, rel: uses }
  - { slug: repository, rel: uses }
  - { slug: merge, rel: related }
  - { slug: multi-agent-orchestration, rel: enables }
  - { slug: coding-agent, rel: related }
  - { slug: pull-request, rel: related }
diagram_caption: 同一個 repository 開出兩個 worktree，各自停在不同 branch，兩個 agent 平行工作互不影響，完成後再 merge 回主線。
sources:
  - { title: "Git — git-worktree", url: "https://git-scm.com/docs/git-worktree" }
  - { title: "Claude Code Docs — Common workflows", url: "https://code.claude.com/docs/en/common-workflows" }
needs_verification: []
last_verified: 2026-10-30
---
Worktree 是 Git 內建的功能：同一個 repository 可以同時開出好幾個工作資料夾，每個資料夾各自 checkout 一個 branch，但共用同一份 commit 歷史。平常一個資料夾一次只能停在一個 branch，要切換就得先收拾手上的修改；用 git worktree add 多開一個資料夾，就能兩邊同時進行。Git 預設也不讓同一個 branch 同時出現在兩個 worktree，避免互相覆蓋。這個老功能在 AI coding 時代重新受到重視，因為它是平行跑多個 coding agent 最簡單的方法：每個 agent 待在自己的 worktree 裡改檔案、跑測試，不會踩到彼此，做完再各自開 PR 或 merge 回主線。Claude Code 就提供 worktree 參數，一行指令開出隔離的平行 session。

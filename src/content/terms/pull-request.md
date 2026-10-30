---
term: Pull Request
zh: 合併請求
aliases: [PR, Merge Request, MR]
category: git
summary: 請求把一個分支的修改合併進主線，並在合併前讓人或 AI 審查。
when_to_use:
  - AI coding agent 改完程式，交付成果給你審查的標準形式
  - 想在不影響主線的情況下討論、測試一組修改
  - 需要 CI 自動跑測試、產生 preview 網址再決定要不要上線
related:
  - { slug: branch, rel: uses }
  - { slug: merge, rel: enables }
  - { slug: code-review, rel: enables }
  - { slug: ci-cd, rel: related }
  - { slug: github, rel: part-of }
  - { slug: diff, rel: uses }
diagram_caption: 在分支上提交修改後開 PR，經過 CI 與審查，通過才合併進 main；沒通過就在同一個分支繼續修。
disambiguation: 在 AI 與開發者社群，PR 幾乎都指 Pull Request，不是 Public Relations。GitLab 把同一件事叫 Merge Request（MR）。
sources:
  - { title: "GitHub Docs — About pull requests", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" }
needs_verification: []
last_verified: 2026-10-30
---
Pull Request（PR）是 GitHub 上的協作機制：你在一個 branch 上完成修改後，發出「請把這些改動合併進主線」的請求。PR 頁面會列出所有 diff，團隊可以逐行留言、要求修改，CI 也會自動跑測試；全部通過、有人核准後才 merge。PR 的價值在於把「改」和「上線」分開，主線因此保持穩定。在 AI coding 時代，PR 變得更重要：Claude Code、Codex 這類 coding agent 通常不直接改主線，而是開一個 PR 交給你看。你不需要讀懂每一行程式，但要會看 PR 的說明、測試結果和 preview 部署，判斷這次修改是否符合你的意圖，再決定要不要按下 merge。

---
term: Code Review
zh: 程式碼審查
aliases: [Review, PR Review]
category: git
summary: 修改合併之前，由人或 AI 逐行檢查程式碼並提出意見。
when_to_use:
  - AI coding agent 開了 pull request，你要決定能不能合併
  - 團隊規定主線修改必須有人核准才能合併
  - 想請另一個 AI 先幫忙找出明顯問題，再自己做最後判斷
related:
  - { slug: pull-request, rel: part-of }
  - { slug: diff, rel: uses }
  - { slug: merge, rel: prerequisite }
  - { slug: ci-cd, rel: related }
  - { slug: coding-agent, rel: related }
diagram_caption: 作者開 pull request 後，審查者看 diff 並給出三種結論之一；核准且 CI 通過才 merge，要求修改就回到作者手上。
sources:
  - { title: "GitHub Docs — About pull request reviews", url: "https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews" }
  - { title: "GitHub Docs — Branches (protected branches)", url: "https://docs.github.com/en/pull-requests/reference/branches" }
needs_verification: []
last_verified: 2026-10-30
---
Code review 是合併前的把關：作者把修改送出，通常是一個 pull request，審查者逐行看 diff、留下意見。GitHub 的審查有三種結論：單純留言、核准（可以合併）、要求修改（作者應先處理再合併）；審查者也能直接在某一行建議改法。團隊可以把重要分支設成受保護，沒有人核准就不能合併。它抓的不只是 bug，還有難懂的寫法、安全漏洞，以及「這真的是我們要的嗎」。AI 寫程式的速度讓 review 更吃重：agent 一次能產出幾百行修改，總要有人看過才能上線。你也可以先請另一個 AI 審一輪，抓出明顯問題，但它只是第一道篩子；最後按下核准、為結果負責的，仍然是人。

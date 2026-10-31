---
term: Issue
zh: 議題
aliases: [GitHub Issues, 議題]
category: git
summary: 在 repository 裡記錄 bug、功能需求或待辦事項的討論串。
when_to_use:
  - 發現 bug 或想到新功能，先記下來免得忘記
  - 要把一件具體工作交給 AI coding agent，需要清楚的任務說明
  - 回報別人開源專案的問題，或查看是否已有人遇過
related:
  - { slug: github, rel: part-of }
  - { slug: repository, rel: part-of }
  - { slug: pull-request, rel: related }
  - { slug: coding-agent, rel: related }
  - { slug: spec-driven-development, rel: related }
diagram_caption: 有人開 issue 描述問題，指派給人或 coding agent；對方開分支修好後送出 pull request，PR 合併時用關鍵字自動關閉 issue。
sources:
  - { title: "GitHub Docs — About issues", url: "https://docs.github.com/articles/about-issues" }
needs_verification: []
last_verified: 2026-10-30
---
Issue 是 GitHub 上用來規劃、討論和追蹤工作的單位，可以是一則 bug 回報、一個新功能的想法，或任何需要記下來和團隊討論的事。每個 issue 有標題、說明和留言串，可以加上標籤、指派負責的人、歸入里程碑，比較大的工作還能拆成子 issue。issue 和 pull request 會互相連動：在 PR 說明裡用 fixes 這類關鍵字加上 issue 編號，PR 合併時那個 issue 就會自動關閉。對用 AI 寫程式的人，issue 是交派任務的好格式：把問題、預期行為和重現步驟寫清楚，本身就是一份給 coding agent 的工作說明，你可以直接把 issue 網址丟給它。issue 寫得越具體，AI 交回來的結果就越接近你要的。

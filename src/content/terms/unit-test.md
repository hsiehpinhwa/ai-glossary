---
term: Unit Test
zh: 單元測試
aliases: [Unit Testing]
category: eval
summary: 針對一小段程式寫的自動化測試，快速確認它的行為符合預期。
when_to_use:
  - 讓 coding agent 改程式時，有客觀方式確認它沒有改壞東西
  - 要求 AI 先寫測試再實作（TDD），讓它能自己檢查成果
  - 看 PR 時想知道「測試全部通過」到底代表什麼
related:
  - { slug: tdd, rel: related }
  - { slug: regression, rel: enables }
  - { slug: eval, rel: related }
  - { slug: ci-cd, rel: related }
  - { slug: coding-agent, rel: related }
  - { slug: pull-request, rel: related }
diagram_caption: Unit test 給一個函式固定輸入、檢查輸出；coding agent 改完程式自己跑，失敗就修到通過，CI 也會在每次修改時自動執行，防止 regression。
sources:
  - { title: "Martin Fowler — Unit Test", url: "https://martinfowler.com/bliki/UnitTest.html" }
  - { title: "Claude Code Docs — Common workflows", url: "https://code.claude.com/docs/en/common-workflows" }
  - { title: "Anthropic — Demystifying evals for AI agents", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" }
needs_verification: []
last_verified: 2026-10-30
---
Unit test 是針對程式裡一小塊功能寫的自動化測試，通常一次只檢查一個函式或模組：給定某個輸入，確認輸出符合預期，例如「原價 1000 元打八折，應該得到 800 元」。它由寫程式的人用測試框架撰寫，範圍小、執行快，所以可以每次修改都重跑，馬上知道有沒有東西被改壞。在 AI coding 時代，unit test 更像是給 coding agent 的驗收標準：它改完程式後自己跑測試，看到失敗就繼續修，直到全部通過。要注意它和 AI 的 eval 不同：傳統程式同樣的輸入一定得到同樣結果，unit test 看的是對或錯；AI 的輸出每次可能不一樣，eval 看的通常是通過率。

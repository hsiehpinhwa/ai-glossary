---
term: Benchmark
zh: 基準測試
aliases: [Leaderboard, 基準]
category: eval
summary: 公開、固定的一套測驗，用來比較不同模型或 agent 的能力。
when_to_use:
  - 看到新模型發表，宣稱在某個 benchmark 拿到高分
  - 選模型或 coding agent 時，想先有個共同的比較基準
  - 想知道排行榜分數為什麼和你自己的使用經驗對不上
related:
  - { slug: eval, rel: contrasts }
  - { slug: golden-dataset, rel: contrasts }
  - { slug: unit-test, rel: uses }
  - { slug: llm, rel: related }
  - { slug: coding-agent, rel: related }
  - { slug: llm-as-a-judge, rel: related }
diagram_caption: 不同模型做同一份公開題庫，用固定方式評分後排名；分數接近滿分就失去鑑別力，而且它不等於在你自己的情境做的 eval。
sources:
  - { title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?（arXiv）", url: "https://arxiv.org/pdf/2310.06770" }
  - { title: "Anthropic — Demystifying evals for AI agents", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" }
needs_verification: []
last_verified: 2026-10-30
---
Benchmark 是公開、固定的一套題目與評分方式，讓不同模型或 agent 在同一個標準下比較。例如 SWE-bench 收集了 2,294 個來自真實 GitHub 專案的 issue，要模型寫出修補程式，再跑專案原本的測試，全部通過才算解決。新模型發表時列出的各種分數，多半就是 benchmark 成績。它的好處是可以重複、可以互相比較；限制也很明顯：分數接近滿分後就會飽和，進步再多也看不太出來；而且它考的是通用能力，不是你的工作，排行榜第一名不保證最適合你。所以 benchmark 適合用來初步篩選模型；真正要判斷某個 AI 功能在你的情境好不好用，還是得拿自己的 golden dataset 來做 eval，看的是你在乎的題目。

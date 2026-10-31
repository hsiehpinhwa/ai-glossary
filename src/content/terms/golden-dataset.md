---
term: Golden Dataset
zh: 黃金資料集
aliases: [Golden Set, Goldens, Eval Dataset]
category: eval
summary: 經人工確認標準答案、用來反覆評估 AI 的固定測試案例集。
when_to_use:
  - 準備開始做 eval，第一步要決定拿哪些題目來考
  - 線上出現 AI 答錯的案例，想確保之後不再犯
  - 換模型或改 prompt 前，需要一份固定題庫比較前後差異
related:
  - { slug: eval, rel: part-of }
  - { slug: benchmark, rel: contrasts }
  - { slug: regression, rel: enables }
  - { slug: llm-as-a-judge, rel: related }
  - { slug: observability, rel: related }
diagram_caption: 從線上紀錄與邊界情況挑出案例，由專家確認答案後存成固定版本，每次修改都拿來跑 eval；新發現的失敗案例再補回題庫。
sources:
  - { title: "Langfuse — Golden dataset evaluation", url: "https://langfuse.com/resources/engineering/golden-dataset-evaluation.md" }
  - { title: "Anthropic — Define success criteria and build evaluations", url: "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests" }
needs_verification: []
last_verified: 2026-10-30
---
Golden dataset 是一份精心挑選、標準答案經過人工確認的測試案例集，是 eval 的題庫。每筆資料包含輸入，以及預期的輸出或明確的通過條件，例如「這個問題應該回答退貨期限是 7 天」。它被當作可信的標準：答案由懂業務的人審過，分數變動才能反映品質真的改變，而不是答案標錯。最好的來源是真實使用紀錄，再補上邊界情況，例如過長的輸入、模糊的問題、應該拒絕的要求。用法是固定一個版本，每次改 prompt、換模型都跑同一份，和基準分數比較，及早抓到 regression；之後每發現一個新的失敗案例就加進去。和公開的 benchmark 不同，它考的是你自己的情境。

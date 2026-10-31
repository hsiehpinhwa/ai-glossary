---
term: Regression
zh: 回歸（功能退步）
aliases: [Regression Testing, 回歸測試, 退化]
category: eval
summary: 修改之後，原本正常的功能反而壞掉或變差。
when_to_use:
  - 改了 prompt 修好一個問題，卻不確定其他情境有沒有被弄壞
  - 換新模型或升級套件前後，想確認品質沒有退步
  - 讓 coding agent 大量改程式後，檢查舊功能是否還正常
related:
  - { slug: eval, rel: related }
  - { slug: unit-test, rel: uses }
  - { slug: golden-dataset, rel: uses }
  - { slug: ci-cd, rel: uses }
  - { slug: tdd, rel: related }
diagram_caption: 每次修改後重跑 unit test 和以 golden dataset 為題庫的 eval；舊案例全部通過才繼續合併部署，否則就是出現 regression，要先修。
disambiguation: 統計與機器學習裡的 regression（迴歸分析，如線性迴歸）是用資料預測數值的方法，和這裡說的功能退步無關。
sources:
  - { title: "Anthropic — Demystifying evals for AI agents", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" }
  - { title: "Langfuse — Golden dataset evaluation", url: "https://langfuse.com/resources/engineering/golden-dataset-evaluation.md" }
needs_verification: []
last_verified: 2026-10-30
---
Regression 指軟體在修改之後，原本好好的功能反而壞掉或變差，中文常叫「回歸」或「退化」。傳統程式裡，修一個 bug 可能不小心弄壞另一個地方；AI 產品更常見：改一句 prompt 讓某類問題答得更好，另一類問題卻開始答錯；換新模型整體分數變高，某些重要案例反而退步。防範的方法叫回歸測試：把過去做對的案例保存下來，每次修改後全部重跑一次。程式用 unit test，AI 輸出則用 golden dataset 跑 eval。Anthropic 建議把這類 regression eval 和衡量新能力的 eval 分開看：前者的通過率應該接近 100%，一旦下降就代表有東西退步了。把它接上 CI，每次修改都會自動檢查一遍。

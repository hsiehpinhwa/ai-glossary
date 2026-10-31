---
term: Eval
zh: 評估
aliases: [Evals, Evaluation]
category: eval
summary: 用一組固定的測試案例，有系統地衡量 AI 輸出好不好。
when_to_use:
  - 改了 prompt 或換了模型，想知道結果是變好還是變差
  - 要把 AI 功能上線前，確認它在重要情境下不會出錯
  - 團隊對「AI 表現好不好」意見分歧，需要共同的量尺
related:
  - { slug: golden-dataset, rel: uses }
  - { slug: llm-as-a-judge, rel: uses }
  - { slug: benchmark, rel: contrasts }
  - { slug: regression, rel: enables }
  - { slug: unit-test, rel: related }
  - { slug: prompt-engineering, rel: enables }
diagram_caption: 準備一組有標準答案的案例，讓系統逐題作答，再用程式規則或 LLM 評審打分，比較每次修改前後的分數。
sources:
  - { title: "Anthropic — Define success criteria and build evaluations", url: "https://docs.claude.com/en/docs/test-and-evaluate/develop-tests" }
  - { title: "OpenAI — Evals guide", url: "https://platform.openai.com/docs/guides/evals" }
  - { title: "Anthropic — Demystifying evals for AI agents", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" }
needs_verification: []
last_verified: 2026-10-30
---
Eval 是 AI 產品的考卷：先準備一組代表真實情境的題目和評分標準，讓模型或 agent 逐題作答，再打分統計。評分方式有三種：能用程式判斷的（格式對不對、答案是否相符）、交給另一個模型評審的 LLM-as-a-Judge，以及人工審查。和傳統軟體的 unit test 不同，AI 的輸出每次都可能不一樣，所以 eval 看的通常是通過率，不是單次對錯。它最大的用處是讓「感覺變好了」變成可以比較的數字：每次改 prompt、換模型或調整工具，都重跑同一份 eval，就能及早抓到 regression，也能確認改動真的讓結果變好，而不只是剛好碰上一次好的輸出。

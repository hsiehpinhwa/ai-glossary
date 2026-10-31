---
term: Pre-training
zh: 預訓練
aliases: [Pretraining, 預先訓練]
category: model
summary: 用海量文字讓模型反覆練習預測下一個 token，打下語言與知識的基礎。
when_to_use:
  - 想知道 LLM 的知識從哪裡來、為什麼有「知識截止日」
  - 分辨 base model 和聊天助理的差別
  - 讀到訓練成本、訓練資料的新聞，需要知道指的是哪個階段
related:
  - { slug: llm, rel: enables }
  - { slug: token, rel: uses }
  - { slug: parameter, rel: related }
  - { slug: fine-tuning, rel: related }
  - { slug: rlhf, rel: related }
  - { slug: inference, rel: contrasts }
diagram_caption: 大量文字切成 token 後，模型反覆練習預測下一個 token 並調整 parameter，得到只會接龍的 base model，再經過 fine-tuning 與 RLHF 才變成聊天助理。
sources:
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
  - { title: "Brown et al. — Language Models are Few-Shot Learners (arXiv)", url: "https://arxiv.org/pdf/2005.14165" }
  - { title: "Cloudflare — AI inference vs. training", url: "https://www.cloudflare.com/learning/ai/inference-vs-training/" }
needs_verification: []
last_verified: 2026-10-30
---
Pre-training（預訓練）是打造 LLM 的第一階段：把大量沒有人工標註的文字餵給模型，讓它反覆練習根據前文預測下一個 token。文字本身就是題目和解答。經過這個階段，模型學到文法、常識和大量知識，但還不太會照指令回答，比較像一台「文章接龍機」。之後再經過 fine-tuning 和 RLHF，才變成你熟悉的聊天助理。預訓練需要極大的運算量，但基本上是一次性的投入；你每天使用模型的那一端，則叫做 inference。模型的知識來自訓練資料，訓練資料收集到哪個時間點，模型大致就只知道到那時候，之後發生的事要靠搜尋或 RAG 在使用時補進 context window。

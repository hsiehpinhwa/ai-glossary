---
term: Transformer
zh: Transformer 架構
aliases: [Transformer 模型]
category: model
summary: 現今 LLM 的主流神經網路架構，靠 attention 理解字詞之間的關係。
when_to_use:
  - 在影片或文章裡聽到 attention、架構、GPT 的 T 代表什麼
  - 想了解 LLM 為什麼能一次讀進整段文字並理解前後文
  - 讀到模型架構的比較或新架構的討論，需要知道基準是什麼
related:
  - { slug: llm, rel: enables }
  - { slug: token, rel: uses }
  - { slug: embedding, rel: uses }
  - { slug: parameter, rel: related }
  - { slug: pre-training, rel: related }
diagram_caption: Token 先轉成向量，經過一層層 self-attention 與運算層反覆處理，最後預測下一個 token，組成 LLM 的回答。
sources:
  - { title: "Vaswani et al. — Attention Is All You Need (arXiv)", url: "https://arxiv.org/abs/1706.03762" }
  - { title: "Google — Machine Learning Crash Course: What's a large language model?", url: "https://developers.google.com/machine-learning/crash-course/llm/transformers" }
needs_verification:
  - GPT 名稱中的 T 指 Transformer（Generative Pre-trained Transformer）
last_verified: 2026-10-30
---
Transformer 是 2017 年論文〈Attention Is All You Need〉提出的神經網路架構，今天的 LLM 大多以它為基礎。在它之前，主流語言模型多半依序一個字一個字處理；Transformer 改成完全依靠 attention 機制，能同時看整段文字，也更容易平行訓練。它的核心是 self-attention：處理每個 token 時，模型會計算其他 token 對它的影響有多大，例如判斷句子裡的「它」指的是前面哪個名詞。原始設計分成 encoder 和 decoder 兩部分：encoder 把輸入轉成中間表示，decoder 再把它轉成輸出文字。一般使用者不需要懂它的數學，但在影片裡聽到 attention、架構，或 GPT 的 T 時，知道它指的是模型內部的骨架就夠了。

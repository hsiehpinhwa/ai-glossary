---
term: LLM
zh: 大型語言模型
aliases: [Large Language Model, 大語言模型]
category: model
summary: 用海量文字訓練、能讀懂指令並產生文字的 AI 模型。
when_to_use:
  - 聽到 ChatGPT、Claude、Gemini 時，想知道它們背後共同的技術是什麼
  - 判斷 AI 的回答什麼時候可以直接用、什麼時候要另外查證
  - 讀到模型大小、訓練方式、context window 這類比較時，需要一個共同的起點
related:
  - { slug: transformer, rel: uses }
  - { slug: token, rel: uses }
  - { slug: pre-training, rel: prerequisite }
  - { slug: fine-tuning, rel: related }
  - { slug: parameter, rel: related }
  - { slug: context-window, rel: related }
  - { slug: hallucination, rel: related }
diagram_caption: 模型先用大量文字做 pre-training，再經過 fine-tuning 調成助理；使用時，你的 prompt 被切成 token，LLM 一個接一個預測出回答。
sources:
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
  - { title: "Google — Machine Learning Crash Course: What's a large language model?", url: "https://developers.google.com/machine-learning/crash-course/llm/transformers" }
needs_verification: []
last_verified: 2026-10-30
---
LLM（Large Language Model，大型語言模型）是用海量文字訓練出來的 AI 模型，ChatGPT、Claude、Gemini 背後都是它。它的核心任務很單純：根據前面的文字，預測下一個 token，一個接一個產生回答。模型先經過 pre-training，從大量文字學會語言和知識的規律，再經過 fine-tuning 與 RLHF，調整成會聽指令的助理。「大」指的是 parameter 多，Google 的教材提到大型模型可達數千億甚至上兆個。它的能力和限制來自同一個機制：擅長寫作、摘要、翻譯、寫程式，但在不知道答案時，也會編出看似合理的內容，也就是 hallucination。把 LLM 理解成「文字預測機」而不是資料庫，能幫你判斷什麼時候可以相信它、什麼時候該另外查證。

---
term: Reasoning Model
zh: 推理模型
aliases: [Thinking Model, 思考模型, Extended Thinking]
category: model
summary: 回答前會先產生一段內部思考再作答的 LLM，擅長多步驟問題。
when_to_use:
  - 處理寫程式、數學、規劃這類需要多步驟推導的問題
  - 在產品裡看到「思考程度」或 reasoning effort 選項，不確定要怎麼選
  - 比較為什麼某些模型比較慢、比較貴，但答得比較準
related:
  - { slug: llm, rel: is-a }
  - { slug: chain-of-thought, rel: related }
  - { slug: inference, rel: related }
  - { slug: token, rel: uses }
  - { slug: context-window, rel: related }
diagram_caption: Reasoning model 先在內部反覆拆解、嘗試、檢查，產生的思考 token 佔用 context window，最後才輸出答案；一般 LLM 則要靠 chain-of-thought prompt 引導。
sources:
  - { title: "OpenAI — Reasoning models", url: "https://developers.openai.com/api/docs/guides/reasoning" }
needs_verification: []
last_verified: 2026-10-30
---
Reasoning model 是一類在回答前會先「想一想」的 LLM：它不急著直接輸出答案，而是先產生一段內部推理，拆解問題、嘗試做法、檢查錯誤，再給出最終回覆。這些思考內容同樣是 token，OpenAI 文件稱為 reasoning tokens：它們佔用 context window、按輸出 token 計費，但不一定會完整顯示給你看。很多產品提供 reasoning effort 或「思考程度」之類的選項，讓你決定花多少思考預算：想得越多通常越準，也越慢、越貴。它特別適合寫程式、數學、規劃和多步驟的 agent 工作；簡單的改寫、分類或閒聊，用低思考程度或一般模型通常就夠。它和你在 prompt 裡要求「一步一步想」的 chain-of-thought 不同：reasoning model 本身就會先推理，不需要你特別提示。

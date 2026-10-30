---
term: Grounding
zh: 接地（依據來源回答）
aliases: [Grounded Generation, 有據生成]
category: rag
summary: 讓模型的回答建立在可查證的資料來源上，而不是只靠記憶。
when_to_use:
  - 需要 AI 回答附上出處，讓人能點開核對
  - 問題涉及最新資訊或內部資料，模型的訓練資料裡沒有
  - 想降低 hallucination，又不想重新訓練模型
related:
  - { slug: rag, rel: uses }
  - { slug: retrieval, rel: uses }
  - { slug: hallucination, rel: contrasts }
  - { slug: llm, rel: related }
  - { slug: context-window, rel: related }
diagram_caption: 先 retrieval 找出文件或網頁，透過 RAG 放進 context，LLM 依資料產生附出處的回答；沒有資料時，回答就有 hallucination 的風險。
sources:
  - { title: "Google Cloud — Grounding overview", url: "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview" }
  - { title: "Anthropic — Reduce hallucinations", url: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations" }
needs_verification: []
last_verified: 2026-10-30
---
Grounding 是把模型的回答綁在特定、可查證的資料上：你給它文件、搜尋結果或資料庫內容，要求它只根據這些資料作答，並標出依據的是哪一段。沒有 grounding 時，LLM 只能靠訓練時記住的東西回答，遇到冷門或新近的問題，就容易出現 hallucination。Google Cloud 的文件把 grounding 描述為把模型輸出連到可驗證的資料來源，可接的來源包括 Google 搜尋、地圖和你自己的資料。RAG 是實現 grounding 最常見的方法；聊天產品的「搜尋網路」與引用連結也屬於這類做法。它能降低錯誤，但不保證零錯誤：資料本身有誤、找錯段落，或模型誤讀，答案一樣可能出錯。重要的那一句，最好點開來源核對。

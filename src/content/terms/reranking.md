---
term: Reranking
zh: 重新排序
aliases: [Rerank, Reranker, 重排序]
category: rag
summary: 對初步找到的候選資料重新評分排序，只把最相關的交給模型。
when_to_use:
  - 資料庫裡明明有答案，RAG 卻常拿到不太相關的段落
  - 想在既有的關鍵字或向量搜尋上提升準確度，又不想重建索引
  - 想減少送進模型的段落數量，降低 token 用量
related:
  - { slug: retrieval, rel: part-of }
  - { slug: rag, rel: part-of }
  - { slug: vector-database, rel: related }
  - { slug: embedding, rel: related }
  - { slug: context-window, rel: related }
diagram_caption: Retrieval 先從 vector database 快速撈出大量候選，reranker 再把問題和每段候選一起評分，只留前幾段放進 context 給 RAG 回答。
sources:
  - { title: "Anthropic — Introducing Contextual Retrieval", url: "https://www.anthropic.com/engineering/contextual-retrieval" }
  - { title: "Cohere — Rerank", url: "https://docs.cohere.com/docs/rerank" }
needs_verification: []
last_verified: 2026-10-30
---
Reranking 是 retrieval 之後的第二道篩選。第一階段的搜尋要在大量資料裡快速撈出候選，速度優先、排序較粗；reranking 則用專門的 reranker 模型，針對使用者的問題替每段候選打相關性分數，再依分數重新排序，只保留前幾名送進模型。Anthropic 的 contextual retrieval 實驗先取 150 段候選，reranking 後只留 20 段，檢索失敗率比沒有 reranking 時更低。Cohere 等廠商提供現成的 rerank 服務，可以直接接在既有的關鍵字、向量或混合搜尋後面，不必重建索引，也能減少送進模型的 token。代價是多一次模型呼叫，會增加一些延遲與費用。當資料庫裡明明有答案，模型卻常拿到不太相關的段落時，加上 reranking 是常見的改善方式。

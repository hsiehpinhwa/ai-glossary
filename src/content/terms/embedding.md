---
term: Embedding
zh: 嵌入向量
aliases: [Embeddings, Vector Embedding, 向量嵌入]
category: model
summary: 把文字等內容轉成一串數字，意思相近的內容，數字也會相近。
when_to_use:
  - 想讓系統依「意思」而不是關鍵字找資料
  - 動手做 RAG 或知識庫，教學要你「先做 embedding」
  - 需要把大量文字分群、推薦相似內容或找出異常
related:
  - { slug: vector-database, rel: enables }
  - { slug: retrieval, rel: enables }
  - { slug: rag, rel: part-of }
  - { slug: chunking, rel: related }
  - { slug: transformer, rel: related }
diagram_caption: 文件切成 chunk、使用者問題，都經過同一個 embedding 模型轉成向量；向量存進 vector database，檢索時找出最接近的段落交給 RAG。
sources:
  - { title: "OpenAI — Vector embeddings", url: "https://developers.openai.com/api/docs/guides/embeddings" }
  - { title: "Pinecone — What is a vector database?", url: "https://www.pinecone.io/learn/vector-database/" }
needs_verification: []
last_verified: 2026-10-30
---
Embedding 是把一段文字轉成一長串浮點數（向量）的結果，由專門的 embedding 模型產生。重點不在數字本身，而在距離：兩段文字意思越接近，它們的向量就越靠近。所以「退貨流程」和「怎麼申請退款」字面不同，向量卻很接近，電腦因此能依意思找資料，而不只是比對關鍵字。OpenAI 文件列出的用途包括搜尋、分群、推薦、異常偵測與分類，常用 cosine similarity 衡量兩個向量有多接近。在 RAG 系統裡，embedding 是核心零件：先把文件切成 chunk，各自轉成向量存進 vector database；使用者提問時，也把問題轉成向量，再找出最接近的段落交給 LLM。你在教學影片裡看到「先做 embedding」「選一個 embedding 模型」，指的就是這一步。

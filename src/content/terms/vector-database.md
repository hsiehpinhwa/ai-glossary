---
term: Vector Database
zh: 向量資料庫
aliases: [Vector DB, Vector Store, 向量庫]
category: rag
summary: 專門儲存 embedding 向量，並能快速找出意思最接近內容的資料庫。
when_to_use:
  - 動手做 RAG，教學要你「把資料灌進向量庫」
  - 資料量大到無法整份放進 prompt，需要依意思快速查找
  - 比較要用專門的向量資料庫，還是在既有資料庫加上向量功能
related:
  - { slug: embedding, rel: uses }
  - { slug: database, rel: is-a }
  - { slug: retrieval, rel: enables }
  - { slug: rag, rel: part-of }
  - { slug: chunking, rel: related }
diagram_caption: 文件片段轉成向量連同 metadata 存進 vector database；使用者的問題也轉成向量，透過 ANN 相似度搜尋找出最接近的幾筆，交給 RAG 使用。
sources:
  - { title: "Pinecone — What is a vector database?", url: "https://www.pinecone.io/learn/vector-database/" }
  - { title: "Anthropic — Introducing Contextual Retrieval", url: "https://www.anthropic.com/engineering/contextual-retrieval" }
needs_verification: []
last_verified: 2026-10-30
---
Vector database 是專門存放 embedding 的資料庫。一般資料庫存的是文字、數字，查詢時找「完全符合」的值；vector database 存的是代表意思的向量，查詢時找的是「最相似」的資料。每筆資料除了向量，還會附上原文的參照和 metadata，例如來源檔名，查詢時可以用這些條件篩選。它會用近似最近鄰（ANN）演算法加速，用一點準確度換取速度；相似度則常用 cosine similarity 等方式計算。和單純的向量索引工具相比，它還提供新增、更新、刪除、備份與權限控管等功能。在 RAG 系統裡，它就是模型的外接資料櫃：文件切成 chunk、轉成向量後存進來，使用者提問時再撈出最接近的幾段。

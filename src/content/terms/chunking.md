---
term: Chunking
zh: 切塊
aliases: [Text Splitting, 文件切分, Chunk]
category: rag
summary: 把長文件切成大小適當的片段，方便轉成向量並被檢索。
when_to_use:
  - 動手做 RAG，要決定文件怎麼切、每段多長
  - RAG 答非所問或斷章取義，想找出原因
  - 處理有標題、表格、程式碼等結構的文件
related:
  - { slug: rag, rel: part-of }
  - { slug: embedding, rel: related }
  - { slug: vector-database, rel: related }
  - { slug: retrieval, rel: related }
  - { slug: context-window, rel: related }
diagram_caption: 長文件可以依固定長度、標題段落或語意轉折切成 chunk，每段再轉成 embedding 存進 vector database。
sources:
  - { title: "Pinecone — Chunking Strategies for LLM Applications", url: "https://www.pinecone.io/learn/chunking-strategies/" }
  - { title: "Anthropic — Introducing Contextual Retrieval", url: "https://www.anthropic.com/engineering/contextual-retrieval" }
needs_verification: []
last_verified: 2026-10-30
---
Chunking 是 RAG 的前置步驟：把長文件切成一段段 chunk，每段各自轉成 embedding 存進 vector database。之所以要切，是因為 embedding 模型一次能讀的長度有限，而且整份文件只轉成一個向量，細節會被稀釋，很難精準比對。切多大是一種取捨：太大，搜尋不準，放進 context window 也浪費 token；太小，片段缺少前後文，模型看不懂來龍去脈。Pinecone 的指南列出幾種做法：依固定長度切、依句子或段落切、依標題與章節等文件結構切，以及在語意轉折處切，建議先從固定長度開始。Anthropic 的 contextual retrieval 則在每段前面補上一小段說明，交代它在整份文件裡的脈絡，以減少檢索失敗。RAG 答非所問時，可以先檢查 chunking。

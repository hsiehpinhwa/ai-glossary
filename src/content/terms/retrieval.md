---
term: Retrieval
zh: 檢索
aliases: [Information Retrieval, 資訊檢索, 搜尋]
category: rag
summary: 依使用者的問題，從大量資料中找出最相關內容的步驟。
when_to_use:
  - RAG 的回答抓錯資料，想知道問題出在哪一段
  - 決定要用語意搜尋、關鍵字搜尋，還是兩者並用
  - 讀到 hybrid search、BM25、top-k 這類詞
related:
  - { slug: rag, rel: part-of }
  - { slug: embedding, rel: uses }
  - { slug: vector-database, rel: uses }
  - { slug: reranking, rel: related }
  - { slug: chunking, rel: related }
diagram_caption: 使用者問題同時走語意搜尋與 BM25 關鍵字搜尋，結果合併後經 reranking 排序，只把前幾段放進 RAG 的 prompt。
sources:
  - { title: "Anthropic — Introducing Contextual Retrieval", url: "https://www.anthropic.com/engineering/contextual-retrieval" }
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
needs_verification: []
last_verified: 2026-10-30
---
Retrieval（檢索）是 RAG 裡「找資料」的那一段：拿使用者的問題，從文件庫挑出最相關的幾段，交給模型參考。常見有兩種找法：一是語意搜尋，把問題和文件都轉成 embedding，到 vector database 找意思最接近的；二是關鍵字搜尋，例如 BM25，擅長精準比對產品型號、錯誤代碼這類特定字串。Anthropic 的實驗把兩者結合、合併排序結果，漏掉的相關段落比只用 embedding 更少。找出來的候選通常還會經過 reranking，只留下前幾名。Retrieval 的品質決定 RAG 的上限：模型只能依據拿到的資料回答，找錯了，答案再流暢也是錯的。除了 RAG，agent 透過工具搜尋網頁、查程式碼，也屬於廣義的 retrieval。

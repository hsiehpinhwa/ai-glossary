---
term: RAG
zh: 檢索增強生成
aliases: [Retrieval-Augmented Generation, 檢索增強]
category: rag
summary: 先從資料來源找出相關內容，再交給模型依據這些資料回答的做法。
when_to_use:
  - 想讓 AI 依公司文件、產品手冊或最新資料回答
  - 做客服機器人、內部知識庫或「和你的 PDF 聊天」這類功能
  - 評估要用 RAG 還是 fine-tuning 讓模型用上自己的資料
related:
  - { slug: retrieval, rel: uses }
  - { slug: chunking, rel: uses }
  - { slug: vector-database, rel: uses }
  - { slug: reranking, rel: uses }
  - { slug: grounding, rel: enables }
  - { slug: fine-tuning, rel: contrasts }
  - { slug: context-window, rel: related }
diagram_caption: 文件事先切塊存進 vector database；使用者提問時先 retrieval、再 reranking，把最相關的段落放進 context，模型依資料作答並附出處。
sources:
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
  - { title: "Anthropic — Introducing Contextual Retrieval", url: "https://www.anthropic.com/engineering/contextual-retrieval" }
  - { title: "Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (arXiv)", url: "https://arxiv.org/abs/2005.11401v4" }
needs_verification: []
last_verified: 2026-10-30
---
RAG（Retrieval-Augmented Generation，檢索增強生成）是讓 LLM 根據外部資料回答的做法。流程分兩段：先 retrieval，依使用者的問題從公司文件、知識庫或網路找出最相關的幾段內容；再 generation，把這些段落連同問題一起放進 context window，請模型依據資料作答。這樣模型就能用到訓練資料以外的資訊，例如最新公告、內部手冊，也比較容易附上出處、減少憑空編造。典型的 RAG 系統包含 chunking、embedding、vector database、reranking 幾個環節，任何一環沒做好，模型就會拿到錯的資料。如果資料量小到整份放得進 prompt，Anthropic 建議直接放進去即可，不一定需要 RAG。客服機器人、企業知識庫、「和你的 PDF 聊天」這類產品，背後多半就是 RAG。

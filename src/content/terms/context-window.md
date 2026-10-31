---
term: Context Window
zh: 上下文視窗
aliases: [Context Length, 上下文長度]
category: model
summary: 模型一次能讀進與產生的 token 總量上限，像它的工作記憶。
when_to_use:
  - 長對話越聊越不準，或 agent 做到一半忘記前面的決定
  - 想上傳一大份文件，估算模型能不能一次讀完
  - 比較不同模型的規格時，看到「支援多少 token 上下文」
related:
  - { slug: token, rel: uses }
  - { slug: llm, rel: part-of }
  - { slug: context-compaction, rel: related }
  - { slug: context-engineering, rel: related }
  - { slug: rag, rel: related }
diagram_caption: System prompt、對話歷史、文件與工具結果都要放進同一個 context window，模型的輸出也佔用其中；快滿時用 compaction 壓縮，或改用 RAG 只放相關段落。
sources:
  - { title: "Anthropic — Context windows", url: "https://platform.claude.com/docs/en/build-with-claude/context-windows" }
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
needs_verification: []
last_verified: 2026-10-30
---
Context window 是模型在一次請求裡能「看到」的範圍，用 token 計算。放進去的不只是你這次的問題，還包括 system prompt、對話歷史、上傳的文件與圖片、工具定義和工具回傳結果；模型產生的回答與思考過程也佔用同一個空間。它不是模型訓練時讀過的資料，而是工作記憶。輸入超過上限時，請求會被拒絕；輸出寫到上限時，回答會被截斷。Anthropic 提醒，內容越多，模型的準確度和回想能力可能下降，稱為 context rot，所以塞得多不等於答得好。長對話越聊越不準、coding agent 做到一半忘了前面的決定，常是 context window 快滿的徵兆；harness 因此會做 context compaction 摘要舊內容，或改用 RAG 只放入相關段落。

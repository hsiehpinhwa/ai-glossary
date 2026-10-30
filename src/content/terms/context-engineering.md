---
term: Context Engineering
zh: 上下文工程
aliases: [Context Management, 上下文管理]
category: prompt
summary: 設計每一步要放進模型上下文的資訊，讓 agent 在有限空間裡做對事。
when_to_use:
  - Agent 跑久了開始忘記前面的指示，或越做越偏
  - 設計 AI 工具時，要決定載入哪些檔案、工具與記憶
  - 讀到「只靠 prompt engineering 已經不夠」這類討論
related:
  - { slug: prompt-engineering, rel: contrasts }
  - { slug: context-window, rel: prerequisite }
  - { slug: context-compaction, rel: uses }
  - { slug: memory, rel: uses }
  - { slug: subagent, rel: uses }
  - { slug: retrieval, rel: uses }
  - { slug: agent, rel: related }
diagram_caption: 每一步都要決定哪些資訊進 context window：需要時才檢索、把筆記存到外部記憶、交給 subagent 探索後只拿回摘要，快滿時再壓縮。
sources:
  - { title: "Anthropic — Effective context engineering for AI agents", url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" }
needs_verification: []
last_verified: 2026-10-30
---
Context engineering 是在 agent 時代延伸出來的觀念：與其只琢磨一段 prompt，不如管理「每一次呼叫模型時，上下文裡到底放了什麼」。Anthropic 把它描述為在推論過程中挑選並維護最合適的一組 token，範圍包括 system prompt、工具定義、對話紀錄、檔案與外部資料。原因是 context window 有限，而且內容越多，模型越難準確記住其中的細節，這種現象被稱為 context rot。常見手法有：只在需要時才載入檔案、把筆記寫到外部的 memory、讓 subagent 在自己的上下文裡探索後只回傳摘要，以及在快滿時做 context compaction。當 agent 跑久了開始忘記規則或重複犯錯，往往要先從上下文的安排找原因。

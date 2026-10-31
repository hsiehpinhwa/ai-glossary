---
term: Prompt Engineering
zh: 提示工程
aliases: [提示詞工程, Prompting]
category: prompt
summary: 反覆設計、測試與修改 prompt，讓模型穩定產出想要結果的做法。
when_to_use:
  - 同一個任務 AI 時好時壞，想讓結果更穩定
  - 把 AI 接進產品前，要寫出能長期使用的指令
  - 比較不同寫法哪個效果較好，需要有根據的判斷
related:
  - { slug: prompt, rel: uses }
  - { slug: few-shot, rel: uses }
  - { slug: chain-of-thought, rel: uses }
  - { slug: system-prompt, rel: uses }
  - { slug: eval, rel: prerequisite }
  - { slug: context-engineering, rel: contrasts }
diagram_caption: 先定義成功標準、寫出第一版，再加上範例、逐步思考、角色設定等技巧，用 eval 測試；分數不夠就回頭修改。
sources:
  - { title: "Anthropic — Prompt engineering overview", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview" }
  - { title: "OpenAI — Prompt engineering guide", url: "https://developers.openai.com/api/docs/guides/prompt-engineering.md" }
needs_verification: []
last_verified: 2026-10-30
---
Prompt engineering 是把「寫 prompt」當成可以反覆改進的工作：先定義什麼樣的輸出算成功，寫出第一版，再透過測試找出問題、修改措辭。常見技巧包括交代清楚背景與目標、在 system prompt 設定角色、提供幾個範例（few-shot）、要求模型先逐步推理（chain-of-thought），以及用標籤區隔指令和資料。Anthropic 的官方指南建議，動手調整之前要先有明確的成功標準和可以實際驗證的測試，否則很難知道修改到底有沒有幫助，這也是它和 eval 分不開的原因。隨著 AI 開始執行多步驟任務，社群更常談 context engineering，關注整個上下文怎麼安排；但把單一 prompt 寫好，仍然是一切的基礎。

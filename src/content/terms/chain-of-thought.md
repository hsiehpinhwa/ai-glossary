---
term: Chain-of-Thought
zh: 思維鏈
aliases: [CoT, 思路鏈, 逐步推理]
category: prompt
summary: 讓模型先寫出中間推理步驟再給答案，提升複雜問題的正確率。
when_to_use:
  - 數學、邏輯或多步驟問題，AI 直接回答常出錯
  - 想看懂 AI 怎麼得出結論，方便檢查哪一步錯了
  - 讀到 reasoning model 或「思考中」功能時，理解背後的概念
related:
  - { slug: prompt-engineering, rel: part-of }
  - { slug: few-shot, rel: uses }
  - { slug: reasoning-model, rel: related }
  - { slug: token, rel: related }
diagram_caption: 同一個複雜問題，直接回答容易跳步出錯；先寫出推理步驟（原始論文是靠附推理過程的範例）再給答案，正確率較高。
sources:
  - { title: "Wei et al. — Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (arXiv 2201.11903)", url: "https://arxiv.org/abs/2201.11903" }
needs_verification: []
last_verified: 2026-10-30
---
Chain-of-thought（CoT）是讓模型「把想法寫出來」的技巧：不直接給答案，而是先列出一步步的推理過程，再得出結論。2022 年 Jason Wei 等 Google 研究者發表的論文發現，只要在 prompt 裡放幾個附有推理步驟的範例，夠大的語言模型在算術、常識與符號推理題上的表現就會明顯進步，而且這種能力要到模型夠大才會出現。CoT 的好處除了提升正確率，還讓你看得到推理過程，方便找出是哪一步出錯；代價是輸出變長，花更多 token 和時間。現在許多 reasoning model 會在回答前先產生一段思考內容，你在介面上看到的「思考中」，和 CoT 是相近的概念，只是不需要你在 prompt 裡示範。

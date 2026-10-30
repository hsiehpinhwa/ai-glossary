---
term: RLHF
zh: 人類回饋強化學習
aliases: [Reinforcement Learning from Human Feedback]
category: training
summary: 讓人替模型的回答排名，再用這些偏好訓練模型，使它更符合人的期待。
when_to_use:
  - 想知道只會接龍的模型，怎麼變成會聽指令的助理
  - 讀到模型「討好使用者」或「拒絕回答」的討論，想了解訓練來源
  - 比較 RLHF、Constitutional AI 等不同的對齊訓練方法
related:
  - { slug: alignment, rel: enables }
  - { slug: pre-training, rel: prerequisite }
  - { slug: fine-tuning, rel: related }
  - { slug: llm, rel: related }
diagram_caption: 經典 RLHF 分三步：人類示範並做監督式微調、人類替回答排名訓練獎勵模型、再用強化學習讓模型追求高分，目標是讓 LLM 更符合人的意圖。
sources:
  - { title: "Ouyang et al. — Training language models to follow instructions with human feedback (arXiv)", url: "https://arxiv.org/pdf/2203.02155" }
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
  - { title: "Bai et al. — Constitutional AI: Harmlessness from AI Feedback (arXiv)", url: "https://arxiv.org/pdf/2212.08073" }
needs_verification: []
last_verified: 2026-10-30
---
RLHF（Reinforcement Learning from Human Feedback）是把 pre-training 後只會接龍的模型，調教成好用助理的關鍵步驟之一。OpenAI 的 InstructGPT 論文描述了經典的三步驟：先請人寫出示範回答，對模型做監督式 fine-tuning；再請人替模型的多個回答排名，用排名訓練一個「獎勵模型」，學會預測人比較喜歡哪個；最後用強化學習讓模型追求更高的獎勵分數，同時不偏離原本太遠。論文指出，模型變大不代表更會照使用者的意圖做事。Anthropic 的文件也說明 Claude 經過 RLHF 訓練。它的限制是：模型學到的是那一群標註者與研究者的偏好，不等於全人類的價值。後來也出現用 AI 回饋取代部分人工的方法，例如 Anthropic 的 Constitutional AI。

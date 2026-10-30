---
term: Few-shot
zh: 少樣本提示
aliases: [Few-shot Prompting, Multishot Prompting, 範例提示]
category: prompt
summary: 在 prompt 裡附上幾組輸入與輸出的範例，讓模型照著模式做。
when_to_use:
  - 要 AI 照固定格式輸出，光用文字描述說不清楚
  - 分類、改寫、擷取欄位這類重複任務，想讓結果一致
  - 想讓模型學會新任務，又不想花成本做 fine-tuning
related:
  - { slug: prompt, rel: part-of }
  - { slug: prompt-engineering, rel: part-of }
  - { slug: llm, rel: uses }
  - { slug: fine-tuning, rel: contrasts }
  - { slug: structured-output, rel: related }
  - { slug: chain-of-thought, rel: related }
diagram_caption: 幾組範例和新的輸入一起放進 prompt，模型照範例的模式輸出；fine-tuning 則是改模型本身的另一條路。
sources:
  - { title: "Brown et al. — Language Models are Few-Shot Learners (arXiv 2005.14165)", url: "https://arxiv.org/abs/2005.14165" }
  - { title: "Anthropic — Use examples (multishot prompting)", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/multishot-prompting" }
needs_verification: []
last_verified: 2026-10-30
---
Few-shot 是在 prompt 裡直接示範給模型看：先放幾組「輸入→正確輸出」的範例，再給它新的輸入，模型就會模仿範例的格式、語氣與判斷方式。2020 年發表 GPT-3 的論文《Language Models are Few-Shot Learners》展示了這件事：大型語言模型只靠 prompt 裡的文字示範、不必更新權重，就能完成翻譯、問答等任務。只給指令不給範例叫 zero-shot，只給一個叫 one-shot。Anthropic 的官方指南建議放 3 到 5 個範例，並讓範例貼近實際情境、彼此有差異，避免模型學到不該學的規律，也建議用標籤把範例和指令分開。和 fine-tuning 相比，few-shot 不用重新訓練、隨時可以修改，代價是每次請求都要多花一些 token。

---
term: Fine-tuning
zh: 微調
aliases: [Finetuning, SFT, Supervised Fine-tuning, 監督式微調]
category: model
summary: 拿已訓練好的模型，用特定資料再訓練一次，讓它更擅長某種任務或風格。
when_to_use:
  - prompt 已經寫得很清楚，模型還是無法穩定照固定格式或語氣輸出
  - 有大量重複、規則明確的任務，例如分類或特定格式的轉換
  - 評估要選 fine-tuning 還是 RAG 來讓 AI 用上自己的資料
related:
  - { slug: pre-training, rel: prerequisite }
  - { slug: lora, rel: related }
  - { slug: rag, rel: contrasts }
  - { slug: rlhf, rel: related }
  - { slug: distillation, rel: related }
  - { slug: eval, rel: related }
  - { slug: few-shot, rel: contrasts }
diagram_caption: 在 pre-training 好的模型上，用「輸入＋理想回答」的範例再訓練，得到特化模型並用 eval 驗證；LoRA 是省成本的做法，RAG 則是補知識的另一條路。
sources:
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
  - { title: "OpenAI — Supervised fine-tuning", url: "https://developers.openai.com/api/docs/guides/supervised-fine-tuning" }
needs_verification: []
last_verified: 2026-10-30
---
Fine-tuning（微調）是在已經 pre-training 好的模型上，用一批特定資料再訓練，讓模型的輸出更貼近那批資料的模式。最常見的是監督式微調：準備一批「這種輸入、應該這樣回答」的範例，讓模型學會固定格式、語氣或分類方式。它適合的情況是：prompt 寫得再清楚，模型還是無法穩定照格式輸出，或需要大量重複同一種任務。如果需求是「讓模型知道最新或私有的資料」，通常改用 RAG，在使用時把資料放進 context window。微調會改動模型的 parameter，也可能影響原本的表現，所以要先有 eval 才能確認變好還是變差；LoRA 這類方法只訓練一小部分參數，能大幅降低成本。

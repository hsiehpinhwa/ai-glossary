---
term: Parameter
zh: 參數
aliases: [Weights, 權重, 模型參數]
category: model
summary: 模型在訓練中學到、存在內部的大量數值，數量常用來表示模型大小。
when_to_use:
  - 看到 7B、70B 這類模型名稱，想知道數字代表什麼
  - 比較模型大小、執行成本或需要多少記憶體
  - 下載 open-weight 模型時，想知道下載的檔案是什麼
related:
  - { slug: llm, rel: part-of }
  - { slug: pre-training, rel: related }
  - { slug: fine-tuning, rel: related }
  - { slug: lora, rel: related }
  - { slug: open-weight-model, rel: related }
  - { slug: temperature, rel: contrasts }
diagram_caption: 訓練時模型反覆調整 parameter，這些數值決定 LLM 的能力；open-weight 模型公開的就是它們，而 temperature 是使用時的設定，不是學到的參數。
disambiguation: 呼叫 API 時的設定值（如 temperature、max_tokens）也常被叫做「參數」，但那是每次使用時調整的選項，不是模型學到的權重。
sources:
  - { title: "Google — Machine Learning Crash Course: What's a large language model?", url: "https://developers.google.com/machine-learning/crash-course/llm/transformers" }
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
  - { title: "NTIA — Dual-Use Foundation Models with Widely Available Model Weights", url: "https://www.ntia.gov/issues/artificial-intelligence/open-model-weights-report" }
  - { title: "IBM — Meta releases new Llama 3.1 models, including 405B parameter variant", url: "https://www.ibm.com/blog/llama-3/" }
needs_verification: []
last_verified: 2026-10-30
---
Parameter（參數）是模型內部數量龐大的數字，也常被稱為權重（weights）。訓練時，模型反覆比對自己的預測和實際文字，一點一點調整這些數字；訓練結束後，它學到的語言規律和知識，就以這些數值的形式保存下來。社群常說的「7B」「70B」模型，指的就是參數量，7B 約是 70 億個；Google 的教材提到，大型 Transformer 的參數可達數千億甚至上兆。參數越多通常能力越強，但也需要更多記憶體與運算，執行成本更高。你下載一個 open-weight 模型時，下載的主要就是這些參數檔案。別把它和 API 裡的 temperature、max_tokens 混淆：那些是每次呼叫時調整的設定，不會改變模型學到的內容。

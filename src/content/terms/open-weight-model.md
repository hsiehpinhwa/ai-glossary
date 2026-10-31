---
term: Open-weight Model
zh: 開放權重模型
aliases: [Open Weights, Open Model, 開源模型（俗稱）]
category: model
summary: 公開釋出參數檔，任何人都能下載到自己的電腦或伺服器執行的模型。
when_to_use:
  - 資料不能送到外部服務，想在自己的電腦或伺服器上跑模型
  - 想用自己的資料微調模型，或用 LoRA 客製化
  - 讀到「開源模型」的新聞，想知道到底公開了什麼
related:
  - { slug: parameter, rel: uses }
  - { slug: llm, rel: is-a }
  - { slug: fine-tuning, rel: enables }
  - { slug: lora, rel: enables }
  - { slug: inference, rel: related }
diagram_caption: 開發者公開 parameter 檔案，使用者下載到自己的機器後，可以在本機跑 inference，也能用 LoRA 微調；封閉模型則只能透過 API 使用。
disambiguation: 社群常把它叫「開源模型」，但 Open Source Initiative 認為只公開權重不等於 open source AI，後者還要公開訓練程式碼與訓練資料的資訊。
sources:
  - { title: "Open Source Initiative — Open Weights Are Good. Open Source Is Better.", url: "https://opensource.org/blog/open-weights-are-good-open-source-is-better" }
  - { title: "NTIA — Dual-Use Foundation Models with Widely Available Model Weights", url: "https://www.ntia.gov/issues/artificial-intelligence/open-model-weights-report" }
  - { title: "IBM — Meta releases new Llama 3.1 models, including 405B parameter variant", url: "https://www.ibm.com/blog/llama-3/" }
needs_verification: []
last_verified: 2026-10-30
---
Open-weight model 是指開發者把訓練好的 parameter（權重）公開，讓任何人能下載到自己的電腦或伺服器執行，Meta 的 Llama 系列就是常被提到的例子。和只能透過 API 使用的封閉模型相比，它的好處是資料不必送給第三方，可以在本機跑 inference，也能用 LoRA 等方法依自己的資料 fine-tuning。代價是運算資源要自己準備，大模型很吃 GPU 記憶體。很多人把它叫「開源模型」，但 Open Source Initiative 指出，只公開權重、沒有公開訓練程式碼和資料，不算真正的 open source AI，因為你無法完整研究它是怎麼來的。美國 NTIA 的報告則認為，這類模型讓資源較少的團隊也能參與 AI 研發，同時也評估了被濫用的風險。

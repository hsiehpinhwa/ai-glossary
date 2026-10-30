---
term: Alignment
zh: 對齊
aliases: [AI Alignment, AI 對齊]
category: training
summary: 讓 AI 的行為符合人的意圖與價值：有幫助、誠實、不造成傷害。
when_to_use:
  - 想知道模型為什麼會拒絕某些請求，或主動提醒風險
  - 讀到 AI 安全、對齊研究、Constitutional AI 這類新聞
  - 評估模型在你的產品裡會不會說錯話或做出有害行為
related:
  - { slug: rlhf, rel: uses }
  - { slug: pre-training, rel: related }
  - { slug: eval, rel: related }
  - { slug: jailbreak, rel: related }
  - { slug: guardrails, rel: related }
diagram_caption: 預訓練模型可能編造或照做有害要求，透過 RLHF、Constitutional AI、紅隊測試等方法朝「有幫助、誠實、無害」調整，再用 eval 檢驗；jailbreak 則試圖繞過這些訓練。
sources:
  - { title: "Anthropic — Core Views on AI Safety", url: "https://www.anthropic.com/news/core-views-on-ai-safety" }
  - { title: "Ouyang et al. — Training language models to follow instructions with human feedback (arXiv)", url: "https://arxiv.org/pdf/2203.02155" }
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
needs_verification: []
last_verified: 2026-10-30
---
Alignment（對齊）是讓 AI 照著人真正想要的方式行事的研究與工程工作。OpenAI 的 InstructGPT 論文開頭就指出，模型變大不會自然更懂得照使用者的意圖做事；只經過預訓練的模型可能編造內容、答非所問，或照做有害的要求。對齊工作要解決的就是這個落差，Anthropic 常用的目標框架是 helpful、honest、harmless：有幫助、誠實、無害。常見方法包括 RLHF、讓模型依一套原則自我批改的 Constitutional AI、紅隊測試，以及試圖看懂模型內部運作的 interpretability 研究。Anthropic 也坦言，目前還沒有人知道如何讓非常強大的 AI 穩定做到這三點。模型拒絕某些請求、承認不知道，背後都有對齊訓練；jailbreak 則是試圖繞過它。

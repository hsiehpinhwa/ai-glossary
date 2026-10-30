---
term: Hallucination
zh: 幻覺
aliases: [AI 幻覺, Confabulation]
category: model
summary: 模型自信地說出聽起來合理、但其實錯誤或捏造的內容。
when_to_use:
  - AI 給的論文、數字、網址或函式名稱查不到
  - 要把 AI 回答用在報告、法律、醫療等需要精確的場合
  - 設計 AI 功能時，想降低錯誤回答的比例
related:
  - { slug: llm, rel: related }
  - { slug: grounding, rel: contrasts }
  - { slug: rag, rel: related }
  - { slug: eval, rel: related }
  - { slug: pre-training, rel: related }
diagram_caption: 沒有依據時，LLM 會用猜的，容易產生 hallucination；透過 RAG 提供資料、讓回答 grounding 在來源上，並用 eval 追蹤錯誤率。
sources:
  - { title: "OpenAI — Why language models hallucinate", url: "https://openai.com/index/why-language-models-hallucinate/" }
  - { title: "Anthropic — Reduce hallucinations", url: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations" }
needs_verification: []
last_verified: 2026-10-30
---
Hallucination（幻覺）是指模型自信地產生不正確的內容：捏造不存在的論文、虛構函式名稱，語氣卻和答對時一樣篤定。原因出在 LLM 的運作方式：它在 pre-training 時學的是預測下一個 token，拼字、文法這類有規律的東西學得很好，卻很難學到「某人生日是哪天」這種沒有規律、出現次數又少的事實。OpenAI 的研究也指出，許多評測只看答對率，等於獎勵模型亂猜，而不是承認不知道。Anthropic 文件列出的降低方法包括：明確允許模型說「不知道」、要求它引用原文、每個說法都附出處，以及限定只能根據你提供的文件回答（grounding 與 RAG）。這些方法只能減少、無法消除錯誤。

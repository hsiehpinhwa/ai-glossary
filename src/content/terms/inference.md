---
term: Inference
zh: 推論
aliases: [模型推論, 推理（運算）]
category: model
summary: 用訓練好的模型處理新輸入、產生輸出的過程，也就是「使用模型」這一端。
when_to_use:
  - 讀到推論成本、推論晶片、本機跑推論這類說法
  - 想知道 API 費用、回應速度是由什麼決定
  - 分辨一件事發生在訓練階段還是使用階段
related:
  - { slug: llm, rel: runs }
  - { slug: pre-training, rel: contrasts }
  - { slug: token, rel: uses }
  - { slug: temperature, rel: related }
  - { slug: reasoning-model, rel: related }
diagram_caption: 訓練產出模型後，每次有新輸入就跑一次 inference，依 temperature 等設定逐個產生 token；reasoning model 會在這一步多花運算來思考。
disambiguation: 中文「推論」容易聯想到邏輯推理；在 AI 裡 inference 單純指執行模型產生結果，和 reasoning model 的「推理」不是同一件事。
sources:
  - { title: "Cloudflare — AI inference vs. training", url: "https://www.cloudflare.com/learning/ai/inference-vs-training/" }
  - { title: "OpenAI — Reasoning models", url: "https://developers.openai.com/api/docs/guides/reasoning" }
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
needs_verification: []
last_verified: 2026-10-30
---
Inference（推論）指的是模型訓練完成後，實際拿來處理新輸入的階段。你在聊天介面打一句話、coding agent 呼叫一次模型，背後都是一次 inference：輸入被切成 token，模型一個接一個預測輸出的 token。和訓練相比，訓練是一次性的大工程，inference 則是每次使用都會發生，累積起來的運算成本很可觀；API 的費用、回應延遲，都是 inference 這一端的事。Temperature 這類設定，也是在 inference 時決定模型怎麼從候選 token 中挑選。Reasoning model 會在回答前產生額外的思考 token，等於多花 inference 運算換取更好的答案，所以通常更慢也更貴。聽到「推論成本」「推論晶片」，指的都是使用模型這一端，而不是訓練。

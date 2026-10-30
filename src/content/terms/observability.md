---
term: Observability
zh: 可觀測性
aliases: [o11y, LLM Observability, Tracing]
category: eval
summary: 透過系統輸出的紀錄、指標與追蹤，從外部看懂它內部發生什麼事。
when_to_use:
  - AI 功能上線後使用者說「它亂回答」，要找出是哪一步出錯
  - Agent 一次跑很多步驟，想看清楚它呼叫了哪些工具、花了多久
  - 要從真實使用紀錄挑出案例，補進 golden dataset
related:
  - { slug: eval, rel: related }
  - { slug: golden-dataset, rel: enables }
  - { slug: llm, rel: related }
  - { slug: tool-use, rel: related }
  - { slug: agent-loop, rel: related }
  - { slug: token, rel: related }
diagram_caption: 一次請求的 trace 由多個 span 組成，記錄每次組 prompt、呼叫模型與工具的過程；彙整成指標與日誌，失敗案例再挑進 golden dataset。
sources:
  - { title: "OpenTelemetry — Observability primer", url: "https://opentelemetry.io/docs/concepts/observability-primer/" }
  - { title: "Anthropic — Demystifying evals for AI agents", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" }
  - { title: "Langfuse — Golden dataset evaluation", url: "https://langfuse.com/resources/engineering/golden-dataset-evaluation.md" }
needs_verification: []
last_verified: 2026-10-30
---
Observability 指能透過系統輸出的資料，從外部看懂它內部發生了什麼，不必事先知道問題出在哪裡。常見的資料有三種：traces 追蹤一次請求經過的每個步驟，每個步驟稱為一個 span，記錄名稱、耗時與屬性；metrics 是延遲、錯誤率這類數字；logs 是帶時間戳記的事件紀錄。在 AI 產品裡它特別重要，因為 agent 回答一個問題，可能組了好幾次 prompt、呼叫多個工具和模型。使用者抱怨「答錯了」時，要靠 trace 才看得出是工具回傳錯誤、資料沒找到，還是模型自己判斷錯。這些紀錄也是 eval 的素材：從線上 trace 挑出失敗案例，補進 golden dataset，下次修改時就能自動檢查，避免同樣的錯誤再次發生。

---
term: Rate Limit
zh: 速率限制
aliases: [Rate Limiting, "429", 用量上限]
category: dev
summary: 服務限制一段時間內能送出的請求數，超過就暫時拒絕。
when_to_use:
  - 程式呼叫 AI API 時出現 429 Too Many Requests
  - 批次處理大量資料，想估算要跑多久
  - coding agent 跑到一半顯示用量達到上限
related:
  - { slug: api, rel: part-of }
  - { slug: api-key, rel: related }
  - { slug: sdk, rel: related }
  - { slug: token, rel: related }
  - { slug: webhook, rel: related }
diagram_caption: 請求在額度內就正常回應；超過上限時伺服器回 429，並可能附上 Retry-After，程式等待後重試，每次失敗就把間隔拉長。
sources:
  - { title: "MDN — 429 Too Many Requests", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429" }
  - { title: "Claude Docs — Rate limits", url: "https://platform.claude.com/docs/en/api/rate-limits" }
  - { title: "Claude Docs — Client SDKs overview", url: "https://platform.claude.com/docs/en/cli-sdks-libraries/overview" }
  - { title: "Google Cloud — Retry strategy (exponential backoff)", url: "https://docs.cloud.google.com/model-armor/retry-strategy" }
needs_verification: []
last_verified: 2026-10-30
---
Rate limit 是服務對使用速度設下的上限：一段時間內送太多請求，伺服器就回傳 HTTP 429 Too Many Requests，請你慢一點，有時還會附上 Retry-After，告訴你要等多久再試。限制的對象可能是 IP、使用者或整個組織。AI 模型的 API 算得更細，以 Claude API 為例，除了每分鐘請求數，還分別限制每分鐘的輸入與輸出 token 數，額度會隨使用等級提高。目的是防止濫用、分配有限的運算能力。用 AI 寫程式時，你可能在兩種地方撞到它：自己的 app 在迴圈裡呼叫 API 太快，或 coding agent 跑太久用完了額度。正確的處理方式是等待後重試，每次失敗就把等待時間拉長，也就是 exponential backoff；Claude 官方 SDK 也內建自動重試。

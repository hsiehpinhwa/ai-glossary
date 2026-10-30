---
term: Guardrails
zh: 護欄
aliases: [AI Guardrails, 安全護欄]
category: agent
summary: 在 AI 的輸入、輸出與工具呼叫前後加上檢查，攔下不該發生的事。
when_to_use:
  - 把 AI 放進對外的產品，要防止被濫用或說錯話
  - Agent 能執行真實動作，需要擋下危險操作
  - 想用便宜的小模型先過濾請求，節省大模型的成本
related:
  - { slug: prompt-injection, rel: related }
  - { slug: jailbreak, rel: related }
  - { slug: hook, rel: uses }
  - { slug: human-in-the-loop, rel: related }
  - { slug: sandbox, rel: related }
  - { slug: permission-mode, rel: related }
diagram_caption: 輸入先過篩檢，AI 處理時工具呼叫前再檢查一次，最後確認輸出；任何一關不通過就攔下並回覆。
sources:
  - { title: "OpenAI Agents SDK — Guardrails", url: "https://openai.github.io/openai-agents-python/guardrails/" }
  - { title: "Anthropic — Mitigate jailbreaks and prompt injections", url: "https://platform.claude.com/docs/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks" }
needs_verification: []
last_verified: 2026-10-30
---
Guardrails 是包在 AI 外圍的一層層檢查，像高速公路的護欄，讓系統出錯時不至於衝出去。常見位置有三個：輸入端先檢查使用者的請求是否惡意、離題或夾帶 jailbreak 話術；工具呼叫前後檢查 agent 要執行的動作是否允許；輸出端再確認回應沒有洩漏資料或違反規範。OpenAI 的 Agents SDK 把它分成 input、output 與 tool guardrails，一旦觸發就停止執行；Anthropic 也建議先用輕量模型篩檢輸入。檢查方式可以是程式規則、另一個模型的判斷，或交給人確認。Guardrails 能降低風險，但不保證萬無一失，所以通常會和最小權限、sandbox、人工審核等措施搭配使用。

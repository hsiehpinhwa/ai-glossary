---
term: Jailbreak
zh: 越獄
aliases: [Jailbreaking, 越獄攻擊, 越獄提示]
category: prompt
summary: 用特殊話術繞過 AI 的安全限制，讓它做出原本會拒絕的事。
when_to_use:
  - 看到網路上流傳「這樣問 AI 就會回答」的提示詞
  - 設計 AI 產品，要評估使用者會不會故意突破限制
  - 分辨 jailbreak 和 prompt injection 這兩個常被混用的詞
related:
  - { slug: prompt-injection, rel: contrasts }
  - { slug: guardrails, rel: related }
  - { slug: alignment, rel: related }
  - { slug: system-prompt, rel: related }
diagram_caption: 越獄話術要依序突破輸入篩檢、system prompt 的規則與模型本身的安全訓練；任何一層守住，就會得到拒絕或安全的回應。
sources:
  - { title: "OWASP GenAI — LLM01: Prompt Injection", url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" }
  - { title: "Anthropic — Mitigate jailbreaks and prompt injections", url: "https://platform.claude.com/docs/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks" }
needs_verification: []
last_verified: 2026-10-30
---
Jailbreak 在 AI 領域指用特殊話術讓模型無視自己的安全規範，例如要它扮演「沒有任何限制的角色」、把請求包裝成小說情節或假設情境，或把危險問題拆成幾個看似無害的小問題。OWASP 把 jailbreak 視為 prompt injection 的一種：兩者都想讓 AI 不照原本的規則走，差別在於 jailbreak 的目標是讓模型忽略自身的安全規範，而 prompt injection 更常指把指令藏在外部內容裡，劫持 agent 的行為。Anthropic 的文件也這樣區分威脅：越獄時，使用者本人就是攻擊者。防禦通常是多層的：模型本身的安全訓練、system prompt 裡的規則、用輕量模型預先篩檢輸入，以及持續監控並更新防護。

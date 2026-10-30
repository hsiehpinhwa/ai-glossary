---
term: System Prompt
zh: 系統提示詞
aliases: [System Message, Developer Message, 系統指令]
category: prompt
summary: 開發者預先放在對話最前面、設定 AI 角色與規則的指令。
when_to_use:
  - 打造客服機器人或自訂 AI 助理，要固定它的語氣與回答範圍
  - 想讓 AI 在整段對話裡都遵守同一套規則
  - 讀到「system prompt 外洩」或「模型不聽 system prompt」這類討論
related:
  - { slug: prompt, rel: part-of }
  - { slug: llm, rel: uses }
  - { slug: prompt-engineering, rel: related }
  - { slug: prompt-caching, rel: related }
  - { slug: prompt-injection, rel: related }
diagram_caption: 開發者寫好的 system prompt 和使用者訊息一起組成完整的 prompt 送進模型；固定不變的開頭可被快取，prompt injection 則試圖從使用者這端蓋過規則。
sources:
  - { title: "Anthropic — Prompting best practices: give Claude a role", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/system-prompts" }
  - { title: "OpenAI — Prompt engineering guide (message roles)", url: "https://developers.openai.com/api/docs/guides/prompt-engineering.md" }
needs_verification: []
last_verified: 2026-10-30
---
System prompt 是放在對話最前面、由開發者或工具預先寫好的指令，用來設定 AI 的角色、語氣，以及可以做和不能做的事。在 API 裡，它通常是和使用者訊息分開的 system 欄位；OpenAI 則把這類訊息稱為 developer message，並說明它的優先順序高於使用者訊息。它會跟著每一輪對話一起送進模型，所以適合放「整段對話都要遵守」的規則，而不是單次的問題。Anthropic 的文件指出，光是在 system prompt 寫一句角色設定，就能讓回應更聚焦。不過它不是安全保證：prompt injection 就是試圖用其他輸入蓋過這些規則。也因為內容固定不變，system prompt 常搭配 prompt caching 來降低成本與等待時間。

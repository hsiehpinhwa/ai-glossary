---
term: Prompt Injection
zh: 提示注入
aliases: [提示詞注入, Indirect Prompt Injection, 間接提示注入]
category: prompt
summary: 把惡意指令藏在輸入或外部內容裡，讓 AI 違背原本指示的攻擊。
when_to_use:
  - 讓 AI 讀網頁、email 或文件，而且它能代你執行動作時
  - 評估 AI 瀏覽器、agent 產品的資安風險
  - 看到「網頁藏了一段白字指令」這類資安新聞
related:
  - { slug: jailbreak, rel: contrasts }
  - { slug: guardrails, rel: related }
  - { slug: tool-use, rel: related }
  - { slug: human-in-the-loop, rel: related }
  - { slug: sandbox, rel: related }
  - { slug: computer-use, rel: related }
  - { slug: system-prompt, rel: related }
diagram_caption: 攻擊者把指令藏在 AI 會讀的內容裡，agent 若把資料誤當指令，就可能執行危險動作；guardrails、人工確認與 sandbox 是常見的防線。
sources:
  - { title: "OWASP GenAI — LLM01: Prompt Injection", url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" }
  - { title: "Anthropic — Mitigate jailbreaks and prompt injections", url: "https://platform.claude.com/docs/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks" }
needs_verification: []
last_verified: 2026-10-30
---
Prompt injection 是針對 AI 應用的攻擊：把指令偽裝成一般內容，讓模型誤以為那是它該遵守的命令。OWASP 把它分成兩類：直接注入是使用者自己在輸入裡下指令；間接注入則是把指令藏在 AI 會讀取的外部來源，例如網頁、email 或檔案，連人眼看不見的文字也可能被模型讀到。如果 AI 只是聊天，風險有限；但當 agent 能寄信、改檔案、操作瀏覽器，一段藏在網頁裡的句子就可能讓它洩漏資料，或做出你沒有授權的事。目前沒有能完全防堵的方法，常見做法是限縮工具權限、把外部內容標示為不可信的資料、用 guardrails 篩檢，以及在重要動作前交給人確認。

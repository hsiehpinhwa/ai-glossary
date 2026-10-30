---
term: Structured Output
zh: 結構化輸出
aliases: [Structured Outputs, JSON Mode, JSON Schema 輸出]
category: prompt
summary: 要求模型依照指定格式（通常是 JSON schema）輸出，方便程式直接讀取。
when_to_use:
  - 把 AI 接進自動化流程，下一步要由程式讀取結果
  - 從 email、表單或文件擷取欄位，存進試算表或資料庫
  - AI 偶爾多講一句話或少一個欄位，害後面的程式出錯
related:
  - { slug: llm, rel: uses }
  - { slug: tool-use, rel: related }
  - { slug: api, rel: related }
  - { slug: database, rel: related }
  - { slug: few-shot, rel: related }
  - { slug: prompt-engineering, rel: related }
diagram_caption: 透過 API 送出輸入與 JSON schema，模型生成時就受格式限制，產出的 JSON 可直接交給程式存進資料庫；工具參數也用同一套機制。
sources:
  - { title: "Anthropic — Structured outputs", url: "https://platform.claude.com/docs/en/build-with-claude/structured-outputs" }
  - { title: "Anthropic — Tool use overview (strict tool use)", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview" }
needs_verification: []
last_verified: 2026-10-30
---
Structured output 是讓模型的回答符合事先定義的結構，最常見的是提供一份 JSON schema，規定要有哪些欄位、每個欄位是什麼型別。一般對話的輸出是自由文字，人看得懂，程式卻很難穩定讀取；只要多了一句客套話或少一個括號，後面的自動化流程就會壞掉。早期做法是在 prompt 裡要求「只回 JSON」並附上範例，但無法保證每次都對。現在 Claude 等模型的 API 提供原生功能，Anthropic 的文件說明它用 constrained decoding，在生成時就限制模型只能產出符合 schema 的內容。同樣的機制也用在 tool use，確保工具參數格式正確。只要你想把 AI 的結果自動存進表格、資料庫或交給下一個工具，就會用到它。

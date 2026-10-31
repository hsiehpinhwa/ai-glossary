---
term: Token
zh: 詞元
aliases: [Tokens, Tokenizer, 詞元]
category: model
summary: 模型讀寫文字的最小單位，可能是一個字、半個詞或一個符號。
when_to_use:
  - 看 API 帳單或用量，想知道「token 數」是怎麼算的
  - 比較模型支援多長的輸入，或估算一份文件放不放得進去
  - 發現同樣內容用中文比英文花更多額度，想知道原因
related:
  - { slug: llm, rel: related }
  - { slug: context-window, rel: related }
  - { slug: inference, rel: related }
  - { slug: multimodal, rel: related }
diagram_caption: 輸入文字先被 tokenizer 切成 token 交給 LLM，模型再逐個產生輸出 token；輸入與輸出都佔用 context window，也都是計費依據。
sources:
  - { title: "OpenAI Help — What are tokens and how to count them?", url: "https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them" }
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
needs_verification: []
last_verified: 2026-10-30
---
Token 是 LLM 處理文字的基本單位。你輸入的文字會先被 tokenizer 切成一串 token，可能是一個完整單字、單字的一部分、一個標點，甚至一個位元組；模型讀進來和吐出去的都是 token，而不是「字」。依 OpenAI 的經驗法則，英文大約每 4 個字元是 1 個 token；其他語言通常每個字元切出的 token 比英文多，所以同樣的意思，用中文可能更花額度。Token 也是 AI 服務的計價與容量單位：API 依輸入和輸出的 token 數收費，context window 的大小也用 token 計算。不同模型的 tokenizer 不同，同一段文字算出來的 token 數也會不一樣，要精確數字，就用該模型的 token 計數工具。

---
term: Prompt
zh: 提示詞
aliases: [提示, Prompt 指令]
category: prompt
summary: 你送給 AI 模型的輸入文字，告訴它要做什麼、要怎麼做。
when_to_use:
  - 在 ChatGPT、Claude 等對話框輸入任何要求時
  - AI 回答不符預期，想調整問法讓結果更準確
  - 把常用的指令存成範本，分享給同事重複使用
related:
  - { slug: llm, rel: uses }
  - { slug: system-prompt, rel: related }
  - { slug: prompt-engineering, rel: related }
  - { slug: few-shot, rel: related }
  - { slug: context-window, rel: related }
  - { slug: token, rel: related }
diagram_caption: 你輸入的文字會和 system prompt、範例組成完整的 prompt，切成 token 放進 context window 交給模型；不滿意回應就改寫再試。
sources:
  - { title: "OpenAI — Prompt engineering guide", url: "https://developers.openai.com/api/docs/guides/prompt-engineering.md" }
  - { title: "Anthropic — Prompt engineering overview", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview" }
needs_verification: []
last_verified: 2026-10-30
---
Prompt 是你交給 AI 模型的輸入：一個問題、一段指令、一份要它整理的文件，都算 prompt。模型讀進這段文字後產生回應，所以 prompt 寫得越清楚，結果通常越接近你要的。實際送進模型的內容往往不只你打的那一句：應用程式會在前面加上 system prompt，可能再附上範例、先前的對話紀錄與檔案，全部切成 token 放進 context window。同一個 prompt 每次的輸出也可能不同，因為模型的生成結果本來就不是固定的。對一般使用者來說，學會交代背景、目標、輸出格式與限制，是使用 AI 最基本也最有效的技能；當你開始為了穩定的結果反覆修改、測試措辭，就進入了 prompt engineering 的範圍。

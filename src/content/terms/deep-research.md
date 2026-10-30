---
term: Deep Research
zh: 深度研究
aliases: [Research Agent, 深入研究]
category: agent
summary: AI 花數分鐘自己搜尋、閱讀大量網頁，整理成附引用來源報告的功能。
when_to_use:
  - 做市場調查、競品比較或文獻整理，需要讀很多來源
  - 問題沒有單一答案，需要比對多方說法
  - 想先拿到一份有來源的初稿，再自己查核重點
related:
  - { slug: agent, rel: is-a }
  - { slug: tool-use, rel: uses }
  - { slug: multi-agent-orchestration, rel: uses }
  - { slug: retrieval, rel: uses }
  - { slug: hallucination, rel: related }
  - { slug: grounding, rel: related }
diagram_caption: Agent 規劃方向、反覆搜尋與閱讀，資訊不足就再查，最後產出附引用的報告；報告仍可能出錯，關鍵事實要自己查核。
sources:
  - { title: "OpenAI — Introducing deep research", url: "https://openai.com/index/introducing-deep-research/" }
  - { title: "Google — Gemini Deep Research", url: "https://blog.google/products/gemini/deep-research-gemini-2-5-pro-experimental/" }
  - { title: "Anthropic — How we built our multi-agent research system", url: "https://www.anthropic.com/engineering/multi-agent-research-system" }
needs_verification: []
last_verified: 2026-10-30
---
Deep research 是多家 AI 產品都有的研究型 agent 功能：你丟出一個複雜問題，它會自己規劃要查哪些方向，反覆搜尋、閱讀、比對網頁與文件，最後整理成一份附引用來源的報告。OpenAI 在 2025 年 2 月為 ChatGPT 推出 deep research，說明一次通常要 5 到 30 分鐘；Google 的 Gemini 也有同名功能，Anthropic 的 Research 則用多個 agent 平行搜尋。和一般的 AI 搜尋相比，它花的時間與 token 多很多，換來更廣的資料覆蓋。不過 OpenAI 自己也承認，它仍可能產生錯誤的事實，也不一定分得清可靠來源和傳聞，所以報告適合當研究起點，關鍵數字與結論還是要點開引用自己查核。

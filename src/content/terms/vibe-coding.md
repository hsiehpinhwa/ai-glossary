---
term: Vibe Coding
zh: 憑感覺寫程式
aliases: [Vibecoding]
category: coding
summary: 用自然語言叫 AI 寫程式、幾乎不看程式碼本身的開發方式。
when_to_use:
  - 想快速做出原型、個人小工具或週末專案
  - 在社群看到「不會寫程式也能做 App」的影片，想知道背後在做什麼
  - 評估 AI 產生的程式能不能直接拿去上線
related:
  - { slug: coding-agent, rel: uses }
  - { slug: prompt, rel: uses }
  - { slug: spec-driven-development, rel: contrasts }
  - { slug: code-review, rel: related }
  - { slug: deploy, rel: related }
  - { slug: hallucination, rel: related }
diagram_caption: 用一句話描述需求，AI 寫完直接執行看結果，有錯就把錯誤訊息貼回去；要正式上線時，才補上規格、審查與測試。
sources:
  - { title: "Martin Fowler — Vibe Coding", url: "https://martinfowler.com/bliki/VibeCoding.html" }
  - { title: "Andrej Karpathy — 原始貼文（X）", url: "https://x.com/karpathy/status/1886192184808149383" }
  - { title: "GitHub Blog — Spec-driven development with AI", url: "https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/" }
needs_verification: []
last_verified: 2026-10-30
---
Vibe coding 是 Andrej Karpathy 在 2025 年 2 月於 X 上提出的說法：完全順著感覺走，用自然語言告訴 AI 想要什麼，接受它產生的程式，甚至「忘記程式碼的存在」。實際做法是把需求丟給 coding agent，直接執行看結果；出錯就把錯誤訊息貼回去請它再改，一路迭代到能用為止。Martin Fowler 指出，關鍵在「不看 AI 產生的程式碼」；如果你有逐行檢查、在意架構，那就不算 vibe coding。它很適合原型、個人工具和學習，讓不會寫程式的人也能做出東西。但程式碼沒人看過，安全漏洞和難以維護的問題也就沒人發現。要把作品給別人用或正式上線時，最好改用 spec-driven development 先寫清楚規格，再加上測試與 code review。

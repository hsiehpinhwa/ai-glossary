---
term: Temperature
zh: 溫度
aliases: [取樣溫度, Sampling Temperature]
category: model
summary: 控制模型輸出隨機程度的設定，越高越多變，越低越保守。
when_to_use:
  - 在 API、playground 或工具進階設定裡看到 temperature 選項
  - 需要穩定一致的輸出（分類、擷取資料），或想要更多變的發想
  - 疑惑為什麼同一個問題每次問，答案都不太一樣
related:
  - { slug: inference, rel: part-of }
  - { slug: parameter, rel: contrasts }
  - { slug: token, rel: related }
  - { slug: llm, rel: related }
diagram_caption: LLM 每一步都會算出候選 token 的機率，temperature 決定怎麼挑：低時幾乎總選最可能的，高時少見的選項也有機會被選中。
sources:
  - { title: "Anthropic — Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
needs_verification: []
last_verified: 2026-10-30
---
Temperature 是呼叫模型時可以調整的設定，控制輸出有多隨機。模型每次產生 token 時，會先算出各個候選的可能性，再從中挑一個；temperature 調低，模型幾乎總是選最可能的那個，回答保守、穩定；調高，比較少見的用字也有機會被選到，措辭更多變，適合發想、寫故事。要注意兩件事。第一，temperature 設成 0 也不保證每次結果完全相同，Anthropic 文件明白寫出同樣的輸入仍可能得到不同輸出。第二，它調的是用字的隨機程度，不是模型的知識或聰明程度，調低不會讓模型知道它原本不知道的事。在一般聊天介面裡通常看不到它，但在 API、playground 或 AI 工具的進階設定裡常會出現。

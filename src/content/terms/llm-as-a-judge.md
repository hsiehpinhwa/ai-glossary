---
term: LLM-as-a-Judge
zh: LLM 評審
aliases: [LLM Judge, Model-based Grading]
category: eval
summary: 讓另一個語言模型依評分標準，替 AI 的輸出打分或比較好壞。
when_to_use:
  - 要評估摘要、客服回覆這類沒有唯一正確答案的輸出
  - 測試案例太多，人工逐題審查來不及
  - 想在每次修改 prompt 後，自動檢查語氣、正確性等品質
related:
  - { slug: eval, rel: part-of }
  - { slug: llm, rel: uses }
  - { slug: prompt, rel: uses }
  - { slug: golden-dataset, rel: related }
  - { slug: benchmark, rel: related }
diagram_caption: 受測系統的回答和評分標準一起交給評審 LLM，評審先寫理由再給分，並定期用人工抽查校準，結果彙整成 eval 報告。
sources:
  - { title: "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena（arXiv）", url: "https://arxiv.org/abs/2306.05685" }
  - { title: "Anthropic — Define success criteria and build evaluations", url: "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests" }
needs_verification: []
last_verified: 2026-10-30
---
LLM-as-a-Judge 是讓一個語言模型擔任評審，依照你寫好的評分標準，替另一個 AI 的回答打分，或比較兩個回答的優劣。很多 AI 輸出沒有唯一正確答案，例如摘要寫得好不好、回覆語氣是否得體，程式規則判斷不了，人工審查又太慢太貴，LLM 評審補上這個空缺。2023 年一篇研究發現，強的模型當評審時，和人類偏好的一致率超過 80%，與人類彼此之間的一致程度相當；但它也有偏誤，例如偏好排在前面的答案、偏好較長的回答、偏好自己寫的內容。實務上要給它具體的評分標準，限定輸出格式（例如 1 到 5 分），讓它先說明理由再給分，並定期用人工評分校準。

---
term: Multimodal
zh: 多模態
aliases: [Multimodality, 多模態模型, Vision]
category: model
summary: 模型能處理文字以外的圖片、音訊、影片等多種資料形式。
when_to_use:
  - 想直接丟截圖、照片、圖表或 PDF 給 AI 判讀
  - 估算上傳圖片會佔用多少 token 與費用
  - 讓 agent 看螢幕畫面或設計稿來完成任務
related:
  - { slug: llm, rel: related }
  - { slug: token, rel: uses }
  - { slug: context-window, rel: related }
  - { slug: computer-use, rel: enables }
  - { slug: hallucination, rel: related }
diagram_caption: 圖片、音訊、影片和文字一樣被轉成 token 放進 context window，多模態 LLM 讀完後回答；computer use 的 agent 就靠它看懂螢幕。
sources:
  - { title: "Anthropic — Vision", url: "https://platform.claude.com/docs/en/build-with-claude/vision" }
  - { title: "Google — Gemini API: Video understanding", url: "https://ai.google.dev/gemini-api/docs/video-understanding" }
needs_verification: []
last_verified: 2026-10-30
---
Multimodal（多模態）指模型能處理不只一種資料形式，例如文字、圖片、音訊、影片。現在的主流模型多半能直接看懂你上傳的截圖、照片、圖表或文件，Gemini 等模型還能處理音訊與影片。運作上，圖片會被切成小區塊、轉成 token 放進 context window，所以一張圖也會佔用額度、計入費用；Claude 的文件就列出圖片換算 token 的公式。多模態讓很多事變簡單：拍下錯誤訊息直接問、把設計稿丟給 coding agent 照著做、讓 computer use 的 agent 看螢幕截圖再決定下一步。限制也要知道：模型看圖可能數錯數量、估錯位置，太小或模糊的圖容易出錯，甚至產生 hallucination，重要判讀仍要人工確認。

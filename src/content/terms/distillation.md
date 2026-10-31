---
term: Distillation
zh: 知識蒸餾
aliases: [Knowledge Distillation, Model Distillation, 模型蒸餾]
category: training
summary: 用大模型的輸出當教材，訓練出更小、更便宜但表現接近的模型。
when_to_use:
  - 大模型在某個任務上表現好，但太貴、太慢，想換成小模型
  - 讀到「某小模型由某大模型蒸餾而來」的新聞
  - 評估要不要用 API 的蒸餾功能降低長期成本
related:
  - { slug: fine-tuning, rel: uses }
  - { slug: parameter, rel: related }
  - { slug: inference, rel: related }
  - { slug: llm, rel: related }
  - { slug: eval, rel: related }
diagram_caption: 老師模型產生大量回答當訓練資料，用 fine-tuning 教會學生模型，得到 inference 更便宜的小模型，再用 eval 比對它和老師的表現。
sources:
  - { title: "Hinton et al. — Distilling the Knowledge in a Neural Network (arXiv)", url: "https://arxiv.org/abs/1503.02531" }
  - { title: "OpenAI — Model Distillation in the API", url: "https://openai.com/index/api-model-distillation/" }
needs_verification: []
last_verified: 2026-10-30
---
Distillation（蒸餾）是把大模型的能力濃縮到小模型的訓練方法。做法是讓一個能力強但昂貴的「老師模型」產生大量回答，再用這些回答去 fine-tuning 一個較小的「學生模型」，讓學生模仿老師的表現。2015 年 Hinton 等人的論文〈Distilling the Knowledge in a Neural Network〉示範如何把多個模型組成的 ensemble 壓縮進單一模型。到了 LLM 時代，OpenAI 等廠商在 API 中提供蒸餾流程，目標是讓小模型在特定任務上接近大模型的表現，成本卻低很多。小模型的 parameter 少，inference 更快也更省。限制是學生通常只在訓練涵蓋的任務上接近老師，其他能力不會跟著變強，所以蒸餾完要用 eval 確認表現。

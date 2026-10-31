---
term: LoRA
zh: 低秩適應
aliases: [Low-Rank Adaptation, LoRA Adapter]
category: training
summary: 凍結原模型、只訓練少量外掛參數的微調方法，省記憶體也省成本。
when_to_use:
  - 想用自己的資料調整 open-weight 模型，但 GPU 資源有限
  - 需要替同一個基礎模型準備多組針對不同任務的調整
  - 下載模型時看到「LoRA」「adapter」檔案，想知道那是什麼
related:
  - { slug: fine-tuning, rel: is-a }
  - { slug: parameter, rel: uses }
  - { slug: transformer, rel: related }
  - { slug: open-weight-model, rel: related }
diagram_caption: 基礎模型的權重凍結不動，只用自己的資料訓練一組小的 LoRA 權重；它可以合併回模型，也能換成其他任務的 LoRA。
disambiguation: 物聯網常見的 LoRa（Long Range）是無線通訊技術，和這裡的 LoRA 無關，注意大小寫。
sources:
  - { title: "Hu et al. — LoRA: Low-Rank Adaptation of Large Language Models (arXiv)", url: "https://arxiv.org/pdf/2106.09685" }
  - { title: "Hugging Face — PEFT: LoRA conceptual guide", url: "https://huggingface.co/docs/peft/main/en/conceptual_guides/lora" }
needs_verification: []
last_verified: 2026-10-30
---
LoRA（Low-Rank Adaptation）是一種省資源的 fine-tuning 方法。一般微調要更新模型全部的 parameter，模型越大越吃 GPU 記憶體；LoRA 則把原本的權重凍結不動，只在旁邊加上兩個小矩陣，學習「需要改變多少」，要訓練的參數因此少很多。2021 年的原始論文指出，和完整微調 GPT-3 相比，可訓練參數可減少約一萬倍，GPU 記憶體需求約降為三分之一。訓練完的 LoRA 權重很小，可以替同一個基礎模型準備好幾組，針對不同任務切換；也能合併回原模型，執行時不增加延遲。在 Transformer 模型上，它通常只加在 attention 相關的層。想用自己的資料調整模型、又沒有大量 GPU 時，LoRA 是常被採用的選擇。

---
term: Computer Use
zh: 電腦操作
aliases: [Computer-using Agent, 電腦使用, 操作電腦的 AI]
category: agent
summary: 讓 AI 看螢幕截圖、操作滑鼠與鍵盤，像人一樣使用電腦。
when_to_use:
  - 要操作沒有 API 的舊系統或網站，例如填表、下載報表
  - 想讓 AI 跨多個應用程式完成一連串點擊與輸入
  - 評估讓 AI 直接操控電腦的安全風險
related:
  - { slug: tool-use, rel: is-a }
  - { slug: agent, rel: related }
  - { slug: multimodal, rel: uses }
  - { slug: sandbox, rel: uses }
  - { slug: prompt-injection, rel: related }
  - { slug: human-in-the-loop, rel: related }
diagram_caption: 模型看截圖決定動作、送出工具請求，由程式在隔離的虛擬機裡執行並回傳新截圖，一路重複；付款等重要步驟前讓人確認。
sources:
  - { title: "Anthropic — Computer use tool", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool" }
needs_verification: []
last_verified: 2026-10-30
---
Computer use 是讓 AI 直接操作電腦畫面的能力：模型看一張螢幕截圖，判斷下一步要點哪裡、輸入什麼，送出滑鼠或鍵盤動作，再看新的截圖，一路重複到任務完成。以 Anthropic 的 computer use 工具為例，模型不會直接連上電腦，而是發出 tool use 請求，由開發者的程式在虛擬機或容器裡執行動作並回傳截圖。它的價值在於能像人一樣操作圖形介面；缺點是比人親手操作慢，座標和工具也可能選錯。官方文件特別提醒安全風險：網頁或圖片裡的文字可能讓模型偏離你的指示，因此建議在權限最小的隔離環境執行、不給它登入資訊，並在付款或同意條款前先讓人確認。

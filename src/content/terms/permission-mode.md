---
term: Permission Mode
zh: 權限模式
aliases: [Approval Mode, Accept Edits, Bypass Permissions]
category: coding
summary: 決定 coding agent 哪些動作要先問你、哪些可以直接做的設定。
when_to_use:
  - 每個動作都要按「允許」太煩，想放寬但不想失控
  - 處理敏感專案，希望 AI 每一步都經過你同意
  - 讓 agent 在 CI 或無人看管時執行，需要事先決定規則
related:
  - { slug: harness, rel: part-of }
  - { slug: plan-mode, rel: related }
  - { slug: human-in-the-loop, rel: related }
  - { slug: sandbox, rel: related }
  - { slug: autonomy-level, rel: related }
  - { slug: hook, rel: related }
  - { slug: headless-mode, rel: related }
diagram_caption: 同一個動作在不同 permission mode 下有不同結果：從每步都問你、只准規劃，到交給分類模型審查或全部放行。
sources:
  - { title: "Claude Code Docs — Permission modes", url: "https://code.claude.com/docs/en/permission-modes" }
needs_verification: []
last_verified: 2026-10-30
---
Permission mode 是 coding agent 的權限檔位，決定它在讀檔、改檔、執行指令前要不要先問你。以 Claude Code 為例，手動模式只有讀取會自動放行，其餘都要你同意；Accept edits 讓它直接改檔案；Plan mode 只准閱讀與規劃，計畫經你核准才動手；Auto 交給另一個分類模型審查每個動作；Bypass permissions 則全部放行，官方建議只在隔離的容器或虛擬機裡使用。不管哪一種，你另外設定的禁止規則都有效。在終端機裡按 Shift+Tab 就能切換。選擇的原則很簡單：越放權，效率越高，出錯時的代價也越大。剛開始用 AI 寫程式時，先從手動或 Accept edits 起步，熟悉它的行為之後再逐步放寬，比較不會出事。

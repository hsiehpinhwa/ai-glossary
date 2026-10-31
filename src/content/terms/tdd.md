---
term: TDD
zh: 測試驅動開發
aliases: [Test-Driven Development, Red-Green-Refactor]
category: eval
summary: 先寫會失敗的測試，再寫剛好讓它通過的程式，最後整理程式碼。
when_to_use:
  - 想讓 coding agent 有明確的完成標準，而不是它自己說「改好了」
  - 需求很清楚、可以用輸入和輸出描述的功能
  - 修 bug 時先寫一個能重現問題的測試，確保之後不再發生
related:
  - { slug: unit-test, rel: uses }
  - { slug: spec-driven-development, rel: related }
  - { slug: regression, rel: related }
  - { slug: coding-agent, rel: related }
  - { slug: agent-loop, rel: related }
diagram_caption: 列好案例後，反覆跑紅、綠、重構三步：寫一個失敗的測試、寫剛好通過的程式、整理程式碼；測試越積越多，成為防止 regression 的安全網。
sources:
  - { title: "Martin Fowler — Test Driven Development", url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html" }
needs_verification: []
last_verified: 2026-10-30
---
TDD（Test-Driven Development，測試驅動開發）是先寫測試、再寫程式的開發方法，由 Kent Beck 在 1990 年代後期作為極限編程（Extreme Programming）的一部分發展出來。它不斷重複三個步驟，常被稱為紅、綠、重構：先為下一小塊功能寫一個測試，此時功能還沒寫，測試必然失敗（紅）；接著只寫剛好讓測試通過的程式（綠）；最後在測試保護下整理新舊程式碼（重構）。開始前通常會先列出要涵蓋的案例。這個老方法很適合搭配 coding agent：測試就是能自動檢查的驗收標準。你或 AI 先把預期行為寫成測試，agent 再反覆修改程式直到全部通過，比只說「幫我做好」更不容易偏離需求，也能避免它自行宣稱完成。

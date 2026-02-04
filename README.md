# Visual Span (Next.js)

線上 Demo：
https://visual-span-game.vercel.app?_vercel_share=ZGALNQD58axQX86EtMiFG21sFDcLJj08

GitHub Repo：
https://github.com/lesterli0/visual-span-game

0204新增:
- 答對自動進入下一關（數字位數 +1）
- 答錯顯示本局最高記憶位數並重置遊戲
- input / button 依 phase 動態 render

---

此為完成 React / Next.js 網路課程後的練習專案，靈感來自瞬時數字記憶遊戲。  
目前實作重點放在熟悉 React state、流程設計，以及 UI / logic 分離。

## 核心流程

定義三個 phase：

idle → showing → answering

- **idle**：等待開始（除第一次外會顯示上一輪結果）
- **showing**：顯示隨機 3 位數字 1 秒
- **answering**：使用者輸入答案並提交

提交後比較 `input` 與 `answer`，再回到 `idle` 顯示結果。

---

## 工程結構

UI 與遊戲邏輯分離：

- 核心狀態與流程抽成 custom hook：`useVisualSpanGame`
- Component 只負責 render

Hook 負責：

- phase 控制
- 隨機數生成
- timer lifecycle
- input / result 判斷與管理

目前 hook 支援注入：

- 位數長度
- 顯示時間

方便後續調整遊戲規則。

---

## 後續規劃

預計加入：

- 每次答對自動增加一位數
- 記錄使用者本局記憶上限

phase 仍維持：

idle → showing → answering

差別在 idle 時會依照上一輪是否正確，決定：

- 開新局
- 或進入更高位數挑戰

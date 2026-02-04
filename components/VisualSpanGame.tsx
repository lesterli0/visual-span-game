"use client";

import styles from "../app/page.module.css";
import { useVisualSpanGame } from "../hooks/useVisualSpanGame";

export default function VisualSpanGame() {
  const { phase, answer, input, setInput, result, startRound, submit } =
    useVisualSpanGame(3, 1000);

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Visual Span</h1>

        <section className={styles.display}>
          {phase === "showing" && <div className={styles.number}>{answer}</div>}

          {phase === "idle" && result !== null && (
            <p className={styles.number}>{result ? "✅" : "❌"}</p>
          )}
        </section>

        <section className={styles.controls}>
          <div className={styles.controlsStack}>
            <input
              className={`${styles.input} ${
                phase === "answering" ? "" : styles.inputHidden
              }`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder="輸入數字"
              disabled={phase !== "answering"}
            />

            {phase === "idle" ? (
              <button className={styles.primaryButton} onClick={startRound}>
                New Game
              </button>
            ) : phase === "answering" ? (
              <button className={styles.primaryButton} onClick={submit}>
                Submit
              </button>
            ) : (
              <button className={styles.primaryButton} disabled>
                &nbsp;
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

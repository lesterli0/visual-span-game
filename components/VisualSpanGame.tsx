"use client";

import styles from "../app/page.module.css";
import { useVisualSpanGame } from "../hooks/useVisualSpanGame";

export default function VisualSpanGame() {
  const { score, record, phase, answer, input, setInput, result, startRound, submit } =
    useVisualSpanGame(1000);

  return (
    <main className={styles.page}>
        <div className={styles.card}>
            <h1 className={styles.title}>Visual Span</h1>

            <section className={styles.display}>
                {phase === "showing" && <div className={styles.number}>{answer}</div>}

                {phase === "idle" && result !== null && (
                    <>
                        <div className={styles.idleEmoji}>
                            {result ? "✅" : "❌"}
                        </div>

                        <div className={styles.idleText}>
                            {result
                            ? `下一關為 ${score} 位數字`
                            : `您最多記憶了 ${record} 位數字`}
                        </div>
                    </>
                )}
            </section>

            <section className={styles.controls}>
                <div className={styles.controlsStack}>
                    {phase === "idle" && (
                        <button 
                            autoFocus
                            className={styles.primaryButton}
                            onClick={startRound}
                        >
                            {result ? "Next Level" : "New Game"}
                        </button>
                    )}

                    {phase === "answering" && (
                        <input
                            autoFocus
                            className={styles.input}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    submit();
                                }
                                }}
                            placeholder="輸入數字"
                        />
                    )}
                </div>
            </section>
        </div>
    </main>
  );
}

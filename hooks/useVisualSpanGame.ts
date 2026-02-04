import { useEffect, useRef, useState } from "react";

export type Phase = "idle" | "showing" | "answering";

function generateDigits(len: number) {
  return Array.from({ length: len }, () => Math.floor(Math.random() * 10)).join(
    ""
  );
}

export function useVisualSpanGame(length: number, showMs: number ) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<null | boolean>(null);

  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => clearTimer, []);

  const startRound = () => {
    clearTimer();

    const nums = generateDigits(length);
    setAnswer(nums);
    setInput("");
    setResult(null);
    setPhase("showing");

    timerRef.current = window.setTimeout(() => {
      setPhase("answering");
    }, showMs);
  };

  const submit = () => {
    setResult(input === answer);
    setPhase("idle");
  };

  return {
    phase,
    answer,
    input,
    setInput,
    result,
    startRound,
    submit,
  };
}

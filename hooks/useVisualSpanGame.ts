import { useEffect, useRef, useState } from "react";

export type Phase = "idle" | "showing" | "answering";

function generateDigits(len: number) {
    return Array.from({ length: len }, () => Math.floor(Math.random() * 10)).join("");
}

export function useVisualSpanGame(showMs: number ) {
    const [score, setScore] = useState(1);
    const [record, setRecord] = useState(0);
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

        const nums = generateDigits(score);
        setAnswer(nums);
        setInput("");
        setResult(null);
        setPhase("showing");

        timerRef.current = window.setTimeout(() => {
        setPhase("answering");
        }, (1 + score) * 350);
    };

    const submit = () => {
        if (input === answer) {
            setScore((s) => s + 1);
        } else {
            setRecord(score - 1);
            setScore(1);
        }
        setResult(input === answer);
        
        setPhase("idle");
    };

    return {
        score,
        record,
        phase,
        answer,
        input,
        setInput,
        result,
        startRound,
        submit,
    };
}

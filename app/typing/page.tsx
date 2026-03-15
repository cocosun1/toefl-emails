"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

export default function TypingPage() {
  const [text, setText] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const wordCount = countWords(text);

  const startTimer = useCallback(() => {
    if (intervalRef.current) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setElapsedSeconds((s) => s + 1);
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <main className="container typing-page">
      <div className="typing-header">
        <Link href="/" className="typing-back">
          ← 返回首页
        </Link>
        <h1 className="typing-title">打字练习</h1>
      </div>

      <div className="typing-toolbar">
        <div className="typing-timer" aria-live="polite">
          {formatTime(elapsedSeconds)}
        </div>
        <div className="typing-wordcount">
          字数：<strong>{wordCount}</strong>
        </div>
        <div className="typing-buttons">
          <button
            type="button"
            className="btn-typing btn-start"
            onClick={startTimer}
            disabled={isRunning}
          >
            开始
          </button>
          <button
            type="button"
            className="btn-typing btn-stop"
            onClick={stopTimer}
            disabled={!isRunning}
          >
            停止
          </button>
        </div>
      </div>

      <textarea
        className="typing-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="在此输入..."
        spellCheck={false}
        autoCorrect="off"
        autoCapitalize="off"
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        rows={12}
        aria-label="打字输入框"
      />
    </main>
  );
}

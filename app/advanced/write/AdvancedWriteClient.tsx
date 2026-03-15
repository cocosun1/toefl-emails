"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { AdvancedPrompt } from "@/data/advancedPrompts";

const TOTAL_SECONDS = 7 * 60; // 7 minutes

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

interface AdvancedWriteClientProps {
  prompt: AdvancedPrompt;
}

export default function AdvancedWriteClient({ prompt }: AdvancedWriteClientProps) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const wordCount = countWords(subject) + countWords(body);
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [isExpired, setIsExpired] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsExpired(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const m = Math.floor(secondsLeft / 60);
  const s = secondsLeft % 60;
  const timeDisplay = `${m}:${s.toString().padStart(2, "0")}`;

  return (
    <div className="write-page-layout advanced-write-layout">
      <aside className="write-prompt-sidebar">
        <div className="write-prompt-sticky">
          <Link href="/advanced" className="advanced-write-back">
            ← 返回高级练习
          </Link>
          <h2 className="advanced-prompt-heading">Question</h2>
          <div className="write-prompt-inline advanced-prompt-body">
            {prompt.body}
          </div>
        </div>
      </aside>
      <div className="write-page-main advanced-write-main">
        <div className="advanced-write-toolbar">
          <span
            className={`advanced-timer ${isExpired ? "advanced-timer-expired" : ""}`}
            aria-live="polite"
          >
            Time remaining: {timeDisplay}
          </span>
          <span className="advanced-wordcount">
            Words: <strong>{wordCount}</strong>
          </span>
        </div>
        <div className="advanced-write-form">
          <div className="advanced-field">
            <label className="advanced-field-label">To</label>
            <div className="advanced-field-prefilled">{prompt.recipient}</div>
          </div>
          <div className="advanced-field">
            <label className="advanced-field-label" htmlFor="advanced-subject">
              Subject
            </label>
            <input
              id="advanced-subject"
              type="text"
              className="advanced-input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter email subject"
              disabled={isExpired}
            />
          </div>
          <div className="advanced-field">
            <label className="advanced-field-label" htmlFor="advanced-body">
              Body
            </label>
            <textarea
              id="advanced-body"
              className="advanced-textarea"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Type your email body here..."
              disabled={isExpired}
              rows={14}
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

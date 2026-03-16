"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import type { AdvancedPrompt } from "@/data/advancedPrompts";

const TOTAL_SECONDS = 7 * 60; // 7 minutes

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
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
  const [overtimeSeconds, setOvertimeSeconds] = useState(0);
  const [stopwatchStopped, setStopwatchStopped] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stopwatchRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Countdown: 7 min → 0
  useEffect(() => {
    countdownRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (countdownRef.current) {
            clearInterval(countdownRef.current);
            countdownRef.current = null;
          }
          setIsExpired(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  // When time expires, start stopwatch counting up (until user stops it)
  useEffect(() => {
    if (!isExpired || stopwatchStopped) return;
    stopwatchRef.current = setInterval(() => {
      setOvertimeSeconds((n) => n + 1);
    }, 1000);
    return () => {
      if (stopwatchRef.current) clearInterval(stopwatchRef.current);
    };
  }, [isExpired, stopwatchStopped]);

  const stopStopwatch = useCallback(() => {
    if (stopwatchRef.current) {
      clearInterval(stopwatchRef.current);
      stopwatchRef.current = null;
    }
    setStopwatchStopped(true);
  }, []);

  const downloadAsText = useCallback(() => {
    const fullText = [
      "--- QUESTION ---",
      "",
      prompt.body,
      "",
      "--- YOUR EMAIL ---",
      "",
      `To: ${prompt.recipient}`,
      `Subject: ${subject}`,
      "",
      body,
    ].join("\n");
    const blob = new Blob([fullText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "advanced-practice-email.txt";
    a.click();
    URL.revokeObjectURL(url);
  }, [prompt.body, prompt.recipient, subject, body]);

  const uploadToResponseBank = useCallback(async () => {
    setUploadStatus("loading");
    try {
      const res = await fetch("/api/response-bank", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: prompt.category,
          promptBody: prompt.body,
          recipient: prompt.recipient,
          subject,
          body,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Upload failed");
      }
      setUploadStatus("success");
    } catch {
      setUploadStatus("error");
    }
  }, [prompt.category, prompt.body, prompt.recipient, subject, body]);

  const timeDisplay = formatTime(secondsLeft);
  const overtimeDisplay = formatTime(overtimeSeconds);

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
          {!isExpired ? (
            <span className="advanced-timer" aria-live="polite">
              Time remaining: {timeDisplay}
            </span>
          ) : (
            <span className={`advanced-timer advanced-timer-overtime ${stopwatchStopped ? "advanced-timer-stopped" : ""}`} aria-live="polite">
              Overtime: {overtimeDisplay}
              {stopwatchStopped && " (stopped)"}
            </span>
          )}
          {isExpired && !stopwatchStopped && (
            <button type="button" className="btn-advanced-stop" onClick={stopStopwatch}>
              Stop
            </button>
          )}
          <span className="advanced-wordcount">
            Words: <strong>{wordCount}</strong>
          </span>
          <button type="button" className="btn-advanced-download" onClick={downloadAsText}>
            Download as text
          </button>
          <button
            type="button"
            className="btn-advanced-upload"
            onClick={uploadToResponseBank}
            disabled={uploadStatus === "loading"}
          >
            {uploadStatus === "loading"
              ? "Uploading…"
              : uploadStatus === "success"
                ? "Uploaded"
                : uploadStatus === "error"
                  ? "Upload failed"
                  : "Upload to response bank"}
          </button>
          {uploadStatus === "success" && (
            <span className="advanced-upload-success" role="status">
              Saved. <Link href="/advanced/responses">View response bank</Link>
            </span>
          )}
          {uploadStatus === "error" && (
            <span className="advanced-upload-error" role="alert">
              Could not save. Try again.
            </span>
          )}
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
              rows={14}
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

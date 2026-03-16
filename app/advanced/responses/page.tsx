"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { ResponseBankEntry } from "@/types/responseBank";

const CATEGORY_LABELS: Record<string, string> = {
  ask_for_help: "Ask for help",
  invite_friend: "Invite a friend",
  invite_professional: "Invite a professional",
  propose_solution: "Propose a solution",
  wildcard: "Wildcard",
};

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function ResponseBankPage() {
  const [entries, setEntries] = useState<ResponseBankEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/response-bank")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setEntries(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!cancelled) setError("Could not load response bank.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="container response-bank-page">
      <Link href="/advanced" className="typing-back">
        ← 返回高级练习
      </Link>
      <h1 className="home-title">Response bank</h1>
      <p className="home-intro">
        查看大家上传的练习回答。Anyone can view and add responses here.
      </p>

      {loading && <p className="response-bank-status">Loading…</p>}
      {error && <p className="response-bank-error" role="alert">{error}</p>}
      {!loading && !error && entries.length === 0 && (
        <p className="response-bank-empty">No responses yet. Upload your first one from a 高级练习 writing page.</p>
      )}
      {!loading && !error && entries.length > 0 && (
        <ul className="response-bank-list">
          {entries.slice().reverse().map((entry) => (
            <li key={entry.id} className="response-bank-item">
              <button
                type="button"
                className="response-bank-item-head"
                onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                aria-expanded={expandedId === entry.id}
              >
                <span className="response-bank-item-meta">
                  {CATEGORY_LABELS[entry.category] || entry.category} · To: {entry.recipient} · {formatDate(entry.createdAt)}
                </span>
                <span className="response-bank-item-subject">{entry.subject || "(no subject)"}</span>
              </button>
              {expandedId === entry.id && (
                <div className="response-bank-item-body">
                  <div className="response-bank-block">
                    <strong>Question</strong>
                    <div className="response-bank-question">{entry.promptBody}</div>
                  </div>
                  <div className="response-bank-block">
                    <strong>To</strong> {entry.recipient}
                  </div>
                  <div className="response-bank-block">
                    <strong>Subject</strong> {entry.subject}
                  </div>
                  <div className="response-bank-block">
                    <strong>Body</strong>
                    <div className="response-bank-email-body">{entry.body}</div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getPromptById } from "@/utils/prompt-service";
import type { PracticeMode } from "@/types/prompt";

const SESSION_KEY = "toefl_email_session";
const COMPLETE_KEY = "toefl_email_complete";

interface CompletePayload {
  promptId: string;
  mode: PracticeMode;
  fullEmail: string;
  evaluation: {
    displayScore: number;
    strengthsZh: string[];
    weaknessesZh: string[];
    missingPoints: string[];
    minimalEditVersion: string;
    strongerVersion: string;
  };
}

function loadComplete(): CompletePayload | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(COMPLETE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CompletePayload;
  } catch {
    return null;
  }
}

function saveSession(promptId: string, mode: PracticeMode) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ promptId, mode }));
}

export default function CompletePage() {
  const [data, setData] = useState<CompletePayload | null>(null);
  const router = useRouter();

  useEffect(() => {
    const payload = loadComplete();
    if (!payload) {
      router.replace("/");
      return;
    }
    setData(payload);
  }, [router]);

  const handleRestartSame = (mode: PracticeMode) => {
    if (!data) return;
    saveSession(data.promptId, mode);
    router.push("/write");
  };

  const handleHome = () => {
    router.push("/");
  };

  if (!data) return <div className="container">加载中...</div>;

  const { fullEmail, evaluation, mode } = data;
  const isFullyGuided = mode === "fullyGuided";

  return (
    <main className="container">
      <h2 className="complete-title">练习完成</h2>
      <p className="home-intro" style={{ marginBottom: "1rem" }}>
        你已经完成这封邮件的写作。以下是预估分数和改进建议。
      </p>
      <div>
        <span className="score-badge">预估分数: {evaluation.displayScore} / 6</span>
      </div>
      <h3 className="section-title">你的邮件</h3>
      <pre className="email-preview">{fullEmail}</pre>

      <h3 className="section-title">做得好的地方</h3>
      <ul style={{ marginLeft: "1.5rem" }}>
        {evaluation.strengthsZh.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h3 className="section-title">需要改进的地方</h3>
      <ul style={{ marginLeft: "1.5rem" }}>
        {evaluation.weaknessesZh.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      {evaluation.missingPoints.length > 0 && (
        <>
          <h3 className="section-title">未覆盖的任务点</h3>
          <ul style={{ marginLeft: "1.5rem" }}>
            {evaluation.missingPoints.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      )}

      <h3 className="section-title"> minimal-edit 改进版</h3>
      <pre className="email-preview">{evaluation.minimalEditVersion}</pre>

      <h3 className="section-title"> stronger 版本参考</h3>
      <pre className="email-preview">{evaluation.strongerVersion}</pre>

      <div className="btn-group">
        <button className="btn-secondary" onClick={handleHome}>
          回到首页重新开始
        </button>
        {isFullyGuided ? (
          <>
            <button
              className="btn-secondary"
              onClick={() => handleRestartSame("partlyGuided")}
            >
              用部分提示重做这一题
            </button>
            <button
              className="btn-secondary"
              onClick={() => handleRestartSame("testMode")}
            >
              用模考模式重做这一题
            </button>
          </>
        ) : (
          <button className="btn-secondary" onClick={() => handleRestartSame(mode)}>
            再做一遍这一题
          </button>
        )}
      </div>
    </main>
  );
}

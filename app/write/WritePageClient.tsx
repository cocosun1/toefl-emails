"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import BlockCard from "@/components/BlockCard";
import PromptMetadata from "@/components/PromptMetadata";
import CategorySelector from "@/components/CategorySelector";
import SkeletonCard from "@/components/SkeletonCard";
import { assembleEmail } from "@/utils/email-assembly";
import { evaluateFinalEmail } from "@/utils/mock-evaluation";
import type { EmailPrompt, PracticeMode } from "@/types/prompt";
import type { ScaffoldPart } from "@/types/prompt";
import type { BlockValues } from "@/utils/email-assembly";

const SESSION_KEY = "toefl_email_session";
const COMPLETE_KEY = "toefl_email_complete";

const WRITING_BLOCK_KEYS = ["subject", "greeting", "purpose", "detail1", "detail2", "action", "closing"];

function saveSession(promptId: string, mode: PracticeMode) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ promptId, mode }));
  } catch {
    // ignore
  }
}

function saveComplete(payload: {
  promptId: string;
  mode: PracticeMode;
  fullEmail: string;
  evaluation: ReturnType<typeof evaluateFinalEmail>;
}) {
  try {
    sessionStorage.setItem(COMPLETE_KEY, JSON.stringify(payload));
  } catch {
    // ignore
  }
}

interface WritePageClientProps {
  initialPrompt: EmailPrompt | null;
  initialMode: PracticeMode | null;
  guidanceSegments?: ScaffoldPart[][];
}

export default function WritePageClient({ initialPrompt, initialMode, guidanceSegments = [] }: WritePageClientProps) {
  const [prompt, setPrompt] = useState<EmailPrompt | null>(initialPrompt);
  const [mode, setMode] = useState<PracticeMode | null>(initialMode);
  const [categoryChecked, setCategoryChecked] = useState(false);
  const [values, setValues] = useState<BlockValues>({});
  const [fullText, setFullText] = useState("");
  const [scaffoldVisible, setScaffoldVisible] = useState<Record<string, boolean>>({});
  const [timerSeconds, setTimerSeconds] = useState(600);
  const router = useRouter();

  useEffect(() => {
    if (initialPrompt?.id && initialMode) {
      saveSession(initialPrompt.id, initialMode);
    }
  }, [initialPrompt?.id, initialMode]);

  const updateBlock = useCallback((key: string, val: string) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  }, []);

  const handleSubmitGuided = () => {
    if (!prompt || !mode) return;
    const assembled = assembleEmail(prompt, values);
    const evaluation = evaluateFinalEmail(assembled, prompt);
    saveComplete({
      promptId: prompt.id,
      mode,
      fullEmail: assembled,
      evaluation,
    });
    router.push("/complete");
  };

  const handleSubmitTestMode = () => {
    if (!prompt || !mode) return;
    const evaluation = evaluateFinalEmail(fullText, prompt);
    saveComplete({
      promptId: prompt.id,
      mode,
      fullEmail: fullText,
      evaluation,
    });
    router.push("/complete");
  };

  const toggleScaffold = (key: string) => {
    setScaffoldVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    if (mode !== "testMode") return;
    const id = setInterval(() => {
      setTimerSeconds((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [mode]);

  if (!prompt || !mode) {
    return (
      <div className="container">
        <div className="no-session-card">
          <p className="no-session-message">
            请从首页选择练习模式并点击「开始练习」进入写作页。
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => router.push("/")}
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  if (mode === "testMode") {
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    return (
      <div className="write-page-layout">
        <aside className="write-prompt-sidebar">
          <div className="write-prompt-sticky">
            <p className="write-prompt-inline">{prompt.promptText}</p>
            <PromptMetadata prompt={prompt} />
            <div className="write-concatenation-preview">
              <div className="write-concatenation-label">当前邮件草稿</div>
              <pre className="write-concatenation-body">{fullText || "（尚未填写任何内容）"}</pre>
            </div>
          </div>
        </aside>
        <div className="write-page-main">
          <p className="timer">
            剩余时间: {m}:{s.toString().padStart(2, "0")}
          </p>
          <textarea
            className="full-editor"
            value={fullText}
            onChange={(e) => setFullText(e.target.value)}
            placeholder="在此输入完整邮件..."
          />
          <button className="btn-submit" onClick={handleSubmitTestMode}>
            提交并查看反馈
          </button>
        </div>
      </div>
    );
  }

  const promptContext = {
    promptText: prompt.promptText,
    requiredPoints: prompt.requiredPoints,
  };

  const writingBlocks = prompt.blocks.filter((b) => WRITING_BLOCK_KEYS.includes(b.key));
  const allBlocksComplete = writingBlocks.every((b) => {
    const v = values[b.key]?.trim();
    return !!v;
  });

  return (
    <div className="write-page-layout">
      <aside className="write-prompt-sidebar">
        <div className="write-prompt-sticky">
          <p className="write-prompt-inline">{prompt.promptText}</p>
          <PromptMetadata prompt={prompt} />
          <div className="write-concatenation-preview">
            <div className="write-concatenation-label">当前邮件草稿</div>
            <pre className="write-concatenation-body">{assembleEmail(prompt, values) || "（尚未填写任何内容）"}</pre>
          </div>
        </div>
      </aside>
      <div className="write-page-main">
        <CategorySelector
          correctCategory={prompt.category}
          onCheck={() => setCategoryChecked(true)}
        />

        {categoryChecked && (
          <>
            <SkeletonCard
              category={prompt.category}
              guidanceSegments={guidanceSegments}
              showExamples={mode === "fullyGuided"}
            />
            {writingBlocks.map((block) => (
              <BlockCard
                key={block.key}
                block={block}
                value={values[block.key] ?? ""}
                onChange={(v) => updateBlock(block.key, v)}
                promptContext={promptContext}
                showScaffold={mode === "fullyGuided" || scaffoldVisible[block.key]}
                onScaffoldVisibility={
                  mode === "partlyGuided" ? () => toggleScaffold(block.key) : undefined
                }
                variableAsPlaceholder={mode === "partlyGuided"}
              />
            ))}
            <button
              className="btn-submit"
              onClick={handleSubmitGuided}
              disabled={!allBlocksComplete}
            >
              完成并查看反馈
            </button>
          </>
        )}
      </div>
    </div>
  );
}

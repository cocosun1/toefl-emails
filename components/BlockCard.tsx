"use client";

import { useState } from "react";
import type { BlockDef } from "@/types/prompt";
import type { BlockEvaluationResult } from "@/types/evaluation";
import { evaluateBlock } from "@/utils/mock-evaluation";
import { getScaffoldParts } from "@/utils/scaffold";

interface BlockCardProps {
  block: BlockDef;
  value: string;
  onChange: (value: string) => void;
  promptContext?: { promptText: string; requiredPoints: string[] };
  showScaffold?: boolean;
  onScaffoldVisibility?: () => void;
  /** When true (partly guided mode), variable parts are shown as underscores instead of example text */
  variableAsPlaceholder?: boolean;
}

const VARIABLE_PLACEHOLDER = "________";

export default function BlockCard({
  block,
  value,
  onChange,
  promptContext,
  showScaffold = true,
  onScaffoldVisibility,
  variableAsPlaceholder = false,
}: BlockCardProps) {
  const [feedback, setFeedback] = useState<BlockEvaluationResult | null>(null);
  const scaffoldParts = getScaffoldParts(block);
  const hasScaffold = scaffoldParts.length > 0;

  const handleCheck = () => {
    const result = evaluateBlock(block, value, promptContext);
    setFeedback(result);
  };

  return (
    <div className="block-card">
      <div className="block-header">
        <span className="block-label">{block.labelZh}</span>
        {block.hintZh && <span className="block-hint">{block.hintZh}</span>}
      </div>

      {hasScaffold && (
        <div className="scaffold-row">
          {onScaffoldVisibility && !showScaffold ? (
            <button
              type="button"
              className="btn-hint"
              onClick={onScaffoldVisibility}
            >
              查看提示
            </button>
          ) : (
            <div className="scaffold">
              {scaffoldParts.map((part, i) => (
                <span
                  key={i}
                  className={
                    part.type === "template"
                      ? "scaffold-template"
                      : "scaffold-variable"
                  }
                >
                  {part.type === "template"
                    ? part.text
                    : variableAsPlaceholder
                      ? VARIABLE_PLACEHOLDER
                      : part.text}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="input-row">
        <textarea
          className="block-input"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setFeedback(null);
          }}
          placeholder={block.hintZh}
          rows={block.key === "subject" ? 1 : 3}
        />
        <button type="button" className="btn-check" onClick={handleCheck}>
          检查这一部分
        </button>
      </div>

      {feedback && (
        <div
          className={`feedback ${feedback.isAcceptable ? "success" : "issues"}`}
        >
          <p>{feedback.feedbackZh}</p>
          {feedback.issues.length > 0 && (
            <ul>
              {feedback.issues.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          )}
          {feedback.suggestedRevision && !feedback.isAcceptable && (
            <div className="suggested">
              <span>参考修改：</span>
              <span className="revision-text">{feedback.suggestedRevision}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

"use client";

import type { EmailPrompt } from "@/types/prompt";

interface PromptMetadataProps {
  prompt: EmailPrompt;
}

export default function PromptMetadata({ prompt }: PromptMetadataProps) {
  return (
    <div className="prompt-metadata">
      <div className="metadata-row">
        <span className="metadata-label">收件人</span>
        <span className="metadata-value">{prompt.recipientName}</span>
      </div>
      <div className="metadata-row">
        <span className="metadata-label">本题要求完成的任务点</span>
        <ul className="metadata-list">
          {prompt.requiredPoints.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

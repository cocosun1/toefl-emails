"use client";

import { getSkeletonForCategory } from "@/data/categorySkeletons";
import { getTemplateOnlyForCategory } from "@/utils/scaffold";
import type { ScaffoldPart } from "@/types/prompt";

interface SkeletonCardProps {
  category: string;
  /** Precomputed on server when possible; otherwise derived from category on client */
  guidanceSegments?: ScaffoldPart[][];
  /** Show example sentences (template + placeholder). false for 部分提示. */
  showExamples?: boolean;
}

export default function SkeletonCard({ category, guidanceSegments: guidanceProp, showExamples = true }: SkeletonCardProps) {
  const skeleton = getSkeletonForCategory(category);
  const guidanceSegments = guidanceProp ?? getTemplateOnlyForCategory(category);
  if (!skeleton) return null;

  return (
    <div className="skeleton-card">
      <h3 className="skeleton-title">{skeleton.titleZh}</h3>
      <p className="skeleton-intro">
        {showExamples
          ? "这类题目可以按下面的结构写，每一部分都要扣题。下方为可复用句式骨架（根据题目填入具体内容）。"
          : "这类题目可以按下面的结构写，每一部分都要扣题。"}
      </p>
      <ol className="skeleton-list">
        {skeleton.steps.map((step, i) => (
          <li key={i} className="skeleton-item">
            <span className="skeleton-label">{step.labelZh}</span>
            <span className="skeleton-desc">{step.descZh}</span>
            {showExamples && guidanceSegments[i]?.length > 0 && (
              <div className="skeleton-guidance">
                {guidanceSegments[i].map((part, j) => (
                  <span
                    key={j}
                    className={
                      part.type === "template"
                        ? "skeleton-guidance-template"
                        : "skeleton-guidance-placeholder"
                    }
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

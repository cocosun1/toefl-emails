"use client";

import { useState } from "react";
import { CATEGORY_OPTIONS } from "@/types/prompt";

interface CategorySelectorProps {
  correctCategory: string;
  onCheck: (selected: string, isCorrect: boolean) => void;
}

export default function CategorySelector({
  correctCategory,
  onCheck,
}: CategorySelectorProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const handleCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!selected) {
      setFeedback({ isCorrect: false, message: "请先选择一个题型。" });
      return;
    }
    const isCorrect = selected === correctCategory;
    const label = CATEGORY_OPTIONS.find((c) => c.value === correctCategory)?.labelZh ?? correctCategory;
    setFeedback({
      isCorrect,
      message: isCorrect
        ? "正确！你识别出了这道题的题型。"
        : "不完全正确。本题实际是「" + label + "」。",
    });
    onCheck(selected, isCorrect);
  };

  return (
    <div className="block-card category-block">
      <div className="block-header">
        <span className="block-label">第一步：识别题型</span>
        <span className="block-hint">
          先判断这道题属于哪一类，再开始写作。
        </span>
      </div>
      <div className="category-options">
        {CATEGORY_OPTIONS.map((opt) => (
          <label key={opt.value} className="category-option">
            <input
              type="radio"
              name="category"
              value={opt.value}
              checked={selected === opt.value}
              onChange={() => {
                setSelected(opt.value);
                setFeedback(null);
              }}
            />
            <span>{opt.labelZh}</span>
          </label>
        ))}
      </div>
      <button
        type="button"
        className="btn-check"
        onClick={handleCheck}
      >
        检查题型是否正确
      </button>
      {feedback && (
        <div
          className={`feedback ${feedback.isCorrect ? "success" : "issues"}`}
          style={{ marginTop: "1rem" }}
        >
          {feedback.message}
        </div>
      )}
    </div>
  );
}

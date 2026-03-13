"use client";

import type { PracticeMode } from "@/types/prompt";

const MODES: { value: PracticeMode; label: string; desc: string }[] = [
  {
    value: "fullyGuided",
    label: "全程引导",
    desc: "逐步填写，每部分有检查和反馈",
  },
  {
    value: "partlyGuided",
    label: "部分提示",
    desc: "有提示可参考，按需查看",
  },
  {
    value: "testMode",
    label: "模考模式",
    desc: "限时完成，模拟真实考试",
  },
];

interface ModeSelectorProps {
  value: PracticeMode;
  onChange: (mode: PracticeMode) => void;
}

export default function ModeSelector({ value, onChange }: ModeSelectorProps) {
  return (
    <div className="mode-selector">
      {MODES.map((m) => (
        <label key={m.value} className="mode-option">
          <input
            type="radio"
            name="mode"
            value={m.value}
            checked={value === m.value}
            onChange={() => onChange(m.value)}
          />
          <span className="mode-label">{m.label}</span>
          <span className="mode-desc">{m.desc}</span>
        </label>
      ))}
    </div>
  );
}

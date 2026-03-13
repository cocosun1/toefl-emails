"use client";

import { useState } from "react";
import ModeSelector from "@/components/ModeSelector";
import type { PracticeMode } from "@/types/prompt";

export default function HomePage() {
  const [mode, setMode] = useState<PracticeMode>("fullyGuided");

  return (
    <main className="container">
      <h1 className="home-title">TOEFL 邮件写作练习</h1>
      <p className="home-intro">
        这是一款面向中国考生的 TOEFL iBT “Write an Email” 练习工具。
        你可以选择全程引导、部分提示或模考模式，按步骤完成邮件写作练习，
        并在完成后查看预估分数和改进建议。
      </p>
      <div className="mode-selector">
        <ModeSelector value={mode} onChange={setMode} />
      </div>
      <form action="/write" method="GET" style={{ display: "inline-block" }}>
        <input type="hidden" name="start" value="1" />
        <input type="hidden" name="mode" value={mode} />
        <button type="submit" className="btn-primary">
          开始练习
        </button>
      </form>
    </main>
  );
}

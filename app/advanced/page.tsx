"use client";

import Link from "next/link";

const OPTIONS: { type: string; labelEn: string; labelZh: string }[] = [
  { type: "ask_for_help", labelEn: "Ask for help", labelZh: "请求帮助" },
  { type: "invite_friend", labelEn: "Invite a friend", labelZh: "邀请朋友" },
  { type: "invite_professional", labelEn: "Invite a professional", labelZh: "邀请专业人士" },
  { type: "propose_solution", labelEn: "Propose a solution", labelZh: "提出解决方案" },
  { type: "wildcard", labelEn: "Wildcard", labelZh: "随机题目" },
];

export default function AdvancedPage() {
  return (
    <main className="container">
      <Link href="/" className="typing-back">
        ← 返回首页
      </Link>
      <h1 className="home-title">高级练习</h1>
      <p className="home-intro">
        选择一种题目类型进入写作页面，在 7 分钟内完成邮件。随机题目将从题库中随机抽取一题。
      </p>
      <ul className="advanced-option-list">
        {OPTIONS.map((opt) => (
          <li key={opt.type}>
            <Link
              href={`/advanced/write?type=${encodeURIComponent(opt.type)}`}
              className="advanced-option"
            >
              <span className="advanced-option-en">{opt.labelEn}</span>
              <span className="advanced-option-zh">{opt.labelZh}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

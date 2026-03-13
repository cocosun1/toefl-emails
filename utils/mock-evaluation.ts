import type { BlockDef, EmailPrompt } from "@/types/prompt";
import type { BlockEvaluationResult, FinalEvaluationResult } from "@/types/evaluation";
import { internalToDisplay } from "./scoring";

/**
 * Simple heuristics for block-level mock evaluation.
 * Replace with real API call later without changing frontend contract.
 */
export function evaluateBlock(
  block: BlockDef,
  userText: string,
  promptContext?: { promptText: string; requiredPoints: string[] }
): BlockEvaluationResult {
  const trimmed = userText.trim();
  const issues: string[] = [];

  // Empty check
  if (!trimmed) {
    return {
      isAcceptable: false,
      feedbackZh: "这一部分还是空的，请先填写。",
      issues: ["内容为空"],
      suggestedRevision: block.defaultFrame || "",
    };
  }

  // Length / specificity heuristics
  if (trimmed.length < 10 && !["greeting", "closing"].includes(block.key)) {
    issues.push("内容偏短，可以再具体一些");
  }

  // Greeting / closing checks
  if (block.key === "greeting") {
    const informal = /^(hi|hey|hello|yo)\b/i.test(trimmed);
    if (informal) {
      issues.push("称呼可以更正式一些");
    }
  }
  if (block.key === "closing") {
    const hasThanks = /\b(thank|thanks|grateful|appreciate)\b/i.test(trimmed);
    if (!hasThanks) {
      issues.push("结尾可以更礼貌一些");
    }
  }

  // Basic relevance: include some prompt-related words
  if (promptContext) {
    const promptWords = promptContext.promptText
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length > 4);
    const userWords = new Set(trimmed.toLowerCase().split(/\s+/));
    const overlap = promptWords.filter((w) => userWords.has(w) || [...userWords].some((u) => u.includes(w)));
    if (promptWords.length > 0 && overlap.length === 0 && !["greeting", "closing", "to"].includes(block.key)) {
      issues.push("可以更贴近题目要求");
    }
  }

  const isAcceptable = issues.length === 0;
  const feedbackZh = isAcceptable
    ? block.feedbackTips.good || "写得不错。"
    : issues[0] || "可以再改进一下。";

  return {
    isAcceptable,
    feedbackZh,
    issues,
    suggestedRevision: issues.length > 0 ? block.defaultFrame || trimmed : trimmed,
  };
}

/**
 * Mock final email evaluation. Replace with real API later.
 */
export function evaluateFinalEmail(
  fullEmail: string,
  prompt: EmailPrompt
): FinalEvaluationResult {
  const text = fullEmail.trim();
  const requiredPoints = prompt.requiredPoints;
  const strengthsZh: string[] = [];
  const weaknessesZh: string[] = [];
  const missingPoints: string[] = [];
  let internalScore = 3; // base

  if (text.length < 50) {
    weaknessesZh.push("邮件整体过短");
    internalScore -= 1;
  } else if (text.length > 200) {
    strengthsZh.push("内容充实");
  }

  if (/dear\s/i.test(text)) {
    strengthsZh.push("称呼得体");
  } else {
    weaknessesZh.push("缺少正式称呼");
    internalScore -= 0.3;
  }

  if (/\b(thank|thanks|grateful|appreciate|sincerely|best|regards)\b/i.test(text)) {
    strengthsZh.push("结尾礼貌");
  } else {
    weaknessesZh.push("结尾可以更礼貌");
    internalScore -= 0.2;
  }

  const promptLower = prompt.promptText.toLowerCase();
  for (const point of requiredPoints) {
    const keywords = point
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter((w) => w.length > 3);
    const covered = keywords.some((k) => text.toLowerCase().includes(k) || promptLower.includes(k));
    if (covered) {
      strengthsZh.push(`覆盖了：${point}`);
    } else {
      missingPoints.push(point);
      internalScore -= 0.4;
    }
  }

  internalScore = Math.max(0, Math.min(5, internalScore));
  const displayScore = internalToDisplay(internalScore);

  // Minimal edit: fix obvious issues
  let minimalEditVersion = text;
  if (!/\bdear\s/i.test(text)) {
    minimalEditVersion = `Dear ${prompt.recipientName},\n\n` + minimalEditVersion;
  }

  const strongerVersion = prompt.samples?.band5Like ?? minimalEditVersion;

  return {
    internalScore,
    displayScore,
    strengthsZh: strengthsZh.length ? strengthsZh : ["结构完整"],
    weaknessesZh: weaknessesZh.length ? weaknessesZh : ["可以再完善一些细节"],
    missingPoints,
    minimalEditVersion,
    strongerVersion,
  };
}

/** Segment of a scaffold: template (reusable) or variable (customize) */
export interface ScaffoldPart {
  type: "template" | "variable";
  text: string;
}

/** Block-level schema from emailPrompts.ts */
export interface BlockDef {
  key: string;
  labelZh: string;
  type: "fixed" | "editable";
  defaultText: string;
  defaultFrame: string;
  hintZh: string;
  required: boolean;
  checkFocus: string[];
  feedbackTips: {
    good: string;
    tooVague: string;
    toneTooDirect: string;
    missingTaskFit: string;
  };
  /** Optional segmented scaffold for template vs variable display */
  scaffoldParts?: ScaffoldPart[];
}

/** Full prompt record from emailPrompts.ts */
export interface EmailPrompt {
  id: string;
  category: string;
  recipientType: string;
  recipientName: string;
  difficulty: string;
  promptText: string;
  requiredPoints: string[];
  ui: { introZh: string; categoryZh: string };
  modeSupport: {
    fullyGuided: boolean;
    partlyGuided: boolean;
    testMode: boolean;
  };
  blocks: BlockDef[];
  samples: { band4Like: string; band5Like: string };
  commonMistakesZh: string[];
}

export type PracticeMode = "fullyGuided" | "partlyGuided" | "testMode";

/** All possible category values for the selector */
export const CATEGORY_OPTIONS: { value: string; labelZh: string }[] = [
  { value: "ask_for_help", labelZh: "请求帮助" },
  { value: "explain_a_problem", labelZh: "解释问题" },
  { value: "make_a_suggestion", labelZh: "提出建议" },
  { value: "give_information_or_respond", labelZh: "提供信息 / 回复" },
  { value: "invite_or_propose", labelZh: "邀请 / 提议" },
];

/** Skeleton step for one part of the email */
export interface SkeletonStep {
  labelZh: string;
  descZh: string;
}

/** Skeleton (structure) for a question category */
export interface CategorySkeleton {
  titleZh: string;
  steps: SkeletonStep[];
}

const SKELETON_STEPS: Record<string, CategorySkeleton> = {
  ask_for_help: {
    titleZh: "请求帮助类邮件结构",
    steps: [
      { labelZh: "主题", descZh: "简短点明你要请求什么信息或帮助" },
      { labelZh: "称呼", descZh: "正式称呼收件人" },
      { labelZh: "写信目的", descZh: "说明你写信是为了请求帮助" },
      { labelZh: "细节1", descZh: "解释你为什么需要这份帮助 / 你的背景或兴趣" },
      { labelZh: "细节2", descZh: "补充你目前缺少的具体信息或情况" },
      { labelZh: "请求句", descZh: "礼貌、具体地提出请求" },
      { labelZh: "结尾", descZh: "感谢对方，简洁收尾" },
    ],
  },
  explain_a_problem: {
    titleZh: "解释问题类邮件结构",
    steps: [
      { labelZh: "主题", descZh: "点明与何事相关（如课程、作业、安排）" },
      { labelZh: "称呼", descZh: "正式称呼（如教授、办公室）" },
      { labelZh: "写信目的", descZh: "说明你遇到了什么问题、与何事相关" },
      { labelZh: "细节1", descZh: "解释问题本身（原因、情况）" },
      { labelZh: "细节2", descZh: "说明问题会带来什么影响" },
      { labelZh: "请求句", descZh: "礼貌询问是否可以有其他安排或解决办法" },
      { labelZh: "结尾", descZh: "感谢理解与考虑" },
    ],
  },
  make_a_suggestion: {
    titleZh: "提出建议类邮件结构",
    steps: [
      { labelZh: "主题", descZh: "点明是建议（可含大致方向）" },
      { labelZh: "称呼", descZh: "正式称呼收件人" },
      { labelZh: "写信目的", descZh: "直接提出你的建议" },
      { labelZh: "细节1", descZh: "说明为什么这个建议有帮助（理由）" },
      { labelZh: "细节2", descZh: "说明能带来什么好处、对谁有利" },
      { labelZh: "请求句", descZh: "礼貌希望对方考虑" },
      { labelZh: "结尾", descZh: "感谢阅读或考虑" },
    ],
  },
  give_information_or_respond: {
    titleZh: "提供信息 / 回复类邮件结构",
    steps: [
      { labelZh: "主题", descZh: "点明你提供的信息内容" },
      { labelZh: "称呼", descZh: "自然、得体的称呼" },
      { labelZh: "写信目的", descZh: "说明你发现了什么信息、与对方有何关系" },
      { labelZh: "细节1", descZh: "解释为什么想到对方 / 为什么适合对方" },
      { labelZh: "细节2", descZh: "补充你了解到的具体内容" },
      { labelZh: "请求句", descZh: "说明对方下一步可以做什么" },
      { labelZh: "结尾", descZh: "表示愿意继续提供帮助或自然收尾" },
    ],
  },
  invite_or_propose: {
    titleZh: "邀请 / 提议类邮件结构",
    steps: [
      { labelZh: "主题", descZh: "点明邀请或活动" },
      { labelZh: "称呼", descZh: "自然、得体的称呼" },
      { labelZh: "写信目的", descZh: "直接发出邀请" },
      { labelZh: "细节1", descZh: "解释为什么对方可能会喜欢 / 为什么想到对方" },
      { labelZh: "细节2", descZh: "说明一起参加的好处" },
      { labelZh: "请求句", descZh: "请对方回复是否参加" },
      { labelZh: "结尾", descZh: "简短、自然地结束" },
    ],
  },
};

export function getSkeletonForCategory(category: string): CategorySkeleton | null {
  return SKELETON_STEPS[category] ?? null;
}

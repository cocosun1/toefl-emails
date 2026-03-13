/** Block-level mock evaluation result */
export interface BlockEvaluationResult {
  isAcceptable: boolean;
  feedbackZh: string;
  issues: string[];
  suggestedRevision: string;
}

/** Final email mock evaluation result */
export interface FinalEvaluationResult {
  internalScore: number;
  displayScore: number;
  strengthsZh: string[];
  weaknessesZh: string[];
  missingPoints: string[];
  minimalEditVersion: string;
  strongerVersion: string;
}

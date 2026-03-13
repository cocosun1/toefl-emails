/**
 * Map internal score (0-5) to display score (1-6).
 */
export function internalToDisplay(internalScore: number): number {
  if (internalScore <= 0) return 1;
  if (internalScore >= 5) return 6;
  const mapped = 1 + (internalScore / 5) * 5;
  return Math.round(mapped * 10) / 10;
}

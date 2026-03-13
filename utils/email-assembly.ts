import type { EmailPrompt } from "@/types/prompt";

export type BlockValues = Record<string, string>;

const WRITING_BLOCK_KEYS = ["subject", "greeting", "purpose", "detail1", "detail2", "action", "closing"];

/**
 * Assemble block values into a full email string.
 * Uses prompt.recipientName for To; excludes "to" block.
 */
export function assembleEmail(prompt: EmailPrompt, values: BlockValues): string {
  const lines: string[] = [];
  lines.push(`To: ${prompt.recipientName}`);

  for (const key of WRITING_BLOCK_KEYS) {
    const text = values[key]?.trim() ?? "";
    if (!text) continue;
    if (key === "subject") {
      lines.push(`Subject: ${text}`);
    } else {
      lines.push(text);
    }
  }

  return lines.join("\n\n").trim();
}

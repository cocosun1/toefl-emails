import { emailPrompts } from "@/data/emailPrompts";
import type { EmailPrompt, PracticeMode } from "@/types/prompt";

const STORAGE_KEY = "toefl_email_seen_prompt_ids";

export function getAllPrompts(): EmailPrompt[] {
  return emailPrompts as EmailPrompt[];
}

export function getPromptById(id: string): EmailPrompt | undefined {
  return (emailPrompts as EmailPrompt[]).find((p) => p.id === id);
}

export function getFirstPromptByCategory(category: string): EmailPrompt | undefined {
  return (emailPrompts as EmailPrompt[]).find((p) => p.category === category);
}

export function getSeenIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function markPromptAsSeen(id: string): void {
  if (typeof window === "undefined") return;
  const seen = getSeenIds();
  if (!seen.includes(id)) {
    seen.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seen));
  }
}

export function selectRandomPrompt(preferUnseen = true): EmailPrompt {
  const all = getAllPrompts();
  const seen = preferUnseen ? getSeenIds() : [];

  const unseen = all.filter((p) => !seen.includes(p.id));
  const pool = unseen.length > 0 ? unseen : all;
  const idx = Math.floor(Math.random() * pool.length);
  const selected = pool[idx];
  if (selected && preferUnseen) markPromptAsSeen(selected.id);
  return selected;
}

export function isSupported(prompt: EmailPrompt, mode: PracticeMode): boolean {
  const m = prompt.modeSupport;
  return (
    (mode === "fullyGuided" && m.fullyGuided) ||
    (mode === "partlyGuided" && m.partlyGuided) ||
    (mode === "testMode" && m.testMode)
  );
}

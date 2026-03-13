const STORAGE_KEY = "toefl_email_seen_prompt_ids";

export function getSeenPromptIds(): string[] {
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

export function addSeenPromptId(id: string): void {
  if (typeof window === "undefined") return;
  const seen = getSeenPromptIds();
  if (!seen.includes(id)) {
    seen.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seen));
  }
}

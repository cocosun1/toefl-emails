import type { BlockDef, ScaffoldPart } from "@/types/prompt";
import { getFirstPromptByCategory } from "@/utils/prompt-service";

const WRITING_BLOCK_KEYS = ["subject", "greeting", "purpose", "detail1", "detail2", "action", "closing"];

/** Get scaffold segments for display. Uses scaffoldParts if present, else falls back to defaultFrame as single variable. */
export function getScaffoldParts(block: BlockDef): ScaffoldPart[] {
  if (block.scaffoldParts && block.scaffoldParts.length > 0) {
    return block.scaffoldParts;
  }
  if (block.defaultFrame) {
    return [{ type: "variable", text: block.defaultFrame }];
  }
  return [];
}

/** For skeleton card: get guidance sentence (template only, variable as "[...]") per step. */
export function getGuidanceSegmentsForCategory(category: string): ScaffoldPart[][] {
  const prompt = getFirstPromptByCategory(category);
  if (!prompt) return [];
  return WRITING_BLOCK_KEYS.map((key) => {
    const block = prompt.blocks.find((b) => b.key === key);
    if (!block) return [];
    const parts = getScaffoldParts(block);
    return parts.map((p) =>
      p.type === "template" ? p : ({ type: "variable" as const, text: "[...]" })
    );
  });
}

/** For skeleton card: full sample sentences (template + variable). */
export function getSampleSegmentsForCategory(category: string): ScaffoldPart[][] {
  const prompt = getFirstPromptByCategory(category);
  if (!prompt) return [];
  return WRITING_BLOCK_KEYS.map((key) => {
    const block = prompt.blocks.find((b) => b.key === key);
    if (!block) return [];
    return getScaffoldParts(block);
  });
}

/** For skeleton card: template parts + placeholder for variable parts. */
export function getTemplateOnlyForCategory(category: string): ScaffoldPart[][] {
  const PLACEHOLDER = "________";
  const prompt = getFirstPromptByCategory(category);
  if (!prompt) return [];
  return WRITING_BLOCK_KEYS.map((key) => {
    const block = prompt.blocks.find((b) => b.key === key);
    if (!block) return [];
    const parts = getScaffoldParts(block);
    return parts.map((p) =>
      p.type === "template" ? p : { type: "variable" as const, text: PLACEHOLDER }
    );
  });
}

import { selectRandomPrompt } from "@/utils/prompt-service";
import { getTemplateOnlyForCategory } from "@/utils/scaffold";
import WritePageClient from "./WritePageClient";
import type { PracticeMode } from "@/types/prompt";
import type { ScaffoldPart } from "@/types/prompt";

export const dynamic = "force-dynamic";

const VALID_MODES: PracticeMode[] = ["fullyGuided", "partlyGuided", "testMode"];

export default async function WritePage({
  searchParams,
}: {
  searchParams: Promise<{ start?: string; mode?: string }>;
}) {
  const params = await searchParams;
  const start = params.start;
  const modeParam = params.mode;

  let initialPrompt: Awaited<ReturnType<typeof selectRandomPrompt>> | null = null;
  let initialMode: PracticeMode | null = null;
  let guidanceSegments: ScaffoldPart[][] = [];

  if (
    start === "1" &&
    modeParam &&
    VALID_MODES.includes(modeParam as PracticeMode)
  ) {
    try {
      initialPrompt = selectRandomPrompt(true);
      initialMode = modeParam as PracticeMode;
      if (initialPrompt)
        guidanceSegments = getTemplateOnlyForCategory(initialPrompt.category);
    } catch {
      // leave null, client will show "go to home"
    }
  }

  return (
    <WritePageClient
      initialPrompt={initialPrompt}
      initialMode={initialMode}
      guidanceSegments={guidanceSegments}
    />
  );
}

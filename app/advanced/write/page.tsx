import { redirect } from "next/navigation";
import AdvancedWriteClient from "./AdvancedWriteClient";
import {
  getRandomAdvancedPrompt,
  ADVANCED_CATEGORIES,
  type AdvancedCategory,
} from "@/data/advancedPrompts";

const VALID_TYPES = [
  "ask_for_help",
  "invite_friend",
  "invite_professional",
  "propose_solution",
  "wildcard",
] as const;

export default async function AdvancedWritePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const typeParam = params.type;

  if (!typeParam || !VALID_TYPES.includes(typeParam as (typeof VALID_TYPES)[number])) {
    redirect("/advanced");
  }

  const category: AdvancedCategory | undefined =
    typeParam === "wildcard"
      ? undefined
      : (typeParam as AdvancedCategory);

  if (category && !ADVANCED_CATEGORIES.includes(category)) {
    redirect("/advanced");
  }

  const prompt = getRandomAdvancedPrompt(category);

  return <AdvancedWriteClient prompt={prompt} />;
}

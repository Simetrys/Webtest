import { TestDefinition } from "./types";
import { egenteto_test } from "./egenteto_test";
import { love_quiz } from "./love_quiz";
import { HSP_test } from "./HSP_test";

const registry: Record<string, TestDefinition> = {
  [egenteto_test.slug]: egenteto_test,
  [love_quiz.slug]: love_quiz,
  [HSP_test.slug]: HSP_test,
  
};

export function getTest(slug: string) {
  return registry[slug];
}
export function listTests(): TestDefinition[] {
  return Object.values(registry);
}
export function groupByCategory() {
  const map = new Map<string, TestDefinition[]>();
  for (const t of listTests()) {
    if (!map.has(t.category)) map.set(t.category, []);
    map.get(t.category)!.push(t);
  }
  return map;
}
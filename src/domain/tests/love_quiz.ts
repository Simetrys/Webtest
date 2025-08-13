import { TestDefinition } from "./types";

const options = [
  { label: "예", value: 1 },
  { label: "아니오", value: 0 },
];

export const love_quiz: TestDefinition = {
  slug: "love_quiz",
  title: "연애 성향 테스트",
  summary: "10문항으로 알아보는 연애 성향",
  cover: "/placeholder/love.jpg",
  category: "연애",
  questions: Array.from({ length: 10 }).map((_, i) => ({
    id: `q${i + 1}`,
    text: `연애 질문 ${i + 1}`,
    options,
  })),
  computeResult(answers) {
    const score = Object.values(answers).reduce((a, b) => a + (b ?? 0), 0);
    const level = score >= 7 ? "적극적" : score >= 4 ? "중립" : "소극적";
    return { score, level, desc: "점수 높을수록 적극적 성향" };
  },
};
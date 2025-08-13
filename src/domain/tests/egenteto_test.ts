import { TestDefinition } from "./types";

const options = [
  { label: "예", value: 1 },
  { label: "아니오", value: 0 },
];

export const egenteto_test: TestDefinition = {
  slug: "egenteto_test",
  title: "Egenteto 테스트",
  summary: "예/아니오 10문항으로 성향을 간단히 확인해요.",
  cover: "/placeholder/egenteto.jpg",
  category: "성격",
  intro: "2지선다 10문항입니다.",
  questions: Array.from({ length: 10 }).map((_, i) => ({
    id: `q${i + 1}`,
    text: `질문 ${i + 1} — 예/아니오로 답해주세요.`,
    options,
  })),
  computeResult(answers) {
    const score = Object.values(answers).reduce((a, b) => a + (b ?? 0), 0);
    let level = "매우 낮음";
    if (score >= 9) level = "매우 높음";
    else if (score >= 7) level = "높음";
    else if (score >= 5) level = "보통";
    else if (score >= 3) level = "낮음";
    return { score, level, desc: "예/아니오 점수 누적 기준" };
  },
};
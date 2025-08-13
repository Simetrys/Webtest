import { TestDefinition } from "./types";

const options = [
  { label: "그렇다", value: 1 },
  { label: "아니다", value: 0 },
];

export const HSP_test: TestDefinition = {
  slug: "HSP_test",
  title: "HSP(민감도) 테스트",
  summary: "나도 민감도를 알아보자",
  cover: "/placeholder/HSP.jpg",
  category: "기타",
  questions: [
  {
    id: "q1",
    text: "나는 주위에 있는 미묘한 것들을 인식하는 것 같다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q2",
    text: "나는 다른 사람들의 기분에 영향을 받는다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q3",
    text: "나는 통증에 매우 민감하다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q4",
    text: "나는 바쁘게 보낸 날이면 침대, 어두운 방, 또는 혼자 있을 수 있는 장소로 숨어 자극을 진정시킬 필요가 있다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q5",
    text: "나는 카페인에 특히 민감하다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q6",
    text: "밝은 빛, 강한 냄새, 사이렌 소리 같은 것들로 쉽게 피곤해진다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q7",
    text: "나는 풍요롭고 복잡한 내면 세계를 지니고 있다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q8",
    text: "나는 큰 소리에 불편함을 느낀다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q9",
    text: "나는 미술이나 음악에 깊은 감동을 받는다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q10",
    text: "나는 양심적인 사람이다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q11",
    text: "나는 깜짝 놀라는 일이 자주 있다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q12",
    text: "짧은 시간 안에 많은 일을 해야 할 때 나는 당황한다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q13",
    text: "사람들이 불편해할 때 어떻게 하면 좀 더 편안하게 해줄 수 있는지 알고 있다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q14",
    text: "사람들이 한 번에 너무 많은 것을 요구하면 나는 짜증이 난다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q15",
    text: "실수를 저지르거나 뭔가를 잊지 않으려고 노력한다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q16",
    text: "나는 폭력적인 영화와 TV 장면을 애써 피한다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q17",
    text: "주변에서 많은 일이 일어나고 있을 때 나는 긴장한다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q18",
    text: "배가 아주 고프면 강한 내부 반응이 일어나 주의 집중이 안 되고 기분도 저하된다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q19",
    text: "생활의 변화에 의해 나는 쉽게 동요된다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q20",
    text: "섬세하고 미묘한 향기, 맛, 소리, 예술작품을 감상하고 즐긴다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q21",
    text: "내 생활을 정돈하여 소란스럽거나 당황스러운 상황을 피하려 한다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q22",
    text: "경쟁을 하거나 누군가 지켜보는 상황에서 나는 불안하거나 소심해져 평소보다 훨씬 못한다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  {
    id: "q23",
    text: "어렸을 때 부모님과 선생님들이 나를 민감하거나 숫기가 없다고 생각했다.",
    options: [
      { label: "예", value: 1 },
      { label: "아니오", value: 0 },
    ],
  },
  ],
  computeResult(answers) {
    const score = Object.values(answers).reduce((a, b) => a + (b ?? 0), 0);
    const level = score >= 7 ? "적극적" : score >= 4 ? "중립" : "소극적";
    return { score, level, desc: "점수 높을수록 적극적 성향" };
  },
};
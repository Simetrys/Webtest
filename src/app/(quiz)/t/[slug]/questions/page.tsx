// src/app/(quiz)/t/[slug]/questions/page.tsx
import { getTest } from "../../../../../domain/tests";
import { notFound } from "next/navigation";
import QuestionStepper2 from "../../../../../components/quiz/QuestionStepper2"; // ↔ 별칭 없을 때

export default async function QuestionsPage(
  props: { params: Promise<{ slug: string }> }   // ← 이 프로젝트는 Promise params
) {
  const { slug } = await props.params;
  const test = getTest(slug);
  if (!test) notFound();

  return <QuestionStepper2 slug={test.slug} questions={test.questions} />;
}

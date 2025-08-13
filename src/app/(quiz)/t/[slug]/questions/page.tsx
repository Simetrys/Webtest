import { getTest } from "../../../../../domain/tests";
import { notFound } from "next/navigation";
// 상대경로 사용 (별칭 설정 안 되어도 안전)
import QuestionStepper from "../../../../../components/quiz/QuestionStepper";

export default function QuestionsPage({ params }: { params: { slug: string } }) {
  const test = getTest(params.slug);
  if (!test) notFound();
  return <QuestionStepper slug={test.slug} questions={test.questions} />;
}
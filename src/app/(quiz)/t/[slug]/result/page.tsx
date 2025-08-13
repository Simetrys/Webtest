import { getTest } from "../../../../../domain/tests";
import { notFound } from "next/navigation";
import ResultView from "../../../../../components/quiz/ResultView";

export default function ResultPage({
  params, searchParams,
}: { params: { slug: string }, searchParams: Record<string, string | string[] | undefined> }) {
  const test = getTest(params.slug);
  if (!test) notFound();
  return <ResultView test={test} searchParams={searchParams} />;
}
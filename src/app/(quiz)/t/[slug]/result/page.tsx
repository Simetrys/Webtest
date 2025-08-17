// src/app/(quiz)/t/[slug]/result/page.tsx
import { getTest } from "../../../../../domain/tests";
import { notFound } from "next/navigation";
import ResultView from "../../../../../components/quiz/ResultView";

type Search = Record<string, string | string[] | undefined>;

export default async function ResultPage(
  props: {
    params: Promise<{ slug: string }>;            // ✅ Promise
    searchParams: Promise<Search>;                // ✅ Promise
  }
) {
  const { slug } = await props.params;            // ✅ await
  const searchParams = await props.searchParams;  // ✅ await

  const test = getTest(slug);
  if (!test) notFound();

  return <ResultView test={test} searchParams={searchParams} />;
}
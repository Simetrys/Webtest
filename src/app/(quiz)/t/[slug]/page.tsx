import { getTest } from "../../../../domain/tests";
import { notFound } from "next/navigation";
import StartCard from "../../../../components/quiz/StartCard";

export default async function StartPage(
  props: { params: Promise<{ slug: string }> }   // ★ Promise 타입
) {
  const { slug } = await props.params;           // ★ await
  const test = getTest(slug);
  if (!test) notFound();

  return <StartCard slug={test.slug} title={test.title} intro={test.intro} />;
}

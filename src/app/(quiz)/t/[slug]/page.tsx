import { getTest } from "../../../../domain/tests";
import { notFound } from "next/navigation";
import StartCard from "../../../../components/quiz/StartCard";

export default function StartPage({ params }: { params: { slug: string } }) {
  const test = getTest(params.slug);
  if (!test) notFound();
  return <StartCard slug={test.slug} title={test.title} intro={test.intro} />;
}
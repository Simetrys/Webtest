import { ReactNode } from "react";
import { getTest } from "../../../../domain/tests";
import { notFound } from "next/navigation";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }    // ★ Promise 타입
) {
  const { slug } = await props.params;            // ★ await
  const test = getTest(slug);
  return test ? { title: test.title } : {};
}

export default async function TestLayout({
  children,
  params,                                         // Next가 Promise를 넣어줌
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;              // ★ Promise 타입
}) {
  const { slug } = await params;                  // ★ await
  const test = getTest(slug);
  if (!test) notFound();
  return <div>{children}</div>;
}

// src/app/(quiz)/t/[slug]/layout.tsx
import { ReactNode } from "react";
import { getTest } from "../../../../domain/tests";
import { notFound } from "next/navigation";

// ✅ named export (OK)
export function generateMetadata({ params }: { params: { slug: string } }) {
  const test = getTest(params.slug);
  if (!test) return {};
  return { title: test.title };
}

// ✅ default export (단 1회만!)
export default function TestLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string };
}) {
  const test = getTest(params.slug);
  if (!test) notFound();

  return (
    <div>
      {/* 필요하면 공통 헤더/푸터 */}
      {children}
    </div>
  );
}
// src/components/quiz/QuestionStepper2.tsx
"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

type Option = { label: string; value: number };
type Question = { id: string; text: string; options: Option[] };

export default function QuestionStepper2({
  slug,
  questions,
}: {
  slug: string;
  questions: Question[];
}) {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const q = questions[idx];
  const total = questions.length;
  const progress = useMemo(() => Math.round(((idx + 1) / total) * 100), [idx, total]);

  // 2지선다 전용: 왼쪽/오른쪽 키, 1/2 키로 답변
  const handleChoose = useCallback((val: number) => {
    setAnswers(a => ({ ...a, [q.id]: val }));
    // 다음으로 자동 진행
    setTimeout(() => {
      if (idx < total - 1) setIdx(i => i + 1);
      else {
        const params = new URLSearchParams();
        const all = { ...answers, [q.id]: val };
        Object.keys(all).forEach(k => params.set(k, String(all[k])));
        router.push(`/t/${slug}/result?${params.toString()}`);
      }
    }, 80);
  }, [answers, idx, q.id, router, slug, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "1") handleChoose(q.options[0]?.value ?? 0);
      if (e.key === "ArrowRight" || e.key === "2") handleChoose(q.options[1]?.value ?? 0);
      if (e.key === "Backspace") setIdx(i => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleChoose, q.options]);

  return (
    <main style={{ maxWidth: 720, margin: "48px auto", padding: 16, fontFamily: "ui-sans-serif" }}>
      {/* 진행바 */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontWeight: 700 }}>질문 {idx + 1} / {total}</span>
          <span style={{ opacity: 0.8 }}>{progress}%</span>
        </div>
        <div style={{ height: 8, background: "#f2f2f2", borderRadius: 999 }}>
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              borderRadius: 999,
              background: "#222",
              transition: "width .2s ease",
            }}
          />
        </div>
      </div>

      {/* 질문 */}
      <section style={{ padding: "16px 18px", border: "1px solid #eee", borderRadius: 12, marginBottom: 16 }}>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{q.text}</div>

        {/* 두 개 큰 버튼 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {q.options.slice(0, 2).map((opt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleChoose(opt.value)}
              style={{
                padding: "16px",
                border: "1px solid #ddd",
                borderRadius: 12,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              {opt.label}
              
            </button>
          ))}
        </div>
      </section>

      {/* 하단 네비 */}
      <div style={{ display: "flex", gap: 10 }}>
        <button
          type="button"
          onClick={() => setIdx(i => Math.max(0, i - 1))}
          disabled={idx === 0}
          style={{
            padding: "10px 14px",
            border: "1px solid #ddd",
            borderRadius: 8,
            opacity: idx === 0 ? 0.6 : 1,
            cursor: idx === 0 ? "not-allowed" : "pointer",
          }}
        >
          이전
        </button>
        
      </div>
    </main>
  );
}
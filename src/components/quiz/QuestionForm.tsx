"use client";
import { useMemo } from "react";
import type { Question } from "../../domain/tests/types";

export default function QuestionForm({ slug, questions }: {
  slug: string; questions: Question[];
}) {
  const required = useMemo(() => new Set(questions.map(q => q.id)), [questions]);

  return (
    <main style={{maxWidth: 800, margin: "48px auto", padding: 16, fontFamily: "ui-sans-serif"}}>
      <h1 style={{fontSize: 24, fontWeight: 800, marginBottom: 8}}>질문 {questions.length}개</h1>
      <form method="GET" action={`/t/${slug}/result`}>
        <ol style={{listStyle:"decimal", paddingLeft: 20, display:"grid", gap: 16}}>
          {questions.map((q) => (
            <li key={q.id} style={{padding:"14px 16px", border:"1px solid #eee", borderRadius: 10}}>
              <div style={{fontWeight:600, marginBottom: 10}}>{q.text}</div>
              <div style={{display:"grid", gap:6}}>
                {q.options.map(opt => {
                  const id = `${q.id}-${opt.value}`;
                  return (
                    <label key={id} htmlFor={id} style={{display:"flex", gap:8, alignItems:"center"}}>
                      <input id={id} type="radio" name={q.id} value={opt.value}
                        required={required.has(q.id)} />
                      <span>{opt.label}</span>
                    </label>
                  );
                })}
              </div>
            </li>
          ))}
        </ol>
        <div style={{display:"flex", gap:10, marginTop: 20}}>
          <a href={`/t/${slug}`} style={{padding:"10px 14px", border:"1px solid #ddd", borderRadius: 8}}>이전</a>
          <button type="submit" style={{padding:"10px 14px", border:"1px solid #ddd", borderRadius: 8}}>
            결과 보기
          </button>
        </div>
      </form>
    </main>
  );
}
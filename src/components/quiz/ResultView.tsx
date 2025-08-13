import type { Question, TestDefinition } from "../../domain/tests/types.tsx";

function parseAnswers(questions: Question[], searchParams: Record<string, string | string[] | undefined>) {
  const answers: Record<string, number> = {};
  for (const q of questions) {
    const raw = searchParams[q.id];
    const v = Array.isArray(raw) ? raw[0] : raw;
    const n = Number(v);
    if (!Number.isNaN(n)) answers[q.id] = n;
  }
  return answers;
}

export default function ResultView({ test, searchParams }: {
  test: TestDefinition;
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const answers = parseAnswers(test.questions, searchParams);
  const result = test.computeResult(answers);

  return (
    <main style={{maxWidth: 800, margin:"48px auto", padding:16, fontFamily:"ui-sans-serif"}}>
      <h1 style={{fontSize:24, fontWeight:800, marginBottom:8}}>{test.title} 결과</h1>
      <section style={{padding:16, border:"1px solid #eee", borderRadius:10, marginBottom:16}}>
        <div><b>총점:</b> {result.score}</div>
        <div><b>레벨:</b> {result.level}</div>
        {result.desc && <div style={{marginTop:8}}>{result.desc}</div>}
      </section>
      <h2 style={{fontWeight:700, marginBottom:10}}>내 답변</h2>
      <ul style={{display:"grid", gap:8, listStyle:"none", padding:0, margin:0}}>
        {test.questions.map((q) => {
          const v = (searchParams[q.id] ?? "-");
          const val = Array.isArray(v) ? v[0] : v;
          return (
            <li key={q.id} style={{padding:"10px 12px", border:"1px solid #f0f0f0", borderRadius:8}}>
              <div style={{fontWeight:600, marginBottom:4}}>{q.text}</div>
              <div>선택: {String(val)}</div>
            </li>
          );
        })}
      </ul>
      <div style={{display:"flex", gap:10, marginTop:20}}>
        <a href={`/t/${test.slug}/questions`} style={{padding:"10px 14px", border:"1px solid #ddd", borderRadius:8}}>
          다시 하기
        </a>
        <a href={`/t/${test.slug}`} style={{padding:"10px 14px", border:"1px solid #ddd", borderRadius:8}}>
          시작으로
        </a>
      </div>
    </main>
  );
}
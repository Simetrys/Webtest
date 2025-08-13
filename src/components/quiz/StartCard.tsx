import Link from "next/link";

export default function StartCard({ slug, title, intro }: {
  slug: string; title: string; intro?: string;
}) {
  return (
    <main style={{maxWidth: 720, margin: "48px auto", padding: 16, fontFamily: "ui-sans-serif"}}>
      <h1 style={{fontSize: 28, fontWeight: 800}}>{title}</h1>
      {intro && <p style={{opacity:0.8, marginTop: 8}}>{intro}</p>}
      <Link href={`/t/${slug}/questions`}
        style={{display:"inline-block", marginTop: 24, padding:"12px 16px",
                border:"1px solid #ddd", borderRadius: 10}}>
        시작하기
      </Link>
    </main>
  );
}
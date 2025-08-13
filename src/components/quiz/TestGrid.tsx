"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Card = {
  slug: string;
  title: string;
  summary?: string;
  cover?: string;
};

export default function TestGrid({ items }: { items: Card[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter(it =>
      it.title.toLowerCase().includes(s) ||
      (it.summary ?? "").toLowerCase().includes(s) ||
      it.slug.toLowerCase().includes(s)
    );
  }, [q, items]);

  return (
    <main style={{maxWidth: 1040, margin:"48px auto", fontFamily:"ui-sans-serif", padding: 16}}>
      <h1 style={{fontSize: 28, fontWeight: 900, letterSpacing: -0.4}}>테스트 선택</h1>

      <div style={{marginTop: 16, marginBottom: 20}}>
        <input
          placeholder="검색: 제목/설명/슬러그"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{
            width: "100%", padding: "12px 14px", border: "1px solid #ddd",
            borderRadius: 10, outline: "none"
          }}
        />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 16
      }}>
        {filtered.map((t) => (
          <Link
            key={t.slug}
            href={`/t/${t.slug}`}
            style={{
              display: "block",
              border: "1px solid #eee",
              borderRadius: 12,
              overflow: "hidden",
              textDecoration: "none",
              color: "inherit",
              transition: "transform .06s ease"
            }}
          >
            <div style={{height: 140, background:"#fafafa", display:"grid", placeItems:"center"}}>
              {t.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.cover} alt="" style={{objectFit:"cover", width:"100%", height:"100%"}} />
              ) : (
                <div style={{opacity:0.5, fontSize:12}}>No Cover</div>
              )}
            </div>
            <div style={{padding: 12}}>
              <div style={{fontWeight: 700, marginBottom: 6}}>{t.title}</div>
              {t.summary && <div style={{opacity:0.8, fontSize: 13}}>{t.summary}</div>}
              <div style={{marginTop:10, fontSize:12, opacity:0.6}}>/t/{t.slug}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
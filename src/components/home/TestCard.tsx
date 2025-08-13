import Link from "next/link";

// 모바일 친화 카드 (썸네일 + 텍스트)
export default function TestCard({
  slug, title, summary, cover,
}: { slug: string; title: string; summary?: string; cover?: string; }) {
  return (
    <Link
      href={`/t/${slug}`}
      style={{
        display: "grid",
        gridTemplateColumns: "96px 1fr",
        gap: 12,
        padding: 12,
        border: "1px solid #eee",
        borderRadius: 12,
        textDecoration: "none",
        color: "inherit",
        background: "#fff",
      }}
    >
      <div style={{ width: 96, height: 96, background: "#fafafa", borderRadius: 10, overflow: "hidden" }}>
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cover} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : null}
      </div>
      <div style={{ alignSelf: "center" }}>
        <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{title}</div>
        {summary && <div style={{ fontSize: 13, opacity: 0.8 }}>{summary}</div>}
      </div>
    </Link>
  );
}
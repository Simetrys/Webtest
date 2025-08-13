import TestCard from "./TestCard";
import type { TestDefinition } from "../../domain/tests/types";

export default function CategorySection({
  title, items,
}: { title: string; items: TestDefinition[] }) {
  return (
    <section style={{ padding: "16px 12px" }}>
      <h2 style={{ fontWeight: 900, fontSize: 18, margin: "6px 0 12px 2px" }}>{title}</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {items.map(t => (
          <TestCard key={t.slug} slug={t.slug} title={t.title} summary={t.summary} cover={t.cover} />
        ))}
      </div>
    </section>
  );
}
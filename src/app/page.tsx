import MobileShell from "../components/ui/MobileShell";
import Banner from "../components/home/Banner";
import CategorySection from "../components/home/CategorySection";
import { groupByCategory } from "../domain/tests";

export default function HomePage() {
  const map = groupByCategory();

  // 카테고리 노출 순서 지정(원하면 여기서 순서 컨트롤)
  const ordered = ["연애", "성격", "직무", "기타"];
  const categories = [
    ...ordered.filter(c => map.has(c)).map(c => [c, map.get(c)!] as const),
    ...Array.from(map.entries()).filter(([k]) => !ordered.includes(k)),
  ];

  return (
    <MobileShell>
      <Banner src="/placeholder/banner.jpg" />
      {categories.map(([title, items]) => (
        <CategorySection key={title} title={title} items={items} />
      ))}
    </MobileShell>
  );
}
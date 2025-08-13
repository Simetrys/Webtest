import { ReactNode } from "react";

export default function MobileShell({ children }: { children: ReactNode }) {
  // 모바일 우선: 최대 480폭으로 중앙 정렬
  return (
    <div style={{ display: "grid", placeItems: "start", minHeight: "100svh" }}>
      <div style={{ width: "100%", maxWidth: 480, margin: "0 auto" }}>
        {children}
      </div>
    </div>
  );
}
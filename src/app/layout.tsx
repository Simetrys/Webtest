import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "모바일 테스트",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  description: "모바일 전용 테스트 모음",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={{ background: "#f7f7f8" }}>
        <header style={{
          position: "sticky", top: 0, zIndex: 10, background: "#fff",
          borderBottom: "1px solid #eee", padding: "10px 12px"
        }}>
          <Link href="/" style={{ fontWeight: 900, letterSpacing: -0.3 }}>My Mobile Tests</Link>
        </header>
        {children}
        <footer style={{ padding: 16, fontSize: 12, opacity: 0.6, textAlign: "center" }}>
          © {new Date().getFullYear()} My Tests
        </footer>
      </body>
    </html>
  );
}
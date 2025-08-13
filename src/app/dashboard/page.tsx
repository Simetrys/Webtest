import { auth, signOut } from "../../auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login"); // 원하면 보호 느낌으로 리다이렉트

  return (
    <main style={{ maxWidth: 640, margin: "64px auto", fontFamily: "ui-sans-serif" }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>대시보드</h1>
      <pre style={{ background: "#fafafa", padding: 12, borderRadius: 8, marginBottom: 16 }}>
        {JSON.stringify(session, null, 2)}
      </pre>

      <form action={async () => { "use server"; await signOut({ redirectTo: "/login" }); }}>
        <button style={{ padding: "10px 14px", border: "1px solid #ddd", borderRadius: 8 }}>
          로그아웃
        </button>
      </form>
    </main>
  );
}
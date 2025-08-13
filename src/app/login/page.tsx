import { auth, signIn } from "../../auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/dashboard"); // 이미 로그인 상태면 대시보드로

  return (
    <main style={{ maxWidth: 420, margin: "64px auto", fontFamily: "ui-sans-serif" }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>로그인</h1>

      <form action={async () => { "use server"; 
        await signIn("kakao", { redirectTo: "/dashboard" }); // ✅ 로그인 후 리다이렉트
      }}>
        <button style={{ padding: "12px 16px", border: "1px solid #ddd", borderRadius: 8 }}>
          카카오로 로그인
        </button>
      </form>
    </main>
  );
}
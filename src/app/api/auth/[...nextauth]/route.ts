// src/app/api/auth/[...nextauth]/route.ts
export const runtime = "nodejs";

import { handlers } from "../../../../auth";

// ❌ 이전: export { handlers as GET, handlers as POST } from "../../../../auth";
// ✅ 수정: handlers 안의 GET/POST "함수"를 꺼내서 export
export const { GET, POST } = handlers;
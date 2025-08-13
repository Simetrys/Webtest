export type Option = { label: string; value: number };
export type Question = { id: string; text: string; options: Option[] };

export type TestDefinition = {
  slug: string;
  title: string;
  intro?: string;
  summary?: string;
  cover?: string;
  /** 홈 분류용 */
  category: string;              // ← 추가: "연애", "성격", "직무" 등
  questions: Question[];
  computeResult: (answers: Record<string, number>) => {
    score: number;
    level: string;
    desc?: string;
    extra?: Record<string, unknown>;
  };
};
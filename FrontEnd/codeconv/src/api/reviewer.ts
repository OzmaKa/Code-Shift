// frontend/src/api/reviewer.ts

export interface ReviewResult {
  score: number;
  issues: string[];
  suggestion: string;
  approved: boolean;
}

export async function reviewFetch(
  language: string,
  code: string
): Promise<ReviewResult> {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/review/review`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language, code }),
    }
  );

  if (!response.ok) {
    throw new Error("Review request failed");
  }

  const data = await response.json();
  return data as ReviewResult;
}
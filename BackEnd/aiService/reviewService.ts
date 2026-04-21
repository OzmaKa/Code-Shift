import { ReviewResult, ReviewSchema } from "../Schema/reviewSchema";

export const reviewCode = async (
  code: string,
  language: string
): Promise<ReviewResult> => {
  const apiKey = process.env.COHERE_API_KEY!;
  const response = await fetch("https://api.cohere.com/v2/chat", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command-r-plus-08-2024",
      messages: [
        {
          role: "system",
          content: `You are a code reviewer. Review the code and return ONLY valid JSON with this exact structure:
{
  "score": number between 1-10,
  "issues": array of strings describing problems,
  "suggestion": string with improvement advice,
  "approved": boolean, true if score >= 7
}
No markdown. No explanation. JSON only.
If the input is not valid code, return: { "error": "Invalid code input" }`,
        },
        {
          role: "user",
          content: `Review this ${language} code:\n\n${code}`,
        },
      ],
    }),
  });

  const data = await response.json();
  const raw = data.message.content[0].text; // extract text (Cohere's structure)
  const clean = raw.replace(/```json|```/g, "").trim(); // strip markdown backticks
  const parsed = JSON.parse(clean); // string → JS object
  if (parsed.error) {
    throw new Error(parsed.error);
  }
  return ReviewSchema.parse(parsed); // validate with Zod → returns ReviewResult
};

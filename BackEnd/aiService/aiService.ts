export const streamTranslateCode = async (
  from: string,
  to: string,
  code: string,
  onChunk: (chunk: string) => void
): Promise<void> => {
  const apiKey = process.env.COHERE_API_KEY!;

  const response = await fetch("https://api.cohere.com/v2/chat", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command-r-plus-08-2024",
      stream: true,
      messages: [
        {
          role: "system",
          content: `You are a code conversion engine.
Your only job is to convert code from one programming language to another.
Rules:
- Return only the converted code
- No explanations
- No markdown formatting
- No code blocks or backticks
- Preserve exact logic and behavior
- If the input is not valid code, return: ERROR: Invalid code input`,
        },
        {
          role: "user",
          content: `Convert this code from ${from} to ${to}:\n\n${code}`,
        },
      ],
    }),
  });

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    const lines = chunk.split("\n").filter(line => line.trim() !== "");

    for (const line of lines) {
      if (line.startsWith("data:")) {
        try {
          const json = JSON.parse(line.slice(5).trim());
          const text = json?.delta?.message?.content?.text;
          if (text) onChunk(text);
        } catch {
          // skip malformed chunks
        }
      }
    }
  }
};
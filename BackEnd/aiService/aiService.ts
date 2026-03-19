export const translateCode = async (
  from: string,
  to: string,
  code: string,
): Promise<string> => {
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

  const data = await response.json();
  return data.message.content[0].text;
};

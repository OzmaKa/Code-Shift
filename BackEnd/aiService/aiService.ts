export const translateCode = async (from: string, to: string, code: string): Promise<string> => {
    
    const apiKey = process.env.COHERE_API_KEY!;

    const response = await fetch(
        "https://api.cohere.com/v2/chat",
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "command-r-plus-08-2024",
                messages: [
                    {
                        role: "user",
                        content: `Convert this code from ${from} to ${to}.
                                  Return only the converted code with no explanation,
                                  no markdown, no code blocks.
                                  Preserve the exact same logic and behavior.
                                  Code:
                                  ${code}`
                    }
                ]
            })
        }
    );

    const data = await response.json();
    return data.message.content[0].text;
}

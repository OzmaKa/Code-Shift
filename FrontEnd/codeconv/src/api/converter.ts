export async function codefetch(
  from: string,
  to: string,
  code: string,
  onChunk: (chunk: string) => void
): Promise<void> {
  //post to the backend
  const response = await fetch(`${import.meta.env.VITE_API_URL}/convert/converter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, code })
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
          if (json.done) return;
          if (json.chunk) onChunk(json.chunk);
        } catch {
          // skip malformed lines
        }
      }
    }
  }
}

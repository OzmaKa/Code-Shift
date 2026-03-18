export async function codefetch(from: string, to: string, code: string) {
  //post to the backend
  const response = await fetch(`${import.meta.env.VITE_API_URL}/convert/converter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, code })
  });
  const data = await response.json();
  return data.result;
}

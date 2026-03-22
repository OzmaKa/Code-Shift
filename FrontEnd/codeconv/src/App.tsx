import { useState } from "react";
import { Cinout } from "./components/Codeiinout";
import { ConvB } from "./components/ConvButton";
import { Header } from "./components/Header";
import { Lang } from "./components/LangSelector";

function App() {
  const [from, setFrom] = useState("JavaScript");
  const [to, setTo] = useState("Python");
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleChunk = (chunk: string) => {
    setResult(prev => prev + chunk); // append each chunk
  };

  const handleStart = () => {
    setResult(""); // clear output when new conversion starts
  };

  return (
    <>
      <Header />
      <div className="main">
        <Lang from={from} to={to} setFrom={setFrom} setTo={setTo} />
        <Cinout code={code} setCode={setCode} result={result} />
        <ConvB
          from={from}
          to={to}
          code={code}
          onChunk={handleChunk}
          onStart={handleStart}
        />
      </div>
    </>
  );
}

export default App;
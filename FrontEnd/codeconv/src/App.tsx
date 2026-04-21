// frontend/src/App.tsx

import { useState } from "react";
import { Cinout } from "./components/Codeiinout";
import { ConvB } from "./components/ConvButton";
import { Header } from "./components/Header";
import { Lang } from "./components/LangSelector";
import { ReviewPanel } from "./components/ReviewPanel";

function App() {
  const [from, setFrom] = useState("JavaScript");
  const [to, setTo] = useState("Python");
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleChunk = (chunk: string) => {
    setResult(prev => prev + chunk);
  };

  const handleStart = () => {
    setResult("");
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
        {/* Review feature — uses 'from' language since that's the input code */}
        <ReviewPanel code={code} language={from} />
      </div>
    </>
  );
}

export default App;
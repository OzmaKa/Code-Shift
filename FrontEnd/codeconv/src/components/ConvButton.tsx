import React, { useState } from "react";
import "./comp.css"
import { codefetch } from "../api/converter";

interface ConvBProps {
  from: string;
  to: string;
  code: string;
  onChunk: (chunk: string) => void;
  onStart: () => void;
}

export const ConvB: React.FC<ConvBProps> = ({ from, to, code, onChunk, onStart }) => {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState<string | null>(null);
  
  const handleClick = async () => {
    setLoading(true);
    setError(null);
    onStart();
    try{
      await codefetch(from, to, code, onChunk);
    }
    catch{
      setError("Failed to convert code. Please try again.");
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <>
      <button className="convert-btn" id="convert-btn" onClick={handleClick} disabled={loading}>
        {loading ? "CONVERTING..." : "CONVERT →"}
      </button>
      {error && <div className="error">{error}</div>}
    </>
  );
};
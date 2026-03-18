import React, { useState } from "react";
import "./comp.css"
import { codefetch } from "../api/converter";

interface ConvBProps {
  from: string;
  to: string;
  code: string;
  onResult: (result: string) => void;
}

export const ConvB: React.FC<ConvBProps> = ({ from, to, code, onResult }) => {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState<string | null>(null);
  
  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try{
      const result = await codefetch(from, to, code);
    onResult(result);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch(error){
      setError("Failed to convert code.");
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
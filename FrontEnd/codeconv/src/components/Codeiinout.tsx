import React from "react";
import "./comp.css";

interface CinoutProps {
  code: string;
  setCode: (val: string) => void;
  result: string;
}

export const Cinout: React.FC<CinoutProps> = ({ code, setCode, result }) => (
  <div className="editors">
    <div className="editor-wrap">
      <div className="editor-label">INPUT</div>
      <textarea
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Paste your code here..."
      />
    </div>
    <div className="editor-wrap">
      <div className="editor-label">OUTPUT</div>
      <textarea
        value={result}
        readOnly
        placeholder="Converted code will appear here..."
      />
    </div>
  </div>
);
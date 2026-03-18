import React from "react";

interface LangProps {
  from: string;
  to: string;
  setFrom: (val: string) => void;
  setTo: (val: string) => void;
}

export const Lang: React.FC<LangProps> = ({ from, to, setFrom, setTo }) => {
  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="lang-row">
      <select value={from} onChange={e => setFrom(e.target.value)}>
        <option>JavaScript</option>
        <option>TypeScript</option>
        <option>Python</option>
        <option>Rust</option>
        <option>Go</option>
        <option>Java</option>
        <option>C++</option>
        <option>PHP</option>
      </select>

      <button className="swap-btn" onClick={swap}>⇄</button>

      <select value={to} onChange={e => setTo(e.target.value)}>
        <option>Python</option>
        <option>JavaScript</option>
        <option>TypeScript</option>
        <option>Rust</option>
        <option>Go</option>
        <option>Java</option>
        <option>C++</option>
        <option>PHP</option>
      </select>
    </div>
  );
};
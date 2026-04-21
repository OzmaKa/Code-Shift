// frontend/src/components/ReviewPanel.tsx

import React, { useState } from "react";
import { reviewFetch, type ReviewResult } from "../api/reviewer";
import "./ReviewPanel.css";

interface ReviewPanelProps {
  code: string;
  language: string;
}

export const ReviewPanel: React.FC<ReviewPanelProps> = ({ code, language }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReviewResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleReview = async () => {
    if (!code.trim()) {
      setError("Paste some code first.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await reviewFetch(language, code);
      setResult(data);
    } catch {
      setError("Failed to review code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="review-section">
      <button
        className="review-btn"
        onClick={handleReview}
        disabled={loading}
      >
        {loading ? "REVIEWING..." : "REVIEW CODE ↗"}
      </button>

      {error && <div className="review-error">{error}</div>}

      {result && (
        <div className="review-panel">
          {/* Score bar */}
          <div className="review-score-row">
            <div className="review-score-label">SCORE</div>
            <div className="review-score-track">
              <div
                className="review-score-fill"
                style={{
                  width: `${result.score * 10}%`,
                  background:
                    result.score >= 7
                      ? "#4ade80"
                      : result.score >= 4
                      ? "#facc15"
                      : "#f87171",
                }}
              />
            </div>
            <div className="review-score-num">{result.score}/10</div>
            <div
              className={`review-badge ${
                result.approved ? "badge-approved" : "badge-rejected"
              }`}
            >
              {result.approved ? "APPROVED" : "NEEDS WORK"}
            </div>
          </div>

          {/* Issues */}
          {result.issues.length > 0 && (
            <div className="review-block">
              <div className="review-block-title">ISSUES</div>
              <ul className="review-issues">
                {result.issues.map((issue, i) => (
                  <li key={i}>{issue}</li>
                ))}
              </ul>
            </div>
          )}

          {result.issues.length === 0 && (
            <div className="review-block">
              <div className="review-block-title">ISSUES</div>
              <p className="review-none">No issues found.</p>
            </div>
          )}

          {/* Suggestion */}
          <div className="review-block">
            <div className="review-block-title">SUGGESTION</div>
            <p className="review-suggestion">{result.suggestion}</p>
          </div>
        </div>
      )}
    </div>
  );
};
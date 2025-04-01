import React from "react";
import "../styles/nav.css"; // Correct path

export default function Nav() {
  return (
  
    <div className="nav">
    <div className="help-section">
    <div className="question-icon">
            <img src="/images/question.png" alt="Question" className="question-img" />
          </div>
      <span className="help-text">Need help?</span>
    </div>
  </div>
  );
}

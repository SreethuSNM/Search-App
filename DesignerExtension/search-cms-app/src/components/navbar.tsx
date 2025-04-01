import React from "react";
import "../styles/navbar.css"; // Correct path

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="icon-container"><img src="/images/search-normal.png" alt="Question" className="search-img" /></div>
       
    <div className="text-container">
          <h2 className="title">Search App</h2>
          <p className="subtitle">Powered by Seattle New Media</p>
        </div>
      </div>
      <div className="navbar-right">
        <span className="help-text">
          <div className="question-icon">
            <img src="/images/question.png" alt="Question" className="question-img" />
          </div>
          Need help&nbsp;?
        </span>
      </div> {/* Added missing closing div */}
    </nav>
  );
}

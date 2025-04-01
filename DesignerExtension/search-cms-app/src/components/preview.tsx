import React from "react";
import "../styles/preview.css"; // Import the CSS file

export default function Preview({ onMinimize }) {
  const results = [1, 2, 3, 4, 5]; // Example results

  return (
    <div className="preview-containers">
      {/* Preview Header (outside of card) */}
      <div className="preview-header">
        <h2 className="preview-title">Preview</h2>
        <button className="maximize-button" onClick={onMinimize}>
          <img src="/images/minimize.png" alt="Maximize" className="maximize-icon" />
        </button>
      </div>

      {/* Preview Card */}
      <div className="preview-card">
        {/* Browser Header Image */}
        <div className="browser-header">
          <img src="/images/preview.png" alt="Preview" className="browser-image" />
        </div>

        {/* Search Bar */}
        <div className="search-container">
  <div className="search-bar">
    <input type="text" className="search-input" placeholder="Search..." />
    <button className="search-button">
      <img src="/images/searchh.png" alt="Search" className="search-icon" />
    </button>
  </div>
</div>


        {/* Search Results */}
        <div className="search-results">
          {results.map((_, index) => (
            <div key={index} className="result-item">
              <div className="result-image"></div>
              <div className="result-text">
                <div className="result-title"></div>
                <div className="result-subtitle"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

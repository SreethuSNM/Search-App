"use client";
import React, { useState } from "react";
import "../styles/setup.css"; // Updated CSS file
import Preview from "./preview";

export default function Setup({ setActiveComponent }) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [searchType, setSearchType] = useState("Expand");
  const [resultType, setResultType] = useState("Click on search");
  const [resultPage, setResultPage] = useState("Same page result");
  const [displayMode, setDisplayMode] = useState("List");
  const [itemsPerPage, setItemsPerPage] = useState("05");
  const [rows, setRows] = useState("05");
  const [columns, setColumns] = useState("05");
 

  return (
    
    <div className="setup-wrapper">
    <div className="choose-header">
      <button className="continue-button" onClick={() => setActiveComponent("finish")}>Continue</button>
    </div>
    <hr className="separator-line" />

    <div className="component-container">
        {isMaximized ? (
          <Preview onMinimize={() => setIsMaximized(false)} />
        ) : (
          <div className="inner-container">
        
        {/* Left: Settings */}
        <div className="settings-container">
          <h3 className="text-highlight">Search Bar</h3>
          <div className="radio-groups">
            {["Expand", "Icon"].map((type) => (
              <label key={type} className="radio-label">
                <input
                  type="radio"
                  name="searchType"
                  value={type}
                  checked={searchType === type}
                  onChange={() => setSearchType(type)}
                />
                 <span className="radio-circle"></span>
                {type}
              </label>
            ))}
          </div>

          <h3 className="text-highlight">Result Type</h3>
          <div className="radio-groups">
            {["Click on search", "Auto result"].map((type) => (
              <label key={type} className="radio-label">
                <input
                  type="radio"
                  name="resultType"
                  value={type}
                  checked={resultType === type}
                  onChange={() => setResultType(type)}
                />
                 <span className="radio-circle"></span>
                {type}
              </label>
            ))}
          </div>

          <h3 className="text-highlight">Result Page</h3>
          <div className="radio-groups">
            {["Same page result", "Next page"].map((type) => (
              <label key={type} className="radio-label">
                <input
                  type="radio"
                  name="resultPage"
                  value={type}
                  checked={resultPage === type}
                  onChange={() => setResultPage(type)}
                />
                 <span className="radio-circle"></span>
                {type}
              </label>
            ))}
          </div>

          <h3 className="text-highlight">Result Display</h3>
          <div className="display-toggle ">
            <button
              className={`toggle-btn ${displayMode === "List" ? "active" : ""}`}
              onClick={() => setDisplayMode("List")}
            >
              <img src="/images/list.png" alt="List View" className="icon" />
              <span className="text">List</span>
            </button>

            <button
              className={`toggle-btn ${displayMode === "Grid" ? "active" : ""}`}
              onClick={() => setDisplayMode("Grid")}
            >
              <img src="/images/grid.png" alt="Grid View" className="icon" />
              <span className="text">Grid</span>
            </button>
          </div>

         { displayMode === "List" && (
      <div className="list-container">
        <h2 className="list-title">Number of Items List</h2>
        <select
  value={itemsPerPage}
  onChange={(e) => setItemsPerPage(e.target.value)} // No need for Number()
  className="dropdown"
>
  {Array.from({ length: 10 }, (_, i) => (i + 1).toString()).map((num) => (
    <option key={num} value={num}>{num}</option>
  ))}
</select>
      </div>
            
          )}

          {displayMode === "Grid" && (
            <div className="grid-options">
              <div className="grid-setting">
                <label className="text">Rows</label>
                <select value={rows} onChange={(e) => setRows(e.target.value)} className="dropdown">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid-setting">
                <label className="text">Columns</label>
                <select value={columns} onChange={(e) => setColumns(e.target.value)} className="dropdown">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
          )}
       

        <h3 className="text-highlight">Pagination</h3>
          <div className="radio-groups">
            {["Numbered", "Load More"].map((type) => (
              <label key={type} className="radio-label">
                <input
                  type="radio"
                  name="searchType"
                  value={type}
                  checked={searchType === type}
                  onChange={() => setSearchType(type)}
                />
                 <span className="radio-circle"></span>
                {type}
              </label>
            ))}
          </div>
          </div>


        {/* Right: Preview */}

    <div className="preview-container">
   
    <div className="preview-header">
  <h2 className="preview-title">Preview</h2>
  <button className="maximize-button" onClick={() => setIsMaximized(true)}>
    <img src="/images/maximize.png" alt="Maximize" className="maximize-icon" />
  </button>
</div>



      <div className="preview-content"></div>

      <span className="preview-footer">
  <img src="/images/amb.png" alt="Info Icon" className="info-icon" />
  Click the expand icon at the top <br></br> right for an enhanced view.
</span>

    </div>



      </div>
        )}
    </div>
    </div>
  );
}

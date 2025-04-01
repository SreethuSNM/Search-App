import React from "react";
import "../styles/sidebar.css"; // Correct path

export default function Sidebar({ setActiveComponent, activeStep }) {
  const progressMap = [0, 50, 100];
  const progressPercent = progressMap[activeStep] || 0;

  return (
    <aside className="sidebar">
      {/* Progress Bar */}
      <div className="progress-text">{progressPercent}% Completed</div>

      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Step Indicators */}
        <div className="progress-indicators">
          {progressMap.map((_, index) => (
            <span
              key={index}
              className={`progress-dot ${
                index <= activeStep ? "active-dot" : ""
              }`}
            ></span>
          ))}
        </div>
      </div>

      <hr className="separator-linee" />

      {/* Sidebar Navigation */}
      <nav className="sidebar-nav">
        {/* Choose Step */}
        <div
          className={`sidebar-item ${activeStep === 0 ? "active" : ""}`}
          onClick={() => setActiveComponent("choose")}
        >
          <div className="icon-container">
            <img src="images/setting.png" alt="Settings" className="icon" />
          </div>
          <span className="sidebar-text">Choose</span>
        </div>

      {/* Setup Step */}
        <div
          className={`sidebar-item ${activeStep === 1 ? "active" : ""}`}
          onClick={() => setActiveComponent("setup")}
        >
          <div className="icon-container">
            <img src="images/grid-edit.png" alt="Grid Edit" className="icon" />
          </div>
          <span className="sidebar-text">Setup</span>
        </div>

        {/* Finish Step - Show only when activeStep is 2 */}
        {activeStep === 2 && (
          <div
            className={`sidebar-item ${activeStep === 2 ? "active" : ""}`}
            onClick={() => setActiveComponent("finish")}
          >
            <div className="icon-container">
              <img src="images/finish.png" alt="Finish" className="icon" />
            </div>
            <span className="sidebar-text">Finish</span>
          </div>
        )}
      </nav>
    </aside>
  );
}

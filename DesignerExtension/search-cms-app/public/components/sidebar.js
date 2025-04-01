import React from "react";
import "../styles/sidebar.css"; // Correct path
export default function Sidebar({ setActiveComponent, activeStep }) {
    const progressMap = [0, 50, 100];
    const progressPercent = progressMap[activeStep] || 0;
    return (React.createElement("aside", { className: "sidebar" },
        React.createElement("div", { className: "progress-text" },
            progressPercent,
            "% Completed"),
        React.createElement("div", { className: "progress-container" },
            React.createElement("div", { className: "progress-bar" },
                React.createElement("div", { className: "progress-fill", style: { width: `${progressPercent}%` } })),
            React.createElement("div", { className: "progress-indicators" }, progressMap.map((_, index) => (React.createElement("span", { key: index, className: `progress-dot ${index <= activeStep ? "active-dot" : ""}` }))))),
        React.createElement("hr", { className: "separator-linee" }),
        React.createElement("nav", { className: "sidebar-nav" },
            React.createElement("div", { className: `sidebar-item ${activeStep === 0 ? "active" : ""}`, onClick: () => setActiveComponent("choose") },
                React.createElement("div", { className: "icon-container" },
                    React.createElement("img", { src: "images/setting.png", alt: "Settings", className: "icon" })),
                React.createElement("span", { className: "sidebar-text" }, "Choose")),
            React.createElement("div", { className: `sidebar-item ${activeStep === 1 ? "active" : ""}`, onClick: () => setActiveComponent("setup") },
                React.createElement("div", { className: "icon-container" },
                    React.createElement("img", { src: "images/grid-edit.png", alt: "Grid Edit", className: "icon" })),
                React.createElement("span", { className: "sidebar-text" }, "Setup")),
            activeStep === 2 && (React.createElement("div", { className: `sidebar-item ${activeStep === 2 ? "active" : ""}`, onClick: () => setActiveComponent("finish") },
                React.createElement("div", { className: "icon-container" },
                    React.createElement("img", { src: "images/finish.png", alt: "Finish", className: "icon" })),
                React.createElement("span", { className: "sidebar-text" }, "Finish"))))));
}

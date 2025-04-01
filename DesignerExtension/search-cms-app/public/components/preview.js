import React from "react";
import "../styles/preview.css"; // Import the CSS file
export default function Preview({ onMinimize }) {
    const results = [1, 2, 3, 4, 5]; // Example results
    return (React.createElement("div", { className: "preview-containers" },
        React.createElement("div", { className: "preview-header" },
            React.createElement("h2", { className: "preview-title" }, "Preview"),
            React.createElement("button", { className: "maximize-button", onClick: onMinimize },
                React.createElement("img", { src: "/images/minimize.png", alt: "Maximize", className: "maximize-icon" }))),
        React.createElement("div", { className: "preview-card" },
            React.createElement("div", { className: "browser-header" },
                React.createElement("img", { src: "/images/preview.png", alt: "Preview", className: "browser-image" })),
            React.createElement("div", { className: "search-container" },
                React.createElement("div", { className: "search-bar" },
                    React.createElement("input", { type: "text", className: "search-input", placeholder: "Search..." }),
                    React.createElement("button", { className: "search-button" },
                        React.createElement("img", { src: "/images/searchh.png", alt: "Search", className: "search-icon" })))),
            React.createElement("div", { className: "search-results" }, results.map((_, index) => (React.createElement("div", { key: index, className: "result-item" },
                React.createElement("div", { className: "result-image" }),
                React.createElement("div", { className: "result-text" },
                    React.createElement("div", { className: "result-title" }),
                    React.createElement("div", { className: "result-subtitle" })))))))));
}

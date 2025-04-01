import React from "react";
import "../styles/navbar.css"; // Correct path
export default function Navbar() {
    return (React.createElement("nav", { className: "navbar" },
        React.createElement("div", { className: "navbar-left" },
            React.createElement("div", { className: "icon-container" },
                React.createElement("img", { src: "/images/search-normal.png", alt: "Question", className: "search-img" })),
            React.createElement("div", { className: "text-container" },
                React.createElement("h2", { className: "title" }, "Search App"),
                React.createElement("p", { className: "subtitle" }, "Powered by Seattle New Media"))),
        React.createElement("div", { className: "navbar-right" },
            React.createElement("span", { className: "help-text" },
                React.createElement("div", { className: "question-icon" },
                    React.createElement("img", { src: "/images/question.png", alt: "Question", className: "question-img" })),
                "Need help\u00A0?")),
        " "));
}

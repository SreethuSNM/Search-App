import React from "react";
import "../styles/finish.css"; // Import CSS file
export default function Finish() {
    return (React.createElement("div", { className: "finish-card" },
        React.createElement("div", { className: "icons-container " },
            React.createElement("img", { src: "/images/union.png", alt: "Verified", className: "icon-union" }),
            React.createElement("img", { src: "/images/setting-2.png", alt: "Setting", className: "icon-large" }),
            React.createElement("img", { src: "/images/setting-2.png", alt: "Setting", className: "icon-small" })),
        React.createElement("h2", { className: "finish-title" }, "Setup Completed!"),
        React.createElement("p", { className: "finish-text" },
            "Your search is now ready to go. You can check   ",
            React.createElement("br", null),
            " your staging website."),
        React.createElement("button", { className: "finish-button" }, "Back to Webflow")));
}

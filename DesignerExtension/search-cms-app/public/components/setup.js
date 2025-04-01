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
    return (React.createElement("div", { className: "setup-wrapper" },
        React.createElement("div", { className: "choose-header" },
            React.createElement("button", { className: "continue-button", onClick: () => setActiveComponent("finish") }, "Continue")),
        React.createElement("hr", { className: "separator-line" }),
        React.createElement("div", { className: "component-container" }, isMaximized ? (React.createElement(Preview, { onMinimize: () => setIsMaximized(false) })) : (React.createElement("div", { className: "inner-container" },
            React.createElement("div", { className: "settings-container" },
                React.createElement("h3", { className: "text-highlight" }, "Search Bar"),
                React.createElement("div", { className: "radio-groups" }, ["Expand", "Icon"].map((type) => (React.createElement("label", { key: type, className: "radio-label" },
                    React.createElement("input", { type: "radio", name: "searchType", value: type, checked: searchType === type, onChange: () => setSearchType(type) }),
                    React.createElement("span", { className: "radio-circle" }),
                    type)))),
                React.createElement("h3", { className: "text-highlight" }, "Result Type"),
                React.createElement("div", { className: "radio-groups" }, ["Click on search", "Auto result"].map((type) => (React.createElement("label", { key: type, className: "radio-label" },
                    React.createElement("input", { type: "radio", name: "resultType", value: type, checked: resultType === type, onChange: () => setResultType(type) }),
                    React.createElement("span", { className: "radio-circle" }),
                    type)))),
                React.createElement("h3", { className: "text-highlight" }, "Result Page"),
                React.createElement("div", { className: "radio-groups" }, ["Same page result", "Next page"].map((type) => (React.createElement("label", { key: type, className: "radio-label" },
                    React.createElement("input", { type: "radio", name: "resultPage", value: type, checked: resultPage === type, onChange: () => setResultPage(type) }),
                    React.createElement("span", { className: "radio-circle" }),
                    type)))),
                React.createElement("h3", { className: "text-highlight" }, "Result Display"),
                React.createElement("div", { className: "display-toggle " },
                    React.createElement("button", { className: `toggle-btn ${displayMode === "List" ? "active" : ""}`, onClick: () => setDisplayMode("List") },
                        React.createElement("img", { src: "/images/list.png", alt: "List View", className: "icon" }),
                        React.createElement("span", { className: "text" }, "List")),
                    React.createElement("button", { className: `toggle-btn ${displayMode === "Grid" ? "active" : ""}`, onClick: () => setDisplayMode("Grid") },
                        React.createElement("img", { src: "/images/grid.png", alt: "Grid View", className: "icon" }),
                        React.createElement("span", { className: "text" }, "Grid"))),
                displayMode === "List" && (React.createElement("div", { className: "list-container" },
                    React.createElement("h2", { className: "list-title" }, "Number of Items List"),
                    React.createElement("select", { value: itemsPerPage, onChange: (e) => setItemsPerPage(e.target.value), className: "dropdown" }, Array.from({ length: 10 }, (_, i) => (i + 1).toString()).map((num) => (React.createElement("option", { key: num, value: num }, num)))))),
                displayMode === "Grid" && (React.createElement("div", { className: "grid-options" },
                    React.createElement("div", { className: "grid-setting" },
                        React.createElement("label", { className: "text" }, "Rows"),
                        React.createElement("select", { value: rows, onChange: (e) => setRows(e.target.value), className: "dropdown" }, Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (React.createElement("option", { key: num, value: num }, num))))),
                    React.createElement("div", { className: "grid-setting" },
                        React.createElement("label", { className: "text" }, "Columns"),
                        React.createElement("select", { value: columns, onChange: (e) => setColumns(e.target.value), className: "dropdown" }, Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (React.createElement("option", { key: num, value: num }, num))))))),
                React.createElement("h3", { className: "text-highlight" }, "Pagination"),
                React.createElement("div", { className: "radio-groups" }, ["Numbered", "Load More"].map((type) => (React.createElement("label", { key: type, className: "radio-label" },
                    React.createElement("input", { type: "radio", name: "searchType", value: type, checked: searchType === type, onChange: () => setSearchType(type) }),
                    React.createElement("span", { className: "radio-circle" }),
                    type))))),
            React.createElement("div", { className: "preview-container" },
                React.createElement("div", { className: "preview-header" },
                    React.createElement("h2", { className: "preview-title" }, "Preview"),
                    React.createElement("button", { className: "maximize-button", onClick: () => setIsMaximized(true) },
                        React.createElement("img", { src: "/images/maximize.png", alt: "Maximize", className: "maximize-icon" }))),
                React.createElement("div", { className: "preview-content" }),
                React.createElement("span", { className: "preview-footer" },
                    React.createElement("img", { src: "/images/amb.png", alt: "Info Icon", className: "info-icon" }),
                    "Click the expand icon at the top ",
                    React.createElement("br", null),
                    " right for an enhanced view.")))))));
}

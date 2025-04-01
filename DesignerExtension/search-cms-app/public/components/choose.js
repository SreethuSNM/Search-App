import React, { useState } from "react";
import "../styles/choose.css"; // Import CSS file
const collections = ["Collection 1", "Collection 2", "Collection 3", "Collection 4"];
export default function Choose({ setActiveComponent }) {
    const [selectedCollections, setSelectedCollections] = useState(["Collection 1", "Collection 2", "Collection 3"]);
    const [selectedFields, setSelectedFields] = useState(["Collection 1", "Collection 2", "Collection 3"]);
    const [selectAllCollections, setSelectAllCollections] = useState(true);
    const [selectAllFields, setSelectAllFields] = useState(true);
    const [option, setOption] = useState("Collection");
    const toggleSelection = (type, item) => {
        if (type === "collection") {
            setSelectedCollections((prev) => {
                const updated = prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item];
                setSelectAllCollections(updated.length === collections.length);
                return updated;
            });
        }
        else {
            setSelectedFields((prev) => {
                const updated = prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item];
                setSelectAllFields(updated.length === collections.length);
                return updated;
            });
        }
    };
    const handleSelectAll = (type) => {
        if (type === "collection") {
            setSelectAllCollections(!selectAllCollections);
            setSelectedCollections(!selectAllCollections ? collections : []);
        }
        else {
            setSelectAllFields(!selectAllFields);
            setSelectedFields(!selectAllFields ? collections : []);
        }
    };
    return (React.createElement("div", { className: "choose-wrapper" },
        React.createElement("div", { className: "choose-header" },
            React.createElement("button", { className: "continue-button", onClick: () => setActiveComponent("setup") }, "Continue")),
        React.createElement("hr", { className: "separator-line" }),
        React.createElement("div", { className: "choose-container" },
            React.createElement("div", { className: "choose-content" },
                React.createElement("h1", { className: "choose-title" }, "Choose Accordingly"),
                React.createElement("div", { className: "radio-group" }, ["Collection", "Pages", "Collection + Pages"].map((item) => (React.createElement("label", { key: item, className: "radio-label" },
                    React.createElement("input", { type: "radio", value: item, checked: option === item, onChange: () => setOption(item) }),
                    React.createElement("span", { className: `radio-circle ${option === item ? "selected" : ""}` }),
                    item)))),
                React.createElement("div", { className: "selection-boxes" },
                    React.createElement("div", { className: "selection-card" },
                        React.createElement("div", { className: "selection-header" },
                            React.createElement("h2", null, "Choose collections"),
                            React.createElement("label", null,
                                React.createElement("input", { type: "checkbox", checked: selectAllCollections, onChange: () => handleSelectAll("collection") }),
                                "All")),
                        collections.map((collection) => (React.createElement("label", { key: collection, className: "selection-item" },
                            React.createElement("input", { type: "checkbox", checked: selectedCollections.includes(collection), onChange: () => toggleSelection("collection", collection) }),
                            React.createElement("span", null, collection))))),
                    React.createElement("div", { className: "selection-card" },
                        React.createElement("div", { className: "selection-header" },
                            React.createElement("h2", null, "Choose fields"),
                            React.createElement("label", null,
                                React.createElement("input", { type: "checkbox", checked: selectAllFields, onChange: () => handleSelectAll("field") }),
                                "All")),
                        collections.map((field) => (React.createElement("label", { key: field, className: "selection-item" },
                            React.createElement("input", { type: "checkbox", checked: selectedFields.includes(field), onChange: () => toggleSelection("field", field) }),
                            React.createElement("span", null, field))))))))));
}

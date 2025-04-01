import React, { useState } from "react";
import "../styles/choose.css"; // Import CSS file
import { useAuth } from "../hooks/useAuth";



const collections = ["Collection 1", "Collection 2", "Collection 3", "Collection 4"];

export default function Choose({ setActiveComponent }) {

  const { user, sessionToken, exchangeAndVerifyIdToken } = useAuth();
  

  const [selectedCollections, setSelectedCollections] = useState(["Collection 1", "Collection 2", "Collection 3"]);
  const [selectedFields, setSelectedFields] = useState(["Collection 1", "Collection 2", "Collection 3"]);
  const [selectAllCollections, setSelectAllCollections] = useState(true);
  const [selectAllFields, setSelectAllFields] = useState(true);
  const [option, setOption] = useState("Collection");

  const openAuthScreen = () => {
    console.log("Opening Webflow authentication window...");

    console.log(import.meta.env.VITE_NEXTJS_API_URL);

    const base_url = import.meta.env.VITE_NEXTJS_API_URL || 'http://localhost:3000';

// Use the environment variable in the URL
const authWindow = window.open(
  `${base_url}/api/auth/authorize?state=webflow_designer`,
  "_blank",
  "width=600,height=600"
);
    const checkWindow = setInterval(() => {
      if (authWindow?.closed) {
        console.log("Auth window closed");
        clearInterval(checkWindow);

        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get("code");

        if (authorizationCode) {
          exchangeAndVerifyIdToken(authorizationCode);
        } else {
          console.error("Authorization code not found.");
        }
      }
    }, 1000);
  };




  const toggleSelection = (type, item) => {
    if (type === "collection") {
      setSelectedCollections((prev) => {
        const updated = prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item];
        setSelectAllCollections(updated.length === collections.length);
        return updated;
      });
    } else {
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
    } else {
      setSelectAllFields(!selectAllFields);
      setSelectedFields(!selectAllFields ? collections : []);
    }
  };

  return (
    <div className="choose-wrapper">
      <div className="choose-header">
      <button className="authorize-button"onClick={openAuthScreen}>Authorize</button>
        <button className="continue-button" onClick={() => setActiveComponent("setup")}>Continue</button>
      </div>
      <hr className="separator-line" />

      <div className="choose-container">
      <div className="choose-content">
        <h1 className="choose-title">Choose Accordingly</h1>

        {/* Radio Options */}
        <div className="radio-group">
          {["Collection", "Pages", "Collection + Pages"].map((item) => (
            <label key={item} className="radio-label">
              <input
                type="radio"
                value={item}
                checked={option === item}
                onChange={() => setOption(item)}
              />
              <span className={`radio-circle ${option === item ? "selected" : ""}`}></span>
              {item}
            </label>
          ))}
        </div>

        <div className="selection-boxes">
          {/* Choose Collections */}
          <div className="selection-card">
            <div className="selection-header">
              <h2>Choose collections</h2>
              <label>
                <input
                  type="checkbox"
                  checked={selectAllCollections}
                  onChange={() => handleSelectAll("collection")}
                />
                All
              </label>
            </div>
            {collections.map((collection) => (
              <label key={collection} className="selection-item">
                <input
                  type="checkbox"
                  checked={selectedCollections.includes(collection)}
                  onChange={() => toggleSelection("collection", collection)}
                />
                <span>{collection}</span>
              </label>
            ))}
          </div>

          {/* Choose Fields */}
          <div className="selection-card">
            <div className="selection-header">
              <h2>Choose fields</h2>
              <label>
                <input
                  type="checkbox"
                  checked={selectAllFields}
                  onChange={() => handleSelectAll("field")}
                />
                All
              </label>
            </div>
            {collections.map((field) => (
              <label key={field} className="selection-item">
                <input
                  type="checkbox"
                  checked={selectedFields.includes(field)}
                  onChange={() => toggleSelection("field", field)}
                />
                <span>{field}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

import React from "react";
import "../styles/final.css";
import Nav from "./nav";

const FinishPage = () => {
  return (
    <div className="container">
      <Nav/>
    
      <div className="cards">
      <div className="card">
      <div className="icons-container ">
          <img src="/images/union.png" alt="Verified" className="icon-union" />
          <img src="/images/setting-2.png" alt="Setting" className="icon-large" />
          <img src="/images/setting-2.png" alt="Setting" className="icon-small" />
        </div>
        <h2 className="finish-title">Setup Completed!</h2>
        <p className="finish-text">
          Your search is now ready to go. <br />
          You can check your staging website.
        </p>
        <button className="finish-button">Back to Webflow</button>
      </div>
    </div>
    </div>
  );
};

export default FinishPage;

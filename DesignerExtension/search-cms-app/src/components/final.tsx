import React from "react";
import "../styles/final.css";
import Nav from "./nav";

const Final = () => { 
  return (
    <div className="container">
      <Nav/>
      <div className="cards">
      <div className="card">
        <div className="finalicon-container">
        <img src="/images/final.png" alt="Verified" className="icon-final" />
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

export default Final;

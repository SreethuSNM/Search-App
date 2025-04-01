import React from "react";
import "../styles/finish.css"; // Import CSS file

export default function Finish() {
  return (
   
      <div className="finish-card">
        {/* Icon Section */}
        <div className="icons-container ">
          <img src="/images/union.png" alt="Verified" className="icon-union" />
          <img src="/images/setting-2.png" alt="Setting" className="icon-large" />
          <img src="/images/setting-2.png" alt="Setting" className="icon-small" />
        </div>

        {/* Text Section */}
        <h2 className="finish-title">Setup Completed!</h2>
        <p className="finish-text">
          Your search is now ready to go.
          You can check   <br /> your staging website.
        </p>

        {/* Button */}
        <button className="finish-button">Back to Webflow</button>
    
    </div>
  );
}

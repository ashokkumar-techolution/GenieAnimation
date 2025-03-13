import React from "react";
import "./GenieAnimation.css";

const GenieMainContent = ({ isSidebarOpen }) => {
  return (
    <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
      <h1>Genie Navigation Demo</h1>
      <p>
        Click the button in the <strong>bottom left</strong> to toggle the side
        navigation.
      </p>
    </div>
  );
};

export default GenieMainContent;

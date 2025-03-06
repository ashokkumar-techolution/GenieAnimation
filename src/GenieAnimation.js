import React, { useState, useEffect } from "react";
import "./style.css";

const GenieAnimation = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const toggleSidebar = () => {
    if (isSidebarVisible) {
      setIsAnimating(true);
      setIsAnimationComplete(false); // Reset
      setTimeout(() => {
        setIsSidebarVisible(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setIsSidebarVisible(true);
        setIsAnimating(false);
        setIsAnimationComplete(true); // Set when animation completes
      }, 300);
    }
  };

  return (
    <div className="genie-container">
      {!isSidebarVisible && (
        <button
          className={`chat-button ${isAnimating ? "bounce-down" : ""}`}
          onClick={toggleSidebar}
        >
          💬
        </button>
      )}

      <div
        className={`genie-sidebar ${
          isSidebarVisible ? "expanded" : "collapsed"
        } ${isAnimating ? "animating" : ""} ${
          isAnimationComplete ? "full-height" : ""
        }`}
      >
        {isSidebarVisible && <button className="chat-icon">💬</button>}
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      <div
        className={`right-side ${
          isSidebarVisible ? "with-sidebar" : "full-width"
        }`}
      >
        <div className="rectangle"></div>
      </div>
    </div>
  );
};

export default GenieAnimation;

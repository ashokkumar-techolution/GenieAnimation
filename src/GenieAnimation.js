import React, { useState } from "react";
import "./style.css"; // Importing the CSS file

const GenieSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsBouncing(true); // Start bounce animation

    setTimeout(() => {
      setIsBouncing(false); // Remove bounce animation
      setIsOpen(true); // Open sidebar after bounce
    }, 300); // Match the bounce animation duration
  };
  return (
    <div>
      <button
        className={`toggle-btn ${isBouncing ? "bouncing" : ""} ${
          isOpen ? "hidden" : ""
        }`}
        onClick={handleToggle}
      >
        ☰
      </button>

      <div
        className={`backdrop ${isOpen ? "visible" : ""}`}
        onClick={closeSidebar}
      ></div>

      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <div className="sidenav-header">
          <h2>Navigation</h2>
          <button className="close-btn" onClick={closeSidebar}>
            ✕
          </button>
        </div>
        <div className="nav-links">
          <a href="#" className="active">
            <i>🏠</i> Home
          </a>
          <a href="#">
            <i>👤</i> Profile
          </a>
          <a href="#">
            <i>📊</i> Dashboard
          </a>
          <a href="#">
            <i>📁</i> Projects
          </a>
          <a href="#">
            <i>📝</i> Tasks
          </a>
          <a href="#">
            <i>📅</i> Calendar
          </a>
          <a href="#">
            <i>⚙️</i> Settings
          </a>
          <a href="#">
            <i>📤</i> Logout
          </a>
        </div>
      </div>

      <div className={`main-content ${isOpen ? "shifted" : ""}`}>
        <h1>Genie Navigation Demo</h1>
        <p>
          Click the round button in the <strong>bottom left</strong> to toggle
          the side navigation with a genie animation effect.
        </p>
      </div>
    </div>
  );
};

export default GenieSidebar;

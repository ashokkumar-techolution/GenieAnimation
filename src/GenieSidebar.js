import React, { useState } from "react";
import chatButton from "./chatButton.svg";
import closeIcon from "./close_fullscreen.svg";
import topIcon from "./topIcon.svg";
import "./GenieAnimation.css"; // Ensure styles are properly imported

const GenieSidebar = ({ setIsSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(true);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className={`toggle-btn ${isOpen ? "hidden" : ""}`}
        onClick={handleToggle}
      >
        <img src={chatButton} alt="Chat" />
      </button>

      {/* Background Overlay */}
      <div
        className={`backdrop ${isOpen ? "visible" : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <div className="sidenav-header">
          <img src={topIcon} alt="Top Icon" />
          <button className="close-btn" onClick={closeSidebar}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          {[
            "Home",
            "Profile",
            "Dashboard",
            "Projects",
            "Tasks",
            "Calendar",
            "Settings",
            "Logout",
          ].map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default GenieSidebar;

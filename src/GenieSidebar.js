import React, { useState } from "react";
import chatButton from "./chatButton.svg";
import closeIcon from "./close_fullscreen.svg";
import topIcon from "./topIcon.svg";
import css from "./GenieAnimation.module.css"; // Ensure styles are properly imported
import "./SideNav.css";

const GenieSidebar = ({ setIsSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const handleToggle = () => {
    setIsOpen(true);
    setIsSidebarOpen(true);
    setIsBouncing(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
    setIsSidebarOpen(false);
  };

  const handleAnimationEnd = () => {
    setIsBouncing(false); // Remove class once animation is finished
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className={`toggle-btn ${css["toggle-btn"]} ${
          isOpen ? css.hidden : ""
        } ${isBouncing ? css.bouncing : ""}`}
        onClick={handleToggle}
        onAnimationEnd={handleAnimationEnd} // Remove class after animation
      >
        <img src={chatButton} alt="Chat" />
      </button>

      {/* Sidebar */}
      <div className={`sidenav ${css.sidenav} ${isOpen ? css.open : ""}`}>
        <div className="sidenav-header">
          <img src={topIcon} alt="Top Icon" />
          <button
            className={`close-btn ${css["close-btn"]}`}
            onClick={closeSidebar}
          >
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

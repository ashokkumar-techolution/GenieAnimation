import React from "react";
import css from "./GenieAnimation.module.css";

const GenieMainContent = ({
  isSidebarOpen,
  marginLeft = 300,
  transitionTime = "1.25s",
}) => {
  return (
    <div
      className={css["main-content"]}
      style={{
        "--margin-left": isSidebarOpen ? `${marginLeft}px` : "0px",
        "--transition-time": transitionTime,
      }}
    >
      <h1>Genie Navigation Demo</h1>
      <p>
        Click the button in the <strong>bottom left</strong> to toggle the side
        navigation.
      </p>
    </div>
  );
};

export default GenieMainContent;

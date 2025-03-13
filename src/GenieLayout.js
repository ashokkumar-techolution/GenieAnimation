import React, { useState } from "react";
import GenieSidebar from "./GenieSidebar";
import GenieMainContent from "./GenieMainContent";

const GenieLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <GenieSidebar setIsSidebarOpen={setIsSidebarOpen} />
      <GenieMainContent isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default GenieLayout;

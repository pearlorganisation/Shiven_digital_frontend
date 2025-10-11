// components/Layout.tsx
import { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import FallbackPage from "../Fallback/FallbackPage";

const Layout = () => {
  const isSidebarOpen = useSelector((state:any) => state.globalData.isSidebarOpen);

  // State to manage tooltip visibility, content, and position
  const [tooltip, setTooltip] = useState<{
    text: string;
    top: number;
    left: number;
  } | null>(null);

  // Handler to show the tooltip, calculates position based on the hovered item
  const handleShowTooltip = (text: string, rect: DOMRect) => {
    setTooltip({
      text,
      top: rect.top + rect.height / 2, // Vertically center with the item
      left: rect.right + 12, // Position to the right of the item
    });
  };

  // Handler to hide the tooltip
  const handleHideTooltip = () => {
    setTooltip(null);
  };

  return (
    <div className="w-full h-screen bg-gray-50">
      <Header />

      {/* Pass the handlers down to the Sidebar component */}
      <Sidebar
        onShowTooltip={handleShowTooltip}
        onHideTooltip={handleHideTooltip}
      />
      
      <main
        className={`pt-14 transition-all duration-300 ${
          isSidebarOpen ? "ml-72" : "ml-16"
        }`}
      >
        <Suspense fallback={<FallbackPage />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Render the tooltip at the Layout level */}
      {tooltip && (
        <div
          className="fixed z-50 rounded-md px-2 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium whitespace-nowrap"
          style={{
            top: `${tooltip.top}px`,
            left: `${tooltip.left}px`,
            transform: 'translateY(-50%)' // This centers the tooltip perfectly
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default Layout;
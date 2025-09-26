// src/components/Sidebar/Sidebar.tsx

import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { sidebarConfig } from "./SidebarConfig";

// Props for SidebarItem, including the new callbacks
interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  onShowTooltip: (text: string, rect: DOMRect) => void;
  onHideTooltip: () => void;
}

const SidebarItem = ({ icon, text, to, onShowTooltip, onHideTooltip }: SidebarItemProps) => {
  const isSidebarOpen = useSelector((state: any) => state.globalData.isSidebarOpen);
  const navRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    // Only trigger tooltip logic if the sidebar is closed
    if (!isSidebarOpen && navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      onShowTooltip(text, rect);
    }
  };

  return (
    <NavLink
      ref={navRef}
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onHideTooltip}
      className={({ isActive }) => `
        relative flex items-center py-2.5 px-3 my-1
        font-medium rounded-lg cursor-pointer
        transition-colors group
        ${
          isActive
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          isSidebarOpen ? "w-52 ml-3" : "hidden"
        }`}
      >
        {text}
      </span>
      {/* Tooltip has been removed from here */}
    </NavLink>
  );
};

// Props for Sidebar, which now accepts the tooltip handlers
interface SidebarProps {
  onShowTooltip: (text: string, rect: DOMRect) => void;
  onHideTooltip: () => void;
}

const Sidebar = ({ onShowTooltip, onHideTooltip }: SidebarProps) => {
  const isSidebarOpen = useSelector((state: any) => state.globalData.isSidebarOpen);
  const userRole = useSelector((state: any) => state.auth?.user?.role || "viewer");

  const filteredSidebarItems = sidebarConfig.filter(item =>
    item.allowedRoles.includes(userRole)
  );

  return (
    <aside
      className={`
        fixed top-14 left-0 h-full bg-white border-b shadow-sm
        transition-all duration-300 z-40 overflow-y-auto scrollbar-hidden
        ${isSidebarOpen ? "w-64" : "w-16"}
      `}
    >
      <nav className="h-full flex flex-col">
        <ul className="flex-1 px-3 pt-4">
          {filteredSidebarItems.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              text={item.text}
              to={item.path}
              // Pass the handlers down to each item
              onShowTooltip={onShowTooltip}
              onHideTooltip={onHideTooltip}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
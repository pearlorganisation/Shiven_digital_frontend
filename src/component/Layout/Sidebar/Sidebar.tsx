// src/components/Sidebar/Sidebar.tsx

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home, Settings} from "lucide-react";

// --- Reusable SidebarItem Component (This part remains the same) ---
interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  alert?: boolean;
}

const SidebarItem = ({ icon, text, to, alert }: SidebarItemProps) => {
  const isSidebarOpen = useSelector((state: any) => state.globalData.isSidebarOpen);

  return (
    <NavLink
      to={to}
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
          isSidebarOpen ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            isSidebarOpen ? "" : "top-2"
          }`}
        />
      )}

      {/* Tooltip for when sidebar is collapsed */}
      {!isSidebarOpen && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </NavLink>
  );
};


// --- Main Sidebar Component (Simplified) ---
const Sidebar = () => {
  const isSidebarOpen = useSelector((state: any) => state.globalData.isSidebarOpen);

  return (
    <aside
      className={`
        fixed top-14 left-0 h-full bg-white border-b  shadow-sm 
        transition-all duration-300 z-40
        ${isSidebarOpen ? "w-64" : "w-16"}
      `}
    >
      <nav className="h-full flex flex-col">
        {/* REMOVED: Logo and toggle button section is no longer needed here. */}
        
        {/* --- Navigation Links --- */}
        {/* ADDED: 'pt-4' for better spacing from the top */}
        <ul className="flex-1 px-3 pt-4">
          <SidebarItem icon={<Home size={20} />} text="Dashboard" to="/" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" to="/settings" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
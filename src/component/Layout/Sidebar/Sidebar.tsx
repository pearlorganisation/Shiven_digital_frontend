// src/components/Sidebar/Sidebar.tsx

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {sidebarConfig} from "./SidebarConfig";


interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
}

const SidebarItem = ({ icon, text, to }: SidebarItemProps) => {
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
          isSidebarOpen ? "w-52 ml-3" : "hidden"
        }`}
      >
        {text}  
      </span>

      {!isSidebarOpen && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6 
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          whitespace-nowrap
      `}
        >
          {text}
        </div>
      )}
    </NavLink>
  );
};


const Sidebar = () => {
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
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
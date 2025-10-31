// src/components/Sidebar/Sidebar.tsx
import React, { useState, useRef, useMemo, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDown, Menu } from "lucide-react";
import { toggleSidebar } from "@/store/slice/globalDataSlice";
import { sidebarConfig } from "./SidebarConfig";
import type { SidebarItemConfig } from "./SidebarConfig";

interface SidebarItemProps {
  item: SidebarItemConfig;
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  const { icon, text, children } = item;
  const isSidebarOpen = useSelector((state: any) => state.globalData.isSidebarOpen);
  const location = useLocation();
  const navRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const hasChildren = children && children.length > 0;

  const isChildActive = useMemo(() => {
    if (!hasChildren) return false;
    return children.some((child) => location.pathname === child.path);
  }, [children, hasChildren, location.pathname]);

  const [isExpanded, setIsExpanded] = useState(isChildActive);

  useEffect(() => {
    if (isChildActive) setIsExpanded(true);
  }, [isChildActive]);

  if (hasChildren) {
    return (
      <>
        <button
          ref={navRef as React.RefObject<HTMLButtonElement>}
          onClick={() => setIsExpanded((e) => !e)}
          className={`
            relative flex items-center justify-between w-full py-2.5 px-3 my-1
            font-medium rounded-lg cursor-pointer transition-colors group
            ${
              isChildActive && !isSidebarOpen
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-600"
            }
          `}
        >
          <div className="flex items-center">
            {icon}
            <span
              className={`overflow-hidden transition-all ${
                isSidebarOpen ? "w-full ml-2" : "hidden"
              } ${item?.status === "balance" ? "border border-red-500" : ""}`}
            >
              {text}
            </span>
          </div>
          {isSidebarOpen && (
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            />
          )}
        </button>

        {isSidebarOpen && (
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              isExpanded ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ul className="pl-6 border-l border-indigo-100 ml-3.5 flex flex-col">
              {children.map((child) => (
                <li key={child.path}>
                  <NavLink
                    to={child.path}
                    className={({ isActive }) => `
                      block py-2 px-2 my-0.5 font-medium rounded-md
                      transition-colors text-sm
                      ${isActive ? "text-indigo-600 bg-indigo-50" : "hover:bg-indigo-50 text-gray-500"}
                    `}
                  >
                    {child.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }

  return (
    <NavLink
      ref={navRef as React.RefObject<HTMLAnchorElement>}
      to={item.path!}
      className={({ isActive }) => `
        relative flex items-center py-2.5 px-3 my-1
        font-medium rounded-lg cursor-pointer transition-colors group
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
          isSidebarOpen ? "w-full ml-2" : "hidden"
        } ${item?.status === "balance" ? "border border-red-500" : ""}`}
      >
        {text}
      </span>
    </NavLink>
  );
};

// ──────────────────────────────────────────────────────────────────────
// Main Sidebar Component
// ──────────────────────────────────────────────────────────────────────
const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state: any) => state.globalData.isSidebarOpen);
  const userRole = useSelector((state: any) => state.auth?.user?.role || "viewer");

  const filteredSidebarItems = sidebarConfig.filter((item) =>
    item.allowedRoles.includes(userRole)
  );

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 bg-white shadow-lg
        transition-all duration-300 z-40
        ${isSidebarOpen ? "w-72" : "w-16"}
      `}
    >
      <div className="flex flex-col h-full">
        {/* ─── Toggle Button (Top) ─── */}
        <div className="flex items-center justify-between p-3 border-b border-slate-100">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Optional: Show logo/title when expanded */}
          {isSidebarOpen && (
            <span className="ml-2 text-sm font-semibold text-slate-700 truncate">
              Menu
            </span>
          )}
        </div>

        {/* ─── Navigation List ─── */}
        <nav className="flex-1 overflow-y-auto scrollbar-hidden">
          <ul className="px-3 pt-2 pb-24">
            {filteredSidebarItems.map((item) => (
              <SidebarItem key={item.text} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
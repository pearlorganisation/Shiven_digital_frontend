import React, { useState, useRef, useMemo, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChevronDown } from "lucide-react";
import { sidebarConfig } from "./SidebarConfig";
import type { SidebarItemConfig } from "./SidebarConfig";



interface SidebarItemProps {
  item: SidebarItemConfig;
  onShowTooltip: (text: string, rect: DOMRect) => void;
  onHideTooltip: () => void;
}

const SidebarItem = ({ item, onShowTooltip, onHideTooltip }: SidebarItemProps) => {
  console.log(item?.status)
  const { icon, text, children } = item;
  const isSidebarOpen = useSelector((state: any) => state.globalData.isSidebarOpen);
  const location = useLocation();
  const navRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const hasChildren = children && children.length > 0;

  const isChildActive = useMemo(() => {
    if (!hasChildren) return false;
    return children.some(child => location.pathname === child.path);
  }, [children, hasChildren, location.pathname]);

  const [isExpanded, setIsExpanded] = useState(isChildActive);

  useEffect(() => {
    if (isChildActive) {
      setIsExpanded(true);
    }
  }, [isChildActive]);


  const handleMouseEnter = () => {
    if (!isSidebarOpen && navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      onShowTooltip(text, rect);
    }
  };

  if (hasChildren) {
    return (
      <>
        <button
          ref={navRef as React.RefObject<HTMLButtonElement>}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={onHideTooltip}
          onClick={() => setIsExpanded(e => !e)}
          className={`
            relative flex items-center justify-between w-full py-2.5 px-3 my-1
            font-medium rounded-lg cursor-pointer
            transition-colors group
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
              }
              ${item?.status === "balance" ? "border border-red-500 " : ""}  
              `}
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
                      block py-2 px-2 my-0.5
                      font-medium rounded-md
                      transition-colors text-sm
                      ${
                        isActive
                          ? "text-indigo-600 bg-indigo-50"
                          : "hover:bg-indigo-50 text-gray-500"
                      }
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
          isSidebarOpen ? "w-full ml-2" : "hidden"
          
        }
       ${item?.status === "balance" ? "border border-red-500 " : ""}` 
      }
      >
        {text}
      </span>
    </NavLink>
  );
};



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
        transition-all duration-300 z-40
        ${isSidebarOpen ? "w-72" : "w-16"}
      `}
    >
      {}
      <nav className="h-full overflow-y-auto scrollbar-hidden">
        {}
        <ul className="px-3 pt-4 pb-24">
          {filteredSidebarItems.map((item) => (
            <SidebarItem
              key={item.text}
              item={item}
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
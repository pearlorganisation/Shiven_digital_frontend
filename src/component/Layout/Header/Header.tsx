// src/components/Header/Header.tsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toggleSidebar } from "@/store/slice/globalDataSlice";
import { Menu, Bell, ChevronDown } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { clearUser } from "@/store/slice/authSlice";
import { useMutation } from "@tanstack/react-query";
import authService from "@/services/authService";
import { errorToast, successToast } from "@/utils/helper";
import { HeaderConfig } from "./HeaderConfig";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isProfileOpen, setProfileOpen] = useState(false);

  const { user } = useAppSelector((state) => state.auth);
  const userRole = useAppSelector((state: any) => state.auth?.user?.role || "viewer");

  const roleFilteredItems = HeaderConfig.filter((item) =>
    item.allowedRoles.includes(userRole)
  );

  // Split into primary (visible) and secondary (More dropdown)
  const primaryLinks = roleFilteredItems.slice(0, 5);

  const logoutMutation = useMutation({
    mutationFn: async () => authService.logout(),
    onSuccess: () => {
      successToast("Log Out successful");
      dispatch(clearUser());
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      errorToast(err || "Failed to Log Out.");
    },
  });

  const handleLogout = () => logoutMutation.mutate();

  const hasDropdown = (item: any) => item.children && item.children.length > 0;

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 z-50 shadow-sm">
      {/* --- Left Section --- */}
      <div className="flex items-center gap-3">
        {/* Sidebar Toggle */}
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2451554031/display_1500/stock-vector-creative-people-connect-logo-minimal-together-unity-logo-diversity-partnership-logo-icon-symbol-2451554031.jpg"
            alt="Company Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navbar Links */}
        <nav className="flex items-center gap-2 ml-4 border-l border-slate-200 pl-3">
          {primaryLinks.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path!}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-indigo-600 transition-colors whitespace-nowrap py-1 px-3 rounded-md hover:bg-slate-50"
              >
                {item.icon}
                <span className="hidden sm:inline">{item.text}</span>
                {hasDropdown(item) && <ChevronDown size={14} className="text-slate-500 ml-1" />}
              </Link>

              {/* Dropdown for children */}
              {hasDropdown(item) && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-slate-200 rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                  {item.children!.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      {child.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* --- Center Spacer --- */}
      <div className="flex-1" />

      {/* --- Right Section: Notifications & Profile --- */}
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 rounded-full p-1 pr-2 text-left hover:bg-slate-100 transition-colors"
          >
            <img
              src={`https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&background=c7d2fe&color=3730a3&bold=true`}
              alt={`${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "User"}
              className="w-9 h-9 rounded-full"
            />
            <div className="hidden xl:block min-w-0">
              <p className="font-semibold text-sm text-slate-700 truncate max-w-32">
                {`${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "User"}
              </p>
            </div>
            <ChevronDown size={16} className="text-slate-500 hidden xl:block ml-1" />
          </button>

          {isProfileOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-xl py-1 z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                onClick={() => setProfileOpen(false)}
              >
                My Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                onClick={() => setProfileOpen(false)}
              >
                Settings
              </Link>
              <div className="my-1 h-px bg-slate-200"></div>
              <button
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {logoutMutation.isPending ? "Signing Out..." : "Sign Out"}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

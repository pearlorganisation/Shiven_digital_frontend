// src/components/Header/Header.tsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toggleSidebar } from "@/store/slice/globalDataSlice"; // Make sure this path is correct
import { Menu, Search, Bell, ChevronDown } from "lucide-react";
import { useAppDispatch } from "@/store/store";
import { logout } from "@/store/slice/authSlice";
import { useMutation } from "@tanstack/react-query";
import authService from "@/services/authService";
import { errorToast, successToast } from "@/utils/helper";


const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isProfileOpen, setProfileOpen] = useState(false);

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return authService.logout();
    },
    onSuccess: (res) => {
      console.log(res);
      successToast("Log Out successful");
      dispatch(logout());
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      errorToast(err || "Failed to Log Out.");
    },
  });

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logging out...");
    logoutMutation.mutate();
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 z-50">
      {/* --- Left Section: Toggle & Logo --- */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="py-1 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2451554031/display_1500/stock-vector-creative-people-connect-logo-minimal-together-unity-logo-diversity-partnership-logo-icon-symbol-2451554031.jpg"
            alt="Company Logo"
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* --- Center Section: Search Bar --- */}
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-5 h-5 text-slate-400" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-4 border border-slate-300 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* --- Right Section: Actions & Profile --- */}
      <div className="flex items-center gap-4">
        {/* Notifications Button */}
        <button className="relative p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors">
          <Bell className="w-6 h-6" />
          {/* Notification Badge */}
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 rounded-full p-1 pr-2 text-left hover:bg-slate-100 transition-colors"
          >
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=c7d2fe&color=3730a3&bold=true"
              alt="User Avatar"
              className="w-9 h-9 rounded-full"
            />
            <div className="hidden lg:block">
              <p className="font-semibold text-sm text-slate-700">John Doe</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
            <ChevronDown size={16} className="text-slate-500 hidden lg:block" />
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-1">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                My Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                Settings
              </Link>
              <div className="my-1 h-px bg-slate-200"></div>
              <button
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
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

// src/components/Header/Header.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bell, ChevronDown } from "lucide-react";
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

  const primaryLinks = roleFilteredItems.slice(0, 5);

  const logoutMutation = useMutation({
    mutationFn: async () => authService.logout(),
    onSuccess: () => {
      successToast("Log Out successful");
      dispatch(clearUser());
      navigate("/login", { replace: true });
    },
    onError: (err: any) => {
      errorToast(err || "Failed to Log Out.");
    },
  });

  const handleLogout = () => logoutMutation.mutate();

  const hasDropdown = (item: any) => item.children && item.children.length > 0;

  return (
    <header className="h-14  w-full border-b border-slate-200 flex items-center justify-between px-4 shadow-sm">
      {/* --- Left: Logo + Nav --- */}
      <div className="flex items-center gap-3">

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1 border-slate-200 ">
          {primaryLinks.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path!}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-indigo-600 transition-colors py-1.5 px-2.5 rounded-md hover:bg-slate-50 whitespace-nowrap"
              >
                {item.icon}
                <span className="hidden lg:inline">{item.text}</span>
                {hasDropdown(item) && <ChevronDown size={14} className="text-slate-500" />}
              </Link>

              {/* Dropdown */}
              {hasDropdown(item) && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-slate-200 rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                  {item.children!.map((child: any) => (
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

      {/* --- Right: Bell + Profile --- */}
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen((p) => !p)}
            className="flex items-center
 gap-2 rounded-full p-1 pr-2 hover:bg-slate-100 transition-colors"
          >
            <img
              src={`https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&background=c7d2fe&color=3730a3&bold=true`}
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden xl:block text-left min-w-0">
              <p className="text-sm font-semibold text-slate-700 truncate max-w-32">
                {`${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "User"}
              </p>
            </div>
            <ChevronDown size={16} className="text-slate-500 hidden xl:block" />
          </button>

          {/* Profile Dropdown */}
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
              <div className="my-1 h-px bg-slate-200" />
              <button
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
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
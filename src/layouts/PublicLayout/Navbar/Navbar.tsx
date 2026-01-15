import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  Home, 
  CircleDollarSign, 
  LayoutGrid, 
  ChevronRight,
  Menu,
  X 
} from "lucide-react";

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(true); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      {/* Main Glassmorphism Container */}
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-xl transition-all duration-300 hover:border-white/20 shadow-2xl">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 pl-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 transition-transform group-hover:rotate-12">
            <span className="text-white font-black text-xl italic">C</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Chic<span className="text-orange-500">ku</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          <NavItem to="/" icon={<Home size={18} />} label="Home" />
          <NavItem to="/features" icon={<LayoutGrid size={18} />} label="Features" />
          <NavItem to="/pricing" icon={<CircleDollarSign size={18} />} label="Pricing" />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Login / CTA Button (Styled like "Get Started") */}
          <Link
            to="/auth/login"
            className="group relative hidden md:flex items-center gap-2 overflow-hidden rounded-full bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-500 active:scale-95"
          >
            <span>Login</span>
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="flex md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-20 inset-x-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/95 p-4 md:hidden animate-in fade-in zoom-in duration-300">
          <MobileNavItem to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
          <MobileNavItem to="/features" label="Features" onClick={() => setIsMenuOpen(false)} />
          <MobileNavItem to="/pricing" label="Pricing" onClick={() => setIsMenuOpen(false)} />
          <Link 
            to="/login" 
            className="mt-2 flex items-center justify-center rounded-xl bg-orange-600 py-3 font-bold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

// Desktop Nav Item Component
const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
      ${isActive 
        ? "text-white bg-white/10" 
        : "text-gray-400 hover:text-white hover:bg-white/5"}
    `}
  >
    {icon}
    {label}
  </NavLink>
);

// Mobile Nav Item Component
const MobileNavItem = ({ to, label, onClick }: { to: string; label: string, onClick: () => void }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `
      px-4 py-3 rounded-xl text-lg font-medium
      ${isActive ? "text-orange-500 bg-white/5" : "text-gray-300"}
    `}
  >
    {label}
  </NavLink>
);

export default Navbar;
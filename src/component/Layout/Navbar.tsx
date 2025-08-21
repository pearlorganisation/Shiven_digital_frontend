// src/components/Navbar.tsx

import React from 'react';

// A simple document-like icon component to replicate the logo.
// You can replace this with your actual SVG or an icon from a library like heroicons.
const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    />
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Logo and Brand Name */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-lg">
                <LogoIcon className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800">
                Shiven Digital
              </span>
            </a>
          </div>

          {/* Right section: Navigation Links and Help Button */}
          <div className="flex items-center">
            {/* Navigation Links - hidden on small screens for simplicity */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="/services"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Help Button */}
            <div className="ml-8">
              <a
                href="/help"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Help
              </a>
            </div>
            
            {/* Mobile Menu Button (optional, for smaller screens) */}
            <div className="md:hidden ml-4">
                {/* You can add a hamburger menu icon here */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
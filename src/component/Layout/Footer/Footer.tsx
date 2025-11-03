// src/components/Footer.tsx

import React from "react";

// --- SVG Icon Components ---
// Reusing the LogoIcon and creating new ones for contact info.

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

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
    />
  </svg>
);

const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with columns */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Brand and Description */}
          <div className="md:col-span-5 lg:col-span-4">
            <a href="/" className="flex items-center mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <LogoIcon className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800">
                Shiven Digital
              </span>
            </a>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leading provider of innovative solutions for modern businesses.
              Committed to excellence and technological advancement.
            </p>
          </div>

          {/* Spacer column for layout */}
          <div className="md:col-span-2 lg:col-span-2"></div>

          {/* Column 2: Contact Us */}
          <div className="md:col-span-5 lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-600">
                <MailIcon className="w-5 h-5 mr-3 text-gray-500" />
                <span>info@btha-abb.com</span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <PhoneIcon className="w-5 h-5 mr-3 text-gray-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <LocationIcon className="w-5 h-5 mr-3 text-gray-500" />
                <span>New York, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="md:col-span-12 lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="py-6 border-t border-gray-200 ">
          <footer className="text-gray-500 text-sm md:text-base text-center">
            {(() => {
              const currentDomain = window.location.hostname;
              const siteName = currentDomain === "chicku.in" ? "chicku.in" : "chicku.info";
              return (
                <>
                  © {new Date().getFullYear()}{" "}
                  <a
                    href={`https://${siteName}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteName}
                  </a>{" "}
                  All rights reserved. Powered By{" "}
                  <a
                    className="text-blue-800"
                    href="https://www.pearlorganisation.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pearl Organisation
                  </a>
                </>
              );
            })()}
          </footer>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

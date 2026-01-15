import React from "react";
import { Link } from "react-router-dom";
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Aapka logic
  const currentDomain = window.location.hostname;
  const siteName = currentDomain === "chicku.in" ? "chicku.in" : "chicku.info";

  return (
    <footer className="relative border-t border-white/5 bg-[#050505] pt-16 pb-8 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 transition-transform group-hover:rotate-12">
                <span className="text-white font-black text-xl italic">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Chic<span className="text-orange-500">ku</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering businesses with smarter messaging tools. Manage your social, WhatsApp, and email campaigns in one unified workspace.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/features">Features</FooterLink></li>
              <li><FooterLink href="/pricing">Pricing</FooterLink></li>
              <li><FooterLink href="/app">Dashboard</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
              <li><FooterLink href="#">Terms of Service</FooterLink></li>
              <li><FooterLink href="#">Refund Policy</FooterLink></li>
              <li><FooterLink href="#">Contact Us</FooterLink></li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Stay Connected</h4>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail size={16} className="text-orange-500" />
              <span>support@{siteName}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm mt-1">
              <MapPin size={16} className="text-orange-500" />
              <span>Global Headquaters, India</span>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION (Aapka Exact Data yahan hai) --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-500 text-sm text-center md:text-left">
             © {currentYear} {" "}
             <a 
               href={`https://${siteName}/`} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
             >
               {siteName}
             </a> 
             . All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="opacity-70">Powered By</span>
            <a 
              href="https://www.pearlorganisation.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all"
            >
              Pearl Organisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-component for Footer Links with hover effect
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link to={href} className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">
    {children}
  </Link>
);

// Sub-component for Social Icons
const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    className="h-10 w-10 flex items-center justify-center rounded-full border border-white/5 bg-white/5 text-gray-400 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
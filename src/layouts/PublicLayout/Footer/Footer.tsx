import React from 'react';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Facebook,
  Globe
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white pt-6 pb-10 border-t border-slate-100 overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/60 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] bg-gradient-to-tr from-purple-50/60 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Bio (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-500/20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105">
                <span className="font-black text-xl italic">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
              <span className="text-blue-600">Chiku</span>
              </span>
            </a>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              The ultimate platform for creators, businesses, and agencies to collaborate, engage, and grow their social presence effortlessly.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
              <SocialIcon icon={<Facebook size={18} />} href="#" />
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-slate-900 font-bold mb-6 text-lg tracking-tight flex items-center gap-2">Platform</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><FooterLink href="#">Unified Inbox</FooterLink></li>
              <li><FooterLink href="#">Bulk Scheduling</FooterLink></li>
              <li><FooterLink href="#">AI Content</FooterLink></li>
              <li><FooterLink href="#">Analytics</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold mb-6 text-lg tracking-tight">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><FooterLink href="#">About Us</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
              <li><FooterLink href="#">Terms of Service</FooterLink></li>
            </ul>
          </div>

          {/* Column 4: Contact/Newsletter (Span 3) */}
          <div className="lg:col-span-3">
             <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150"></div>
                
                <h4 className="text-slate-900 font-bold mb-4 text-lg relative z-10">Get in touch</h4>
                <div className="flex flex-col gap-4 relative z-10">
                  <a href="mailto:support@socialscale.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group/link">
                      <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center shadow-sm text-blue-500 group-hover/link:bg-blue-500 group-hover/link:text-white transition-all duration-300">
                        <Mail size={16} />
                      </div>
                      <span className="text-sm font-semibold">support@socialscale.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-slate-600 group/link cursor-default">
                      <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center shadow-sm text-blue-500 group-hover/link:bg-blue-500 group-hover/link:text-white transition-all duration-300">
                        <MapPin size={16} />
                      </div>
                      <span className="text-sm font-semibold">Global Headquarters</span>
                  </div>
                  <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group/link">
                      <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center shadow-sm text-blue-500 group-hover/link:bg-blue-500 group-hover/link:text-white transition-all duration-300">
                        <Globe size={16} />
                      </div>
                      <span className="text-sm font-semibold">www.socialscale.com</span>
                  </a>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm font-medium text-center md:text-left">
             &copy; {currentYear} <a href="#" className="text-slate-900 hover:text-blue-600 transition-colors font-semibold">SocialScale</a>. All rights reserved.
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="opacity-70 font-medium">Powered By</span>
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs tracking-wide group hover:border-blue-200 hover:bg-white hover:shadow-md hover:text-blue-600 transition-all cursor-default">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              SocialScale Team
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-component for Footer Links with hover effect
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="hover:text-blue-600 hover:translate-x-1 transition-all duration-200 inline-block">
    {children}
  </a>
);

// Sub-component for Social Icons
const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
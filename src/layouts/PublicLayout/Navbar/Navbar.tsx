import React, { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { 
  ChevronDown, 
  Layers, 
  BarChart3, 
  Zap, 
  ArrowRight, 
  Menu, 
  X, 
  Palette,
  Briefcase,
  Rocket,
  Globe,
  BookOpen,
  Layout
} from 'lucide-react';

// --- 1. DYNAMIC CONFIGURATION ---
const NAVIGATION_CONFIG = {
  brand: {
    // name: "Shiven",
    // suffix: "Digital",
    logoSrc: "/chikuLogo.png"
  },
  mainLinks: [
    { label: 'Publish', href: '#publish', icon: <Layout size={16} /> },
    { label: 'Analytics', href: '#analytics', icon: <BarChart3 size={16} /> },
    { label: 'Resources', href: '#resources', icon: <BookOpen size={16} /> },
  ],
  dropdowns: {
    solutions: {
      label: "Solutions",
      icon: <Layers size={16} />,
      items: [
        { 
          id: 'creators',
          title: 'Creators', 
          desc: 'Grow from zero to viral', 
          icon: <Palette size={20} />, 
          bg: 'bg-purple-50', 
          color: 'text-purple-600' 
        },
        { 
          id: 'business',
          title: 'Business', 
          desc: 'Enterprise messaging', 
          icon: <Briefcase size={20} />, 
          bg: 'bg-blue-50', 
          color: 'text-blue-600' 
        },
        { 
          id: 'agencies',
          title: 'Agencies', 
          desc: 'Multi-client control', 
          icon: <Rocket size={20} />, 
          bg: 'bg-teal-50', 
          color: 'text-teal-600' 
        },
      ]
    }
  },
  auth: {
    loginLabel: "Log in",
    ctaLabel: "Get Started"
  }
};

const ModernNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Entrance Stagger Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".nav-element", 
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.05, ease: "power4.out", clearProps: "all" }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  // Dropdown 3D Transition
  useLayoutEffect(() => {
    if (showDropdown) {
      gsap.fromTo(dropdownRef.current, 
        { opacity: 0, y: 15, rotateX: -12, transformOrigin: "top" },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.4, ease: "power4.out", display: 'grid' }
      );
    } else {
      gsap.to(dropdownRef.current, { 
        opacity: 0, y: 10, rotateX: -10, duration: 0.2, ease: "power2.in", 
        onComplete: () => { gsap.set(dropdownRef.current, { display: 'none' }); } 
      });
    }
  }, [showDropdown]);

  return (
    <div ref={navRef} className="fixed top-0 w-full z-[100] px-3 py-3 lg:px-8 perspective-1000">
      <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl   rounded-full px-4 lg:px-6">
        <div className="flex justify-between items-center h-14 lg:h-16">
          
          {/* LOGO */}
          <div className="nav-element flex items-center gap-2 group cursor-pointer shrink-0">
            <div className="w-9 h-9 lg:w-14 lg:h-14 rounded-xl overflow-hidden transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
               <img src={NAVIGATION_CONFIG.brand.logoSrc} alt="logo" className="w-full h-full object-contain " />
            </div>
            {/* <span className="hidden sm:block text-lg font-black text-[#1E1E1E] tracking-tighter">
              {NAVIGATION_CONFIG.brand.name}<span className="text-[#1F6ED4]">{NAVIGATION_CONFIG.brand.suffix}</span>
            </span> */}
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-2">
            {NAVIGATION_CONFIG.mainLinks.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
            
            {/* Dynamic Dropdown Trigger */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="nav-element flex items-center gap-1.5 px-4 py-2 text-[#6C757D] font-bold text-[11px] uppercase tracking-widest hover:text-[#1F6ED4] transition-all rounded-full hover:bg-gray-50/50">
                {NAVIGATION_CONFIG.dropdowns.solutions.icon}
                {NAVIGATION_CONFIG.dropdowns.solutions.label}
                <ChevronDown size={14} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* 3D MEGA MENU */}
              <div 
                ref={dropdownRef} 
                className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-white rounded-[2.5rem] shadow-[0_30px_90px_rgba(0,0,0,0.12)] border border-[#E9ECEF] p-6 hidden grid-cols-2 gap-4"
              >
                {NAVIGATION_CONFIG.dropdowns.solutions.items.map((item) => (
                  <DropdownCard key={item.id} {...item} />
                ))}
                
                {/* AI Feature Strip */}
                {/* <div className="col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-4 flex items-center justify-between group/ai cursor-pointer border border-blue-100/50">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
                        <Zap size={16} fill="white" />
                      </div>
                      <p className="text-sm font-bold text-gray-900">Discover AI Content Suite</p>
                   </div>
                   <ArrowRight size={18} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div> */}
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-2">
            <button className="hidden md:flex nav-element bg-blue-600  px-5 py-2 text-xs font-bold text-white hover:bg-blue-950 transition-all rounded-full hover:scale-105 cursor-pointer">
              {NAVIGATION_CONFIG.auth.loginLabel}
            </button>
            
            <button className="nav-element hidden  md:block px-6 lg:px-8 py-2.5 bg-gradient-to-r from-[#FF8C42] to-[#FFB347] text-white font-black text-[11px] rounded-full shadow-lg shadow-orange-100 hover:scale-105 cursor-pointer hover:shadow-orange-300 hover:-translate-y-1 transition-all uppercase tracking-widest">
              {NAVIGATION_CONFIG.auth.ctaLabel}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 ml-1"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* RESPONSIVE MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-gray-100 shadow-2xl p-6 z-[101] flex flex-col gap-1">
           {NAVIGATION_CONFIG.mainLinks.map(link => (
             <a key={link.label} href={link.href} className="flex items-center gap-3 px-4 py-3 text-lg font-black text-[#1E1E1E] hover:bg-gray-50 rounded-2xl transition-all active:scale-95">
               <span className="text-[#1F6ED4]">{link.icon}</span>
               {link.label}
             </a>
           ))}
           
           <button 
              onClick={() => setMobileDropOpen(!mobileDropOpen)}
              className="w-full flex justify-between items-center px-4 py-3 text-lg font-black text-[#1E1E1E] hover:bg-gray-50 rounded-2xl"
            >
              <span className="flex items-center gap-3">
                <span className="text-[#1F6ED4]">{NAVIGATION_CONFIG.dropdowns.solutions.icon}</span>
                {NAVIGATION_CONFIG.dropdowns.solutions.label}
              </span>
              <ChevronDown className={`transition-transform ${mobileDropOpen ? 'rotate-180' : ''}`} />
           </button>
           
           {mobileDropOpen && (
              <div className="grid grid-cols-1 gap-2 mt-2 px-2">
                {NAVIGATION_CONFIG.dropdowns.solutions.items.map(item => (
                  <div key={item.id} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 border border-gray-100">
                    <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shadow-sm`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{item.title}</p>
                      <p className="text-[10px] text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           )}

           <div className="flex flex-col gap-3 pt-6 border-t border-gray-50 mt-4">
              <button className="w-full py-4 rounded-2xl bg-gray-50 font-bold text-[#1E1E1E]">{NAVIGATION_CONFIG.auth.loginLabel}</button>
              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF8C42] to-[#FFB347] text-white font-bold shadow-lg">{NAVIGATION_CONFIG.auth.ctaLabel}</button>
           </div>
        </div>
      )}
    </div>
  );
};

// --- SUB-COMPONENTS ---

const NavLink: React.FC<{label: string, href: string, icon: React.ReactNode}> = ({ label, href, icon }) => (
  <a 
    href={href} 
    className="nav-element group flex items-center gap-2 px-4 py-2 text-[#6C757D] font-bold text-[11px] uppercase tracking-widest hover:text-[#1F6ED4] transition-all rounded-full hover:bg-gray-50/50"
  >
    <span className="transition-transform group-hover:-translate-y-0.5 group-hover:scale-110">{icon}</span>
    {label}
  </a>
);

const DropdownCard: React.FC<{title: string, desc: string, icon: React.ReactNode, bg: string, color: string}> = ({title, desc, icon, bg, color}) => (
  <a href="#" className="group flex items-start gap-4 p-4 rounded-3xl hover:bg-gray-50 transition-all duration-300 relative border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-gray-500/5">
    <div className={`w-12 h-12 shrink-0 ${bg} ${color} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 group-hover:shadow-lg`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-black text-[#1E1E1E] mb-0.5">{title}</p>
      <p className="text-[11px] text-[#6C757D] leading-tight font-medium">{desc}</p>
    </div>
  </a>
);

export default ModernNavbar;
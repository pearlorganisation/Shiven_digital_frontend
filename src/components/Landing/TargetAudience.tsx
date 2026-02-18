import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Store, Briefcase, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- DYNAMIC DATA: EVERY WORD PRESERVED ---
const AUDIENCE_DATA = {
  header: "Made for Anyone Who Wants to Grow Online",
  intro: "Our platform is built to simplify marketing, engagement, and audience understanding with the power of AI-driven analytics and audience segmentation tools. Whether you're a creator, business owner, or marketer, Shiven Digital helps you connect with the right people — the smart way.",
  segments: [
    {
      title: "Content Creators",
      desc: "Share your ideas, grow your audience, and monetize faster. Use audience segmentation tools to understand who engages most with your content and tailor future posts for better reach and results.",
      icon: <Users className="text-[#1F6ED4]" />,
      image: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=600&q=80"
    },
    {
      title: "Small Businesses",
      desc: "Reach more customers, stay connected, and boost sales. Segment your audience with smart audience segmentation tools to deliver personalized messages that convert leads into loyal customers.",
      icon: <Store className="text-[#28C76F]" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
    },
    {
      title: "Agencies & Marketers",
      desc: "Manage multiple accounts, campaigns, and clients effortlessly. Our advanced audience segmentation tools allow you to create targeted strategies for each client, improving engagement and ROI.",
      icon: <Briefcase className="text-[#8E44AD]" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
    },
    {
      title: "Startups & Entrepreneurs",
      desc: "Launch smarter, scale faster, and save time. With AI-powered audience segmentation tools, identify high-value customer segments and design campaigns that deliver measurable growth.",
      icon: <Rocket className="text-[#FF8C42]" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
    }
  ],
  footer: "No matter your size or industry, if you want to connect, engage, and grow, Shiven Digital is built for you — with the smartest audience segmentation tools guiding every step of your marketing journey."
};

const AudienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle slide-up. We do NOT use opacity: 0 here so the data is always there.
      gsap.from(".segment-card", {
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%", // Triggers almost immediately when it enters view
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-[#FFFEFA] py-20 px-6 border-t border-[#E9ECEF] block"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-black text-[#1E1E1E] leading-tight mb-6">
            {AUDIENCE_DATA.header}
          </h2>
          <p className="text-base lg:text-lg text-[#6C757D] leading-relaxed max-w-4xl font-medium">
            {AUDIENCE_DATA.intro}
          </p>
        </div>

        {/* --- SEGMENTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {AUDIENCE_DATA.segments.map((item, i) => (
            <div 
              key={i} 
              className="segment-card group bg-white border border-[#E9ECEF] rounded-[2.5rem] overflow-hidden flex flex-col hover:shadow-2xl hover:border-[#1F6ED4]/30 transition-all duration-500"
            >
              {/* Top Image */}
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  alt={item.title} 
                />
                <div className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-[#1E1E1E] mb-4 group-hover:text-[#1F6ED4] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6C757D] leading-relaxed mb-2 flex-grow font-medium">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-[#F5F7FA]">
                  <CheckCircle2 size={16} className="text-[#28C76F]" />
                  <span className="text-[10px] font-black uppercase text-[#1E1E1E] tracking-widest">Target Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- FOOTER CARD --- */}
        <div className="segment-card relative bg-[#1E1E1E] rounded-[3rem] p-10 lg:p-16 overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F6ED4]/20 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <p className="text-xl lg:text-3xl font-bold text-white leading-snug italic">
                "{AUDIENCE_DATA.footer}"
              </p>
            </div>
            <div className="lg:w-1/3 w-full">
              <button className="w-full py-5 bg-[#1F6ED4] text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-[#1E1E1E] transition-all shadow-xl group">
                Scale Your Growth
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AudienceSection;
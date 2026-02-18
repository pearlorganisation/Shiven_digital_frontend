import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Zap, Sparkles, Calendar, BarChart3, 
  MessageSquare, Users, Cpu, CheckCircle2 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- DYNAMIC DATA: 100% PRESERVED ---
const PLATFORM_DATA = {
  greatness: {
    title: "What makes chicku.in great?",
    subtitle: "Your Complete Growth Partner in Digital Marketing",
    intro: "Chicku.in is much more than a tool for running marketing activities; it's an intelligent ecosystem where creativity, automation, and intelligence come together. On our platform, everything you need to attract, engage, and retain your audience comes together.",
    points: [
      { t: "All-in-One Marketing Solution", d: "Drive WhatsApp, SMS, Email, and Social Media campaigns-all from one dashboard.", icon: Zap, color: "#1F6ED4" },
      { t: "AI-Driven Creativity", d: "Generate captions, posts, and marketing messages instantly using AI-powered writing tools.", icon: Sparkles, color: "#8E44AD" },
      { t: "Smarter Scheduling", d: "Schedule once, publish everywhere — automate across all major social networks.", icon: Calendar, color: "#2CA7DF" },
      { t: "In-Depth Analytics & Reporting", d: "Leverage our audience insights and segmentation tool to monitor engagement, understand customer behavior, and optimize your campaigns in real time.", icon: BarChart3, color: "#28C76F" },
      { t: "Unified Communication Hub", d: "Have unified control over DMs, mentions, and comments through one unified inbox for better engagement.", icon: MessageSquare, color: "#FF8C42" },
      { t: "Powerful Team Collaboration", d: "Teams can smoothly integrate with features like role-based permissions, approval systems, and task sharing.", icon: Users, color: "#1E1E1E" },
      { t: "Advanced Automation", d: "Save time by auto-posting, using smart replies, and automating workflows for small teams and large agencies alike.", icon: Cpu, color: "#D63384" }
    ],
    outro: "chicku.in empowers marketers, businesses, agencies and creators to connect meaningfully with their audiences: every post, every campaign, every time."
  },
  why: {
    title: "WHY Chicku.in?",
    intro: "Designed for Every Growth Journey Whether an individual creator or a growing business, Shiven Digital adapts to your goals with intelligent tools and flexible features.",
    segments: [
      { t: "Content Developers", d: "Turn creative ideas into viral content with the help of our AI caption generator, automated post scheduler, and real-time engagement insights." },
      { t: "Small Businesses", d: "Create long-lasting customer relationships through targeted campaigns, WhatsApp & SMS marketing, and our audience insights and segmentation tool for precision targeting." },
      { t: "Agencies & Digital Marketers", d: "Manage multi-brand campaigns more efficiently and at scale with multi-account management, custom reporting, and bulk scheduling." },
      { t: "Startups & Entrepreneurs", d: "Launch smarter by using automation tools, AI-powered scheduling, and audience insights backed by data to grow faster with fewer resources." }
    ],
    outro: "No matter what your industry or size, if you want to connect, engage, and grow online, Shiven Digital is your all-in-one marketing partner."
  },
  who: {
    title: "Who can benefit?",
    subtitle: "Designed for anyone who wants to grow online",
    intro: "Our platform is designed to make marketing and engaging:",
    list: [
      { t: "Content Creators", d: "– Share your ideas, grow your audience, and monetize faster." },
      { t: "Small Business", d: "– Reach more customers and stay connected with them; increase sales." },
      { t: "Agencies and Digital Marketers", d: "– Manage multiple accounts, campaigns and clients with ease." },
      { t: "Startups and Entrepreneurs", d: "– Launch smarter, scale faster and save time." }
    ],
    footer: "No matter what size or industry you are in, if you want to connect, engage, and grow -- we are for you."
  }
};

const PlatformExcellence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".data-row", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#FFFEFA] py-10 px-6 border-t border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- PART 1: WHAT MAKES US GREAT --- */}
        <div className="mb-12">
          <div className="mb-8 data-row">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1E1E1E] mb-2">{PLATFORM_DATA.greatness.title}</h2>
            <p className="text-[#1F6ED4] font-bold text-sm uppercase tracking-widest mb-4">{PLATFORM_DATA.greatness.subtitle}</p>
            <p className="text-[#333333] text-sm lg:text-base leading-relaxed max-w-5xl font-medium">{PLATFORM_DATA.greatness.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {PLATFORM_DATA.greatness.points.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="data-row bg-white border border-[#E9ECEF] rounded-xl p-5 hover:border-[#1F6ED4]/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white mb-4 shadow-sm" style={{ backgroundColor: p.color }}>
                    <Icon size={18} />
                  </div>
                  <h4 className="text-sm font-black text-[#1E1E1E] mb-2">{p.t}</h4>
                  <p className="text-[12px] text-[#333333] leading-normal font-medium">{p.d}</p>
                </div>
              );
            })}
          </div>
          <p className="data-row text-[#1F6ED4] font-black text-[11px] uppercase tracking-tighter text-center border-b border-[#E9ECEF] pb-8">{PLATFORM_DATA.greatness.outro}</p>
        </div>

        {/* --- PART 2: WHY & WHO (Compact Side-by-Side) --- */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          
          {/* WHY SECTION */}
          <div className="data-row bg-[#1E1E1E] text-white rounded-[2rem] p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1F6ED4]/20 blur-[60px]" />
            <h3 className="text-2xl font-black mb-4">{PLATFORM_DATA.why.title}</h3>
            <p className="text-xs text-white/80 mb-6 font-medium leading-relaxed">{PLATFORM_DATA.why.intro}</p>
            
            <div className="space-y-5">
              {PLATFORM_DATA.why.segments.map((s, i) => (
                <div key={i} className="border-l-2 border-[#1F6ED4] pl-4">
                  <h5 className="font-black text-[#2CA7DF] uppercase text-[10px] mb-1">{s.t}</h5>
                  <p className="text-[12px] text-white leading-snug">{s.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] font-bold text-[#1F6ED4] uppercase tracking-widest">{PLATFORM_DATA.why.outro}</p>
          </div>

          {/* WHO SECTION */}
          <div className="data-row bg-white border border-[#E9ECEF] rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#1E1E1E] mb-2">{PLATFORM_DATA.who.title}</h3>
              <p className="text-[#1F6ED4] font-bold text-[10px] uppercase tracking-widest mb-4">{PLATFORM_DATA.who.subtitle}</p>
              <p className="text-[#333333] text-xs font-bold mb-6 italic">{PLATFORM_DATA.who.intro}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {PLATFORM_DATA.who.list.map((l, i) => (
                  <div key={i} className="p-4 bg-[#F5F7FA] rounded-xl border border-transparent hover:border-[#28C76F]/30 transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 size={14} className="text-[#28C76F]" />
                      <h6 className="font-black text-[#1E1E1E] text-[11px]">{l.t}</h6>
                    </div>
                    <p className="text-[11px] text-[#333333] leading-tight font-medium">{l.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#F5F7FA] border-l-4 border-[#1F6ED4] rounded-r-xl">
              <p className="text-[12px] font-black text-[#1E1E1E] leading-tight">
                {PLATFORM_DATA.who.footer}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PlatformExcellence;
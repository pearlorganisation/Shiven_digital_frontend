import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  Target, 
  Layout, 
  Zap, 
  MousePointer2, 
  Smartphone, 
  PenTool
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContentEngine: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      tl.from(".reveal-text", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2 })
        .from(".reveal-card", { scale: 0.9, opacity: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const capabilities = [
    { text: "Marketing messages for WhatsApp, SMS, and Email campaigns", icon: <Smartphone size={18} /> },
    { text: "Creating conversion-oriented and persuasive ad copy and promotion copy", icon: <Target size={18} /> },
    { text: "Branded Captions, Description and Call-to-Actions", icon: <PenTool size={18} /> },
    { text: "Tailored campaign ideas for your audience segments", icon: <Sparkles size={18} /> },
    { text: "Visually ready content with intelligent formatting advice", icon: <MousePointer2 size={18} /> },
    { text: "Reusable content blocks to ensure brand consistency", icon: <Layout size={18} /> },
  ];

  return (
    <section ref={containerRef} className="bg-[#FFFEFA] py-20 px-6 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* TOP HEADER */}
        <div className="mb-12">
          <h2 className="reveal-text text-[#1E1E1E] text-3xl lg:text-5xl font-black leading-tight mb-4">
            From organic posts to targeted ads, manage your social channels all in one place
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center gap-2">
            <h3 className="reveal-text text-[#1F6ED4] font-bold text-xl uppercase tracking-wider">
              Create with Powerful Content Creation Tools
            </h3>
            <span className="hidden lg:block h-px w-12 bg-[#E9ECEF]" />
            <p className="reveal-text text-[#8E44AD] font-semibold text-lg italic">
              Transform ideas into full-fledged marketing campaigns
            </p>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: NARRATIVE (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="reveal-card h-full p-8 bg-white border border-[#E9ECEF] rounded-[2rem] shadow-sm flex flex-col justify-center">
              <p className="text-[#1E1E1E] text-lg leading-relaxed mb-6">
                Creating is not just about posting; it is about building a message that engages, converts, and is
                consistent across all platforms that your brand has. Our creation tools allow you to create high-
                value marketing content without a design or tech skill set.
              </p>
              <div className="h-px bg-gradient-to-r from-[#E9ECEF] to-transparent mb-6" />
              <p className="text-[#1E1E1E] text-lg leading-relaxed">
                From the concept of the campaigns to the promotional messages, emails, SMS, WhatsApp
                Broadcasts, to the ad creatives, everything is created from here. Using the help of AI, you can
                go from a concept to a fully fledged campaign in a matter of minutes.
              </p>
            </div>
          </div>

          {/* RIGHT: CAPABILITIES (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="reveal-card h-full p-8 bg-[#1F6ED4]/5 border border-[#1F6ED4]/10 rounded-[2rem]">
              <h4 className="text-[#1F6ED4] font-black mb-8 flex items-center gap-2">
                <Zap size={20} fill="currentColor" />
                What you can create easily:
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-[#E9ECEF] hover:border-[#1F6ED4] transition-all group">
                    <div className="shrink-0 text-[#1F6ED4] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <p className="text-[13px] font-bold text-[#1E1E1E] leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM: PHILOSOPHY (12 Cols) */}
          <div className="lg:col-span-12">
            <div className="reveal-card px-10 py-2 bg-[#1E1E1E] rounded-[2.5rem] text-white flex flex-col lg:flex-row gap-8 items-center border-b-8 border-[#8E44AD]">
              <div className="lg:w-2/3">
                <p className="text-xl lg:text-xl font-medium leading-relaxed opacity-90">
                  Our content engine knows the nuances of tone, the subtleties of intent, and the ways of
                  audience behavior, making your messages human, relevant, and engaging. 
                </p>
              </div>
              <div className="lg:w-1/3 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-sm lg:text-base leading-relaxed text-white/80 italic">
                  Whether it’s a new product launch, a seasonal offer, or a relationship-building exercise with existing clients, the act
                  of creation gets smarter and faster. <span className="text-[#FFB347] font-black">No blank pages. No creative blocks.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentEngine;
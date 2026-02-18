import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CheckCircle2, Sparkles, BarChart3, 
  Inbox, Globe, Zap 
} from 'lucide-react';
import { any } from 'zod';

gsap.registerPlugin(ScrollTrigger);

// --- DYNAMIC DATA: ALL ORIGINAL TEXT INCLUDED ---
const MASTER_STACK_DATA = [
  {
    id: "content-creation",
    header: "Creation & Publishing",
    title: "Create with AI-Powered Content Creation Tools",
    mainBody: "Bring all of your content creation and publishing requirements under one umbrella. Use our content creation, posting, automation, or bulk posting features on various popular platforms such as Facebook, Instagram, Twitter, LinkedIn, YouTube, Pinterest. Create content easily using readymade templates for posts, emails, and advertisements that are set up for high levels of interaction.",
    subPoints: [
      "Handle multiple brands or organizations using a master dashboard while being consistent in messaging.",
      "Your content is produced once using marketing tools that integrate websites; it reaches all platforms – faster & smarter.",
      "Schedule, automate or publish posts across all platforms- Facebook, Instagram, Twitter (X), LinkedIn, YouTube, and Pinterest."
    ],
    image: "https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg",
    accent: "#1F6ED4",
    icon: <Sparkles />,
    side: 'right'
  },
  {
    id: "marketing-integration",
    header: "Unified Marketing",
    title: "All in one Marketing Platform & Website Integration",
    mainBody: "Connect your favorite tools: WhatsApp, Email, and SMS come together to create unified multichannel campaigns. Add engagement widgets, lead forms, and analytics trackers directly to your website. Templates & Social Media Content Planner allow you to save your time through the use of pre-designed, tuned posts, emails, and ads.",
    subPoints: [
      "Identify and manage several brands or client accounts within one powerful Multiple Companies & Brands Dashboard.",
      "Better understand your customers through smart data visualization and AI-powered segmentation to build targeted campaigns that convert.",
      "Add engagement widgets, lead forms, and analytics trackers directly to your website."
    ],
    image: "https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg",
    accent: "#8E44AD",
    icon: <Globe />,
    side: 'left'
  },
  {
    id: "analytics-ops",
    header: "Analytics & Engagement",
    title: "Social Media Analytics Platform & Common Inbox",
    mainBody: "Take confident actions based on clear insights. The analytics tools allow you to view performance on various platforms through easy-to-read dashboards. Metrics such as engagement rates, reach, clicks, or campaign performance are measurable on one interface. Response / Engage with AI Assistance allows you to respond to comments and mentions promptly.",
    subPoints: [
      "Common Inbox allows you to manage all messages, comments, and mentions from social media and WhatsApp in one place.",
      "Analyze customer behavior and successful content to optimize future campaign delivery and export reports for teams.",
      "Pricing that is transparent, scalable, and flexible: for individuals, small businesses, and agencies."
    ],
    image: "https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg",
    accent: "#1E1E1E",
    icon: <BarChart3 />,
    dark: true,
    side: 'right'
  }
];

const FeatureStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.mega-card');
      
      // ONLY apply stacking on screens larger than 1024px (Desktop)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: `+=${cards.length * 100}%`,
            pin: true,
            scrub: 2, // Slower scrub for smoother movement
          }
        });

        cards.forEach((card, i) => {
          if (i === 0) return;
          tl.fromTo(card, 
            { y: "100vh", rotate: 2, opacity: 0 }, 
            { 
              y: i * 20, 
              rotate: 0, 
              opacity: 1, 
              duration: 1, 
              ease: "power3.out" 
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FFFEFA]">
      <div ref={triggerRef} className="relative min-h-screen lg:h-screen w-full flex flex-col items-center">
        
        {/* HEADER SECTION - FIXED ON DESKTOP */}
        <div className="z-[200] w-full pt-12 lg:pt-16 pb-6 text-center bg-[#FFFEFA]/95 backdrop-blur-md">
          <h2 className="text-3xl lg:text-5xl font-black text-[#1E1E1E] leading-tight">
            Features & Content Creation tools
          </h2>
          <p className="text-sm text-[#6C757D] mt-3 max-w-2xl mx-auto px-6 font-medium">
            Each tool and feature is deliberately designed to make your workflow seamless, data-driven, and creative.
          </p>
        </div>

        {/* STACK CONTAINER */}
        <div className="relative w-full max-w-7xl flex-grow px-4 lg:px-8 pb-20 lg:pb-0">
          <div className="flex flex-col lg:block gap-8 mt-6">
            {MASTER_STACK_DATA.map((item, index) => (
              <div 
                key={item.id}
                className={`mega-card lg:absolute top-0 left-0 right-0 min-h-fit lg:h-[72vh] rounded-[2rem] lg:rounded-[3.5rem] shadow-xl lg:shadow-[0_-20px_60px_rgba(0,0,0,0.1)] border border-[#E9ECEF] overflow-hidden ${item.dark ? 'bg-[#1E1E1E] text-white' : 'bg-white text-[#1E1E1E]'}`}
                style={{ zIndex: index + 10 }}
              >
                <div className="grid lg:grid-cols-2 h-full">
                  
                  {/* IMAGE SIDE */}
                  <div className={`relative h-64 lg:h-full overflow-hidden ${item.side === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img src={item.image} className="w-full h-full object-cover" alt="dashboard preview" />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>

                  {/* CONTENT SIDE */}
                  <div className={`p-8 lg:p-12 flex flex-col h-full ${item.side === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#F5F7FA] text-[#1F6ED4] shadow-sm">
                        {React.cloneElement(item.icon as React.ReactElement)}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">{item.header}</span>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight">{item.title}</h3>
                      <p className={`text-sm lg:text-base leading-relaxed mb-8 ${item.dark ? 'text-white/80' : 'text-[#6C757D]'}`}>
                        {item.mainBody}
                      </p>

                      <div className="space-y-4">
                        {item.subPoints.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3 group">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#28C76F]/20 flex items-center justify-center text-[#28C76F]">
                              <CheckCircle2 size={14} />
                            </div>
                            <p className={`text-xs lg:text-[13px] font-medium leading-relaxed ${item.dark ? 'text-white/70' : 'text-[#4A5568]'}`}>
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-current border-opacity-10 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <p className="text-[10px] font-bold text-[#1F6ED4] text-center sm:text-left">
                        Every feature in chicku.in is designed to save time & help you scale precisely.
                      </p>
                      <span className="text-[10px] font-black opacity-30">0{index + 1} / 03</span>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER CALLOUT AREA */}
      <div className="h-[30vh] lg:h-[50vh] flex items-center justify-center bg-[#FFFEFA] border-t border-[#E9ECEF]">
         <div className="text-center px-6">
            <h2 className="text-xl lg:text-3xl font-black text-[#1F6ED4] italic max-w-4xl mx-auto leading-relaxed opacity-60">
               "Built by marketers, for marketers. Every tool under one umbrella."
            </h2>
         </div>
      </div>
    </div>
  );
};

export default FeatureStack;
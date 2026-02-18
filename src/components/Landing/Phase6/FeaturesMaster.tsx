// // import React, { useLayoutEffect, useRef } from 'react';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import { 
// //   CheckCircle2, Sparkles, BarChart3, 
// //   Inbox, Globe, Zap 
// // } from 'lucide-react';
// // import { any } from 'zod';

// // gsap.registerPlugin(ScrollTrigger);

// // // --- DYNAMIC DATA: ALL ORIGINAL TEXT INCLUDED ---
// // const MASTER_STACK_DATA = [
// //   {
// //     id: "content-creation",
// //     header: "Creation & Publishing",
// //     title: "Create with AI-Powered Content Creation Tools",
// //     mainBody: "Bring all of your content creation and publishing requirements under one umbrella. Use our content creation, posting, automation, or bulk posting features on various popular platforms such as Facebook, Instagram, Twitter, LinkedIn, YouTube, Pinterest. Create content easily using readymade templates for posts, emails, and advertisements that are set up for high levels of interaction.",
// //     subPoints: [
// //       "Handle multiple brands or organizations using a master dashboard while being consistent in messaging.",
// //       "Your content is produced once using marketing tools that integrate websites; it reaches all platforms – faster & smarter.",
// //       "Schedule, automate or publish posts across all platforms- Facebook, Instagram, Twitter (X), LinkedIn, YouTube, and Pinterest."
// //     ],
// //     image: "https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg",
// //     accent: "#1F6ED4",
// //     icon: <Sparkles />,
// //     side: 'right'
// //   },
// //   {
// //     id: "marketing-integration",
// //     header: "Unified Marketing",
// //     title: "All in one Marketing Platform & Website Integration",
// //     mainBody: "Connect your favorite tools: WhatsApp, Email, and SMS come together to create unified multichannel campaigns. Add engagement widgets, lead forms, and analytics trackers directly to your website. Templates & Social Media Content Planner allow you to save your time through the use of pre-designed, tuned posts, emails, and ads.",
// //     subPoints: [
// //       "Identify and manage several brands or client accounts within one powerful Multiple Companies & Brands Dashboard.",
// //       "Better understand your customers through smart data visualization and AI-powered segmentation to build targeted campaigns that convert.",
// //       "Add engagement widgets, lead forms, and analytics trackers directly to your website."
// //     ],
// //     image: "https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg",
// //     accent: "#8E44AD",
// //     icon: <Globe />,
// //     side: 'left'
// //   },
// //   {
// //     id: "analytics-ops",
// //     header: "Analytics & Engagement",
// //     title: "Social Media Analytics Platform & Common Inbox",
// //     mainBody: "Take confident actions based on clear insights. The analytics tools allow you to view performance on various platforms through easy-to-read dashboards. Metrics such as engagement rates, reach, clicks, or campaign performance are measurable on one interface. Response / Engage with AI Assistance allows you to respond to comments and mentions promptly.",
// //     subPoints: [
// //       "Common Inbox allows you to manage all messages, comments, and mentions from social media and WhatsApp in one place.",
// //       "Analyze customer behavior and successful content to optimize future campaign delivery and export reports for teams.",
// //       "Pricing that is transparent, scalable, and flexible: for individuals, small businesses, and agencies."
// //     ],
// //     image: "https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg",
// //     accent: "#1E1E1E",
// //     icon: <BarChart3 />,
// //     dark: true,
// //     side: 'right'
// //   }
// // ];

// // const FeatureStack: React.FC = () => {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const triggerRef = useRef<HTMLDivElement>(null);

// //   useLayoutEffect(() => {
// //     const ctx = gsap.context(() => {
// //       const cards = gsap.utils.toArray<HTMLElement>('.mega-card');
      
// //       // ONLY apply stacking on screens larger than 1024px (Desktop)
// //       const mm = gsap.matchMedia();

// //       mm.add("(min-width: 1024px)", () => {
// //         const tl = gsap.timeline({
// //           scrollTrigger: {
// //             trigger: triggerRef.current,
// //             start: "top top",
// //             end: `+=${cards.length * 100}%`,
// //             pin: true,
// //             scrub: 2, // Slower scrub for smoother movement
// //           }
// //         });

// //         cards.forEach((card, i) => {
// //           if (i === 0) return;
// //           tl.fromTo(card, 
// //             { y: "100vh", rotate: 2, opacity: 0 }, 
// //             { 
// //               y: i * 20, 
// //               rotate: 0, 
// //               opacity: 1, 
// //               duration: 1, 
// //               ease: "power3.out" 
// //             }
// //           );
// //         });
// //       });
// //     }, containerRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <div ref={containerRef} className="bg-[#FFFEFA]">
// //       <div ref={triggerRef} className="relative min-h-screen lg:h-screen w-full flex flex-col items-center">
        
// //         {/* HEADER SECTION - FIXED ON DESKTOP */}
// //         <div className="z-[200] w-full pt-12 lg:pt-16 pb-6 text-center bg-[#FFFEFA]/95 backdrop-blur-md">
// //           <h2 className="text-3xl lg:text-5xl font-black text-[#1E1E1E] leading-tight">
// //             Features & Content Creation tools
// //           </h2>
// //           <p className="text-sm text-[#6C757D] mt-3 max-w-2xl mx-auto px-6 font-medium">
// //             Each tool and feature is deliberately designed to make your workflow seamless, data-driven, and creative.
// //           </p>
// //         </div>

// //         {/* STACK CONTAINER */}
// //         <div className="relative w-full max-w-7xl flex-grow px-4 lg:px-8 pb-20 lg:pb-0">
// //           <div className="flex flex-col lg:block gap-8 mt-6">
// //             {MASTER_STACK_DATA.map((item, index) => (
// //               <div 
// //                 key={item.id}
// //                 className={`mega-card lg:absolute top-0 left-0 right-0 min-h-fit lg:h-[72vh] rounded-[2rem] lg:rounded-[3.5rem] shadow-xl lg:shadow-[0_-20px_60px_rgba(0,0,0,0.1)] border border-[#E9ECEF] overflow-hidden ${item.dark ? 'bg-[#1E1E1E] text-white' : 'bg-white text-[#1E1E1E]'}`}
// //                 style={{ zIndex: index + 10 }}
// //               >
// //                 <div className="grid lg:grid-cols-2 h-full">
                  
// //                   {/* IMAGE SIDE */}
// //                   <div className={`relative h-64 lg:h-full overflow-hidden ${item.side === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
// //                     <img src={item.image} className="w-full h-full object-cover" alt="dashboard preview" />
// //                     <div className="absolute inset-0 bg-black/5" />
// //                   </div>

// //                   {/* CONTENT SIDE */}
// //                   <div className={`p-8 lg:p-12 flex flex-col h-full ${item.side === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
                    
// //                     <div className="flex items-center gap-3 mb-6">
// //                       <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#F5F7FA] text-[#1F6ED4] shadow-sm">
// //                         {React.cloneElement(item.icon as React.ReactElement)}
// //                       </div>
// //                       <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">{item.header}</span>
// //                     </div>

// //                     <div className="flex-grow">
// //                       <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight">{item.title}</h3>
// //                       <p className={`text-sm lg:text-base leading-relaxed mb-8 ${item.dark ? 'text-white/80' : 'text-[#6C757D]'}`}>
// //                         {item.mainBody}
// //                       </p>

// //                       <div className="space-y-4">
// //                         {item.subPoints.map((point, pIdx) => (
// //                           <div key={pIdx} className="flex items-start gap-3 group">
// //                             <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#28C76F]/20 flex items-center justify-center text-[#28C76F]">
// //                               <CheckCircle2 size={14} />
// //                             </div>
// //                             <p className={`text-xs lg:text-[13px] font-medium leading-relaxed ${item.dark ? 'text-white/70' : 'text-[#4A5568]'}`}>
// //                               {point}
// //                             </p>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     </div>

// //                     <div className="mt-10 pt-6 border-t border-current border-opacity-10 flex flex-col sm:flex-row justify-between items-center gap-4">
// //                       <p className="text-[10px] font-bold text-[#1F6ED4] text-center sm:text-left">
// //                         Every feature in chicku.in is designed to save time & help you scale precisely.
// //                       </p>
// //                       <span className="text-[10px] font-black opacity-30">0{index + 1} / 03</span>
// //                     </div>

// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* FOOTER CALLOUT AREA */}
// //       <div className="h-[30vh] lg:h-[50vh] flex items-center justify-center bg-[#FFFEFA] border-t border-[#E9ECEF]">
// //          <div className="text-center px-6">
// //             <h2 className="text-xl lg:text-3xl font-black text-[#1F6ED4] italic max-w-4xl mx-auto leading-relaxed opacity-60">
// //                "Built by marketers, for marketers. Every tool under one umbrella."
// //             </h2>
// //          </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FeatureStack;


// import React, { useLayoutEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { CheckCircle2 } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// // --- RAW DATA: 100% FAITHFUL TO THE PROMPT ---
// const ALL_DATA_POINTS = [
//   { id: 1, title: "Create with AI-Powered Content Creation Tools", text: "Bring all of your content creation and publishing requirements under one umbrella. Use our content creation, posting, automation, or bulk posting features on various popular platforms such as Facebook, Instagram, Twitter, LinkedIn, YouTube, Pinterest. Create content easily using readymade templates for posts, emails, and advertisements that are set up for high levels of interaction. Handle multiple brands or organizations using a master dashboard while being consistent in messaging. Your content is produced once using marketing tools that integrate websites; it reaches all platforms – faster & smarter." },
//   { id: 2, title: "Manual, Auto & Bulk Posting with Social Media Scheduling Tools", text: "Schedule, automate or publish posts across all platforms- Facebook, Instagram, Twitter (X), LinkedIn, YouTube, and Pinterest." },
//   { id: 3, title: "All in one Marketing Platform", text: "Connect your favorite tools: WhatsApp, Email, and SMS come together to create unified multichannel campaigns." },
//   { id: 4, title: "Website Integration", text: "Add engagement widgets, lead forms, and analytics trackers directly to your website." },
//   { id: 5, title: "Templates & Social Media Content Planner", text: "Save your time through the use of templates: pre-designed, tuned posts, emails, and ads to optimize engagement." },
//   { id: 6, title: "Multiple Companies & Brands Dashboard", text: "Identify and manage several brands or client accounts within one powerful dashboard." },
//   { id: 7, title: "Audience Insights & AI-Powered Segmentation Tool", text: "Better understand your customers through smart data visualization and AI-powered segmentation to build targeted campaigns that convert." },
//   { id: 8, title: "Analytics & Social Media Analytics Platform", text: "Take confident actions based on clear insights. The analytics tools allow you to view performance on various platforms through easy-to-read dashboards. Metrics such as engagement rates, reach, clicks, or campaign performance are measurable on one interface. Audience insights and segmenting enable analyzing customer behavior and successful content to optimize future campaign delivery. Export the report to share with teams or clients to optimize targeting and timing and make overall campaign improvement." },
//   { id: 9, title: "Response / Engage with AI Assistance", text: "Interact with your audience without delay or lost interactions. Respond to comments, mentions, and messages promptly while maintaining your brand tone. Automated responses and smart response solutions minimize manual work and still allow for valuable interactions. Whether for dealing with customers or engaging with your fans, you remain responsive and connected." },
//   { id: 10, title: "Common Inbox for Unified Communication", text: "Centralized inbox to handle all conversations. The Common Inbox allows you to manage all your messages, comments, and mentions from your social media, WhatsApp, and other connected accounts. You can assign conversations to team members, monitor response status, and work in tandem. There will be faster responses, enhanced customer service, and overall insight into conversations, all without having to juggle various apps." },
//   { id: 11, title: "Pricing Plans & Team Collaboration", text: "Pricing that is transparent, scalable, and flexible: for individuals, small businesses, and agencies. Manual, Auto & Bulk Posting with Social Media Scheduling Tools. Work as one with your team via shared workspaces, approval flows, and real-time collaboration features." }
// ];

// // Split 11 items into 3 Slides (4 - 4 - 3) to keep cards small but data complete
// const SLIDE_GROUPS = [
//   { id: "S1", items: ALL_DATA_POINTS.slice(0, 4), img: "https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg" },
//   { id: "S2", items: ALL_DATA_POINTS.slice(4, 8), img: "https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg" },
//   { id: "S3", items: ALL_DATA_POINTS.slice(8, 11), img: "https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg", dark: true }
// ];

// const FeatureStack: React.FC = () => {
//   const mainRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const cards = gsap.utils.toArray<HTMLElement>('.stack-card');
      
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: mainRef.current,
//           start: "top top",
//           end: `+=${cards.length * 100}%`,
//           pin: true, // PINS EVERYTHING including Header
//           scrub: 1,
//         }
//       });

//       // Slide-up animation
//       cards.forEach((card, i) => {
//         if (i === 0) return;
//         tl.fromTo(card, { y: "100vh" }, { y: i * 15, duration: 1, ease: "none" });
//       });
//     }, mainRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={mainRef} className="bg-[#FFFEFA] min-h-screen">
//       <div className="relative h-screen flex flex-col overflow-hidden">
        
//         {/* HEADER: Z-index 100 ensures it stays ABOVE the cards */}
//         <div className="relative z-[100] w-full pt-20 pb-2 text-center bg-[#FFFEFA]/90 backdrop-blur-md">
//           <h2 className="text-3xl lg:text-5xl font-black text-[#1E1E1E] leading-tight">
//             Features & Content Creation tools
//           </h2>
//           <p className="text-xs text-[#6C757D] font-bold mt-2 uppercase tracking-widest px-6">
//             Each tool and feature is deliberately designed to make your workflow seamless, data-driven, and creative.
//           </p>
//         </div>

//         {/* CARDS WRAPPER */}
//         <div className="relative w-full max-w-6xl mx-auto flex-grow px-4 mt-6">
//           {SLIDE_GROUPS.map((slide, index) => (
//             <div 
//               key={slide.id}
//               className={`stack-card absolute top-0 left-0 right-0 h-[58vh] rounded-[2.5rem] shadow-2xl border border-[#E9ECEF] overflow-hidden will-change-transform ${slide.dark ? 'bg-[#1E1E1E] text-white' : 'bg-white text-[#1E1E1E]'}`}
//               style={{ zIndex: index + 10 }}
//             >
//               <div className="grid lg:grid-cols-4 h-full">
                
//                 {/* 25% SIDE IMAGE */}
//                 <div className="lg:col-span-1 relative h-full hidden lg:block border-r border-gray-100">
//                   <img src={slide.img} className="w-full h-full object-cover" alt="feature-side" />
//                 </div>

//                 {/* 75% CONTENT - TIGHT PADDING (p-6) */}
//                 <div className="lg:col-span-3 p-8 flex flex-col justify-between overflow-y-auto scrollbar-hidden">
                  
//                   {/* GRID: 2 Columns on desktop to fit more data in small height */}
//                   <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4">
//                     {slide.items.map((item) => (
//                       <div key={item.id} className="space-y-1">
//                         <div className="flex items-center gap-2">
//                           <CheckCircle2 size={14} className="text-[#28C76F] shrink-0" />
//                           <h3 className="text-[14px] font-black uppercase leading-tight tracking-tight">
//                             {item.title}
//                           </h3>
//                         </div>
//                         <p className={`text-[12px] leading-relaxed font-medium ${slide.dark ? 'text-white/60' : 'text-[#6C757D]'}`}>
//                           {item.text}
//                         </p>
//                       </div>
//                     ))}
//                   </div>

//                   {/* FOOTER OF CARD */}
//                   <div className="mt-4 pt-4 border-t border-current border-opacity-5 flex justify-between items-center opacity-40">
//                     <p className="text-[9px] font-black uppercase italic">Every feature in chicku.in is designed to scale precisely.</p>
//                     <span className="text-[9px] font-black">Slide 0{index + 1}</span>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FeatureStack;

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- RAW DYNAMIC DATA: 100% FAITHFUL & IN ORDER ---
const RAW_DATA = [
  { id: 1, title: "Create with AI-Powered Content Creation Tools", text: "Bring all of your content creation and publishing requirements under one umbrella. Use our content creation, posting, automation, or bulk posting features on various popular platforms such as Facebook, Instagram, Twitter, LinkedIn, YouTube, Pinterest. Create content easily using readymade templates for posts, emails, and advertisements that are set up for high levels of interaction. Handle multiple brands or organizations using a master dashboard while being consistent in messaging. Your content is produced once using marketing tools that integrate websites; it reaches all platforms – faster & smarter." },
  { id: 2, title: "Manual, Auto & Bulk Posting with Social Media Scheduling Tools", text: "Schedule, automate or publish posts across all platforms- Facebook, Instagram, Twitter (X), LinkedIn, YouTube, and Pinterest." },
  { id: 3, title: "All in one Marketing Platform", text: "Connect your favorite tools: WhatsApp, Email, and SMS come together to create unified multichannel campaigns." },
  { id: 4, title: "Website Integration", text: "Add engagement widgets, lead forms, and analytics trackers directly to your website." },
  { id: 5, title: "Templates & Social Media Content Planner", text: "Save your time through the use of templates: pre-designed, tuned posts, emails, and ads to optimize engagement." },
  { id: 6, title: "Multiple Companies & Brands Dashboard", text: "Identify and manage several brands or client accounts within one powerful dashboard." },
  { id: 7, title: "Audience Insights & AI-Powered Segmentation Tool", text: "Better understand your customers through smart data visualization and AI-powered segmentation to build targeted campaigns that convert." },
  { id: 8, title: "Analytics & Social Media Analytics Platform", text: "Take confident actions based on clear insights. The analytics tools allow you to view performance on various platforms through easy-to-read dashboards. Metrics such as engagement rates, reach, clicks, or campaign performance are measurable on one interface. Audience insights and segmenting enable analyzing customer behavior and successful content to optimize future campaign delivery. Export the report to share with teams or clients to optimize targeting and timing and make overall campaign improvement." },
  { id: 9, title: "Response / Engage with AI Assistance", text: "Interact with your audience without delay or lost interactions. Respond to comments, mentions, and messages promptly while maintaining your brand tone. Automated responses and smart response solutions minimize manual work and still allow for valuable interactions. Whether for dealing with customers or engaging with your fans, you remain responsive and connected." },
  { id: 10, title: "Common Inbox for Unified Communication", text: "Centralized inbox to handle all conversations. The Common Inbox allows you to manage all your messages, comments, and mentions from your social media, WhatsApp, and other connected accounts. You can assign conversations to team members, monitor response status, and work in tandem. There will be faster responses, enhanced customer service, and overall insight into conversations, all without having to juggle various apps." },
  { id: 11, title: "Pricing Plans & Team Collaboration", text: "Pricing that is transparent, scalable, and flexible: for individuals, small businesses, and agencies. Manual, Auto & Bulk Posting with Social Media Scheduling Tools. Work as one with your team via shared workspaces, approval flows, and real-time collaboration features." }
];

// Groups: S1 (1-4), S2 (5-8), S3 (9-11) - Ensuring no missing data
const SLIDES = [
  { id: "S1", items: RAW_DATA.slice(0, 4), img: "https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg" },
  { id: "S2", items: RAW_DATA.slice(4, 8), img: "https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg" },
  { id: "S3", items: RAW_DATA.slice(8, 11), img: "https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg" }
];

const FeatureStack: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>('.stack-slide');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${slides.length * 150}%`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        }
      });

      slides.forEach((slide, i) => {
        if (i === 0) return; // First slide stays visible

        // Animation: Previous slide fades out, New slide overlaps by rising up
        tl.to(slides[i - 1], { opacity: 0, scale: 0.95, duration: 1 }, i)
          .fromTo(slide, 
            { y: "60vh", opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }, 
            i - 0.2 // Slight overlap for smooth "slow appearance"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#FFFEFA] w-full min-h-screen">
      <div className="relative h-screen flex flex-col pt-18 overflow-hidden">
        
        {/* HEADER: High Z-Index & Clear Background to ensure visibility */}
        <div className="relative z-[100] w-full text-center px-6 mb-12 bg-[#FFFEFA]/95 pb-4">
          <h2 className="text-3xl lg:text-5xl font-black text-[#1E1E1E] leading-tight tracking-tight">
            Features & Content Creation tools
          </h2>
          <div className="mt-3 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#1F6ED4]/30" />
            <p className="text-[10px] lg:text-xs text-[#6C757D] font-bold uppercase tracking-[0.4em]">
              Seamless • Data-Driven • Creative
            </p>
            <div className="h-px w-12 bg-[#1F6ED4]/30" />
          </div>
        </div>

        {/* STACKING AREA */}
        <div className="relative w-full max-w-7xl mx-auto flex-grow h-[65vh]">
          {SLIDES.map((slide, index) => (
            <div 
              key={slide.id}
              className={`stack-slide absolute inset-0 w-full h-full  will-change-transform 
                ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: 10 + index }}
            >
              <div className="grid lg:grid-cols-12 h-full items-start gap-12 px-6 lg:px-10">
                
                {/* 1/4 Width Image Side */}
                <div className="lg:col-span-3 h-full hidden lg:block">
                  <div className="h-[45vh] w-full rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                    <img src={slide.img} className="w-full h-full object-cover" alt="feature visual" />
                  </div>
                </div>

                {/* 3/4 Width Content Side */}
                <div className="lg:col-span-9 flex flex-col justify-start pt-2">
                  <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
                    {slide.items.map((item) => (
                      <div key={item.id} className="space-y-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-[#1F6ED4] shrink-0 mt-0.5" />
                          <h3 className="text-sm lg:text-base font-black uppercase tracking-tight text-[#1E1E1E] leading-tight">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-[11px] lg:text-[13px] leading-relaxed text-[#6C757D] font-medium pl-8">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-6">
           <span className="text-[10px] font-black text-[#1E1E1E]/20 uppercase tracking-widest italic">Precision Ecosystem</span>
           <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <div key={i} className="w-8 h-1 rounded-full bg-gray-200 overflow-hidden">
                 <div className="w-full h-full bg-[#1F6ED4] opacity-40" />
              </div>
            ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureStack;
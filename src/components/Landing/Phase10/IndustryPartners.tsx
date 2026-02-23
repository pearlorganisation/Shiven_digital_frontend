import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const PARTNER_LOGOS = [
  { name: "Facebook", src: "/logos/facebook.png" },
  { name: "Instagram", src: "/logos/Instagram.png" },
  { name: "X (Twitter)", src: "/logos/Xlogo.png" },
  { name: "LinkedIn", src: "/logos/Linkdin.png" },
  { name: "YouTube", src: "/logos/youTube.png" },
  { name: "TikTok", src: "/logos/tikTok.png" },
  { name: "WhatsApp", src: "/logos/whatSaap.png" },
  { name: "Email Marketing", src: "/logos/mail.png" },
  // { name: "Platform Hub", src: "/logos/allInOne.png" },
];

const IndustryPartners: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Infinite Marquee Animation
      const tl = gsap.to(".partner-track", {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });

      // 2. Center Detection Logic
      // Checks every frame which logo is closest to the horizontal center of the container
      const checkCenter = () => {
        const logos = document.querySelectorAll('.partner-item');
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return;

        const centerX = containerRect.left + containerRect.width / 2;

        let closestIndex = 0;
        let minDistance = Math.abs(logos[0].getBoundingClientRect().left + logos[0].getBoundingClientRect().width / 2 - centerX);

        logos.forEach((logo, index) => {
          const rect = logo.getBoundingClientRect();
          const logoCenter = rect.left + rect.width / 2;
          const distance = Math.abs(logoCenter - centerX);

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        });

        // Set active index (modulo length because list is duplicated)
        setActiveIndex(closestIndex % PARTNER_LOGOS.length);
      };

      gsap.ticker.add(checkCenter);

      return () => {
        gsap.ticker.remove(checkCenter);
        tl.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#FFFEFA] py-20 px-4 md:px-8 border-t border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto">
        
        {/* TEXT CONTENT */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h4 className="text-[#1F6ED4] font-bold uppercase tracking-[0.1em] text-[12px] mb-4 font-sans">
            List of Industry Partners
          </h4>
          <h2 className="text-xl lg:text-2xl font-semibold text-[#1E1E1E] leading-relaxed mb-6 font-sans">
            We proudly integrate and collaborate with all major social media and marketing platforms to help your brand reach everywhere your audience is active:
          </h2>
          <p className="text-sm text-[#6C757D] leading-relaxed font-sans px-4 lg:px-0">
            Facebook, Instagram, Twitter (X), LinkedIn, YouTube, Pinterest and Google My Business, Quora, Reddit — plus integrations for WhatsApp, SMS, and Email Marketing.
          </p>
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative flex items-center overflow-hidden py-12">
          {/* Faded edges for better focus */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FFFEFA] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FFFEFA] to-transparent z-20 pointer-events-none" />

          <div ref={trackRef} className="partner-track flex items-center gap-12 md:gap-20 whitespace-nowrap">
            {/* Duplicating array for infinite scroll */}
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, i) => {
              const isCenter = activeIndex === (i % PARTNER_LOGOS.length);
              
              return (
                <div 
                  key={i} 
                  className={`partner-item flex flex-col items-center gap-4 transition-all duration-500 cursor-pointer
                    ${isCenter ? 'scale-125 -translate-y-2' : 'scale-90 opacity-40'}
                    hover:scale-125 hover:-translate-y-4 hover:opacity-100 group
                  `}
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Name shows if active (center) or hovered */}
                  <span className={`text-[10px] font-bold text-[#1F6ED4] uppercase tracking-widest transition-opacity duration-300 font-sans h-4
                    ${isCenter ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}>
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER TEXT */}
        <div className="mt-16 text-center max-w-3xl mx-auto px-6 border-t border-[#F5F7FA] pt-12">
          <p className="text-base lg:text-lg font-medium text-[#1E1E1E] leading-relaxed italic font-sans">
            Together, they form a connected ecosystem that empowers you to publish, track, and grow — all from one intelligent dashboard powered by <span className="text-[#1F6ED4] not-italic font-bold">Shiven Digital.</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default IndustryPartners;
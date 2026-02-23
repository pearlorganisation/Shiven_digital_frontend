import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Quote, Star } from 'lucide-react';

// --- DYNAMIC DATA ---
const TESTIMONIALS = [
  {
    quote: "This platform saves us hours every week! Scheduling, posting, and replying all in one place is a game-changer.",
    author: "Ritika",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    color: "#1F6ED4"
  },
  {
    quote: "The analytics dashboard helped us identify what really drives engagement. We’ve doubled our reach in 3 months.",
    author: "Aditya",
    role: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    color: "#8E44AD"
  },
  {
    quote: "Finally, a tool that combines publishing, engagement, and team collaboration without the clutter.",
    author: "Meera",
    role: "Agency Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    color: "#FF8C42"
  }
];

const TestimonialsMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Duplicated width logic for seamless loop
      timeline.current = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" }
      });

      timeline.current.to(".marquee-track", {
        xPercent: -50,
        duration: 20, // Adjust speed here
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => timeline.current?.pause();
  const handleMouseLeave = () => timeline.current?.play();

  return (
    <section className="bg-[#FFFEFA] py-24 overflow-hidden border-t border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h4 className="text-[#1F6ED4] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
          Testimonials & Feedback
        </h4>
        <h2 className="text-3xl lg:text-5xl font-black text-[#1E1E1E]">
          What our users are saying
        </h2>
      </div>

      {/* MARQUEE CONTAINER */}
      <div 
        ref={marqueeRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center cursor-grab active:cursor-grabbing"
      >
        {/* Gradient Fades for Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFFEFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FFFEFA] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-8 whitespace-nowrap">
          {/* We repeat the list twice for the infinite effect */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
            <div 
              key={i} 
              className="inline-block w-[350px] md:w-[450px] bg-white border border-[#E9ECEF] rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-[#1F6ED4]/20 transition-all duration-500 group"
            >
              <div className="flex flex-col gap-6 whitespace-normal">
                
                {/* Rating & Quote Icon */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="text-[#FFB347]" fill="#FFB347" />
                    ))}
                  </div>
                  <Quote size={32} className="opacity-10 group-hover:opacity-30 transition-opacity" style={{ color: item.color }} />
                </div>

                {/* The Quote Text */}
                <p className="text-base md:text-lg font-medium text-[#1E1E1E] leading-relaxed italic">
                  “{item.quote}”
                </p>

                {/* Author Section */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#F5F7FA]">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src={item.image} 
                      alt={item.author} 
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E1E1E] text-sm md:text-base">{item.author}</h4>
                    <p className="text-[11px] font-bold text-[#6C757D] uppercase tracking-widest">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Visual Indicator */}
      <div className="mt-12 text-center">
         <p className="text-[10px] font-bold text-[#6C757D] uppercase tracking-[0.3em] opacity-40">
           Hover to pause & read
         </p>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
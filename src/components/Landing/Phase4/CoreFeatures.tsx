import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { SectionContent } from './TestType';



// Fade In Animation Component
const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.15 } // Trigger when 15% visible
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface CoreFeaturesProps {
  features: SectionContent[];

}

export const CoreFeatures: React.FC<CoreFeaturesProps> = ({ features }) => {
  return (
    <section className="py-20 bg-white overflow-hidden" id="features">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-wide text-blue-600 uppercase mb-2">Platform Power</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
               Everything you need to dominate social media
            </h3>
          </FadeIn>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <FadeIn key={feature.id} className="w-full">
              <div 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${feature.reversed ? 'lg:flex-row-reverse' : ''}`}
              >
                
                {/* Image Section */}
                <div className="flex-1 w-full relative group perspective-1000">
                   {/* Animated glow on hover */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] pointer-events-none blur-2xl"></div>
                   
                   <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100/50 bg-gray-50 transform transition-all duration-700 group-hover:rotate-y-2 group-hover:scale-[1.02]">
                      <img 
                        src={feature.imageSrc} 
                        alt={feature.imageAlt} 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                   </div>
                   
                   {/* Decorative element - floating animation */}
                   <div className={`absolute -bottom-8 ${feature.reversed ? '-right-8' : '-left-8'} w-32 h-32 bg-blue-100/50 rounded-full -z-10 blur-3xl opacity-60 animate-pulse`}></div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-8">
                   <div className="space-y-4">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
                        {feature.subHeadline}
                      </span>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        {feature.headline}
                      </h3>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {feature.body}
                      </p>
                   </div>

                   {feature.points && feature.points.length > 0 && (
                     <ul className="space-y-4">
                       {feature.points.map((point, idx) => (
                         <li key={idx} className="flex items-start gap-3 group/item">
                           <div className="mt-1 p-0.5 rounded-full bg-blue-50 group-hover/item:bg-blue-100 transition-colors duration-300">
                              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                           </div>
                           <span className="text-gray-700 font-medium leading-snug">{point.text}</span>
                         </li>
                       ))}
                     </ul>
                   )}
                   
                   <div className="pt-4">
                      <button className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors group/btn text-lg">
                        Learn more
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                   </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
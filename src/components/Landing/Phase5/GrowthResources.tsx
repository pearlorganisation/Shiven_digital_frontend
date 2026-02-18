import React, { useEffect, useState, useRef } from 'react';
import { Users, Zap, Clock, BookOpen, FileText, ArrowRight, TrendingUp } from 'lucide-react';

// Animation Component for Numbers
const CountUp: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      
      if (progress < duration) {
        // Ease out quart formula for smooth animation
        const percentage = 1 - Math.pow(1 - progress / duration, 4);
        setCount(Math.floor(end * percentage));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
};

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
      { threshold: 0.1 }
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

export const GrowthResources: React.FC = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-purple-50 to-transparent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none opacity-60"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Column: Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 text-blue-600 text-[10px] font-bold uppercase tracking-wider shadow-sm mb-2">
                  <Users className="w-3.5 h-3.5" />
                  About Us
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                  More Than a Platform, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Your Growth Partner
                  </span>
                </h2>
              </FadeIn>
              
              <FadeIn delay={400}>
                <p className="text-base lg:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We’re more than a platform — we’re your growth partner. Our team of innovators, marketers, and creators is dedicated to helping businesses succeed with powerful tools, transparent practices, and constant support.
                </p>
              </FadeIn>

              {/* Stats Row with Animated Counters */}
              <FadeIn delay={600}>
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100 mt-6">
                   <div className="space-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                        <CountUp end={10} suffix="k+" />
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">Creators</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                        <CountUp end={50} suffix="M+" />
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">Posts</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                        24/7
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">Support</div>
                   </div>
                </div>
              </FadeIn>
            </div>
            
            {/* Right Column: Mission Card */}
            <div className="flex-1 w-full lg:w-auto perspective-1000 max-w-lg mx-auto lg:max-w-none">
               <FadeIn delay={300} className="h-full">
                 <div className="relative group h-full">
                    {/* Glowing backdrop effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-[2rem] transform rotate-3 scale-[1.02] opacity-20 blur-xl transition-all duration-700 group-hover:opacity-30 group-hover:rotate-6"></div>
                    
                    <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 h-full flex flex-col justify-between">
                       <div>
                         {/* Decorative circle inside card */}
                         <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -mr-16 -mt-16"></div>
                         
                         <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-white rounded-xl flex items-center justify-center mb-6 shadow-lg ring-1 ring-blue-50 group-hover:scale-105 transition-transform duration-500">
                            <TrendingUp className="w-7 h-7 text-blue-600" />
                         </div>
                         
                         <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                         <p className="text-base text-gray-600 leading-relaxed mb-6">
                           To empower every creator and business with the tools they need to tell their story, reach their audience, and build a sustainable digital presence without the complexity.
                         </p>
                       </div>

                       <div className="flex items-center gap-3 pt-6 border-t border-gray-100/50">
                          <div className="flex -space-x-3">
                             {[1,2,3,4].map((i) => (
                               <div key={i} className="relative z-0 hover:z-10 transition-all duration-300 hover:scale-110">
                                 <img src={`https://i.pravatar.cc/100?img=${i+30}`} alt="Team" className="w-10 h-10 rounded-full border-[3px] border-white shadow-sm" />
                               </div>
                             ))}
                          </div>
                          <div className="text-xs font-bold text-gray-500 pl-2 uppercase tracking-wide">
                             Global Team
                          </div>
                       </div>
                    </div>
                 </div>
               </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-4  bg-white" >
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-wide text-blue-600 uppercase mb-2">Resources</h2>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Fuel Your Social Media Success
              </h3>
              <p className="text-base lg:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
                At Shiven Digital, we go beyond providing you with tools; we actually equip you with the means to become a master of digital marketing and drive measurable results. Our platform helps you plan, create, and analyze the behavior of your audience with confidence.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Card 1 */}
            <FadeIn delay={100} className="h-full">
              <div className="group h-full p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">

  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-blue-100 transition-colors duration-500"></div>

  <div className="flex items-start gap-4">

    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0
    transition-all duration-300
    group-hover:bg-blue-600
    group-hover:text-white
    group-hover:scale-110">
      <Zap className="w-6 h-6" />
    </div>

    <div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">
        Free Marketing Tools
      </h4>
      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
        Get instant access to ready-to-use hashtag trackers Disha Publish, Post Templates and Analytics Checkers to optimize your social strategy.
      </p>
    </div>

  </div>
</div>

            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={200} className="h-full">
              <div className="group h-full p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">

  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-purple-100 transition-colors duration-500"></div>

  <div className="flex items-start gap-4">

    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0
    transition-all duration-300
    group-hover:bg-purple-600
    group-hover:text-white
    group-hover:scale-110">
      <Clock className="w-6 h-6" />
    </div>

    <div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">
        Best Time to Post
      </h4>
      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
        Our AI-powered suggestions will help you determine when your audience is most active, so you get the most visibility and engagement from every post.
      </p>
    </div>

  </div>
</div>

            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={300} className="h-full">
             <div className="group h-full p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">

  <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-green-100 transition-colors duration-500"></div>

  <div className="flex items-start gap-4">

    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0
    transition-all duration-300
    group-hover:bg-green-600
    group-hover:text-white
    group-hover:scale-110">
      <BookOpen className="w-6 h-6" />
    </div>

    <div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">
        Social Media 101
      </h4>
      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
        Learn the essentials of online growth. Beginner-friendly guides covering social media, content strategy, and audience engagement.
      </p>
    </div>

  </div>
</div>

            </FadeIn>

            {/* Card 4 */}
            <FadeIn delay={400} className="h-full">
             <div className="group h-full p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">

  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-orange-100 transition-colors duration-500"></div>

  <div className="flex items-start gap-4">

    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0
    transition-all duration-300
    group-hover:bg-orange-600
    group-hover:text-white
    group-hover:scale-110">
      <FileText className="w-6 h-6" />
    </div>

    <div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">
        Marketing Glossary
      </h4>
      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
        Simplify marketing terminology with our clear, jargon-free glossary, because understanding digital marketing should be easy.
      </p>
    </div>

  </div>
</div>

            </FadeIn>
          </div>

          {/* CTA Banner */}
    <FadeIn delay={200}>
  <div className="max-w-6xl mx-auto">

    <div className="rounded-2xl 
    bg-gradient-to-r from-blue-600 to-blue-700 
    px-8 lg:px-16 
    py-6 lg:py-8 
    text-white 
    shadow-xl">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* Left Content */}
        <div>
          <h3 className="text-lg lg:text-xl font-semibold tracking-tight">
            Grow your digital presence with confidence
          </h3>
          <p className="text-blue-100 text-sm mt-1">
            Free forever. No credit card required.
          </p>
        </div>

        {/* Button */}
        <button className="inline-flex items-center gap-2 
        px-6 py-2.5 
        bg-white text-blue-700 
        font-medium text-sm 
        rounded-lg 
        transition-all duration-300 
        hover:bg-gray-50 hover:-translate-y-0.5">

          Get Started
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

      </div>

    </div>

  </div>
</FadeIn>




        </div>
      </section>
    </>
  );
};
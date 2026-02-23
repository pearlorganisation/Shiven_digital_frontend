
// import { ShoppingCart, Zap, Briefcase, Users, Store, TrendingUp } from 'lucide-react';

// const clients = [
//   {
//     id: 1,
//     icon: ShoppingCart,
//     category: 'E-commerce Brands',
//     description: 'Leverage our ecommerce audience segmentation tool to understand buyer behavior, personalize offers, and boost repeat sales.',
//     image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
//     color: 'from-blue-500/10 to-blue-600/10',
//     borderColor: 'border-blue-200 dark:border-blue-800'
//   },
//   {
//     id: 2,
//     icon: Zap,
//     category: 'Tech Startups',
//     description: 'Accelerate customer acquisition with data-driven insights and multi-channel engagement.',
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
//     color: 'from-purple-500/10 to-purple-600/10',
//     borderColor: 'border-purple-200 dark:border-purple-800'
//   },
//   {
//     id: 3,
//     icon: Briefcase,
//     category: 'Agencies & Consultancies',
//     description: 'Streamline multiple client campaigns with smart automation, detailed analytics, and AI-powered segmentation tools.',
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
//     color: 'from-emerald-500/10 to-emerald-600/10',
//     borderColor: 'border-emerald-200 dark:border-emerald-800'
//   },
//   {
//     id: 4,
//     icon: Users,
//     category: 'Content Creators & Influencers',
//     description: 'Grow your online presence, track engagement, and manage collaborations easily from one dashboard.',
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
//     color: 'from-pink-500/10 to-pink-600/10',
//     borderColor: 'border-pink-200 dark:border-pink-800'
//   },
//   {
//     id: 5,
//     icon: Store,
//     category: 'Retail & Local Businesses',
//     description: 'Connect with your community using targeted WhatsApp, SMS, and email campaigns backed by accurate audience segmentation.',
//     image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
//     color: 'from-orange-500/10 to-orange-600/10',
//     borderColor: 'border-orange-200 dark:border-orange-800'
//   },
//   {
//     id: 6,
//     icon: TrendingUp,
//     category: 'All Industries',
//     description: 'Thousands of brands rely on us to manage, analyze, and expand their digital reach with intelligent tools built for every need.',
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
//     color: 'from-indigo-500/10 to-indigo-600/10',
//     borderColor: 'border-indigo-200 dark:border-indigo-800'
//   }
// ];


// const ClientList: React.FC = () => {
//   return (
//     <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
//             Trusted by Businesses Big and Small
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
//             From solo creators to established agencies, Shiven Digital powers growth across industries with advanced automation, analytics, and the best ecommerce audience segmentation tool designed to help businesses target customers with precision.
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="mb-16 p-8 bg-card rounded-2xl border border-border">
//           <p className="text-xl text-foreground font-semibold mb-4">
//             Our Impact
//           </p>
//           <p className="text-muted-foreground leading-relaxed text-balance">
//             Thousands of brands rely on us to manage, analyze, and expand their digital reach with intelligent tools built for every need. With Shiven Digital, you gain access to tools that help you understand your customers better, engage smarter, and grow faster.
//           </p>
//         </div>

//         {/* Client Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {clients.map((client) => {
//             const IconComponent = client.icon;
//             return (
//               <div
//                 key={client.id}
//                 className={`group relative overflow-hidden rounded-xl border-2 ${client.borderColor} bg-gradient-to-br ${client.color} p-6 transition-all duration-300 hover:border-opacity-100 hover:shadow-lg`}
//               >
//                 {/* Background Image */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
//                   <img
//                     src={client.image}
//                     alt={client.category}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Icon */}
//                   <div className="mb-4 inline-flex p-3 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
//                     <IconComponent className="w-6 h-6 text-foreground" />
//                   </div>

//                   {/* Category */}
//                   <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
//                     {client.category}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
//                     {client.description}
//                   </p>

//                   {/* Arrow */}
//                   <div className="mt-4 inline-flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span className="text-sm font-semibold text-foreground">Learn more →</span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center p-10 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
//           <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
//             Ready to Scale Your Business?
//           </h3>
//           <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-balance">
//             Join thousands of brands growing with Shiven Digital's powerful tools and intelligent automation.
//           </p>
//           <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
//             Get Started Today
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// export default ClientList;

import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShoppingBag, Rocket, Briefcase, Users, Store, 
   ArrowRight, Zap 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DATA = {
  header: "List of Clients",
  subHeader: "Trusted by Businesses Big and Small",
  intro: "From solo creators to established agencies, Shiven Digital powers growth across industries with advanced automation, analytics, and the best ecommerce audience segmentation tool designed to help businesses target customers with precision.",
  sectors: [
    {
      id: 0,
      title: "E-commerce Brands",
      content: "Leverage our ecommerce audience segmentation tool to understand buyer behavior, personalize offers, and boost repeat sales.",
      icon: <ShoppingBag size={20} />,
      color: "#1F6ED4",
      img: "https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg"
    },
    {
      id: 1,
      title: "Tech Startups",
      content: "Accelerate customer acquisition with data-driven insights and multi-channel engagement.",
      icon: <Rocket size={20} />,
      color: "#8E44AD",
      img: "https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg"
    },
    {
      id: 2,
      title: "Agencies & Consultancies",
      content: "Streamline multiple client campaigns with smart automation, detailed analytics, and AI-powered segmentation tools.",
      icon: <Briefcase size={20} />,
      color: "#2CA7DF",
      img: "https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg"
    },
    {
      id: 3,
      title: "Content Creators",
      content: "Grow your online presence, track engagement, and manage collaborations easily from one dashboard.",
      icon: <Users size={20} />,
      color: "#D63384",
      img: "https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg"
    },
    {
      id: 4,
      title: "Retail & Businesses",
      content: "Connect with your community using targeted WhatsApp, SMS, and email campaigns backed by accurate audience segmentation.",
      icon: <Store size={20} />,
      color: "#28C76F",
      img: "https://ikozmik.com/Content/Images/uploaded/its-free-featured.jpg"
    }
  ],
  footer: "Our client base is expanding every day — and so could yours. With Shiven Digital, you gain access to tools that help you understand your customers better, engage smarter, and grow faster."
};

const ClientHub: React.FC = () => {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animation
      gsap.from(".reveal-up", {
        y: 40, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" }
      });

      // Continuous pulse for the footer glow
      gsap.to(".footer-glow", {
        scale: 1.2, opacity: 0.6, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut"
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  // Animate content change
  const handleHover = (index: number) => {
    if (index === active) return;
    gsap.to(displayRef.current, {
      opacity: 0, x: -10, duration: 0.2,
      onComplete: () => {
        setActive(index);
        gsap.to(displayRef.current, { opacity: 1, x: 0, duration: 0.4 });
      }
    });
  };

  return (
    <section ref={rootRef} className="bg-[#FFFEFA] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-16 max-w-3xl reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F6ED4]/10 text-[#1F6ED4] mb-4 text-[10px] font-bold uppercase tracking-widest">
            <Zap size={12} fill="currentColor" /> {DATA.header}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1E1E1E] leading-tight mb-6">
            {DATA.subHeader}
          </h2>
          <p className="text-lg text-[#6C757D] leading-relaxed">
            {DATA.intro}
          </p>
        </div>

        {/* INTERACTIVE GALLERY SECTION */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch reveal-up min-h-[500px]">
          
          {/* LEFT: Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {DATA.sectors.map((sector) => (
              <div 
                key={sector.id}
                onMouseEnter={() => handleHover(sector.id)}
                className={`group cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                  active === sector.id 
                  ? 'bg-white border-[#1F6ED4] shadow-xl shadow-blue-900/5 translate-x-2' 
                  : 'bg-transparent border-transparent hover:border-[#E9ECEF]'
                }`}
              >
                <div 
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    active === sector.id ? 'text-white' : 'text-[#6C757D]'
                  }`}
                  style={{ backgroundColor: active === sector.id ? sector.color : '#F5F7FA' }}
                >
                  {sector.icon}
                </div>
                <span className={`font-bold text-lg transition-colors ${
                  active === sector.id ? 'text-[#1E1E1E]' : 'text-[#6C757D]'
                }`}>
                  {sector.title}
                </span>
                <ArrowRight size={18} className={`ml-auto transition-all ${
                  active === sector.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`} style={{ color: sector.color }} />
              </div>
            ))}
          </div>

          {/* RIGHT: Dynamic Display Card */}
          <div className="lg:col-span-7">
            <div className="h-full bg-white border border-[#E9ECEF] rounded-[3rem] p-8 lg:p-12 shadow-sm relative overflow-hidden flex flex-col">
                <div ref={displayRef} className="relative z-10 flex flex-col h-full">
                  <h3 className="text-3xl font-black text-[#1E1E1E] mb-6">
                    {DATA.sectors[active].title}
                  </h3>
                  <p className="text-lg text-[#6C757D] leading-relaxed mb-10">
                    {DATA.sectors[active].content}
                  </p>
                  
                  <div className="mt-auto relative rounded-2xl overflow-hidden h-64 border border-[#F5F7FA] shadow-inner">
                    <img 
                      src={DATA.sectors[active].img} 
                      className="w-full h-full object-cover" 
                      alt="Industry context" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
                {/* Decorative background number */}
                <span className="absolute -bottom-10 -right-10 text-[12rem] font-black text-[#F5F7FA] select-none">
                  0{active + 1}
                </span>
            </div>
          </div>
        </div>

        {/* RE-DESIGNED FOOTER CALLOUT */}
        <div className="mt-24 relative reveal-up">
          <div className="footer-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#1F6ED4]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative bg-white border border-[#E9ECEF] rounded-[3rem] p-8 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#1F6ED4]" />
            
            <div className="flex-grow max-w-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1E1E1E] leading-snug italic mb-6">
                "{DATA.footer}"
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                  ))}
                </div>
                <p className="text-sm font-black text-[#1F6ED4] uppercase tracking-widest">
                  Joined by 1,000+ growing brands
                </p>
              </div>
            </div>

            <button className="shrink-0 px-10 py-5 bg-[#1F6ED4] text-white font-black rounded-2xl hover:bg-[#1E1E1E] transition-all shadow-xl hover:-translate-y-1 active:scale-95 group">
              Start Scaling Smarter
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientHub;
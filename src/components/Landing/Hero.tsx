// // // // // // // import { motion } from "framer-motion";
// // // // // // // import { Sparkles, ChevronRight } from "lucide-react";

// // // // // // // const Hero = () => {
// // // // // // //   return (
// // // // // // //     <section className="pt-32 pb-20 px-6">
// // // // // // //       <div className="max-w-7xl mx-auto text-center">
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, y: -20 }}
// // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // //           className="relative inline-flex items-center justify-center mb-10 group cursor-default"
// // // // // // //         >
// // // // // // //           {/* --- Heartbeat Background Ripples --- */}
// // // // // // //           {/* Ye do circles heartbeat ki tarah bahar ki taraf vibrate karenge */}
// // // // // // //           <span className="absolute inset-0 rounded-full bg-orange-500/40 animate-[ping_1.5s_linear_infinite]" />
// // // // // // //           <span className="absolute inset-0 rounded-full bg-orange-500/20 animate-[ping_2s_linear_infinite]" />

// // // // // // //           {/* --- Main Badge Container --- */}
// // // // // // //           <motion.div
// // // // // // //             animate={{
// // // // // // //               // Heartbeat Scaling
// // // // // // //               scale: [1, 1.05, 1],
// // // // // // //               // Glowing Border Effect
// // // // // // //               boxShadow: [
// // // // // // //                 "0 0 0px rgba(249, 115, 22, 0)",
// // // // // // //                 "0 0 20px rgba(249, 115, 22, 0.4)",
// // // // // // //                 "0 0 0px rgba(249, 115, 22, 0)",
// // // // // // //               ],
// // // // // // //             }}
// // // // // // //             transition={{
// // // // // // //               duration: 1.5, // Heartbeat speed
// // // // // // //               repeat: Infinity,
// // // // // // //               ease: "easeInOut",
// // // // // // //             }}
// // // // // // //             className="relative flex items-center gap-3 px-6 py-2.5 rounded-full border border-orange-500/40 bg-[#0a0a0a] backdrop-blur-xl z-10"
// // // // // // //           >
// // // // // // //             {/* Animated Sparkles Icon */}
// // // // // // //             <motion.div
// // // // // // //               animate={{
// // // // // // //                 rotate: [0, 15, -15, 0],
// // // // // // //                 filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
// // // // // // //               }}
// // // // // // //               transition={{ duration: 2, repeat: Infinity }}
// // // // // // //             >
// // // // // // //               <Sparkles
// // // // // // //                 size={18}
// // // // // // //                 className="text-orange-500 fill-orange-500/20"
// // // // // // //               />
// // // // // // //             </motion.div>

// // // // // // //             {/* Text with Shimmer/Gradient Effect */}
// // // // // // //             <span className="text-sm font-bold tracking-wide flex items-center gap-1">
// // // // // // //               <span className="bg-gradient-to-r from-orange-400 via-orange-200 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
// // // // // // //                 New: AI-Powered Campaigns
// // // // // // //               </span>
// // // // // // //               <span className="text-orange-500/80 ml-1">is here</span>
// // // // // // //             </span>

// // // // // // //             {/* Subtle Right Arrow with Motion */}
// // // // // // //             <motion.span
// // // // // // //               animate={{ x: [0, 3, 0] }}
// // // // // // //               transition={{ duration: 1.5, repeat: Infinity }}
// // // // // // //             >
// // // // // // //               <ChevronRight size={14} className="text-orange-500" />
// // // // // // //             </motion.span>
// // // // // // //           </motion.div>

// // // // // // //           {/* Glassy Shadow behind */}
// // // // // // //           <div className="absolute inset-0 bg-orange-600/10 blur-xl rounded-full -z-10" />
// // // // // // //         </motion.div>

// // // // // // //         <motion.h1
// // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // //           transition={{ duration: 0.8 }}
// // // // // // //           className="text-5xl md:text-6xl font-black tracking-tight mb-8 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent"
// // // // // // //         >
// // // // // // //           Power Your Business with <br />
// // // // // // //           <span className="text-orange-500">Smarter Messaging</span>
// // // // // // //         </motion.h1>

// // // // // // //         <motion.p
// // // // // // //           initial={{ opacity: 0 }}
// // // // // // //           animate={{ opacity: 1 }}
// // // // // // //           transition={{ delay: 0.3 }}
// // // // // // //           className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
// // // // // // //         >
// // // // // // //           From social media scheduling to WhatsApp, SMS, and email campaigns —
// // // // // // //           manage everything in one powerful platform designed to grow your brand
// // // // // // //           faster.
// // // // // // //         </motion.p>

// // // // // // //         <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
// // // // // // //           <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-full font-bold text-lg shadow-lg shadow-orange-600/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
// // // // // // //             Start Growing Now <ChevronRight size={20} />
// // // // // // //           </button>
// // // // // // //           <p className="text-gray-500 text-sm italic">
// // // // // // //             Free forever. No credit card required.
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Hero;

// // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // import { gsap } from 'gsap';
// // // // // // import { 
// // // // // //   Facebook, Linkedin, Heart, Instagram, Mail, 
// // // // // //   MessageSquare, MessageCircle, Twitter, 
// // // // // //   Handshake, Settings, Cpu, ArrowUpRight, 
// // // // // //   TrendingUp, Zap 
// // // // // // } from 'lucide-react';

// // // // // // const Hero: React.FC = () => {
// // // // // //   const containerRef = useRef<HTMLDivElement>(null);
// // // // // //   const orbitRef = useRef<HTMLDivElement>(null);
// // // // // //   const coreRef = useRef<HTMLDivElement>(null);

// // // // // //   useEffect(() => {
// // // // // //     const ctx = gsap.context(() => {
// // // // // //       // 1. Initial Entrance
// // // // // //       gsap.from(".hero-content", {
// // // // // //         opacity: 0,
// // // // // //         y: 30,
// // // // // //         duration: 1,
// // // // // //         stagger: 0.2,
// // // // // //         ease: "power3.out"
// // // // // //       });

// // // // // //       // 2. Continuous Rotation of the Orbit
// // // // // //       gsap.to(".icon-orbit", {
// // // // // //         rotation: 360,
// // // // // //         duration: 40,
// // // // // //         repeat: -1,
// // // // // //         ease: "none"
// // // // // //       });

// // // // // //       // 3. Counter-rotation for Icons (to keep them upright)
// // // // // //       gsap.to(".orbit-icon", {
// // // // // //         rotation: -360,
// // // // // //         duration: 40,
// // // // // //         repeat: -1,
// // // // // //         ease: "none"
// // // // // //       });

// // // // // //       // 4. Mouse Movement Parallax
// // // // // //       const handleMouseMove = (e: MouseEvent) => {
// // // // // //         const { clientX, clientY } = e;
// // // // // //         const xPos = (clientX / window.innerWidth - 0.5) * 40;
// // // // // //         const yPos = (clientY / window.innerHeight - 0.5) * 40;

// // // // // //         gsap.to(orbitRef.current, {
// // // // // //           x: xPos,
// // // // // //           y: yPos,
// // // // // //           duration: 1,
// // // // // //           ease: "power2.out"
// // // // // //         });

// // // // // //         gsap.to(coreRef.current, {
// // // // // //           x: xPos * -0.5,
// // // // // //           y: yPos * -0.5,
// // // // // //           duration: 1,
// // // // // //           ease: "power2.out"
// // // // // //         });
// // // // // //       };

// // // // // //       window.addEventListener("mousemove", handleMouseMove);
// // // // // //       return () => window.removeEventListener("mousemove", handleMouseMove);
// // // // // //     }, containerRef);

// // // // // //     return () => ctx.revert();
// // // // // //   }, []);

// // // // // //   // Icon Configuration from your logo
// // // // // //   const orbitIcons = [
// // // // // //     { Icon: Facebook, color: "#1877F2", label: "f" },
// // // // // //     { Icon: Linkedin, color: "#0A66C2", label: "in" },
// // // // // //     { Icon: Heart, color: "#E0245E", label: "love" },
// // // // // //     { Icon: Instagram, color: "#E4405F", label: "ig" },
// // // // // //     { Icon: Mail, color: "#1F6ED4", label: "mail" },
// // // // // //     { Icon: MessageSquare, color: "#FF8C42", label: "sms" },
// // // // // //     { Icon: MessageCircle, color: "#25D366", label: "wa" },
// // // // // //     { Icon: Cpu, color: "#2CA7DF", label: "ai" },
// // // // // //     { Icon: Twitter, color: "#000000", label: "x" },
// // // // // //     { Icon: Handshake, color: "#FFB347", label: "collab" },
// // // // // //     { Icon: Settings, color: "#6C757D", label: "gear" },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section 
// // // // // //       ref={containerRef} 
// // // // // //       className="relative min-h-screen flex items-center bg-[#FFFDF5] overflow-hidden pt-16"
// // // // // //     >
// // // // // //       {/* Subtle Background Elements */}
// // // // // //       <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF8C42]/5 rounded-full blur-3xl" />
// // // // // //       <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1F6ED4]/5 rounded-full blur-3xl" />

// // // // // //       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        
// // // // // //         {/* Left Side: Refined Text */}
// // // // // //         <div className="max-w-xl">
// // // // // //           <div className="hero-content inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9ECEF] shadow-sm mb-6">
// // // // // //             <span className="flex h-2 w-2 rounded-full bg-[#28C76F] animate-pulse" />
// // // // // //             <span className="text-xs font-bold text-[#6C757D] uppercase tracking-widest">Platform Live 2025</span>
// // // // // //           </div>

// // // // // //           <h1 className="hero-content text-4xl lg:text-5xl font-black text-[#1E1E1E] leading-tight mb-6">
// // // // // //             Power Your Business with <br />
// // // // // //             <span className="text-[#1F6ED4]">Smarter Messaging</span> & <br />
// // // // // //             <span className="relative">
// // // // // //               Marketing
// // // // // //               <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FFB347]/40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" /></svg>
// // // // // //             </span>
// // // // // //           </h1>

// // // // // //           <p className="hero-content text-base lg:text-lg text-[#6C757D] mb-8 leading-relaxed">
// // // // // //             From social media scheduling to WhatsApp, SMS, and email campaigns—manage 
// // // // // //             everything in one powerful platform designed to grow your brand faster.
// // // // // //           </p>

// // // // // //           <div className="hero-content flex flex-wrap gap-4">
// // // // // //             <button className="px-7 py-3.5 bg-[#1E1E1E] text-white font-bold rounded-xl hover:bg-[#1F6ED4] transition-all flex items-center gap-2 group">
// // // // // //               Start Free Forever
// // // // // //               <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
// // // // // //             </button>
// // // // // //             <button className="px-7 py-3.5 bg-white border border-[#E9ECEF] text-[#1E1E1E] font-bold rounded-xl hover:bg-[#F5F7FA] transition-all">
// // // // // //               Book a Demo
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Right Side: Creative Logo-Inspired Visual */}
// // // // // //         <div className="relative flex justify-center items-center h-[500px]">
          
// // // // // //           {/* The Orbiting Ring */}
// // // // // //           <div ref={orbitRef} className="relative w-full h-full flex items-center justify-center">
            
// // // // // //             {/* The Main Orbit Ring (Dashed) */}
// // // // // //             <div className="icon-orbit absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] border-2 border-dashed border-[#E9ECEF] rounded-full flex items-center justify-center">
              
// // // // // //               {/* Mapping all icons from logo around the circle */}
// // // // // //               {orbitIcons.map((item, index) => {
// // // // // //                 const angle = (index / orbitIcons.length) * (Math.PI * 2);
// // // // // //                 const radius = window.innerWidth > 1024 ? 210 : 160;
// // // // // //                 const x = Math.cos(angle) * radius;
// // // // // //                 const y = Math.sin(angle) * radius;

// // // // // //                 return (
// // // // // //                   <div 
// // // // // //                     key={index}
// // // // // //                     className="orbit-icon absolute w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl shadow-md border border-[#F5F7FA] flex items-center justify-center transition-transform hover:scale-125 hover:z-50 cursor-pointer group"
// // // // // //                     style={{ left: `calc(50% + ${x}px - 24px)`, top: `calc(50% + ${y}px - 24px)` }}
// // // // // //                   >
// // // // // //                     <item.Icon size={20} color={item.color} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
// // // // // //                     {/* Tooltip */}
// // // // // //                     <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 bg-[#1E1E1E] text-white text-[10px] px-2 py-1 rounded transition-opacity uppercase font-bold">
// // // // // //                       {item.label}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 );
// // // // // //               })}
// // // // // //             </div>

// // // // // //             {/* The Core: Inspired by Logo's Wing and Arrow */}
// // // // // //             <div ref={coreRef} className="relative z-10 w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center">
              
// // // // // //               {/* Stylized Stats Chart (from logo) */}
// // // // // //               <div className="absolute bottom-8 flex items-end gap-1.5 h-16">
// // // // // //                 {[40, 70, 50, 90, 60].map((h, i) => (
// // // // // //                    <div 
// // // // // //                     key={i} 
// // // // // //                     className="w-3 bg-gradient-to-t from-[#8E44AD] to-[#D63384] rounded-t-sm animate-bounce" 
// // // // // //                     style={{ height: `${h}%`, animationDelay: `${i * 0.2}s` }} 
// // // // // //                   />
// // // // // //                 ))}
// // // // // //               </div>

// // // // // //               {/* Central Wing & Arrow Composite */}
// // // // // //               <div className="relative animate-pulse-slow">
// // // // // //                  {/* Wing Part */}
// // // // // //                  <div className="absolute -left-16 top-0 text-[#2CA7DF] opacity-80">
// // // // // //                     <Zap size={80} strokeWidth={1} fill="currentColor" className="-rotate-45" />
// // // // // //                  </div>
// // // // // //                  {/* Growth Arrow Part */}
// // // // // //                  <div className="relative bg-white p-6 rounded-[2rem] shadow-2xl border border-[#F5F7FA]">
// // // // // //                     <TrendingUp size={64} className="text-[#1F6ED4]" strokeWidth={3} />
// // // // // //                  </div>
// // // // // //               </div>

// // // // // //               {/* Growth Badge */}
// // // // // //               <div className="absolute top-0 right-0 bg-[#28C76F] text-white p-2 rounded-lg shadow-lg rotate-12 scale-75">
// // // // // //                 <ArrowUpRight size={20} strokeWidth={3} />
// // // // // //               </div>
// // // // // //             </div>

// // // // // //           </div>
// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Hero;

// // // // // import React, { useEffect, useRef } from 'react';
// // // // // import { gsap } from 'gsap';
// // // // // import { 
// // // // //   Facebook, Linkedin, Heart, Instagram, Mail, 
// // // // //   MessageSquare, MessageCircle, Twitter, 
// // // // //   Handshake, Settings, Cpu, ArrowUpRight, 
// // // // //   TrendingUp, Zap, MousePointer2, Bell
// // // // // } from 'lucide-react';

// // // // // const Hero: React.FC = () => {
// // // // //   const containerRef = useRef<HTMLDivElement>(null);
// // // // //   const iconsRef = useRef<HTMLDivElement>(null);

// // // // //   useEffect(() => {
// // // // //     const ctx = gsap.context(() => {
// // // // //       const tl = gsap.timeline();

// // // // //       // 1. Smooth Entrance
// // // // //       tl.from(".hero-text", {
// // // // //         x: -50,
// // // // //         opacity: 0,
// // // // //         duration: 1,
// // // // //         stagger: 0.2,
// // // // //         ease: "power4.out"
// // // // //       })
// // // // //       .from(".visual-center", {
// // // // //         scale: 0,
// // // // //         opacity: 0,
// // // // //         duration: 1.2,
// // // // //         ease: "elastic.out(1, 0.75)"
// // // // //       }, "-=0.8")
// // // // //       .from(".floating-card", {
// // // // //         y: 40,
// // // // //         opacity: 0,
// // // // //         duration: 0.8,
// // // // //         stagger: 0.2,
// // // // //         ease: "back.out(1.7)"
// // // // //       }, "-=0.5");

// // // // //       // 2. Organic Floating Animation (The "Drift")
// // // // //       const icons = gsap.utils.toArray<HTMLElement>(".floating-icon");
// // // // //       icons.forEach((icon, i) => {
// // // // //         gsap.to(icon, {
// // // // //           y: "random(-15, 15)",
// // // // //           x: "random(-10, 10)",
// // // // //           rotation: "random(-10, 10)",
// // // // //           duration: "random(2, 4)",
// // // // //           repeat: -1,
// // // // //           yoyo: true,
// // // // //           ease: "sine.inOut",
// // // // //           delay: i * 0.2
// // // // //         });
// // // // //       });

// // // // //       // 3. Magnetic Interaction
// // // // //       const handleMouseMove = (e: MouseEvent) => {
// // // // //         const { clientX, clientY } = e;
// // // // //         const centerX = window.innerWidth / 2;
// // // // //         const centerY = window.innerHeight / 2;

// // // // //         // Move the whole icon cluster slightly
// // // // //         gsap.to(iconsRef.current, {
// // // // //           x: (clientX - centerX) / 25,
// // // // //           y: (clientY - centerY) / 25,
// // // // //           duration: 1,
// // // // //           ease: "power2.out"
// // // // //         });

// // // // //         // Move the background "blobs" for depth
// // // // //         gsap.to(".bg-blob", {
// // // // //           x: (clientX - centerX) / 15,
// // // // //           y: (clientY - centerY) / 15,
// // // // //           duration: 1.5,
// // // // //           ease: "power1.out"
// // // // //         });
// // // // //       };

// // // // //       window.addEventListener("mousemove", handleMouseMove);
// // // // //       return () => window.removeEventListener("mousemove", handleMouseMove);
// // // // //     }, containerRef);

// // // // //     return () => ctx.revert();
// // // // //   }, []);

// // // // //   const socialIcons = [
// // // // //     { Icon: Facebook, color: "#1877F2", top: "10%", left: "20%" },
// // // // //     { Icon: Linkedin, color: "#0A66C2", top: "15%", left: "75%" },
// // // // //     { Icon: Instagram, color: "#E4405F", top: "75%", left: "80%" },
// // // // //     { Icon: MessageCircle, color: "#25D366", top: "80%", left: "20%" },
// // // // //     { Icon: Twitter, color: "#000000", top: "45%", left: "5%" },
// // // // //     { Icon: Mail, color: "#1F6ED4", top: "50%", left: "90%" },
// // // // //   ];

// // // // //   return (
// // // // //     <section 
// // // // //       ref={containerRef} 
// // // // //       className="relative min-h-screen flex items-center bg-[#FFFEFA] overflow-hidden px-6 pt-20 lg:pt-0"
// // // // //     >
// // // // //       {/* Dynamic Background Elements */}
// // // // //       <div className="bg-blob absolute top-[20%] right-[10%] w-72 h-72 bg-[#1F6ED4]/5 rounded-full blur-[100px]" />
// // // // //       <div className="bg-blob absolute bottom-[10%] left-[10%] w-96 h-96 bg-[#FF8C42]/5 rounded-full blur-[100px]" />

// // // // //       <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
// // // // //         {/* Left Content */}
// // // // //         <div className="z-10 text-center lg:text-left">
// // // // //           <div className="hero-text inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E9ECEF] shadow-sm mb-8">
// // // // //             <Zap size={14} className="text-[#FFB347] fill-[#FFB347]" />
// // // // //             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6C757D]">Integrated Growth Engine</span>
// // // // //           </div>

// // // // //           <h1 className="hero-text text-5xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.1] mb-8">
// // // // //             Scale your brand <br />
// // // // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F6ED4] to-[#8E44AD]">
// // // // //               with one platform.
// // // // //             </span>
// // // // //           </h1>

// // // // //           <p className="hero-text text-lg text-[#6C757D] mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
// // // // //             Stop juggling apps. Manage WhatsApp, SMS, and Social Media campaigns in a 
// // // // //             unified dashboard built for modern creators and agencies.
// // // // //           </p>

// // // // //           <div className="hero-text flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
// // // // //             <button className="group relative px-8 py-4 bg-[#1E1E1E] text-white font-bold rounded-2xl overflow-hidden transition-all hover:pr-12">
// // // // //               <span className="relative z-10">Start Growing Free</span>
// // // // //               <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
// // // // //             </button>
// // // // //             <button className="px-8 py-4 bg-white border-2 border-[#E9ECEF] text-[#1E1E1E] font-bold rounded-2xl hover:bg-[#F5F7FA] transition-colors">
// // // // //               See How It Works
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Right Visual (The Modern Integration Hub) */}
// // // // //         <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
          
// // // // //           <div ref={iconsRef} className="relative w-full h-full flex items-center justify-center">
            
// // // // //             {/* The Central Hub (The Wing/Growth) */}
// // // // //             <div className="visual-center relative z-20 w-48 h-48 lg:w-56 lg:h-56 bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#F5F7FA] flex items-center justify-center overflow-hidden">
// // // // //                <div className="absolute inset-0 bg-gradient-to-br from-[#1F6ED4]/5 to-transparent" />
// // // // //                <div className="relative text-center">
// // // // //                   <TrendingUp size={60} className="text-[#1F6ED4] mb-2" strokeWidth={2.5} />
// // // // //                   <div className="flex gap-1 justify-center">
// // // // //                     {[3,6,4,8].map((h, i) => (
// // // // //                       <div key={i} className="w-1.5 bg-[#8E44AD] rounded-full animate-pulse" style={{ height: h*4, animationDelay: `${i*0.2}s` }} />
// // // // //                     ))}
// // // // //                   </div>
// // // // //                </div>
// // // // //             </div>

// // // // //             {/* Floating Social Icons (Orbiting naturally) */}
// // // // //             {socialIcons.map((item, i) => (
// // // // //               <div 
// // // // //                 key={i}
// // // // //                 className="floating-icon absolute p-4 bg-white rounded-2xl shadow-lg border border-[#F5F7FA] text-gray-700 z-10"
// // // // //                 style={{ top: item.top, left: item.left }}
// // // // //               >
// // // // //                 <item.Icon size={24} color={item.color} />
// // // // //               </div>
// // // // //             ))}

// // // // //             {/* Bento-Style Micro-Cards (High Creativity) */}
// // // // //             <div className="floating-card absolute top-[10%] left-[45%] bg-white px-4 py-2 rounded-full shadow-md border border-[#F5F7FA] flex items-center gap-2 z-30">
// // // // //                 <div className="w-2 h-2 rounded-full bg-[#28C76F]" />
// // // // //                 <span className="text-[10px] font-bold text-[#1E1E1E]">Campaign Live</span>
// // // // //             </div>

// // // // //             <div className="floating-card absolute bottom-[20%] right-[5%] bg-white p-4 rounded-2xl shadow-xl border border-[#F5F7FA] z-30">
// // // // //                 <div className="flex items-center gap-3">
// // // // //                    <div className="p-2 bg-[#FF8C42]/10 rounded-lg text-[#FF8C42]">
// // // // //                       <MessageSquare size={18} />
// // // // //                    </div>
// // // // //                    <div>
// // // // //                       <p className="text-[9px] font-bold text-[#6C757D] uppercase">New Lead</p>
// // // // //                       <p className="text-xs font-black text-[#1E1E1E]">WhatsApp: +91 98...</p>
// // // // //                    </div>
// // // // //                 </div>
// // // // //             </div>

// // // // //             <div className="floating-card absolute top-[60%] left-0 bg-white p-3 rounded-xl shadow-lg border border-[#F5F7FA] z-30 flex items-center gap-3">
// // // // //                <div className="w-8 h-8 rounded-full bg-[#8E44AD] flex items-center justify-center text-white">
// // // // //                   <Bell size={14} />
// // // // //                </div>
// // // // //                <span className="text-[10px] font-medium text-[#1E1E1E]">AI Caption Generated</span>
// // // // //             </div>

// // // // //           </div>
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Hero;

// // // // import React, { useEffect, useRef } from 'react';
// // // // import { gsap } from 'gsap';
// // // // import { 
// // // //   Facebook, Linkedin, Instagram, Mail, 
// // // //   MessageSquare, MessageCircle, Twitter, 
// // // //   Cpu, ArrowUpRight, TrendingUp, Zap, 
// // // //   CheckCircle2, Plus
// // // // } from 'lucide-react';

// // // // const IntegrationHero: React.FC = () => {
// // // //   const containerRef = useRef<HTMLDivElement>(null);
// // // //   const svgRef = useRef<SVGSVGElement>(null);

// // // //   useEffect(() => {
// // // //     const ctx = gsap.context(() => {
// // // //       const tl = gsap.timeline();

// // // //       // 1. Entrance Animation
// // // //       tl.from(".hero-text-item", {
// // // //         x: -30,
// // // //         opacity: 0,
// // // //         duration: 0.8,
// // // //         stagger: 0.2,
// // // //         ease: "power3.out"
// // // //       })
// // // //       .from(".central-hub", {
// // // //         scale: 0,
// // // //         rotate: -45,
// // // //         duration: 1,
// // // //         ease: "elastic.out(1, 0.75)"
// // // //       }, "-=0.5")
// // // //       .from(".social-node", {
// // // //         scale: 0,
// // // //         opacity: 0,
// // // //         duration: 0.5,
// // // //         stagger: 0.1,
// // // //         ease: "back.out(2)"
// // // //       }, "-=0.5");

// // // //       // 2. The Integration Flow (Pulse animation along paths)
// // // //       const paths = gsap.utils.toArray<SVGPathElement>(".connection-path");
// // // //       paths.forEach((path) => {
// // // //         // Create a traveling pulse for each path
// // // //         const length = path.getTotalLength();
        
// // // //         // Initial path state
// // // //         gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, opacity: 0.2 });

// // // //         // Pulse Animation
// // // //         gsap.to(path, {
// // // //           strokeDashoffset: 0,
// // // //           opacity: 0.8,
// // // //           duration: 2,
// // // //           repeat: -1,
// // // //           ease: "sine.inOut",
// // // //           delay: Math.random() * 2
// // // //         });
// // // //       });

// // // //       // 3. Hub Heartbeat
// // // //       gsap.to(".hub-glow", {
// // // //         scale: 1.2,
// // // //         opacity: 0.5,
// // // //         duration: 1.5,
// // // //         repeat: -1,
// // // //         yoyo: true,
// // // //         ease: "sine.inOut"
// // // //       });

// // // //       // 4. Floating Movement for Nodes
// // // //       gsap.to(".social-node", {
// // // //         y: "random(-10, 10)",
// // // //         x: "random(-5, 5)",
// // // //         duration: "random(2, 4)",
// // // //         repeat: -1,
// // // //         yoyo: true,
// // // //         ease: "sine.inOut"
// // // //       });
// // // //     }, containerRef);

// // // //     return () => ctx.revert();
// // // //   }, []);

// // // //   const integrations = [
// // // //     { Icon: Facebook, color: "#1877F2", pos: { top: "5%", left: "50%" }, label: "Facebook" },
// // // //     { Icon: Instagram, color: "#E4405F", pos: { top: "20%", left: "85%" }, label: "Instagram" },
// // // //     { Icon: Twitter, color: "#000000", pos: { top: "60%", left: "95%" }, label: "Twitter" },
// // // //     { Icon: Linkedin, color: "#0A66C2", pos: { top: "85%", left: "70%" }, label: "LinkedIn" },
// // // //     { Icon: MessageCircle, color: "#25D366", pos: { top: "85%", left: "30%" }, label: "WhatsApp" },
// // // //     { Icon: MessageSquare, color: "#FF8C42", pos: { top: "60%", left: "5%" }, label: "SMS" },
// // // //     { Icon: Mail, color: "#1F6ED4", pos: { top: "20%", left: "15%" }, label: "Email" },
// // // //     { Icon: Cpu, color: "#8E44AD", pos: { top: "-5%", left: "80%" }, label: "AI Engine" },
// // // //   ];

// // // //   return (
// // // //     <section 
// // // //       ref={containerRef} 
// // // //       className="relative min-h-screen flex items-center bg-[#FFFEFA] overflow-hidden px-6 pt-20 lg:pt-0"
// // // //     >
// // // //       {/* Background Blobs */}
// // // //       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1F6ED4]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
// // // //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF8C42]/5 rounded-full blur-[120px] -ml-64 -mb-64" />

// // // //       <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
// // // //         {/* Left Side: Messaging */}
// // // //         <div className="z-10 order-2 lg:order-1 text-center lg:text-left">
// // // //           <div className="hero-text-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E9ECEF] shadow-sm mb-6">
// // // //             <span className="flex h-2 w-2 rounded-full bg-[#28C76F] animate-ping" />
// // // //             <span className="text-[10px] font-black uppercase tracking-widest text-[#6C757D]">Everything Unified. One Dashboard.</span>
// // // //           </div>

// // // //           <h1 className="hero-text-item text-4xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.1] mb-6">
// // // //             Your Entire Social <br />
// // // //             <span className="text-[#1F6ED4]">Ecosystem</span>, <br />
// // // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C42] to-[#FFB347]">Handled.</span>
// // // //           </h1>

// // // //           <p className="hero-text-item text-lg text-[#6C757D] mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
// // // //             Manage your brand across every channel. From AI-driven social posts to direct 
// // // //             WhatsApp & SMS marketing—integrated, automated, and scaled.
// // // //           </p>

// // // //           <div className="hero-text-item flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
// // // //             <button className="w-full sm:w-auto px-8 py-4 bg-[#1E1E1E] text-white font-bold rounded-2xl hover:bg-[#1F6ED4] transition-all shadow-xl shadow-gray-200">
// // // //               Get Started Free
// // // //             </button>
// // // //             <div className="flex items-center gap-2 text-[#28C76F] font-bold text-sm">
// // // //               <CheckCircle2 size={18} />
// // // //               Free Forever. No Card Required.
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Right Side: The Integration Engine Visual */}
// // // //         <div className="relative h-[500px] lg:h-[600px] order-1 lg:order-2 flex items-center justify-center">
          
// // // //           {/* SVG Connection Lines */}
// // // //           <svg 
// // // //             ref={svgRef}
// // // //             className="absolute inset-0 w-full h-full pointer-events-none" 
// // // //             viewBox="0 0 500 500"
// // // //             fill="none"
// // // //           >
// // // //             {/* Paths from center (250, 250) to the relative positions of icons */}
// // // //             <path className="connection-path" d="M250 250 Q 250 50 250 50" stroke="#1F6ED4" strokeWidth="2" strokeLinecap="round" />
// // // //             <path className="connection-path" d="M250 250 Q 400 150 425 100" stroke="#E4405F" strokeWidth="2" strokeLinecap="round" />
// // // //             <path className="connection-path" d="M250 250 Q 450 250 475 300" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
// // // //             <path className="connection-path" d="M250 250 Q 350 400 350 425" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" />
// // // //             <path className="connection-path" d="M250 250 Q 150 400 150 425" stroke="#25D366" strokeWidth="2" strokeLinecap="round" />
// // // //             <path className="connection-path" d="M250 250 Q 50 300 25 300" stroke="#FF8C42" strokeWidth="2" strokeLinecap="round" />
// // // //             <path className="connection-path" d="M250 250 Q 100 150 75 100" stroke="#1F6ED4" strokeWidth="2" strokeLinecap="round" />
// // // //             <path className="connection-path" d="M250 250 Q 400 50 400 0" stroke="#8E44AD" strokeWidth="2" strokeLinecap="round" />
// // // //           </svg>

// // // //           {/* Central Shiven Hub */}
// // // //           <div className="central-hub relative z-20 w-32 h-32 lg:w-44 lg:h-44 bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-[#F5F7FA] flex items-center justify-center group">
// // // //             <div className="hub-glow absolute inset-0 bg-[#1F6ED4]/20 rounded-[2.5rem] scale-110" />
// // // //             <div className="relative z-10 text-center">
// // // //               <Zap size={48} className="text-[#1F6ED4] mx-auto fill-[#1F6ED4]/10" />
// // // //               <div className="mt-2 px-3 py-1 bg-[#F5F7FA] rounded-full text-[8px] font-black text-[#1F6ED4] uppercase tracking-tighter">
// // // //                 Shiven Engine
// // // //               </div>
// // // //             </div>
            
// // // //             {/* Growth Result Badge */}
// // // //             <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#28C76F] rounded-xl shadow-lg flex items-center justify-center text-white animate-bounce">
// // // //               <TrendingUp size={24} />
// // // //             </div>
// // // //           </div>

// // // //           {/* Social Integration Nodes */}
// // // //           {integrations.map((item, i) => (
// // // //             <div 
// // // //               key={i}
// // // //               className="social-node absolute flex flex-col items-center gap-1 group"
// // // //               style={{ top: item.pos.top, left: item.pos.left }}
// // // //             >
// // // //               <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-2xl shadow-lg border border-[#F5F7FA] flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-2xl cursor-pointer">
// // // //                 <item.Icon size={24} color={item.color} strokeWidth={2.5} />
// // // //               </div>
// // // //               <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E1E1E] text-white text-[8px] px-2 py-0.5 rounded uppercase font-black">
// // // //                 {item.label}
// // // //               </div>
// // // //             </div>
// // // //           ))}

// // // //           {/* Small Decorative "Plus" elements */}
// // // //           <div className="absolute top-[20%] left-[30%] text-[#E9ECEF] rotate-45"><Plus size={20} /></div>
// // // //           <div className="absolute bottom-[20%] right-[30%] text-[#E9ECEF] -rotate-12"><Plus size={16} /></div>

// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default IntegrationHero;

// // // import React, { useEffect, useRef } from 'react';
// // // import { gsap } from 'gsap';
// // // import { 
// // //   Facebook, Linkedin, Instagram, Mail, 
// // //   MessageSquare, MessageCircle, Twitter, 
// // //   Cpu, TrendingUp, Zap, 
// // //   CheckCircle2, Plus
// // // } from 'lucide-react';

// // // const IntegrationHero: React.FC = () => {
// // //   const containerRef = useRef<HTMLDivElement>(null);

// // //   // x/y are based on a 500x500 SVG viewBox to match the CSS percentages
// // //   // Example: top 20%, left 85% => y = 500 * 0.20 = 100, x = 500 * 0.85 = 425
// // //   const integrations = [
// // //     { id: 'fb', Icon: Facebook, color: "#1877F2", x: 250, y: 25, pos: { top: "5%", left: "50%" }, label: "Facebook", cp: "250,100" },
// // //     { id: 'ig', Icon: Instagram, color: "#E4405F", x: 425, y: 100, pos: { top: "20%", left: "85%" }, label: "Instagram", cp: "400,150" },
// // //     { id: 'tw', Icon: Twitter, color: "#000000", x: 475, y: 300, pos: { top: "60%", left: "95%" }, label: "Twitter", cp: "450,250" },
// // //     { id: 'li', Icon: Linkedin, color: "#0A66C2", x: 350, y: 425, pos: { top: "85%", left: "70%" }, label: "LinkedIn", cp: "350,400" },
// // //     { id: 'wa', Icon: MessageCircle, color: "#25D366", x: 150, y: 425, pos: { top: "85%", left: "30%" }, label: "WhatsApp", cp: "150,400" },
// // //     { id: 'sms', Icon: MessageSquare, color: "#FF8C42", x: 25, y: 300, pos: { top: "60%", left: "5%" }, label: "SMS", cp: "50,300" },
// // //     { id: 'mail', Icon: Mail, color: "#1F6ED4", x: 75, y: 100, pos: { top: "20%", left: "15%" }, label: "Email", cp: "100,150" },
// // //     { id: 'ai', Icon: Cpu, color: "#8E44AD", x: 400, y: 0, pos: { top: "0%", left: "80%" }, label: "AI Engine", cp: "400,50" },
// // //   ];

// // //   useEffect(() => {
// // //     const ctx = gsap.context(() => {
// // //       const tl = gsap.timeline();

// // //       // 1. Content Entrance Animation
// // //       tl.from(".hero-headline", { y: 40, opacity: 0, duration: 1, ease: "power4.out" })
// // //         .from(".hero-subtext", { y: 30, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.7")
// // //         .from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, ease: "power4.out" }, "-=0.7")
// // //         .from(".central-hub", { scale: 0, rotate: -45, duration: 1.2, ease: "elastic.out(1, 0.75)" }, "-=1")
// // //         .from(".social-node", { scale: 0, opacity: 0, duration: 0.6, stagger: 0.1, ease: "back.out(2)" }, "-=0.8");

// // //       // 2. Smooth Flow Animation
// // //       integrations.forEach((node) => {
// // //         const path = document.querySelector(`.path-${node.id}`) as SVGPathElement;
// // //         const length = path.getTotalLength();
        
// // //         gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

// // //         // Pulse traveling from Icon TO Hub
// // //         gsap.to(path, {
// // //           strokeDashoffset: 0,
// // //           opacity: 0.8,
// // //           duration: 2.5,
// // //           repeat: -1,
// // //           ease: "sine.inOut",
// // //           delay: Math.random() * 2,
// // //           onRepeat: () => {
// // //             // Smooth fade out before restart
// // //             gsap.fromTo(path, { opacity: 0.8 }, { opacity: 0.2, duration: 0.5 });
// // //           }
// // //         });
// // //       });

// // //       // 3. Central Hub Heartbeat
// // //       gsap.to(".hub-glow", { scale: 1.2, opacity: 0.4, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });

// // //       // 4. Subtle Node Float
// // //       gsap.to(".social-node", {
// // //         y: "random(-8, 8)",
// // //         x: "random(-4, 4)",
// // //         duration: "random(3, 5)",
// // //         repeat: -1,
// // //         yoyo: true,
// // //         ease: "sine.inOut"
// // //       });
// // //     }, containerRef);

// // //     return () => ctx.revert();
// // //   }, []);

// // //   return (
// // //     <section 
// // //       ref={containerRef} 
// // //       className="relative min-h-screen flex items-center bg-[#FFFEFA] overflow-hidden px-6 pt-24 lg:pt-0"
// // //     >
// // //       {/* Background Blobs */}
// // //       <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#1F6ED4]/5 rounded-full blur-[120px]" />
// // //       <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#FF8C42]/5 rounded-full blur-[120px]" />

// // //       <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
// // //         {/* Left Side: Messaging */}
// // //         <div className="z-10 order-2 lg:order-1 text-center lg:text-left">
// // //           <div className="hero-cta inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E9ECEF] shadow-sm mb-8">
// // //             <span className="flex h-2 w-2 rounded-full bg-[#28C76F] animate-ping" />
// // //             <span className="text-[10px] font-black uppercase tracking-widest text-[#6C757D]">Integrated Growth Engine</span>
// // //           </div>

// // //           <h1 className="hero-headline text-4xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.1] mb-6">
// // //             Power Your Business with <br />
// // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F6ED4] to-[#2CA7DF]">
// // //               Smarter Messaging
// // //             </span> & Marketing
// // //           </h1>

// // //           <p className="hero-subtext text-lg text-[#6C757D] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
// // //             From social media scheduling software to WhatsApp, SMS, and email campaigns, manage
// // //             everything in one powerful platform designed to grow your brand faster.
// // //           </p>

// // //           <div className="hero-cta flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
// // //             <button className="w-full sm:w-auto px-8 py-4 bg-[#1E1E1E] text-white font-bold rounded-2xl hover:bg-[#1F6ED4] transition-all shadow-xl shadow-blue-100">
// // //               Get Started Free
// // //             </button>
// // //             <div className="flex items-center gap-2 text-[#28C76F] font-bold text-sm">
// // //               <CheckCircle2 size={18} />
// // //               No Credit Card Required
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right Side: Visual */}
// // //         <div className="relative h-[500px] lg:h-[600px] order-1 lg:order-2 flex items-center justify-center">
          
// // //           {/* SVG Connection Lines */}
// // //           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" fill="none">
// // //             {integrations.map((node) => (
// // //               <path 
// // //                 key={node.id}
// // //                 className={`connection-path path-${node.id}`}
// // //                 d={`M 250 250 Q ${node.cp} ${node.x} ${node.y}`} 
// // //                 stroke={node.color} 
// // //                 strokeWidth="1.5" 
// // //                 strokeLinecap="round" 
// // //                 strokeOpacity="0.2"
// // //               />
// // //             ))}
// // //           </svg>

// // //           {/* Central Shiven Hub */}
// // //           <div className="central-hub relative z-20 w-32 h-32 lg:w-44 lg:h-44 bg-white rounded-[2.5rem] shadow-2xl border border-[#F5F7FA] flex items-center justify-center">
// // //             <div className="hub-glow absolute inset-0 bg-[#1F6ED4]/20 rounded-[2.5rem] scale-110" />
// // //             <div className="relative z-10 text-center">
// // //               <Zap size={48} className="text-[#1F6ED4] mx-auto fill-[#1F6ED4]/10" />
// // //               <div className="mt-2 px-3 py-1 bg-[#F5F7FA] rounded-full text-[8px] font-black text-[#1F6ED4] uppercase tracking-tighter">
// // //                 Shiven Engine
// // //               </div>
// // //             </div>
// // //             <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#28C76F] rounded-xl shadow-lg flex items-center justify-center text-white animate-bounce">
// // //               <TrendingUp size={24} />
// // //             </div>
// // //           </div>

// // //           {/* Social Nodes */}
// // //           {integrations.map((item) => (
// // //             <div 
// // //               key={item.id}
// // //               className="social-node absolute flex flex-col items-center gap-1 group"
// // //               style={{ 
// // //                 top: item.pos.top, 
// // //                 left: item.pos.left,
// // //                 transform: 'translate(-50%, -50%)' // Forces center alignment
// // //               }}
// // //             >
// // //               <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-2xl shadow-lg border border-[#F5F7FA] flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-2xl cursor-pointer">
// // //                 <item.Icon size={24} color={item.color} strokeWidth={2.5} />
// // //               </div>
// // //               <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E1E1E] text-white text-[8px] px-2 py-0.5 rounded uppercase font-black absolute -bottom-6 whitespace-nowrap">
// // //                 {item.label}
// // //               </div>
// // //             </div>
// // //           ))}

// // //           {/* Decorative Plus Icons */}
// // //           <div className="absolute top-[20%] left-[30%] text-[#E9ECEF] rotate-45"><Plus size={20} /></div>
// // //           <div className="absolute bottom-[20%] right-[30%] text-[#E9ECEF] -rotate-12"><Plus size={16} /></div>
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default IntegrationHero;


// // import React, { useEffect, useRef } from 'react';
// // import { gsap } from 'gsap';
// // import { 
// //   Facebook, Linkedin, Instagram, Mail, 
// //   MessageSquare, MessageCircle, Twitter, 
// //   Cpu, TrendingUp, Zap, 
// //   CheckCircle2, Plus
// // } from 'lucide-react';

// // const IntegrationHero: React.FC = () => {
// //   const containerRef = useRef<HTMLDivElement>(null);

// //   // x/y are based on 500x500 SVG viewBox to match CSS percentages exactly
// //   const integrations = [
// //     { id: 'fb', Icon: Facebook, color: "#1877F2", x: 250, y: 25, pos: { top: "5%", left: "50%" }, label: "Facebook", cp: "250,100" },
// //     { id: 'ig', Icon: Instagram, color: "#E4405F", x: 425, y: 100, pos: { top: "20%", left: "85%" }, label: "Instagram", cp: "400,150" },
// //     { id: 'tw', Icon: Twitter, color: "#000000", x: 475, y: 300, pos: { top: "60%", left: "95%" }, label: "Twitter", cp: "450,250" },
// //     { id: 'li', Icon: Linkedin, color: "#0A66C2", x: 350, y: 425, pos: { top: "85%", left: "70%" }, label: "LinkedIn", cp: "350,400" },
// //     { id: 'wa', Icon: MessageCircle, color: "#25D366", x: 150, y: 425, pos: { top: "85%", left: "30%" }, label: "WhatsApp", cp: "150,400" },
// //     { id: 'sms', Icon: MessageSquare, color: "#FF8C42", x: 25, y: 300, pos: { top: "60%", left: "5%" }, label: "SMS", cp: "50,300" },
// //     { id: 'mail', Icon: Mail, color: "#1F6ED4", x: 75, y: 100, pos: { top: "20%", left: "15%" }, label: "Email", cp: "100,150" },
// //     { id: 'ai', Icon: Cpu, color: "#8E44AD", x: 400, y: 0, pos: { top: "0%", left: "80%" }, label: "AI Engine", cp: "400,50" },
// //   ];

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       // 1. Text Entrance
// //       gsap.from(".hero-content", {
// //         y: 30,
// //         opacity: 0,
// //         duration: 1,
// //         stagger: 0.2,
// //         ease: "power4.out"
// //       });

// //       // 2. Line Pulse Logic
// //       integrations.forEach((node) => {
// //         const pulsePath = document.querySelector(`.pulse-${node.id}`) as SVGPathElement;
// //         const length = pulsePath.getTotalLength();
        
// //         // Hide pulse initially
// //         gsap.set(pulsePath, { strokeDasharray: length, strokeDashoffset: length, opacity: 0 });

// //         // Create a repeating timeline for each specific path
// //         const pulseTl = gsap.timeline({
// //           repeat: -1,
// //           repeatDelay: Math.random() * 1.5
// //         });

// //         pulseTl
// //           .to(pulsePath, {
// //             opacity: 1,
// //             duration: 0.3,
// //           })
// //           .to(pulsePath, {
// //             strokeDashoffset: 0,
// //             duration: 2.2,
// //             ease: "power1.inOut",
// //           })
// //           .to(pulsePath, {
// //             opacity: 0,
// //             duration: 0.6, // Smooth fade out as it hits the hub
// //           }, "-=0.6"); // Start fading slightly before the movement ends
// //       });

// //       // Hub Pulse
// //       gsap.to(".hub-glow", { scale: 1.25, opacity: 0.5, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });

// //       // Floating Icons
// //       gsap.to(".social-node", {
// //         y: "random(-12, 12)",
// //         duration: "random(2.5, 4.5)",
// //         repeat: -1,
// //         yoyo: true,
// //         ease: "sine.inOut"
// //       });
// //     }, containerRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <section 
// //       ref={containerRef} 
// //       className="relative min-h-screen flex items-center bg-[#FFFEFA] overflow-hidden px-6 pt-24 lg:pt-0"
// //     >
// //       {/* Background Blobs */}
// //       <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-[#1F6ED4]/5 rounded-full blur-[120px]" />
// //       <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-[#FF8C42]/5 rounded-full blur-[120px]" />

// //       <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
// //         {/* Left Side: Messaging */}
// //         <div className="z-10 order-2 lg:order-1 text-center lg:text-left">
// //           <div className="hero-content inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E9ECEF] shadow-sm mb-8">
// //             <span className="flex h-2 w-2 rounded-full bg-[#28C76F] animate-ping" />
// //             <span className="text-[10px] font-black uppercase tracking-widest text-[#6C757D]">Everything Unified. One Platform.</span>
// //           </div>

// //           <h1 className="hero-content text-4xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.1] mb-6">
// //             Power Your Business with <br />
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F6ED4] to-[#2CA7DF]">
// //               Smarter Messaging
// //             </span> & Marketing
// //           </h1>

// //           <p className="hero-content text-lg text-[#6C757D] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
// //             From social media scheduling software to WhatsApp, SMS, and email campaigns, manage
// //             everything in one powerful platform designed to grow your brand faster.
// //           </p>

// //           <div className="hero-content flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
// //             <button className="w-full sm:w-auto px-8 py-4 bg-[#1E1E1E] text-white font-bold rounded-2xl hover:bg-[#1F6ED4] transition-all shadow-xl shadow-blue-100">
// //               Get Started Free
// //             </button>
// //             <div className="flex items-center gap-2 text-[#28C76F] font-bold text-sm">
// //               <CheckCircle2 size={18} />
// //               No Credit Card Required
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Side: The Integration Engine Visual */}
// //         <div className="relative h-[500px] lg:h-[600px] order-1 lg:order-2 flex items-center justify-center">
          
// //           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" fill="none">
// //             {integrations.map((node) => (
// //               <React.Fragment key={node.id}>
// //                 {/* Static Background Path (Visible but subtle) */}
// //                 <path 
// //                   d={`M 250 250 Q ${node.cp} ${node.x} ${node.y}`} 
// //                   stroke={node.color} 
// //                   strokeWidth="1.5" 
// //                   strokeLinecap="round" 
// //                   strokeOpacity="0.15" // Background trail visibility
// //                 />
// //                 {/* Active Pulse Path (The vibrant one) */}
// //                 <path 
// //                   className={`pulse-${node.id}`}
// //                   d={`M 250 250 Q ${node.cp} ${node.x} ${node.y}`} 
// //                   stroke={node.color} 
// //                   strokeWidth="2.5" 
// //                   strokeLinecap="round" 
// //                 />
// //               </React.Fragment>
// //             ))}
// //           </svg>

// //           {/* Central Shiven Hub */}
// //           <div className="central-hub relative z-20 w-32 h-32 lg:w-44 lg:h-44 bg-white rounded-[2.5rem] shadow-2xl border border-[#F5F7FA] flex items-center justify-center">
// //             <div className="hub-glow absolute inset-0 bg-[#1F6ED4]/20 rounded-[2.5rem] scale-110" />
// //             <div className="relative z-10 text-center">
// //               <Zap size={48} className="text-[#1F6ED4] mx-auto fill-[#1F6ED4]/10" />
// //               <div className="mt-2 px-3 py-1 bg-[#F5F7FA] rounded-full text-[8px] font-black text-[#1F6ED4] uppercase tracking-tighter">
// //                 Shiven Engine
// //               </div>
// //             </div>
// //             <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#28C76F] rounded-xl shadow-lg flex items-center justify-center text-white animate-bounce">
// //               <TrendingUp size={24} />
// //             </div>
// //           </div>

// //           {/* Social Nodes */}
// //           {integrations.map((item) => (
// //             <div 
// //               key={item.id}
// //               className="social-node absolute flex flex-col items-center gap-1 group"
// //               style={{ 
// //                 top: item.pos.top, 
// //                 left: item.pos.left,
// //                 transform: 'translate(-50%, -50%)' 
// //               }}
// //             >
// //               <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-2xl shadow-lg border border-[#F5F7FA] flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-2xl cursor-pointer">
// //                 <item.Icon size={24} color={item.color} strokeWidth={2.5} />
// //               </div>
// //               <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E1E1E] text-white text-[8px] px-2 py-0.5 rounded uppercase font-black absolute -bottom-6 whitespace-nowrap">
// //                 {item.label}
// //               </div>
// //             </div>
// //           ))}

// //           {/* Plus Decor */}
// //           <div className="absolute top-[20%] left-[30%] text-[#E9ECEF] rotate-45"><Plus size={20} /></div>
// //           <div className="absolute bottom-[20%] right-[30%] text-[#E9ECEF] -rotate-12"><Plus size={16} /></div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default IntegrationHero;


// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { 
//   Facebook, Linkedin, Instagram, Mail, 
//   MessageSquare, MessageCircle, Twitter, 
//   Cpu, TrendingUp, Zap, 
//   CheckCircle2, Plus
// } from 'lucide-react';

// const IntegrationHero: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Math: x/y based on 500x500 viewBox to match CSS percentages (e.g., top 5% = y: 25)
//   const integrations = [
//     { id: 'fb', Icon: Facebook, color: "#1877F2", x: 250, y: 25, pos: { top: "5%", left: "50%" }, label: "Facebook", cp: "250,100" },
//     { id: 'ig', Icon: Instagram, color: "#E4405F", x: 425, y: 100, pos: { top: "20%", left: "85%" }, label: "Instagram", cp: "400,150" },
//     { id: 'tw', Icon: Twitter, color: "#000000", x: 475, y: 300, pos: { top: "60%", left: "95%" }, label: "Twitter", cp: "450,250" },
//     { id: 'li', Icon: Linkedin, color: "#0A66C2", x: 350, y: 425, pos: { top: "85%", left: "70%" }, label: "LinkedIn", cp: "350,400" },
//     { id: 'wa', Icon: MessageCircle, color: "#25D366", x: 150, y: 425, pos: { top: "85%", left: "30%" }, label: "WhatsApp", cp: "150,400" },
//     { id: 'sms', Icon: MessageSquare, color: "#FF8C42", x: 25, y: 300, pos: { top: "60%", left: "5%" }, label: "SMS", cp: "50,300" },
//     { id: 'mail', Icon: Mail, color: "#1F6ED4", x: 75, y: 100, pos: { top: "20%", left: "15%" }, label: "Email", cp: "100,150" },
//     { id: 'ai', Icon: Cpu, color: "#8E44AD", x: 400, y: 0, pos: { top: "0%", left: "80%" }, label: "AI Engine", cp: "400,50" },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. Entrance
//       gsap.from(".hero-content", {
//         y: 30,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.15,
//         ease: "power4.out"
//       });

//       // 2. Continuous Pulse Logic
//       integrations.forEach((node) => {
//         const pulsePath = document.querySelector(`.pulse-${node.id}`) as SVGPathElement;
//         const length = pulsePath.getTotalLength();
        
//         gsap.set(pulsePath, { strokeDasharray: length, strokeDashoffset: length, opacity: 0 });

//         const pulseTl = gsap.timeline({
//           repeat: -1,
//           repeatDelay: Math.random() * 1.5
//         });

//         pulseTl
//           .to(pulsePath, { opacity: 1, duration: 0.3 })
//           .to(pulsePath, { strokeDashoffset: 0, duration: 2.2, ease: "power1.inOut" })
//           .to(pulsePath, { opacity: 0, duration: 0.6 }, "-=0.6");
//       });

//       // Hub Glow
//       gsap.to(".hub-glow", { scale: 1.2, opacity: 0.5, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });

//       // Node Float
//       gsap.to(".social-node", {
//         y: "random(-10, 10)",
//         duration: "random(2.5, 4)",
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section 
//       ref={containerRef} 
//       // pt-32 ensures margin from navbar; pt-0 on large screens if navbar is handled differently
//       className="relative min-h-screen flex items-center bg-[#FFFEFA] overflow-hidden px-6 pt-32 lg:pt-20"
//     >
//       {/* Background Decor */}
//       <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#1F6ED4]/5 rounded-full blur-[100px]" />
//       <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#FF8C42]/5 rounded-full blur-[100px]" />

//       <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
//         {/* TEXT CONTENT - Appears first on mobile (order-1) */}
//         <div className="z-10 order-1 lg:order-1 text-center lg:text-left">
//           <div className="hero-content inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E9ECEF] shadow-sm mb-6">
//             <span className="flex h-2 w-2 rounded-full bg-[#28C76F] animate-ping" />
//             <span className="text-[10px] font-black uppercase tracking-widest text-[#6C757D]">Everything Unified. One Platform.</span>
//           </div>

//           <h1 className="hero-content text-4xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.1] mb-6">
//             Power Your Business with <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F6ED4] to-[#2CA7DF]">
//               Smarter Messaging
//             </span> & Marketing
//           </h1>

//           <p className="hero-content text-lg text-[#6C757D] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
//             From social media scheduling software to WhatsApp, SMS, and email campaigns, manage
//             everything in one powerful platform designed to grow your brand faster.
//           </p>

//           <div className="hero-content flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
//             <button className="w-full sm:w-auto px-8 py-4 bg-[#1E1E1E] text-white font-bold rounded-2xl hover:bg-[#1F6ED4] transition-all shadow-xl shadow-blue-100">
//               Get Started Free
//             </button>
//             <div className="flex items-center gap-2 text-[#28C76F] font-bold text-sm">
//               <CheckCircle2 size={18} />
//               No Credit Card Required
//             </div>
//           </div>
//         </div>

//         {/* VISUAL ENGINE - Appears second on mobile (order-2) */}
//         <div className="relative order-2 lg:order-2 flex items-center justify-center w-full max-w-[500px] mx-auto aspect-square">
          
//           {/* SVG Connection Lines - Locked to 500x500 */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" fill="none" preserveAspectRatio="xMidYMid meet">
//             {integrations.map((node) => (
//               <React.Fragment key={node.id}>
//                 <path 
//                   d={`M 250 250 Q ${node.cp} ${node.x} ${node.y}`} 
//                   stroke={node.color} 
//                   strokeWidth="1.5" 
//                   strokeLinecap="round" 
//                   strokeOpacity="0.15"
//                 />
//                 <path 
//                   className={`pulse-${node.id}`}
//                   d={`M 250 250 Q ${node.cp} ${node.x} ${node.y}`} 
//                   stroke={node.color} 
//                   strokeWidth="2.5" 
//                   strokeLinecap="round" 
//                 />
//               </React.Fragment>
//             ))}
//           </svg>

//           {/* Central Hub */}
//           <div className="central-hub relative z-20 w-32 h-32 lg:w-44 lg:h-44 bg-white rounded-[2.5rem] shadow-2xl border border-[#F5F7FA] flex items-center justify-center">
//             <div className="hub-glow absolute inset-0 bg-[#1F6ED4]/20 rounded-[2.5rem] scale-110" />
//             <div className="relative z-10 text-center">
//               <Zap size={40} className="text-[#1F6ED4] lg:size-12 mx-auto fill-[#1F6ED4]/10" />
//               <div className="mt-2 px-3 py-1 bg-[#F5F7FA] rounded-full text-[8px] font-black text-[#1F6ED4] uppercase tracking-tighter">
//                  our integrated platform
//               </div>
//             </div>
//             <div className="absolute -top-4 -right-4 w-10 h-10 lg:w-12 lg:h-12 bg-[#28C76F] rounded-xl shadow-lg flex items-center justify-center text-white animate-bounce">
//               <TrendingUp size={20} className="lg:size-6" />
//             </div>
//           </div>

//           {/* Social Nodes */}
//           {integrations.map((item) => (
//             <div 
//               key={item.id}
//               className="social-node absolute flex flex-col items-center gap-1 group"
//               style={{ 
//                 top: item.pos.top, 
//                 left: item.pos.left,
//                 transform: 'translate(-50%, -50%)' // Keeps icons centered on line ends
//               }}
//             >
//               <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-2xl shadow-lg border border-[#F5F7FA] flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-2xl cursor-pointer">
//                 <item.Icon size={20} className="lg:size-6" color={item.color} strokeWidth={2.5} />
//               </div>
//               <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E1E1E] text-white text-[8px] px-2 py-0.5 rounded uppercase font-black absolute -bottom-6 whitespace-nowrap">
//                 {item.label}
//               </div>
//             </div>
//           ))}

//           {/* Decor */}
//           <div className="absolute top-[20%] left-[30%] text-[#E9ECEF] rotate-45"><Plus size={20} /></div>
//           <div className="absolute bottom-[20%] right-[30%] text-[#E9ECEF] -rotate-12"><Plus size={16} /></div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default IntegrationHero;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CheckCircle2, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Background assets: Fully visible, concentrated at bottom and mid sections
  const bgAssets = [
    /* --- TOP SECTION (Sparse) --- */
    { src: '/logos/facebook.png', x: '8%', y: '14%', size: 'w-8' , blur : true},
    { src: '/logos/tikTok.png', x: '25%', y: '12%', size: 'w-8'  , blur : true },
    { src: '/logos/mail.png', x: '40%', y: '14%', size: 'w-8' , blur : true},

    /* --- MID SECTION --- */
    { src: '/logos/Linkdin.png', x: '40%', y: '38%', size: 'w-8' , blur : true},
    // { src: '/logos/showCase.png', x: '12%', y: '42%', size: 'w-12 lg:w-14' , blur : true },
    { src: '/logos/Xlogo.png', x: '50%', y: '48%', size: 'w-8'  , blur : true},
    
    /* --- BOTTOM SECTION (Concentrated) --- */
    { src: '/logos/Instagram.png', x: '35%', y: '90%', size: 'w-10'  , blur : true  , res:true},
    { src: '/logos/youTube.png', x: '22%', y: '82%', size: 'w-10' , blur : true, res:true },
    { src: '/logos/whatSaap.png', x: '42%', y: '80%', size: 'w-10' , blur : true, res:true },
    { src: '/logos/showcase1.png', x: '65%', y: '88%', size: 'w-10 lg:w-12' , blur : true, res:true },
    { src: '/logos/showCase2.png', x: '82%', y: '85%', size: 'w-12 lg:w-12' , blur : true , res:true},
    { src: '/logos/allInOne.png', x: '52%', y: '90%', size: 'w-12'  , blur : true, res:true },
  ];

  const integrations = [
    { id: 'fb', src: '/logos/facebook.png', color: "#1877F2", x: 250, y: 25, pos: { top: "5%", left: "50%" }, cp: "250,100" },
    { id: 'ig', src: '/logos/Instagram.png', color: "#E4405F", x: 425, y: 100, pos: { top: "20%", left: "85%" }, cp: "400,150" },
    { id: 'tw', src: '/logos/Xlogo.png', color: "#000000", x: 475, y: 300, pos: { top: "60%", left: "95%" }, cp: "450,250" },
    { id: 'li', src: '/logos/Linkdin.png', color: "#0A66C2", x: 350, y: 425, pos: { top: "85%", left: "70%" }, cp: "350,400" },
    { id: 'wa', src: '/logos/whatSaap.png', color: "#25D366", x: 150, y: 425, pos: { top: "85%", left: "30%" }, cp: "150,400" },
    { id: 'tk', src: '/logos/tikTok.png', color: "#000000", x: 25, y: 300, pos: { top: "60%", left: "5%" }, cp: "50,300" },
    { id: 'yt', src: '/logos/youTube.png', color: "#FF0000", x: 75, y: 100, pos: { top: "20%", left: "15%" }, cp: "100,150" },
    { id: 'all', src: '/logos/allInOne.png', color: "#1F6ED4", x: 400, y: 0, pos: { top: "0%", left: "80%" }, cp: "400,50" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(".hero-content", { y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: "power4.out" });

      // Pulse Animation logic
      integrations.forEach((node) => {
        const pulsePath = document.querySelector(`.pulse-${node.id}`) as SVGPathElement;
        const length = pulsePath?.getTotalLength() || 0;
        gsap.set(pulsePath, { strokeDasharray: length, strokeDashoffset: length, opacity: 0 });
        
        gsap.to(pulsePath, {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2.2,
          repeat: -1,
          repeatDelay: Math.random() * 1.5,
          ease: "power1.inOut",
          onRepeat: () => gsap.set(pulsePath, { opacity: 0 })
        });
      });

      // Mouse Parallax for Background Assets
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / 45;
        const moveY = (clientY - window.innerHeight / 2) / 45;

        gsap.to(".bg-parallax-asset", {
          x: moveX,
          y: moveY,
          duration: 2.5,
          ease: "power2.out",
          stagger: 0.01
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-[#FFFEFA] overflow-hidden px-6 pt-32 lg:pt-20">
      
      {/* EXTREMELY SUBTLE GRID OVERLAY */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(#1E1E1E 1px, transparent 1px), linear-gradient(90deg, #1E1E1E 1px, transparent 1px)`, backgroundSize: '60px 60px' }} 
      />

      {/* FULLY VISIBLE BACKGROUND ASSETS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bgAssets.map((asset, i) => (
          <div 
            key={i} 
            className={`bg-parallax-asset absolute transition-opacity  duration-1000 ${asset.blur ? "blur-[2px]" : "" } ${asset.res ? "hidden  md:block" : "" }`}
            style={{ top: asset.y, left: asset.x }}
          >
            <img src={asset.src} alt="logo" className={`${asset.size} object-contain`} />
          </div>
        ))}
      </div>

      {/* GRADIENT BLOBS */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#1F6ED4]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#FF8C42]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        
        {/* LEFT CONTENT AREA */}
        <div className="order-1 text-center lg:text-left relative">
          <div className="hero-content inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E9ECEF] shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#28C76F] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#6C757D]">Unified Growth Platform</span>
          </div>

          <h1 className="hero-content text-4xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.1] mb-6">
            Power Your Business with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F6ED4] to-[#2CA7DF]">
              Smarter Messaging
            </span> & Marketing
          </h1>

          <p className="hero-content text-lg text-[#6C757D] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            From social media scheduling software to WhatsApp, SMS, and email campaigns, manage
            everything in one powerful platform designed to grow your brand faster.
          </p>

          <div className="hero-content flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#1E1E1E] text-white font-bold rounded-2xl hover:bg-[#1F6ED4] transition-all shadow-xl shadow-blue-100">
              Get Started Free
            </button>
            <div className="flex items-center gap-2 text-[#28C76F] font-bold text-sm">
              <CheckCircle2 size={18} />
              No Credit Card Required
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL HUB */}
        <div className="relative order-2 flex items-center justify-center w-full max-w-[500px] mx-auto aspect-square">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" fill="none">
            {integrations.map((node) => (
              <React.Fragment key={node.id}>
                <path d={`M 250 250 Q ${node.cp} ${node.x} ${node.y}`} stroke={node.color} strokeWidth="1.5" strokeOpacity="0.1" fill="none" />
                <path className={`pulse-${node.id}`} d={`M 250 250 Q ${node.cp} ${node.x} ${node.y}`} stroke={node.color} strokeWidth="2.5" fill="none" />
              </React.Fragment>
            ))}
          </svg>

          {/* Central Hub centerpiece */}
          <div className="central-hub relative z-20 w-32 h-32 lg:w-44 lg:h-44 bg-white rounded-[2.5rem] shadow-2xl border border-[#F5F7FA] flex items-center justify-center">
            <div className="hub-glow absolute inset-0 bg-[#1F6ED4]/15 rounded-[2.5rem] scale-110" />
            <div className="relative z-10 text-center px-4">
              <img src="/logos/showcase1.png" className="w-16 h-16 lg:w-20 lg:h-20 object-contain mx-auto" alt="hub" />
              <div className="mt-2 px-3 py-1 bg-[#F5F7FA] rounded-full text-[8px] font-black text-[#1E1E1E] uppercase tracking-tighter">Growth Hub</div>
            </div>
            <div className="absolute -top-4 -right-4 w-10 h-10 lg:w-12 lg:h-12 bg-[#28C76F] rounded-xl shadow-lg flex items-center justify-center text-white animate-bounce">
              <TrendingUp size={20} className="lg:size-6" />
            </div>
          </div>

          {/* Orbiting Integration Nodes */}
          {integrations.map((item) => (
            <div 
              key={item.id}
              className="social-node absolute flex flex-col items-center gap-1 group"
              style={{ top: item.pos.top, left: item.pos.left, transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-2xl shadow-lg border border-[#F5F7FA] flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-2xl cursor-pointer p-2">
                <img src={item.src} alt={item.id} className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
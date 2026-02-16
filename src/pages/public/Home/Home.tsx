import React from "react";
import Hero from "@/components/Landing/Hero";
import Features from "@/components/Landing/Features";
import TargetAudience from "@/components/Landing/TargetAudience";
import FAQ from "@/components/Landing/FAQ";
import WhyUs from "@/components/Landing/WhyUs";
import Testimonials from "@/components/Landing/Testimonials";
import CreateSection from "@/components/Landing/CreateSection";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10">
        <Hero />
        <CreateSection/>
        <Features />
        <WhyUs/>
        <Testimonials/>
        <TargetAudience />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
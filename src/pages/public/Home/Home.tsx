import React from "react";
import Hero from "@/components/Landing/Hero";
import TargetAudience from "@/components/Landing/Phase8/TargetAudience";
import FAQ from "@/components/Landing/Phase12/FAQ";
import Testimonials from "@/components/Landing/Phase9/Testimonials";
import CreateSection from "@/components/Landing/Phase2/CreateSection";
import MultiFeatures from "@/components/Landing/Phase3/MultiFeatures";
import FeaturesMaster from "@/components/Landing/Phase6/FeaturesMaster";
import IndustryPartners from "@/components/Landing/Phase10/IndustryPartners";
import ClientList from "@/components/Landing/Phase11/ClientList";
import { CollaborateHero } from "@/components/Landing/Phase4/CollaborateHero";
import { CoreFeatures } from "@/components/Landing/Phase4/CoreFeatures";
import { UseCaseTabs } from "@/components/Landing/Phase4/UseCaseTabs";
import { USE_CASES ,CORE_FEATURES } from "@/components/Landing/Phase4/CollabContent";
import { GrowthResources } from "@/components/Landing/Phase5/GrowthResources";
import PlatformInfo from "@/components/Landing/Phase7/PlatformInfo";

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

        {/* Phase 2  */}
        <CreateSection/>

        {/* Phase 3  */}
        <MultiFeatures />

        {/* Phase 4  */}
        <CollaborateHero />
        <CoreFeatures features={CORE_FEATURES} />
        <UseCaseTabs useCases={USE_CASES} />

         {/* Phase 5  */}
        <GrowthResources />

        {/*phase 6 */}
        <FeaturesMaster/>

         {/*phase 7*/}
         <PlatformInfo/>

         {/*phase 8*/}
         <TargetAudience />

         {/*phase 9*/}
        <Testimonials/>
      
        {/*phase 10*/}
        <IndustryPartners/>

         {/*phase 11*/}
        <ClientList/>

        {/*phase 12*/}
        <FAQ />

      </div>
    </div>
  );
};

export default Home;
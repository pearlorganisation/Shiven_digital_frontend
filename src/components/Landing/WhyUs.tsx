import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  BrainCircuit, 
  Clock, 
  BarChart4, 
  Inbox, 
  Users, 
  Bot,
  ArrowRight
} from "lucide-react";

const WhyUs: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
          >
            Why Shiven Digital?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Your Complete Growth Partner
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            An intelligent ecosystem where creativity, automation, and intelligence come together to help you attract and retain your audience.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {/* 1. All-in-One Solution (Large Card) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 row-span-1 p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-md group hover:border-orange-500/30 transition-all duration-500"
          >
            <div className="h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                <Zap size={24} fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold mb-3">All-in-One Marketing</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Drive WhatsApp, SMS, Email, and Social Media campaigns—all from one powerful, unified dashboard. No more tool fatigue.
              </p>
              <div className="mt-auto flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-gray-300 border border-white/10">WhatsApp</span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-gray-300 border border-white/10">SMS</span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-gray-300 border border-white/10">Email</span>
              </div>
            </div>
          </motion.div>

          {/* 2. AI-Driven Creativity */}
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
          >
            <BrainCircuit size={32} className="text-purple-400 mb-6 group-hover:rotate-12 transition-transform" />
            <h3 className="text-lg font-bold mb-2">AI Creativity</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Generate captions and posts instantly using AI-powered writing tools.
            </p>
          </motion.div>

          {/* 3. Smarter Scheduling */}
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
          >
            <Clock size={32} className="text-blue-400 mb-6 group-hover:animate-pulse" />
            <h3 className="text-lg font-bold mb-2">Smarter Scheduling</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Schedule once, publish everywhere. Automation for major networks.
            </p>
          </motion.div>

          {/* 4. Analytics (Wide Card) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 rounded-2xl bg-green-500/10 text-green-500">
                <BarChart4 size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">In-Depth Analytics</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Leverage audience insights and segmentation tool to monitor engagement and optimize campaigns in real time with data-backed decisions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. Unified Communication */}
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
          >
            <Inbox size={32} className="text-orange-400 mb-6" />
            <h3 className="text-lg font-bold mb-2">Unified Inbox</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Control DMs, mentions, and comments in one place.
            </p>
          </motion.div>

          {/* 6. Advanced Automation */}
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
          >
            <Bot size={32} className="text-cyan-400 mb-6" />
            <h3 className="text-lg font-bold mb-2">Automation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Auto-posting and smart replies for small teams & agencies.
            </p>
          </motion.div>

          {/* 7. Team Collaboration (Bottom CTA Style) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 lg:col-span-4 p-8 rounded-3xl border border-orange-500/20 bg-orange-500/5 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-500/20 text-orange-500">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Powerful Team Collaboration</h3>
                <p className="text-gray-400 text-sm">Role-based permissions, approval systems, and task sharing.</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-orange-500 font-bold hover:gap-4 transition-all group">
              Explore All Features <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
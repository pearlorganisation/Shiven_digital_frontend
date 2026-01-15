import { motion } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative inline-flex items-center justify-center mb-10 group cursor-default"
        >
          {/* --- Heartbeat Background Ripples --- */}
          {/* Ye do circles heartbeat ki tarah bahar ki taraf vibrate karenge */}
          <span className="absolute inset-0 rounded-full bg-orange-500/40 animate-[ping_1.5s_linear_infinite]" />
          <span className="absolute inset-0 rounded-full bg-orange-500/20 animate-[ping_2s_linear_infinite]" />

          {/* --- Main Badge Container --- */}
          <motion.div
            animate={{
              // Heartbeat Scaling
              scale: [1, 1.05, 1],
              // Glowing Border Effect
              boxShadow: [
                "0 0 0px rgba(249, 115, 22, 0)",
                "0 0 20px rgba(249, 115, 22, 0.4)",
                "0 0 0px rgba(249, 115, 22, 0)",
              ],
            }}
            transition={{
              duration: 1.5, // Heartbeat speed
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex items-center gap-3 px-6 py-2.5 rounded-full border border-orange-500/40 bg-[#0a0a0a] backdrop-blur-xl z-10"
          >
            {/* Animated Sparkles Icon */}
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
                filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles
                size={18}
                className="text-orange-500 fill-orange-500/20"
              />
            </motion.div>

            {/* Text with Shimmer/Gradient Effect */}
            <span className="text-sm font-bold tracking-wide flex items-center gap-1">
              <span className="bg-gradient-to-r from-orange-400 via-orange-200 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                New: AI-Powered Campaigns
              </span>
              <span className="text-orange-500/80 ml-1">is here</span>
            </span>

            {/* Subtle Right Arrow with Motion */}
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight size={14} className="text-orange-500" />
            </motion.span>
          </motion.div>

          {/* Glassy Shadow behind */}
          <div className="absolute inset-0 bg-orange-600/10 blur-xl rounded-full -z-10" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black tracking-tight mb-8 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent"
        >
          Power Your Business with <br />
          <span className="text-orange-500">Smarter Messaging</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          From social media scheduling to WhatsApp, SMS, and email campaigns —
          manage everything in one powerful platform designed to grow your brand
          faster.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-full font-bold text-lg shadow-lg shadow-orange-600/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            Start Growing Now <ChevronRight size={20} />
          </button>
          <p className="text-gray-500 text-sm italic">
            Free forever. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

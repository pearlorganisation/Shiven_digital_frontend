import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Ritika",
    role: "Small Business Owner",
    content: "This platform saves us hours every week! Scheduling, posting, and replying all in one place is a game-changer. My team finally has a clear workflow.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
    rating: 5,
  },
  {
    name: "Aditya",
    role: "Digital Marketer",
    content: "The analytics dashboard helped us identify what really drives engagement. We’ve doubled our reach in 3 months. Best investment for our digital strategy!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
    rating: 5,
  },
  {
    name: "Meera",
    role: "Agency Founder",
    content: "Finally, a tool that combines publishing, engagement, and team collaboration without the clutter. Managing multiple client accounts has never been easier.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
    rating: 5,
  },
  {
    name: "Rahul",
    role: "Tech Startup Founder",
    content: "The AI-powered writing tools are insane. We can generate a week's worth of content in minutes. Shiven Digital is our secret weapon for scaling.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    rating: 5,
  },
  {
    name: "Sanya",
    role: "E-commerce Head",
    content: "Using the ecommerce audience segmentation tool, we personalized our offers and saw a 40% jump in repeat sales. Absolutely brilliant!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanya",
    rating: 5,
  },
  {
    name: "Vikram",
    role: "Content Creator",
    content: "The best tool for repurposing content across platforms. I schedule once and my content hits Instagram, X, and LinkedIn perfectly.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-500 text-xs font-bold tracking-widest uppercase mb-4"
          >
            Wall of Love
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Trusted by Businesses Big and Small
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Thousands of brands rely on Shiven Digital to manage, analyze, and expand their digital reach.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex flex-col hover:border-orange-500/20 transition-all group"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, index) => (
                  <Star key={index} size={14} className="text-orange-500 fill-orange-500" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 text-white/5 w-10 h-10 -z-10" />
                <p className="text-gray-300 leading-relaxed italic">"{t.content}"</p>
              </div>

              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full bg-orange-500/10 border border-white/10"
                />
                <div>
                  <h4 className="font-bold text-white group-hover:text-orange-500 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos / Trust Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/5 text-center"
        >
          <p className="text-xs text-gray-600 font-bold tracking-[0.3em] uppercase mb-10">
            Powering Growth Across Industries
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
            <span className="text-xl font-black italic">E-COMMERCE</span>
            <span className="text-xl font-black italic">TECH STARTUPS</span>
            <span className="text-xl font-black italic">RETAIL</span>
            <span className="text-xl font-black italic">AGENCIES</span>
            <span className="text-xl font-black italic">CREATORS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
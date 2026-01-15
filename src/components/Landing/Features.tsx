import { motion } from "framer-motion";
import { Globe, PenTool, BarChart3, Users2, MessageSquare } from "lucide-react";

const featureData = [
  {
    title: "PUBLISH",
    icon: <Globe className="text-blue-400" />,
    desc: "Complete publishing for FB, Insta, X, LinkedIn, YouTube & more.",
    points: ["Manual & Automated posting", "Hashtag generator", "Media auto-resizing"]
  },
  {
    title: "CREATE",
    icon: <PenTool className="text-orange-400" />,
    desc: "AI-powered content writer and templates for scroll-stopping updates.",
    points: ["AI Caption Generator", "Content Ideas Generator", "Ready-to-use templates"]
  },
  {
    title: "ANALYTICS",
    icon: <BarChart3 className="text-green-400" />,
    desc: "Smarter insights. Track engagement and ROI across all channels.",
    points: ["Engagement rate tracker", "Competitor analysis", "PDF Branded reports"]
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureData.map((feat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-orange-500/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xs font-bold tracking-widest text-orange-500 mb-2">{feat.title}</h3>
              <p className="text-gray-300 mb-6 font-medium">{feat.desc}</p>
              <ul className="space-y-3">
                {feat.points.map((p, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
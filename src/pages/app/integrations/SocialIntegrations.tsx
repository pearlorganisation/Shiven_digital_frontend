import React from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Linkedin, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

const SocialIntegrations = () => {
  const navigate = useNavigate();

  const platforms = [
    { name: "Facebook", icon: <Facebook />, color: "text-[#1877F2]", path: "facebook", status: "connected" },
    { name: "Instagram", icon: <Instagram />, color: "text-[#E4405F]", path: "instagram", status: "disconnected" },
    { name: "YouTube", icon: <Youtube />, color: "text-[#FF0000]", path: "youtube", status: "disconnected" },
    { name: "Twitter / X", icon: <Twitter />, color: "text-[#1DA1F2]", path: "twitter", status: "disconnected" },
    { name: "LinkedIn", icon: <Linkedin />, color: "text-[#0A66C2]", path: "linkedin", status: "disconnected" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end border-b border-gray-100 pb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Integrations</h1>
          <p className="text-gray-500">Manage your connected social media profiles in one place.</p>
        </div>
        <div className="text-right">
          <span className="text-sm font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
            {platforms.filter(p => p.status === 'connected').length} Connected
          </span>
        </div>
      </div>

      {/* PLATFORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-gray-300"
          >
            {/* Status Badge */}
            <div className="absolute top-6 right-6">
              {platform.status === 'connected' ? (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <ShieldCheck size={14} /> Active
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                  <AlertCircle size={14} /> Ready
                </span>
              )}
            </div>

            {/* Icon & Name */}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-50 ${platform.color} mb-6 transition-transform group-hover:scale-105`}>
              <div className="text-2xl">{platform.icon}</div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-1">{platform.name}</h2>
            <p className="text-sm text-gray-500 mb-6">Manage your posts and engagement analytics.</p>

            {/* Action Button */}
            <button
              onClick={() => navigate(platform.path)}
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all hover:gap-3"
            >
              {platform.status === 'connected' ? "Manage Settings" : "Connect Account"}
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialIntegrations;
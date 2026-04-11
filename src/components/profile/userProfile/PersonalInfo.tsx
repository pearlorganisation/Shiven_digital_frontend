
import { Camera, Save, MapPin, Linkedin, Github, Twitter, Globe, Phone, Mail, User, Link as LinkIcon } from "lucide-react";

const PersonalInfo = () => {
  return (
    <div className="space-y-10">
      {/* 1. Profile Picture & Basic Info */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative group">
          <div className="w-32 h-32 rounded-2xl bg-indigo-50 flex items-center justify-center border-2 border-dashed border-indigo-200 overflow-hidden">
            <User className="w-16 h-16 text-indigo-300" />
          </div>
          <button className="absolute bottom-2 right-2 p-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-slate-900">Profile Picture</h2>
          <p className="text-slate-500 text-sm">JPG, PNG or WEBP (Max 2MB)</p>
          <button className="text-indigo-600 font-medium text-sm hover:underline">Change Photo</button>
        </div>
      </div>

      {/* 2. Contact & Identity Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <User className="w-5 h-5 text-indigo-600" /> Identity & Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              <input className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              <input className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              <input className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="City, Country" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Social & Professional Presence */}
      <div className="space-y-6 pt-6 border-t border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Globe className="w-5 h-5 text-indigo-600" /> Social Presence
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Linkedin className="w-4 h-4 text-blue-600" /> LinkedIn URL</label>
            <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="linkedin.com/in/username" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Github className="w-4 h-4 text-slate-900" /> GitHub URL</label>
            <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="github.com/username" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Twitter className="w-4 h-4 text-sky-500" /> Twitter / X URL</label>
            <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="twitter.com/username" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><LinkIcon className="w-4 h-4 text-slate-600" /> Portfolio Website</label>
            <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://yourportfolio.com" />
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 border-t border-slate-100 flex justify-end">
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition-all shadow-md shadow-indigo-100 font-semibold">
          <Save className="w-4 h-4" /> Save All Changes
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
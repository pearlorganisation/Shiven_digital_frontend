import  { useState } from "react";
import { Briefcase, Building2, Globe, Save, Code2 } from "lucide-react";

const ProfessionalInfo = () => {
  const [techStack, setTechStack] = useState("");

  return (
    <div className="space-y-10">
      {/* 1. Current Role & Company */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-indigo-600" /> Current Position
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Current Company Name</label>
            <div className="relative">
              <Building2 className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              <input className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Acme Corp" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Company Website</label>
            <div className="relative">
              <Globe className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              <input className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://acme.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Industry</label>
            <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. Fintech, SaaS" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Your Role</label>
            <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Senior Product Designer" />
          </div>
        </div>
      </div>

      {/* 2. Experience & Skills */}
      <div className="space-y-6 pt-6 border-t border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-indigo-600" /> Expertise & Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Total Years of Experience</label>
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
              <option>0-1 Years</option>
              <option>2-5 Years</option>
              <option>5-10 Years</option>
              <option>10+ Years</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Primary Skills</label>
            <input 
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
              placeholder="e.g. React, Python, SQL (comma separated)" 
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Professional Summary</label>
          <textarea 
            rows={4} 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
            placeholder="Briefly describe your core competencies and professional achievements..."
          />
        </div>
      </div>

      {/* 3. Action Area */}
      <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
        <p className="text-sm text-slate-500">Ensure your professional details are up-to-date for recruiters.</p>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition-all shadow-md shadow-indigo-100 font-semibold">
          <Save className="w-4 h-4" /> Save Profile
        </button>
      </div>
    </div>
  );
};

export default ProfessionalInfo;
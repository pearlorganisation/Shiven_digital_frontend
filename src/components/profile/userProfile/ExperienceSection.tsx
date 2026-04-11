import  { useState } from "react";
import {  MapPin, Trash2, Plus, Save } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
}

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: 1, company: "", role: "", location: "", startDate: "", endDate: "", isCurrent: false, description: "" }
  ]);

  const addExperience = () => {
    setExperiences([...experiences, { id: Date.now(), company: "", role: "", location: "", startDate: "", endDate: "", isCurrent: false, description: "" }]);
  };

  const removeExperience = (id: number) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-900">Work Experience</h2>
        
      </div>

      {experiences.map((exp) => (
        <div key={exp.id} className="relative p-6 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
          <button 
            onClick={() => removeExperience(exp.id)}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 transition"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Company Name</label>
              <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="e.g. Google" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Job Title</label>
              <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="e.g. Senior Developer" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                <input className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="City, Country" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Start Date</label>
                <input type="month" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">End Date</label>
                <input type="month" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            <div className="md:col-span-2 flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
              <label className="text-sm text-slate-600">I currently work here</label>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-slate-700">Description / Key Achievements</label>
              <textarea 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                rows={4} 
                placeholder="List your key duties and accomplishments..."
              />
            </div>
          </div>
        </div>
      ))}

      <button onClick={addExperience} className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700">
          <Plus className="w-4 h-4" /> Add Position
        </button>

      <div className="pt-6 border-t border-slate-100 flex justify-end">
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition-all shadow-md shadow-indigo-100 font-semibold">
          <Save className="w-4 h-4" /> Save All Experience
        </button>
      </div>
    </div>
  );
};

export default ExperienceSection;
"use client";
import React, { useState } from 'react';
import { 
  Calendar, CheckCircle2, Plus, Image as ImageIcon, 
  FileText, Settings, Facebook, Instagram, Youtube, 
  Twitter, MapPin, X
} from 'lucide-react';

const SOCIAL_PLATFORMS = [
  { id: 'fb', name: 'Facebook', icon: <Facebook size={16} /> },
  { id: 'ig', name: 'Instagram', icon: <Instagram size={16} /> },
  { id: 'yt', name: 'YouTube', icon: <Youtube size={16} /> },
  { id: 'tw', name: 'Twitter', icon: <Twitter size={16} /> },
  { id: 'gmb', name: 'GMB', icon: <MapPin size={16} /> },
];

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const togglePlatform = (id: string) => {
    setSelectedPlatforms(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-start">
        
        {/* Main Content (Scrollable) */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Content Planner</h1>
              <p className="text-slate-500">Manage your cross-platform strategy.</p>
            </div>
            <button onClick={() => setShowModal(true)} className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
              <Plus size={20} /> Schedule Post
            </button>
          </div>

          <section>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Upcoming Schedule</h2>
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              {[1, 2, 3].map(i => (
                <div key={i} className="p-6 border-b last:border-0 flex items-center justify-between hover:bg-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-50 p-4 rounded-2xl"><FileText className="text-indigo-600" size={24} /></div>
                    <div>
                      <h3 className="font-bold text-slate-900">Campaign Title #{i}</h3>
                      <p className="text-sm text-slate-500">Instagram • Oct 25, 2025 at 10:00 AM</p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-100">SCHEDULED</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar (Non-Scrollable / Sticky) */}
        <div className="col-span-12 lg:col-span-4 sticky top-10 space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Connected Accounts</h3>
            <div className="space-y-4">
              {SOCIAL_PLATFORMS.map(acc => (
                <div key={acc.name} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl cursor-pointer group">
                  <div className="flex items-center gap-3 text-slate-600 group-hover:text-indigo-600">{acc.icon} {acc.name}</div>
                  <Settings size={14} className="text-slate-300 group-hover:text-slate-500" />
                </div>
              ))}
            </div>
          </div>

          <section>
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-500" /> Recent History
            </h3>
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-2">
              {[1, 2].map(i => (
                <div key={i} className="p-4 flex justify-between items-center hover:bg-slate-50 rounded-2xl">
                  <span className="text-sm font-medium text-slate-700">Published Post #{i}</span>
                  <span className="text-xs text-slate-400">Oct 20</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Enhanced Modal */}
      {/* Enhanced Modal */}
{showModal && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200 overflow-y-auto max-h-[90vh]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">New Post</h2>
        <button onClick={() => setShowModal(false)}><X className="text-slate-400"/></button>
      </div>
      
      <div className="space-y-5">
        {/* NEW: Load Template Dropdown */}
        <div className="relative">
          <p className="text-xs font-bold text-slate-400 uppercase mb-2">Load Template</p>
          <select className="w-full p-3 border rounded-2xl bg-indigo-50 text-indigo-700 font-bold outline-none cursor-pointer">
            <option value="">Select a template...</option>
            <option value="1">Weekly Tech Tip</option>
            <option value="2">Client Success Story</option>
          </select>
        </div>

        <input type="text" placeholder="Campaign Title" className="w-full p-4 border rounded-2xl bg-slate-50 focus:ring-2 ring-indigo-500 outline-none" />
        <textarea placeholder="Write your post content here..." className="w-full p-4 border rounded-2xl h-32 bg-slate-50 outline-none" />
        
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase mb-3">Publish to:</p>
          <div className="grid grid-cols-3 gap-2">
            {SOCIAL_PLATFORMS.map(p => (
              <button 
                key={p.id}
                onClick={() => togglePlatform(p.id)}
                className={`p-2 rounded-xl border text-xs font-bold flex items-center justify-center gap-1 transition ${selectedPlatforms.includes(p.id) ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'hover:bg-slate-50'}`}
              >
                {p.icon} {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input type="date" className="w-full p-3 border rounded-2xl" />
          <input type="time" className="w-full p-3 border rounded-2xl" />
        </div>

        {/* NEW: Save as Template Checkbox */}
        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
          <input type="checkbox" className="w-5 h-5 rounded" id="saveTemplate" />
          <label htmlFor="saveTemplate" className="text-sm font-medium text-slate-600 cursor-pointer">
            Save this post as a template
          </label>
        </div>
      </div>
      
      <button className="w-full mt-6 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition">
        Schedule Post
      </button>
    </div>
  </div>
)}
    </div>
  );
}
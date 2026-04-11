"use client";
import React, { useState } from 'react';
import { 
  Calendar, CheckCircle2, Plus, 
  FileText, Settings, Facebook, Instagram, Youtube, 
  Twitter, MapPin
} from 'lucide-react';
import PostModal from '@/components/UserSocialMedia/SchedulePostModal';

interface SocialPlatform {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface HistoryItem {
  id: number;
  title: string;
  platform: string;
  time: string;
}

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { id: 'fb', name: 'Facebook', icon: <Facebook size={16} /> },
  { id: 'ig', name: 'Instagram', icon: <Instagram size={16} /> },
  { id: 'yt', name: 'YouTube', icon: <Youtube size={16} /> },
  { id: 'tw', name: 'Twitter', icon: <Twitter size={16} /> },
  { id: 'gmb', name: 'GMB', icon: <MapPin size={16} /> },
];

export default function Dashboard() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const historyItems: HistoryItem[] = [
    { id: 1, title: "Summer Promo", platform: "Instagram", time: "Oct 20, 2025 • 02:30 PM" },
    { id: 2, title: "Product Launch", platform: "Facebook", time: "Oct 18, 2025 • 11:15 AM" },
    { id: 3, title: "Tutorial Video", platform: "YouTube", time: "Oct 15, 2025 • 09:00 AM" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-start">
        
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="flex justify-between items-center text-left">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Content Planner</h1>
              <p className="text-slate-500">Manage your cross-platform strategy.</p>
            </div>
            <button 
              onClick={() => setShowModal(true)} 
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
            >
              <Plus size={20} /> Schedule Post
            </button>
          </div>

          <section>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 text-left">Upcoming Schedule</h2>
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-left">
              {[1, 2, 3].map((i) => (
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

        <div className="col-span-12 lg:col-span-4 sticky top-10 space-y-8 text-left">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Connected Accounts</h3>
            <div className="space-y-4">
              {SOCIAL_PLATFORMS.map(acc => (
                <div key={acc.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl cursor-pointer group">
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
              {historyItems.map((item) => (
                <div key={item.id} className="p-4 flex flex-col hover:bg-slate-50 rounded-2xl transition-colors border-b last:border-0 border-slate-50">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-bold text-slate-700 truncate">{item.title}</span>
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {item.platform}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar size={12} />
                    <span>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <PostModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  );
}
"use client";
import React from 'react';
import { 
  BarChart3, Users, MousePointerClick, MessageCircle, 
  TrendingUp, Facebook, Instagram, Twitter, Youtube 
} from 'lucide-react';

export default function PostAnalytics() {
  const stats = [
    { label: "Total Reach", value: "48.2k", change: "+12.5%", icon: <Users size={20} /> },
    { label: "Engagement", value: "3.4k", change: "+8.2%", icon: <MessageCircle size={20} /> },
    { label: "Link Clicks", value: "892", change: "-2.1%", icon: <MousePointerClick size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Performance Analytics</h1>
        <p className="text-slate-500">Insights into your audience and content reach.</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600">{s.icon}</div>
              <span className={`text-xs font-bold ${s.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>{s.change}</span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium">{s.label}</h3>
            <p className="text-3xl font-bold text-slate-900">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Analytics Body */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Platform Breakdown (Bar Visualization) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="font-bold text-lg mb-6">Platform Distribution</h2>
          <div className="space-y-6">
            {[
              { name: 'Instagram', val: 75, color: 'bg-pink-500' },
              { name: 'Facebook', val: 55, color: 'bg-blue-600' },
              { name: 'Twitter', val: 40, color: 'bg-sky-400' },
              { name: 'YouTube', val: 30, color: 'bg-red-600' },
            ].map((p) => (
              <div key={p.name}>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>{p.name}</span>
                  <span>{p.val}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className={`${p.color} h-3 rounded-full`} style={{ width: `${p.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Top Performing Posts */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="font-bold text-lg mb-6">Top Posts</h2>
          <div className="space-y-6">
            {[
              { title: "New Product Launch", eng: "1.2k" },
              { title: "Team Culture Video", eng: "840" },
              { title: "Weekly Dev Update", eng: "520" },
            ].map((p, i) => (
              <div key={i} className="flex justify-between items-center group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="text-slate-300 font-mono font-bold">0{i + 1}</div>
                  <span className="font-medium text-slate-700 group-hover:text-indigo-600">{p.title}</span>
                </div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{p.eng}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
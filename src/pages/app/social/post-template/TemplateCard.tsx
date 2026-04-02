import React from 'react';
import { FileText, MoreVertical, Copy } from 'lucide-react';

export const TemplateCard = ({ title, desc, onUse }: { title: string, desc: string, onUse: () => void }) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600"><FileText size={24} /></div>
      <button className="text-slate-300 hover:text-slate-600"><MoreVertical size={20} /></button>
    </div>
    <h3 className="font-bold text-lg mb-1">{title}</h3>
    <p className="text-slate-500 text-sm mb-6 line-clamp-2">{desc}</p>
    <button onClick={onUse} className="w-full py-2.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2">
      <Copy size={16} /> Use Template
    </button>
  </div>
);
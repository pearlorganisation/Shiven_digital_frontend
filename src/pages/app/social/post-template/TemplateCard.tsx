import React from 'react';
import { FileText, MoreVertical, Copy } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  desc: string;
  onUse: () => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ title, desc, onUse }) => {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      {/* Icon & Action Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
          <FileText size={24} />
        </div>
        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-2 mb-6 text-left">
        <h3 className="font-bold text-xl text-slate-800 truncate">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 h-10">
          {desc}
        </p>
      </div>

      {/* Action Button */}
      <button 
        onClick={onUse} 
        className="w-full py-3.5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
      >
        <Copy size={18} />
        <span>Use Template</span>
      </button>
    </div>
  );
};
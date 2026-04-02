import React, { useState } from "react";
import { Plus, Trash2, ExternalLink, Github, Save, Code, Package, FileText, ToggleLeft, Layers } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string; // e.g., Campaign, Integration, Website, API
  status: string;   // e.g., Live, Staging, Development
  liveUrl: string;
  docsUrl: string;
  repoUrl: string;
  description: string;
  isPublic: boolean;
}

const PortfolioSection = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: "", category: "Campaign", status: "Live", liveUrl: "", docsUrl: "", repoUrl: "", description: "", isPublic: true }
  ]);

  const addProject = () => {
    setProjects([...projects, { id: Date.now(), title: "", category: "Campaign", status: "Live", liveUrl: "", docsUrl: "", repoUrl: "", description: "", isPublic: true }]);
  };

  const removeProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Campaigns & Integrations</h2>
          <p className="text-slate-500 text-sm">Manage your live marketing assets and platform integrations.</p>
        </div>
        <button onClick={addProject} className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl font-semibold hover:bg-indigo-100 transition">
          <Plus className="w-4 h-4" /> Add Asset
        </button>
      </div>

      {projects.map((project) => (
        <div key={project.id} className="relative p-6 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <button onClick={() => removeProject(project.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition">
            <Trash2 className="w-5 h-5" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title & Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Asset Title</label>
              <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="e.g. Q4 WhatsApp Blast" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Layers className="w-4 h-4" /> Category</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl">
                <option>Campaign</option>
                <option>Integration</option>
                <option>Website Widget</option>
                <option>API Hook</option>
                <option>Media Folder</option>
              </select>
            </div>
            
            {/* URLs */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Deployment URL</label>
              <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="https://app.yourdomain.com/..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><FileText className="w-4 h-4" /> Documentation URL</label>
              <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="https://docs.example.com/..." />
            </div>

            {/* Meta Info */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Code className="w-4 h-4" /> Repository / Source</label>
              <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="https://github.com/..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Status</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl">
                <option>Live</option>
                <option>Staging</option>
                <option>Archived</option>
                <option>Development</option>
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-slate-700">Detailed Scope & Config</label>
              <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Describe the workflow, target audience, or API triggers..." />
            </div>
          </div>
        </div>
      ))}
      <button onClick={addProject} className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl font-semibold hover:bg-indigo-100 transition">
          <Plus className="w-4 h-4" /> Add Asset
        </button>

      <div className="pt-6 border-t flex justify-end">
        <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition">
          <Save className="w-4 h-4" /> Save Assets
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;
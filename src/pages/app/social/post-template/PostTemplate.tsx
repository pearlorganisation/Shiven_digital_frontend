// // "use client";
// // import React, { useState } from 'react';
// // import { Plus, Search, FolderKanban } from 'lucide-react';
// // import { TemplateCard } from './TemplateCard';

// // export default function TemplatesPage() {
// //   const [templates] = useState([
// //     { title: "Weekly Newsletter", desc: "Standard template for Friday industry insights." },
// //     { title: "Client Success Story", desc: "Format for sharing customer wins and results." },
// //     { title: "Flash Sale Alert", desc: "Short, punchy copy for limited time offers." },
// //   ]);

// //   return (
// //     <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-10">
// //         <div>
// //           <h1 className="text-3xl font-bold text-slate-900">Post Templates</h1>
// //           <p className="text-slate-500">Save your content structures to save time.</p>
// //         </div>
// //         <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition">
// //           <Plus size={20} /> Create Template
// //         </button>
// //       </div>

// //       {/* Toolbar */}
// //       <div className="flex gap-4 mb-8">
// //         <div className="relative flex-1 max-w-md">
// //           <Search className="absolute left-3 top-3.5 text-slate-400" size={20} />
// //           <input type="text" placeholder="Search templates..." className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 outline-none focus:ring-2 ring-indigo-500" />
// //         </div>
// //       </div>

// //       {/* Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //         {templates.map((t, i) => (
// //           <TemplateCard key={i} title={t.title} desc={t.desc} onUse={() => alert(`Using ${t.title}`)} />
// //         ))}
        
// //         {/* Empty State / Add New Placeholder */}
// //         <div className="border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-6 text-slate-400 hover:border-indigo-500 hover:text-indigo-500 transition cursor-pointer">
// //           <FolderKanban size={40} className="mb-2" />
// //           <p className="font-bold">Add New Template</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
//     // }


//     "use client";
//     import React, { useState } from 'react';
//     import { Plus, Search, X, Save } from 'lucide-react';
//     import { TemplateCard } from './TemplateCard';

//     export default function TemplatesPage() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [editingTemplate, setEditingTemplate] = useState<{title: string, desc: string} | null>(null);

//     const openModal = (template = null) => {
//         setEditingTemplate(template);
//         setIsModalOpen(true);
//     };

//     return (
//         <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-10">
//             <div>
//             <h1 className="text-3xl font-bold text-slate-900">Post Templates</h1>
//             <p className="text-slate-500">Create and manage your reusable post structures.</p>
//             </div>
//             <button onClick={() => openModal()} className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition">
//             <Plus size={20} /> Create Template
//             </button>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//             { title: "Weekly Tech Tip", desc: "Share a quick dev tip every Friday." },
//             { title: "Client Testimonial", desc: "Professional format for client reviews." }
//             ].map((t, i) => (
//             <TemplateCard key={i} title={t.title} desc={t.desc} onUse={() => openModal(t)} />
//             ))}
//         </div>

//         {/* Shared Modal for Create & Edit/Use */}
//         {isModalOpen && (
//             <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//             <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
//                 <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold">{editingTemplate ? 'Use/Edit Template' : 'Create Template'}</h2>
//                 <button onClick={() => setIsModalOpen(false)}><X className="text-slate-400"/></button>
//                 </div>
                
//                 <div className="space-y-4">
//                 <input 
//                     defaultValue={editingTemplate?.title}
//                     type="text" 
//                     placeholder="Template Name (e.g. Weekly Tip)" 
//                     className="w-full p-4 border rounded-2xl bg-slate-50 outline-none focus:ring-2 ring-indigo-500" 
//                 />
//                 <textarea 
//                     defaultValue={editingTemplate?.desc}
//                     placeholder="Write your template content..." 
//                     className="w-full p-4 border rounded-2xl h-40 bg-slate-50 outline-none focus:ring-2 ring-indigo-500" 
//                 />
//                 </div>

//                 <div className="flex gap-3 mt-8">
//                 <button onClick={() => setIsModalOpen(false)} className="flex-1 py-3 bg-slate-100 font-bold rounded-2xl">Cancel</button>
//                 <button className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2">
//                     <Save size={18} /> {editingTemplate ? 'Save Changes' : 'Create Template'}
//                 </button>
//                 </div>
//             </div>
//             </div>
//         )}
//         </div>
//     );
//     }

"use client";
import React, { useState, useRef } from 'react';
import type {ChangeEvent } from 'react';
import { 
  Plus, X, Save, Calendar, Layout, ImageIcon, 
  Facebook, Instagram, Youtube, Twitter, MapPin 
} from 'lucide-react';
import { TemplateCard } from './TemplateCard.tsx';

// Define Types
interface SocialPlatform {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface Template {
  title: string;
  desc: string;
}

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { id: 'fb', name: 'Facebook', icon: <Facebook size={16} /> },
  { id: 'ig', name: 'Instagram', icon: <Instagram size={16} /> },
  { id: 'yt', name: 'YouTube', icon: <Youtube size={16} /> },
  { id: 'tw', name: 'Twitter', icon: <Twitter size={16} /> },
  { id: 'gmb', name: 'GMB', icon: <MapPin size={16} /> },
];

export default function TemplatesPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<'create' | 'use'>('create');
  
  // Form States
  const [templateTitle, setTemplateTitle] = useState<string>("");
  const [globalCaption, setGlobalCaption] = useState<string>("");
  const [globalHashtags, setGlobalHashtags] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  // Note: These two states were in your code but unused in the JSX provided; 
  // kept for consistency.

  const openModal = (targetMode: 'create' | 'use', template: Template | null = null): void => {
    setMode(targetMode);
    if (template) {
      setTemplateTitle(template.title);
      setGlobalCaption(template.desc);
      // Reset other states
      setGlobalHashtags("");
      setImages([]);
      setSelectedPlatforms([]);
    } else {
      setTemplateTitle("");
      setGlobalCaption("");
      setGlobalHashtags("");
      setImages([]);
      setSelectedPlatforms([]);
    }
    setIsModalOpen(true);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newImages = files.map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const togglePlatform = (id: string): void => {
    setSelectedPlatforms(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Post Templates</h1>
          <p className="text-slate-500">Create and manage your reusable post structures.</p>
        </div>
        <button 
          onClick={() => openModal('create')} 
          className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
        >
          <Plus size={20} /> Create Template
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Weekly Tech Tip", desc: "Share a quick dev tip every Friday." },
          { title: "Client Testimonial", desc: "Professional format for client reviews." }
        ].map((t: Template, i: number) => (
          <TemplateCard 
            key={i} 
            title={t.title} 
            desc={t.desc} 
            onUse={() => openModal('use', t)} 
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
            
            {/* STICKY HEADER */}
            <div className="px-8 py-3 border-b border-slate-100 flex justify-between items-center bg-white rounded-t-3xl z-20">
              <h2 className="text-xl font-bold text-slate-800">
                {mode === 'use' ? 'Use Template' : 'Create New Template'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition">
                <X className="text-slate-400"/>
              </button>
            </div>
            
            {/* SCROLLABLE BODY */}
            <div className="p-8 overflow-y-auto flex-1 space-y-6 text-left">
              
              {/* Template Name */}
              <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
                    <Layout size={14} /> Template Name
                  </label>
                  <input 
                    value={templateTitle}
                    onChange={(e) => setTemplateTitle(e.target.value)}
                    type="text" 
                    placeholder="e.g. Monthly Newsletter Template" 
                    className="w-full p-3 border rounded-xl bg-slate-50 focus:ring-2 ring-indigo-500 outline-none" 
                  />
              </div>

              {/* Media Section */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
                  <ImageIcon size={14} /> Template Media (Optional)
                </label>
                <div className="grid grid-cols-4 gap-4">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-slate-200">
                      <img src={img} alt="preview" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="aspect-square rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-indigo-400 hover:text-indigo-400 transition bg-slate-50"
                  >
                    <Plus size={24} />
                    <span className="text-[10px] font-bold">Add Image</span>
                  </button>
                </div>
                <input 
                  type="file" 
                  hidden 
                  ref={fileInputRef} 
                  multiple 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                />
              </div>

              {/* Content Section */}
              <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100 space-y-4">
                <label className="text-xs font-bold text-indigo-600 uppercase">Default Content</label>
                <textarea 
                    value={globalCaption}
                    onChange={(e) => setGlobalCaption(e.target.value)}
                    placeholder="Write template caption..." 
                    className="w-full p-4 border rounded-xl h-32 bg-white outline-none focus:ring-2 ring-indigo-200" 
                />
                <input 
                    value={globalHashtags}
                    onChange={(e) => setGlobalHashtags(e.target.value)}
                    type="text" 
                    placeholder="Add hashtags..." 
                    className="w-full p-3 border rounded-xl bg-white outline-none" 
                />
              </div>

              {/* Platform Filter */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">Suitable Platforms:</p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {SOCIAL_PLATFORMS.map((p: SocialPlatform) => (
                    <button 
                      key={p.id}
                      onClick={() => togglePlatform(p.id)}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-2 transition ${selectedPlatforms.includes(p.id) ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white text-slate-600'}`}
                    >
                      {p.icon} {p.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Show scheduling options only if "Using" the template */}
              {mode === 'use' && (
                <div className="border-t pt-6 space-y-4">
                   <p className="text-xs font-bold text-slate-400 uppercase">Scheduling Details</p>
                   <div className="grid grid-cols-2 gap-4">
                      <input type="date" className="p-3 border rounded-xl bg-slate-50 outline-none" />
                      <input type="time" className="p-3 border rounded-xl bg-slate-50 outline-none" />
                   </div>
                </div>
              )}

            </div>

            {/* STICKY FOOTER */}
            <div className="px-8 py-3 border-t border-slate-100 bg-white flex gap-3 rounded-b-3xl">
              <button onClick={() => setIsModalOpen(false)} className="flex-1 py-4 text-slate-500 font-bold hover:bg-slate-50 rounded-2xl transition">
                Cancel
              </button>
              <button className="flex-[2] py-2 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition shadow-lg flex items-center justify-center gap-2">
                {mode === 'use' ? (
                  <> <Calendar size={18} /> Confirm Schedule </>
                ) : (
                  <> <Save size={18} /> Save Template </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
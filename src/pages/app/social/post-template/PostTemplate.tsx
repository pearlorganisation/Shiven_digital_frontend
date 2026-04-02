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
import React, { useState } from 'react';
import { Plus, Search, X, Save, Calendar, Copy } from 'lucide-react';
import { TemplateCard } from './TemplateCard';

export default function TemplatesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Store the mode: 'create' or 'use'
  const [mode, setMode] = useState<'create' | 'use'>('create');
  const [editingTemplate, setEditingTemplate] = useState<{title: string, desc: string} | null>(null);

  const openModal = (mode: 'create' | 'use', template: any = null) => {
    setMode(mode);
    setEditingTemplate(template);
    setIsModalOpen(true);
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
          className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition"
        >
          <Plus size={20} /> Create Template
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Weekly Tech Tip", desc: "Share a quick dev tip every Friday." },
          { title: "Client Testimonial", desc: "Professional format for client reviews." }
        ].map((t, i) => (
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {mode === 'use' ? 'Use Template' : 'Create New Template'}
              </h2>
              <button onClick={() => setIsModalOpen(false)}><X className="text-slate-400"/></button>
            </div>
            
            <div className="space-y-4">
              <input 
                defaultValue={editingTemplate?.title}
                type="text" 
                placeholder="Template Title..." 
                className="w-full p-4 border rounded-2xl bg-slate-50 outline-none focus:ring-2 ring-indigo-500" 
              />
              <textarea 
                defaultValue={editingTemplate?.desc}
                placeholder="Write your template content..." 
                className="w-full p-4 border rounded-2xl h-40 bg-slate-50 outline-none focus:ring-2 ring-indigo-500" 
              />
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={() => setIsModalOpen(false)} className="flex-1 py-3 bg-slate-100 font-bold rounded-2xl text-slate-600 hover:bg-slate-200">
                Cancel
              </button>
              <button className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-indigo-700 transition">
                {mode === 'use' ? (
                  <> <Calendar size={18} /> Schedule Post </>
                ) : (
                  <> <Save size={18} /> Create Template </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
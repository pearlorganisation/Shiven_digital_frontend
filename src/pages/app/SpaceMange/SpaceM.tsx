// src/pages/AddonsPage.tsx
import React, { useState } from "react";
import type{ChangeEvent} from "react";

// --- Types & Interfaces ---

interface Addon {
  _id: string;
  addonName: string;
  storageLimit: number; // in bytes
  addOnPrice: number;
  validityInDays: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AddonFormData {
  addonName: string;
  storageLimit: string | number;
  addOnPrice: string | number;
  validityInDays: string | number;
  isActive: boolean;
}

type ModalType = "create" | "edit" | "details" | null;

// --- Mock Data ---

const MOCK_ADDONS: Addon[] = [
  {
    _id: "1",
    addonName: "Starter Pack",
    storageLimit: 5368709120, // 5 GB
    addOnPrice: 199.0,
    validityInDays: 30,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    addonName: "Pro Storage",
    storageLimit: 10737418240, // 10 GB
    addOnPrice: 499.0,
    validityInDays: 365,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    addonName: "Mega Bundle",
    storageLimit: 53687091200, // 50 GB
    addOnPrice: 999.0,
    validityInDays: 30,
    isActive: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// --- Icons (Inline SVGs for clean portability) ---

const Icons = {
  Plus: () => (
    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
  ),
  Database: () => (
    <svg className="w-4 h-4 mr-1.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
  ),
  Calendar: () => (
    <svg className="w-4 h-4 mr-1.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  ),
  Edit: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
  ),
  Trash: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
  ),
  Eye: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
  ),
  Close: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
  ),
};

// --- Helpers ---

const bytesToMb = (bytes: number): string => (bytes ? (bytes / (1024 * 1024)).toFixed(0) : "0");

// --- Components ---

const Modal: React.FC<{ title: string; children: React.ReactNode; onClose: () => void }> = ({ title, children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl transform transition-all scale-100">
        <div className="flex justify-between items-center border-b border-slate-100 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full p-1 transition-colors">
            <Icons.Close />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const AddonForm: React.FC<{
  initialData?: Addon | null;
  isEditing: boolean;
  onSubmit: (data: AddonFormData) => void;
  onClose: () => void;
}> = ({ initialData, isEditing, onSubmit, onClose }) => {
  const [formData, setFormData] = useState<AddonFormData>({
    addonName: initialData?.addonName || "",
    storageLimit: initialData?.storageLimit ? bytesToMb(initialData.storageLimit) : "",
    addOnPrice: initialData?.addOnPrice || "",
    validityInDays: initialData?.validityInDays || "",
    isActive: initialData?.isActive ?? true,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const inputClass = "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white outline-none transition-all";
  const labelClass = "block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5";

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="space-y-5">
      <div>
        <label className={labelClass}>Addon Name</label>
        <input type="text" name="addonName" value={formData.addonName} onChange={handleChange} className={inputClass} placeholder="e.g. Starter Pack" required />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Storage (MB)</label>
          <input type="number" name="storageLimit" value={formData.storageLimit} onChange={handleChange} className={inputClass} placeholder="5000" required />
        </div>
        <div>
          <label className={labelClass}>Price (₹)</label>
          <input type="number" name="addOnPrice" value={formData.addOnPrice} onChange={handleChange} className={inputClass} placeholder="199" required />
        </div>
      </div>

      <div>
        <label className={labelClass}>Validity (Days)</label>
        <input type="number" name="validityInDays" value={formData.validityInDays} onChange={handleChange} className={inputClass} placeholder="30" required />
      </div>

      {isEditing && (
        <label className="flex items-center space-x-3 cursor-pointer group">
          <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 transition cursor-pointer" />
          <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Mark as Active</span>
        </label>
      )}

      <div className="flex justify-end gap-3 pt-4">
        <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">Cancel</button>
        <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-sm shadow-indigo-200 transition-all transform active:scale-95">
          {isEditing ? "Save Changes" : "Create Addon"}
        </button>
      </div>
    </form>
  );
};

const AddonCard: React.FC<{
  addon: Addon;
  onEdit: (addon: Addon) => void;
  onDelete: (id: string) => void;
  onView: (addon: Addon) => void;
}> = ({ addon, onEdit, onDelete, onView }) => {
  return (
    <div className={`group relative bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${addon.isActive ? "border-slate-200" : "border-red-100 bg-red-50/30"}`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{addon.addonName}</h3>
          <div className="flex items-center mt-1">
             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${addon.isActive ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
               {addon.isActive ? "Active" : "Inactive"}
             </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-slate-900">₹{addon.addOnPrice}</p>
          <p className="text-xs text-slate-400">excl. taxes</p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm text-slate-600 p-2 bg-slate-50 rounded-lg group-hover:bg-indigo-50/50 transition-colors">
          <Icons.Database />
          <span className="font-semibold text-slate-900 mr-1">{bytesToMb(addon.storageLimit)} MB</span> Storage
        </div>
        <div className="flex items-center text-sm text-slate-600 p-2 bg-slate-50 rounded-lg group-hover:bg-indigo-50/50 transition-colors">
          <Icons.Calendar />
          <span className="font-semibold text-slate-900 mr-1">{addon.validityInDays} Days</span> Validity
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
        <button onClick={() => onView(addon)} className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors">
          <Icons.Eye /> View
        </button>
        <button onClick={() => onEdit(addon)} className="flex items-center justify-center p-2 text-amber-600 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors" title="Edit">
          <Icons.Edit />
        </button>
        <button onClick={() => onDelete(addon._id)} className="flex items-center justify-center p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors" title="Delete">
          <Icons.Trash />
        </button>
      </div>
    </div>
  );
};

// --- Main Page Component ---

const AddonsPage: React.FC = () => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedAddon, setSelectedAddon] = useState<Addon | null>(null);

  const handleCreate = () => { setSelectedAddon(null); setModalType("create"); };
  const handleEdit = (addon: Addon) => { setSelectedAddon(addon); setModalType("edit"); };
  const handleView = (addon: Addon) => { setSelectedAddon(addon); setModalType("details"); };
  const handleDelete = (id: string) => { if (window.confirm("Delete this addon?")) alert(`Deleted ${id}`); };
  const closeModal = () => { setModalType(null); setSelectedAddon(null); };

  const handleFormSubmit = (data: AddonFormData) => {
    console.log(data);
    closeModal();
    alert("Action saved!");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="md:flex md:items-center md:justify-between mb-10">
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">Addon Plans</h2>
            <p className="mt-2 text-sm text-slate-500">Manage storage tiers, pricing, and validity for your users.</p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button onClick={handleCreate} className="inline-flex items-center px-5 py-3 border border-transparent rounded-xl shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:-translate-y-0.5">
              <Icons.Plus /> Create New Plan
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {MOCK_ADDONS.map((addon) => (
            <AddonCard
              key={addon._id}
              addon={addon}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          ))}
          
          {/* Empty State / Add New Placeholder Card (Optional) */}
          <button onClick={handleCreate} className="group relative block w-full border-2 border-slate-300 border-dashed rounded-2xl p-12 text-center hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <div className="mx-auto h-12 w-12 text-slate-400 group-hover:text-indigo-500 transition-colors">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="mt-2 block text-sm font-medium text-slate-900 group-hover:text-indigo-600">Add another plan</span>
          </button>
        </div>

        {/* Modals */}
        {(modalType === "create" || (modalType === "edit" && selectedAddon)) && (
          <Modal title={modalType === "create" ? "Create New Addon" : "Edit Addon"} onClose={closeModal}>
            <AddonForm initialData={selectedAddon} isEditing={modalType === "edit"} onSubmit={handleFormSubmit} onClose={closeModal} />
          </Modal>
        )}

        {modalType === "details" && selectedAddon && (
          <Modal title="Plan Details" onClose={closeModal}>
            <div className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Plan Name</span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${selectedAddon.isActive ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
                        {selectedAddon.isActive ? "Active" : "Inactive"}
                    </span>
                </div>
                <div className="text-xl font-bold text-slate-900">{selectedAddon.addonName}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                        <Icons.Database />
                        <span className="text-xs font-bold text-slate-400 uppercase">Storage</span>
                    </div>
                    <div className="text-lg font-semibold text-slate-800">{bytesToMb(selectedAddon.storageLimit)} MB</div>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                        <Icons.Calendar />
                        <span className="text-xs font-bold text-slate-400 uppercase">Validity</span>
                    </div>
                    <div className="text-lg font-semibold text-slate-800">{selectedAddon.validityInDays} Days</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                 <span className="text-sm font-medium text-indigo-900">Total Price</span>
                 <span className="text-2xl font-bold text-indigo-700">₹{selectedAddon.addOnPrice}</span>
              </div>

              <div className="flex justify-end pt-2">
                <button onClick={closeModal} className="px-5 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50">Close</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default AddonsPage;
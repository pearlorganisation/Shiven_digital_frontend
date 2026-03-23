// import React, { useState } from 'react';
// import { Folder } from 'lucide-react'; // Folder icon
// import { PlusIcon } from '@heroicons/react/24/solid'; // Plus icon

// const FilesFolder: React.FC = () => {
//   const [folders, setFolders] = useState<string[]>([
//     'Bank Details',
//     'Basic Documents',
//     'Health Insurance',
//     'Life Insurance',
//     'Loans',
//     'Mutual Funds',
//     'Other Investments',
//     'Property Details',
//     'Shares',
//     'Taxation',
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newFolderName, setNewFolderName] = useState('');

//   const handleCreateFolder = () => {
//     if (newFolderName.trim() !== '') {
//       setFolders((prev) => [...prev, newFolderName.trim()]);
//       setNewFolderName('');
//       setIsModalOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Folder Management</h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
//           aria-label="Create New Folder"
//         >
//           <PlusIcon className="h-6 w-6" />
//         </button>
//       </div>

//       {/* Folder Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
//         {folders.map((folder, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
//           >
//             {/* Folder Icon from lucide-react */}
//             <Folder className="text-yellow-500" size={40} />

//             {/* Folder Name */}
//             <p className="mt-3 text-center text-sm truncate w-full">{folder}</p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-30 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-80">
//             <h2 className="text-xl font-semibold mb-4">Create New Folder</h2>
//             <input
//               type="text"
//               placeholder="Enter folder name"
//               value={newFolderName}
//               onChange={(e) => setNewFolderName(e.target.value)}
//               className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
//               autoFocus
//             />
//             <div className="flex justify-end space-x-3">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleCreateFolder}
//                 className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//               >
//                 Create
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilesFolder;

import React, { useState, useRef } from "react";
import {
  Folder,
  ChevronRight,
  FileText,
  Plus,
  ArrowLeft,
  Upload,
} from "lucide-react";

// --- Types ---
interface FileData {
  id: string;
  name: string;
  size: string;
}

interface FolderData {
  id: string;
  name: string;
  files: FileData[];
}

const FilesFolder: React.FC = () => {
  // --- State ---
  const [folders, setFolders] = useState<FolderData[]>([
    { id: "1", name: "Bank Details", files: [] },
    { id: "2", name: "Basic Documents", files: [] },
    { id: "3", name: "Health Insurance", files: [] },
    { id: "4", name: "Life Insurance", files: [] },
    { id: "5", name: "Loans", files: [] },
    { id: "6", name: "Other Investments", files: [] },
    { id: "7", name: "Property Details", files: [] },
    { id: "8", name: "Shares", files: [] },
    { id: "9", name: "Taxation", files: [] },
  ]);

  const [currentFolder, setCurrentFolder] = useState<FolderData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Handlers ---
  const handleCreateFolder = () => {
    if (newFolderName.trim() !== "") {
      const newFolder: FolderData = {
        id: Date.now().toString(),
        name: newFolderName.trim(),
        files: [],
      };
      setFolders((prev) => [...prev, newFolder]);
      setNewFolderName("");
      setIsModalOpen(false);
    }
  };

  const handleFolderClick = (folder: FolderData) => {
    setCurrentFolder(folder);
  };

  const handleBackToRoot = () => {
    setCurrentFolder(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && currentFolder) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: (file.size / 1024).toFixed(2) + " KB",
      }));

      // Update local state (In real app, this would be an API call)
      setFolders((prev) =>
        prev.map((f) =>
          f.id === currentFolder.id
            ? { ...f, files: [...f.files, ...newFiles] }
            : f
        )
      );

      // Update current view
      setCurrentFolder((prev) =>
        prev ? { ...prev, files: [...prev.files, ...newFiles] } : null
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Folder Management
          </h1>
          {/* --- Breadcrumbs --- */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
            <button
              onClick={handleBackToRoot}
              className={`hover:text-blue-600 transition flex items-center gap-1 ${
                !currentFolder ? "font-semibold text-blue-600" : ""
              }`}
            >
              <Folder size={16} />
              Files & Folders
            </button>
            {currentFolder && (
              <>
                <ChevronRight size={14} />
                <span className="font-semibold text-slate-800">
                  {currentFolder.name}
                </span>
              </>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {currentFolder ? (
            <button
              onClick={handleBackToRoot}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
            >
              <ArrowLeft size={18} />
              Back
            </button>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
            >
              <Plus size={18} />
              New Folder
            </button>
          )}
        </div>
      </div>

      {/* --- Content Grid --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {/* ROOT VIEW: Show Folders */}
        {!currentFolder &&
          folders.map((folder) => (
            <div
              key={folder.id}
              onClick={() => handleFolderClick(folder)}
              className="group bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center cursor-pointer hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="bg-yellow-50 p-4 rounded-full group-hover:bg-yellow-100 transition">
                <Folder
                  className="text-yellow-500"
                  size={40}
                  fill="currentColor"
                  fillOpacity={0.2}
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-slate-700 truncate w-full">
                {folder.name}
              </p>
              <span className="text-xs text-gray-400 mt-1">
                {folder.files.length} files
              </span>
            </div>
          ))}

        {/* FOLDER VIEW: Show Upload Card and Files */}
        {currentFolder && (
          <>
            {/* Upload File Card */}
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-white rounded-xl p-5 cursor-pointer hover:bg-gray-50 hover:border-blue-400 transition-all text-center">
              <div className="bg-blue-50 p-3 rounded-full mb-3">
                <Upload className="text-blue-600" size={24} />
              </div>
              <span className="text-sm font-semibold text-slate-700">
                Add new File(s)
              </span>
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileUpload}
                ref={fileInputRef}
              />
            </label>

            {/* Existing Files */}
            {currentFolder.files.map((file) => (
              <div
                key={file.id}
                className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center hover:shadow-md transition-all"
              >
                <div className="bg-blue-50 p-4 rounded-lg">
                  <FileText className="text-blue-500" size={36} />
                </div>
                <p
                  className="mt-4 text-center text-sm font-medium text-slate-700 truncate w-full"
                  title={file.name}
                >
                  {file.name}
                </p>
                <span className="text-xs text-gray-400 mt-1">{file.size}</span>
              </div>
            ))}
          </>
        )}
      </div>

      {/* --- Empty State --- */}
      {currentFolder && currentFolder.files.length === 0 && (
        <div className="mt-20 text-center text-gray-400">
          <FileText size={48} className="mx-auto mb-4 opacity-20" />
          <p>No files in this folder yet.</p>
        </div>
      )}

      {/* --- Create Folder Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm animate-in fade-in zoom-in duration-200">
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Create New Folder
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Give your folder a name to keep things organized.
            </p>

            <input
              type="text"
              placeholder="e.g. Invoices 2024"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && handleCreateFolder()}
            />

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFolder}
                className="px-5 py-2.5 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 transition"
              >
                Create Folder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilesFolder;

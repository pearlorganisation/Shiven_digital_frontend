import React, { useState } from 'react';
import { Folder } from 'lucide-react'; // Folder icon
import { PlusIcon } from '@heroicons/react/24/solid'; // Plus icon

const FilesFolder: React.FC = () => {
  const [folders, setFolders] = useState<string[]>([
    'Bank Details',
    'Basic Documents',
    'Health Insurance',
    'Life Insurance',
    'Loans',
    'Mutual Funds',
    'Other Investments',
    'Property Details',
    'Shares',
    'Taxation',
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const handleCreateFolder = () => {
    if (newFolderName.trim() !== '') {
      setFolders((prev) => [...prev, newFolderName.trim()]);
      setNewFolderName('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Folder Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          aria-label="Create New Folder"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Folder Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {folders.map((folder, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
          >
            {/* Folder Icon from lucide-react */}
            <Folder className="text-yellow-500" size={40} />

            {/* Folder Name */}
            <p className="mt-3 text-center text-sm truncate w-full">{folder}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-30 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-xl font-semibold mb-4">Create New Folder</h2>
            <input
              type="text"
              placeholder="Enter folder name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              autoFocus
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFolder}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilesFolder;

// DeleteModal.tsx
import React from 'react';
import { X, Trash2, AlertTriangle } from 'lucide-react';
import type { BrandType } from "@/schemas/brand/brandSchema";

interface DeleteModalProps {
  isOpen: boolean;
  brand?: BrandType | null;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ 
  isOpen, 
  brand, 
  onClose, 
  onConfirm 
}) => {
  if (!isOpen || !brand) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 transform transition-all duration-200 scale-100">
        {/* Header */}
        <div className="px-6 pt-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Delete Brand</h3>
                <p className="text-sm text-gray-600">This action cannot be undone</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <div className="space-y-4">
            {/* Brand Info */}
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-10 h-10 object-contain rounded-lg bg-white p-1 border"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/40/6B7280/FFFFFF?text=' + brand.name.charAt(0);
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate">{brand.name}</p>
                <p className="text-sm text-gray-500 truncate">{brand.description || 'No description'}</p>
              </div>
            </div>

            {/* Warning Message */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 pt-0.5">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-800">
                    Are you sure you want to delete <span className="font-bold">"{brand.name}"</span>?
                  </p>
                  <p className="text-sm text-red-700 mt-1">
                    This brand and all associated data will be permanently removed. This action cannot be reversed.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Impact */}
            {/* <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-1 bg-yellow-200 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-yellow-700" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-yellow-800">Impact</p>
                    <p className="text-xs text-yellow-700">
                      {getSocialCount(brand)} social profile{getSocialCount(brand) !== 1 ? 's' : ''} will be removed
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-yellow-800 bg-yellow-200 px-2 py-0.5 rounded">
                  {brand.contact.address.city}, {brand.contact.address.country}
                </span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl">
          <div className="flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="px-4 py-2 text-sm font-semibold text-white bg-red-600 border border-transparent rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-sm transition-all duration-200 flex items-center space-x-2"
            >
              <Trash2 size={16} />
              <span>Delete Brand</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
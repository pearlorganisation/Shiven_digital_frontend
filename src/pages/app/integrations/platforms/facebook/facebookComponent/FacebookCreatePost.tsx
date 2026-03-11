import React, { useState } from "react";
import { Send, Image as ImageIcon, Loader2, X } from "lucide-react";

interface Props {
  isPosting: boolean;
  onSubmit: (message: string, imageUrl: string) => void;
  onClose: () => void;
}

const FacebookCreatePost: React.FC<Props> = ({ isPosting, onSubmit, onClose }) => {
  const [message, setMessage] = useState("");
  const[imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(message, imageUrl);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <Send size={18} className="text-blue-600" /> 
            Create a New Post
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 hover:bg-gray-200 p-1.5 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <textarea
            placeholder="What's on your mind?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none h-32 shadow-sm text-gray-800"
          />
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <ImageIcon size={18} className="text-gray-400" />
            </div>
            <input
              type="url"
              placeholder="Paste image URL (optional)"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none shadow-sm text-gray-800"
            />
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPosting || (!message && !imageUrl)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
            >
              {isPosting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              Publish Post
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default FacebookCreatePost;
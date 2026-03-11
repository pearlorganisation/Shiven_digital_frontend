import React from "react";
import { CheckCircle2 } from "lucide-react";

interface Props {
  pages: any[];
  selectedPageId: string;
  onSelectPage: (pageId: string) => void;
}

const FacebookPageList: React.FC<Props> = ({ pages, selectedPageId, onSelectPage }) => {
  if (pages.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
        Your Pages
      </h3>
      
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
        {pages.map((page) => (
          <button
            key={page.pageId}
            onClick={() => onSelectPage(page.pageId)}
            className={`w-full text-left flex items-center justify-between p-3.5 rounded-xl border transition-all ${
              selectedPageId === page.pageId 
                ? "border-blue-500 bg-blue-50 shadow-sm" 
                : "border-gray-100 hover:border-blue-300 hover:bg-gray-50"
            }`}
          >
            <span className={`font-medium truncate pr-2 ${selectedPageId === page.pageId ? 'text-blue-800' : 'text-gray-700'}`}>
              {page.pageName}
            </span>
            {selectedPageId === page.pageId && (
              <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FacebookPageList;
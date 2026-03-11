import React from "react";
import { Facebook, CheckCircle2 } from "lucide-react";

interface Props {
  isConnected: boolean;
  onConnect: () => void;
}

const FacebookConnect: React.FC<Props> = ({ isConnected, onConnect }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#1877F2]/10 text-[#1877F2] rounded-xl">
            <Facebook size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Facebook</h3>
        </div>
      </div>
      
      {isConnected ? (
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-3 rounded-xl text-sm font-medium mb-5 border border-emerald-100">
          <CheckCircle2 size={18} className="text-emerald-500" />
          Already Connected
        </div>
      ) : (
        <p className="text-sm text-gray-500 mb-6">
          Connect your account to post updates and manage your Facebook pages directly.
        </p>
      )}

      <button
        onClick={onConnect}
        className="w-full flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] transition-colors text-white px-4 py-2.5 rounded-xl font-medium shadow-sm"
      >
        <Facebook size={18} />
        {isConnected ? "Reconnect Account" : "Connect Facebook"}
      </button>
    </div>
  );
};

export default FacebookConnect;
// components/PlatformCard.tsx
import React from 'react';

export const PlatformCard = ({ name, status, icon }: { name: string, status: 'connected' | 'error' | 'ready', icon: string }) => (
  <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
    <div className="flex items-center gap-3">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="text-sm font-semibold text-gray-800">{name}</p>
        <p className="text-[10px] text-gray-400 capitalize">{status}</p>
      </div>
    </div>
    <div className={`w-2 h-2 rounded-full ${status === 'connected' ? 'bg-green-500' : 'bg-red-400'}`} />
  </div>
);
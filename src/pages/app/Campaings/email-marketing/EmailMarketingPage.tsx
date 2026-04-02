"use client";
import React, { useState } from 'react';
import { Mail, Send, Clock, Users, Plus, BarChart3, MoreVertical, FileText } from 'lucide-react';

export default function EmailMarketingPage() {
  const [campaigns] = useState([
    { id: 1, name: "Q4 Product Launch", status: "Sent", recipients: "2.4k", openRate: "42%" },
    { id: 2, name: "Weekly Newsletter", status: "Scheduled", recipients: "1.8k", openRate: "-" },
    { id: 3, name: "Flash Sale Invite", status: "Draft", recipients: "500", openRate: "-" },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Email Campaigns</h1>
          <p className="text-slate-500">Design, automate, and track your email reach.</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition">
          <Plus size={20} /> New Campaign
        </button>
      </div>

      {/* Campaign List */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-10">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-400 text-xs uppercase font-bold">
            <tr>
              <th className="p-6">Campaign Name</th>
              <th className="p-6">Status</th>
              <th className="p-6">Recipients</th>
              <th className="p-6">Open Rate</th>
              <th className="p-6">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {campaigns.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50 transition">
                <td className="p-6 font-bold text-slate-900 flex items-center gap-3">
                  <div className="bg-indigo-50 p-2 rounded-xl text-indigo-600"><Mail size={18} /></div>
                  {c.name}
                </td>
                <td className="p-6">
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full ${
                    c.status === 'Sent' ? 'bg-emerald-100 text-emerald-700' : 
                    c.status === 'Scheduled' ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {c.status}
                  </span>
                </td>
                <td className="p-6 text-slate-600 font-medium">{c.recipients}</td>
                <td className="p-6 text-indigo-600 font-bold">{c.openRate}</td>
                <td className="p-6 text-slate-400"><MoreVertical size={18} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg mb-1">Subscriber List</h3>
            <p className="text-slate-500 text-sm">Manage your mailing lists and segments.</p>
          </div>
          <button className="text-indigo-600 font-bold text-sm bg-indigo-50 px-4 py-2 rounded-xl">View Lists</button>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg mb-1">Email Templates</h3>
            <p className="text-slate-500 text-sm">Reusable designs for your campaigns.</p>
          </div>
          <button className="text-indigo-600 font-bold text-sm bg-indigo-50 px-4 py-2 rounded-xl">Edit Templates</button>
        </div>
      </div>
    </div>
  );
}
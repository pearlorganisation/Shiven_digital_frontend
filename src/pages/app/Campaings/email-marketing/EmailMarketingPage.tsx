"use client";
import  { useState } from 'react';
import { 
  Mail,  Users, Plus, 
  MoreVertical,  Search, 
  UserPlus, ListPlus, CheckCircle2, ArrowUpRight 
} from 'lucide-react';

export default function EmailMarketingPage() {
  const [activeTab, setActiveTab] = useState('campaigns'); // 'campaigns' or 'audience'
  const [segmentFilter, setSegmentFilter] = useState('All');

  // Existing Campaign Data
  const [campaigns] = useState([
    { id: 1, name: "Q4 Product Launch", status: "Sent", recipients: "2.4k", openRate: "42%" },
    { id: 2, name: "Weekly Newsletter", status: "Scheduled", recipients: "1.8k", openRate: "-" },
    { id: 3, name: "Flash Sale Invite", status: "Draft", recipients: "500", openRate: "-" },
  ]);

  // New Subscriber Data
  const [subscribers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", segment: "Existing Customer", status: "Active", score: 92 },
    { id: 2, name: "Sarah Smith", email: "sarah.s@outlook.com", segment: "FIB (Frequent)", status: "Active", score: 88 },
    { id: 3, name: "Mike Ross", email: "mike@ross.com", segment: "Past Customer", status: "Unsubscribed", score: 45 },
    { id: 4, name: "Anna Bell", email: "anna@lal.com", segment: "LAL (Lookalike)", status: "Active", score: 76 },
    { id: 5, name: "David Wright", email: "dwright@gmail.com", segment: "Existing Customer", status: "Active", score: 95 },
  ]);

  // Filter logic for subscribers
  const filteredSubscribers = segmentFilter === 'All' 
    ? subscribers 
    : subscribers.filter(s => s.segment.includes(segmentFilter));

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-10 text-slate-900">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Email Dashboard</h1>
          <p className="text-slate-500">Manage your audience and campaign performance.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl font-semibold hover:bg-slate-50 transition shadow-sm">
            <ListPlus size={18} /> Create List
          </button>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
            <Plus size={20} /> New Campaign
          </button>
        </div>
      </div>

      {/* TAB NAVIGATION */}
      <div className="flex gap-8 border-b border-slate-200 mb-8">
        <button 
          onClick={() => setActiveTab('campaigns')}
          className={`pb-4 px-2 font-bold text-sm transition-all ${activeTab === 'campaigns' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          Campaigns
        </button>
        <button 
          onClick={() => setActiveTab('audience')}
          className={`pb-4 px-2 font-bold text-sm transition-all ${activeTab === 'audience' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          Audience & Subscribers
        </button>
      </div>

      {activeTab === 'campaigns' ? (
        <>
          {/* CAMPAIGN CONTENT (Existing logic) */}
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
                  <tr key={c.id} className="hover:bg-slate-50 transition border-none">
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
                    <td className="p-6 text-slate-400"><MoreVertical size={18} className="cursor-pointer" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          {/* AUDIENCE / SUBSCRIBER CONTENT (New Functionality) */}
          <div className="space-y-6">
            
            {/* Filter Ribbons */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
                {['All', 'Existing Customer', 'Past Customer', 'FIB', 'LAL'].map((seg) => (
                  <button 
                    key={seg}
                    onClick={() => setSegmentFilter(seg)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${segmentFilter === seg ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    {seg}
                  </button>
                ))}
              </div>
              
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search subscribers..." 
                    className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-indigo-100">
                  <UserPlus size={16} /> Add Subscriber
                </button>
              </div>
            </div>

            {/* Subscriber Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-400 text-xs uppercase font-bold border-b border-slate-100">
                  <tr>
                    <th className="p-6">Subscriber</th>
                    <th className="p-6">Segment</th>
                    <th className="p-6">Status</th>
                    <th className="p-6">Engagement</th>
                    <th className="p-6">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredSubscribers.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50/50 transition">
                      <td className="p-6">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900">{s.name}</span>
                          <span className="text-xs text-slate-500">{s.email}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[11px] font-semibold tracking-wide">
                          {s.segment}
                        </span>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${s.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                          <span className="text-sm font-medium text-slate-700">{s.status}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden max-w-[100px]">
                          <div className="bg-indigo-500 h-full" style={{ width: `${s.score}%` }} />
                        </div>
                        <span className="text-[10px] font-bold text-indigo-600 mt-1 block">{s.score}/100 Score</span>
                      </td>
                      <td className="p-6">
                        <button className="text-slate-400 hover:text-slate-900 transition"><MoreVertical size={18} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* QUICK STATS / BOTTOM SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-3xl text-white shadow-xl shadow-indigo-100">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-white/20 p-2 rounded-xl"><Users size={24} /></div>
            <ArrowUpRight size={20} className="text-white/60" />
          </div>
          <h3 className="text-3xl font-bold">8,542</h3>
          <p className="text-indigo-100 text-sm font-medium">Total Active Subscribers</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Mailing Lists</h3>
            <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded-md">4 ACTIVE</span>
          </div>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">VIP Customers</span>
              <span className="font-bold">1,204</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">New Signups</span>
              <span className="font-bold">450</span>
            </div>
          </div>
          <button className="w-full py-2 bg-slate-50 text-slate-600 font-bold text-xs rounded-xl hover:bg-slate-100">Manage Lists</button>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Email Health</h3>
            <CheckCircle2 size={20} className="text-emerald-500" />
          </div>
          <p className="text-slate-500 text-sm mb-4">Your sender reputation is <span className="text-emerald-600 font-bold">Excellent</span>. No spam reports this week.</p>
          <button className="w-full py-2 bg-slate-50 text-slate-600 font-bold text-xs rounded-xl hover:bg-slate-100">View Deliverability</button>
        </div>
      </div>
    </div>
  );
}
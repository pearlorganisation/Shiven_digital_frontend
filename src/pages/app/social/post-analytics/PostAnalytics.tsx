"use client";

import  { useState, useMemo } from "react";
import {
  Users, MousePointerClick, MessageCircle, Calendar, ArrowUpRight, ArrowDownRight, Search,
  Facebook, Twitter, Youtube, Share2, MoreHorizontal,
  Instagram
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer
} from "recharts";

// --- MOCK DATA (In production, this comes from an API) ---
const MOCK_POSTS = [
  { id: 1, title: "Summer Collection Launch", platform: "Instagram", date: "2024-03-10", reach: 15400, engagement: 1200, clicks: 450, status: "Viral" },
  { id: 2, title: "Tech Stack Reveal", platform: "Twitter", date: "2024-03-12", reach: 8200, engagement: 520, clicks: 89, status: "Stable" },
  { id: 3, title: "How-to Tutorial", platform: "YouTube", date: "2024-03-15", reach: 25000, engagement: 3400, clicks: 1200, status: "Viral" },
  { id: 4, title: "Company Culture", platform: "Facebook", date: "2024-03-18", reach: 4500, engagement: 840, clicks: 120, status: "Stable" },
  { id: 5, title: "Product Promo", platform: "Instagram", date: "2024-03-20", reach: 12000, engagement: 900, clicks: 300, status: "Active" },
];

const DAILY_TRENDS = [
  { day: "Mon", reach: 4000, eng: 2400 },
  { day: "Tue", reach: 3000, eng: 1398 },
  { day: "Wed", reach: 9800, eng: 2000 },
  { day: "Thu", reach: 3908, eng: 2780 },
  { day: "Fri", reach: 4800, eng: 1890 },
  { day: "Sat", reach: 3800, eng: 2390 },
  { day: "Sun", reach: 4300, eng: 3490 },
];

const PLATFORMS = ["All", "Instagram", "Facebook", "Twitter", "YouTube"];

export default function PostAnalytics() {
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [searchQuery, setSearchQuery] = useState("");

  // --- FILTER LOGIC ---
  const filteredPosts = useMemo(() => {
    return MOCK_POSTS.filter((post) => {
      const matchPlatform = selectedPlatform === "All" || post.platform === selectedPlatform;
      const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchDate = (!dateRange.from || post.date >= dateRange.from) &&
                        (!dateRange.to || post.date <= dateRange.to);
      return matchPlatform && matchSearch && matchDate;
    });
  }, [selectedPlatform, searchQuery, dateRange]);

  // --- DERIVED ANALYTICS ---
  const totalReach = filteredPosts.reduce((acc, curr) => acc + curr.reach, 0);
  const totalEng = filteredPosts.reduce((acc, curr) => acc + curr.engagement, 0);
  const totalClicks = filteredPosts.reduce((acc, curr) => acc + curr.clicks, 0);

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 p-4 lg:p-8 font-sans">
      
      {/* 1. HEADER & GLOBAL FILTERS */}
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Post Analytics</h1>
            <p className="text-slate-500">Monitor your digital footprint and engagement trends.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
              <Calendar size={16} className="text-slate-400 mr-2" />
              <input 
                type="date" 
                className="text-xs outline-none bg-transparent"
                onChange={(e) => setDateRange(prev => ({ ...prev, from: e.target.value }))}
              />
              <span className="mx-2 text-slate-300">-</span>
              <input 
                type="date" 
                className="text-xs outline-none bg-transparent"
                onChange={(e) => setDateRange(prev => ({ ...prev, to: e.target.value }))}
              />
            </div>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-200">
              <Share2 size={16} /> Export Report
            </button>
          </div>
        </div>

        {/* 2. PLATFORM TABS */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {PLATFORMS.map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPlatform(p)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                selectedPlatform === p 
                ? "bg-white text-indigo-600 shadow-md border-b-2 border-indigo-600" 
                : "bg-transparent text-slate-500 hover:bg-slate-200"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* 3. KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
  { label: "Aggregate Reach", value: totalReach.toLocaleString(), icon: Users, color: "text-blue-600", bg: "bg-blue-50", trend: "+12%" },
  { label: "Total Engagement", value: totalEng.toLocaleString(), icon: MessageCircle, color: "text-purple-600", bg: "bg-purple-50", trend: "+5.4%" },
  { label: "Link Conversions", value: totalClicks.toLocaleString(), icon: MousePointerClick, color: "text-emerald-600", bg: "bg-emerald-50", trend: "-2.1%" },
].map((stat, i) => {
  const Icon = stat.icon; // ✅ ADD HERE

  return (
    <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
      
      <div className="flex justify-between items-start">
        
        {/* ICON FIX HERE */}
        <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
          <Icon size={24} /> {/* ✅ USE HERE */}
        </div>

        <div className={`flex items-center text-xs font-bold ${stat.trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
          {stat.trend.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {stat.trend}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
        <h2 className="text-3xl font-bold mt-1">{stat.value}</h2>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-indigo-500 transition-all duration-500" />
    </div>
  );
})}
        </div>

        {/* 4. DAILY ANALYTICS CHART (The "Daily Base" request) */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-bold">Daily Growth Trends</h2>
              <p className="text-sm text-slate-500">Visualizing data frequency for the current cycle.</p>
            </div>
            <select className="bg-slate-50 border-none text-sm font-bold rounded-lg px-3 py-2 outline-none cursor-pointer">
              <option>Past 7 Days</option>
              <option>Past 30 Days</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DAILY_TRENDS}>
                <defs>
                  <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="reach" stroke="#4F46E5" strokeWidth={4} fillOpacity={1} fill="url(#colorReach)" />
                <Area type="monotone" dataKey="eng" stroke="#10B981" strokeWidth={4} fill="transparent" strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 5. POST ANALYTICS TABLE (The "All Post" request) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-xl font-bold">All Post Deep-Dive</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search posts..." 
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm w-full md:w-72 outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-widest font-bold">
                  <th className="px-6 py-4">Content</th>
                  <th className="px-6 py-4">Platform</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Reach</th>
                  <th className="px-6 py-4 text-center">Engagement</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900 line-clamp-1">{post.title}</p>
                      <p className="text-xs text-slate-400 mt-1">{post.date}</p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                       <span className="flex items-center gap-2">
                        {post.platform === 'Instagram' && <Instagram size={14} className="text-pink-500" />}
                        {post.platform === 'Twitter' && <Twitter size={14} className="text-sky-400" />}
                        {post.platform === 'YouTube' && <Youtube size={14} className="text-red-600" />}
                        {post.platform === 'Facebook' && <Facebook size={14} className="text-blue-600" />}
                        {post.platform}
                       </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        post.status === 'Viral' ? 'bg-orange-100 text-orange-600' : 'bg-emerald-100 text-emerald-600'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center font-mono text-sm">{post.reach.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-lg text-xs font-bold">
                        {post.engagement.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-white transition-all shadow-sm">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredPosts.length === 0 && (
              <div className="p-20 text-center text-slate-400">
                No matching posts found. Try adjusting your filters.
              </div>
            )}
          </div>
        </div>

     
      </div>
    </div>
  );
}







// "use client";
// import React, { useState } from "react";
// import {
//   Users,
//   MousePointerClick,
//   MessageCircle,
//   Calendar,
//   Filter,
// } from "lucide-react";

// const platforms = ["All", "Instagram", "Facebook", "Twitter", "YouTube"];

// export default function PostAnalytics() {
//   const [selectedPlatform, setSelectedPlatform] = useState("All");
//   const [dateRange, setDateRange] = useState({
//     from: "",
//     to: "",
//   });
//   const [viewMode, setViewMode] = useState("all"); // all | daily

//   // Dummy Data (API ready)
//   const stats = [
//     { label: "Total Reach", value: "48.2k", change: "+12.5%" },
//     { label: "Engagement", value: "3.4k", change: "+8.2%" },
//     { label: "Clicks", value: "892", change: "-2.1%" },
//   ];

//   const posts = [
//     {
//       title: "New Product Launch",
//       platform: "Instagram",
//       date: "2026-04-01",
//       engagement: 1200,
//     },
//     {
//       title: "Dev Weekly Update",
//       platform: "Twitter",
//       date: "2026-04-02",
//       engagement: 520,
//     },
//     {
//       title: "Culture Video",
//       platform: "Facebook",
//       date: "2026-04-03",
//       engagement: 840,
//     },
//   ];

//   // Filters
//   const filteredPosts = posts.filter((p) => {
//     const matchPlatform =
//       selectedPlatform === "All" || p.platform === selectedPlatform;

//     const matchDate =
//       (!dateRange.from || p.date >= dateRange.from) &&
//       (!dateRange.to || p.date <= dateRange.to);

//     return matchPlatform && matchDate;
//   });

//   return (
//     <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
//       {/* Header */}
//       <div className="mb-8 flex flex-col lg:flex-row justify-between gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-slate-900">
//             Performance Analytics
//           </h1>
//           <p className="text-slate-500">
//             Track post performance across platforms
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap gap-3 items-center">
//           <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border">
//             <Calendar size={16} />
//             <input
//               type="date"
//               className="text-sm outline-none"
//               onChange={(e) =>
//                 setDateRange((prev) => ({ ...prev, from: e.target.value }))
//               }
//             />
//             <span>-</span>
//             <input
//               type="date"
//               className="text-sm outline-none"
//               onChange={(e) =>
//                 setDateRange((prev) => ({ ...prev, to: e.target.value }))
//               }
//             />
//           </div>

//           <button
//             onClick={() =>
//               setViewMode(viewMode === "all" ? "daily" : "all")
//             }
//             className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm"
//           >
//             {viewMode === "all" ? "Daily View" : "All Posts"}
//           </button>
//         </div>
//       </div>

//       {/* Platform Filter */}
//       <div className="flex gap-3 mb-6 flex-wrap">
//         {platforms.map((p) => (
//           <button
//             key={p}
//             onClick={() => setSelectedPlatform(p)}
//             className={`px-4 py-2 rounded-xl text-sm border ${
//               selectedPlatform === p
//                 ? "bg-indigo-600 text-white"
//                 : "bg-white"
//             }`}
//           >
//             {p}
//           </button>
//         ))}
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//         {stats.map((s, i) => (
//           <div
//             key={i}
//             className="bg-white p-6 rounded-3xl border shadow-sm"
//           >
//             <div className="flex justify-between mb-3">
//               <div className="text-indigo-600 bg-indigo-50 p-2 rounded-xl">
//                 {i === 0 && <Users size={18} />}
//                 {i === 1 && <MessageCircle size={18} />}
//                 {i === 2 && <MousePointerClick size={18} />}
//               </div>
//               <span
//                 className={`text-xs font-bold ${
//                   s.change.startsWith("+")
//                     ? "text-green-600"
//                     : "text-red-600"
//                 }`}
//               >
//                 {s.change}
//               </span>
//             </div>
//             <p className="text-sm text-slate-500">{s.label}</p>
//             <h3 className="text-2xl font-bold">{s.value}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Posts Table */}
//       <div className="bg-white p-6 rounded-3xl border shadow-sm">
//         <h2 className="font-bold text-lg mb-4">Post Analytics</h2>

//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead className="text-left text-slate-500 border-b">
//               <tr>
//                 <th className="py-3">Post</th>
//                 <th>Platform</th>
//                 <th>Date</th>
//                 <th>Engagement</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredPosts.map((p, i) => (
//                 <tr
//                   key={i}
//                   className="border-b hover:bg-slate-50 transition"
//                 >
//                   <td className="py-3 font-medium">{p.title}</td>
//                   <td>{p.platform}</td>
//                   <td>{p.date}</td>
//                   <td className="font-semibold text-indigo-600">
//                     {p.engagement}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {filteredPosts.length === 0 && (
//           <p className="text-center text-slate-400 py-6">
//             No data found for selected filters
//           </p>
//         )}
//       </div>

//       {/* Extra: Growth Insight */}
//       <div className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-3xl">
//         <h3 className="font-bold text-lg mb-2">Growth Insight 🚀</h3>
//         <p className="text-sm opacity-90">
//           Your engagement increased by 12% this month. Instagram is
//           performing best — consider posting more reels.
//         </p>
//       </div>
//     </div>
//   );
// }
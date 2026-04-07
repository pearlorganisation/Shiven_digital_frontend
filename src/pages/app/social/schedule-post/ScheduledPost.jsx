"use client";
import React, { useState } from 'react';
import { 
  Calendar, CheckCircle2, Plus, Image as ImageIcon, 
  FileText, Settings, Facebook, Instagram, Youtube, 
  Twitter, MapPin, X, Sparkles, Clock, Repeat, Hash
} from 'lucide-react';

const SOCIAL_PLATFORMS = [
  { id: 'fb', name: 'Facebook', icon: <Facebook size={16} /> },
  { id: 'ig', name: 'Instagram', icon: <Instagram size={16} /> },
  { id: 'yt', name: 'YouTube', icon: <Youtube size={16} /> },
  { id: 'tw', name: 'Twitter', icon: <Twitter size={16} /> },
  { id: 'gmb', name: 'GMB', icon: <MapPin size={16} /> },
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  
  // Content States
  const [globalCaption, setGlobalCaption] = useState("");
  const [globalHashtags, setGlobalHashtags] = useState("");
  const [customizePerPlatform, setCustomizePerPlatform] = useState(false);
  const [platformData, setPlatformData] = useState({});

  // Scheduling States
  const [isRepeat, setIsRepeat] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [repeatCount, setRepeatCount] = useState(1); // NEW: Number of times to repeat

  const togglePlatform = (id) => {
    setSelectedPlatforms(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleDay = (day) => {
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handlePlatformDataChange = (id, field, value) => {
    setPlatformData(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const generateAIContent = (platformId = 'global') => {
    const mockAI = "✨ AI Generated: This is an amazing post optimized for your audience! #Growth #Success";
    if (platformId === 'global') {
      setGlobalCaption(mockAI);
    } else {
      handlePlatformDataChange(platformId, 'caption', mockAI);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-start">
        
        {/* Main Content */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Content Planner</h1>
              <p className="text-slate-500">Manage your cross-platform strategy.</p>
            </div>
            <button onClick={() => setShowModal(true)} className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
              <Plus size={20} /> Schedule Post
            </button>
          </div>

          <section>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Upcoming Schedule</h2>
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              {[1, 2, 3].map(i => (
                <div key={i} className="p-6 border-b last:border-0 flex items-center justify-between hover:bg-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-50 p-4 rounded-2xl"><FileText className="text-indigo-600" size={24} /></div>
                    <div>
                      <h3 className="font-bold text-slate-900">Campaign Title #{i}</h3>
                      <p className="text-sm text-slate-500">Instagram • Oct 25, 2025 at 10:00 AM</p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-100">SCHEDULED</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-4 sticky top-10 space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Connected Accounts</h3>
            <div className="space-y-4">
              {SOCIAL_PLATFORMS.map(acc => (
                <div key={acc.name} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl cursor-pointer group">
                  <div className="flex items-center gap-3 text-slate-600 group-hover:text-indigo-600">{acc.icon} {acc.name}</div>
                  <Settings size={14} className="text-slate-300 group-hover:text-slate-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200 overflow-y-auto max-h-[95vh]">
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10 pb-2 border-b border-slate-100">
              <h2 className="text-2xl font-bold">Create New Post</h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-slate-100 rounded-full transition"><X className="text-slate-400"/></button>
            </div>
            
            <div className="space-y-6">
              {/* Campaign Title */}
              <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Campaign Title</label>
                  <input type="text" placeholder="e.g. Summer Discount Campaign" className="w-full p-3 border rounded-xl bg-slate-50 focus:ring-2 ring-indigo-500 outline-none" />
              </div>

              {/* Default Content (The Fallback) */}
              <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100 space-y-4">
                <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-indigo-600 uppercase">Default Content</label>
                    <button onClick={() => generateAIContent('global')} className="text-xs flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-indigo-200 text-indigo-600 font-bold hover:bg-indigo-600 hover:text-white transition shadow-sm">
                        <Sparkles size={14}/> AI Generate
                    </button>
                </div>
                <textarea 
                    value={globalCaption}
                    onChange={(e) => setGlobalCaption(e.target.value)}
                    placeholder="This caption will be used if no platform-specific content is added." 
                    className="w-full p-4 border rounded-xl h-24 bg-white outline-none" 
                />
                <input 
                    value={globalHashtags}
                    onChange={(e) => setGlobalHashtags(e.target.value)}
                    type="text" 
                    placeholder="Default hashtags #global #post" 
                    className="w-full p-3 border rounded-xl bg-white outline-none" 
                />
              </div>

              {/* Platform Selection */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">Publish To:</p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {SOCIAL_PLATFORMS.map(p => (
                    <button 
                      key={p.id}
                      onClick={() => togglePlatform(p.id)}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-2 transition ${selectedPlatforms.includes(p.id) ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white text-slate-600'}`}
                    >
                      {p.icon} {p.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Per-Platform Content */}
              {selectedPlatforms.length > 0 && (
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <input 
                            type="checkbox" 
                            id="customToggle" 
                            className="w-4 h-4 rounded accent-indigo-600" 
                            checked={customizePerPlatform}
                            onChange={(e) => setCustomizePerPlatform(e.target.checked)}
                        />
                        <label htmlFor="customToggle" className="text-sm font-semibold text-slate-700">Write different content for each platform</label>
                    </div>

                    {customizePerPlatform && selectedPlatforms.map(platId => {
                        const platform = SOCIAL_PLATFORMS.find(p => p.id === platId);
                        return (
                        <div key={platId} className="p-4 border border-slate-200 rounded-2xl space-y-3 bg-slate-50/50">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold flex items-center gap-2 text-slate-700">{platform.icon} {platform.name}</span>
                                <button onClick={() => generateAIContent(platId)} className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-1 rounded font-bold uppercase tracking-wider">
                                    AI Adjust
                                </button>
                            </div>
                            <textarea 
                                value={platformData[platId]?.caption || ""}
                                onChange={(e) => handlePlatformDataChange(platId, 'caption', e.target.value)}
                                placeholder={`Custom caption for ${platform.name}...`} 
                                className="w-full p-3 border rounded-xl h-20 text-sm bg-white outline-none" 
                            />
                            <input 
                                value={platformData[platId]?.hashtags || ""}
                                onChange={(e) => handlePlatformDataChange(platId, 'hashtags', e.target.value)}
                                type="text" 
                                placeholder={`${platform.name} specific hashtags...`} 
                                className="w-full p-3 border rounded-xl text-sm bg-white outline-none" 
                            />
                        </div>
                        );
                    })}
                </div>
              )}

              {/* Schedule and Repeat Section */}
              <div className="border-t pt-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">First Post Date</label>
                    <input type="date" className="w-full p-3 border rounded-xl bg-slate-50 outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Post Time</label>
                    <input type="time" className="w-full p-3 border rounded-xl bg-slate-50 outline-none" />
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Repeat size={18} className="text-indigo-600"/>
                            <span className="text-sm font-bold text-slate-700">Repeat this post</span>
                        </div>
                        <button 
                            onClick={() => setIsRepeat(!isRepeat)}
                            className={`w-12 h-6 rounded-full transition-colors relative ${isRepeat ? 'bg-indigo-600' : 'bg-slate-300'}`}
                        >
                            <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all ${isRepeat ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>

                    {isRepeat && (
                        <div className="space-y-5 animate-in slide-in-from-top-2 duration-300">
                            {/* Day Selection */}
                            <div className="space-y-2">
                                <p className="text-xs font-bold text-slate-400 uppercase">Repeat every:</p>
                                <div className="flex justify-between gap-1">
                                    {DAYS.map(day => (
                                        <button 
                                            key={day}
                                            onClick={() => toggleDay(day)}
                                            className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${selectedDays.includes(day) ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200'}`}
                                        >
                                            {day[0]}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* NEW: Repeat Count Selection */}
                            <div className="space-y-2 border-t border-slate-200 pt-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-xs font-bold text-slate-400 uppercase">Repeat Limit:</p>
                                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                                        Total {repeatCount} times
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <input 
                                        type="range" 
                                        min="1" 
                                        max="30" 
                                        value={repeatCount}
                                        onChange={(e) => setRepeatCount(e.target.value)}
                                        className="flex-1 accent-indigo-600 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                                    />
                                    <input 
                                        type="number" 
                                        min="1"
                                        value={repeatCount}
                                        onChange={(e) => setRepeatCount(e.target.value)}
                                        className="w-16 p-2 text-center border rounded-lg text-sm font-bold bg-white"
                                    />
                                </div>
                                <p className="text-[10px] text-slate-400 italic text-center">Post will stop after being published {repeatCount} times on the selected days.</p>
                            </div>
                        </div>
                    )}
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex gap-3 sticky bottom-0 bg-white pt-4 border-t border-slate-100">
                <button 
                    onClick={() => setShowModal(false)}
                    className="flex-1 py-4 text-slate-500 font-bold hover:bg-slate-50 rounded-2xl transition"
                >
                    Cancel
                </button>
                <button className="flex-[2] py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition shadow-lg flex items-center justify-center gap-2">
                    Confirm Schedule
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
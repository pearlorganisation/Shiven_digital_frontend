"use client";
import React, { useState, useRef } from 'react';
import type { ChangeEvent } from 'react';
import { 
  Facebook, Instagram, Youtube, Twitter, MapPin, X, 
  Sparkles, Repeat, Layout, Image as ImageIcon, Plus 
} from 'lucide-react';

interface SocialPlatform {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface PlatformSpecificData {
  caption?: string;
  hashtags?: string;
}

interface PlatformDataState {
  [key: string]: PlatformSpecificData;
}

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { id: 'fb', name: 'Facebook', icon: <Facebook size={16} /> },
  { id: 'ig', name: 'Instagram', icon: <Instagram size={16} /> },
  { id: 'yt', name: 'YouTube', icon: <Youtube size={16} /> },
  { id: 'tw', name: 'Twitter', icon: <Twitter size={16} /> },
  { id: 'gmb', name: 'GMB', icon: <MapPin size={16} /> },
];

const DAYS: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function PostModal({ isOpen, onClose }: PostModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [globalCaption, setGlobalCaption] = useState<string>("");
  const [globalHashtags, setGlobalHashtags] = useState<string>("");
  const [customizePerPlatform, setCustomizePerPlatform] = useState<boolean>(false);
  const [platformData, setPlatformData] = useState<PlatformDataState>({});
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [repeatCount, setRepeatCount] = useState<number>(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newImages = files.map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number): void => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const togglePlatform = (id: string): void => {
    setSelectedPlatforms(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleDay = (day: string): void => {
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handlePlatformDataChange = (id: string, field: keyof PlatformSpecificData, value: string): void => {
    setPlatformData(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const generateAIContent = (platformId: string = 'global'): void => {
    const mockAI = "✨ AI Generated: This is an amazing post optimized for your audience! #Growth #Success";
    if (platformId === 'global') {
      setGlobalCaption(mockAI);
    } else {
      handlePlatformDataChange(platformId, 'caption', mockAI);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh]">
        <div className="px-8 py-2 border-b border-slate-100 flex justify-between items-center bg-white rounded-t-3xl z-20">
          <h2 className="text-xl font-bold text-slate-800">Create New Post</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition">
            <X className="text-slate-400"/>
          </button>
        </div>
        
        <div className="p-8 overflow-y-auto flex-1 space-y-6">
          <div className="space-y-2 text-left">
              <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
                <Layout size={14} /> Select Template
              </label>
              <select 
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-full p-3 border rounded-xl bg-slate-50 focus:ring-2 ring-indigo-500 outline-none appearance-none"
              >
                <option value="">No Template (Manual Post)</option>
                <option value="promo">Promotional Offer</option>
                <option value="event">Event Announcement</option>
                <option value="news">Product Update</option>
              </select>
          </div>

          <div className="space-y-2 text-left">
              <label className="text-xs font-bold text-slate-400 uppercase">Campaign Title</label>
              <input type="text" placeholder="e.g. Summer Discount Campaign" className="w-full p-3 border rounded-xl bg-slate-50 outline-none" />
          </div>

          <div className="space-y-3 text-left">
            <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
              <ImageIcon size={14} /> Post Media
            </label>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-slate-200">
                  <img src={img} alt="preview" className="w-full h-full object-cover" />
                  <button onClick={() => removeImage(idx)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow-lg">
                    <X size={12} />
                  </button>
                </div>
              ))}
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="aspect-square rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-indigo-400 hover:text-indigo-400 transition bg-slate-50"
              >
                <Plus size={24} />
                <span className="text-[10px] font-bold">Add Image</span>
              </button>
            </div>
            <input type="file" hidden ref={fileInputRef} multiple accept="image/*" onChange={handleImageUpload} />
          </div>

          <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100 space-y-4 text-left">
            <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-indigo-600 uppercase">Default Content</label>
                <button onClick={() => generateAIContent('global')} className="text-xs flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-indigo-200 text-indigo-600 font-bold hover:bg-indigo-600 hover:text-white transition">
                    <Sparkles size={14}/> AI Generate
                </button>
            </div>
            <textarea 
                value={globalCaption}
                onChange={(e) => setGlobalCaption(e.target.value)}
                placeholder="Caption..." 
                className="w-full p-4 border rounded-xl h-24 bg-white outline-none" 
            />
            <input 
                value={globalHashtags}
                onChange={(e) => setGlobalHashtags(e.target.value)}
                type="text" 
                placeholder="#hashtags" 
                className="w-full p-3 border rounded-xl bg-white outline-none" 
            />
          </div>

          <div className="text-left">
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

          {selectedPlatforms.length > 0 && (
            <div className="space-y-4 text-left">
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
                    if (!platform) return null;
                    return (
                    <div key={platId} className="p-4 border border-slate-200 rounded-2xl space-y-3 bg-slate-50/50">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-bold flex items-center gap-2 text-slate-700">{platform.icon} {platform.name}</span>
                        </div>
                        <textarea 
                            value={platformData[platId]?.caption || ""}
                            onChange={(e) => handlePlatformDataChange(platId, 'caption', e.target.value)}
                            className="w-full p-3 border rounded-xl h-20 text-sm bg-white outline-none" 
                        />
                    </div>
                    );
                })}
            </div>
          )}

          <div className="border-t pt-6 space-y-5 text-left">
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="w-full p-3 border rounded-xl bg-slate-50 outline-none" />
              <input type="time" className="w-full p-3 border rounded-xl bg-slate-50 outline-none" />
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Repeat size={18} className="text-indigo-600"/>
                        <span className="text-sm font-bold text-slate-700">Repeat this post</span>
                    </div>
                    <button 
                        onClick={() => setIsRepeat(!isRepeat)}
                        className={`w-12 h-6 rounded-full relative ${isRepeat ? 'bg-indigo-600' : 'bg-slate-300'}`}
                    >
                        <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all ${isRepeat ? 'left-7' : 'left-1'}`} />
                    </button>
                </div>

                {isRepeat && (
                    <div className="space-y-5">
                        <div className="flex justify-between gap-1">
                            {DAYS.map(day => (
                                <button key={day} onClick={() => toggleDay(day)} className={`flex-1 py-2 rounded-lg text-xs font-bold ${selectedDays.includes(day) ? 'bg-indigo-600 text-white' : 'bg-white text-slate-400 border border-slate-200'}`}>
                                    {day[0]}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="range" min="1" max="30" value={repeatCount} onChange={(e) => setRepeatCount(Number(e.target.value))} className="flex-1" />
                            <input type="number" value={repeatCount} onChange={(e) => setRepeatCount(Number(e.target.value))} className="w-16 p-2 text-center border rounded-lg" />
                        </div>
                    </div>
                )}
            </div>
          </div>
        </div>
        
        <div className="px-8 py-2 border-t border-slate-100 bg-white flex gap-3 rounded-b-3xl">
            <button onClick={onClose} className="flex-1 py-4 text-slate-500 font-bold hover:bg-slate-50 rounded-2xl">Cancel</button>
            <button className="flex-[2] py-4 bg-indigo-600 text-white rounded-xl font-bold">Confirm Schedule</button>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { User, Briefcase, History } from "lucide-react";
import PersonalInfo from "./PersonalInfo";
import ExperienceSection from "./ExperienceSection";
import ProfessionalInfo from "./ProfessionalInfo";

const ProfileTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "professional", label: "Professional", icon: Briefcase },
    { id: "experience", label: "Experience", icon: History },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Account Settings</h1>
      
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-lg transition-all ${
              activeTab === tab.id 
                ? "bg-white text-indigo-600 shadow-sm" 
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        {activeTab === "personal" && <PersonalInfo />}
        {activeTab === "professional" && <ProfessionalInfo />}
        {activeTab === "experience" && <ExperienceSection />}
      </div>
    </div>
  );
};

export default ProfileTabs;
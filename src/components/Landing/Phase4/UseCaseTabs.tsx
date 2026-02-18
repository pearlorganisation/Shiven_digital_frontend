import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, User, Briefcase, Building2 } from 'lucide-react';
import type { SectionContent } from './TestType';


interface UseCaseTabsProps {
  useCases: SectionContent[];
}

export const UseCaseTabs: React.FC<UseCaseTabsProps> = ({ useCases }) => {
  const [activeTabId, setActiveTabId] = useState(useCases[0].id);

  const activeContent = useCases.find(uc => uc.id === activeTabId) || useCases[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'creators': return <User className="w-4 h-4" />;
      case 'small-business': return <Briefcase className="w-4 h-4" />;
      case 'agencies': return <Building2 className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const getTabLabel = (id: string) => {
    switch (id) {
      case 'creators': return 'Creators';
      case 'small-business': return 'Small Business';
      case 'agencies': return 'Agencies';
      default: return id;
    }
  };

  return (
    <section className="py-10 bg-gray-50 border-t border-gray-100" id="solutions">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
            Tailored for your growth
          </h2>
          
          {/* Tabs Navigation */}
          <div className="inline-flex p-1.5 bg-white rounded-xl border border-gray-200 shadow-sm mx-auto overflow-x-auto max-w-full">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTabId(useCase.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  activeTabId === useCase.id
                    ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-200'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {getIcon(useCase.id)}
                {getTabLabel(useCase.id)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Card */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 transition-all duration-300">
          
          {/* Upper Section: Text & Image */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            
            {/* Text Side */}
            <div className="flex-1 space-y-6 self-center">
              <div className="space-y-3">
                <h3 className="text-blue-600 font-bold uppercase tracking-wider text-sm">
                  {activeContent.subHeadline}
                </h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {activeContent.headline}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {activeContent.body}
                </p>
              </div>

              <div className="pt-2 hidden lg:block">
                 <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200">
                    Start Scaling
                    <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full lg:max-w-[50%]">
               <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-video shadow-lg border border-gray-100">
                  <img 
                    src={activeContent.imageSrc} 
                    alt={activeContent.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none"></div>
               </div>
            </div>

          </div>

          {/* Lower Section: Features Grid */}
          {activeContent.points && (
            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 animate-fade-in">
               {activeContent.points.map((point, idx) => (
                 <div key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium leading-snug">{point.text}</span>
                 </div>
               ))}
            </div>
          )}
          
          {/* Mobile Button */}
          <div className="pt-8 lg:hidden">
             <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                Start Scaling
                <ArrowRight className="w-4 h-4" />
             </button>
          </div>

        </div>
        
      </div>
    </section>
  );
};

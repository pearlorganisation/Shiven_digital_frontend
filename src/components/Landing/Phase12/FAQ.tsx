import React, { useState, useRef } from 'react';
// import { gsap } from 'gsap';
import { Plus, Minus, HelpCircle } from 'lucide-react';

// --- DYNAMIC DATA: EXACTLY AS PROVIDED ---
const FAQ_LIST = [
  {
    q: "Do I need technical skills to use the platform?",
    a: "Not at all! Our tools are beginner-friendly and designed to be simple, even if you’ve never run a campaign before."
  },
  {
    q: "Can I manage multiple social accounts?",
    a: "Yes. You can connect multiple accounts across platforms and manage them from one dashboard."
  },
  {
    q: "Is the free plan really free forever?",
    a: "Yes. Our free plan gives you access to essential tools with no hidden charges. You can upgrade anytime for advanced features."
  },
  {
    q: "Can agencies manage client campaigns separately?",
    a: "Absolutely. With multi-account access and role-based permissions, agencies can manage clients securely and efficiently."
  },
  {
    q: "Do you provide analytics and reporting?",
    a: "Yes. You can track conversion, engagement, and performance metrics, and export branded reports in PDF/Excel as well."
  },
  {
    q: "Does it support WhatsApp and SMS marketing?",
    a: "Yes, you can send personalized bulk SMS and WhatsApp campaigns directly from the platform."
  },
  {
    q: "If I need help, will I have customer support?",
    a: "Absolutely. Our support team is available 24/7 through chat and email to help you whenever you need it."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={containerRef} className="bg-[#FFFEFA] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header - Scaled Down for Premium Feel */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F6ED4]/10 text-[#1F6ED4] mb-4">
            <HelpCircle size={14} />
            <span className="text-[10px] font-bold uppercase tracking-wider">FAQ’s</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1E1E1E]">Common Questions</h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => (
            <div 
              key={index}
              className={`group border transition-all duration-300 rounded-2xl overflow-hidden ${
                activeIndex === index 
                  ? 'bg-white border-[#1F6ED4] shadow-md' 
                  : 'bg-[#F5F7FA]/50 border-[#E9ECEF] hover:border-gray-300'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
              >
                <span className={`text-base font-bold pr-4 ${
                  activeIndex === index ? 'text-[#1F6ED4]' : 'text-[#1E1E1E]'
                }`}>
                  <span className="opacity-30 mr-3 text-sm font-black">{index + 1}.</span>
                  {faq.q}
                </span>
                
                <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  activeIndex === index ? 'bg-[#1F6ED4] text-white rotate-180' : 'bg-gray-200 text-gray-500'
                }`}>
                  {activeIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              {/* Transition logic using basic height control for smoothness */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0 ml-8 border-l-2 border-[#1F6ED4]/10">
                  <p className="text-sm text-[#6C757D] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Footer text preserved exactly */}
        <div className="mt-12 text-center">
            <p className="text-xs font-bold text-[#6C757D] opacity-60">
              Shiven Digital Support Hub • Available 24/7
            </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
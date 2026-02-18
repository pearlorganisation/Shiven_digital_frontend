import React from 'react';
import { ChevronRight, Star } from 'lucide-react';

export const CollaborateHero: React.FC = () => {
  return (
    <div className="relative  overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-60"></div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium mb-6 shadow-sm hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default">
          <span className="flex items-center gap-1 text-yellow-500">
             <Star className="w-3.5 h-3.5 fill-current" />
             <Star className="w-3.5 h-3.5 fill-current" />
             <Star className="w-3.5 h-3.5 fill-current" />
             <Star className="w-3.5 h-3.5 fill-current" />
             <Star className="w-3.5 h-3.5 fill-current" />
          </span>
          <span className="w-px h-3 bg-gray-200 mx-1"></span>
          <span>Trusted by 10,000+ creators</span>
        </div>

        <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
          One Platform to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-600">
            Scale Without Limits
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
          From solo creators to global agencies. Automate, collaborate, and grow your audience with the most powerful social media suite for 2025.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5 w-full sm:w-auto">
            Get Started Free
          </button>
          <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto hover:border-gray-300 hover:text-blue-600">
            View Pricing
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
          </button>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="relative mx-auto max-w-5xl group perspective-1000">
            <div className="rounded-2xl border border-gray-200/60 bg-white/50 backdrop-blur-sm p-3 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.01]">
                <img 
                    src="https://picsum.photos/1200/600" 
                    alt="Platform Dashboard" 
                    className="rounded-xl w-full h-auto object-cover shadow-sm bg-gray-50"
                    loading="eager"
                />
            </div>
            
            {/* Floating Elements for 3D effect */}
            <div className="absolute -right-12 top-20 hidden lg:block animate-float-slow">
               <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">AI</div>
                     <div>
                        <div className="text-xs font-bold text-gray-900">Post Optimized</div>
                        <div className="text-[10px] text-gray-500">Ready to schedule</div>
                     </div>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-[92%]"></div>
                  </div>
               </div>
            </div>

            <div className="absolute -left-8 bottom-10 hidden lg:block animate-float-reverse">
               <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex -space-x-2">
                     {[1,2,3].map(i => (
                       <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 bg-[url('https://i.pravatar.cc/100?img=${i+10}')] bg-cover`}></div>
                     ))}
                     <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">+5</div>
                  </div>
                  <div className="mt-2 text-center text-xs font-semibold text-gray-600">Team Active</div>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};
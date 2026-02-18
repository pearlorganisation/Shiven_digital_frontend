import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { 
  PenTool, 
  CheckCircle2, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Share2,
  Bot
} from 'lucide-react';


export const FEATURE_TABS = [
  {
    id: 'creation',
    label: 'Content Creation',
    icon: PenTool,
    title: 'Create with Powerful Content Creation Tools',
    subtitle: 'Transform ideas into full-fledged marketing campaigns',
    description: "Creating is not just about posting; it is about building a message that engages, converts, and is consistent across all platforms that your brand has. Our creation tools allow you to create high-value marketing content without a design or tech skill set.\n\nFrom the concept of the campaigns to the promotional messages, emails, SMS, WhatsApp Broadcasts, to the ad creatives, everything is created from here. Using the help of AI, you can go from a concept to a fully fledged campaign in a matter of minutes.\n\nOur content engine knows the nuances of tone, the subtleties of intent, and the ways of audience behavior, making your messages human, relevant, and engaging. Whether it’s a new product launch, a seasonal offer, or a relationship-building exercise with existing clients, the act of creation gets smarter and faster. No blank pages. No creative blocks.",
    points: [
      'Marketing messages for WhatsApp, SMS, and Email campaigns',
      'Creating conversion-oriented and persuasive ad copy and promotion copy',
      'Branded Captions, Description and Call-to-Actions',
      'Tailored campaign ideas for your audience segments',
      'Visually ready content with intelligent formatting advice',
      'Reusable content blocks to ensure brand consistency'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'scheduling',
    label: 'Publishing',
    icon: Share2,
    title: 'Publish with an All-In-One Social Media Scheduler',
    subtitle: 'The most complete set of publishing integrations, ever',
    description: "Publish and schedule posts across all your favorite platforms ; Facebook, Instagram, Twitter, LinkedIn, YouTube, Pinterest, and Google My Business. Whether you need social media scheduler software for social media, we’ve got you covered.\n\nYou can automate social media posts effortlessly with our platform, and also can explore more flexible options for it. Our automated social media posting tools make it simple for anyone to get started, while advanced users can leverage AI automated social media posting or an automated social media post generator for maximum efficiency.",
    points: [
      'Manual, scheduled, and automated social media posting',
      'Multi-platform one-click posting with cross posting platforms',
      'Hashtag generator and tracker with audience tracking tools',
      'Media auto-resizing for each platform'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    title: 'Track Performance with a Powerful Social Media Analytics Platform',
    subtitle: 'Smarter insights for every platform',
    description: "Track, measure, and optimize your performance across all social media channels in one unified dashboard. No more switching between apps or piecing together scattered reports ; get a complete view of what’s working and where to improve.\n\nCompare post performance and audience trends to identify top-performing content. Discover the best times to post with AI-powered recommendations. Export branded reports in PDF or Excel for teams, clients, or stakeholders. If you are competing in a large market, use our social media competitor analysis tools that are designed mainly to help you identify gaps and also strengthen your strategy.",
    points: [
      'Monitor engagement, reach, clicks, and conversions with an engagement rate tracker',
      'Learn how to track Instagram engagement rate effectively',
      'Generate a detailed campaign performance report',
      'Stay ahead with audience tracking and audience tracking tools',
      'Leverage the best AI-driven ad audience tracking software for paid campaigns'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    icon: Bot,
    title: 'AI Tools – Smarter Content, Scheduling & Analytics',
    subtitle: 'Complete control over the content and performance',
    description: "Our solutions are designed to make the handling of social media easier while providing complete control over the content and performance. You can handle different platforms at once while planning, generating, scheduling, and analyzing everything using a single dashboard.\n\nThe availability of professional tools for creating engaging and high-quality content and an AI-based content generator makes it even faster and easier for you to produce high-quality social media content. From idea conceptualization for your articles to creating content with AI, our tool can help you with AI-based content creation that matches your brand tone.",
    points: [
      'AI-Powered Content Creation & Strategy',
      'Smart Planning & Scheduling tool',
      'Social Media Management with AI Power Assistance',
      'Social Media Performance Tracking & Insights'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'collaboration',
    label: 'Collaboration',
    icon: Users,
    title: 'Collaborate Seamlessly Across Your Team',
    subtitle: 'Great content, created together',
    description: "Bring your team on board — assign roles, set approvals, share notes, and work seamlessly with role-based access. Collaboration made simple, whether you’re working on bulk campaigns or leveraging affordable social media schedulers, bulk posting 2025 solutions for clients.",
    points: [
      'Assign roles, set approvals, share notes',
      'Work seamlessly with role-based access',
      'Collaboration made simple for bulk campaigns',
      'Manage multiple client accounts securely'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'engagement',
    label: 'Engagement',
    icon: MessageSquare,
    title: 'Engage Your Audience Instantly',
    subtitle: 'Reply to comments in a flash',
    description: "Manage all your customer conversations in one place with our Unified Inbox. Reply to comments, DMs, and mentions instantly across platforms. Whether for dealing with customers or engaging with your fans, you remain responsive and connected.",
    points: [
      'Social media bulk scheduling ensures replies and posts go out on time',
      'Handle automated dm reply on Instagram or twitter automated dm reply effortlessly',
      'Use a smart reply generator to save time',
      'Streamline social media inbox management',
      'Automate customer care with the best AI chatbot for social media'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
  }
];

const MultiFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState(FEATURE_TABS[0].id);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // Animation when tab changes
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: "all" }
      );
    }
  }, [activeTab]);

  const activeFeature = FEATURE_TABS.find(f => f.id === activeTab) || FEATURE_TABS[0];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
             <div className="absolute top-1/4 -left-64 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">One Platform – Multiple Solutions</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Seamlessly integrate and manage every facet of your business with AI at its core.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FEATURE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === tab.id
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div ref={containerRef} className="bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-2xl shadow-slate-200/50 transition-all duration-500">
          <div ref={contentRef} className="flex flex-col gap-10">
            
            {/* Top Section: Description + Image */}
            <div className="flex flex-col lg:flex-row gap-10 items-start">
                
                {/* Description Column */}
                <div className="flex-1 w-full order-2 lg:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">{activeFeature.title}</h3>
                    <h4 className="text-indigo-600 font-medium text-lg mb-6">{activeFeature.subtitle}</h4>
                    
                    <div className="text-slate-600 leading-relaxed text-base space-y-4 whitespace-pre-line">
                        {activeFeature.description}
                    </div>
                </div>

                {/* Image Column */}
                <div className="flex-1 w-full lg:max-w-[45%] order-1 lg:order-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-slate-200 bg-slate-100 group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                        <img 
                            src={activeFeature.image} 
                            alt={activeFeature.title}
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                         {/* Floating Icon Badge */}
                        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-xl flex items-center justify-center border border-slate-100 shadow-xl z-20">
                            <activeFeature.icon className="w-6 h-6 text-indigo-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Feature Points Grid */}
            <div className="w-full bg-slate-50 rounded-2xl p-6 border border-slate-100">
                 <h5 className="text-slate-900 font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">What you can create/do easily:</h5>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeFeature.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
                            <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-sm font-medium leading-snug">{point}</span>
                        </div>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiFeatures;
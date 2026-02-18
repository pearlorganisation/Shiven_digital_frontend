import type { SectionContent } from "./TestType";

export const CORE_FEATURES: SectionContent[] = [
  {
    id: 'collaboration',
    headline: 'Collaborate Seamlessly Across Your Team',
    subHeadline: 'Great content, created together',
    body: 'Bring your team on board — assign roles, set approvals, share notes, and work seamlessly with role-based access. Collaboration made simple, whether you’re working on bulk campaigns or leveraging affordable social media schedulers, bulk posting 2025 solutions for clients.',
    imageSrc: 'https://picsum.photos/800/600?random=1',
    imageAlt: 'Team collaboration dashboard',
    reversed: false,
    theme: 'light',
  },
  {
    id: 'engagement',
    headline: 'Engage Your Audience Instantly',
    subHeadline: 'Reply to comments in a flash',
    body: 'Manage all your customer conversations in one place with our Unified Inbox. Reply to comments, DMs, and mentions instantly across platforms.',
    imageSrc: 'https://picsum.photos/800/600?random=2',
    imageAlt: 'Mobile engagement interface',
    reversed: true,
    theme: 'light',
    points: [
      { text: 'Social media bulk scheduling and bulk scheduling on social media ensures replies and posts go out on time' },
      { text: 'Handle automated dm reply on Instagram or twitter automated dm reply effortlessly' },
      { text: 'Use a smart reply generator to save time' },
      { text: 'Streamline social media inbox management' },
      { text: 'Automate customer care with the best AI chatbot for social media' },
    ]
  }
];

export const USE_CASES: SectionContent[] = [
  {
    id: 'creators',
    headline: 'Empower Creators to Grow Faster',
    subHeadline: 'Grow from zero → one → one million',
    body: 'Whether you’re just getting started on your creator journey or scaling your audience to new heights, our platform helps you put your content in front of more people.',
    imageSrc: 'https://picsum.photos/800/600?random=3',
    imageAlt: 'Content creator tools',
    reversed: false,
    theme: 'light',
    points: [
      { text: 'Save every idea instantly in the media library' },
      { text: 'Use an AI content repurposing tool to transform one post to many.' },
      { text: 'Try the best tools for repurposing content across social platforms automatically' },
      { text: 'Optimize visuals with a video thumbnail optimization platform' },
      { text: 'Automate feedback with automated review replies' },
      { text: 'Schedule once, cross-post everywhere — Instagram, X, YouTube, LinkedIn & more' },
      { text: 'Get insights on what content works best and why with customer engagement metrics' },
    ]
  },
  {
    id: 'small-business',
    headline: 'Small Businesses – Grow',
    subHeadline: 'From your first customer → to thousands more',
    body: 'Running a business means juggling time and resources. With our tools, you can market smarter, stay connected, and keep growing.',
    imageSrc: 'https://picsum.photos/800/600?random=4',
    imageAlt: 'Small business growth chart',
    reversed: false,
    theme: 'light',
    points: [
      { text: 'WhatsApp & SMS marketing with bulk personalization' },
      { text: 'Simple CRM & contact management to organize customers' },
      { text: 'Send engaging email campaigns with open/click analytics' },
      { text: 'Stay on track with a calendar & task scheduler' },
      { text: 'Segment audiences with our audience segmentation tools to target the right customers effectively.' },
      { text: 'Leverage AI audience segmentation tools for deeper personalization and smarter insights.' },
    ]
  },
  {
    id: 'agencies',
    headline: 'Agencies – Scale Without Limits',
    subHeadline: 'Scale client campaigns without limits',
    body: 'Agencies need flexibility, collaboration, and results. Manage multiple accounts, track analytics, and deliver more value to clients — all in one place.',
    imageSrc: 'https://picsum.photos/800/600?random=5',
    imageAlt: 'Agency multi-account dashboard',
    reversed: false,
    theme: 'light',
    points: [
      { text: 'Multi-account & role-based access for teams and clients' },
      { text: 'Centralized Unified Inbox to manage all DMs, comments, and mentions' },
      { text: 'Exportable analytics & reports (PDF/Excel) for client updates' },
      { text: 'Sell and manage SMS, WhatsApp, email packs with billing history' },
      { text: 'Create better campaigns with caption generator, instagram caption generator, and the best image optimization tools' },
    ]
  }
];

export const SECTION_DATA = [...CORE_FEATURES, ...USE_CASES]; // Backward compatibility if needed

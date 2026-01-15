import React from 'react';
import {
  CalendarIcon,
  TagIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
  DevicePhoneMobileIcon,
  UsersIcon,
  InboxStackIcon,
  FolderIcon,
  TicketIcon,
  LinkIcon,
  BellAlertIcon,
  LightBulbIcon,
  Cog6ToothIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

interface DashboardProps {
  planExpiration: string;
  totalPosts: number;
  totalCampaigns: number;
  totalBrands: number;
  totalEmails: number;
  totalWhatsAppMessages: number;
  totalSMS: number;
  totalWhatsAppContacts: number;
  totalContacts: number;
  aiListings: string[];
  totalFiles: number;
  totalTickets: number;
  connectedAccounts: number;
  recentAnnouncements: { title: string; date: string }[];
}

const StatCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.ElementType;
}> = ({ title, value, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-sm p-5 flex items-center space-x-4 hover:shadow-md transition-shadow">
    <div className="p-3 bg-gray-100 rounded-lg">
      <Icon className="w-6 h-6 text-gray-700" />
    </div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const Dashboard: React.FC<DashboardProps> = ({
  planExpiration,
  totalPosts,
  totalCampaigns,
  totalBrands,
  totalEmails,
  totalWhatsAppMessages,
  totalSMS,
  totalWhatsAppContacts,
  totalContacts,
  aiListings,
  totalFiles,
  totalTickets,
  connectedAccounts,
  recentAnnouncements,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700">Marketing Hub</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            <PlusIcon className="w-4 h-4 mr-2" />
            New Campaign
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <Cog6ToothIcon className="w-4 h-4 mr-2" />
            Settings
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-6 space-y-10">
        {/* Stat Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Plan Expires" value={planExpiration} icon={CalendarIcon} />
          <StatCard title="Total Brands" value={totalBrands} icon={TagIcon} />
          <StatCard title="Total Posts" value={totalPosts} icon={PencilSquareIcon} />
          <StatCard title="Total Campaigns" value={totalCampaigns} icon={RocketLaunchIcon} />
          <StatCard title="Total Emails" value={totalEmails} icon={EnvelopeIcon} />
          <StatCard title="WhatsApp Messages" value={totalWhatsAppMessages} icon={ChatBubbleBottomCenterTextIcon} />
          <StatCard title="Total SMS" value={totalSMS} icon={DevicePhoneMobileIcon} />
          <StatCard title="WhatsApp Contacts" value={totalWhatsAppContacts} icon={UsersIcon} />
          <StatCard title="Total Contacts" value={totalContacts} icon={InboxStackIcon} />
          <StatCard title="Total Files" value={totalFiles} icon={FolderIcon} />
          <StatCard title="Total Tickets" value={totalTickets} icon={TicketIcon} />
          <StatCard title="Connected Accounts" value={connectedAccounts} icon={LinkIcon} />
        </section>

        {/* AI Listings & Recent Announcements */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Listings */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-indigo-700 flex items-center mb-5">
              <LightBulbIcon className="w-6 h-6 mr-2 text-yellow-500" /> AI-Generated Content
            </h2>
            {aiListings.length ? (
              <ul className="space-y-3">
                {aiListings.map((item, idx) => (
                  <li key={idx} className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                    <span>{item}</span>
                    <button className="text-indigo-600 text-sm hover:underline">Edit</button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-10 text-gray-400">
                <LightBulbIcon className="w-12 h-12 mx-auto mb-4" />
                <p>No AI-generated content yet.</p>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Generate Content
                </button>
              </div>
            )}
          </div>

          {/* Recent Announcements */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-indigo-700 flex items-center mb-5">
              <BellAlertIcon className="w-6 h-6 mr-2 text-red-500" /> Recent Announcements
            </h2>
            {recentAnnouncements.length ? (
              <ul className="space-y-4">
                {recentAnnouncements.map((ann, idx) => (
                  <li key={idx} className="flex flex-col">
                    <p className="font-medium text-gray-800">{ann.title}</p>
                    <p className="text-sm text-gray-500">{ann.date}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-center py-10">No recent announcements.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};


const UserDashboard: React.FC = () => (
  <Dashboard
    planExpiration="2025-12-31"
    totalPosts={150}
    totalCampaigns={12}
    totalBrands={5}
    totalEmails={3200}
    totalWhatsAppMessages={450}
    totalSMS={1200}
    totalWhatsAppContacts={800}
    totalContacts={5000}
    totalFiles={45}
    totalTickets={3}
    connectedAccounts={7}
    aiListings={[
      'Campaign Idea #1: Summer Sales Blast',
      'Email Template #2: Welcome Series',
      'Social Post Draft #3: New Product Launch',
    ]}
    recentAnnouncements={[
      { title: 'New Feature: Enhanced Analytics Dashboard', date: '2025-09-20' },
      { title: 'Scheduled Maintenance', date: '2025-09-15' },
      { title: 'Webinar: Mastering AI Content Generation', date: '2025-09-10' },
    ]}
  />
);

export default UserDashboard;

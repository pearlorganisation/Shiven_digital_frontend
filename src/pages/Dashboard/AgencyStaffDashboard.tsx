import React from 'react';
import {
  BuildingOfficeIcon,
  UsersIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  ChartBarIcon,
  PencilSquareIcon,
  PhoneIcon,
  GlobeAltIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const AgencyStaffDashboard: React.FC = () => {
  
  const totalBrands = 15;
  const totalUsers = 45;
  const assignedTasks = 8;
  const totalEmailsSent = 120;
  const totalSMS = 50;
  const totalWhatsApp = 30;
  const upcomingTasks = [
    { task: 'Draft Email for Brand X', due: '2025-10-05', assignedBy: 'Manager' },
    { task: 'Post Update for Brand Y', due: '2025-10-06', assignedBy: 'Supervisor' },
    { task: 'Generate AI Content for Z', due: '2025-10-07', assignedBy: 'Team Lead' },
  ];
  const postAnalytics = [
    { campaign: 'Brand X Promo', reach: '5000', engagement: '15%' },
    { campaign: 'Brand Y Launch', reach: '3000', engagement: '10%' },
    { campaign: 'Brand Z Update', reach: '2000', engagement: '8%' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <ChartBarIcon className="h-8 w-8 mr-2 text-blue-600" />
        Agency Staff Dashboard
      </h1>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Brands */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <BuildingOfficeIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold">Total Brands</h2>
          </div>
          <p className="text-4xl font-bold">{totalBrands}</p>
          <p className="text-sm text-gray-500">Assigned to manage</p>
        </div>

        {/* Total Users */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <UsersIcon className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-lg font-semibold">Total Users</h2>
          </div>
          <p className="text-4xl font-bold">{totalUsers}</p>
          <p className="text-sm text-gray-500">Associated with brands</p>
        </div>

        {/* Assigned Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <CalendarIcon className="h-6 w-6 text-yellow-600 mr-2" />
            <h2 className="text-lg font-semibold">Assigned Tasks</h2>
          </div>
          <p className="text-4xl font-bold">{assignedTasks}</p>
          <p className="text-sm text-gray-500">Pending completion</p>
        </div>

        {/* Messages Sent */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <EnvelopeIcon className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-lg font-semibold">Messages Sent</h2>
          </div>
          <p className="text-4xl font-bold">{totalEmailsSent + totalSMS + totalWhatsApp}</p>
          <p className="text-sm text-gray-500">{totalEmailsSent} emails | {totalSMS} SMS | {totalWhatsApp} WhatsApp</p>
        </div>
      </div>

      {/* Additional Sections Inspired by Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <CalendarIcon className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-lg font-semibold">Upcoming Tasks</h2>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Task</th>
                <th className="py-2">Due Date</th>
                <th className="py-2">Assigned By</th>
              </tr>
            </thead>
            <tbody>
              {upcomingTasks.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{item.task}</td>
                  <td className="py-2">{item.due}</td>
                  <td className="py-2">{item.assignedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">Check Tasks section for details.</p>
        </div>

        {/* Post Analytics */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <ChartBarIcon className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold">Post Analytics</h2>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Campaign</th>
                <th className="py-2">Reach</th>
                <th className="py-2">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {postAnalytics.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{item.campaign}</td>
                  <td className="py-2">{item.reach}</td>
                  <td className="py-2">{item.engagement}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">View detailed analytics in Post Analytics section.</p>
        </div>
      </div>

      {/* Quick Links to Sidebar Sections */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <a href="/my-brands" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200">
            <BuildingOfficeIcon className="h-6 w-6 mx-auto mb-2" />
            My Brands
          </a>
          <a href="/files-folders" className="bg-green-100 p-4 rounded-lg text-center hover:bg-green-200">
            <DocumentTextIcon className="h-6 w-6 mx-auto mb-2" />
            Files & Folders
          </a>
          <a href="/queries-tickets" className="bg-yellow-100 p-4 rounded-lg text-center hover:bg-yellow-200">
            <ChatBubbleLeftRightIcon className="h-6 w-6 mx-auto mb-2" />
            Queries & Tickets
          </a>
          <a href="/announcements" className="bg-purple-100 p-4 rounded-lg text-center hover:bg-purple-200">
            <GlobeAltIcon className="h-6 w-6 mx-auto mb-2" />
            Announcements
          </a>
          <a href="/training" className="bg-indigo-100 p-4 rounded-lg text-center hover:bg-indigo-200">
            <PencilSquareIcon className="h-6 w-6 mx-auto mb-2" />
            Training
          </a>
          <a href="/manage-users" className="bg-red-100 p-4 rounded-lg text-center hover:bg-red-200">
            <UsersIcon className="h-6 w-6 mx-auto mb-2" />
            Manage Users
          </a>
          <a href="/email-marketing" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200">
            <EnvelopeIcon className="h-6 w-6 mx-auto mb-2" />
            Email Marketing
          </a>
          <a href="/posting" className="bg-green-100 p-4 rounded-lg text-center hover:bg-green-200">
            <PencilSquareIcon className="h-6 w-6 mx-auto mb-2" />
            Posting
          </a>
          <a href="/sms-marketing" className="bg-yellow-100 p-4 rounded-lg text-center hover:bg-yellow-200">
            <PhoneIcon className="h-6 w-6 mx-auto mb-2" />
            SMS Marketing
          </a>
          <a href="/whatsapp-messaging" className="bg-purple-100 p-4 rounded-lg text-center hover:bg-purple-200">
            <ChatBubbleLeftRightIcon className="h-6 w-6 mx-auto mb-2" />
            WhatsApp Messaging
          </a>
          <a href="/ai-content-generation" className="bg-indigo-100 p-4 rounded-lg text-center hover:bg-indigo-200">
            <CogIcon className="h-6 w-6 mx-auto mb-2" />
            AI Content Generation
          </a>
          <a href="/tasks" className="bg-red-100 p-4 rounded-lg text-center hover:bg-red-200">
            <CalendarIcon className="h-6 w-6 mx-auto mb-2" />
            Tasks
          </a>
          <a href="/post-analytics" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200">
            <ChartBarIcon className="h-6 w-6 mx-auto mb-2" />
            Post Analytics
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgencyStaffDashboard;
import React from 'react';
import {
  UserIcon,
  UsersIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  CalendarIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const AdminDashboard: React.FC = () => {
  
  const totalUsers = 1234;
  const userStaff = 56;
  const totalAgencies = 78;
  const agencyStaff = 210;
  const totalEarnings = 456789.99;
  const totalMails = 320;
  const totalMessages = 1450;
  const upcomingExpirations = [
    { user: 'John Doe', plan: 'Premium', expiration: '2025-10-15' },
    { user: 'Jane Smith', plan: 'Basic', expiration: '2025-10-20' },
    { user: 'Agency XYZ', plan: 'Enterprise', expiration: '2025-11-05' },
  ];
  const mostUsedPlatforms = [
    { platform: 'Web', usage: '65%' },
    { platform: 'Mobile App', usage: '25%' },
    { platform: 'Desktop', usage: '10%' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <ChartBarIcon className="h-8 w-8 mr-2 text-blue-600" />
        Admin Dashboard
      </h1>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Users */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <UsersIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold">Total Users</h2>
          </div>
          <p className="text-4xl font-bold">{totalUsers}</p>
          <p className="text-sm text-gray-500">Including {userStaff} staff members</p>
        </div>

        {/* Total Agencies */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <BuildingOfficeIcon className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-lg font-semibold">Total Agencies</h2>
          </div>
          <p className="text-4xl font-bold">{totalAgencies}</p>
          <p className="text-sm text-gray-500">With {agencyStaff} staff members</p>
        </div>

        {/* Total Earnings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <CurrencyDollarIcon className="h-6 w-6 text-yellow-600 mr-2" />
            <h2 className="text-lg font-semibold">Total Earnings</h2>
          </div>
          <p className="text-4xl font-bold">${totalEarnings.toLocaleString()}</p>
          <p className="text-sm text-gray-500">All time</p>
        </div>

        {/* Mails and Messages */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <EnvelopeIcon className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-lg font-semibold">Communications</h2>
          </div>
          <p className="text-4xl font-bold">{totalMails + totalMessages}</p>
          <p className="text-sm text-gray-500">{totalMails} mails | {totalMessages} messages</p>
        </div>
      </div>

      {/* Additional Sections Inspired by Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Plan Expirations */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <CalendarIcon className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-lg font-semibold">Upcoming Plan Expirations</h2>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">User/Agency</th>
                <th className="py-2">Plan</th>
                <th className="py-2">Expiration</th>
              </tr>
            </thead>
            <tbody>
              {upcomingExpirations.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{item.user}</td>
                  <td className="py-2">{item.plan}</td>
                  <td className="py-2">{item.expiration}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">Manage subscriptions in Subscription Plan section.</p>
        </div>

        {/* Most Used Platforms */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <ChartBarIcon className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold">Most Used Platforms</h2>
          </div>
          <ul className="space-y-2">
            {mostUsedPlatforms.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.platform}</span>
                <span className="font-bold">{item.usage}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-2">Based on Space Analysis and Report data.</p>
        </div>
      </div>

      {/* Quick Links to Sidebar Sections */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <a href="/user-management" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200">
            <UserIcon className="h-6 w-6 mx-auto mb-2" />
            User Management
          </a>
          <a href="/staff-management" className="bg-green-100 p-4 rounded-lg text-center hover:bg-green-200">
            <UsersIcon className="h-6 w-6 mx-auto mb-2" />
            Staff Management
          </a>
          <a href="/subscription-plan" className="bg-yellow-100 p-4 rounded-lg text-center hover:bg-yellow-200">
            <CalendarIcon className="h-6 w-6 mx-auto mb-2" />
            Subscription Plan
          </a>
          <a href="/manage-logo" className="bg-purple-100 p-4 rounded-lg text-center hover:bg-purple-200">
            <BuildingOfficeIcon className="h-6 w-6 mx-auto mb-2" />
            Manage Logo
          </a>
          <a href="/space-analysis" className="bg-indigo-100 p-4 rounded-lg text-center hover:bg-indigo-200">
            <ChartBarIcon className="h-6 w-6 mx-auto mb-2" />
            Space Analysis
          </a>
          <a href="/report" className="bg-red-100 p-4 rounded-lg text-center hover:bg-red-200">
            <ChartBarIcon className="h-6 w-6 mx-auto mb-2" />
            Report
          </a>
          {/* Add more as needed based on sidebar */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
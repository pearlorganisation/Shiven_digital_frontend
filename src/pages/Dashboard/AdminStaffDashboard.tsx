import React from 'react';
import {
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  ChartBarIcon,
  UserIcon,
  CurrencyDollarIcon,
  CogIcon,
  ClipboardDocumentListIcon,
  ScaleIcon,
  PencilSquareIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AdminStaffDashboard: React.FC = () => {
  
  const totalFiles = 250;
  const totalQueries = 45;
  const pendingApprovals = 8;
  const totalPayments = 150;
  const subscriptionPlans = [
    { user: 'John Doe', plan: 'Premium', status: 'Active', expires: '2025-10-15' },
    { user: 'Jane Smith', plan: 'Basic', status: 'Pending', expires: '2025-10-20' },
  ];
  const spaceAnalysis = [
    { category: 'Storage', usage: '75%', limit: '100GB' },
    { category: 'Bandwidth', usage: '50%', limit: '200GB' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <ChartBarIcon className="h-8 w-8 mr-2 text-blue-600" />
        Admin Staff Dashboard
      </h1>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Files */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold">Total Files</h2>
          </div>
          <p className="text-4xl font-bold">{totalFiles}</p>
          <p className="text-sm text-gray-500">Managed documents</p>
        </div>

        {/* Total Queries */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-lg font-semibold">Total Queries</h2>
          </div>
          <p className="text-4xl font-bold">{totalQueries}</p>
          <p className="text-sm text-gray-500">Open tickets</p>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <UserIcon className="h-6 w-6 text-yellow-600 mr-2" />
            <h2 className="text-lg font-semibold">Pending Approvals</h2>
          </div>
          <p className="text-4xl font-bold">{pendingApprovals}</p>
          <p className="text-sm text-gray-500">User account requests</p>
        </div>

        {/* Total Payments */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <CurrencyDollarIcon className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-lg font-semibold">Total Payments</h2>
          </div>
          <p className="text-4xl font-bold">{totalPayments}</p>
          <p className="text-sm text-gray-500">Processed transactions</p>
        </div>
      </div>

      {/* Additional Sections Inspired by Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subscription Plan */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <CalendarIcon className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-lg font-semibold">Subscription Plans</h2>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">User</th>
                <th className="py-2">Plan</th>
                <th className="py-2">Status</th>
                <th className="py-2">Expires</th>
              </tr>
            </thead>
            <tbody>
              {subscriptionPlans.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{item.user}</td>
                  <td className="py-2">{item.plan}</td>
                  <td className="py-2">{item.status}</td>
                  <td className="py-2">{item.expires}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">Manage in Subscription Plan section.</p>
        </div>

        {/* Space & Analytics */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <ChartBarIcon className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold">Space & Analytics</h2>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Category</th>
                <th className="py-2">Usage</th>
                <th className="py-2">Limit</th>
              </tr>
            </thead>
            <tbody>
              {spaceAnalysis.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{item.category}</td>
                  <td className="py-2">{item.usage}</td>
                  <td className="py-2">{item.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">View detailed reports in Space Analysis section.</p>
        </div>
      </div>

      {/* Quick Links to Sidebar Sections */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <a href="/files-folders" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200">
            <DocumentTextIcon className="h-6 w-6 mx-auto mb-2" />
            Files & Folders
          </a>
          <a href="/queries-tickets" className="bg-green-100 p-4 rounded-lg text-center hover:bg-green-200">
            <ChatBubbleLeftRightIcon className="h-6 w-6 mx-auto mb-2" />
            Queries & Tickets
          </a>
          <a href="/announcements" className="bg-yellow-100 p-4 rounded-lg text-center hover:bg-yellow-200">
            <GlobeAltIcon className="h-6 w-6 mx-auto mb-2" />
            Announcements
          </a>
          <a href="/training" className="bg-purple-100 p-4 rounded-lg text-center hover:bg-purple-200">
            <PencilSquareIcon className="h-6 w-6 mx-auto mb-2" />
            Training
          </a>
          <a href="/subscription-plan" className="bg-indigo-100 p-4 rounded-lg text-center hover:bg-indigo-200">
            <CalendarIcon className="h-6 w-6 mx-auto mb-2" />
            Subscription Plan
          </a>
          <a href="/user-approval" className="bg-red-100 p-4 rounded-lg text-center hover:bg-red-200">
            <UserIcon className="h-6 w-6 mx-auto mb-2" />
            User Approval
          </a>
          <a href="/payment-logs" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200">
            <CurrencyDollarIcon className="h-6 w-6 mx-auto mb-2" />
            Payment Logs
          </a>
          <a href="/space-analysis" className="bg-green-100 p-4 rounded-lg text-center hover:bg-green-200">
            <ChartBarIcon className="h-6 w-6 mx-auto mb-2" />
            Space Analysis
          </a>
          <a href="/landing-page" className="bg-yellow-100 p-4 rounded-lg text-center hover:bg-yellow-200">
            <ClipboardDocumentListIcon className="h-6 w-6 mx-auto mb-2" />
            Landing Page
          </a>
          <a href="/management" className="bg-purple-100 p-4 rounded-lg text-center hover:bg-purple-200">
            <CogIcon className="h-6 w-6 mx-auto mb-2" />
            Management
          </a>
          <a href="/coupon-management" className="bg-indigo-100 p-4 rounded-lg text-center hover:bg-indigo-200">
            <ScaleIcon className="h-6 w-6 mx-auto mb-2" />
            Coupon Management
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminStaffDashboard;
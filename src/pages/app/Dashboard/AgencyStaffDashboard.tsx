import React, { useState, useEffect } from 'react';
import {
  Building2,
  Users,
  Calendar,
  Mail,
  BarChart3,
  // LayoutDashboard,
  // LogOut,
  // Bell,
  // Search,
  // Menu,
  // X,
  // ChevronRight,
  // ArrowUpRight,
  FileText,
  MessageSquare,
  Globe,
  PenSquare,
  Phone,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AgencyStaffDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

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

  const quickLinks = [
    { name: 'My Brands', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50', border: 'hover:border-blue-200', href: '/my-brands' },
    { name: 'Files & Folders', icon: FileText, color: 'text-green-600', bg: 'bg-green-50', border: 'hover:border-green-200', href: '/files-folders' },
    { name: 'Queries', icon: MessageSquare, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'hover:border-yellow-200', href: '/queries-tickets' },
    { name: 'Announcements', icon: Globe, color: 'text-purple-600', bg: 'bg-purple-50', border: 'hover:border-purple-200', href: '/announcements' },
    { name: 'Training', icon: PenSquare, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'hover:border-indigo-200', href: '/training' },
    { name: 'Manage Users', icon: Users, color: 'text-red-600', bg: 'bg-red-50', border: 'hover:border-red-200', href: '/manage-users' },
    { name: 'Email Marketing', icon: Mail, color: 'text-blue-600', bg: 'bg-blue-50', border: 'hover:border-blue-200', href: '/email-marketing' },
    { name: 'Posting', icon: PenSquare, color: 'text-green-600', bg: 'bg-green-50', border: 'hover:border-green-200', href: '/posting' },
    { name: 'SMS Marketing', icon: Phone, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'hover:border-yellow-200', href: '/sms-marketing' },
    { name: 'WhatsApp', icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-50', border: 'hover:border-purple-200', href: '/whatsapp-messaging' },
    { name: 'AI Generation', icon: Settings, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'hover:border-indigo-200', href: '/ai-content-generation' },
    { name: 'Tasks', icon: Calendar, color: 'text-red-600', bg: 'bg-red-50', border: 'hover:border-red-200', href: '/tasks' },
    { name: 'Analytics', icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50', border: 'hover:border-blue-200', href: '/post-analytics' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0, opacity: 1, scale: 1,
      transition: { stiffness: 100, damping: 15 }
    }
  };

  // const sidebarVariants = {
  //   closed: { x: '-100%', transition: { stiffness: 300, damping: 30 } },
  //   open: { x: 0, transition: { stiffness: 300, damping: 30 } }
  // };

  return (
    <div className="flex h-screen bg-gray-50/50 font-sans text-gray-900 overflow-hidden">


      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
    

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto  no-scrollbar  p-4 sm:p-6 lg:p-8 scroll-smooth">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <motion.div variants={itemVariants}>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Agency Staff Dashboard</h1>
                <p className="text-gray-500 mt-1">Your assigned tasks and performance.</p>
              </motion.div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Total Brands', value: totalBrands, sub: 'Assigned to manage', icon: Building2, color: 'blue' },
                { title: 'Total Users', value: totalUsers, sub: 'Associated with brands', icon: Users, color: 'green' },
                { title: 'Assigned Tasks', value: assignedTasks, sub: 'Pending completion', icon: Calendar, color: 'yellow' },
                { title: 'Messages Sent', value: totalEmailsSent + totalSMS + totalWhatsApp, sub: `${totalEmailsSent} emails | ${totalSMS} SMS`, icon: Mail, color: 'purple' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl transition-colors ${
                      stat.color === 'blue' ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" :
                      stat.color === 'green' ? "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white" :
                      stat.color === 'yellow' ? "bg-yellow-50 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white" :
                      "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
                    }`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                  <p className="text-2xl font-bold text-gray-900 mt-1 tracking-tight">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-2 font-medium">{stat.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Tasks */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-red-500" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Upcoming Tasks</h2>
                  </div>
                </div>
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 text-xs uppercase tracking-wider">
                        <th className="py-4 pl-2 font-semibold">Task</th>
                        <th className="py-4 font-semibold">Due Date</th>
                        <th className="py-4 font-semibold">Assigned By</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {upcomingTasks.map((item, index) => (
                        <motion.tr 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group hover:bg-gray-50/80 transition-colors"
                        >
                          <td className="py-4 pl-2 font-medium text-gray-900">{item.task}</td>
                          <td className="py-4 text-gray-500">{item.due}</td>
                          <td className="py-4 text-gray-600">{item.assignedBy}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Post Analytics */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <div className="flex items-center mb-8 gap-3">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">Post Analytics</h2>
                </div>
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 text-xs uppercase tracking-wider">
                        <th className="py-4 pl-2 font-semibold">Campaign</th>
                        <th className="py-4 font-semibold">Reach</th>
                        <th className="py-4 font-semibold">Engagement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {postAnalytics.map((item, index) => (
                        <motion.tr 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group hover:bg-gray-50/80 transition-colors"
                        >
                          <td className="py-4 pl-2 font-medium text-gray-900">{item.campaign}</td>
                          <td className="py-4 text-gray-600">{item.reach}</td>
                          <td className="py-4 text-green-600 font-medium">{item.engagement}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* Quick Access */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Quick Access
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg border border-transparent ${link.bg} ${link.border}`}
                  >
                    <div className="bg-white p-3 rounded-xl shadow-sm mb-3">
                      <link.icon className={`h-6 w-6 ${link.color}`} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 text-center leading-tight">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgencyStaffDashboard;

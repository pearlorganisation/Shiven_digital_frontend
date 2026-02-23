import React, { useState, useEffect } from 'react';
import {
  User,
  Users,
  Building2,
  DollarSign,
  Mail,
  Calendar,
  BarChart3,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // // Handle scroll effect for header
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const totalUsers = 1234;
  const userStaff = 56;
  const totalAgencies = 78;
  const agencyStaff = 210;
  const totalEarnings = 456789.99;
  const totalMails = 320;
  const totalMessages = 1450;

  const upcomingExpirations = [
    { user: 'John Doe', plan: 'Premium', expiration: '2025-10-15', status: 'Active' },
    { user: 'Jane Smith', plan: 'Basic', expiration: '2025-10-20', status: 'Expiring Soon' },
    { user: 'Agency XYZ', plan: 'Enterprise', expiration: '2025-11-05', status: 'Active' },
    { user: 'Michael Brown', plan: 'Premium', expiration: '2025-11-12', status: 'Active' },
    { user: 'Sarah Wilson', plan: 'Basic', expiration: '2025-11-15', status: 'Expiring Soon' },
  ];

  const mostUsedPlatforms = [
    { platform: 'Web', usage: 65, color: 'bg-blue-500', text: 'text-blue-600', bg: 'bg-blue-50' },
    { platform: 'Mobile App', usage: 25, color: 'bg-green-500', text: 'text-green-600', bg: 'bg-green-50' },
    { platform: 'Desktop', usage: 10, color: 'bg-purple-500', text: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const quickLinks = [
    { name: 'User Management', icon: User, color: 'text-blue-600', bg: 'bg-blue-50', border: 'hover:border-blue-200', href: '/user-management' },
    { name: 'Staff Management', icon: Users, color: 'text-green-600', bg: 'bg-green-50', border: 'hover:border-green-200', href: '/staff-management' },
    { name: 'Subscription Plan', icon: Calendar, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'hover:border-yellow-200', href: '/subscription-plan' },
    { name: 'Manage Logo', icon: Building2, color: 'text-purple-600', bg: 'bg-purple-50', border: 'hover:border-purple-200', href: '/manage-logo' },
    { name: 'Space Analysis', icon: BarChart3, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'hover:border-indigo-200', href: '/space-analysis' },
    { name: 'Report', icon: BarChart3, color: 'text-red-600', bg: 'bg-red-50', border: 'hover:border-red-200', href: '/report' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        stiffness: 100,
        damping: 15
      }
    }
  };

  // const sidebarVariants = {
  //   closed: { x: '-100%', transition: { stiffness: 300, damping: 30 } },
  //   open: { x: 0, transition: { stiffness: 300, damping: 30 } }
  // };

  return (
    <div className="flex h-screen bg-gray-50/50 font-sans text-gray-900 overflow-hidden">
   

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden  relative">

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto no-scrollbar  p-4 sm:p-6 lg:p-8 scroll-smooth">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <motion.div variants={itemVariants}>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
                <p className="text-gray-500 mt-1">Welcome back, here's what's happening today.</p>
              </motion.div>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-600/20 font-medium text-sm flex items-center gap-2 self-start sm:self-auto"
              >
                <ArrowUpRight className="w-4 h-4" />
                Generate Report
              </motion.button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Total Users', value: totalUsers, sub: `Including ${userStaff} staff`, icon: Users, color: 'blue', change: '+12%' },
                { title: 'Total Agencies', value: totalAgencies, sub: `With ${agencyStaff} staff`, icon: Building2, color: 'green', change: '+5%' },
                { title: 'Total Earnings', value: `$${totalEarnings.toLocaleString()}`, sub: 'All time revenue', icon: DollarSign, color: 'yellow', change: '+24%' },
                { title: 'Communications', value: totalMails + totalMessages, sub: `${totalMails} mails | ${totalMessages} msgs`, icon: Mail, color: 'purple', change: 'Total' },
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
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      stat.change === 'Total' ? "bg-gray-100 text-gray-600" : "bg-green-50 text-green-600"
                    }`}>{stat.change}</span>
                  </div>
                  <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                  <p className="text-2xl font-bold text-gray-900 mt-1 tracking-tight">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-2 font-medium">{stat.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Plan Expirations */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-red-500" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Upcoming Expirations</h2>
                  </div>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    View All <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 text-xs uppercase tracking-wider">
                        <th className="py-4 pl-2 font-semibold">User/Agency</th>
                        <th className="py-4 font-semibold">Plan</th>
                        <th className="py-4 font-semibold">Expiration</th>
                        <th className="py-4 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {upcomingExpirations.map((item, index) => (
                        <motion.tr 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group hover:bg-gray-50/80 transition-colors"
                        >
                          <td className="py-4 pl-2">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 group-hover:bg-white group-hover:shadow-sm transition-all">
                                {item.user.charAt(0)}
                              </div>
                              <span className="text-gray-900 font-medium text-sm">{item.user}</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                              item.plan === 'Premium' ? "bg-purple-50 text-purple-700 border-purple-100" :
                              item.plan === 'Enterprise' ? "bg-blue-50 text-blue-700 border-blue-100" :
                              "bg-gray-50 text-gray-700 border-gray-200"
                            }`}>
                              {item.plan}
                            </span>
                          </td>
                          <td className="py-4 text-gray-500 font-mono text-xs">{item.expiration}</td>
                          <td className="py-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                              item.status === 'Active' ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' ? "bg-green-500" : "bg-amber-500"}`}></span>
                              {item.status}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Most Used Platforms */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="flex items-center mb-8 gap-3">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">Platform Usage</h2>
                </div>
                <div className="space-y-8 flex-1">
                  {mostUsedPlatforms.map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between text-sm mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                          <span className="text-gray-700 font-medium">{item.platform}</span>
                        </div>
                        <span className="text-gray-900 font-bold">{item.usage}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.usage}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + (index * 0.2), ease: "easeOut" }}
                          className={`h-full rounded-full relative ${item.color}`}
                        >
                          <div className="absolute inset-0 bg-white/20"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-50">
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Live data updates
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Access */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Quick Access
                <span className="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-1 rounded-full">Shortcuts</span>
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

export default AdminDashboard;

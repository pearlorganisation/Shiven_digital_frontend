import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Tag,
  PenSquare,
  Rocket,
  Mail,
  MessageCircle,
  Smartphone,
  Users,
  Inbox,
  Folder,
  Ticket,
  Link,
  Bell,
  Lightbulb,
  LayoutDashboard,
  LogOut,
  Search,
  Menu,
  X,
  ArrowUpRight,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const planExpiration = "2025-12-31";
  const totalPosts = 150;
  const totalCampaigns = 12;
  const totalBrands = 5;
  const totalEmails = 3200;
  const totalWhatsAppMessages = 450;
  const totalSMS = 1200;
  const totalWhatsAppContacts = 800;
  const totalContacts = 5000;
  const totalFiles = 45;
  const totalTickets = 3;
  const connectedAccounts = 7;

  const aiListings = [
    'Campaign Idea #1: Summer Sales Blast',
    'Email Template #2: Welcome Series',
    'Social Post Draft #3: New Product Launch',
  ];

  const recentAnnouncements = [
    { title: 'New Feature: Enhanced Analytics Dashboard', date: '2025-09-20' },
    { title: 'Scheduled Maintenance', date: '2025-09-15' },
    { title: 'Webinar: Mastering AI Content Generation', date: '2025-09-10' },
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
        <main className="flex-1 overflow-x-hidden overflow-y-auto no-scrollbar  p-4 sm:p-6 lg:p-8 scroll-smooth">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <motion.div variants={itemVariants}>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Marketing Hub</h1>
                <p className="text-gray-500 mt-1">Manage your campaigns and content.</p>
              </motion.div>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg shadow-lg shadow-orange-600/20 font-medium text-sm flex items-center gap-2 self-start sm:self-auto"
              >
                <ArrowUpRight className="w-4 h-4" />
                New Campaign
              </motion.button>
            </div>

            {/* Metrics Grid - Top 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Plan Expires', value: planExpiration, sub: 'Current Plan', icon: Calendar, color: 'blue' },
                { title: 'Total Brands', value: totalBrands, sub: 'Active brands', icon: Tag, color: 'green' },
                { title: 'Total Posts', value: totalPosts, sub: 'Published posts', icon: PenSquare, color: 'yellow' },
                { title: 'Campaigns', value: totalCampaigns, sub: 'Active campaigns', icon: Rocket, color: 'purple' },
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

            {/* Detailed Stats Grid */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Detailed Statistics
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Emails', value: totalEmails, icon: Mail, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { title: 'WhatsApp Msgs', value: totalWhatsAppMessages, icon: MessageCircle, color: 'text-green-600', bg: 'bg-green-50' },
                  { title: 'SMS', value: totalSMS, icon: Smartphone, color: 'text-yellow-600', bg: 'bg-yellow-50' },
                  { title: 'WA Contacts', value: totalWhatsAppContacts, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
                  { title: 'Total Contacts', value: totalContacts, icon: Inbox, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { title: 'Files', value: totalFiles, icon: Folder, color: 'text-red-600', bg: 'bg-red-50' },
                  { title: 'Tickets', value: totalTickets, icon: Ticket, color: 'text-teal-600', bg: 'bg-teal-50' },
                  { title: 'Connected', value: connectedAccounts, icon: Link, color: 'text-orange-600', bg: 'bg-orange-50' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4"
                  >
                    <div className={`p-2 rounded-lg ${stat.bg}`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{stat.title}</p>
                      <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI Content */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <div className="flex items-center mb-6 gap-3">
                  <div className="p-2 bg-yellow-50 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">AI-Generated Content</h2>
                </div>
                <div className="space-y-4 flex-1">
                  {aiListings.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-gray-50 rounded-xl flex justify-between items-center group hover:bg-yellow-50/50 transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                      <button className="text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline">Edit</button>
                    </motion.div>
                  ))}
                  {aiListings.length === 0 && (
                    <div className="text-center py-8 text-gray-400">
                      <p>No content generated yet.</p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Announcements */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <div className="flex items-center mb-6 gap-3">
                  <div className="p-2 bg-red-50 rounded-lg">
                    <Bell className="h-5 w-5 text-red-600" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">Recent Announcements</h2>
                </div>
                <div className="space-y-4 flex-1">
                  {recentAnnouncements.map((ann, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col p-4 border border-gray-100 rounded-xl hover:shadow-sm transition-shadow"
                    >
                      <p className="font-semibold text-gray-800 text-sm">{ann.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{ann.date}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
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

export default UserDashboard;

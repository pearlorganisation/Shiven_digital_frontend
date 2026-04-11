"use client";
import React, { useState } from 'react';
import { 
  Bell, 
  CheckCheck, 
  Trash2, 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  MoreVertical,
  Search,
  Circle
} from 'lucide-react';

// Define the Notification type
interface Notification {
  id: number;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    type: 'info',
    title: 'New User Registered',
    message: 'A new agency "Skyline Media" has just signed up.',
    time: '2 minutes ago',
    isRead: false,
  },
  {
    id: 2,
    type: 'warning',
    title: 'Subscription Expiring',
    message: 'User "John Doe" subscription will expire in 3 days.',
    time: '1 hour ago',
    isRead: false,
  },
  {
    id: 3,
    type: 'success',
    title: 'Payment Successful',
    message: 'Invoice #INV-4022 was paid successfully by PayPal.',
    time: '5 hours ago',
    isRead: true,
  },
  {
    id: 4,
    type: 'error',
    title: 'Backup Failed',
    message: 'The daily system backup failed due to insufficient space.',
    time: 'Yesterday',
    isRead: true,
  },
  {
    id: 5,
    type: 'info',
    title: 'System Update',
    message: 'Version 2.4.0 will be deployed tonight at 12:00 AM UTC.',
    time: '2 days ago',
    isRead: true,
  },
];

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const markAsRead = (id: number): void => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const markAllRead = (): void => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const deleteNotification = (id: number): void => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredNotifications = filter === 'unread' 
    ? notifications.filter(n => !n.isRead) 
    : notifications;

  const getTypeStyles = (type: Notification['type']): { icon: React.ReactNode; bg: string } => {
    switch (type) {
      case 'warning': return { icon: <AlertTriangle size={20} className="text-amber-500" />, bg: 'bg-amber-50' };
      case 'success': return { icon: <CheckCircle2 size={20} className="text-emerald-500" />, bg: 'bg-emerald-50' };
      case 'error': return { icon: <Info size={20} className="text-red-500" />, bg: 'bg-red-50' };
      default: return { icon: <Info size={20} className="text-blue-500" />, bg: 'bg-blue-50' };
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Bell className="text-indigo-600" size={24} />
            Notifications
          </h1>
          <p className="text-gray-500 text-sm">Manage and view your recent system activities</p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={markAllRead}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <CheckCheck size={16} />
            Mark all as read
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-t-xl border-x border-t border-gray-200 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${filter === 'all' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            All Notifications
          </button>
          <button 
            onClick={() => setFilter('unread')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${filter === 'unread' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Unread ({notifications.filter(n => !n.isRead).length})
          </button>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search notifications..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white border border-gray-200 rounded-b-xl overflow-hidden shadow-sm">
        {filteredNotifications.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {filteredNotifications.map((notification) => {
              const { icon, bg } = getTypeStyles(notification.type);
              return (
                <div 
                  key={notification.id} 
                  className={`flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors group ${!notification.isRead ? 'bg-indigo-50/30' : ''}`}
                >
                  {/* Status Icon */}
                  <div className={`p-2 rounded-full shrink-0 ${bg}`}>
                    {icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-sm font-semibold truncate ${!notification.isRead ? 'text-gray-900' : 'text-gray-600'}`}>
                        {notification.title}
                      </h3>
                      {!notification.isRead && <Circle size={8} className="fill-indigo-500 text-indigo-500" />}
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">
                      {notification.message}
                    </p>
                    <span className="text-xs text-gray-400 mt-2 block">{notification.time}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {!notification.isRead && (
                      <button 
                        onClick={() => markAsRead(notification.id)}
                        className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                        title="Mark as read"
                      >
                        <CheckCheck size={18} />
                      </button>
                    )}
                    <button 
                      onClick={() => deleteNotification(notification.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <Bell className="text-gray-400" size={32} />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No notifications found</h3>
            <p className="text-gray-500 max-w-xs mt-1">
              You're all caught up! When you receive new alerts, they will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
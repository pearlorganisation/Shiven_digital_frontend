import React, { useState } from 'react';

interface Announcement {
  id: number;
  title: string;
  date: string;
  content: string;
}

const initialAnnouncements: Announcement[] = [
  {
    id: 1,
    title: 'Scheduled Maintenance',
    date: '2025-10-05',
    content:
      'We will have scheduled maintenance on October 5th, 2025 from 2:00 AM to 4:00 AM UTC. Services may be unavailable during this time.',
  },
  {
    id: 2,
    title: 'New Feature Release',
    date: '2025-09-15',
    content:
      'We are excited to announce a new feature that improves your workflow efficiency. Check out the documentation for details!',
  },
];

const Announcements: React.FC = () => {
  const [announcements] = useState<Announcement[]>(initialAnnouncements);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Announcements</h1>

      {announcements.length === 0 ? (
        <p className="text-gray-600">No announcements available at the moment.</p>
      ) : (
        <div className="space-y-6">
          {announcements.map(({ id, title, date, content }) => (
            <div key={id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
                <span className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700 whitespace-pre-line">{content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Announcements;

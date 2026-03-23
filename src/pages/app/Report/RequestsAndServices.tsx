import React from "react";
import { Activity, Clock, UserCheck, Zap, MoreHorizontal } from "lucide-react";

const RequestsAndServices: React.FC = () => {
  // DUMMY DATA
  const metrics = [
    { title: "Total Requests", value: 24, color: "bg-blue-50 text-blue-600" },
    {
      title: "Awaiting Remark",
      value: 5,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Avg. Services",
      value: "3.2",
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Success Rate",
      value: "88%",
      color: "bg-green-50 text-green-600",
    },
  ];

  const pendingRequests = [
    {
      id: "1",
      subject: "Custom App Development",
      user: "Client Alpha",
      date: "2024-03-21",
      services: ["React", "Node.js"],
    },
    {
      id: "2",
      subject: "Marketing Strategy",
      user: "Brand Beta",
      date: "2024-03-20",
      services: ["SEO", "Content"],
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Service Request Dashboard
      </h1>

      {/* KPI Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <h2 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
          <Activity size={20} /> Request Key Metrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-5 rounded-xl border border-gray-100 bg-gray-50/50"
            >
              <span className="text-gray-500 text-sm mb-2">{m.title}</span>
              <span className="text-3xl font-bold text-gray-800">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pending Requests */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Clock size={22} className="text-orange-500" /> Pending Requests
          </h2>
          <div className="space-y-4">
            {pendingRequests.map((req) => (
              <div
                key={req.id}
                className="p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-indigo-200 transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-800">{req.subject}</h3>
                  <MoreHorizontal className="text-gray-400 cursor-pointer" />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {req.services.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 bg-white border text-[10px] font-bold rounded uppercase"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                  <span>Client: {req.user}</span>
                  <span>{req.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Services */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Zap size={22} className="text-yellow-500" /> Top Services
          </h2>
          <div className="space-y-3">
            {[
              { name: "Graphic Design", count: 45 },
              { name: "Social Media", count: 32 },
              { name: "Web Dev", count: 18 },
            ].map((service, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100"
              >
                <span className="font-semibold text-gray-700">
                  {service.name}
                </span>
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {service.count} Requests
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Engaged Customers */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <UserCheck size={22} className="text-blue-500" /> Top Engaged
            Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="p-4 border border-gray-100 rounded-xl bg-gray-50 flex items-center justify-between"
              >
                <div>
                  <p className="font-bold text-gray-800">
                    Global Solutions Ltd.
                  </p>
                  <p className="text-xs text-gray-500">
                    12 Total Service Requests
                  </p>
                </div>
                <button className="text-sm font-bold text-indigo-600 hover:underline">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestsAndServices;

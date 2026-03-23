
// export default TaskReports;
import React, { useState } from "react";

const TaskReports: React.FC = () => {
  // --- Dummy State ---
  const [tasksByStatus] = useState([
    { status: "In-Progress", count: 8 },
    { status: "Review", count: 4 },
    { status: "Completed", count: 42 },
  ]);
  const [tasksByPriority] = useState([
    { priority: "High", count: 5 },
    { priority: "Medium", count: 15 },
    { priority: "Low", count: 12 },
  ]);
  const [userPerformance] = useState([
    { assigneeName: "John Admin", completedTasks: 18 },
    { assigneeName: "Sarah Staff", completedTasks: 14 },
    { assigneeName: "Mike Support", completedTasks: 10 },
  ]);
  const [workloadDistribution] = useState([
    { assigneeName: "John Admin", activeTasks: 5 },
    { assigneeName: "Sarah Staff", activeTasks: 7 },
    { assigneeName: "Mike Support", activeTasks: 3 },
  ]);
  const [tasksCompleted] = useState([
    { period: "Week 1", count: 10 },
    { period: "Week 2", count: 15 },
    { period: "Week 3", count: 17 },
  ]);

  const [overdueCount] = useState(3);
  const [timeUnit, setTimeUnit] = useState("month");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Task & Productivity Reports
      </h1>

      {/* KPI / Summary Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-medium text-gray-700 mb-4">
          Current Workload Snapshot
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-4 rounded-lg border border-blue-300 bg-blue-50">
            <span className="text-gray-600 text-sm">Total Active Tasks</span>
            <span className="text-3xl font-semibold text-gray-800">12</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border border-red-300 bg-red-50">
            <span className="text-gray-600 text-sm">Overdue Tasks</span>
            <span className="text-3xl font-semibold text-gray-800">
              {overdueCount}
            </span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border border-green-300 bg-green-50">
            <span className="text-gray-600 text-sm">Completed Tasks</span>
            <span className="text-3xl font-semibold text-gray-800">42</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* User Performance */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            User Performance (Completed)
          </h2>
          <ul className="space-y-3">
            {userPerformance.map((item, idx) => (
              <li
                key={idx}
                className="bg-gray-50 p-3 rounded-md border border-gray-200 flex justify-between"
              >
                <span className="font-medium text-gray-800">
                  {item.assigneeName}
                </span>
                <span className="font-bold text-gray-600">
                  {item.completedTasks}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Workload Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Active Workload
          </h2>
          <ul className="space-y-3">
            {workloadDistribution.map((item, idx) => (
              <li
                key={idx}
                className="bg-gray-50 p-3 rounded-md border border-gray-200 flex justify-between"
              >
                <span className="font-medium text-gray-800">
                  {item.assigneeName}
                </span>
                <span className="font-bold text-gray-600">
                  {item.activeTasks} Active
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tasks Completed Over Time */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Velocity</h2>
            <select
              value={timeUnit}
              onChange={(e) => setTimeUnit(e.target.value)}
              className="border border-gray-300 rounded-md p-1.5 text-sm"
            >
              <option value="day">Daily</option>
              <option value="month">Monthly</option>
            </select>
          </div>
          <ul className="space-y-3">
            {tasksCompleted.map((item, i) => (
              <li
                key={i}
                className="bg-gray-50 p-2 rounded-md border border-gray-200 flex justify-between text-sm"
              >
                <span>{item.period}</span>
                <span className="font-bold">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Status Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Tasks by Status
          </h2>
          <ul className="space-y-3">
            {tasksByStatus.map((item, i) => (
              <li
                key={i}
                className="bg-gray-50 p-2 rounded-md border border-gray-200 flex justify-between text-sm"
              >
                <span>{item.status}</span>
                <span className="font-bold">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Priority Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Tasks by Priority
          </h2>
          <ul className="space-y-3">
            {tasksByPriority.map((item, i) => (
              <li
                key={i}
                className="bg-gray-50 p-2 rounded-md border border-gray-200 flex justify-between text-sm"
              >
                <span className="capitalize">{item.priority}</span>
                <span
                  className={`font-bold ${
                    item.priority === "High" ? "text-red-500" : ""
                  }`}
                >
                  {item.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskReports;

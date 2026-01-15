



type Employee = {
  fullName: string;
  email: string;
  joiningDate: string;
  terminationDate: string;
  status: "Active" | "Deleted";
};

const employees: Employee[] = [
  { fullName: "test", email: "a@a.com", joiningDate: "12-07-2025", terminationDate: "-", status: "Active" },
  { fullName: "Pranjal", email: "pranjal@abc.com", joiningDate: "12-07-2025", terminationDate: "-", status: "Active" },
  { fullName: "my-fullName22", email: "staff@22.com", joiningDate: "23-05-2025", terminationDate: "-", status: "Active" },
  { fullName: "test", email: "test@testt.com", joiningDate: "11-07-2025", terminationDate: "12-07-2025", status: "Deleted" },
  { fullName: "Venkates Khodke", email: "veshitafoundation@gmail.com", joiningDate: "11-07-2025", terminationDate: "11-07-2025", status: "Deleted" },
  { fullName: "j consultant update", email: "jai+21@pearlorganisation.com", joiningDate: "06-06-2025", terminationDate: "12-07-2025", status: "Deleted" },
  { fullName: "Kamal Nayan Upadhyay", email: "kamalnayan@gmail.com", joiningDate: "06-06-2025", terminationDate: "12-07-2025", status: "Deleted" },
];

export default function StaffManagement() {
  return (
    <div className="p-6  min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Staff Management</h1>
        <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition">
          Create a new employee
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-md bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-50 text-left text-gray-700 text-sm uppercase tracking-wide">
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Joining Date</th>
              <th className="px-6 py-3">Termination Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => (
              <tr
                key={i}
                className={`text-sm border-t hover:bg-blue-50 transition ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-6 py-3 font-medium text-gray-900">{emp.fullName}</td>
                <td className="px-6 py-3 text-gray-600">{emp.email}</td>
                <td className="px-6 py-3 text-gray-600">{emp.joiningDate}</td>
                <td className="px-6 py-3 text-gray-600">{emp.terminationDate}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      emp.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 gap-2">
        <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">&lt;</button>
        <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">&gt;</button>
      </div>
    </div>
  );
}

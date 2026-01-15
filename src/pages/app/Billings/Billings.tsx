import { CheckCircle, Download, AlertCircle } from "lucide-react";

const BillingPage = () => {
  // Mock Data mimicking the screenshot's context

  const invoices = [
    { id: "INV-0012", date: "Oct 01, 2025", amount: "$49.00", status: "Paid" },
    { id: "INV-0011", date: "Sep 01, 2025", amount: "$49.00", status: "Paid" },
    { id: "INV-0010", date: "Aug 01, 2025", amount: "$49.00", status: "Paid" },
    { id: "INV-0009", date: "Jul 01, 2025", amount: "$49.00", status: "Paid" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
      {/* Scrollable Page Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-indigo-700">
                Billing & Subscription
              </h1>
              <p className="text-gray-500 mt-1 text-sm">
                Manage your plan, payment methods, and view invoice history.
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
                Contact Support
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Card 1: Current Plan Details */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 col-span-1 lg:col-span-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Current Plan
                  </h2>
                  <p className="text-sm text-gray-500">Marketing Hub Pro</p>
                </div>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase rounded-full border border-green-100">
                  Active
                </span>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900">$49</span>
                <span className="text-gray-500 ml-2">/ month</span>
              </div>

              {/* Progress Bars for Usage (Referencing dashboard stats) */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Total Emails</span>
                    <span className="font-medium text-gray-900">
                      3,200 / 5,000
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-indigo-500 h-2 rounded-full"
                      style={{ width: "64%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Total Contacts</span>
                    <span className="font-medium text-gray-900">
                      5,000 / 10,000
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-blue-400 h-2 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center text-sm text-amber-600 bg-amber-50 px-3 py-1.5 rounded-md">
                  <AlertCircle size={16} className="mr-2" />
                  <span>Plan renews on Dec 31, 2025</span>
                </div>
                <button className="text-indigo-600 font-medium text-sm hover:underline">
                  Upgrade Plan
                </button>
              </div>
            </div>

            {/* Card 2: Payment Method */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Payment Method
                </h2>
                <div className="p-4 border border-gray-200 rounded-lg flex items-center mb-4 bg-gray-50">
                  <div className="w-10 h-10 bg-white rounded-md shadow-sm flex items-center justify-center mr-3">
                    <div className="w-6 h-4 bg-blue-800 rounded-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-3 h-4 bg-orange-500 rounded-l-full opacity-80"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      Visa ending in 4242
                    </p>
                    <p className="text-xs text-gray-500">Expiry 12/2028</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Your next charge of{" "}
                  <span className="font-semibold text-gray-700">$49.00</span>{" "}
                  will be processed on{" "}
                  <span className="font-semibold text-gray-700">
                    Nov 01, 2025
                  </span>
                  .
                </p>
              </div>
              <button className="w-full mt-6 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 hover:text-indigo-600 transition-colors">
                Edit Payment Method
              </button>
            </div>
          </div>

          {/* Invoice History Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Billing History</h3>
              <button className="text-sm text-indigo-600 font-medium hover:underline">
                Download All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-xs uppercase font-semibold text-gray-500">
                  <tr>
                    <th className="px-6 py-4">Invoice ID</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {invoices.map((invoice) => (
                    <tr
                      key={invoice.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {invoice.id}
                      </td>
                      <td className="px-6 py-4">{invoice.date}</td>
                      <td className="px-6 py-4">{invoice.amount}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle size={12} className="mr-1" />
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                          <Download size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BillingPage;

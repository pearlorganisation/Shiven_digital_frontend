import React, { useState, useRef } from "react";
import {
  Download,
  Eye,
  IndianRupee,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

// --- Types ---
interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

interface InvoiceData {
  invoiceNo?: string;
  quoteNo?: string;
  invoiceDate?: string;
  quoteDate?: string;
  dueDate: string;
  status: string;
  companyDetails: {
    name: string;
    address: string;
    phone: string;
    email: string;
    website: string;
  };
  billTo: {
    name: string;
    email: string;
    address: string;
  };
  shipTo?: {
    name: string;
    address: string;
  };
  items: InvoiceItem[];
  subTotal: number;
  total: number;
  balanceDue: number;
  notes: string;
}

// --- Helpers ---
const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    amount || 0
  );

const formatDate = (dateString?: string) => {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

// --- Modal Component ---
const InvoiceModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  invoiceData: InvoiceData | null;
}> = ({ isOpen, onClose, invoiceData }) => {
  const printableRef = useRef<HTMLDivElement>(null);
  if (!isOpen || !invoiceData) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8">
        <div ref={printableRef}>
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg w-full md:w-1/2">
              <h2 className="font-bold text-xl text-gray-800">
                {invoiceData.companyDetails.name}
              </h2>
              <p className="text-sm text-gray-600">
                {invoiceData.companyDetails.address}
              </p>
              <p className="text-sm text-gray-600">
                Email: {invoiceData.companyDetails.email}
              </p>
            </div>
            <div className="bg-teal-600 text-white p-6 rounded-lg text-right">
              <h1 className="text-3xl font-bold mb-2">
                {invoiceData.invoiceNo ? "INVOICE" : "QUOTE"}
              </h1>
              <p className="text-sm">
                No: {invoiceData.invoiceNo || invoiceData.quoteNo}
              </p>
              <p className="text-sm">
                Date:{" "}
                {formatDate(invoiceData.invoiceDate || invoiceData.quoteDate)}
              </p>
            </div>
          </div>

          <table className="w-full mb-8">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-center">Qty</th>
                <th className="p-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, i) => (
                <tr key={i} className="border-b">
                  <td className="p-3">{item.description}</td>
                  <td className="p-3 text-center">{item.quantity}</td>
                  <td className="p-3 text-right">
                    {formatCurrency(item.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>{formatCurrency(invoiceData.total)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 rounded-lg"
          >
            Close
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2">
            <Download size={18} /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Dashboard ---
const InvoicesAndQuotes: React.FC = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceData | null>(
    null
  );

  // DUMMY DATA
  const dummyMetrics = {
    totalOutstanding: 125000,
    overdueAmount: 45000,
    revenueMonth: 85000,
    overdueCount: 4,
    pendingQuotes: 3,
    pipeline: 210000,
  };

  const dummyInvoices = [
    {
      id: "1",
      invoiceNo: "INV-001",
      client: "Tech Corp",
      date: "2024-03-01",
      total: 15000,
      status: "Paid",
    },
    {
      id: "2",
      invoiceNo: "INV-002",
      client: "Creative Agency",
      date: "2024-03-10",
      total: 25000,
      status: "Overdue",
    },
  ];

  const handleOpenInvoice = (_id: string) => {
    setSelectedInvoice({
      invoiceNo: "INV-001",
      invoiceDate: "2024-03-01",
      dueDate: "2024-03-15",
      status: "Paid",
      companyDetails: {
        name: "Shiven Digital",
        address: "123 Business Hub, India",
        phone: "+91 9876543210",
        email: "contact@shiven.com",
        website: "www.shiven.com",
      },
      billTo: {
        name: "Tech Corp",
        email: "finance@techcorp.com",
        address: "Mumbai, Maharashtra",
      },
      items: [
        {
          description: "SEO Consultation",
          quantity: 1,
          unitPrice: 15000,
          amount: 15000,
        },
      ],
      subTotal: 15000,
      total: 15000,
      balanceDue: 0,
      notes: "Payment received. Thank you!",
    });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Consultant Financial Dashboard
      </h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full">
            <IndianRupee />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Outstanding</p>
            <p className="text-2xl font-bold">
              {formatCurrency(dummyMetrics.totalOutstanding)}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-red-50 text-red-600 rounded-full">
            <AlertCircle />
          </div>
          <div>
            <p className="text-sm text-gray-500">Overdue Amount</p>
            <p className="text-2xl font-bold">
              {formatCurrency(dummyMetrics.overdueAmount)}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-full">
            <TrendingUp />
          </div>
          <div>
            <p className="text-sm text-gray-500">Revenue (Month)</p>
            <p className="text-2xl font-bold">
              {formatCurrency(dummyMetrics.revenueMonth)}
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b font-bold text-gray-700">
          Recent Invoices
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4">Invoice #</th>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4 text-right">Total</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {dummyInvoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">{inv.invoiceNo}</td>
                <td className="px-6 py-4">{inv.client}</td>
                <td className="px-6 py-4 text-right">
                  {formatCurrency(inv.total)}
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      inv.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {inv.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleOpenInvoice(inv.id)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <Eye size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InvoiceModal
        isOpen={!!selectedInvoice}
        onClose={() => setSelectedInvoice(null)}
        invoiceData={selectedInvoice}
      />
    </div>
  );
};

export default InvoicesAndQuotes;

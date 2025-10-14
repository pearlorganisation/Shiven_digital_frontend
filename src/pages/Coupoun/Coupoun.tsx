import React from 'react'
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { Plus } from 'lucide-react'

type Coupon = {
  code: string
  description?: string
  discount: string
  redemptions: string
  status: 'Active' | 'Inactive'
  expiresAt: string
}

const coupons: Coupon[] = [
  {
    code: 'SDFSDF',
    description: 'dfgthrghsrthrhyhggnhhjjhghghmj',
    discount: '₹111',
    redemptions: '0 / 121',
    status: 'Inactive',
    expiresAt: '2025-06-30',
  },
  {
    code: '0KAY',
    description: '12',
    discount: '20%',
    redemptions: '12 / 12',
    status: 'Active',
    expiresAt: '2025-06-30',
  },
  {
    code: 'DS43',
    description: '1211',
    discount: '₹12',
    redemptions: '0 / 22',
    status: 'Inactive',
    expiresAt: '2025-06-13',
  },
]

const CouponManager: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6 md:p-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Manage Coupons</h1>
          <p className="text-gray-600 mt-1">
            Create, update, and deactivate promotional coupon codes.
          </p>
        </div>
        <button className="flex items-center gap-2 mt-4 md:mt-0 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm font-medium shadow">
          <Plus className="w-4 h-4" />
          Create New Coupon
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Code</th>
              <th className="px-6 py-4">Discount</th>
              <th className="px-6 py-4">Redemptions</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Expires At</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 font-semibold text-indigo-700">
                  <div>
                    {coupon.code}
                    {coupon.description && (
                      <div className="text-xs text-gray-500">
                        {coupon.description}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">{coupon.discount}</td>
                <td className="px-6 py-4">{coupon.redemptions}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${
                      coupon.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {coupon.status}
                  </span>
                </td>
                <td className="px-6 py-4">{coupon.expiresAt}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      className="text-green-600 hover:text-green-800"
                      title="View"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </button>
                    <button
                      className="text-indigo-600 hover:text-indigo-800"
                      title="Edit"
                    >
                      <PencilSquareIcon className="w-5 h-5" />
                    </button>
                    {coupon.status === 'Active' && (
                      <button
                        className="text-red-600 hover:text-red-700"
                        title="Delete"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CouponManager

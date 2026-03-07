import React from "react";
import { Edit, Trash2, Eye } from "lucide-react";
import type{ Coupon } from "@/components/Helpers/types";


interface CouponsTableProps {
  coupons: Coupon[];
  onEdit: (coupon: Coupon) => void;
  onDelete: (id: string) => void;
  isLoading?: boolean;
  onViewCodeRedemptions: (id: string) => void;
}

const formatDiscount = (type: string, value: number) => {
  if (type === "PERCENTAGE") {
    return `${value}%`;
  }
  if (type === "FIXED_AMOUNT") {
    return `₹${value}`;
  }
  return value;
};

export const CouponsTable: React.FC<CouponsTableProps> = ({
  coupons,
  onEdit,
  onDelete,
  isLoading,
  onViewCodeRedemptions,
}) => {
  if (isLoading && coupons.length === 0) {
    return (
      <div className="flex items-center justify-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Loading coupons...</p>
        </div>
      </div>
    );
  }

  if (!isLoading && coupons.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
        <div className="p-4 bg-gray-50 rounded-full mb-4">
          <Trash2 className="w-8 h-8 text-gray-300" />
        </div>
        <p className="text-gray-500 font-medium">No coupons found. Create one to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Code</th>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Discount</th>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Redemptions</th>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Expires At</th>
              <th className="px-8 py-5 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-50">
            {coupons.map((coupon) => (
              <tr key={coupon.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-5 whitespace-nowrap">
                  <div className="font-mono text-sm text-indigo-600 font-black tracking-tight">{coupon.code}</div>
                  <div className="text-xs text-gray-400 truncate max-w-xs mt-1">{coupon.description}</div>
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-sm font-bold text-gray-900">
                  {formatDiscount(coupon.discountType, coupon.discountValue)}
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                  <span className="font-bold text-gray-900">{coupon.currentRedemptions}</span>
                  <span className="text-gray-300 mx-1">/</span>
                  <span className="text-gray-400">{coupon.maxRedemptions || "∞"}</span>
                </td>
                <td className="px-8 py-5 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                      coupon.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {coupon.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                  {coupon.expiresAt ? new Date(coupon.expiresAt).toLocaleDateString() : "-"}
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => onViewCodeRedemptions(coupon.id)}
                      className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
                      title="View Redemptions"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => onEdit(coupon)}
                      className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                      title="Edit Coupon"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    {coupon.isActive && (
                      <button
                        onClick={() => onDelete(coupon.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        title="Deactivate Coupon"
                      >
                        <Trash2 className="w-5 h-5" />
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
  );
};

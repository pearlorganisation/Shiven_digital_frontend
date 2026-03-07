import React from "react";
import { X, User, Calendar } from "lucide-react";
import type{ Coupon,CouponRedemption } from "@/components/Helpers/types";


interface CouponRedemptionsModalProps {
  couponRedemptions: CouponRedemption[];
  onClose: () => void;
}

export const CouponRedemptionsModal: React.FC<CouponRedemptionsModalProps> = ({ couponRedemptions, onClose }) => {
  const renderContent = () => {
    if (couponRedemptions.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <div className="p-4 bg-white rounded-full mb-4 shadow-sm">
            <User className="w-8 h-8 text-gray-300" />
          </div>
          <p className="text-gray-500 font-medium">No redemptions found.</p>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Redeemed By</th>
                <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Date Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-50">
              {couponRedemptions.map((redemption) => (
                <tr key={redemption.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-sm font-bold text-gray-900">{redemption.userId.fullName}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-gray-300" />
                      <span>{new Date(redemption.createdAt).toLocaleString()}</span>
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-bold text-gray-900">Coupon Redemptions</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-8">{renderContent()}</div>

        <div className="p-6 border-t flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

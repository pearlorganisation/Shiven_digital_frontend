import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { X } from "lucide-react";
import type{ Coupon } from "@/components/Helpers/types";

interface CouponFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (coupon: Partial<Coupon>) => void;
  coupon?: Coupon | null;
}

export const CouponForm: React.FC<CouponFormProps> = ({ isOpen, onClose, onSubmit, coupon }) => {
  const initialFormState: Partial<Coupon> = {
    code: "",
    description: "",
    discountType: "PERCENTAGE",
    discountValue: 0,
    maxRedemptions: null,
    expiresAt: "",
  };

  const [formData, setFormData] = useState<Partial<Coupon>>(initialFormState);

  useEffect(() => {
    if (coupon) {
      setFormData({
        ...coupon,
        expiresAt: coupon.expiresAt
          ? new Date(coupon.expiresAt).toISOString().split("T")[0]
          : "",
      });
    } else {
      setFormData(initialFormState);
    }
  }, [coupon, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      maxRedemptions: formData.maxRedemptions === null || (formData.maxRedemptions as any) === "" ? null : Number(formData.maxRedemptions),
      discountValue: Number(formData.discountValue),
      expiresAt: formData.expiresAt === "" ? null : formData.expiresAt,
    };
    onSubmit(payload);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-bold text-gray-900">
            {coupon ? "Edit Coupon" : "Create New Coupon"}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Coupon Code</label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none uppercase font-mono"
                placeholder="e.g. SAVE50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Discount Type</label>
              <select
                name="discountType"
                value={formData.discountType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
              >
                <option value="PERCENTAGE">Percentage</option>
                <option value="FIXED_AMOUNT">Fixed Amount (₹)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Description</label>
            <textarea
              name="description"
              rows={2}
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="What is this coupon for?"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Discount Value</label>
              <input
                type="number"
                name="discountValue"
                value={formData.discountValue}
                onChange={handleChange}
                required
                placeholder={formData.discountType === "PERCENTAGE" ? "e.g. 20 for 20%" : "e.g. 1000"}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Max Redemptions</label>
              <input
                type="number"
                name="maxRedemptions"
                value={formData.maxRedemptions || ""}
                onChange={handleChange}
                placeholder="Unlimited if blank"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Expires At</label>
            <input
              type="date"
              name="expiresAt"
              value={formData.expiresAt || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="pt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all"
            >
              {coupon ? "Update Coupon" : "Save Coupon"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

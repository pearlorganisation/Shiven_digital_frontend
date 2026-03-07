import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Trash2 } from 'lucide-react';
import { SubscriptionPlan, DiscountConfig } from '../types';
import { FINANCIAL_TOOLS } from '../constants';

interface PlanFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (plan: Partial<SubscriptionPlan>) => void;
  initialData?: SubscriptionPlan;
}

export const PlanForm: React.FC<PlanFormProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState<Partial<SubscriptionPlan>>({
    name: '',
    uniqueName: '',
    price: 0,
    storageLimit: 0,
    isTrial: false,
    trialDays: 0,
    features: [],
    financialTools: [],
    financeCalculators: false,
    customizedForms: false,
    serviceCount: 0,
    discounts: {
      monthly: { type: 'PERCENTAGE', value: 0 },
      quarterly: { type: 'PERCENTAGE', value: 0 },
      halfYearly: { type: 'PERCENTAGE', value: 0 },
      yearly: { type: 'PERCENTAGE', value: 0 },
    },
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: '',
        uniqueName: '',
        price: 0,
        storageLimit: 0,
        isTrial: false,
        trialDays: 0,
        features: [],
        financialTools: [],
        financeCalculators: false,
        customizedForms: false,
        serviceCount: 0,
        discounts: {
          monthly: { type: 'PERCENTAGE', value: 0 },
          quarterly: { type: 'PERCENTAGE', value: 0 },
          halfYearly: { type: 'PERCENTAGE', value: 0 },
          yearly: { type: 'PERCENTAGE', value: 0 },
        },
      });
    }
  }, [initialData, isOpen]);

  const [newFeature, setNewFeature] = useState('');

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...(prev.features || []), newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: (prev.features || []).filter((_, i) => i !== index)
    }));
  };

  const toggleFinancialTool = (tool: string) => {
    setFormData(prev => {
      const current = prev.financialTools || [];
      const updated = current.includes(tool)
        ? current.filter(t => t !== tool)
        : [...current, tool];
      return { ...prev, financialTools: updated };
    });
  };

  const updateDiscount = (period: keyof SubscriptionPlan['discounts'], field: keyof DiscountConfig, value: any) => {
    setFormData(prev => ({
      ...prev,
      discounts: {
        ...prev.discounts!,
        [period]: {
          ...prev.discounts![period],
          [field]: value
        }
      }
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            {initialData ? 'Edit Price Plan' : 'Add Price Plan'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <form className="p-8 space-y-8" onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Display Plan Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="e.g. Pro Plan"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Unique Plan Name</label>
              <input
                type="text"
                value={formData.uniqueName}
                onChange={(e) => setFormData({ ...formData, uniqueName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="e.g. pro_plan_v1"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Price (₹)</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Storage Limit (MB)</label>
              <input
                type="number"
                value={formData.storageLimit}
                onChange={(e) => setFormData({ ...formData, storageLimit: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isTrial}
                onChange={(e) => setFormData({ ...formData, isTrial: e.target.checked })}
                className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm font-semibold text-gray-700">Is Trial Plan</span>
            </label>
            {formData.isTrial && (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">Trial Days:</span>
                <input
                  type="number"
                  value={formData.trialDays}
                  onChange={(e) => setFormData({ ...formData, trialDays: Number(e.target.value) })}
                  className="w-20 px-3 py-1 rounded-lg border border-gray-200 outline-none"
                />
              </div>
            )}
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.financeCalculators}
                onChange={(e) => setFormData({ ...formData, financeCalculators: e.target.checked })}
                className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm font-semibold text-gray-700">Finance Calculators</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.customizedForms}
                onChange={(e) => setFormData({ ...formData, customizedForms: e.target.checked })}
                className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm font-semibold text-gray-700">Customized Forms</span>
            </label>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Custom Features</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 outline-none"
                placeholder="Enter a new feature name"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700"
              >
                ADD
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {formData.features?.map((feature, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-sm text-gray-700">{feature}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(idx)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Financial Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FINANCIAL_TOOLS.map((tool) => (
                <label key={tool} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.financialTools?.includes(tool)}
                    onChange={() => toggleFinancialTool(tool)}
                    className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-600">{tool}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Discounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(['monthly', 'quarterly', 'halfYearly', 'yearly'] as const).map((period) => (
                <div key={period} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">{period}</h4>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Discount Type</label>
                      <select
                        value={formData.discounts?.[period].type}
                        onChange={(e) => updateDiscount(period, 'type', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none bg-white"
                      >
                        <option value="PERCENTAGE">Percent</option>
                        <option value="FIXED_AMOUNT">Fixed Amount</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Discount Value</label>
                      <input
                        type="number"
                        value={formData.discounts?.[period].value}
                        onChange={(e) => updateDiscount(period, 'value', Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none bg-white"
                      />
                      <p className="text-[10px] text-gray-400 mt-1">Discount value cannot exceed 100%.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t">
            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all"
            >
              {initialData ? 'UPDATE PLAN' : 'ADD PLAN'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

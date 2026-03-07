import React from 'react';
import { motion } from 'motion/react';
import { Check, MoreVertical, Cloud, Settings } from 'lucide-react';
import type{ SubscriptionPlan } from '../Helpers/types';

interface PlanCardProps {
  plan: SubscriptionPlan;
  onSelect: (plan: SubscriptionPlan) => void;
  onEdit?: (plan: SubscriptionPlan) => void;
  onDelete?: (id: string) => void;
  isCurrent?: boolean;
  isAdmin?: boolean;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect, onEdit, onDelete, isCurrent, isAdmin }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
    >
      {/* Badge */}
      {plan.isTrial && (
        <div className="absolute top-0 left-0">
          <div className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-br-lg shadow-sm">
            Trial Plan ({plan.trialDays} days)
          </div>
        </div>
      )}

      {/* Three-dot menu for Admin */}
      {isAdmin && (
        <div className="absolute top-4 right-4 group">
          <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400">
            <MoreVertical className="w-5 h-5" />
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button 
              onClick={() => onEdit?.(plan)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete?.(plan.id)}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              Delete
            </button>
          </div>
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col items-center text-center">
        <h3 className="text-2xl font-black text-gray-900 mb-1">{plan.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{plan.uniqueName}</p>
        
        <div className="mb-8">
          {plan.price === 0 ? (
            <span className="text-4xl font-black text-green-500">Free</span>
          ) : (
            <div className="flex items-baseline justify-center">
              <span className="text-3xl font-black text-blue-600">₹{plan.price}</span>
              <span className="text-gray-400 text-sm ml-1">/year</span>
            </div>
          )}
        </div>

        <div className="w-full h-px bg-gray-100 mb-6" />

        <ul className="w-full space-y-3 mb-8 text-left">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600">
              <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          <li className="flex items-center text-sm text-gray-600">
            <Cloud className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
            <span>Allowed Storage: {plan.storageLimit} MB</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Settings className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
            <span>{plan.serviceCount} Services</span>
          </li>
        </ul>
      </div>

      <div className="p-6 pt-0">
        <button
          onClick={() => onSelect(plan)}
          disabled={isCurrent}
          className={`w-full py-3 rounded-xl font-bold transition-all ${
            isCurrent
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
          }`}
        >
          {isCurrent ? 'Current Plan' : 'Choose Plan'}
        </button>
      </div>
    </motion.div>
  );
};

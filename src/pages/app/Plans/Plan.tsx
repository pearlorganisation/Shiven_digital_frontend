"use client";

import { Check, X, HardDrive, Layers } from "lucide-react";

type Plan = {
  name: string;
  internalName: string;
  price: string;
  duration?: string;
  features: { label: string; available: boolean }[];
  storage: string;
  services: number;
  badge?: string; // e.g. "Trial Plan (5 days)"
};

const plans: Plan[] = [
  {
    name: "Basic Plan",
    internalName: "basicplaninternalname",
    price: "₹6040/month",
    features: [
      { label: "Finance Calculators", available: true },
      { label: "Cash Register", available: true },
      { label: "Whatsapp Notifications", available: false },
    ],
    storage: "300 MB",
    services: 15,
  },
  {
    name: "Medium Plan",
    internalName: "medium_plan",
    price: "₹799/month",
    features: [
      { label: "Finance Calculators", available: true },
      { label: "Cash Register", available: false },
      { label: "Whatsapp Notifications", available: false },
    ],
    storage: "0 Bytes",
    services: 10,
  },
  {
    name: "Premium Plan",
    internalName: "premium_plan",
    price: "₹999/month",
    features: [
      { label: "Finance Calculators", available: false },
      { label: "Cash Register", available: true },
      { label: "Whatsapp Notifications", available: false },
    ],
    storage: "0 Bytes",
    services: 13,
  },
  {
    name: "Random Plan 2049",
    internalName: "blader+namer",
    price: "₹1212/month",
    features: [
      { label: "Finance Calculators", available: false },
      { label: "Cash Register", available: false },
      { label: "Whatsapp Notifications", available: false },
    ],
    storage: "10 MB",
    services: 12,
  },
  {
    name: "New Plan",
    internalName: "new-plan nmae",
    price: "₹200/month",
    features: [
      { label: "Finance Calculators", available: true },
      { label: "Cash Register", available: true },
      { label: "Whatsapp Notifications", available: true },
    ],
    storage: "20 MB",
    services: 12,
  },
  {
    name: "Basic Plan 2323",
    internalName: "232323",
    price: "₹1212/month",
    features: [
      { label: "Finance Calculators", available: true },
      { label: "Cash Register", available: false },
      { label: "Whatsapp Notifications", available: false },
    ],
    storage: "12 MB",
    services: 0,
  },
  {
    name: "Trial Plan",
    internalName: "okays",
    price: "Free",
    badge: "Trial Plan (5 days)",
    features: [
      { label: "Finance Calculators", available: true },
      { label: "Cash Register", available: true },
      { label: "Whatsapp Notifications", available: true },
    ],
    storage: "12 MB",
    services: 6,
  },
];

export default function Plan() {
  return (
    <div className="p-2 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Plans</h1>
        <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition">
          + Add Plan
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition"
          >
            {/* Badge for special plans */}
            {plan.badge && (
              <span className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {plan.badge}
              </span>
            )}

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900">{plan.name}</h2>
            <p className="text-sm text-gray-500">{plan.internalName}</p>

            {/* Price */}
            <p className="mt-4 text-3xl font-bold text-blue-600">{plan.price}</p>

            {/* Features */}
            <ul className="mt-5 space-y-3">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  {feature.available ? (
                    <Check size={16} className="text-green-600" />
                  ) : (
                    <X size={16} className="text-red-500" />
                  )}
                  <span
                    className={
                      feature.available ? "text-gray-800" : "text-gray-400"
                    }
                  >
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Storage + Services */}
            <div className="mt-6 border-t pt-4 text-sm text-gray-600 space-y-2">
              <p className="flex items-center gap-2">
                <HardDrive size={16} className="text-blue-500" /> Allowed
                Storage: {plan.storage}
              </p>
              <p className="flex items-center gap-2">
                <Layers size={16} className="text-blue-500" /> {plan.services}{" "}
                Services
              </p>
            </div>

            {/* CTA */}
            <button className="mt-6 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow transition">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

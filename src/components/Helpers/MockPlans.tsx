import type{ SubscriptionPlan, Coupon, CouponRedemption } from './types';

export const MOCK_PLANS: SubscriptionPlan[] = [
  {
    id: '1',
    name: 'abhishek',
    uniqueName: 'hfhfhfh',
    price: 0,
    storageLimit: 300,
    isTrial: true,
    trialDays: 59,
    features: ['Basic Messaging', 'Email Support'],
    financialTools: ['Daily Cash Register', 'Monthly Budget Tracker'],
    financeCalculators: true,
    customizedForms: false,
    serviceCount: 8,
    discounts: {
      monthly: { type: 'PERCENTAGE', value: 0 },
      quarterly: { type: 'PERCENTAGE', value: 5 },
      halfYearly: { type: 'PERCENTAGE', value: 10 },
      yearly: { type: 'PERCENTAGE', value: 20 },
    },
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'sdfsdf',
    uniqueName: 'sdfsadf',
    price: 2810748,
    storageLimit: 234,
    isTrial: false,
    features: ['second data', 'dddd'],
    financialTools: ['Annual Business Budget', 'Expense Report'],
    financeCalculators: true,
    customizedForms: true,
    serviceCount: 3,
    discounts: {
      monthly: { type: 'PERCENTAGE', value: 0 },
      quarterly: { type: 'PERCENTAGE', value: 10 },
      halfYearly: { type: 'PERCENTAGE', value: 15 },
      yearly: { type: 'PERCENTAGE', value: 25 },
    },
    isActive: true,
    createdAt: new Date().toISOString(),
  }
];

export const MOCK_COUPONS: Coupon[] = [
  {
    id: 'c1',
    code: 'WELCOME50',
    description: '50% off for new users',
    discountType: 'PERCENTAGE',
    discountValue: 50,
    maxRedemptions: 100,
    currentRedemptions: 45,
    expiresAt: '2026-12-31T23:59:59Z',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'c2',
    code: 'SAVE1000',
    description: 'Flat ₹1000 off on yearly plans',
    discountType: 'FIXED_AMOUNT',
    discountValue: 1000,
    maxRedemptions: 50,
    currentRedemptions: 12,
    expiresAt: '2026-06-30T23:59:59Z',
    isActive: true,
    createdAt: new Date().toISOString(),
  }
];

export const MOCK_REDEMPTIONS: Record<string, CouponRedemption[]> = {
  'c1': [
    {
      id: 'r1',
      couponId: 'c1',
      userId: { id: 'u1', fullName: 'John Doe' },
      createdAt: '2026-02-15T10:30:00Z'
    },
    {
      id: 'r2',
      couponId: 'c1',
      userId: { id: 'u2', fullName: 'Jane Smith' },
      createdAt: '2026-02-16T14:20:00Z'
    }
  ],
  'c2': [
    {
      id: 'r3',
      couponId: 'c2',
      userId: { id: 'u3', fullName: 'Bob Wilson' },
      createdAt: '2026-02-20T09:15:00Z'
    }
  ]
};

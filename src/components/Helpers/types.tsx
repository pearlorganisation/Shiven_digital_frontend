export const UserRole = {
  ADMIN: '0',
  STAFF: '3',
  CUSTOMER: '1',
  CUSTOMER_MANAGER: '2',
  SERVICE_PROVIDER: '4'
} as const;

export interface SubscriptionPlan {
  id: string;
  name: string;
  uniqueName: string;
  price: number;
  storageLimit: number; // in MB
  isTrial: boolean;
  trialDays?: number;
  features: string[];
  financialTools: string[];
  financeCalculators: boolean;
  customizedForms: boolean;
  serviceCount: number;
  discounts: {
    monthly: DiscountConfig;
    quarterly: DiscountConfig;
    halfYearly: DiscountConfig;
    yearly: DiscountConfig;
  };
  isActive: boolean;
  createdAt: string;
}

export interface DiscountConfig {
  type: 'PERCENTAGE' | 'FIXED_AMOUNT';
  value: number;
}


export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: 'PERCENTAGE' | 'FIXED_AMOUNT';
  discountValue: number;
  maxRedemptions: number | null;
  currentRedemptions: number;
  expiresAt: string | null;
  isActive: boolean;
  createdAt: string;
}

export interface CouponRedemption {
  id: string;
  couponId: string;
  userId: {
    id: string;
    fullName: string;
  };
  createdAt: string;
}



export type UserRole = typeof UserRole[keyof typeof UserRole];
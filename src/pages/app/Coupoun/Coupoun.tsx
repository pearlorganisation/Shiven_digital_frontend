import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Ticket, Search, Filter } from 'lucide-react';
import { CouponsTable } from '@/components/Coupoun/CouponsTable';
import { CouponForm } from '@/components/Coupoun/CouponForm';
import { CouponRedemptionsModal } from '@/components/Coupoun/CouponRedemptionsModal';
import { MOCK_COUPONS, MOCK_REDEMPTIONS } from '@/components/Helpers/MockPlans';
import type{ Coupon, CouponRedemption } from '@/components/Helpers/types';
import { ConfirmationModal } from '@/components/Helpers/ConfirmationModal';

 const ManageCouponsPage: React.FC = () => {
 const [coupons, setCoupons] = useState<Coupon[]>(MOCK_COUPONS);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [selectedRedemptions, setSelectedRedemptions] = useState<CouponRedemption[] | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [couponToDelete, setCouponToDelete] = useState<string | null>(null);

  // Filtered coupons
  const filteredCoupons = coupons.filter(coupon => 
    coupon.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coupon.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenCreateForm = () => {
    setEditingCoupon(null);
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (coupon: Coupon) => {
    setEditingCoupon(coupon);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingCoupon(null);
  };
  
  const handleDeleteClick = (couponId: string) => {
    setCouponToDelete(couponId);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    if (couponToDelete) {
      setCoupons(prev => prev.map(c => 
        c.id === couponToDelete ? { ...c, isActive: false } : c
      ));
      setCouponToDelete(null);
    }
  };

  const handleFormSubmit = (couponData: Partial<Coupon>) => {
    if (editingCoupon) {
      // Update mode
      setCoupons(prev => prev.map(c => 
        c.id === editingCoupon.id ? { ...c, ...couponData } as Coupon : c
      ));
    } else {
      // Create mode
      const newCoupon: Coupon = {
        ...couponData,
        id: `c${Date.now()}`,
        currentRedemptions: 0,
        isActive: true,
        createdAt: new Date().toISOString(),
      } as Coupon;
      setCoupons(prev => [newCoupon, ...prev]);
    }
    handleCloseForm();
  };

  const handleViewCodeRedemptions = (id: string) => {
    // In a real app, this would be an API call
    const redemptions = MOCK_REDEMPTIONS[id] || [];
    setSelectedRedemptions(redemptions);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 p-6"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Manage Coupons</h1>
          <p className="text-gray-500 mt-2">Create, update, and deactivate promotional coupon codes.</p>
        </div>
        <button
          onClick={handleOpenCreateForm}
          className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 flex items-center justify-center transition-all"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create New Coupon
        </button>
      </div>

      {/* Stats & Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4">
          <div className="p-4 bg-indigo-50 rounded-2xl">
            <Ticket className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Coupons</p>
            <p className="text-2xl font-black text-gray-900">{coupons.length}</p>
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input
              type="text"
              placeholder="Search by code or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <button className="p-3 bg-gray-50 text-gray-400 rounded-2xl hover:bg-gray-100 transition-colors">
            <Filter className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <CouponsTable 
          coupons={filteredCoupons} 
          onEdit={handleOpenEditForm}
            onDelete={handleDeleteClick}
          isLoading={isLoading}
          onViewCodeRedemptions={handleViewCodeRedemptions}
        />
      </div>
      
      {/* Modals */}
      <AnimatePresence>
        {isFormOpen && (
          <CouponForm
            isOpen={isFormOpen}
            onClose={handleCloseForm}
            onSubmit={handleFormSubmit}
            coupon={editingCoupon}
          />
        )}

        {selectedRedemptions && (
          <CouponRedemptionsModal
            onClose={() => setSelectedRedemptions(null)}
            couponRedemptions={selectedRedemptions}
          />
        )}
        {isConfirmModalOpen && (
          <ConfirmationModal
            isOpen={isConfirmModalOpen}
            onClose={() => setIsConfirmModalOpen(false)}
            onConfirm={confirmDelete}
            title="Deactivate Coupon?"
            message="Are you sure you want to deactivate this coupon? It will no longer be redeemable by customers."
            confirmText="Deactivate"
            type="danger"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};


export default ManageCouponsPage;

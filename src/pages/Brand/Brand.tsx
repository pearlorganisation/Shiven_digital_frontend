"use client";

import { errorToast, successToast } from "@/utils/helper";
import type { GetBrandApiResponseType, BrandType } from "@/schemas/brand/brandSchema";
import type { CreateBrandPayloadType, UpdateBrandPayloadType } from "@/schemas/brand/payloadBrandSchema";
import brandService from "@/services/brandService";
import { useMutation } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect, useState } from "react";
import { Plus, Loader2 } from "lucide-react";

import BrandCard from "@/component/Brands/BrandCard";
import BrandModal from "@/component/Brands/BrandModal";
import DeleteModal from "@/component/Brands/DeleteModal";
import { setbrand } from "@/store/slice/brandSlice";

const BrandsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { brands } = useAppSelector((state) => state.brands);
  const { user } = useAppSelector((state) => state.auth);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentBrand, setCurrentBrand] = useState<BrandType>();
  const [brandToDelete, setBrandToDelete] = useState<BrandType | null>(null);
  const [modalMode, setModalMode] = useState<"create" | "view" | "edit">("create");

  // Fetch brands
  const getBrandMutation = useMutation({
    mutationFn: brandService.getBrand,
    onSuccess: (res: GetBrandApiResponseType) => {
      dispatch(setbrand(res.data.brands));
    },
    onError: (err: any) => {
      errorToast(err.message || "Failed to fetch brands.");
    },
  });

  // Create / Update brand
  const saveBrandMutation = useMutation({
    mutationFn: async (brandData: CreateBrandPayloadType) => {
      if (modalMode === "edit" && currentBrand?._id) {
        return brandService.updateBrand(currentBrand._id, brandData);
      } else {
        return brandService.createBrand(brandData);
      }
    },
    onSuccess: () => {
      successToast(`Brand ${modalMode === "edit" ? "updated" : "created"} successfully!`);
      getBrandMutation.mutate(); // Refresh list
      handleCloseModal();
    },
    onError: (err: any) => {
      errorToast(err.message || `Failed to ${modalMode} brand.`);
    },
  });

  // Delete brand
  const deleteBrandMutation = useMutation({
    mutationFn: async (brandId: string) => brandService.deleteBrand(brandId),
    onSuccess: () => {
      successToast("Brand deleted successfully!");
      getBrandMutation.mutate(); // Refresh list
      handleCloseDeleteModal();
    },
    onError: (err: any) => {
      errorToast(err.message || "Failed to delete brand.");
    },
  });

  useEffect(() => {
    getBrandMutation.mutate();
  }, []);

  const handleOpenModal = (mode: "create" | "view" | "edit", brand?: BrandType) => {
    setModalMode(mode);
    setCurrentBrand(brand);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentBrand(undefined);
  };

  const handleOpenDeleteModal = (brand: BrandType) => {
    setBrandToDelete(brand);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setBrandToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (brandToDelete?._id) {
      deleteBrandMutation.mutate(brandToDelete._id);
    }
  };

  const handleSaveBrand = (brandData: BrandType) => {
    saveBrandMutation.mutate(brandData);
  };

  if (getBrandMutation.isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="flex items-center space-x-3 text-gray-700">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="text-2xl font-medium">Loading Brands...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      {/* Header & Stats Section */}
      <div className="bg-white shadow-lg border-b border-gray-200 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  My Brands
                </h1>
                <p className="text-gray-600 mt-1">Manage your brand portfolio</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleOpenModal("create")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Add Brand</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {brands.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No brands found</h3>
            <p className="text-gray-500 mb-6">Get started by creating your first brand</p>
            <button
              onClick={() => handleOpenModal("create")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Create Brand
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <BrandCard
                key={brand._id}
                brand={brand}
                onView={() => handleOpenModal("view", brand)}
                // onEdit={() => handleOpenModal("edit", brand)}
                onDelete={() => handleOpenDeleteModal(brand)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      <BrandModal
        isOpen={isModalOpen}
        mode={modalMode}
        brand={currentBrand}
        onClose={handleCloseModal}
        onSave={handleSaveBrand}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        brand={brandToDelete}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default BrandsPage;

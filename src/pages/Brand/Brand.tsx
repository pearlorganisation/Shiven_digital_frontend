// BrandsPage.tsx
import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import BrandCard from '@/component/Brands/BrandCard';
import BrandModal from '@/component/Brands/BrandModal';
import type { Brand } from '@/component/Brands/types';
import DeleteModal from '@/component/Brands/DeleteModal';

const dummyBrands: Brand[] = [
  {
    id: '1',
    _id: '68ca8fb410ddfc8790f24547',
    name: 'Nike',
    logo: 'https://logoeps.com/wp-content/uploads/2013/03/nike-logo-vector-download.png',
    description: 'Just Do It - The world\'s leading sportswear brand',
    website: 'https://www.nike.com',
    contact: {
      email: 'support@nike.com',
      phone: '+1 800 123 4567',
      address: {
        country: 'USA',
        city: 'Beaverton',
        location: 'One Bowerman Dr'
      }
    },
    social: {
      instagram: 'https://instagram.com/nike',
      facebook: 'https://facebook.com/nike',
      twitter: 'https://twitter.com/nike'
    },
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Adidas',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png',
    description: 'The three stripes - Performance and style',
    website: 'https://www.adidas.com',
    contact: {
      email: 'contact@adidas.com',
      phone: '+49 1806 123456',
      address: {
        country: 'Germany',
        city: 'Herzogenaurach',
        location: 'Adi-Dassler-Str. 1'
      }
    },
    social: {
      instagram: 'https://instagram.com/adidas',
      facebook: 'https://facebook.com/adidas',
      twitter: 'https://twitter.com/adidas',
      youtube: 'https://youtube.com/adidas'
    },
    createdAt: '2024-01-16T14:20:00Z',
    updatedAt: '2024-01-16T14:20:00Z'
  },
  {
    id: '3',
    name: 'Puma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Puma_Logo.svg/1200px-Puma_Logo.svg.png',
    description: 'Forever Faster - Speed and innovation',
    website: 'https://www.puma.com',
    contact: {
      email: 'info@puma.com',
      phone: '+49 9132 810',
      address: {
        country: 'Germany',
        city: 'Herzogenaurach',
        location: 'PUMA Way 1'
      }
    },
    social: {
      instagram: 'https://instagram.com/puma',
      facebook: 'https://facebook.com/puma',
      twitter: 'https://twitter.com/puma',
      linkedin: 'https://linkedin.com/company/puma'
    },
    createdAt: '2024-01-17T09:45:00Z',
    updatedAt: '2024-01-17T09:45:00Z'
  }
];

const BrandsPage: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>(dummyBrands);
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>(dummyBrands);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [currentBrand, setCurrentBrand] = useState<Brand | null>(null);
  const [brandToDelete, setBrandToDelete] = useState<Brand | null>(null);
  const [modalMode, setModalMode] = useState<'create' | 'view' | 'edit'>('create');

  useEffect(() => {
    const filtered = brands.filter(brand =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBrands(filtered);
  }, [searchTerm, brands]);

  const handleOpenModal = (mode: 'create' | 'view' | 'edit', brand?: Brand) => {
    setModalMode(mode);
    setCurrentBrand(brand || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentBrand(null);
    setModalMode('create');
  };

  const handleOpenDeleteModal = (brand: Brand) => {
    setBrandToDelete(brand);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setBrandToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (brandToDelete) {
      setBrands(brands.filter(b => b.id !== brandToDelete.id));
      handleCloseDeleteModal();
    }
  };

  const handleSaveBrand = (brandData: Brand) => {
    if (modalMode === 'create') {
      const newBrand = { ...brandData, id: Date.now().toString(), _id: Date.now().toString() };
      setBrands([...brands, newBrand]);
    } else if (modalMode === 'edit' && currentBrand) {
      setBrands(brands.map(b => b.id === currentBrand.id ? brandData : b));
    }
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
              </div>
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
                <Filter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleOpenModal('create')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Add Brand</span>
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-xl">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Brands</p>
                  <p className="text-2xl font-bold text-gray-900">{brands.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-xl">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active</p>
                  <p className="text-2xl font-bold text-gray-900">{brands.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-xl">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Social Reach</p>
                  <p className="text-2xl font-bold text-gray-900">{brands.reduce((acc, brand) => {
                    let count = 0;
                    if (brand.social.instagram) count++;
                    if (brand.social.facebook) count++;
                    if (brand.social.twitter) count++;
                    if (brand.social.youtube) count++;
                    if (brand.social.linkedin) count++;
                    return acc + count;
                  }, 0)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredBrands.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No brands found</h3>
            <p className="text-gray-500 mb-6">Get started by creating your first brand</p>
            <button
              onClick={() => handleOpenModal('create')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Create Brand
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map(brand => (
              <BrandCard
                key={brand.id}
                brand={brand}
                onView={() => handleOpenModal('view', brand)}
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
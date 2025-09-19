// BrandCard.tsx
import React from 'react';
import { Eye, Trash2, ExternalLink, Instagram, Facebook, Twitter, Youtube, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import type { Brand } from './types';

interface BrandCardProps {
  brand: Brand;
  onView: () => void;
  onDelete: () => void;
}

// const BrandCard: React.FC<BrandCardProps> = ({ brand, onView, onDelete }) => {
//   const getSocialCount = () => {
//     let count = 0;
//     if (brand.social.instagram) count++;
//     if (brand.social.facebook) count++;
//     if (brand.social.twitter) count++;
//     if (brand.social.youtube) count++;
//     if (brand.social.linkedin) count++;
//     return count;
//   };

  const SocialIcon = ({ platform, url }: { platform: keyof Brand['social']; url?: string }) => {
    const size = 16;
    const className = 'text-gray-500 hover:text-blue-600 transition-colors';
    
    if (!url) return null;

    const iconMap = {
      instagram: <Instagram size={size} className={className} />,
      facebook: <Facebook size={size} className={className} />,
      twitter: <Twitter size={size} className={className} />,
      youtube: <Youtube size={size} className={className} />,
      linkedin: <Linkedin size={size} className={className} />
    };

    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="group">
        {iconMap[platform as keyof typeof iconMap]}
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
          {platform.charAt(0).toUpperCase() + platform.slice(1)}
        </span>
      </a>
    );
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
        <button
          onClick={onView}
          className="p-2 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-200 text-blue-600 hover:text-blue-700 transition-all duration-200 shadow-sm"
          title="View Details"
        >
          <Eye size={16} />
        </button>
        <button
          onClick={onDelete}
          className="p-2 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 hover:bg-red-50 hover:border-red-200 text-red-600 hover:text-red-700 transition-all duration-200 shadow-sm"
          title="Delete Brand"
        >
          <Trash2 size={16} />
        </button>
      </div>

      {/* Logo Section */}
      <div className="relative h-38 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="relative">
          <img
            src={brand.logo}
            alt={brand.name}
            className="w-24 h-24 object-contain rounded-2xl shadow-lg bg-white p-2"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/96x96/6B7280/FFFFFF?text=' + brand.name.charAt(0);
            }}
          />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <ExternalLink size={12} className="text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
          {brand.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {brand.description || 'No description available'}
        </p>

        {/* Quick Stats */}
        {/* <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center py-2">
            <div className="text-2xl font-bold text-blue-600">{getSocialCount()}</div>
            <div className="text-xs text-gray-500">Social</div>
          </div>
          <div className="text-center py-2">
            <div className="text-2xl font-bold text-green-600">✓</div>
            <div className="text-xs text-gray-500">Active</div>
          </div>
          <div className="text-center py-2">
            <div className="text-2xl font-bold text-purple-600">USA</div>
            <div className="text-xs text-gray-500">HQ</div>
          </div>
        </div> */}

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-4 mb-4 pt-4 border-t border-gray-100">
          <SocialIcon platform="instagram" url={brand.social.instagram} />
          <SocialIcon platform="facebook" url={brand.social.facebook} />
          <SocialIcon platform="twitter" url={brand.social.twitter} />
          <SocialIcon platform="youtube" url={brand.social.youtube} />
          <SocialIcon platform="linkedin" url={brand.social.linkedin} />
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <Mail size={12} />
            <span className="truncate">{brand.contact.email}</span>
          </div>
          {brand.contact.phone && (
            <div className="flex items-center space-x-2">
              <Phone size={12} />
              <span>{brand.contact.phone}</span>
            </div>
          )}
          <div className="flex items-center space-x-2">
            <MapPin size={12} />
            <span className="truncate">{brand.contact.address.city}, {brand.contact.address.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
import React, { useState, useEffect } from "react";
import type { BrandType } from "@/schemas/brand/brandSchema";
import type {
  CreateBrandPayloadType,
  UpdateBrandPayloadType,
} from "@/schemas/brand/payloadBrandSchema";
import {
  X,
  Save,
  Globe,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Building2,
  Image,
  FileText,
  Link,
  Share as ShareSocial,
} from "lucide-react";

// The initial state for a new brand form, ensuring a clean slate every time.
const initialBrandState: BrandType = {
  name: "",
  logo: "",
  description: "",
  website: "",
  contact: {
    email: "",
    phone: "",
    address: {
      country: "",
      city: "",
      location: "",
    },
  },
  social: {
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
    linkedin: "",
  },
};

interface BrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: CreateBrandPayloadType) => void;
  // Prop included for API compatibility, but not used in this simplified component.
  onUpdate?: (id: string, data: UpdateBrandPayloadType) => void;
}

const BrandModal: React.FC<BrandModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState<BrandType>(initialBrandState);

  // Reset the form to its initial state whenever the modal becomes visible.
  useEffect(() => {
    if (isOpen) {
      setFormData(initialBrandState);
    }
  }, [isOpen]);

  /**
   * Handles input changes for both top-level and nested state properties.
   * It uses the input's `name` attribute (e.g., "name" or "contact.email") to update the state.
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const keys = name.split(".");
      setFormData((prev) => {
        // Deep copy to avoid direct state mutation, ensuring React re-renders correctly.
        const newData = JSON.parse(JSON.stringify(prev));
        let current = newData;
        // Navigate to the object that needs updating.
        for (let i = 0; i < keys.length - 1; i++) {
          current = current[keys[i]] = current[keys[i]] || {};
        }
        // Set the new value on the final key.
        current[keys[keys.length - 1]] = value;
        return newData;
      });
    } else {
      // Handle simple, top-level properties.
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  /**
   * Submits the form data, calls the parent `onCreate` function, and closes the modal.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  /**
   * Safely retrieves a potentially nested value from the formData state.
   * Returns an empty string if the path is invalid, preventing crashes.
   */
  const getFieldValue = (field: string): string => {
    const keys = field.split(".");
    let value: any = formData;
    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        return ""; // Path does not exist, return empty string.
      }
    }
    return value || "";
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Create New Brand</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <form onSubmit={handleSubmit} noValidate>
            {/* Basic Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Brand Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                  <FileText size={16} />
                  <span>Brand Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={getFieldValue("name")}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                  placeholder="Enter your brand name"
                />
              </div>

              {/* Logo URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                  <Image size={16} />
                  <span>Logo URL</span>
                </label>
                <input
                  type="url"
                  name="logo"
                  value={getFieldValue("logo")}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                  placeholder="https://example.com/logo.png"
                />
              </div>
            </div>

            {/* Description & Website */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                  <FileText size={16} />
                  <span>Description</span>
                </label>
                <textarea
                  name="description"
                  value={getFieldValue("description")}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none resize-none border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                  placeholder="Write a brief description about your brand..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                  <Globe size={16} />
                  <span>Website</span>
                </label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  <input
                    type="url"
                    name="website"
                    value={getFieldValue("website")}
                    onChange={handleInputChange}
                    className="w-full pl-10 px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center space-x-2">
                <Mail size={20} />
                <span>Contact Information</span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
                  <input
                    type="email"
                    name="contact.email"
                    value={getFieldValue("contact.email")}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                    placeholder="contact@brand.com"
                  />
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                  <input
                    type="tel"
                    name="contact.phone"
                    value={getFieldValue("contact.phone")}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                {/* Address Fields */}
                <div className="lg:col-span-2 space-y-4">
                  <input
                    type="text"
                    name="contact.address.location"
                    value={getFieldValue("contact.address.location")}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                    placeholder="Street address, building, etc."
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="contact.address.city"
                      value={getFieldValue("contact.address.city")}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                      placeholder="City"
                    />
                    <input
                      type="text"
                      name="contact.address.country"
                      value={getFieldValue("contact.address.country")}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                      placeholder="Country"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center space-x-2">
                <ShareSocial size={20} />
                <span>Social Media Profiles</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "social.instagram", placeholder: "https://instagram.com/username" },
                  { name: "social.facebook", placeholder: "https://facebook.com/username" },
                  { name: "social.twitter", placeholder: "https://twitter.com/username" },
                  { name: "social.youtube", placeholder: "https://youtube.com/@username" },
                  { name: "social.linkedin", placeholder: "https://linkedin.com/company/username" },
                ].map(({ name, placeholder }) => (
                  <input
                    key={name}
                    type="url"
                    name={name}
                    value={getFieldValue(name)}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 hover:border-gray-300"
                    placeholder={placeholder}
                  />
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-end items-center space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-sm"
            >
              Cancel
            </button>
            <button
              type="button" // Changed to button to prevent form submission, handled by onClick
              onClick={handleSubmit}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
            >
              <Save size={16} />
              <span>Create Brand</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;
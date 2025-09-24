// BrandModal.tsx
import React, { useState, useEffect } from "react";
import {
  X,
  Save,
  Edit3,
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
import type { BrandType } from "@/schemas/brand/brandSchema";

interface BrandModalProps {
  isOpen: boolean;
  mode: "create" | "view" | "edit";
  brand?: BrandType | null;
  onClose: () => void;
  onSave: (brand: BrandType) => void;
}

const BrandModal: React.FC<BrandModalProps> = ({
  isOpen,
  mode,
  brand,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<BrandType>({
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
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitError, setSubmitError] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      if (mode === "create") {
        setFormData({
          name: "",
          logo: "",
          description: "",
          website: "",
          contact: {
            email: "",
            phone: "",
            address: { country: "", city: "", location: "" },
          },
          social: {
            instagram: "",
            facebook: "",
            twitter: "",
            youtube: "",
            linkedin: "",
          },
        });
        setIsEditing(true);
        setErrors({});
        setSubmitError("");
      } else if (brand) {
        setFormData({
          ...brand,
          contact: brand.contact || {
            email: "",
            phone: "",
            address: { country: "", city: "", location: "" },
          },
          social: brand.social || {
            instagram: "",
            facebook: "",
            twitter: "",
            youtube: "",
            linkedin: "",
          },
        });
        setIsEditing(mode === "edit");
        setErrors({});
        setSubmitError("");
      }
    }
  }, [isOpen, mode, brand]);

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    setSubmitError("");

    // Validate name
    if (!formData.name?.trim()) {
      newErrors.name = "Brand name is required";
    }

    // Validate email
    if (!formData.contact?.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.contact.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate logo
    if (!formData.logo?.trim()) {
      newErrors.logo = "Logo URL is required";
    } else if (!formData.logo.startsWith("http")) {
      newErrors.logo = "Please enter a valid URL (starting with http)";
    }

    // Validate website
    if (!formData.website?.trim()) {
      newErrors.website = "Website URL is required";
    } else if (!formData.website.startsWith("http")) {
      newErrors.website = "Please enter a valid URL (starting with http)";
    }

    // Validate address
    if (!formData.contact?.address?.city?.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.contact?.address?.country?.trim()) {
      newErrors.country = "Country is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateNestedField = (path: string, value: string) => {
    const keys = path.split(".");
    setFormData((prev) => {
      const newData = { ...prev };
      let current: any = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key]) {
          if (key === "address") {
            current[key] = { country: "", city: "", location: "" };
          } else if (key === "contact") {
            current[key] = {
              email: "",
              phone: "",
              address: { country: "", city: "", location: "" },
            };
          } else if (key === "social") {
            current[key] = {
              instagram: "",
              facebook: "",
              twitter: "",
              youtube: "",
              linkedin: "",
            };
          } else {
            current[key] = {};
          }
        }
        current = current[key];
      }

      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });

    if (name.includes(".")) {
      updateNestedField(name, value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Create the complete brand object
        const completeBrand: BrandType = {
          name: formData.name || "",
          logo: formData.logo || "",
          description: formData.description || "",
          website: formData.website || "",
          contact: {
            email: formData.contact?.email || "",
            phone: formData.contact?.phone || "",
            address: {
              country: formData.contact?.address?.country || "",
              city: formData.contact?.address?.city || "",
              location: formData.contact?.address?.location || "",
            },
          },
          social: {
            instagram: formData.social?.instagram || "",
            facebook: formData.social?.facebook || "",
            twitter: formData.social?.twitter || "",
            youtube: formData.social?.youtube || "",
            linkedin: formData.social?.linkedin || "",
          },
        };

        onSave(completeBrand);
      } catch (error) {
        setSubmitError("Failed to save brand. Please try again.");
      }
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Reset errors when canceling edit
      setErrors({});
    }
  };

  if (!isOpen) return null;

  const isDisabled = !isEditing && mode !== "create";

  const getFieldValue = (field: string): string => {
    const keys = field.split(".");
    let value: any = formData;

    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        return "";
      }
    }

    return value || "";
  };

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
              <div>
                <h2 className="text-2xl font-bold">
                  {mode === "create"
                    ? "Create New Brand"
                    : mode === "view"
                    ? "Brand Details"
                    : "Edit Brand"}
                </h2>
                {brand && mode !== "create" && (
                  <p className="text-blue-100 text-sm">{brand.name}</p>
                )}
              </div>
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
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
                {submitError}
              </div>
            )}

            {/* Basic Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Brand Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                  <FileText size={16} />
                  <span>Brand Name</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={getFieldValue("name")}
                  onChange={handleInputChange}
                  disabled={isDisabled}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                    errors.name
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : isDisabled
                      ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                      : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                  } disabled:opacity-60`}
                  placeholder="Enter your brand name"
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-red-500 text-sm mt-1 flex items-center space-x-1"
                  >
                    <span>•</span>
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Logo URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                  <Image size={16} />
                  <span>Logo URL</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="logo"
                  value={getFieldValue("logo")}
                  onChange={handleInputChange}
                  disabled={isDisabled}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                    errors.logo
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : isDisabled
                      ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                      : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                  } disabled:opacity-60`}
                  placeholder="https://example.com/logo.png"
                  required
                  aria-invalid={!!errors.logo}
                  aria-describedby={errors.logo ? "logo-error" : undefined}
                />
                {errors.logo && (
                  <p
                    id="logo-error"
                    className="text-red-500 text-sm mt-1 flex items-center space-x-1"
                  >
                    <span>•</span>
                    <span>{errors.logo}</span>
                  </p>
                )}

                {formData.logo && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Logo Preview:</p>
                    <div className="flex justify-center">
                      <img
                        src={formData.logo}
                        alt="Logo Preview"
                        className="w-16 h-16 object-contain rounded-lg shadow-sm border border-gray-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.nextElementSibling?.classList.remove("hidden");
                        }}
                      />
                      <div className="hidden ml-2 text-red-500 text-sm">
                        Invalid image URL
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Description & Website */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                  <FileText size={16} />
                  <span>Description</span>
                </label>
                <textarea
                  name="description"
                  value={getFieldValue("description")}
                  onChange={handleInputChange}
                  disabled={isDisabled}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none resize-none ${
                    isDisabled
                      ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                      : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                  } disabled:opacity-60`}
                  placeholder="Write a brief description about your brand..."
                  aria-describedby={
                    errors.description ? "description-error" : undefined
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                  <Globe size={16} />
                  <span>Website</span>
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  <input
                    type="url"
                    name="website"
                    value={getFieldValue("website")}
                    onChange={handleInputChange}
                    disabled={isDisabled}
                    className={`w-full pl-10 px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                      errors.website
                        ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                        : isDisabled
                        ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                        : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                    } disabled:opacity-60`}
                    placeholder="https://example.com"
                    required
                    aria-invalid={!!errors.website}
                    aria-describedby={
                      errors.website ? "website-error" : undefined
                    }
                  />
                </div>
                {errors.website && (
                  <p
                    id="website-error"
                    className="text-red-500 text-sm mt-1 flex items-center space-x-1"
                  >
                    <span>•</span>
                    <span>{errors.website}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center space-x-2">
                <Mail size={20} />
                <span>Contact Information</span>
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                    Email Address
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    <input
                      type="email"
                      name="contact.email"
                      value={getFieldValue("contact.email")}
                      onChange={handleInputChange}
                      disabled={isDisabled}
                      className={`w-full pl-10 px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                        errors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                          : isDisabled
                          ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                          : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                      } disabled:opacity-60`}
                      placeholder="contact@brand.com"
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                  </div>
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-red-500 text-sm mt-1 flex items-center space-x-1"
                    >
                      <span>•</span>
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    <input
                      type="tel"
                      name="contact.phone"
                      value={getFieldValue("contact.phone")}
                      onChange={handleInputChange}
                      disabled={isDisabled}
                      className={`w-full pl-10 px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                        isDisabled
                          ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                          : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                      } disabled:opacity-60`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Address Fields */}
                <div className="lg:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                    Address
                  </label>
                  <div className="space-y-4">
                    {/* Location */}
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                      <input
                        type="text"
                        name="contact.address.location"
                        value={getFieldValue("contact.address.location")}
                        onChange={handleInputChange}
                        disabled={isDisabled}
                        className={`w-full pl-10 px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                          isDisabled
                            ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                            : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                        } disabled:opacity-60`}
                        placeholder="Street address, building number, etc."
                      />
                    </div>

                    {/* City and Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          name="contact.address.city"
                          value={getFieldValue("contact.address.city")}
                          onChange={handleInputChange}
                          disabled={isDisabled}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                            errors.city
                              ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                              : isDisabled
                              ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                              : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                          } disabled:opacity-60`}
                          placeholder="City"
                          required
                          aria-invalid={!!errors.city}
                          aria-describedby={
                            errors.city ? "city-error" : undefined
                          }
                        />
                        {errors.city && (
                          <p
                            id="city-error"
                            className="text-red-500 text-xs mt-1 flex items-center space-x-1"
                          >
                            <span>•</span>
                            <span>{errors.city}</span>
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Country
                        </label>
                        <input
                          type="text"
                          name="contact.address.country"
                          value={getFieldValue("contact.address.country")}
                          onChange={handleInputChange}
                          disabled={isDisabled}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                            errors.country
                              ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                              : isDisabled
                              ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                              : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                          } disabled:opacity-60`}
                          placeholder="Country"
                          required
                          aria-invalid={!!errors.country}
                          aria-describedby={
                            errors.country ? "country-error" : undefined
                          }
                        />
                        {errors.country && (
                          <p
                            id="country-error"
                            className="text-red-500 text-xs mt-1 flex items-center space-x-1"
                          >
                            <span>•</span>
                            <span>{errors.country}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center space-x-2">
                <ShareSocial size={20} />
                <span>Social Media Profiles</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    key: "instagram",
                    icon: Instagram,
                    label: "Instagram",
                    placeholder: "https://instagram.com/username",
                  },
                  {
                    key: "facebook",
                    icon: Facebook,
                    label: "Facebook",
                    placeholder: "https://facebook.com/username",
                  },
                  {
                    key: "twitter",
                    icon: Twitter,
                    label: "Twitter",
                    placeholder: "https://twitter.com/username",
                  },
                  {
                    key: "youtube",
                    icon: Youtube,
                    label: "YouTube",
                    placeholder: "https://youtube.com/@username",
                  },
                  {
                    key: "linkedin",
                    icon: Linkedin,
                    label: "LinkedIn",
                    placeholder: "https://linkedin.com/company/username",
                  },
                ].map(({ key, icon: Icon, label, placeholder }) => (
                  <div
                    key={key}
                    className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Icon size={20} className="text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {label}
                      </label>
                      <div className="relative">
                        <input
                          type="url"
                          name={`social.${key}`}
                          value={getFieldValue(`social.${key}`)}
                          onChange={handleInputChange}
                          disabled={isDisabled}
                          className={`w-full px-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none ${
                            isDisabled
                              ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                              : "border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 hover:border-gray-300"
                          } disabled:opacity-60`}
                          placeholder={placeholder}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-between items-center flex-wrap gap-3">
            {mode === "view" && (
              <button
                type="button"
                onClick={handleEditToggle}
                className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-600 transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-md"
                disabled={isEditing}
              >
                <Edit3 size={16} />
                <span>{isEditing ? "Cancel Edit" : "Edit Brand"}</span>
              </button>
            )}

            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
                disabled={isEditing}
              >
                Cancel
              </button>
              {(isEditing || mode === "create") && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={Object.keys(errors).length > 0}
                >
                  <Save size={16} />
                  <span>
                    {mode === "create" ? "Create Brand" : "Save Changes"}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;

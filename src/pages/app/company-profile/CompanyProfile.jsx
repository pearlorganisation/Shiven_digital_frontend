import React, { useEffect, useState } from "react";
import { Building2, Globe, MapPin, Briefcase, Image as ImageIcon, Save, Loader2 } from "lucide-react";
import companyService from "../../../services/companyProfileServices";

const CompanyProfile = () => {

  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    profileHeadline: "",
    services: "",
    websiteUrl: "",
    logoUrl: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    isPublished: true // Added to support the toggle switch
  });

  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true); // Added for initial fetch spinner

  // Fetch company profile
  const fetchCompany = async () => {
    try {
      const res = await companyService.getCompanyProfile();

      if (res.data) {
        const company = res.data;

        setFormData({
          companyName: company.companyName || "",
          industry: company.industry || "",
          profileHeadline: company.profileHeadline || "",
          services: company.services?.join(", ") || "",
          websiteUrl: company.websiteUrl || "",
          logoUrl: company.logoUrl || "",
          street: company.address?.street || "",
          city: company.address?.city || "",
          state: company.address?.state || "",
          country: company.address?.country || "",
          zipCode: company.address?.zipCode || "",
          isPublished: company.isPublished !== undefined ? company.isPublished : true
        });
      }

    } catch (err) {
      console.log("No company found yet");
    } finally {
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const payload = {
        companyName: formData.companyName,
        industry: formData.industry,
        profileHeadline: formData.profileHeadline,
        services: formData.services.split(",").map((s) => s.trim()).filter(Boolean),
        websiteUrl: formData.websiteUrl,
        logoUrl: formData.logoUrl,
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          zipCode: formData.zipCode
        },
        isPublished: formData.isPublished
      };

      await companyServicesaveCompanyProfile(payload);

      alert("Company profile saved successfully");

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Company Profile</h1>
              <p className="text-slate-500 mt-1">Manage your company details and public presence.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Briefcase className="w-5 h-5 text-slate-400" />
                Basic Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Company Name *</label>
                  <input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Industry *</label>
                  <input
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    placeholder="e.g. Software Development"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Profile Headline</label>
                  <input
                    name="profileHeadline"
                    value={formData.profileHeadline}
                    onChange={handleChange}
                    placeholder="A short, catchy description of your company"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Services</label>
                  <textarea
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    placeholder="SEO, Content Strategy, Copywriting (comma separated)"
                    rows={3}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Links & Media Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Globe className="w-5 h-5 text-slate-400" />
                Links & Media
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Website URL</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      name="websiteUrl"
                      type="url"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="w-full pl-10 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Logo URL</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <ImageIcon className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      name="logoUrl"
                      type="url"
                      value={formData.logoUrl}
                      onChange={handleChange}
                      placeholder="https://example.com/logo.png"
                      className="w-full pl-10 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <MapPin className="w-5 h-5 text-slate-400" />
                Address
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Street Address</label>
                  <input
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="123 Main St"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">City</label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="San Francisco"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">State / Province</label>
                  <input
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="CA"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Country</label>
                  <input
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="United States"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">ZIP / Postal Code</label>
                  <input
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="94105"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Settings Section */}
            <div className="pt-6 border-t border-slate-100">
              <label className="flex items-center gap-3 cursor-pointer group w-max">
                <div className="relative">
                  <input 
                    type="checkbox" 
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={handleChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Publish Profile</p>
                  <p className="text-sm text-slate-500">Make your company profile visible to the public.</p>
                </div>
              </label>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-100 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Save className="w-5 h-5" />
                )}
                {loading ? "Saving..." : "Save Company Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
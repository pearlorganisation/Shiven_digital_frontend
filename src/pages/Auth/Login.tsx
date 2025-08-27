import React, { useState } from "react";

import Footer from "@/component/Layout/Footer/Footer";

import { EyeIcon, EyeSlashIcon } from "@/assets/Icons/index";

const Login = () => {
  const [formState, setFormState] = useState<
    "signIn" | "signUp" | "forgotPassword"
  >("signIn");
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitting ${formState} form...`);
  };

  const renderFormContent = () => {
    if (formState === "forgotPassword") {
      return (
        <>
          {/* Forgot Password Form */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
            <p className="mt-2 text-sm text-gray-600">
              Enter your email to receive a reset link
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Send Reset Link
            </button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setFormState("signIn")}
                className="text-sm text-blue-600 hover:underline"
              >
                Back to Sign In
              </button>
            </div>
          </form>
        </>
      );
    }

    return (
      <>
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="mt-2 text-sm text-gray-600">
            {formState === "signIn"
              ? "Sign in to your account"
              : "Create a new account"}
          </p>
        </div>

        {/* Toggle */}
        <div className="flex p-1 bg-gray-100 rounded-full">
          <button
            onClick={() => setFormState("signIn")}
            className={`w-1/2 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
              formState === "signIn"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setFormState("signUp")}
            className={`w-1/2 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
              formState === "signUp"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          {formState === "signUp" && (
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          {formState === "signUp" && (
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
          {formState === "signIn" && (
            <div className="flex justify-start">
              <button
                type="button"
                onClick={() => setFormState("forgotPassword")}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {formState === "signIn" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </>
    );
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
          {renderFormContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

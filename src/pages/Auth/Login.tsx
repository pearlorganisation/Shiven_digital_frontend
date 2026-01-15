

import React, { useCallback, useEffect, useState } from "react";
import Footer from "@/component/Layout/Footer/Footer";
import { EyeIcon, EyeSlashIcon } from "@/assets/Icons/index";
import { useMutation } from "@tanstack/react-query";
import authService from "@/services/authService";
import { errorToast, successToast } from "@/utils/helper";
import type { UserApiResponseType } from "@/schemas/user/userSchema";
import { setUser } from "@/store/slice/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useNavigate } from "react-router-dom";
import Header from "../app/Header/Header";
import { MessageModal } from "@/component/Common/index";
import type { EmptyApiResponseType } from "@/schemas/common/schema";

const Login = () => {
  const dispatch = useAppDispatch ();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  const [modalOpen, setModalOpen] = useState(false);
  const [ModalMessage, setModalMessage] = useState("");

  const [formState, setFormState] = useState<
    "signIn" | "signUp" | "forgotPassword"
  >("signIn");
  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = useMutation({
    mutationFn: async (newEntryData: { email: string; password: string }) => {
      return authService.login(newEntryData);
    },
    onSuccess: (res: UserApiResponseType) => {
      if (res.data?.user) {
        successToast("Login successful");
        dispatch(setUser(res.data.user));
      } else {
        setModalMessage(res.message);
        setModalOpen(true);
      }
    },
    onError: (err) => {
      errorToast(err || "Failed to log in.");
    },
  });

  const signupMutation = useMutation({
    mutationFn: async (data: any) => authService.register(data),
    onSuccess: (res: EmptyApiResponseType) => {
      setModalMessage(
        res.message || "Account created. Please verify your email."
      );
      setModalOpen(true);
      setFormState("signIn");
    },
    onError: (err) => errorToast(err || "Signup failed"),
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: async (data: { email: string }) =>
      authService.forgotPassword(data),
    onSuccess: (res: EmptyApiResponseType) => {
      setModalMessage(
        res.message || "A password reset link has been sent to your email."
      );
      setModalOpen(true);
      setFormState("signIn");
    },
    onError: () => errorToast("Failed to send reset email"),
  });

  useEffect(() => {
    if (user) {
      navigate("/app/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const target = e.target as typeof e.target & {
        email: { value: string };
        password: { value: string };
        firstName?: { value: string };
        lastName?: { value: string };
        role?: { value: string };
      };

      if (formState === "signIn") {
        loginMutation.mutate({
          email: target.email.value,
          password: target.password.value,
        });
      }

      if (formState === "signUp") {
        signupMutation.mutate({
          firstName: target.firstName?.value,
          lastName: target.lastName?.value,
          email: target.email.value,
          password: target.password.value,
          role: target.role?.value,
        });
      }

      if (formState === "forgotPassword") {
        forgotPasswordMutation.mutate({
          email: target.email.value,
        });
      }
    },
    [formState, loginMutation, signupMutation, forgotPasswordMutation]
  );

  const renderFormContent = () => {
    // Forgot Password Form
    if (formState === "forgotPassword") {
      return (
        <>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Reset Password</h1>
            <p className="mt-2 text-sm text-gray-600">
              Enter your email to receive a reset link
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={forgotPasswordMutation.isPending}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
            >
              {forgotPasswordMutation.isPending ? "Sending..." : "Send Reset Link"}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setFormState("signIn")}
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Back to Sign In
              </button>
            </div>
          </form>
        </>
      );
    }

    // Sign In / Sign Up Form
    return (
      <>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {formState === "signIn"
              ? "Welcome Back!"
              : "Create Your Account"}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {formState === "signIn"
              ? "Sign in to continue"
              : "Get started with us today"}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg mb-6">
          <button
            onClick={() => setFormState("signIn")}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ease-in-out ${
              formState === "signIn"
                ? "bg-white shadow text-purple-600"
                : "text-gray-500 hover:bg-gray-200"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setFormState("signUp")}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ease-in-out ${
              formState === "signUp"
                ? "bg-white shadow text-purple-600"
                : "text-gray-500 hover:bg-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form className="space-y-5" onSubmit={handleFormSubmit}>
          {formState === "signUp" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="John"
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Doe"
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  required
                >
                  <option value="user">User</option>
                  <option value="agency">Agency</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? <EyeSlashIcon className="h-5 w-5 text-gray-400" /> : <EyeIcon className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
          </div>

          {formState === "signIn" && (
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setFormState("forgotPassword")}
                className="text-sm font-medium text-purple-600 hover:text-purple-500"
              >
                Forgot your password?
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={loginMutation.isPending || signupMutation.isPending}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
          >
            {formState === "signIn"
              ? loginMutation.isPending
                ? "Signing In..."
                : "Sign In"
              : signupMutation.isPending
              ? "Creating Account..."
              : "Sign Up"}
          </button>
        </form>
      </>
    );
  };
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Left Side - Image */}
            <div className="hidden md:block relative">
              <img
                src="/test6.jpg"
                alt="Digital Marketing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <h2 className="text-3xl font-bold">
                  Grow Your Business with Smarter Digital Marketing
                </h2>
                <p className="mt-2 text-gray-200">
                  Data-driven strategies tailored to your business goals.
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
                {renderFormContent()}
            </div>
          </div>
        </main>
        <Footer />
        <MessageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          message={ModalMessage}
          title="Verification Required"
        />
      </div>
    </>
  );
};

export default Login;
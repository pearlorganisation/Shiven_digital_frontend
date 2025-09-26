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
import Header from "../Header/Header";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  const [formState, setFormState] = useState<
    "signIn" | "signUp" | "forgotPassword"
  >("signIn");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  const loginMutation = useMutation({
    mutationFn: async (newEntryData: { email: string; password: string }) => {
      return authService.login(newEntryData);
    },
    onSuccess: (res: UserApiResponseType) => {
      console.log(res);
      successToast("Login successful");
      dispatch(setUser(res.data.user));
      navigate("/", { replace: true });
    },
    onError: (err) => {
      errorToast(err || "Failed to create cheque register entry.");
    },
  });

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
    setLoading(false);
  }, [user, navigate]);

  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (formState === "signIn") {
        const email = (e.target as any).email.value;
        const password = (e.target as any).password.value;
        loginMutation.mutate({ email, password });
      }
    },
    [formState, loginMutation]
  );

  const renderFormContent = () => {
    if (formState === "forgotPassword") {
      return (
        <>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Reset Password</h1>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 transform hover:scale-105"
            >
              Send Reset Link
            </button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setFormState("signIn")}
                className="text-sm text-purple-600 hover:underline transition duration-300"
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
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-gray-900 drop-shadow-md">
            Welcome!
          </h1>
          <p className="mt-3 text-md text-gray-700">
            {formState === "signIn"
              ? "Sign in to your account"
              : "Create a new account"}
          </p>
        </div>

        <div className="flex p-1 bg-gray-100 rounded-full shadow-inner">
          <button
            onClick={() => setFormState("signIn")}
            className={`flex-1 py-2.5 text-md font-medium rounded-full transition-all duration-300 transform ${
              formState === "signIn"
                ? "bg-white shadow-md text-gray-900 scale-105"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setFormState("signUp")}
            className={`flex-1 py-2.5 text-md font-medium rounded-full transition-all duration-300 transform ${
              formState === "signUp"
                ? "bg-white shadow-md text-gray-900 scale-105"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            Sign Up
          </button>
        </div>

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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-300"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-300"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-300 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600 transition duration-300"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-300"
              />
            </div>
          )}
          {formState === "signIn" && (
            <div className="flex justify-start">
              <button
                type="button"
                onClick={() => setFormState("forgotPassword")}
                className="text-sm text-purple-600 hover:underline transition duration-300"
              >
                Forgot password?
              </button>
            </div>
          )}
          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full cursor-pointer px-4 py-3 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formState === "signIn"
              ? loginMutation.isPending
                ? "Signing In..."
                : "Sign In"
              : "Sign Up"}
          </button>
        </form>
      </>
    );
  };

  if (loading || user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse-bg">
        <div className="text-center p-8 bg-white rounded-xl shadow-2xl">
          <h1 className="text-4xl font-extrabold text-gray-900 drop-shadow-md">
            Loading...
          </h1>
        </div>
      </div>
    );
  }

 return (
  <>
  <Header/>
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
    {/* Centered login card */}
    <div className="flex flex-1 items-center justify-center m-8">
      <div className="flex w-full max-w-4xl h-[572px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Left Side - Image with Text Overlay */}
        <div className="hidden md:flex flex-1 relative overflow-hidden">
          <img
            src="/test6.jpg"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/50 to-transparent"></div>

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-3xl font-bold text-gray-900 drop-shadow-lg">
             <span>Grow Your Business with Smarter Digital Marketing </span> 
            </h2>
            <p className="text-lg text-gray-700 mt-3 max-w-md">
             We help brands increase visibility, generate qualified leads, and boost conversions with data-driven digital marketing strategies tailored to your business goals.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 space-y-8 flex flex-col justify-center relative z-10 bg-white">
          <div className="absolute inset-0 z-0 opacity-10">
            {/* SVG Background */}
          </div>
          <div className="relative z-10">{renderFormContent()}</div>
        </div>
      </div>
    </div>

    {/* Footer always at bottom */}
    <Footer />
  </div>
  </>
);

};

export default Login;

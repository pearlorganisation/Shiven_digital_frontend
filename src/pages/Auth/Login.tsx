

import React, { useCallback, useEffect, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@/assets/Icons/index";
import { useMutation } from "@tanstack/react-query";
import authService from "@/services/authService";
import { errorToast, successToast } from "@/utils/helper";
import type { UserApiResponseType } from "@/schemas/user/userSchema";
import { setUser } from "@/store/slice/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { MessageModal } from "@/components/Common"; 
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


// import React from "react";
// import { motion } from "framer-motion";

// const AuthBackground = ({ children }) => {
//   return (
//     <div className="relative w-full min-h-screen bg-light-texture flex overflow-hidden font-sans text-gray-800">
      
//       {/* ==============================================
//           LEFT SIDE: The Creative Marketing Animation 
//          ============================================== */}
//       <div className="relative hidden lg:block w-1/2 overflow-hidden">
        
//         {/* Soft animated gradient orbs */}
//         <div className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-gradient-to-br from-blue-200/40 to-purple-300/30 rounded-full blur-3xl animate-pulse-slow mix-blend-multiply" />
//         <div
//           className="absolute -bottom-52 -right-52 w-[900px] h-[900px] bg-gradient-to-tl from-pink-200/40 to-cyan-200/30 rounded-full blur-3xl animate-pulse-slow mix-blend-multiply"
//           style={{ animationDelay: "4s" }}
//         />
//         <div
//           className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-indigo-200/30 to-teal-200/20 rounded-full blur-2xl animate-pulse-slow mix-blend-multiply"
//           style={{ animationDelay: "8s" }}
//         />

//         {/* Main orthogonal grid */}
//         <div
//           className="absolute inset-0 opacity-[0.3]"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(99, 102, 241, 0.2) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(99, 102, 241, 0.2) 1px, transparent 1px)
//             `,
//             backgroundSize: "90px 90px",
//           }}
//         />

//         {/* Diagonal overlay grid */}
//         <div
//           className="absolute inset-0 opacity-[0.15]"
//           style={{
//             backgroundImage: `
//               linear-gradient(45deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
//               linear-gradient(-45deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
//             `,
//             backgroundSize: "110px 110px",
//           }}
//         />

//         {/* --- Floating Elements Container --- */}
//         <div className="absolute inset-0 z-10 pointer-events-none">
          
//           {/* Badge 1: Campaign Performance */}
//           <motion.div
//             className="absolute top-[20%] left-[10%] bg-white/70 backdrop-blur-xl border border-indigo-200 rounded-2xl px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
//             initial={{ y: 25, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1.1, delay: 0.3 }}
//           >
//             <div className="flex items-center gap-3">
//               <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
//               </div>
//               <div>
//                  <p className="text-sm font-bold text-gray-800">Campaign Stats</p>
//                  <p className="text-xs text-indigo-600 font-medium">+2.5K impressions</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Badge 2: Social Reach */}
//           <motion.div
//             className="absolute bottom-[25%] right-[15%] bg-white/70 backdrop-blur-xl border border-pink-200 rounded-2xl px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
//             initial={{ y: -25, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1.1, delay: 0.7 }}
//           >
//              <div className="flex items-center gap-3">
//               <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" x2="23" y1="8" y2="11"/><line x1="23" x2="20" y1="8" y2="11"/></svg>
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-gray-800">Social Reach</p>
//                 <p className="text-xs text-pink-600 font-medium">8.2K new followers</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Badge 3: Engagement */}
//           <motion.div
//             className="absolute top-[45%] right-[10%] bg-white/60 backdrop-blur-lg border border-purple-200 rounded-xl px-5 py-3 shadow-sm"
//             initial={{ x: 35, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1.3, delay: 1.1 }}
//           >
//             <p className="text-xs font-semibold text-purple-800">Engagement Rate ↑</p>
//             <p className="text-lg font-black text-gray-800">12.4%</p>
//           </motion.div>

//           {/* Floating Arrows */}
//           <motion.div
//             className="absolute top-[28%] left-[25%] text-6xl text-indigo-400/20"
//             animate={{ y: [0, -14, 0], rotate: [0, 4, -4, 0] }}
//             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           >
//             ↗
//           </motion.div>

//           <motion.div
//             className="absolute bottom-[35%] right-[28%] text-7xl text-pink-400/20"
//             animate={{ y: [0, 16, 0], rotate: [0, -5, 5, 0] }}
//             transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
//           >
//             ↑
//           </motion.div>

//           {/* Decorative Lines */}
//           <motion.div
//             className="absolute top-[15%] right-[8%] w-28 h-[3px] bg-gradient-to-r from-blue-400/20 to-transparent rounded-full"
//             animate={{ x: [0, 12, 0] }}
//             transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute bottom-[20%] left-[5%] w-36 h-[2px] bg-gradient-to-r from-purple-400/20 to-transparent rounded-full"
//             animate={{ x: [-12, 6, -12] }}
//             transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
//           />
//         </div>

//         {/* Text Area on Left */}
//         <div className="absolute bottom-12 left-12 z-20">
//             <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-2">
//               Power Your Business.
//             </h2>
//             <p className="text-lg text-gray-600 max-w-md">
//               The all-in-one platform for campaigns, messaging, and growth.
//             </p>
//         </div>
//       </div>

//       {/* ==============================================
//           RIGHT SIDE: The Login Form Container 
//          ============================================== */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center relative z-30">
        
//         {/* Mobile Background: Only visible on small screens */}
//         <div className="absolute inset-0 lg:hidden bg-light-texture">
//            {/* Add a simplified orb for mobile atmosphere */}
//            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300/20 blur-3xl rounded-full" />
//         </div>

//         {/* Form Card wrapper */}
//         <div className="w-full max-w-[480px] px-6">
//           <div className="bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_40px_rgba(0,0,0,0.05)] rounded-3xl p-8 lg:p-12 relative">
//              {children}
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default AuthBackground;

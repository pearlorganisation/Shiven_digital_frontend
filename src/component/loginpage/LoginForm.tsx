// src/components/LoginForm.tsx

import React, { useState } from 'react';

// --- Icon Components ---

const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EyeSlashIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243L6.228 6.228" />
    </svg>
);


const LoginForm: React.FC = () => {
  const [formState, setFormState] = useState<'signIn' | 'signUp' | 'forgotPassword'>('signIn');
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here based on formState
    alert(`Submitting ${formState} form...`);
  };

  const renderFormContent = () => {
    if (formState === 'forgotPassword') {
      return (
        <>
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
            <p className="mt-2 text-sm text-gray-600">
              Enter your email to receive a reset link
            </p>
          </div>
          {/* Form */}
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autoComplete="email" required placeholder="Enter your email" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send Reset Link
              </button>
            </div>
            <div className="text-center">
              <button type="button" onClick={() => setFormState('signIn')} className="text-sm text-blue-600 hover:underline">
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
            {formState === 'signIn' ? 'Sign in to your account' : 'Create a new account'}
          </p>
        </div>

        {/* Sign In / Sign Up Toggle */}
        <div className="flex p-1 bg-gray-100 rounded-full">
          <button onClick={() => setFormState('signIn')} className={`w-1/2 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${formState === 'signIn' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
            Sign In
          </button>
          <button onClick={() => setFormState('signUp')} className={`w-1/2 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${formState === 'signUp' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          {formState === 'signUp' && (
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="mt-1">
                <input id="fullname" name="fullname" type="text" required placeholder="Enter your full name" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1">
              <input id="email" name="email" type="email" autoComplete="email" required placeholder="Enter your email" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required placeholder="Enter your password" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600">
                {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {formState === 'signUp' && (
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="mt-1">
                <input id="confirm-password" name="confirm-password" type="password" required placeholder="Confirm your password" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
          )}
          {formState === 'signIn' && (
            <div className="flex items-center justify-start">
              <button type="button" onClick={() => setFormState('forgotPassword')} className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </button>
            </div>
          )}
          <div>
            <button type="submit" className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {formState === 'signIn' ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </form>
      </>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        {renderFormContent()}
      </div>
    </div>
  );
};

export default LoginForm;
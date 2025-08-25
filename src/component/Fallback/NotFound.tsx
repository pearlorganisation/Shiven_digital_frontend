import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, SearchX, Rocket } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-center px-4">
      {/* Hero Icon */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 flex items-center justify-center">
        <SearchX size={80} className="text-indigo-600" />
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        Page Not Found
      </h1>

      {/* Subtext */}
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Oops! Looks like the page you’re searching for has gone missing.  
        Don’t worry — our digital tools are here to get you back on track.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all"
        >
          <Home size={20} /> Back to Home
        </button>

        <button
          className="flex items-center gap-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-xl transition-all"
        >
          Explore Features <Rocket size={20} />
        </button>
      </div>

      
      
    </div>
  );
};

export default NotFoundPage;

// src/pages/landing/Home.tsx
import { useNavigate } from "react-router-dom";
import { Wrench, ArrowRight, Sparkles } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        relative min-h-screen 
        flex flex-col items-center justify-center 
        bg-gradient-to-br from-indigo-100 via-white to-indigo-200
        text-center p-8 overflow-hidden
      "
    >
      {/* Soft Background Accent Circles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-300 rounded-full blur-3xl opacity-20 animate-ping" />

      {/* Animated Construction Icon */}
      <div className="mb-10 transform transition-transform duration-500 hover:rotate-12">
        <Wrench className="w-24 h-24 text-indigo-600 drop-shadow-md animate-bounce" />
      </div>

      {/* Main Title */}
      <h1
        className="
          text-5xl md:text-6xl font-extrabold 
          text-gray-800 leading-tight 
          mb-6 tracking-tight
        "
      >
        Something <span className="text-indigo-600">Awesome</span> is Coming
        Soon
      </h1>

      {/* Descriptive Subtitle */}
      <p
        className="
          text-lg md:text-xl text-gray-600 
          max-w-2xl mx-auto mb-12 leading-relaxed
        "
      >
        This page is part of our new landing experience, which is currently
        under development. We’re actively working to bring you polished and
        engaging designs soon. Meanwhile, you can continue to the main app.
      </p>

      {/* Call-to-Action Button */}
      <button
        onClick={() => navigate("/app")}
        className="
          fixed top-8 right-8 
          flex items-center gap-3 
          px-8 py-4 
          bg-gradient-to-r from-indigo-600 to-indigo-500 
          hover:from-indigo-700 hover:to-indigo-600
          text-white font-semibold text-lg 
          rounded-full shadow-xl 
          transition-all duration-300 ease-in-out 
          transform hover:scale-105 active:scale-95
        "
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
        Go to Main App
        <ArrowRight className="w-5 h-5 ml-1" />
      </button>

      {/* Footer Section */}
      <footer className="absolute bottom-8 text-gray-500 text-sm md:text-base">
        {(() => {
          const currentDomain = window.location.hostname;
          const siteName = currentDomain.includes("chicku.in")
            ? "chicku.in"
            : "chicku.info";
          return (
            <>
              © {new Date().getFullYear()}{" "}
              <a
                href={`https://${siteName}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteName}
              </a>{" "}
              All rights reserved. Powered By{" "}
              <a
                className="text-blue-800"
                href="https://www.pearlorganisation.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pearl Organisation
              </a>
            </>
          );
        })()}
      </footer>
    </div>
  );
};

export default Home;

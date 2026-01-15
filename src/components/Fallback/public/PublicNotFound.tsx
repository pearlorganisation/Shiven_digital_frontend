import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react"; // Assuming you use lucide-react, or just remove the icon

const PublicNotFoundPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#09090b] flex flex-col items-center justify-center text-white overflow-hidden font-sans">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-[10rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 opacity-20 select-none">
          404
        </h1>
        
        <div className="-mt-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Page not found
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>

          {/* "Chicku" Style Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]"
          >
            <MoveLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer Branding (Optional) */}
      <div className="absolute bottom-8 text-gray-600 text-sm">
        &copy; Chicku Platform
      </div>
    </div>
  );
};

export default PublicNotFoundPage;
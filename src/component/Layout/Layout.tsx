// components/Layout.tsx
import  { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import FallbackPage from "../Fallback/FallbackPage";

const Layout = () => {
  const isSidebarOpen = useSelector((state:any) => state.globalData.isSidebarOpen);
  return (

   
    <div className="w-full h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main
        className={`pt-14 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <Suspense fallback={<FallbackPage />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;

import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import AppFallbackPage from "@/components/Fallback/app/AppFallbackPage"; 

const AppLayout = () => {
  const isSidebarOpen = useSelector(
    (state: any) => state.globalData.isSidebarOpen
  );

  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        className={`transition-all duration-300 ${
          isSidebarOpen ? "w-72" : "w-16"
        }`}
      >
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-14 shadow-sm flex items-center">
          <Header />
        </header>

        <main className="flex-1 overflow-y-auto  p-2">
          <Suspense fallback={<AppFallbackPage />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

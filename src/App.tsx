import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";
import { 
  Layout,
  Login,
  Dashboard,
  Brand,
  FilesFolder,
  Announcements,
  StaffManagement,
  Plans,
  SpaceManager,
  CouponManager,
} from "@/pages/app/index";


import {
  Home
} from "@/pages/public/index"


import LayoutFallback from "@/components/Fallback/LayoutFallback";
import NotFound from "@/components/Fallback/NotFound";
import { Toaster } from "sonner";
import { useAppSelector } from "./store/store";

function App() {
  const { user } = useAppSelector((state) => state.auth);

  const router = createBrowserRouter([
    
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
       
        { path: "*", element: <NotFound /> },
      ],
    },

    
    {
      path: "/app",
      element: user ? (
        <Suspense fallback={<LayoutFallback />}>
          <Layout />
        </Suspense>
      ) : (
        <Navigate to="/app/login" replace />
      ),
      children: [
        { index: true, element: <Navigate to="/app/dashboard" replace /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "brand", element: <Brand /> },
        { path: "files", element: <FilesFolder /> },
        { path: "announcements", element: <Announcements /> },
        { path: "subscription-plans", element: <Plans /> },
        { path: "space", element: <SpaceManager /> },
        { path: "coupons", element: <CouponManager /> },
        { path: "staff", element: <StaffManagement /> },
        { path: "*", element: <NotFound /> },
      ],
    },

    
    {
      path: "/app/login",
      element: (
        <Suspense fallback={<></>}>
          <Login />
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      <Toaster position="top-right" richColors />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

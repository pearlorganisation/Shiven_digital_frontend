import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";
import { Layout, Login, Dashboard, Brand , FilesFolder ,Announcements ,StaffManagement , Plans ,SpaceManager ,CouponManager} from "@/pages/index";
import LayoutFallback from "@/component/Fallback/LayoutFallback";
import NotFound from "@/component/Fallback/NotFound";
import { Toaster } from "sonner";
import { useAppSelector } from "./store/store";

function App() {
  const { user } = useAppSelector((state) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? (
        <Suspense fallback={<LayoutFallback />}>
          <Layout />
        </Suspense>
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/about",
          element: <div>About Page</div>,
        },
        {
          path: "/contact",
          element: <div>Contact Page</div>,
        },
        {
          path: "/brand",
          element: <Brand />,
        },
         {
          path: "/files",
          element: <FilesFolder/>,
        },
         {
          path: "/announcements",
          element: <Announcements/>,
        },
          {
          path: "/subscription-plans",
          element: <Plans/>,
        },
           {
          path: "/space",
          element: <SpaceManager/>,
        },
           {
          path: "/coupons",
          element: <CouponManager/>,
        },
        {
          path: "*",
          element: <NotFound />,
        },
         {
          path: "/staff",
          element: <StaffManagement/>,
        },
      ],
    },
    {
      path: "/login",
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

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";
import { Layout, Login, Dashboard, Brand } from "@/pages/index";
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
          path: "/",
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
          path: "*",
          element: <NotFound />,
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

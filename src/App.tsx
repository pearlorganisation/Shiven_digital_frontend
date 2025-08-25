// src/App.jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";

///// pages /////
import { Layout, Login,Dashboard} from "@/pages/index";

//Fallback Components
import LayoutFallback from "@/component/Fallback/LayoutFallback";
import NotFound from "@/component/Fallback/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LayoutFallback />}>
        <Layout />
        
      </Suspense>
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;

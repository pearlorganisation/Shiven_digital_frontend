import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from "sonner";

import { useAppSelector } from "./store/store";

/* layouts */
import AppLayout from "@/layouts/AppLayout/AppLayout.jsx ";
import PublicLayout from "@/layouts/PublicLayout/PublicLayout.jsx";

/* app pages */
import {
  Dashboard,
  Brand,
  FilesFolder,
  Announcements,
  StaffManagement,
  Plans,
  SpaceManager,
  CouponManager,
  Billings,
  EnquiryManagement,
  TaskManagement,
  InvoicesAndQuotes,
  RequestsAndServices,
  Crm,
} from "@/pages/app";

/* public pages */
import { Home } from "@/pages/public";

/* auth pages */

/* fallbacks */
import AppLayoutSkeleton from "@/components/Fallback/app/AppLayoutSkeleton";
import AppNotFoundPage from "@/components/Fallback/app/AppNotFound";

import PublicNotFoundPage from "@/components/Fallback/public/PublicNotFound";
// import {Login} from "./pages/Auth/index"
import SocialIntegrations from "./pages/app/integrations/SocialIntegrations";
import Login from "./pages/auth/Login";
import FacebookConnect from "./pages/app/integrations/platforms/facebook/FacebookConnect";
import UserProfile from "./pages/app/user-profile/ProfilePage.tsx";
import ScheduledPost from "./pages/app/social/schedule-post/ScheduledPost.tsx";
import TemplatesPage from "./pages/app/social/post-template/PostTemplate.tsx";
import PostAnalytics from "./pages/app/social/post-analytics/PostAnalytics.tsx"

function App() {
  const { user } = useAppSelector((state) => state.auth);

  const router = createBrowserRouter([
    /* ================= PUBLIC ROUTES ================= */
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "*", element: <PublicNotFoundPage /> },
      ],
    },

    /* ================= AUTH ROUTES ================= */
    {
      path: "/auth",
      children: [
        { index: true, element: <Navigate to="login" replace /> },
        {
          path: "login",
          element: <Login />,
        },
        { path: "*", element: <AppNotFoundPage /> },
      ],
    },

    /* ================= APP ROUTES (PROTECTED) ================= */
    {
      path: "/app",
      element: user ? (
        <Suspense fallback={<AppLayoutSkeleton />}>
          <AppLayout />
        </Suspense>
      ) : (
        <Navigate to="/auth/login" replace />
      ),
      children: [
        /* /app → /app/dashboard */
        { index: true, element: <Navigate to="dashboard" replace /> },

        {
          path: "reports",
          children: [
            // These URLs will be /app/reports/enquiries, etc.
            { path: "enquiries", element: <EnquiryManagement /> },
            { path: "tasks", element: <TaskManagement /> },
            { path: "invoices-quotes", element: <InvoicesAndQuotes /> },
            { path: "requests-services", element: <RequestsAndServices /> },
          ],
        },

        { path: "dashboard", element: <Dashboard /> },
        { path: "brand", element: <Brand /> },
        { path: "files", element: <FilesFolder /> },
        { path: "announcements", element: <Announcements /> },
        { path: "subscription-plans", element: <Plans /> },
        { path: "space", element: <SpaceManager /> },
        { path: "coupons", element: <CouponManager /> },
        { path: "staff", element: <StaffManagement /> },
        { path: "billing", element: <Billings /> },
        { path: "crm", element: <Crm /> },
        { path: "company-profile", element: <UserProfile /> },
          { path: "social/scheduled", element: <ScheduledPost /> },
           { path: "social/templates", element: <TemplatesPage /> },
            { path: "social/analytics", element: <PostAnalytics /> },

        { path: "*", element: <AppNotFoundPage /> },
        { path: "integrations/social", element: <SocialIntegrations /> },
        { path: "integrations/social/facebook", element: <FacebookConnect /> },
      ],
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

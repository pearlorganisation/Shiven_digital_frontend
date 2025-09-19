import { lazy } from "react";

const Layout = lazy(() => import("@/component/Layout/Layout"));
const Login = lazy(() => import("./Auth/Login"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Brand = lazy(() => import("./Brand/Brand"));

export { Layout, Login, Dashboard, Brand };

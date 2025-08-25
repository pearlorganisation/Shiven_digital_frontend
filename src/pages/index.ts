import { lazy } from "react";

const Layout = lazy(() => import("@/component/Layout/Layout"));
const Login = lazy(() => import("./Auth/Login"));
const Dashboard=lazy(() => import("./Dashboard/Dashboard"));

export{
    Layout,
    Login,
    Dashboard
}
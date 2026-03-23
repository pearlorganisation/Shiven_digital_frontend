import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Brand = lazy(() => import("./Brand/Brand"));
const FilesFolder = lazy(() => import("./FilesFolder/FilesFolder"));
const Announcements = lazy(() => import("./Announcement/Announement"));
const StaffManagement = lazy(() => import("./Staff/StaffManagement"));
const Plans = lazy(() => import("./Plans/Plan"));
const SpaceManager = lazy(() => import("./SpaceMange/SpaceM"));
const CouponManager = lazy(() => import("./Coupoun/Coupoun"));
const Billings = lazy(() => import("./Billings/Billings"));

const EnquiryManagement = lazy(() => import("./Report/EnquiryManagement"));
const TaskManagement = lazy(() => import("./Report/TaskManagement"));
const InvoicesAndQuotes = lazy(() => import("./Report/InvoicesAndQuotes"));
const RequestsAndServices = lazy(() => import("./Report/RequestsAndServices"));

export {
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
};

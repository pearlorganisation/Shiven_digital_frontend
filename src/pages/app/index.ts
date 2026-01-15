import { lazy } from "react";


const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Brand = lazy(() => import("./Brand/Brand"));
const FilesFolder = lazy(()=> import("./FilesFolder/FilesFolder"))
const Announcements = lazy(()=> import("./Announcement/Announement"))
const StaffManagement = lazy(()=> import("./Staff/StaffManagement"))
const Plans = lazy(()=> import("./Plans/Plan"))
const SpaceManager = lazy(()=> import("./SpaceMange/SpaceM"))
const CouponManager = lazy(()=> import("./Coupoun/Coupoun"))


export { Dashboard, Brand , FilesFolder , Announcements ,StaffManagement ,Plans ,SpaceManager,CouponManager};

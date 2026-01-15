import { useSelector } from "react-redux";
import AdminDashboard from "./AdminDashboard";
import AgencyDashboard from "./AgencyDashboard";
import UserDashboard from "./UserDashboard";
import AppNotFoundPage from "@/components/Fallback/app/AppNotFound"; 
import AgencyStaffDashboard from "./AgencyStaffDashboard";

const Dashboard = () => {
  const role = useSelector((state: any) => state.auth.user?.role);

  if (role === "admin") return <AdminDashboard />;
  if (role === "agency") return <AgencyDashboard />;
  if (role === "user") return <UserDashboard />;
  if (role === "agencyStaff") return <AgencyStaffDashboard/>
  if (role === "adminStaff") return <AgencyStaffDashboard/>

  return <AppNotFoundPage />;
};

export default Dashboard;

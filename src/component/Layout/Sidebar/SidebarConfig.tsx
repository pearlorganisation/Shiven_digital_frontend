import {
  Home,
  Users,
  ClipboardCheck,
  FolderKanban,
  CreditCard,
  Megaphone,
  Layers,
  Folder,
  Ticket,
  ChartPie,
  Gift,
  GraduationCap,
} from "lucide-react";

export interface SidebarItemConfig {
  path?: string;
  icon: React.ReactNode;
  text: string;
  allowedRoles: string[];
  children?: { text: string; path: string }[];
  status?: string;
}

export const sidebarConfig: SidebarItemConfig[] = [
  // ---------- COMMON ----------
  {
    path: "/dashboard",
    icon: <Home size={20} />,
    text: "Dashboard",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    status:"balance"
  },
  {
    path: "/files",  
    icon: <Folder size={20} />,
    text: "Files & Folders",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    status:"balance"
  },
  {
    path: "/billing",
    icon: <CreditCard size={20} />,
    text: "Billing & Subscription",
    allowedRoles: ["user", "agency", "admin", "adminStaff"],
    status:"balance"
  },
  {
    path: "/tickets",
    icon: <Ticket size={20} />,
    text: "Queries & Tickets",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    children: [
      { text: "Tickets", path: "/tickets/list" },
      { text: "Enquiry Management", path: "/tickets/enquiries" },
    ],
    status:"balance"
  },
  {
    path: "/announcements",  
    icon: <Megaphone size={20} />,
    text: "Announcements",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    status:"balance"
  },
  {
    path: "/training",
    icon: <GraduationCap size={20} />,
    text: "Training",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    children: [
      { text: "Posting Guidelines", path: "/training/guidelines" },
      { text: "API & Integration Docs", path: "/training/docs" },
      { text: "Video Tutorials", path: "/training/tutorials" },
    ],
    status:"balance"
  },

  // ---------- ADMIN ----------
  {
    path: "/staff",
    icon: <Users size={20} />,
    text: "Staff Management",
    allowedRoles: ["admin", "adminStaff"],
    status:"balance"
  },
  {
    path: "/subscription-plans",
    icon: <Layers size={20} />,
    text: "Subscription Plan",
    allowedRoles: ["admin", "adminStaff"],
    status:"balance"
  },
  {
    path: "/users",
    icon: <Users size={20} />,
    text: "User Management",
    allowedRoles: ["admin", "adminStaff"],
    children: [
      { text: "Account Approval", path: "/users/approval" },
      { text: "Manage Users", path: "/users/manage" },
    ],
    status:"balance"
  },
  {
    path: "/payments",
    icon: <CreditCard size={20} />,
    text: "Payment Logs",
    allowedRoles: ["admin", "adminStaff"],
    status:"balance"
  },
  {
    path: "/space",
    icon: <FolderKanban size={20} />,
    text: "Space Management",
    allowedRoles: ["admin", "adminStaff"],
    status:"balance"
  },
  {
    path: "/addons",
    icon: <Layers size={20} />,
    text: "Add-ons Management",
    allowedRoles: ["admin"],
    status:"balance"
  },
  {
    path: "/coupons",
    icon: <Gift size={20} />,
    text: "Coupon Management",
    allowedRoles: ["admin", "adminStaff"],
    status:"balance"
  },

  {
    path: "/manage-users",
    icon: <Users size={20} />,
    text: "Manage Users",
    allowedRoles: ["agency", "agencyStaff"],
    children: [
      { text: "Connect Users", path: "/manage-users/connect-users" },
      { text: "Connect Handles", path: "/manage-users/connect-handles" },
      { text: "Contact Management", path: "/manage-users/contacts" },
      { text: "Brand Management", path: "/manage-users/brands" },
    ],
    status:"balance"
  },
  {
    path: "/staff",
    icon: <Users size={20} />,
    text: "Agency Staff Management",
    allowedRoles: ["agency"],
    status:"balance"
  },
  {
    path: "/tasks",
    icon: <ClipboardCheck size={20} />,
    text: "Tasks",
    allowedRoles: ["agency", "agencyStaff"],
    status:"balance"
  },
  {
    path: "/post-analytics",
    icon: <ChartPie size={20} />,
    text: "Post Analytics",
    allowedRoles: ["agency", "agencyStaff", "user"],
    status:"balance"
  },

  // ---------- USER ----------

  {
    path: "/connected-accounts",
    icon: <Users size={20} />,
    text: "Connected Accounts",
    allowedRoles: ["user"],
    status:"balance"
  },
];

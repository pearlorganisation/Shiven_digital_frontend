import {
  Home,
  Settings,
  Users,
  BarChart2,
  CreditCard,
  LifeBuoy,
  FolderKanban,
  ClipboardCheck,
  Building2,
  Bell,
  FileText,
  Calendar,
} from "lucide-react";

interface SidebarItemConfig {
  path: string;
  icon: React.ReactNode;
  text: string;
  allowedRoles: string[];
}

export const sidebarConfig: SidebarItemConfig[] = [
  // ---------- COMMON ----------
  {
    path: "/",
    icon: <Home size={20} />,
    text: "Dashboard",
    allowedRoles: ["customer", "agency", "agencyStaff", "admin", "adminStaff"],
  },
  {
    path: "/analytics",
    icon: <BarChart2 size={20} />,
    text: "Analytics",
    allowedRoles: ["customer", "agency", "agencyStaff", "admin"],
  },
  {
    path: "/billing",
    icon: <CreditCard size={20} />,
    text: "Billing",
    allowedRoles: ["customer", "agency", "admin"],
  },
  {
    path: "/support",
    icon: <LifeBuoy size={20} />,
    text: "Support",
    allowedRoles: ["customer", "agency", "agencyStaff", "admin", "adminStaff"],
  },
  {
    path: "/notifications",
    icon: <Bell size={20} />,
    text: "Notifications",
    allowedRoles: ["customer", "agency", "agencyStaff", "admin", "adminStaff"],
  },

  // ---------- CUSTOMER ----------
  {
    path: "/brands",
    icon: <Building2 size={20} />,
    text: "My Brands",
    allowedRoles: ["customer"],
  },
  {
    path: "/social-media",
    icon: <FolderKanban size={20} />,
    text: "Social Media Manager",
    allowedRoles: ["customer"],
  },
  {
    path: "/content-calendar",
    icon: <Calendar size={20} />,
    text: "Content Calendar",
    allowedRoles: ["customer"],
  },
  {
    path: "/tasks",
    icon: <ClipboardCheck size={20} />,
    text: "Tasks & Campaigns",
    allowedRoles: ["customer"],
  },
  {
    path: "/reports",
    icon: <FileText size={20} />,
    text: "Reports",
    allowedRoles: ["customer"],
  },

  // ---------- AGENCY ----------
  {
    path: "/clients",
    icon: <Users size={20} />,
    text: "Clients",
    allowedRoles: ["agency"],
  },
  {
    path: "/brands",
    icon: <Building2 size={20} />,
    text: "Managed Brands",
    allowedRoles: ["agency"],
  },
  {
    path: "/social-media",
    icon: <FolderKanban size={20} />,
    text: "Social Media Hub",
    allowedRoles: ["agency"],
  },
  {
    path: "/staff",
    icon: <Users size={20} />,
    text: "Agency Team",
    allowedRoles: ["agency"],
  },
  {
    path: "/content-calendar",
    icon: <Calendar size={20} />,
    text: "Content Calendar",
    allowedRoles: ["agency"],
  },
  {
    path: "/tasks",
    icon: <ClipboardCheck size={20} />,
    text: "Team Tasks",
    allowedRoles: ["agency"],
  },

  // ---------- AGENCY STAFF ----------
  {
    path: "/assigned-brands",
    icon: <Building2 size={20} />,
    text: "Assigned Brands",
    allowedRoles: ["agencyStaff"],
  },
  {
    path: "/tasks",
    icon: <ClipboardCheck size={20} />,
    text: "My Tasks",
    allowedRoles: ["agencyStaff"],
  },
  {
    path: "/content-calendar",
    icon: <Calendar size={20} />,
    text: "Content Calendar",
    allowedRoles: ["agencyStaff"],
  },

  // ---------- ADMIN ----------
  {
    path: "/users",
    icon: <Users size={20} />,
    text: "User Management",
    allowedRoles: ["admin"],
  },
  {
    path: "/agencies",
    icon: <Building2 size={20} />,
    text: "Agencies",
    allowedRoles: ["admin"],
  },
  {
    path: "/customers",
    icon: <Users size={20} />,
    text: "Customers",
    allowedRoles: ["admin"],
  },
  {
    path: "/reports",
    icon: <BarChart2 size={20} />,
    text: "System Reports",
    allowedRoles: ["admin"],
  },
  {
    path: "/admin-staff",
    icon: <Users size={20} />,
    text: "Admin Staff",
    allowedRoles: ["admin"],
  },
  {
    path: "/settings",
    icon: <Settings size={20} />,
    text: "Platform Settings",
    allowedRoles: ["admin"],
  },

  // ---------- ADMIN STAFF ----------
  {
    path: "/users",
    icon: <Users size={20} />,
    text: "User Access",
    allowedRoles: ["adminStaff"],
  },
  {
    path: "/reports",
    icon: <BarChart2 size={20} />,
    text: "Reports",
    allowedRoles: ["adminStaff"],
  },

];

import {
  Home,
  Users,
  ClipboardCheck,
  FolderKanban,
  CreditCard,
  Building2,
  BarChart2,
  BookOpen,
  Mail,
  MessageSquare,
  Megaphone,
  Layers,
  Folder,
  Ticket,
  ChartPie,
  Gift,
  FileCog,
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
    path: "/brand", ////shift this to navbar
    icon: <Building2 size={20} />,
    text: "My Brands",
    allowedRoles: ["user", "agency", "agencyStaff"],
    status:"balance"
  },
  {
    path: "/files",  //shift this to navbar 
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
    path: "/announcements",  //shift this to navbar
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
    path: "/tasks", //shift this to navbar
    icon: <ClipboardCheck size={20} />,
    text: "Task Management",
    allowedRoles: ["admin"],
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
    path: "/reports", //shift this to navbar
    icon: <BarChart2 size={20} />,
    text: "Reports & Analytics",
    allowedRoles: ["admin", "adminStaff"],
    children: [
      { text: "Tool Reports", path: "/reports/tools" },
      { text: "Etc.", path: "/reports/etc" },
    ],
    status:"balance"
  },
  {
    path: "/landing",  //shift this to navbar
    icon: <FileCog size={20} />,
    text: "Landing Page Data",
    allowedRoles: ["admin", "adminStaff"],
    children: [
      { text: "Blogs", path: "/landing/blogs" },
      { text: "Policy", path: "/landing/policy" },
      { text: "Terms", path: "/landing/terms" },
      { text: "Contact Us", path: "/landing/contact" },
      { text: "Etc.", path: "/landing/etc" },
    ],
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
    path: "/email-marketing", ////shift this to navbar
    icon: <Mail size={20} />,
    text: "Email Marketing",
    allowedRoles: ["agency", "agencyStaff", "user"],
    status:"balance"
  },
  {
    path: "/social media", ////shift this to navbar
    icon: <ClipboardCheck size={20} />,
    text: "Social Media",
    allowedRoles: ["agency", "agencyStaff", "user"],
     children: [
      { text: "Instagram", path: "/landing/blogs" },
      { text: "Facebook", path: "/landing/policy" },
      { text: "YouTube", path: "/landing/terms" },
      { text: "Twitter / X", path: "/landing/contact" },
      { text: "Etc", path: "/landing/etc" },
     ],
    status:"balance"
  },
  {
    path: "/sms", ////shift this to navbar
    icon: <MessageSquare size={20} />,
    text: "SMS Marketing",
    allowedRoles: ["agency", "agencyStaff", "user"],
    status:"balance"
  },
  {
    path: "/whatsapp", ////shift this to navbar
    icon: <MessageSquare size={20} />,
    text: "WhatsApp Messaging",
    allowedRoles: ["agency", "agencyStaff", "user"],
    status:"balance"
  },
  {
    path: "/ai-content", ////shift this to navbar
    icon: <BookOpen size={20} />,
    text: "AI Content Generation",
    allowedRoles: ["agency", "agencyStaff", "user"],
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
  {
    path: "/campaigns", ////shift this to navbar
    icon: <ClipboardCheck size={20} />,
    text: "Campaign & Content Control",
    allowedRoles: ["user"],
    status:"balance"
  },
];

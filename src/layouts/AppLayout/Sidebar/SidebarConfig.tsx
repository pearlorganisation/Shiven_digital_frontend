// import {
//   Home,
//   Users,
//   ClipboardCheck,
//   FolderKanban,
//   CreditCard,
//   Megaphone,
//   Layers,
//   Folder,
//   Ticket,
//   ChartPie,
//   Gift,
//   GraduationCap,
//   Image,
//   Sparkles,
//   Plug,
//   Bell,
// } from "lucide-react";

// export interface SidebarItemConfig {
//   path?: string;
//   icon: React.ReactNode;
//   text: string;
//   allowedRoles: string[];
//   children?: { text: string; path: string }[];
//   status?: string;
// }

// export const sidebarConfig: SidebarItemConfig[] = [
//   // ---------- COMMON ----------
//   {
//     path: "/dashboard",
//     icon: <Home size={20} />,
//     text: "Dashboard",
//     allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
//     status:"balance"
//   },
//   {
//     path: "/files",  
//     icon: <Folder size={20} />,
//     text: "Files & Folders",
//     allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
//     status:"balance"
//   },
//   {
//     path: "/billing",
//     icon: <CreditCard size={20} />,
//     text: "Billing & Subscription",
//     allowedRoles: ["user", "agency", "admin", "adminStaff"],
//     status:"balance"
//   },
//   {
//     path: "/tickets",
//     icon: <Ticket size={20} />,
//     text: "Queries & Tickets",
//     allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
//     children: [
//       { text: "Tickets", path: "/tickets/list" },
//       { text: "Enquiry Management", path: "/tickets/enquiries" },
//     ],
//     status:"balance"
//   },
//   {
//     path: "/announcements",  
//     icon: <Megaphone size={20} />,
//     text: "Announcements",
//     allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
//     status:"balance"
//   },
//   {
//     path: "/training",
//     icon: <GraduationCap size={20} />,
//     text: "Training",
//     allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
//     children: [
//       { text: "Posting Guidelines", path: "/training/guidelines" },
//       { text: "API & Integration Docs", path: "/training/docs" },
//       { text: "Video Tutorials", path: "/training/tutorials" },
//     ],
//     status:"balance"
//   },

//   // ---------- ADMIN ----------
//   {
//     path: "/staff",
//     icon: <Users size={20} />,
//     text: "Staff Management",
//     allowedRoles: ["admin", "adminStaff"],
//     status:"balance"
//   },
//   {
//     path: "/subscription-plans",
//     icon: <Layers size={20} />,
//     text: "Subscription Plan",
//     allowedRoles: ["admin", "adminStaff"],
//     status:"balance"
//   },
//   {
//     path: "/users",
//     icon: <Users size={20} />,
//     text: "User Management",
//     allowedRoles: ["admin", "adminStaff"],
//     children: [
//       { text: "Account Approval", path: "/users/approval" },
//       { text: "Manage Users", path: "/users/manage" },
//     ],
//     status:"balance"
//   },
//   {
//     path: "/payments",
//     icon: <CreditCard size={20} />,
//     text: "Payment Logs",
//     allowedRoles: ["admin", "adminStaff"],
//     status:"balance"
//   },
//   {
//     path: "/space",
//     icon: <FolderKanban size={20} />,
//     text: "Space Management",
//     allowedRoles: ["admin", "adminStaff"],
//     status:"balance"
//   },
//   {
//     path: "/addons",
//     icon: <Layers size={20} />,
//     text: "Add-ons Management",
//     allowedRoles: ["admin"],
//     status:"balance"
//   },
//   {
//     path: "/coupons",
//     icon: <Gift size={20} />,
//     text: "Coupon Management",
//     allowedRoles: ["admin", "adminStaff"],
//     status:"balance"
//   },

//   {
//     path: "/manage-users",
//     icon: <Users size={20} />,
//     text: "Manage Users",
//     allowedRoles: ["agency", "agencyStaff"],
//     children: [
//       { text: "Connect Users", path: "/manage-users/connect-users" },
//       { text: "Connect Handles", path: "/manage-users/connect-handles" },
//       { text: "Contact Management", path: "/manage-users/contacts" },
//       { text: "Brand Management", path: "/manage-users/brands" },
//     ],
//     status:"balance"
//   },
//   {
//     path: "/staff",
//     icon: <Users size={20} />,
//     text: "Agency Staff Management",
//     allowedRoles: ["agency"],
//     status:"balance"
//   },
//   {
//     path: "/tasks",
//     icon: <ClipboardCheck size={20} />,
//     text: "Tasks",
//     allowedRoles: ["agency", "agencyStaff"],
//     status:"balance"
//   },
//   // {
//   //   path: "/post-analytics",
//   //   icon: <ChartPie size={20} />,
//   //   text: "Post Analytics",
//   //   allowedRoles: ["agency", "agencyStaff", "user"],
//   //   status:"balance"
//   // },

//   // ---------- USER ----------

//   // {
//   //   path: "/connected-accounts",
//   //   icon: <Users size={20} />,
//   //   text: "Connected Accounts",
//   //   allowedRoles: ["user"],
//   //   status:"balance"
//   // },

//   {
//   text: "Accounts",
//   icon: <Users size={20} />,
//   allowedRoles: ["user"],
//   children: [
//     { text: "Connected Accounts", path: "/connected-accounts" },
//     { text: "My Brands", path: "/brand" }
//   ]
// },
// {
//   text: "Campaigns",
//   icon: <Megaphone size={20} />,
//   allowedRoles: ["user"],
//   children: [
//     { text: "Campaign Manager", path: "/campaigns" },
//     { text: "Email Marketing", path: "/email-marketing" },
//     { text: "SMS Marketing", path: "/sms" },
//     { text: "WhatsApp Marketing", path: "/whatsapp" }
//   ]
// },
// {
//   text: "Social Media",
//   icon: <Layers size={20} />,
//   allowedRoles: ["user"],
//   children: [
//     { text: "Create Post", path: "/social/create" },
//     { text: "Scheduled Posts", path: "/social/scheduled" },
//     { text: "Post Analytics", path: "/post-analytics" }
//   ]
// },
// {
//   text: "Contacts",
//   icon: <Users size={20} />,
//   allowedRoles: ["user"],
//   children: [
//     { text: "Contact List", path: "/contacts" },
//     { text: "Segments", path: "/segments" }
//   ]
// },
// {
//   path: "/media-library",
//   icon: <Image size={20} />,
//   text: "Media Library",
//   allowedRoles: ["user", "agency", "agencyStaff"]
// },
// {
//   text: "AI Tools",
//   icon: <Sparkles size={20} />,
//   allowedRoles: ["user", "agency", "agencyStaff"],
//   children: [
//     { text: "AI Content Writer", path: "/ai/content" },
//     { text: "Hashtag Generator", path: "/ai/hashtags" },
//     { text: "Image Generator", path: "/ai/images" }
//   ]
// },
// {
//   path: "/reports",
//   icon: <ChartPie size={20} />,
//   text: "Reports & Analytics",
//   allowedRoles: ["user", "agency", "agencyStaff"]
// },
// {
//   path: "/integrations",
//   icon: <Plug size={20} />,
//   text: "Integrations",
//   allowedRoles: ["user", "agency"]
// },
// {
//   path: "/notifications",
//   icon: <Bell size={20} />,
//   text: "Notifications",
//   allowedRoles: ["user", "agency", "agencyStaff"]
// }
// ];


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
  Image,
  Sparkles,
  Plug,
  Bell,
} from "lucide-react";

export interface SidebarItemConfig {
  path?: string;
  icon?: React.ReactNode;
  text: string;
  allowedRoles: string[];
  children?: { text: string; path: string }[];
  section?: string;
  status?: String
}

export const sidebarConfig: SidebarItemConfig[] = [

  // =========================
  // OVERVIEW
  // =========================

  {
    path: "/dashboard",
    icon: <Home size={20} />,
    text: "Dashboard",
    section: "Overview",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
     status:"balance"
  },
  {
    path: "/notifications",
    icon: <Bell size={20} />,
    text: "Notifications",
    section: "Overview",
    allowedRoles: ["user", "agency", "agencyStaff"],
     status:"balance"
  },
  {
    path: "/tasks",
    icon: <ClipboardCheck size={20} />,
    text: "Tasks",
    section: "Overview",
    allowedRoles: ["agency", "agencyStaff"],
     status:"balance"
  },

  // =========================
  // SOCIAL MEDIA
  // =========================

  {
    text: "Social Media",
    icon: <Layers size={20} />,
    section: "Marketing",
    allowedRoles: ["user"],
    children: [
      { text: "Create Post", path: "/social/create" },
      { text: "Scheduled Posts", path: "/social/scheduled" },
      { text: "Post Analytics", path: "/post-analytics" },
    ],
     status:"balance"
  },

  // =========================
  // CAMPAIGNS
  // =========================

  {
    text: "Campaigns",
    icon: <Megaphone size={20} />,
    section: "Marketing",
    allowedRoles: ["user"],
    children: [
      { text: "Campaign Manager", path: "/campaigns" },
      { text: "Email Marketing", path: "/email-marketing" },
      { text: "SMS Marketing", path: "/sms" },
      { text: "WhatsApp Marketing", path: "/whatsapp" },
    ],
     status:"balance"
  },

  // =========================
  // CONTACTS
  // =========================

  {
    text: "Contacts",
    icon: <Users size={20} />,
    section: "Marketing",
    allowedRoles: ["user"],
    children: [
      { text: "Contact List", path: "/contacts" },
      { text: "Segments", path: "/segments" },
    ],
     status:"balance"
  },

  // =========================
  // ACCOUNTS
  // =========================

  // {
  //   text: "Accounts",
  //   icon: <Users size={20} />,
  //   section: "Marketing",
  //   allowedRoles: ["user"],
  //   children: [
  //     { text: "Connected Accounts", path: "/connected-accounts" },
  //     { text: "My Brands", path: "/brand" },
  //   ],

  // },

  {
  text: "Accounts",
  icon: <Users size={20} />,
  section: "Marketing",
  allowedRoles: ["user"],
  children: [
    { text: "My Brands", path: "/brand" },
    { text: "Social Integrations", path: "/integrations/social" },
    { text: "Connected Accounts", path: "/connected-accounts" }
  ],
       status:"balance"
},

  // =========================
  // CONTENT & MEDIA
  // =========================

  {
    path: "/media-library",
    icon: <Image size={20} />,
    text: "Media Library",
    section: "Content",
    allowedRoles: ["user", "agency", "agencyStaff"],
     status:"balance"
  },
  {
    path: "/files",
    icon: <Folder size={20} />,
    text: "Files & Folders",
    section: "Content",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
     status:"balance"
  },

  // =========================
  // AI TOOLS
  // =========================

  {
    text: "AI Tools",
    icon: <Sparkles size={20} />,
    section: "Tools",
    allowedRoles: ["user", "agency", "agencyStaff"],
    children: [
      { text: "AI Content Writer", path: "/ai/content" },
      { text: "Hashtag Generator", path: "/ai/hashtags" },
      { text: "Image Generator", path: "/ai/images" },
    ],
     status:"balance"
  },

  // =========================
  // REPORTS
  // =========================

  {
    path: "/reports",
    icon: <ChartPie size={20} />,
    text: "Reports & Analytics",
    section: "Tools",
    allowedRoles: ["user", "agency", "agencyStaff"],
     status:"balance"
  },

  // =========================
  // INTEGRATIONS
  // =========================

  {
    path: "/integrations",
    icon: <Plug size={20} />,
    text: "Integrations",
    section: "Tools",
    allowedRoles: ["user", "agency"],
     status:"balance"
  },

  // =========================
  // SUPPORT
  // =========================

  {
    path: "/tickets",
    icon: <Ticket size={20} />,
    text: "Queries & Tickets",
    section: "Support",
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
    section: "Support",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
     status:"balance"
  },
  {
    path: "/training",
    icon: <GraduationCap size={20} />,
    text: "Training",
    section: "Support",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    children: [
      { text: "Posting Guidelines", path: "/training/guidelines" },
      { text: "API & Integration Docs", path: "/training/docs" },
      { text: "Video Tutorials", path: "/training/tutorials" },
    ],
     status:"balance"
  },

  // =========================
  // BILLING
  // =========================

  {
    path: "/billing",
    icon: <CreditCard size={20} />,
    text: "Billing & Subscription",
    section: "Settings",
    allowedRoles: ["user", "agency", "admin", "adminStaff"],
     status:"balance"
  },

  // =========================
  // AGENCY MANAGEMENT
  // =========================

  {
    path: "/manage-users",
    icon: <Users size={20} />,
    text: "Manage Users",
    section: "Agency",
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
    path: "/agency/staff",
    icon: <Users size={20} />,
    text: "Agency Staff Management",
    section: "Agency",
    allowedRoles: ["agency"],
     status:"balance"
  },

  // =========================
  // ADMIN
  // =========================

  {
    path: "/admin/staff",
    icon: <Users size={20} />,
    text: "Staff Management",
    section: "Admin",
    allowedRoles: ["admin", "adminStaff"],
     status:"balance"
  },
  {
    path: "/subscription-plans",
    icon: <Layers size={20} />,
    text: "Subscription Plan",
    section: "Admin",
    allowedRoles: ["admin", "adminStaff"],
     status:"balance"
  },
  {
    path: "/users",
    icon: <Users size={20} />,
    text: "User Management",
    section: "Admin",
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
    section: "Admin",
    allowedRoles: ["admin", "adminStaff"],
     status:"balance"
  },
  {
    path: "/space",
    icon: <FolderKanban size={20} />,
    text: "Space Management",
    section: "Admin",
    allowedRoles: ["admin", "adminStaff"],
     status:"balance"
  },
  {
    path: "/addons",
    icon: <Layers size={20} />,
    text: "Add-ons Management",
    section: "Admin",
    allowedRoles: ["admin"],
     status:"balance"
  },
  {
    path: "/coupons",
    icon: <Gift size={20} />,
    text: "Coupon Management",
    section: "Admin",
    allowedRoles: ["admin", "adminStaff"],
     status:"balance"
  },
];
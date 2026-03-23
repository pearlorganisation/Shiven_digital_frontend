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
  Bell,
  MessageSquare,
  Calendar,
  Globe,
  ShoppingCart,
  FileText,
  Contact,
} from "lucide-react";

export interface SidebarItemConfig {
  path?: string;
  icon?: React.ReactNode;
  text: string;
  allowedRoles: string[];
  children?: { text: string; path: string }[];
  section?: string;
  status?: string;
}

export const sidebarConfig: SidebarItemConfig[] = [
  // =========================
  // OVERVIEW & WORKSPACE
  // =========================

  {
    path: "/dashboard",
    icon: <Home size={20} />,
    text: "Dashboard",
    section: "Overview",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    status: "balance",
  },
  {
    path: "/inbox",
    icon: <MessageSquare size={20} />,
    text: "Unified Inbox",
    section: "Overview",
    // Agencies and Users need this to reply to DMs/Comments across all platforms
    allowedRoles: ["user", "agency", "agencyStaff"],
    status: "balance",
  },
  {
    path: "/calendar-tasks",
    icon: <Calendar size={20} />,
    text: "Calendar & Tasks",
    section: "Overview",
    allowedRoles: ["user", "agency", "agencyStaff"],
    status: "balance",
  },
  {
    path: "/notifications",
    icon: <Bell size={20} />,
    text: "Notifications",
    section: "Overview",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    status: "balance",
  },

  // =========================
  // MARKETING & ENGAGEMENT
  // =========================

  {
    text: "Social Media",
    icon: <Layers size={20} />,
    section: "Marketing",
    allowedRoles: ["user", "agency", "agencyStaff"],
    children: [
      { text: "Create Post", path: "/social/create" },
      { text: "Scheduled Posts", path: "/social/scheduled" },
      { text: "Post Templates", path: "/social/templates" },
      { text: "Post Analytics", path: "/social/analytics" },
    ],
    status: "balance",
  },
  {
    text: "Campaigns",
    icon: <Megaphone size={20} />,
    section: "Marketing",
    allowedRoles: ["user", "agency", "agencyStaff"],
    children: [
      { text: "Email Marketing", path: "/campaigns/email" },
      { text: "WhatsApp Bulk", path: "/campaigns/whatsapp" },
      { text: "SMS Marketing", path: "/campaigns/sms" },
      { text: "Campaign Analytics", path: "/campaigns/analytics" },
    ],
    status: "balance",
  },

  // =========================
  // CRM & CONTACTS
  // =========================

  {
    text: "CRM & Contacts",
    icon: <Contact size={20} />,
    section: "CRM",
    allowedRoles: ["user", "agency", "agencyStaff"],
    children: [
      { text: "Contact Directory", path: "/crm/contacts" },
      { text: "Segments & Tags", path: "/crm/segments" },
      { text: "Communication Logs", path: "/crm/logs" },
    ],
    status: "balance",
  },

  // =========================
  // ACCOUNTS & INTEGRATIONS
  // =========================

  {
    text: "Accounts & Connections",
    icon: <Users size={20} />,
    section: "Workspace",
    allowedRoles: ["user", "agency", "agencyStaff"],
    children: [
      { text: "My Brands", path: "/workspace/brands" },
      { text: "Social Accounts", path: "/workspace/social-accounts" },
      { text: "Third-Party Apps", path: "/workspace/integrations" }, // Canva, Figma, Mailchimp etc.
    ],
    status: "balance",
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
    status: "balance",
  },
  {
    path: "/files",
    icon: <Folder size={20} />,
    text: "Files & Folders",
    section: "Content",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    status: "balance",
  },
  {
    path: "/blogs-gallery",
    icon: <FileText size={20} />,
    text: "Blogs & Gallery",
    section: "Content",
    allowedRoles: ["user", "agency", "agencyStaff"],
    status: "balance",
  },

  // =========================
  // AI & SEO TOOLS
  // =========================

  {
    text: "AI Tools",
    icon: <Sparkles size={20} />,
    section: "Tools",
    allowedRoles: ["user", "agency", "agencyStaff"],
    children: [
      { text: "AI Content Writer", path: "/ai/content" },
      { text: "Image Generator", path: "/ai/images" },
      { text: "Hashtag & Keyword", path: "/ai/keywords" },
      { text: "Plagiarism Checker", path: "/ai/plagiarism" },
    ],
    status: "balance",
  },
  {
    text: "Web & SEO Tools",
    icon: <Globe size={20} />,
    section: "Tools",
    allowedRoles: ["user", "agency", "agencyStaff"],
    children: [
      { text: "Web Scraper", path: "/tools/scraper" },
      { text: "SEO Audit", path: "/tools/seo-audit" },
      { text: "Speed Testing", path: "/tools/speed-test" },
      { text: "Competitor Analysis", path: "/tools/competitor" },
    ],
    status: "balance",
  },

  // =========================
  // REPORTS
  // =========================

  {
    path: "/reports",
    icon: <ChartPie size={20} />,
    text: "Advanced Analytics",
    section: "Tools",
    allowedRoles: ["user", "agency", "agencyStaff"],
    status: "balance",
  },

  // =========================
  // SUPPORT & TRAINING
  // =========================

  {
    path: "/tickets",
    icon: <Ticket size={20} />,
    text: "Help Desk & Tickets",
    section: "Support",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    children: [
      { text: "My Tickets", path: "/tickets/list" },
      { text: "Submit Enquiry", path: "/tickets/enquiries" },
    ],
    status: "balance",
  },
  {
    path: "/training",
    icon: <GraduationCap size={20} />,
    text: "Help Center & Docs",
    section: "Support",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    children: [
      { text: "User Guides", path: "/training/guidelines" },
      { text: "API Documentation", path: "/training/docs" },
      { text: "Video Tutorials", path: "/training/tutorials" },
    ],
    status: "balance",
  },
  {
    path: "/announcements",
    icon: <Megaphone size={20} />,
    text: "Announcements",
    section: "Support",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    status: "balance",
  },

  // =========================
  // REPORTS & ANALYTICS
  // =========================

  {
    text: "Reports & Analytics",
    icon: <ChartPie size={20} />, // You can also use <BarChart3 size={20} />
    section: "Tools",
    allowedRoles: ["user", "agency", "agencyStaff", "admin", "adminStaff"],
    status: "balance",
    children: [
      { text: "Enquiry Management", path: "reports/enquiries" },
      { text: "Task Management", path: "reports/tasks" },
      { text: "Invoice and Quotes", path: "reports/invoices-quotes" },
      { text: "Request and Service", path: "reports/requests-services" },
    ],
  },

  // =========================
  // BILLING & RETAIL (USER/AGENCY)
  // =========================

  {
    path: "/billing",
    icon: <CreditCard size={20} />,
    text: "Subscription & Billing",
    section: "Settings",
    allowedRoles: ["user", "agency"],
    status: "balance",
  },
  {
    path: "/purchase-packs",
    icon: <ShoppingCart size={20} />,
    text: "Buy Credits & Packs", // For buying SMS/WA/Email packs (Module 14)
    section: "Settings",
    allowedRoles: ["user", "agency"],
    status: "balance",
  },

  // =========================
  // AGENCY MANAGEMENT
  // =========================

  {
    text: "Client Management",
    icon: <Users size={20} />,
    section: "Agency",
    allowedRoles: ["agency", "agencyStaff"],
    children: [
      { text: "Manage Clients", path: "/agency/clients" },
      { text: "Connect Handles", path: "/agency/connect-handles" },
      { text: "Brand Approvals", path: "/agency/brands" },
    ],
    status: "balance",
  },
  {
    path: "/agency/staff",
    icon: <ClipboardCheck size={20} />,
    text: "Team & Workflows",
    section: "Agency",
    allowedRoles: ["agency"],
    status: "balance",
  },

  // =========================
  // SYSTEM ADMIN
  // =========================

  {
    text: "User & Agency Mgmt",
    icon: <Users size={20} />,
    section: "Admin",
    allowedRoles: ["admin", "adminStaff"],
    children: [
      { text: "Account Approvals", path: "/admin/approvals" },
      { text: "All Users Database", path: "/admin/users" },
      { text: "Admin Staff", path: "/admin/staff" },
    ],
    status: "balance",
  },
  {
    text: "Retail & Subscriptions",
    icon: <Layers size={20} />,
    section: "Admin",
    allowedRoles: ["admin", "adminStaff"],
    children: [
      { text: "Subscription Plans", path: "/admin/plans" },
      { text: "Credit Packs (SMS/WA)", path: "/admin/credit-packs" },
      { text: "Add-ons & Space", path: "/admin/addons" },
      { text: "Coupons & Discounts", path: "/admin/coupons" },
    ],
    status: "balance",
  },
  {
    path: "/payments",
    icon: <CreditCard size={20} />,
    text: "Payment Logs",
    section: "Admin",
    allowedRoles: ["admin", "adminStaff"],
    status: "balance",
  },
  {
    path: "/space",
    icon: <FolderKanban size={20} />,
    text: "Space Management",
    section: "Admin",
    allowedRoles: ["admin", "adminStaff"],
    status: "balance",
  },
  {
    path: "/addons",
    icon: <Layers size={20} />,
    text: "Add-ons Management",
    section: "Admin",
    allowedRoles: ["admin"],
    status: "balance",
  },
  {
    path: "/coupons",
    icon: <Gift size={20} />,
    text: "Coupon Management",
    section: "Admin",
    allowedRoles: ["admin", "adminStaff"],
    status: "balance",
  },
];

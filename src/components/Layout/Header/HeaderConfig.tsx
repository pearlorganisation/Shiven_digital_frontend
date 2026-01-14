import {
  ClipboardCheck,
  Building2,
  BarChart2,
  BookOpen,
  Mail,
  MessageSquare,
  FileCog,
} from "lucide-react";

export interface HeaderItemConfig {
  path?: string;
  icon: React.ReactNode;
  text: string;
  allowedRoles: string[];
  children?: { text: string; path: string }[];
  status?: string;
}

export const HeaderConfig: HeaderItemConfig[] = [
  // ---------- COMMON ----------
  {
    path: "/brand",
    icon: <Building2 size={20} />,
    text: "My Brands",
    allowedRoles: ["user", "agency", "agencyStaff"],
    status:"balance"
  },

  // ---------- ADMIN ----------
  {
    path: "/tasks", 
    icon: <ClipboardCheck size={20} />,
    text: "Task Management",
    allowedRoles: ["admin"],
    status:"balance"
  },
  { 
    path: "/reports", 
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
    path: "/landing",  
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
    path: "/",
    icon: <Mail size={20} />,
    text: "Marketing",
    allowedRoles: ["agency", "agencyStaff", "user"],
     children: [
      { text: "Email Marketing", path: "/email-marketing" },
      { text: "SMS Marketing", path: "/sms" },
     ],
    status:"balance"
  },
  {
    path: "/social media",
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
    path: "/whatsapp",
    icon: <MessageSquare size={20} />,
    text: "WhatsApp Messaging",
    allowedRoles: ["agency", "agencyStaff", "user"],
    status:"balance"
  },
  {
    path: "/ai-content",
    icon: <BookOpen size={20} />,
    text: "AI Content Generation",
    allowedRoles: ["agency", "agencyStaff", "user"],
    status:"balance"
  },

  // ---------- USER ----------

  {
    path: "/campaigns",
    icon: <ClipboardCheck size={20} />,
    text: "Campaign & Content Control",
    allowedRoles: ["user"],
    status:"balance"
  },
];

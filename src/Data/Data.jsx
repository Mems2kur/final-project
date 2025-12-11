import {
  LayoutDashboard,
  CreditCard,
  Repeat,
  BookOpen,
  FileText,
  Settings,
  LogOut
} from "lucide-react";

export const SideData = [
  { name: "Dashboard", icon: <LayoutDashboard size={20} color="gray" />, path: "/" },
  { name: "Fees", icon: <CreditCard size={20} color="gray" />, path: "/fees" },
  { name: "Transaction", icon: <Repeat size={20} color="gray" />, path: "/transaction" },
  { name: "Courses", icon: <BookOpen size={20} color="gray" />, path: "/Course" },
  { name: "Result", icon: <FileText size={20} color="gray" />, path: "/Result" },
  { name: "Profile", icon: <Settings size={20} color="gray" />, path: "/profile" },
  { name: "Logout", icon: <LogOut size={20} color="gray" />, path: "/logout" },
];

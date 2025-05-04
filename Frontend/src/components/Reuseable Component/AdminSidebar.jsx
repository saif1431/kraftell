import React from "react";
import {
  Users,
  Briefcase,
  MessageSquare,
  CreditCard,
  BarChart2,
  Settings,
  Shield,
  PenToolIcon as Tool,
  Search,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

function AdminSidebar({ isOpen, onClose }) {
  const location = useLocation();

  const menuItems = [
    { path: "/admin/users", icon: <Users size={18} />, label: "Users" },
    { path: "projects", icon: <Briefcase size={18} />, label: "Projects" },
    { path: "messages", icon: <MessageSquare size={18} />, label: "Messages" },
    { path: "payments", icon: <CreditCard size={18} />, label: "Payments" },
    { path: "analytics", icon: <BarChart2 size={18} />, label: "Analytics" },
    { path: "settings", icon: <Settings size={18} />, label: "Settings" },
    { path: "verification", icon: <Shield size={18} />, label: "Verification" },
    { path: "ToolingIntegrations", icon: <Tool size={18} />, label: "Tooling & Integrations" },
    { path: "Testing", icon: <Search size={18} />, label: "Testing & QA" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-0 bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:fixed  left-0 h-full w-80 bg-white border-r border-gray-300 px-6 space-y-3  py-6 z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-6 px-6 py-3 rounded-md transition-colors ${
                isActive
                  ? "bg-[#3977ED] text-white hover:bg-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={onClose}
          >
            <span className="w-5">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </aside>
    </>
  );
}

export default AdminSidebar;
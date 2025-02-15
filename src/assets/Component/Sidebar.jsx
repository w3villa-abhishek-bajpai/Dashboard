import React from "react";
import { Link } from "react-router-dom";
import { Home, Calendar, FileText, Kanban, Folder, List, LogOut, Settings, User, Shield, Menu } from "lucide-react";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div>
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-gray-300 flex flex-col shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 lg:relative`}
      >
        {/* Logo & Close Button */}
        <div className="flex justify-between items-center p-6 text-xl font-bold text-white">
          <span className="text-orange-500">Panze</span>
          {/* Close Button (Only on Mobile) */}
          <button 
            className="lg:hidden p-2 text-white bg-gray-700 rounded-md"
            onClick={toggleSidebar}
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Dashboards</p>
            <ul className="mt-5 space-y-2">
              <SidebarItem to="/" icon={<Home />} label="Overview" />
              <SidebarItem to="/employee" icon={<Calendar />} label="Employee" />
              <SidebarItem to="/form" icon={<FileText />} label="Form" />
              <SidebarItem to="/get" icon={<Kanban />} label="Get" />
              <SidebarItem to="/kanban" icon={<Kanban />} label="Kanban" />
              <SidebarItem to="/projects" icon={<Folder />} label="Projects" />
              <SidebarItem to="/tasks" icon={<List />} label="Tasks" />
            </ul>
          </div>

          {/* Administrator */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Administrator</p>
            <ul className="mt-3 space-y-2">
              <SidebarItem icon={<Shield />} label="Auth Pages" />
              <SidebarItem icon={<FileText />} label="Extra Pages" />
              <SidebarItem icon={<Settings />} label="Layout" />
            </ul>
          </div>

          {/* Settings */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Settings</p>
            <ul className="mt-3 space-y-2">
              <SidebarItem icon={<User />} label="Supports" />
              <SidebarItem icon={<Settings />} label="Settings" />
              <SidebarItem icon={<LogOut />} label="Log Out" />
            </ul>
          </div>
        </nav>
      </div>

      {/* Overlay to Close Sidebar on Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

// Sidebar Item Component for Reusability
const SidebarItem = ({ to, icon, label }) => {
  return (
    <li className="rounded-lg hover:bg-orange-500">
      {to ? (
        <Link to={to} className="flex items-center space-x-3 p-2 text-white w-full">
          {icon}
          <span>{label}</span>
        </Link>
      ) : (
        <span className="flex items-center space-x-3 p-2 text-white cursor-pointer">
          {icon}
          <span>{label}</span>
        </span>
      )}
    </li>
  );
};

export default Sidebar;

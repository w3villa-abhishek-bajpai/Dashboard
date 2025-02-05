import React from "react";
import { Link } from "react-router-dom";
import { Home, Calendar, FileText, Kanban, Folder, List, LogOut, Settings, User, Shield } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-gray-300 flex flex-col h-screen">
      {/* Logo Section */}
      <div className="p-6 text-xl font-bold text-white">
        <span className="text-orange-500">Panze</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Dashboards</p>
          <ul className="mt-5 space-y-2">
            <li className="rounded-lg hover:bg-orange-500">
              <Link to="/" className="flex items-center space-x-3 p-2 text-white w-full">
                <Home className="w-5 h-5" />
                <span>Overview</span>
              </Link>
            </li>
            <li className="rounded-lg hover:bg-orange-500">
              <Link to="/employee" className="flex items-center space-x-3 p-2 text-white w-full">
                <Calendar className="w-5 h-5" />
                <span>Employee</span>
              </Link>
            </li>
            <li className="rounded-lg hover:bg-orange-500">
              <Link to="/form" className="flex items-center space-x-3 p-2 text-white w-full">
                <FileText className="w-5 h-5" />
                <span>Form</span>
              </Link>
            </li>
            <li className="rounded-lg hover:bg-orange-500">
              <Link to="/file-manager" className="flex items-center space-x-3 p-2 text-white w-full">
                <Kanban className="w-5 h-5" />
                <span>File Manager</span>
              </Link>
            </li>
            <li className="rounded-lg hover:bg-orange-500">
              <Link to="/kanban" className="flex items-center space-x-3 p-2 text-white w-full">
                <Kanban className="w-5 h-5" />
                <span>Kanban</span>
              </Link>
            </li>
            <li className="rounded-lg hover:bg-orange-500">
              <Link to="/projects" className="flex items-center space-x-3 p-2 text-white w-full">
                <Folder className="w-5 h-5" />
                <span>Projects</span>
              </Link>
            </li>
            <li className="rounded-lg hover:bg-orange-500">
              <Link to="/tasks" className="flex items-center space-x-3 p-2 text-white w-full">
                <List className="w-5 h-5" />
                <span>Tasks</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Administrator */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Administrator</p>
          <ul className="mt-3 space-y-2">
            <li className="rounded-lg hover:bg-orange-500">
              <span className="flex items-center space-x-3 p-2 text-white">
                <Shield className="w-5 h-5" />
                <span>Auth Pages</span>
              </span>
            </li>
            <li className="rounded-lg hover:bg-orange-500">
              <span className="flex items-center space-x-3 p-2 text-white">
                <FileText className="w-5 h-5" />
                <span>Extra Pages</span>
              </span>
            </li>
            <li className="rounded-lg hover:bg-orange-500">
              <span className="flex items-center space-x-3 p-2 text-white">
                <Settings className="w-5 h-5" />
                <span>Layout</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Settings */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Settings</p>
          <ul className="mt-3 space-y-2">
            <li className="rounded-lg hover:bg-orange-500">
              <span className="flex items-center space-x-3 p-2 text-white">
                <User className="w-5 h-5" />
                <span>Supports</span>
              </span>
            </li>
            <li className="rounded-lg hover:bg-orange-500">
              <span className="flex items-center space-x-3 p-2 text-white">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </span>
            </li>
            <li className="rounded-lg hover:bg-orange-500">
              <span className="flex items-center space-x-3 p-2 text-white">
                <LogOut className="w-5 h-5" />
                <span>Log Out</span>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Home, Calendar, FileText, Kanban, Folder, List, LogOut, Settings, User, Shield } from "lucide-react";

const Sidebar = () => {
  return (
    <div className=" w-64 bg-gray-900 text-gray-300 flex flex-col ">
      {/* Logo Section */}
      <div className="p-6 text-xl font-bold text-white">
        <span className="text-orange-500">Panze</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        {/* Dashboards */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Dashboards</p>
          <ul className="mt-5 space-y-2">
            <li className="flex items-center space-x-3 p-2 rounded-lg bg-orange-500 text-white">
              <Home className="w-5 h-5" />
              <span>Overview</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Calendar className="w-5 h-5" />
              <span>Calendar</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <FileText className="w-5 h-5" />
              <span>Tickets</span>
            </li>

            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Kanban className="w-5 h-5" />
              <span>File Manager</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Kanban className="w-5 h-5" />
              <span>Kanban</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Folder className="w-5 h-5" />
              <span>Projects</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <List className="w-5 h-5" />
              <span>Tasks</span>
            </li>
          </ul>
        </div>

        {/* Administrator */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Administrator</p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Shield className="w-5 h-5" />
              <span>Auth Pages</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <FileText className="w-5 h-5" />
              <span>Extra Pages</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Settings className="w-5 h-5" />
              <span>Layout</span>
            </li>
          </ul>
        </div>

        {/* Settings */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Settings</p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <User className="w-5 h-5" />
              <span>Supports</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <LogOut className="w-5 h-5" />
              <span>Log Out</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Search, Bell, Globe, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      {/* Search Bar */}
      <div className="flex items-center w-1/3">
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Globe Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Globe className="w-5 h-5 text-gray-600" />
        </button>

        {/* Notification Icon */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
          {/* Notification Badge */}
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* User Profile */}
        <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-full">
          <UserCircle className="w-8 h-8 text-gray-600" />
          <div className="hidden md:block">
     
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;

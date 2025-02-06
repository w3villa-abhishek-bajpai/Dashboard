import React from "react";
import { Search, Bell, Globe, UserCircle, Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between bg-white shadow-md px-4 py-3 rounded-lg md:px-6 md:py-4 ">
      {/* Left Section - Hamburger Menu & Search Bar */}
      <div className="flex items-center w-full md:w-1/3 ">
        {/* Hamburger Menu - Visible Only on Small Screens */}
        <button className="lg:hidden p-2 text-black" onClick={toggleSidebar}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Search Bar */}
        <div className="relative flex-1 ml-2 md:ml-0 ">
          <input
            type="text"
            placeholder="     Search tasks..."
            className="w-full px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all md:w-full md:flex-1 "
          />
          <Search className="absolute top-2.5 right- w-4 h-4 text-gray-500 hidden md:block" />
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center space-x-4 md:space-x-6 ">
        {/* Globe Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Globe className="w-5 h-5 text-gray-600" />
        </button>

        {/* Notification Icon */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* User Profile */}
        <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-full">
          <UserCircle className="w-8 h-8 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar";
import Overview from "../Overview";
import Employee from "../Employee";
import Form from "../Form";
import Header from "../Header";

const Routess = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex max-h-screen">
        {/* Sidebar - Controls Visibility */}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform transform z-50 
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0 lg:relative lg:block w-64`}
        >
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>

        {/* Overlay to close sidebar on mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100 max-h-screen overflow-y-auto scrollbar-hide">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Routess;

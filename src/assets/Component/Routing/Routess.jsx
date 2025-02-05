import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar";
import Overview from "../Overview";
import Employee from "../Employee";
import Form from "../Form";




const Routess = () => {
  return (
    <Router>
      <div className="flex max-h-screen ">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100   max-h-screen overflow-y-auto scrollbar-hide">
          <Routes>
            {/* Overview Route - Loads Homepage */}
            <Route path="/" element={<Overview />} />

            {/* Other Routes */}
            <Route path="/employee" element={<Employee />} />
            <Route path="/form" element={<Form/>} />
           
      
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Routess;

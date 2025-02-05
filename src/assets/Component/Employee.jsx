import React, { useState } from "react";
import img from '../Images/bg.avif'

const Employee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Data Submitted:", formData);
    alert("Employee details submitted successfully!");
  };

  return (
    <div className={`h-screen flex items-center justify-center bg-fill bg-center bg-no-repeat bg-[url(${img})] bg-center  bg-cover   `} 
    style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-[600px] mx-auto  p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Employee Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter Email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter Phone Number"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-gray-700">Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter Designation"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-gray-700">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Employee;

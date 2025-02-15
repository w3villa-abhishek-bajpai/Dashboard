import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip } from "recharts";
import { CiClock2 } from "react-icons/ci";


const Charts = () => {
  const monthlyTargetData = [
    { name: "Pending Projects", value: 32, color: "#f43f5e" },
    { name: "Done Projects", value: 46, color: "#6366f1" },
    { name: "New Projects", value: 25, color: "#22c55e" },
  ];

  const projectStatisticsData = [
    { month: "Jan", workingHours: 200, projects: 3 },
    { month: "Feb", workingHours: 250, projects: 4 },
    { month: "Mar", workingHours: 300, projects: 5 },
    { month: "Apr", workingHours: 350, projects: 6 },
    { month: "May", workingHours: 400, projects: 7 },
    { month: "Jun", workingHours: 450, projects: 8 },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center bg-gray-100 p-4">
      <div className="w-full md:w-[48%] lg:w-[31%] bg-white rounded-2xl shadow-lg p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Monthly Target</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={monthlyTargetData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={5}>
              {monthlyTargetData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full md:w-[48%] lg:w-[68%] bg-white rounded-2xl shadow-lg p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Project Statistics</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={projectStatisticsData} barGap={10}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fill: "#9ca3af", fontSize: 12 }} />
            <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} />
            <BarTooltip />
            <Bar dataKey="workingHours" fill="#f43f5e" radius={[10, 10, 0, 0]} />
            <Bar dataKey="projects" fill="#6366f1" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const Project = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center bg-gray-100 p-4">
      <div className="w-full md:w-[48%] lg:w-[31%] bg-white rounded-2xl shadow-lg p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Project Summary</h3>
        <div className="border p-4 rounded-lg">
          <div className="flex items-center">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="w-6 h-6 rounded-full ring ring-offset-2" alt="User" />
            <div className="ml-3">
              <p className="text-sm">Tiddo App</p>
              <p className="text-xs text-gray-500">19 Members</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[48%] lg:w-[31%] bg-white rounded-2xl shadow-lg p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Project Overview</h3>
        <div className="flex justify-center items-center">
          <div className="relative w-40 h-40 border-4 border-blue-500 rounded-full flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">65%</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[48%] lg:w-[31%] bg-white rounded-2xl shadow-lg p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Daily Task</h3>
        <div className="border p-4 rounded-lg">
          <p className="text-sm">Tido Mobile App Version</p>
          <p className="text-xs text-gray-500">Dashboard design for Devine Edge Design Agency</p>
          <p className="text-xs flex items-center mt-2 text-gray-500"><CiClock2 className="mr-1" /> Updated 2 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default Charts;

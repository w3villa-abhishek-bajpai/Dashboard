import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip } from "recharts";

const Charts = () => {
  // Data for Monthly Target (Pie Chart)
  const monthlyTargetData = [
    { name: "Pending Projects", value: 32, color: "#f43f5e" },
    { name: "Done Projects", value: 46, color: "#6366f1" },
    { name: "New Projects", value: 25, color: "#22c55e" },
  ];

  // Data for Project Statistics (Bar Chart)
  const projectStatisticsData = [
    { month: "Jan", workingHours: 200, projects: 3 },
    { month: "Feb", workingHours: 250, projects: 4 },
    { month: "Mar", workingHours: 300, projects: 5 },
    { month: "Apr", workingHours: 350, projects: 6 },
    { month: "May", workingHours: 400, projects: 7 },
    { month: "Jun", workingHours: 450, projects: 8 },
  ];

  return (
    <div className="flex items-center justify-between bg-gray-100 px-6 py-4 h-auto ">
      {/* Monthly Target Chart */}
      <div className="w-[30%] bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Target</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={monthlyTargetData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
            >
              {monthlyTargetData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-4 mt-4">
          {monthlyTargetData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                style={{ backgroundColor: item.color }}
                className="w-3 h-3 rounded-full"
              ></div>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Project Statistics Chart */}
      <div className="w-[68%] bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Project Statistics</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={projectStatisticsData} barGap={10}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fill: "#9ca3af", fontSize: 12 }} />
            <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} />
            <BarTooltip
              formatter={(value, name) => [`${value}`, name === "workingHours" ? "Working Hours" : "Projects"]}
              contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
            />
            <Bar
              dataKey="workingHours"
              fill="#f43f5e"
              radius={[10, 10, 0, 0]}
              name="Working Hours"
            />
            <Bar
              dataKey="projects"
              fill="#6366f1"
              radius={[10, 10, 0, 0]}
              name="Projects"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;

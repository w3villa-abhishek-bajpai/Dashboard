import React, { useState, useEffect } from "react";
import axios from "axios";

const Get = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 7; // Adjust based on your requirement

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20") // Fetch 20 users
      .then((response) => {
        setEmployees(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
        setLoading(false);
      });
  }, []);

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) =>
    `${employee.name.first} ${employee.name.last}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  return (
    <div className="p-4 bg-gray-100 h-[1000px] flex justify-center ">
      <div className="w-full max-w-5xl h-[560px] bg-white rounded-2xl shadow-lg p-6  ">
        <h2 className="text-[30px] font-bold text-gray-700 mb- text-center">Employee Data</h2>

        {/* Search Input */}
        <div className="mb-4 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="text"
            placeholder="Search Employee..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 w-full sm:w-2/3 rounded-md"
          />
        </div>

        {loading ? (
          <p className="text-center text-blue-500 font-semibold">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border border-gray-300">Name</th>
                  <th className="p-2 border border-gray-300">Email</th>
                  <th className="p-2 border border-gray-300">Location</th>
                </tr>
              </thead>
              <tbody>
                {currentEmployees.length > 0 ? (
                  currentEmployees.map((employee, index) => (
                    <tr key={index} className="hover:bg-gray-100 text-center">
                      <td className="p-2 border border-gray-300">{`${employee.name.first} ${employee.name.last}`}</td>
                      <td className="p-2 border border-gray-300">{employee.email}</td>
                      <td className="p-2 border border-gray-300">
                        {employee.location.city}, {employee.location.country}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center p-4 text-gray-500">
                      No results found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {filteredEmployees.length > employeesPerPage && (
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Previous
            </button>

            <span className="text-gray-600 text-sm sm:text-base">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div> 
  );
};

export default Get;

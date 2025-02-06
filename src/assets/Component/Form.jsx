import React, { useState } from "react";

const Form = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    position: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const itemsPerPage = 5;

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Create a new employee (C)
  const handleCreate = () => {
    setEmployees([...employees, { ...formData, id: Date.now() }]);
    setFormData({ id: "", name: "", email: "", position: "" });
    setShowForm(false);
  };

  // Update an existing employee (U)
  const handleUpdate = (id) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? { ...formData, id } : employee
      )
    );
    setFormData({ id: "", name: "", email: "", position: "" });
    setShowForm(false);
  };

  // Delete an employee (D)
  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  // Calculate index range for pagination
  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Total pages
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white p-6 shadow-lg rounded-lg">
        
        {/* Add Employee Button */}
        {!showForm && (
          <div className="text-center mb-6">
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Add Employee
            </button>
          </div>
        )}

        {/* Employee Form (Hidden initially) */}
        {showForm && (
          <div className="mb-10">
            <h2 className="font-bold text-xl text-center mb-4">Employee Form</h2>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                formData.id ? handleUpdate(formData.id) : handleCreate();
              }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="border p-2 w-full rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border p-2 w-full rounded-md"
              />
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="Position"
                className="border p-2 w-full rounded-md"
              />
              <div className="flex justify-between">
                <button type="submit" className="w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                  {formData.id ? "Update Employee" : "Add Employee"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="w-1/2 bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 ml-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Employee List */}
        <div className="mt-10">
          <h3 className="font-bold text-lg text-center mb-6">Employee List</h3>
          {employees.length === 0 ? (
            <p className="text-center text-gray-500">No employees added yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-3">Name</th>
                    <th className="border p-3">Email</th>
                    <th className="border p-3">Position</th>
                    <th className="border p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentEmployees.map((employee) => (
                    <tr key={employee.id} className="text-center">
                      <td className="border p-3">{employee.name}</td>
                      <td className="border p-3">{employee.email}</td>
                      <td className="border p-3">{employee.position}</td>
                      <td className="border p-3 flex justify-center gap-2">
                        <button
                          onClick={() => {
                            setFormData(employee);
                            setShowForm(true);
                          }}
                          className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination Controls */}
          {employees.length > itemsPerPage && (
            <div className="mt-6 flex justify-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;

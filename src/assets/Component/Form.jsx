import React, { useState } from 'react';

const Form = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    position: ''
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Create a new employee (C)
  const handleCreate = () => {
    setEmployees([
      ...employees,
      { ...formData, id: Date.now() }
    ]);
    setFormData({ id: '', name: '', email: '', position: '' });
  };

  // Update an existing employee (U)
  const handleUpdate = (id) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? { ...formData, id } : employee
      )
    );
    setFormData({ id: '', name: '', email: '', position: '' });
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
    <div className="p-4 ">
      <h2 className='font-bold text-2xl'>Employee Management Form</h2>
      <form
        className="space-y-4 mt-5"
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
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          placeholder="Position"
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          {formData.id ? 'Update Employee' : 'Add Employee'}
        </button>
      </form>

      <div className="mt-6 ">
        <h3 className='font-bold font-extrabold'>Employee List</h3>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Position</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee) => (
              <tr key={employee.id}>
                <td className="border p-2">{employee.name}</td>
                <td className="border p-2">{employee.email}</td>
                <td className="border p-2">{employee.position}</td>
                <td className="border p-2">
                  <button
                    onClick={() => setFormData(employee)}
                    className="bg-yellow-500 text-white p-1 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="bg-red-500 text-white p-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`p-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Form;

import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const employeesPerPage = 5;

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.role) {
      alert("Please fill out all fields.");
      return;
    }

    let updatedEmployees;
    if (editingEmployee) {
      updatedEmployees = employees.map(emp => emp.id === editingEmployee.id ? { ...emp, ...formData } : emp);
    } else {
      const newEmployee = { id: Date.now(), ...formData };
      updatedEmployees = [...employees, newEmployee];
    }

    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setShowModal(false);
    setEditingEmployee(null);
    setFormData({ name: "", email: "", role: "" });
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setFormData({ name: employee.name, email: employee.email, role: employee.role });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const filteredEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(filteredEmployees);
    localStorage.setItem("employees", JSON.stringify(filteredEmployees));
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4 md:p-10 w-full overflow-x-auto">
      <div className="p-6 mx-auto bg-white shadow-lg rounded-xl w-full max-w-4xl overflow-hidden">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Employee Management</h1>
        <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
          <input
            type="text"
            placeholder="Search by name, email, or role"
            className="border p-2 rounded w-full md:max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => {
              setShowModal(true);
              setEditingEmployee(null);
              setFormData({ name: "", email: "", role: "" });
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 justify-center"
          >
            <FaPlus /> Add Employee
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Role</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.map(employee => (
                <tr key={employee.id} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                  <td className="border p-2">{employee.name}</td>
                  <td className="border p-2">{employee.email}</td>
                  <td className="border p-2">{employee.role}</td>
                  <td className="border p-2 flex gap-2 justify-center">
                    <button onClick={() => handleEdit(employee)} className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(employee.id)} className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-4">
          {[...Array(Math.ceil(filteredEmployees.length / employeesPerPage))].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;

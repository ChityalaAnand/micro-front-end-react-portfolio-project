import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const CreateEmployeeComponent = ({ onClose, existingEmployee }) => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(
    existingEmployee || {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dateOfBirth: "",
    department: "",
    designation: "",
    dateOfJoining: "",
    salary: "",
    emailId: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const saveEmployee = async (e) => {
    e.preventDefault();
    setError("");

    if (!employee.firstName || !employee.lastName
      || !employee.phoneNumber || !employee.dateOfBirth
      || !employee.department || !employee.designation
      || !employee.dateOfJoining || !employee.salary || !employee.emailId) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      if (employee.empId) {
        // update case
        await EmployeeService.updateEmployee(employee.empId, employee);
        alert("Employee updated successfully!");
      } else {
        // create case
        await EmployeeService.createEmployee(employee);
        alert("Employee saved successfully!");
      }

      onClose();
      navigate("/");
    } catch (err) {
      console.error("Error saving employee:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="modal-overlay" style={overlayStyle}>
      <div className="modal-content" style={modalStyle}>
        <h2 className="text-center mb-3" style={{ color: "#6c757d" }}>Add Employee</h2>

        {/* Show backend error (e.g., email exists, phone exists) */}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={saveEmployee}>
          <div className="mb-3">
            <label className="form-label" style={{ color: "#6c757d" }}>
              First Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter first name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#6c757d" }}>
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter last name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#6c757d" }}>
              Phone Number <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={employee.phoneNumber}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter phone number"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#6c757d" }}>
              Date Of Birth <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              name="dateOfBirth" // ✅ fixed typo (was dataOfBirth)
              value={employee.dateOfBirth}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#6c757d" }}>
              Department <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter department"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#6c757d" }}>
              Designation <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="designation"
              value={employee.designation}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter designation"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#6c757d" }}>
              Date Of Joining <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              name="dateOfJoining"
              value={employee.dateOfJoining}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#6c757d" }}>
              Salary <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter salary"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#6c757d" }}>
              Email ID <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              name="emailId"
              value={employee.emailId}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Inline styles for modal overlay and content
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "0.5rem",
  width: "600px",
  height: "500px",
  maxWidth: "90%",
  overflow: "scroll",
};

export default CreateEmployeeComponent;

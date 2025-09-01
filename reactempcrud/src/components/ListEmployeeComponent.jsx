import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import CreateEmployeeComponent from './CreateEmployeeComponent'

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            showModal: false,
            selectedEmployee: null,
        }
    }

    fetchEmployees = () => {
        EmployeeService.getEmployee().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    componentDidMount() {
        this.fetchEmployees();
    }

    deleteEmployee(employeeId) {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            EmployeeService.deleteEmployee(employeeId)
                .then(() => {
                    console.log("Employee deleted successfully");

                    // Refresh employee list
                    EmployeeService.getEmployee().then((res) => {
                        this.setState({ employees: res.data });
                    });
                })
                .catch(error => {
                    console.error("Error deleting employee:", error);
                });
        }
    }

    updateEmployee = (empId) => {
        const emp = this.state.employees.find(e => e.empId === empId);
        this.setState({ selectedEmployee: emp, showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false, selectedEmployee: null });
        this.fetchEmployees(); // refresh list
    };
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>EmpId</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone Number</th>
                                <th>Date Of Birth</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Date Of Joining</th>
                                <th>Salary</th>
                                <th>EmailId</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map((employee) =>
                                    <tr key={employee.empId}>
                                        <td>{employee.empId}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.phoneNumber}</td>
                                        <td>{employee.dateOfBirth}</td>
                                        <td>{employee.department}</td>
                                        <td>{employee.designation}</td>
                                        <td>{employee.dateOfJoining}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <div className="d-flex gap-1">
                                                <button className="btn custom-btn" style={{ backgroundColor: "#e63946", color: "#fff" }} onClick={() => this.deleteEmployee(employee.empId)}>DELETE</button>
                                                <button className="btn custom-btn" style={{ backgroundColor: "#2196f3", color: "#fff" }} onClick={() => this.updateEmployee(employee.empId)}>UPDATE</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                {/* Show modal if editing */}
                {this.state.showModal && (
                    <CreateEmployeeComponent
                        onClose={this.closeModal}
                        existingEmployee={this.state.selectedEmployee}
                    />
                )}
            </div>
        )
    }
}

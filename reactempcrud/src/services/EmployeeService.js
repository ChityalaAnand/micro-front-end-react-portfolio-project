import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employee";
class EmployeeService {
    getEmployee() {
        return axios.get(EMPLOYEE_API_BASE_URL + "/employees");
    }

    createEmployee(employee) {
        return axios.post(`${EMPLOYEE_API_BASE_URL}/save`, employee)
            .then(response => response.data)
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    // ✅ backend error message comes here
                    throw new Error(error.response.data);
                } else {
                    throw new Error("Something went wrong! Please try again.");
                }
            });
    }

    deleteEmployee(employeeId) {
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${employeeId}`);
    }

    updateEmployee(id, employee) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
  }

}
export default new EmployeeService()
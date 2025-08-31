package com.reactspringcrudoperation.employeecrud.controller;

import com.reactspringcrudoperation.employeecrud.dto.EmployeeDto;
import com.reactspringcrudoperation.employeecrud.entity.Employee;
import com.reactspringcrudoperation.employeecrud.repository.EmployeeRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/employee/")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;
    @GetMapping("/employees")
    public List<Employee> getEmployee(){
        return employeeRepository.findAll();
    }
    
    @PostMapping("/save")
    public ResponseEntity<?> createEmployee(@RequestBody @Valid EmployeeDto employeeDto) {
        // Check if email already exists
        if (employeeRepository.existsByEmailId(employeeDto.getEmailId().toLowerCase().trim())) {
            return ResponseEntity
                    .badRequest()
                    .body("Email already exists. Please use a different email.");
        }

        // Check if phone number already exists
        if (employeeRepository.existsByPhoneNumber(employeeDto.getPhoneNumber().trim())) {
            return ResponseEntity
                    .badRequest()
                    .body("Phone number already exists. Please use a different one.");
        }

        // Map DTO → Entity
        Employee employee = new Employee();
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmailId(employeeDto.getEmailId().toLowerCase().trim());
        employee.setPhoneNumber(employeeDto.getPhoneNumber());
        employee.setDateOfBirth(employeeDto.getDateOfBirth());
        employee.setDepartment(employeeDto.getDepartment());
        employee.setDesignation(employeeDto.getDesignation());
        employee.setDateOfJoining(employeeDto.getDateOfJoining());
        employee.setSalary(employeeDto.getSalary());
        employee.setActive(employeeDto.getActive());

        Employee savedEmployee = employeeRepository.save(employee);

        return ResponseEntity.ok(savedEmployee);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id){
    	employeeRepository.deleteById(id);
    	return ResponseEntity.noContent().build();
    }


}

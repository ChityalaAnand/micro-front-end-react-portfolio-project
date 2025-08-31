package com.reactspringcrudoperation.employeecrud.repository;

import com.reactspringcrudoperation.employeecrud.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	boolean existsByEmailId(String emailId);

	boolean existsByPhoneNumber(String phoneNumber);
}

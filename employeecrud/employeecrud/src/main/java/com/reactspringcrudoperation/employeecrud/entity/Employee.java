package com.reactspringcrudoperation.employeecrud.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long empId;
    @NotBlank(message = "First name is required")
    @Size(min = 2, max = 50)
    private String firstName;

    @NotBlank(message = "Last name is required")
    @Size(min = 2, max = 50)
    private String lastName;

    @NotBlank(message = "Email is required")
    @Pattern(
            regexp = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.(com)$",
            message = "Email must be valid and end with .com"
    )
    @Column(nullable = false, unique = true)
    private String emailId;

    @NotBlank(message = "Phone number is required")
    @Pattern(
            regexp = "^[6-9]\\d{9}$",
            message = "Phone number must be 10 digits and start with 6, 7, 8, or 9"
    )
    @Column(length = 10, unique = true)
    private String phoneNumber;

    @Past(message = "Date of birth must be in past")
    private LocalDate dateOfBirth;

    @NotBlank(message = "Department is required")
    private String department;

    @NotBlank(message = "Designation is required")
    private String designation;

    @PastOrPresent(message = "Date of joining cannot be in the future")
    private LocalDate dateOfJoining;

    @NotNull(message = "Salary is required")
    @Min(value = 0, message = "Salary must be positive")
    private Double salary;

    private Boolean active = true;

}

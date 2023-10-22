package com.crudbackend.crudBackend.repository;

import com.crudbackend.crudBackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // You can add custom repository methods here if needed
}

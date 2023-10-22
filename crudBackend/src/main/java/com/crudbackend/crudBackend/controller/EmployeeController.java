package com.crudbackend.crudBackend.controller;

import com.crudbackend.crudBackend.exception.ResourceNotFoundException;
import com.crudbackend.crudBackend.model.Employee;
import com.crudbackend.crudBackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;
@GetMapping    public List<Employee>getAllEmployees(){
        return employeeRepository.findAll();
    }

    //Build REST API

    @PostMapping


    public Employee createEmployee(@RequestBody Employee employee){
return employeeRepository.save(employee);
    }

    // Build Get Data by ID REST API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
    Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist with id:" + id));
    return ResponseEntity.ok(employee);
    }


    // Build Update Data REST API
    @PutMapping("{id}")
    public  ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee updateDetails){
    Employee updateEmployee= employeeRepository.findById(id)
            .orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist with id:" + id));
    updateEmployee.setFirstName(updateDetails.getFirstName());
        updateEmployee.setLastName(updateDetails.getLastName());
        updateEmployee.setEmailId(updateDetails.getEmailId());
        employeeRepository.save(updateEmployee);
    return ResponseEntity.ok(updateEmployee);
    }


    //Delete data REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
   Employee employee=employeeRepository.findById(id)
           .orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist with id:" + id));
   employeeRepository.delete(employee);

   return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

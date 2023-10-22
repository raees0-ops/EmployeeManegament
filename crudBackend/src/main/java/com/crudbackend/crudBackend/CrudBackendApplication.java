package com.crudbackend.crudBackend;

import com.crudbackend.crudBackend.model.Employee;
import com.crudbackend.crudBackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public abstract class CrudBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {SpringApplication.run(CrudBackendApplication.class, args);}
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... arg)throws Exception{
//		Employee employee=new Employee();
//		employee.setFirstName("Raees");
//		employee.setFirstName("Raees");
//		employee.setLastName("mulla");
//		employee.setEmailId("demo@gmail.com");
//		employeeRepository.save(employee);
//
//
//		Employee employee1=new Employee();
//		employee1.setFirstName("Raees1");
//		employee1.setLastName("mulla1");
//		employee1.setEmailId("demo@gmail1.com");
//		employeeRepository.save(employee1);
	}


}

import React, { useEffect, useState } from 'react'
import EmployeesServices from '../services/EmployeesServices'
import { Link } from 'react-router-dom'
import '../App.css';

const ListEmployeeComponent = () => {


   const [employees,setemployees] =useState([])

   useEffect(()=>{
    getAllData();

   },[])
   const getAllData=()=>{
    EmployeesServices.getAllEmployees().then((response)=>{
        setemployees(response.data)
        // console.log(response.data)
    }).catch(error=>{
        console.log(error)
    })
   }

const deleteEmployee=(employeeId)=>{
    
    EmployeesServices.deleteEmployee(employeeId).then((response)=>{
        getAllData();
    }).catch(error=>{
        console.log(error)
    })
}
  return (


    <div className='container'>
      
    <h2 className='text-center '>List Employees</h2>
    <Link to="/add-employee" className='btn btn-primary mb-2'>Add Employee</Link>
    <div className='table-responsive'>
    <table className='table table-bordered '>
 
    <thead>
        <th>id</th>
        <th>first name</th>
        <th>last Name</th>
        <th>Email</th>
        <th colSpan={2}>Actoins</th>
        
    </thead>
   
    <tbody>
        {
            employees.map(
                employee=>
                <tr key={employee.id}>
                <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                    <td>
                    <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                    </td>
                    <td>
                  <button className='btn btn-danger' onClick={()=>{deleteEmployee(employee.id)}}> Delete</button>
                    </td>
                
                   
                </tr>
            )
        }
    </tbody>

    </table>
    </div>

    </div>
  )
}

export default ListEmployeeComponent

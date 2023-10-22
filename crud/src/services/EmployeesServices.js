import axios from 'axios'

const EMPLOYEE_REST_API_URL='http://localhost:8080/api/v1/employee'

class Employees{
    getAllEmployees(){
        return axios.get(EMPLOYEE_REST_API_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_REST_API_URL,employee)
    }

    getEmployeeById(employeeid){
        console.log(employeeid)
        return axios.get(EMPLOYEE_REST_API_URL+ "/"+ employeeid);
       
    }
    updateEmployee(employeeid,employee){
        
        return axios.put(EMPLOYEE_REST_API_URL+ "/"+ employeeid,employee);
       
    }
    deleteEmployee(employeeid){
        
        return axios.delete(EMPLOYEE_REST_API_URL+ "/"+ employeeid);
       
    }
  
}
export default new Employees();
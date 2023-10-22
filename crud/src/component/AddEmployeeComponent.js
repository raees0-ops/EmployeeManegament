
import React, {useState,useEffect} from 'react'
import EmployeesServices from '../services/EmployeesServices'
import { Link, useNavigate ,useParams} from 'react-router-dom';
const AddEmployeeComponent = () => {

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [emailId, setemailId] = useState("")

    const navigate = useNavigate();

    const {id}=useParams();

    const saveOrUpdateEmployee=(e)=>{

        e.preventDefault();

        const employee = {firstName,lastName,emailId}
if(id){
    EmployeesServices.updateEmployee(id,employee).then((response)=>{

        console.log(response.data)
        navigate("/employee")

     }).catch(error=>{

        console.log(error)

     })
}
else{
    EmployeesServices.createEmployee(employee).then((response)=>{

        console.log(response.data)
        navigate("/employee")

     }).catch(error=>{

        console.log(error)

     })
}
      



    }
    
    useEffect(() => {
      
    EmployeesServices.getEmployeeById(id).then((response)=>{
        setfirstName(response.data.firstName)
        setlastName(response.data.lastName)
        setemailId(response.data.emailId)
    }).catch(error=>{
        console.log(error)
    })
     
    }, [])
    const title=()=>{
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }
        else{
            return <h2 className='text-center'>Add Employee</h2>
        }

    }
  return (
    <div>
     <div className='container con'>
     <div className='row'>
<div className='card col-md-6 offset-md-3'>
   {title()}
    <div className='card-body'>
        <form>
            <div className='form-group mb-2'>
                <label className='form-label'>First Name :</label>
                <input type='text' placeholder='Enter Employee First Name' 
                name='firstName' 
                className='form-control'
                value={firstName}
                    onChange={(e)=>setfirstName(e.target.value)}
                />
            </div>
            <div className='form-group mb-2'>
                <label className='form-label'>Last Name :</label>
                <input type='text' placeholder='Enter Employee last Name' 
                name='lastName' 
                className='form-control'
                value={lastName}
                    onChange={(e)=>setlastName(e.target.value)}
                />
            </div>
            <div className='form-group mb-2'>
                <label className='form-label'>Email ID :</label>
                <input type='email' placeholder='Enter Employee email Id' 
                name='emailId' 
                className='form-control'
                value={emailId}
                    onChange={(e)=>setemailId(e.target.value)}
                />
            </div>
            <button className='btn btn-success m-2' onClick={(e)=>saveOrUpdateEmployee(e)}>ADD</button>
            <Link to={"/employee"} className='btn btn-danger'>Cancel</Link>
        </form>
    </div>
</div>
     </div>
     </div>
    </div>
  )
}

export default AddEmployeeComponent

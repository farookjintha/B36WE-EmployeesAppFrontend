import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        getEmployees();
    }, [])

    const getEmployees = async () => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employees`);
            if(response){
                setEmployeeList(response.data);
            }
        }catch(error){
            console.log('Error: ', error);
        }
    }

    const handleDelete = async (empID) => {
        try{
            const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/employees/${empID}`);
            if(response){
                getEmployees();
            }
        }catch(error){
            console.log('Error: ', error);
        }
    }

    return(
        <div>
            <h3>Employee List</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Designation</th>
                        <th>Blood Group</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.length && employeeList.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.mobileNumber}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.bloodGroup}</td>
                            <td>{employee.role === 1 ? 'Admin' : 'Employee'}</td>
                            <td>
                                <Link className="btn btn-link" to={`/employees/${employee._id}/update`} >Edit</Link>
                                <button className="btn btn-link" onClick={() => handleDelete(employee._id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList;
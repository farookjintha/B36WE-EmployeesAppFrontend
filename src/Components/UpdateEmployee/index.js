import './updateEmployee.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateEmployee = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [employeeDetails, setEmployeeDetails] = useState({
        name: '',
        email: '',
        password: '',
        mobileNumber: '',
        dob: '',
        designation: '',
        bloodGroup: '',
        role: 2
    })

    useEffect(() => {
        const empID = params.empID.toString();

        axios.get(`${process.env.REACT_APP_BASE_URL}/employees/${empID}`).then((response) =>{
            setEmployeeDetails(response.data);
            console.log('Reponse: ', response.data);
        }).catch(error => {
            console.log('Error: ', error);
        })
    }, [params.empID])



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Employee Details : ', employeeDetails);
        try{
            const empID = params.empID.toString();
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/employees/${empID}`, employeeDetails);
            if(response){
                setEmployeeDetails({
                    name: '',
                    email: '',
                    password: '',
                    mobileNumber: '',
                    dob: '',
                    designation: '',
                    bloodGroup: '',
                    role: 2
                });

                navigate('/employees');
            }
        }catch(error){
            console.log('Erro while register user: ', error);
        }
    }

    const handleChange = (value) => {
        return setEmployeeDetails(employee => {
            return {...employee, ...value}
        })
    }

    return(
        <div className='updateEmployeeContainer'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name: </label>
                    <input className='form-control' id='name'  type='text' value={employeeDetails.name} onChange={(e) => handleChange({name: e.target.value})} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email: </label>
                    <input className='form-control' id='email'  type='email' value={employeeDetails.email} onChange={(e) => handleChange({email: e.target.value})} />
                </div>
                {employeeDetails.password && <div className='form-group'>
                    <label htmlFor='password'>Password: </label>
                    <input className='form-control' id='password'  type='password' value={employeeDetails.password}onChange={(e) => handleChange({password: e.target.value})}  />
                </div>}
                <div className='form-group'>
                    <label htmlFor='mobileNumber'>Mobile Number: </label>
                    <input className='form-control' id='mobileNumber'  type='text' value={employeeDetails.mobileNumber} onChange={(e) => handleChange({mobileNumber: e.target.value})}  />
                </div>
                <div className='form-group'>
                    <label htmlFor='dob'>D.O.B: </label>
                    <input className='form-control' id='dob'  type='text' value={employeeDetails.dob} onChange={(e) => handleChange({dob: e.target.value})}  />
                </div>
                <div className='form-group'>
                    <label htmlFor='designation'>Designation: </label>
                    <input className='form-control' id='designation'  type='text' value={employeeDetails.designation} onChange={(e) => handleChange({designation: e.target.value})}  />
                </div>
                <div className='form-group'>
                    <label htmlFor='bloodGroup'>BloodGroup: </label>
                    <input className='form-control' id='bloodGroup'  type='text' value={employeeDetails.bloodGroup} onChange={(e) => handleChange({bloodGroup: e.target.value})}  />
                </div>
                <div className='form-group'>
                    <label>
                        <input id='name'  type='checkbox' value={employeeDetails.role} checked={employeeDetails.role === 1} onChange={e => employeeDetails.role === 1 ? handleChange({role: 2}) : handleChange({role: 1})}  /> {'Register as admin'}
                    </label>
                </div>

                <div className='form-group'>
                    <input className='btn btn-primary' type="submit" value="Update Employee" />
                </div>
            </form>
        </div>
    )
}

export default UpdateEmployee;
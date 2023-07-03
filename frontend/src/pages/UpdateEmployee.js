
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const fetchEmployee = async (employeeID) => {
    const { data } = await axios.get(`/api/employees/${employeeID}`);
    return data;
}


function UpdateEmployee() {

    const initialState = {
        name: "",
        email: "",
        address: "",
        phoneNo: "",
    };

    let navigate = useNavigate();
    const { id } = useParams("");



    const [employee, getEmployee] = useState(initialState);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [phoneNo, setPhoneNo] = useState();

    useEffect(() => {
        fetchEmployee(id).then((employee) => {
            getEmployee(employee)
            setName(employee.name)
            setEmail(employee.email)
            setAddress(employee.address)
            setPhoneNo(employee.phoneNo)
        })
            .catch((er) => console.log(er))
    }, [id])




    const updateEmployee = (e) => {
        // e.preventDefault();
        axios.put("/api/employees/update/" + id, { name, email, address, phoneNo })
            .then(data => {
                // console.log(data)
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className='insert-record'>
                <h3> Update Employee Records</h3>
                <input type='text' placeholder='Enter Name..' name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type='email' placeholder='Enter Email..' name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type='address' placeholder='Enter Address..' name="address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                <input type='phoneNo' placeholder='Enter Phone no..' name="phoneNo" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}></input>
                <Button onClick={() => updateEmployee()}>Update Record</Button>
            </div>
        </>
    )
}

export default UpdateEmployee;




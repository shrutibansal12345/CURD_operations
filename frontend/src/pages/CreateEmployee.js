

import { useState } from 'react';
import { Form , Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    email: '',
    address: '',
    phoneNo: ''
}




const CreateEmployee = () => {
    const createEmployee = async (employee) => {
       return await axios.post("/api/employees/create", employee);
     }


    const [employee, setEmployee] = useState(initialValue);
    const { name, email, address, phoneNo } = employee;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const addEmployeeDetails = async () => {
        await createEmployee(employee);
        navigate('/');
    }

    return (

        <>
            <Container>
                <h3>Create Employee</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => onValueChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            type="text"
                            value={email}
                            onChange={(e) => onValueChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            name="address"
                            type="text"
                            value={address}
                            onChange={(e) => onValueChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoneNo">
                        <Form.Label>PhoneNo</Form.Label>
                        <Form.Control
                            name="phoneNo"
                            type="text"
                            value={phoneNo}
                            onChange={(e) => onValueChange(e)}
                        />
                    </Form.Group>

                    <Button variant="primary" onClick={() => addEmployeeDetails()}>Create Employee</Button>
                </Form>
            </Container>
        </>
    )
}

export default CreateEmployee;





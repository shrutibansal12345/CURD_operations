import './EmployeeInfoTable.css';
import { Row, Col, Table, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { useState, useEffect } from "react";
const EmployeInfoTable = () => {

  const fetchEmployees = async () => {
    const {data} = await axios.get("/api/employees")
    return data
}
  const deleteEmployee = async (employeeId) => {
    const { data } = await axios.delete(`/api/employees/delete/${employeeId}`);
    return data
  }
  
  const [employees, setEmployee] = useState([]);

  const [employeeDeleted, setEmployeeDeleted] = useState(false);
  
  const deleteHandler = async (employeeId) => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteEmployee(employeeId);
      if (data === 'Employee deleted Successfully') {
        setEmployeeDeleted(!employeeDeleted)
      }
    }
  };



  useEffect(() => {
    fetchEmployees().then((data) => setEmployee(data))
  }, [employeeDeleted]);

  return (

    <>

      <Row className='m-5'>
        <Col md={12}>
          <div className='flex space'>
            <h2 className='color'>Manage Employees</h2>
            <Link to="/create" className='btn btn-info'> Add Employee </Link>
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th><input type="checkbox"></input></th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(
                (employee, idx) => (
                  <tr>
                    <td><input type="checkbox"></input></td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.address}</td>
                    <td>{employee.phoneNo}</td>
                    <td>
                      <Button variant="danger" className="btn-sm"
                      onClick={() => deleteHandler(employee._id)}
                      >
                        <i className="bi bi-trash3"></i>
                      </Button>
                      <LinkContainer to={`/update/${employee._id}`}>
                      <Button className="btn-sm">
                        <i className="bi bi-pencil"></i>
                      </Button>
                      </LinkContainer>
                    </td>
                  </tr>
                )
              )}

              

            </tbody>
          </Table>
        </Col>
      </Row>


    </>
  );
}

export default EmployeInfoTable;

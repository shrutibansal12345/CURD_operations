const e = require("express");
const Employee = require("../models/employeeModel")

const getEmployees = async (req, res) => {
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}

// Get a user by id
const getEmployeeById = async (request, response) => {
    try{
        const employee = await Employee.findById(request.params.id);
        response.status(200).json(employee);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

//Create Employee
const createEmployee = async (req, res) => {
    try{
        const {name, email,address,phoneNo} = req.body
        if(!(name && email && address && phoneNo)){
            return res.status(400).send("All inputs are required")
        }


        const employeeExists =  await Employee.findOne({email})
        if(employeeExists){
            return res.status(400).json({error: "Employee exists"})
        }
            const employee = await Employee.create({
                name,
                email:email.toLowerCase() ,
                address,
                phoneNo,
            });
            res.status(201).send(employee)
        

    } catch (error){
        res.status(404).json({ message: error.message }) 
    }
}


//update Employee
const updateEmployee = async (req, res, next) => {
    try {
       const employee = await Employee.findById(req.params.id).orFail(); 

        employee.name = req.body.name || employee.name;
        employee.email = req.body.email || employee.email;
        employee.address = req.body.address || employee.address;
        employee.phoneNo = req.body.phoneNo || employee.phoneNo;
        

        await employee.save();

        res.send("employee updated");

    } catch (err) {
       next(err); 
    }
}



//Delete employee
const deleteEmployee = async (req, res) => {
    try {
        await Employee.deleteOne({_id: req.params.id});
        res.status(201).json("Employee deleted Successfully");
    } catch (err) {
        res.status(409).json({ message: err.message}); 
    }
}


module.exports = {getEmployees , getEmployeeById, createEmployee, deleteEmployee, updateEmployee}
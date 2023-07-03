const express = require("express")

const router = express.Router()
const {createEmployee, getEmployees, deleteEmployee, updateEmployee, getEmployeeById} = require("../controllers/employeeController")

router.get('/', getEmployees);
router.get("/:id", getEmployeeById);
router.post("/create", createEmployee);
router.delete("/delete/:id", deleteEmployee);
router.put("/update/:id", updateEmployee);


module.exports = router

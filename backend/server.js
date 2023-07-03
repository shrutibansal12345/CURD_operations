const express = require('express')
const bodyParser = require ('body-parser') 
const app = express()

app.use(express.json());

const PORT = process.env.PORT || 5000

app.get("/", (req,res)=>{
    res.send({ message: "API running..." });
})

// mongodb connection
const connectDB = require("./config/db");
connectDB();

const employeeRoute = require("./routes/employeeRoutes")

app.use("/api/employees", employeeRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
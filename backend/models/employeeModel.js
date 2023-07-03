const mongoose = require("mongoose")
const employeeScheme = mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique: true,
    },
    address:{
        type:String,
        require:true,
    },
    phoneNo : {
        type: String,
    },

});

module.exports = mongoose.model("Employee",employeeScheme);
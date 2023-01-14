//defining schema and creating model in database
const mongoose =require("mongoose")
const validator = require("validator")
//creating schema
const employeeSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
        minlength : 3
    },
    email :{
        type : String,
        require : true,
        unique :[true, "email address already exists"],
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error("Email address is not valid")
            } 
        }
    },
    phone :{
        type :Number,
        minlength :10,
        require: true,
        unique : true,

    },
    address: {
        type : String,
        require : true
    }
})
//creating model
const Employee =new mongoose.model('Employee' ,employeeSchema)
module.exports =Employee
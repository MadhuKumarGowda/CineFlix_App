const mongoose = require('mongoose');
const validators = require("validator")

const userSchema = new mongoose.Schema({
    name:{
        type:String, 
        required : [true, 'Please enter your name']       
    },
    email:{
        type: String,
        required: [true, " Email is mandatory"],
        unique:true,
        lowercase: true,
        validate: [validator.isEmail, "Please enter valid email address"]
    },
    password:{
        type: String,
        required: [true, "Password is madatory"],
        minlength: 8
    },
    confirmPassword:{
        type: String,
        required: [true, "Password is madatory"],
    }

})

const user = mongoose.model("User", userSchema);
module.exports = user;
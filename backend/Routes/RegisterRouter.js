const express = require('express');
const Router = express.Router();
const db = require("../config/db.js");
const Register = require("../models/RegisterSchema.js");
const ValidationSchema = require("../Middlewares/Validation.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const jwtSecret = "records";

Router.use(cors());
Router.use(express.json());
Router.use(express.urlencoded({extended: true}));

const ValidationData = (req,res,next)=>{
    const {error} = ValidationSchema.validate(req.body);
    if(error){
        return res.status(400).json({status: "error", message: error.details[0].message});
    }
    next();
}
Router.post("/register",ValidationData,async(req,res)=>{
    const {fname, lname, email, password, role} = req.body;
    const salt = await bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(req.body.password, salt);


    const newRegister = new Register({ 
        fname:fname,
         lname:lname,
         email:email,
         password: hashPassword, 
         role: role
     });
    const result = await newRegister.save();
    console.log(result);
    res.json({status: "success", message: "User registered successfully", newRegister});
})

Router.post("/login",async(req,res)=>{
    const email = req.body.email;
  
    const UserData = await Register.findOne({email});
    if(!UserData && !req.body.password){
        return res.json({status: "error", message: "Please enter email and password"});
    }
    if(!UserData){
        return res.json({status:"error", message:"User not found"});
    }

    const pwdCompare = await bcrypt.compare(req.body.password, UserData.password);
    if(!pwdCompare){
        return res.json({status: "error", message: "Invalid password"});
    }
    const data ={
        user:{
            id:UserData._id
        }
    }
    const authToken = jwt.sign(data, jwtSecret);
    res.json({status: "success", message: "User logged in successfully", authToken, UserData});
})


module.exports = Router;
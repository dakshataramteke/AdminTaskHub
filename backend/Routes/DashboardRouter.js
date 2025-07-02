const express = require('express');
const Router = express.Router();
const db = require("../config/db.js");
const Employee = require("../models/EmployeeSchema.js");
const {EmployeeValidationSchema} = require("../Middlewares/Validation.js");
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = "records";
Router.use(cors());
Router.use(express.json());
Router.use(express.urlencoded({extended: true}));

const ValidationData = (req,res,next)=>{
    const {error} = EmployeeValidationSchema.validate(req.body);
    if(error){
        return res.status(400).json({status: "error", message: error.details[0].message});
    }
    next();
} 

Router.post("/addEmployee",ValidationData,async(req,res)=>{
    const {fname, lname, email, password, role, position} = req.body;
    const salt = await bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(req.body.password, salt);


    const newRegister = new Employee({ 
        fname:fname,
         lname:lname,
         email:email,
         password: hashPassword, 
         role: role,
         position:position
     });
    const result = await newRegister.save();
    console.log(result);
    res.json({status: "success", message: "User registered successfully", newRegister});
})

Router.get("/allemployee",async(req,res)=>{
    const allemployee =await Employee.find({});
    res.send(allemployee);

})

  Router.get("/editemployee/:id", async (req, res) => {
      const id = req.params.id;
      try {
          const UserEmployee = await Employee.findById(id);
          if (!UserEmployee) {
              return res.status(404).json({ status: "error", message: "Employee not found" });
          }
          res.json({ status: "success", UserEmployee });
      } catch (error) {
          res.status(500).json({ status: "error", message: error.message });
      }
  });
  
 
Router.put("/editemployee/:id", async(req,res)=>{
  let { id } = req.params;
    let {fname, lname,role,position} = req.body;
    let Updatedemployee = await Employee.findByIdAndUpdate(id, {fname, lname, role, position}, {runValidators:true, new:true})
    res.json({status:"success", Updatedemployee});
})


Router.delete("/deleteemployee/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if (!deletedEmployee) {
            return res.status(404).json({ status: "error", message: "Employee not found" });
        }
        res.json({ status: "success", message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

module.exports = Router;
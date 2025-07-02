const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  fname:{
    type: String,
    required: true
  } ,
  lname:{
    type:String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true
  },
  role:{
    type: String,
    default: 'employee'
  },
  position:{
    type:String,
    // enum:["Data Analyst", "Frontend Developer", "Backend Developer", "ML Engineer", "AL Engineer"]
  }
});
const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
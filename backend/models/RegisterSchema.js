const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
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
    enum: ['admin', 'employee'],
    // default: 'user'
  }
});
const Register = mongoose.model('Register', RegisterSchema);
module.exports = Register;
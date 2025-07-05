const { required } = require('joi');
const mongoose = require('mongoose');

const ProjectAssignSchema = new mongoose.Schema({
  fname:{
    type:String,
    required:true
  },
  lname:{
    type:String,
    required:true
  },
  procode:{
    type:String,
    required:true
  },
  addpro:{
    type: String,
    required: true
  },
  customer:{
    type:String,
    required:true
  },
  sdate:{
    type: Date ,
    required:true
  },
  edate:{
    type:Date,
    required:true
  },
  status:{
    type:String,
  },
  assignedDate:{
    type: Date
  }
})

const ProjectAssign = mongoose.model('ProjectAssign', ProjectAssignSchema);
module.exports = ProjectAssign;
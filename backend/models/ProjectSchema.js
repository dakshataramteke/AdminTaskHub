const { required } = require('joi');
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
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
    // required:true
  },
  assignedDate:{
    type: Date
  }
})

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
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
  } 
})

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
const express = require('express');
const Router = express.Router();
const db = require("../config/db.js");
const Project = require("../models/ProjectSchema.js");
const cors = require('cors');
const ProjectAssign = require("../models/AssignTask.js");

Router.use(cors());
Router.use(express.json());
Router.use(express.urlencoded({extended: true}));

Router.post("/addproject",async(req,res)=>{
   
    const {procode,addpro,customer,sdate,edate,status} = req.body;

    console.log("Add Project Data",req.body);
    const addProject = new Project({ 
       procode,addpro,customer, sdate, edate, status
       
     });
    const result = await addProject.save();
    console.log(result);
    res.json({status: "success", message: "Project added successfully", addProject});
})

Router.get("/addproject",async(req,res)=>{
    const result = await Project.find({});
    console.log(result);
    res.json({status:"success",result});
})
Router.get('/addproject/:id', async (req, res) => {
    const projectId = req.params.id;
    try {
        const result = await Project.findById(projectId);

        if (!result) {
            return res.status(404).json({ status: "error", message: "Project not found" });
        }
        console.log(result);
        res.json({ status: "success", result });
    } catch (error) {
        console.error("Error fetching project:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});

Router.post("/assigntask",async(req,res)=>{
    console.log("Assign Task is ",req.body);
    const {fname,lname,procode,addpro,customer,sdate,edate,status,assignedDate} = req.body;
    const assignProject = new ProjectAssign({ 
      fname,lname,procode,addpro,customer,sdate,edate,status,assignedDate
     });
     await assignProject.save();
     res.json({status: "success", message: "Project assign successfully", assignProject});
})

Router.get("/assigntask",async(req,res)=>{
    const result = await ProjectAssign.find({});
    console.log(result);
    res.json({status:"success",result})
})

module.exports = Router;
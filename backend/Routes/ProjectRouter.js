const express = require('express');
const Router = express.Router();
const db = require("../config/db.js");
const Project = require("../models/ProjectSchema.js");
const cors = require('cors');

Router.use(cors());
Router.use(express.json());
Router.use(express.urlencoded({extended: true}));

Router.post("/addproject",async(req,res)=>{
    const {procode,addpro,customer} = req.body;
    console.log(req.body);
    const addProject = new Project({ 
       procode,addpro,customer, sdate, edate
       
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

module.exports = Router;
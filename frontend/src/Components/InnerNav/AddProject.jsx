import React, { useState} from "react";
import axios from 'axios';
const AddProject = () => {
    const [addproject, setaddproject] = useState({
        procode:"",
        addpro:"",
        customer:"",
        sdate:"",
        edate:""
    })
    const changeValue = (e)=>{
        setaddproject({...addproject, [e.target.name]: e.target.value});
    }
 
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/project/addproject",addproject);
        setaddproject(response.data)
        alert("Project Added Successfully");
        setaddproject({
              procode:"",
        addpro:"",
        customer:""
        })
      
    }
  return (
    <>
      <section>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 col-md-8 mt-3">
                <label className="form-label">Project Code</label>
                  <input type="text" name="procode" id="procode" value={addproject.procode} onChange={changeValue} placeholder=" Add a Project Code" className="form-control" />
                  </div>
                  <div className="col-12 col-md-8 mt-3">
                  <label className="form-label">Add Project</label>
                   <input type="text" name="addpro" id="add" value={addproject.addpro} onChange={changeValue} placeholder=" Add a Project " className="form-control" />
                   </div>
                   <div className="col-12 col-md-8 mt-3">
                   <label className="form-label">Customer</label>
                    <input type="text" name="customer" id="customer" value={addproject.customer} onChange={changeValue} placeholder=" Add a Customer " className="form-control" />
                  <div className="col-12 col-md-8 mt-3">
                  <label className="form-label">Start Date</label>
                   <input type="text" name="sdate" id="start Date" value={addproject.sdate} onChange={changeValue} placeholder=" Add a Start Time " className="form-control" />
                   </div>
                   <div className="col-12 col-md-8 mt-3">
                  <label className="form-label">End Date</label>
                   <input type="text" name="edate" id="End Date" value={addproject.edate} onChange={changeValue} placeholder=" Add a End Date" className="form-control" />
                   </div>
                  <button type="submit" className="btn btn-success mt-3">Add</button>
                </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProject;

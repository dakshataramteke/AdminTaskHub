import { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Project from "./Project";
import TaskManager from "./TaskManager"; 

const Assign = () => {
  const { id } = useParams();
  const [assign, setAssign] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [assignmentData, setAssignmentData] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:5000/dashboard/editemployee/${id}`
    );
    setAssign(response.data.UserEmployee);
  };

  useEffect(() => {
    fetchData();
  }, []);

   const taskAssign = () => {
    if (selectedProject) {
      const assignmentData = {
        employeeId: id,
        employeefname : assign.fname,
        employeelname : assign.lname,
        projectCode: selectedProject.procode,
        projectName: selectedProject.addpro,
        startDate: selectedProject.sdate,
        endDate: selectedProject.ldate,
        customerName: selectedProject.customer,
        
      };
       const existingAssignments = JSON.parse(localStorage.getItem("assignments")) || [];
         existingAssignments.push(assignmentData);
        localStorage.setItem("assignments", JSON.stringify(existingAssignments));


      console.log("Task Assigned with data:", assignmentData);
      alert("Task Successfully Assigned");
       setAssignmentData(assignmentData);
    } else {
      alert("Please select a project before assigning.");
    }
  };
  const handleProjectSelect = (project) => {
    setSelectedProject(project); 
  };


  return (
    <>
      <section className="assign_task">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-light bg-light navbar-negative-z">
                <div className="container-fluid">
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search by project Name"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
          <div className="row d-flex">
            <div className="my-3">
              {assign ? (
                <div className="col-12">
                  <span className="m-0 fs-5">Employee Name :</span>
                  <span className="fs-5"> {assign.fname}</span>
                  <span className="fs-5"> {assign.lname}</span>
                </div>
              ) : (
                <div>Loading...</div>
              )}
            </div>

            <div className="col-12 col-md-6">
              <Project onProjectSelect={handleProjectSelect} />
            </div>

            <div className="col-12 col-md-6 line_Data py-3" >
              {selectedProject ? (
                <>
                <div className="table-responsive">
                <h4 className="text-center mb-3">Project Details</h4>
               <table className="table">
               <tbody>
                <tr>
                    <td>Project Code: </td>
                    <td>{selectedProject.procode}</td>
                </tr>
                  <tr>
                <td>Project Name:</td>
                <td>{selectedProject.addpro}</td>
              </tr>
               <tr>
              <td>Start Date:</td>
              <td>{selectedProject.sdate}</td>

               </tr>
                <tr>
                <td>End Date:</td>
                <td>{selectedProject.ldate}</td>
                </tr>
               <tr>
                <td>Customer Name:</td>
                <td>{selectedProject.customer}</td>
               </tr>
               </tbody>
               </table>
               </div>
                 <div className="d-flex justify-content-center">
                     <button className="btn btn-primary mt-3" onClick={taskAssign}>Assign</button>
                 </div>
                   
                </>
              ) : (
                <div>No Projects added</div>
              )}
            </div>
          </div>
          {/* {assignmentData && <TaskManager assignmentData={assignmentData} />}  */}
          {<TaskManager assignmentData={assignmentData} />} 

        </div>
      </section>
    </>
  );
};

export default Assign;


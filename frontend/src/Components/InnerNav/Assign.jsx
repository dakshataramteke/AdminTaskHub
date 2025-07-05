import { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import AllProject from "./AllProject";

const Assign = () => {
  const { id } = useParams();
  const [assign, setAssign] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [assignmentData, setAssignmentData] = useState(null);

  const fetchData = async () => {
   try {
    const response = await axios.get(
      `http://localhost:5000/dashboard/editemployee/${id}`
    );
    console.log(response.data); 
    setAssign(response.data.UserEmployee);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
  
  useEffect(() => {
    fetchData();
  }, []);

   const taskAssign = async() => {
    if (selectedProject) {
       const assignmentData = {
        id: id,
        fname : assign.fname,
        lname : assign.lname,
        procode: selectedProject.procode,
        addpro: selectedProject.addpro,
        sdate: selectedProject.sdate,
        edate: selectedProject.edate,
        customer: selectedProject.customer,
        status: selectedProject.status,
        assignedDate: new Date().toLocaleString(),
        
      };

       try {
        console.log("Assignment Data", assignmentData)
      const response = await axios.post('http://localhost:5000/project/assigntask', assignmentData);
      console.log("Response from server:", response.data);
      alert("Task Successfully Assigned");
      setAssignmentData(assignmentData);
    } catch (error) {
      console.error("Error assigning task:", error);
      alert("Failed to assign task. Please try again.");
    }
  }
  else {
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
              <AllProject onProjectSelect={handleProjectSelect} />
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
              <td>{selectedProject.sdate ? new Date(selectedProject.sdate).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) : 'N/A'}</td>

               </tr>
                <tr>
                <td>End Date:</td>
              <td>{selectedProject.edate ? new Date(selectedProject.edate).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) : 'N/A'}</td>
                </tr>
               <tr>
                <td>Customer Name:</td>
                <td>{selectedProject.customer}</td>
               </tr>
               <tr>
                <td>Status</td>
                <td>{selectedProject.status}</td>
               </tr>
               <tr>
                <td>Assigned Date :</td>
                <td>{assignmentData ? assignmentData.assignedDate : 'Not assigned yet'}</td>
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
          {/* {<TaskManager assignmentData={assignmentData} />}  */}

        </div>
      </section>
    </>
  );
};

export default Assign;


import { useEffect, useState } from "react";
import axios from "axios";
const TaskManager = () => {
  const [assignments, setAssignments] = useState([]);

  const AssignProjectData = async () => {
    const response = await axios.get(
      "http://localhost:5000/project/assigntask"
    );
    console.log("Task Manager Data", response.data);
    setAssignments(response.data.result);
  };
  useEffect(() => {
    AssignProjectData();
  }, []);

  if (assignments.length === 0) {
    return <div>No assignment data available in Task Manager.</div>;
  }

  return (
    <>
      <div className="container">
        <h4 className="my-4 text-center">Assigned Task Details</h4>

        <div className="table-responsive">
          <table className="table " style={{ border: "1px solid gray" }}>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Project Code</th>
                <th>Project Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Customer Name</th>
                <th>Project Status</th>
                <th>Assigned Date</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment, index) => (
                <>
                  <tr key={index}>
                    <td>
                      {assignment.fname} {assignment.lname}
                    </td>
                    <td> {assignment.procode}</td>
                    <td>{assignment.addpro}</td>
                    <td>
                      {assignment.sdate
                        ? new Date(assignment.sdate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            }
                          )
                        : "N/A"}
                    </td>
                    <td>
                      {assignment.edate
                        ? new Date(assignment.edate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            }
                          )
                        : "N/A"}
                    </td>
                    <td> {assignment.customer}</td>
                    <td>{assignment.status}</td>
                    <td>
                      {assignment.assignedDate
                        ? new Date(assignment.assignedDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            }
                          )
                        : "N/A"}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TaskManager;

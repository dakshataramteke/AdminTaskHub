

import React, { useEffect, useState } from 'react';

const TaskManager = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const existingAssignments = JSON.parse(localStorage.getItem("assignments")) || [];
    setAssignments(existingAssignments);
  }, []);

  if (assignments.length === 0) {
    return <div>No assignment data available.</div>;
  }

  return (
    <>
      
      <div className='container'>
      <h4 className='my-4 text-center'>Assigned Task Details</h4>

          <div class="table-responsive">
  <table class="table">
  <thead>
   <tr>
    <th>Employee Name</th>
    <th>Project Code</th>
    <th>Project Name</th>
    <th>Start Date</th>
    <th>End Date</th>
    <th>Customer Name</th>
   </tr>
   </thead>
  <tbody>
 {assignments.map((assignment, index) => (
     <>
          {/* <div > */}
    <tr key={index}>
        <td>{assignment.employeefname} {assignment.employeelname}</td>
        <td> {assignment.projectCode}</td>
        <td>{assignment.projectName}</td>
        <td>{assignment.startDate}</td>
        <td>{assignment.endDate}</td>
          <td> {assignment.customerName}</td>
        
        
    </tr>
          {/* </div> */}
          </> 
          ))}
          </tbody>
  
  </table>
</div>
            
          </div>
        
      {/* </div> */}
    </>
  );
};

export default TaskManager;

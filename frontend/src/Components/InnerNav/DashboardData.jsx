import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const DashboardData = () => {
  const [showProject, setShowProject] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/project/addproject");
      setShowProject(response.data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Count projects by status
  const projectStatusCounts = showProject.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {});

  const pieData = [
    { name: 'Pending', value: projectStatusCounts.pending || 0 },
    { name: 'In Process', value: projectStatusCounts.process || 0 },
    { name: 'Completed', value: projectStatusCounts.completed || 0 },
  ];

  const COLORS = ['#FF8042', '#FFBB28', '#00C49F'];

  const statusColors = {
    pending: '#FF8042',
    process: '#FFBB28',
    completed: '#00C49F'
  };

  return (
    <>
 <section>
  <div className="dashboard_bar" >
      <div className="dashboard_data">
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
          Project Status
        </h3>
        <ResponsiveContainer className="Pie_chart" height={400}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => 
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
       
      </div>

       <div style={{
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
          Project List with Status
        </h3>
        <div className="d-flex ">
        <div className="process">
        <h5>Process</h5>
        {showProject
             .filter((data) => data.status === "process")
              .map((data) => (
                <div key={data.id} style={{
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: '#f8f9fa',
              borderLeft: `4px solid ${statusColors[data.status] || '#ddd'}`,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              margin: "4px 0"
            }}>
                <div key={data.id}>
                  <p>{data.addpro}</p>
                 </div>
                 </div>
               ))}
               </div>
                 <div className="pending">
                 <h5>Pending</h5>
        {showProject
             .filter((data) => data.status === "pending")
              .map((data) => (
                <div key={data.id} style={{
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: '#f8f9fa',
              borderLeft: `4px solid ${statusColors[data.status] || '#ddd'}`,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
               margin: "4px 0"
            }}>
                <div key={data.id}>
                  <p>{data.addpro}</p>
                 </div>
                 </div>
               ))}
               </div>
                 <div className="completed">
                 <h5>Completed</h5>
        {showProject
             .filter((data) => data.status === "completed")
              .map((data) => (
                <div key={data.id} style={{
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: '#f8f9fa',
              borderLeft: `4px solid ${statusColors[data.status] || '#ddd'}`,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
               margin: "4px 0"
            }}>
                <div key={data.id}>
                  <p>{data.addpro}</p>
                  {/* <p>{data.edate}</p> */}
                 </div>
                 </div>
               ))}
               </div>
              
        </div>
      </div>
    </div>
    </section>
    </>
   
  
  );
};

export default DashboardData;


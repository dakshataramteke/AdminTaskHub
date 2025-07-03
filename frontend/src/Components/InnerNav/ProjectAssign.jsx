// import React from 'react'
// import { useState, useEffect } from 'react';
// import axios from "axios";

// const ProjectAssign = () => {
//     const [project, setProject] = useState([]);
//     const fetchData = async()=>{
//     try {
//             const response = await axios.get("http://localhost:5000/project/addproject");
//             console.log(response.data);
//             setProject(response.data.result);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     }
//     useEffect(() => {
//     fetchData();
//   },[]);
    
//   return (
//     <>
//      <div className="table-responsive">
//   <table className="table">
//     <thead>
//     <tr>
    
//       <th scope="col">Project Code</th>
//       <th scope="col">Project Name</th>
//       <th scope="col">Customer Name</th>
//     </tr>
//   </thead>
//   <tbody>
    
//     {
//         project.map((data)=>(
//             <>
//             <tr>
//           <td>  {data.procode}</td>
//            <td> {data.addpro}</td>
//            <td> {data.customer}</td>
//             </tr>
//            </>
//         ))
//     }
   
   
//   </tbody>
//   </table>
// </div>
//     </>
//   )
// }

// export default ProjectAssign;


// import { useState, useEffect } from 'react';
// import axios from "axios";

// const ProjectAssign = () => {

//     const [selectedProject, setSelectedProject] = useState([]);

//     const fetchProjectById = async (id) => {
//         try {
//             const response = await axios.get(`http://localhost:5000/project/addproject/${id}`);
//             console.log(response.data);
//             console.log(response.data.result);
//            setSelectedProject(response.data.result);
//         } catch (error) {
//             console.error("Error fetching project by ID:", error);
//         }
//     };

//     useEffect(() => {
//         fetchProjectById();
//     }, []);

//     return (
//         <>
//             <div className="table-responsive">
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">Project Code</th>
//                             <th scope="col">Project Name</th>
//                             <th scope="col">Customer Name</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {selectedProject.map((data) => (
//                             <tr  >
//                             <td>{data._id}</td>
//                                 <td>{data.procode}</td>
//                                 <td>{data.addpro}</td>
//                                 <td>{data.customer}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//         </>
//     );
// }

// export default ProjectAssign;


import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const ProjectAssign = () => {
    const { id: projectId } = useParams();  // Get projectId from URL parameters
    const [selectedProject, setSelectedProject] = useState(null); // Change to null for a single project

    const fetchProjectById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/project/addproject/${id}`);
            console.log("Response Data", response.data);
            console.log("Result Data", response.data.result);
            setSelectedProject(response.data.result); // Set the single project object
        } catch (error) {
            console.error("Error fetching project by ID:", error);
        }
    };

    useEffect(() => {
        if (projectId) {  
            fetchProjectById(projectId);
        } else {
            console.error("Project ID is undefined");
        }
    }, [projectId]);  

    return (
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Project Code</th>
                            <th scope="col">Project Name</th>
                            <th scope="col">Customer Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedProject ? ( // Check if selectedProject is not null
                            <tr key={selectedProject._id}>
                                <td>{selectedProject.procode}</td>
                                <td>{selectedProject.addpro}</td>
                                <td>{selectedProject.customer}</td>
                            </tr>
                        ) : (
                            <tr>
                                <td colSpan="4">No projects found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ProjectAssign;


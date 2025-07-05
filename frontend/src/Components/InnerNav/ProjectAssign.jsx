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
            setSelectedProject(response.data.result); 
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
                              <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedProject ? ( 
                            <>
                            <tr key={selectedProject._id}>
                                <td>{selectedProject.procode}</td>
                                <td>{selectedProject.addpro}</td>
                                <td>{selectedProject.customer}</td>
                                <td>{selectedProject.sdate}</td>
                                <td>{selectedProject.edate}</td>
                            </tr>
                            </>
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


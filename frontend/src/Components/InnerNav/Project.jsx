import AddProject from './AddProject';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Project = () => {

    const [addproject, setaddproject] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/project/addproject");
            console.log(response.data);
            setaddproject(response.data.result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <AddProject />
            <p>Project Name</p>
            {
                addproject.map((data) => (
                    <div key={data._id}> 
                 
                        <Link to={`/dashboard/project/pro/${data._id}`}>{data.addpro}</Link>
                    </div>
                ))
            }
        </>
    );
}

export default Project;

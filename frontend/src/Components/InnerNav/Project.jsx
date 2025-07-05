// import AddProject from './AddProject';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

const Project = ({ onProjectSelect }) => {
  const [addproject, setaddproject] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/project/addproject"
      );
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
      {/* <AddProject /> */}
      <section className="project">
        <div className="line_Data p-3">
          <h4 className="mb-3">Project Name</h4>
          {addproject.map((data) => (
            <div key={data._id}>
              <Link to={`/dashboard/project/pro/${data._id}`}>
                {data.addpro}
              </Link>
              <button
                className="btn btn-success m-2"
                onClick={() => onProjectSelect(data)}
              >
                add
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

const AllProject = ({ onProjectSelect }) => {
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
          <section className="project">
        <div className="line_Data p-3">
          <h4 className="mb-3 text-center">Project Name</h4>
          {addproject.map((data) => (
            <div key={data._id} className="d-flex align-items-center justify-content-between">
              <p>{data.addpro}</p>
              <button
                className="btn btn-success my-1"
                onClick={() => onProjectSelect(data)}
              >
                add
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default AllProject

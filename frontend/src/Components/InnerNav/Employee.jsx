import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Employee = () => {
  const [allemployee, setAllemployee] = useState([]);
  const allEmployeeData = async () => {
    const response = await axios.get(
      "http://localhost:5000/dashboard/allEmployee"
    );
    // console.log(response.data);
    setAllemployee(response.data);
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/dashboard/deleteemployee/${id}`
        );
        console.log(response.data);
        alert("Employee deleted successfully!");
      } catch (error) {
        console.error("Error deleting employee:", error);
        alert("Error deleting employee.");
      }
    }
  };

  useEffect(() => {
    allEmployeeData();
  });
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-6">
              <Link to="/dashboard/add" className="btn btn-success mt-4">
                Add
              </Link>
            </div>
            <div className="mt-4">
              <h2>All Employees</h2>
              <div className="mt-2">
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Actions</th> 
                      </tr>
                    </thead>
                    <tbody>
                      {allemployee.map((data) => (
                        <tr key={data._id}>
                          <td>{data.fname}</td>
                          <td>{data.lname}</td>
                          <td>{data.position}</td>
                          <td className="d-flex">
                            <Link
                              to={`/dashboard/edit/${data._id}`}
                              className="btn btn-secondary ms-3"
                            >
                              Edit
                            </Link>
                            <button
                              className="ms-2 btn btn-danger"
                              onClick={() => handleDelete(data._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Employee;

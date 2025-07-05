import  { useState } from "react";
import axios from "axios";
const AddProject = () => {
  const [addproject, setaddproject] = useState({
    procode: "",
    addpro: "",
    customer: "",
    sdate: "",
    edate: "",
    status: "",
  });
  const changeValue = (e) => {
    setaddproject({ ...addproject, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return date.toLocaleDateString("en-US", options).replace(/\//g, "-"); // Replace slashes with dashes
    };
    const formattedSdate = formatDate(addproject.sdate);
    const formattedEdate = formatDate(addproject.edate);

    const projectData = {
      ...addproject,
      sdate: formattedSdate,
      edate: formattedEdate,
    };
     
    const response = await axios.post(
      "http://localhost:5000/project/addproject",
      projectData
    );

    setaddproject(response.data);

    console.log(response.data)
    alert("Project Added Successfully");
    setaddproject({
      procode: "",
      addpro: "",
      customer: "",
      sdate: "",
      edate: "",
      status: "",
    });
  };
  return (
    <>
      <section>
        <div className="container">
          <form onSubmit={handleSubmit}>
           
            <div className="row py-3">
           <h3 className="text-center my-3">Add a Project </h3>
              <div className="col-12 col-md-8 mt-3 offset-md-2">
                <label className="form-label">Project Code</label>
                <input
                  type="text"
                  name="procode"
                  id="procode"
                  value={addproject.procode}
                  onChange={changeValue}
                  placeholder=" Add a Project Code"
                  className="form-control"
                />
              </div>
              <div className="col-12 col-md-8 mt-3 offset-md-2">
                <label className="form-label"> Project Name</label>
                <input
                  type="text"
                  name="addpro"
                  id="add"
                  value={addproject.addpro}
                  onChange={changeValue}
                  placeholder=" Add a Project "
                  className="form-control"
                />
              </div>
              <div className="col-12 col-md-8 mt-3 offset-md-2">
                <label className="form-label">Customer</label>
                <input
                  type="text"
                  name="customer"
                  id="customer"
                  value={addproject.customer}
                  onChange={changeValue}
                  placeholder=" Add a Customer "
                  className="form-control"
                />
                <div className="row">
                <div className="col-12 col-md-6 mt-3">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    name="sdate"
                    id="start Date"
                    value={addproject.sdate}
                    onChange={changeValue}
                    placeholder=" Add a Start Time "
                    className="form-control"
                  />
                </div>
                <div className="col-12 col-md-6 mt-3">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    name="edate"
                    id="End Date"
                    value={addproject.edate}
                    onChange={changeValue}
                    placeholder=" Add a End Date"
                    className="form-control"
                  />
                </div>
                 </div>
                <div className="col-12  mt-3 ">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="status"
                    value={addproject.status}
                    onChange={changeValue}
                  >
                    <option selected>Open this select menu</option>
                    <option value="process">process</option>
                    <option value="pending">pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="d-flex justify-content-center">
                   <button type="submit" className="btn btn-secondary mt-3">
                  Add
                </button>
                </div>
               
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProject;


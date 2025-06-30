import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "admin",
  });

  const changeData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
      console.log("Form is invalid");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/register",
          formData
        );
        console.log(response.data);
        setFormData(response.data);
        alert("Registration successful!");
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }

    e.currentTarget.classList.add("was-validated");
  };
  return (
    <>
      <section>
        <div className="container my-3">
          <h1 className="text-center">Register</h1>
          <hr />
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="row ">
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="fname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  aria-describedby="emailHelp"
                  name="fname"
                  value={formData.fname}
                  onChange={changeData}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter your First Name.
                </div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="lname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  aria-describedby="emailHelp"
                  name="lname"
                  value={formData.lname}
                  onChange={changeData}
                  required
                />
                <div className="invalid-feedback">Please Enter your Last Name.</div>
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="Email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  name="email"
                  aria-describedby="emailHelp"
                  value={formData.email}
                  onChange={changeData}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter your Email Address.
                </div>
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  name="password"
                  value={formData.password}
                  onChange={changeData}
                  required
                />
                <div className="invalid-feedback">Please Enter Password.</div>
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="type" className="mb-2">
                  Type of Role
                </label>
                <select
                  id="exampleSelect"
                  defaultValue="admin"
                  className="form-select mb-3"
                  name="role"
                  value={formData.role}
                  onChange={changeData}
                  required
                >
                  {/* <option selected>type</option> */}
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                </select>
                <div className="invalid-feedback">Please Enter a Role.</div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success mt-3 me-5">
                  Register
                </button>
                <Link to={"/login"} className="btn btn-primary mt-3">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

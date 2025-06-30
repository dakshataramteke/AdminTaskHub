import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [Login, setLogin] = useState({
    email:"",
    password: "",
  })
  const ChangeData = (e)=>{
    setLogin({...Login,[e.target.name]: e.target.value});
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (e.currentTarget.checkValidity() === false) {
    e.stopPropagation();
    console.log("Form is invalid");
  } else {
    try {
      const response = await axios.post("http://localhost:5000/api/login", Login);
      console.log(response.data); // Log the response data

      if (response.data.status === "success") {
        // Handle successful login
        console.log("Login successful:", response.data);
        // Optionally, you can store the token in localStorage or context
        navigate("/");
      } else {
        // Handle login failure
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
};

  return (
    <>
      <section>
        <div className="container mt-5">
          <div className="row">
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <h1 className="text-center">Login</h1>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={Login.email}
                  onChange={ChangeData}
                />
                   <div className="invalid-feedback">
                  Please Enter email Address.
                </div>
               
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={Login.password}
                   onChange={ChangeData}
                />
                   <div className="invalid-feedback">
                  Please Enter Password.
                </div>
              </div>

<div className="d-flex justify-content-center">
 <button type="submit" className="btn btn-primary">
                Login
              </button>
               <button type="submit" className="btn btn-success ms-3">
                Register
              </button>
</div>
             
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

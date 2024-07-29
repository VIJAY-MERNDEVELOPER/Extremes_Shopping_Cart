import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import "./register.css";

function Register() {
  return (
    <div
      className="container d-flex justify-content-center  my-5 "
      style={{ width: "100vw" }}
    >
      <div
        className="row justify-content-center align-items-center register-container"
        // style={{ margin: "0 0", width: "100%" }}
      >
        <div className=" col-sm-12 col-md-6 col-lg-6 w-50 form-container">
          <h4 className="mb-5 d-flex justify-content-center">
            New To Extremes
          </h4>
          <form action="submit">
            <div className="row my-3">
              <div className="col-6">
                <label htmlFor="firstName" className="form-label">
                  {" "}
                  First Name
                </label>
                <input type="text" id="firstName" className="form-control" />
              </div>
              <div className="col-6">
                {" "}
                <label htmlFor="lastName" className="form-label">
                  {" "}
                  Last Name
                </label>
                <input type="text" id="lastName" className="form-control" />
              </div>
            </div>

            <label htmlFor="inputEmail" className="form-label">
              Enter Email/Mobile number
              <span style={{ color: "white" }}> &#42;</span>
            </label>
            <input
              type="text"
              id="inputEmail"
              className="form-control"
              style={{ borderColor: "red" }}
            />

            <label htmlFor="inputPassword" className="form-label mt-3">
              Enter Password <span style={{ color: "white" }}> &#42;</span>
            </label>
            <input
              type="text"
              id="inputPassword"
              className="form-control"
              style={{ borderColor: "red  " }}
            />
            <div className="row justify-content-center ">
              <button type="submit" className="btn btn-success  my-4 w-25">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 ">
          <h4 className="d-flex justify-content-center">Sign In with Google</h4>{" "}
          <span
            style={{ color: "#34A853" }}
            className="d-flex justify-content-center "
            type="button"
          >
            <GoogleIcon sx={{ fontSize: 60 }} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;

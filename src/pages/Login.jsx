/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import "./Login.css";

function Login() {
  return (
    <div
      className="container d-flex justify-content-center  my-5"
      style={{
        width: "100vw",
      }}
    >
      <div className="row justify-content-center align-items-center login-wrapper">
        <div
          className=" col-sm-12 col-md-6 col-lg-6  form-container"
          style={{
            backgroundColor: "rgb(255,0,0)",

            height: "100%",
            color: "white",
          }}
        >
          <h4 className="mb-5 d-flex justify-content-center">Login</h4>
          <form action="submit">
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
                Submit
              </button>
              <div className="d-flex justify-content-between">
                <Link
                  to={"/forgetpassword"}
                  className="justify-content-center"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Forget Password?
                </Link>
                <Link
                  to={"/register"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register Now
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 ">
          <h4 className="d-flex justify-content-center">Login with Google</h4>{" "}
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

export default Login;

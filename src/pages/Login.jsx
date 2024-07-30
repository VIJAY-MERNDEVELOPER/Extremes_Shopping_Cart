/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import "./Login.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { Chip, Divider } from "@mui/material";

function Login() {
  const [passwordState, setPasswordState] = useState(false);

  const handlePasswordState = (e) => {
    e.preventDefault();
    passwordState ? setPasswordState(false) : setPasswordState(true);
  };

  return (
    <div
      className="container d-flex justify-content-center  my-5"
      style={{
        maxWidth: "100%",
      }}
    >
      <div className="row justify-content-center align-items-center login-wrapper">
        <div className=" col-sm-12 col-md-6 col-lg-6  login-form-container">
          <h4 className="mb-5 d-flex justify-content-center">LOGIN</h4>
          <form>
            {!passwordState && (
              <>
                <label htmlFor="inputEmail" className="form-label">
                  Enter Email/Mobile number
                  <span style={{ color: "red" }}> &#42;</span>
                </label>
                <input type="text" id="inputEmail" className="form-control" />
              </>
            )}
            {passwordState && (
              <>
                {" "}
                <label htmlFor="inputPassword" className="form-label ">
                  Enter Password <span style={{ color: "red" }}> &#42;</span>
                </label>
                <input
                  type="text"
                  id="inputPassword"
                  className="form-control"
                />
              </>
            )}

            <div className="row justify-content-center ">
              <button
                type="submit"
                className="btn btn-danger  my-4 w-50 text-center"
                style={{ fontWeight: 600, textAlign: "center" }}
                onClick={(e) => handlePasswordState(e)}
              >
                {!passwordState ? (
                  <>
                    <span style={{ marginRight: 10 }}>CONTINUE</span>
                    <span>
                      <ArrowRightAltIcon />
                    </span>
                  </>
                ) : (
                  "Login"
                )}
              </button>
              <div className="d-flex justify-content-between">
                <Link
                  to={"/forgetpassword"}
                  className="justify-content-center"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Forget Password?
                </Link>
                <Link
                  to={"/register"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Register Now
                </Link>
              </div>
            </div>
          </form>
          <Divider sx={{ padding: "30px 0" }}> Or</Divider>
          <div className="row justify-content-center align-items-center my-3">
            <button
              className="btn btn-primary d-flex justify-content-center align-items-center"
              style={{ width: "60%", fontWeight: 600 }}
            >
              <span style={{ backgroundColor: "white", margin: "0 15px" }}>
                {" "}
                <img src="/google_1.png" alt="google" style={{ padding: 2 }} />
              </span>{" "}
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

{
  /* <div className="col-sm-12 col-md-6 col-lg-6 ">
<h4 className="d-flex justify-content-center">Login with Google</h4>{" "}
<span
  style={{ color: "#34A853" }}
  className="d-flex justify-content-center "
  type="button"
>
  <GoogleIcon sx={{ fontSize: 60 }} />
</span>
</div> */
}

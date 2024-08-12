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
      className="container d-flex justify-content-center py-5"
      style={{ width: "100%" }}
    >
      <div className="row justify-content-center  login-wrapper">
        {" "}
        <h4 className="row justify-content-center "> Login</h4>
        <form className="row gap-4 mt-3 py-4">
          <div className="col-12">
            {!passwordState ? (
              <>
                <label htmlFor="inputEmail" className="form-label ">
                  Enter Email/Mobile number
                  <span style={{ color: "red" }}> &#42;</span>
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  style={{ borderRadius: 0, border: "2px solid rgb(255,0,0)" }}
                />
              </>
            ) : (
              <>
                {" "}
                <label htmlFor="inputPassword" className="form-label ">
                  Enter Password <span style={{ color: "red" }}> &#42;</span>
                </label>
                <input
                  type="text"
                  id="inputPassword"
                  className="form-control"
                  style={{ borderRadius: 0, border: "2px solid rgb(255,0,0)" }}
                />
              </>
            )}
          </div>
          <div className="col-12">
            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "rgb(255,0,0)",
                border: "none",
                padding: 5,
                color: "white",
                fontWeight: "500",
              }}
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
          </div>
          <div className="col-12 ">
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
          <div className="col-12">
            {" "}
            <Divider sx={{ padding: "30px 0" }}> Or</Divider>
          </div>

          <div className="col-12">
            <button
              style={{
                width: "100%",
                backgroundColor: " rgb(66, 133, 244)",
                border: "rgb(66,133,244)",
                color: "white",
                fontWeight: "500",
                padding: 5,
              }}
              className="d-flex  align-items-center "
            >
              <span className="register-google-btn">
                {" "}
                <img
                  src="/google-social-login.svg"
                  alt="google"
                  style={{
                    boxSizing: "border-box",
                    // contain: "layout",
                    float: "left",
                  }}
                  width={20}
                />
              </span>
              <span>Continue With Google</span>
            </button>
          </div>
        </form>
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

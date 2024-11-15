/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import "./Login.css";

import { Chip, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../app/features/userSFeatures/userService.js";
import { userState } from "../app/features/userSFeatures/userSlice.js";
import Cookies from "js-cookie";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialState);

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
  };
  const { user, status, message } = useSelector(userState);

  // const username = Cookies.get("username");
  // const cart = Cookies.get("cart");

  useEffect(() => {
    if (user.userId) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div
      className="container d-flex justify-content-center py-5"
      style={{ width: "100%" }}
    >
      <div className="row justify-content-center  login-wrapper">
        {" "}
        <h4 className="row justify-content-center "> Login</h4>
        <form className="row gap-4 mt-3 py-4" onSubmit={(e) => handleLogin(e)}>
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label ">
              Enter Email/Mobile number <span className="asterik">&#42;</span>
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              style={{ borderRadius: 0, border: "2px solid rgb(255,0,0)" }}
            />{" "}
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword" className="form-label ">
              Enter Password <span className="asterik">&#42;</span>
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              name="password"
              onChange={handleChange}
              style={{ borderRadius: 0, border: "2px solid rgb(255,0,0)" }}
            />
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
            >
              Login
            </button>
          </div>{" "}
        </form>
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
      </div>
    </div>
  );
}

export default Login;

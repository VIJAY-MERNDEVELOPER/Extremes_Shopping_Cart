/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ setIsLoggedIn, isLoggedIn }) {
  return (
    <div>
      <h1>Login</h1>

      <button
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        Login
      </button>

      <Link to={"/register"}>Register</Link>
    </div>
  );
}

export default Login;

import React from "react";

function ForgetPassword() {
  return (
    <div
      className="container d-flex  justify-content-center mt-5"
      style={{
        height: "50vh",
        border: "1px solid red",
        backgroundColor: "red",
        color: "white",
      }}
    >
      <div className="row w-50 align-items-center   ">
        <div className="col-12">
          {" "}
          <h3 className="row justify-content-center mb-5">Reset Password</h3>
          <label htmlFor="email" className="form-label">
            We'll send mail to reset your password
          </label>
          <input type="text" id="email" className="form-control mb-3" />
          <div className="row justify-content-center ">
            <button className="btn btn-success w-25">Send Link</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;

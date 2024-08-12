import "./register.css";
import { Divider } from "@mui/material";

function Register() {
  return (
    <div
      className="container d-flex justify-content-center  py-5 "
      style={{ width: "100%" }}
    >
      <div className="row justify-content-center register-container">
        <h4 className="row justify-content-center">New To Extremes</h4>
        <form action="submit" className="row gap-3 mt-3 ">
          <div className="col-12">
            <div className="row my-3">
              <div className="col-sm-12 col-md-6 ">
                <label htmlFor="firstName" className="form-label">
                  {" "}
                  First Name <span style={{ color: "red" }}> &#42;</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  style={{ borderRadius: 0, border: "2px solid rgb(255,0,0)" }}
                />
              </div>
              <div className="col-sm-12 col-md-6">
                {" "}
                <label htmlFor="lastName" className="form-label">
                  {" "}
                  Last Name <span style={{ color: "red" }}> &#42;</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  style={{ borderRadius: 0, border: "2px solid rgb(255,0,0)" }}
                />
              </div>
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              Enter Email/Mobile number
              <span style={{ color: "red" }}> &#42;</span>
            </label>
            <input
              type="text"
              id="inputEmail"
              className="form-control"
              style={{ borderRadius: 0, border: "2px solid rgb(255,0,0)" }}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword" className="form-label mt-3">
              Enter Password <span style={{ color: "red" }}> &#42;</span>
            </label>
            <input
              type="text"
              id="inputPassword"
              className="form-control"
              style={{ borderRadius: 0, border: "2px solid rgb(255,0,0)" }}
            />
          </div>
          <div className="col-12 justify-content-center ">
            <button
              type="submit"
              className="btn btn-success  my-4 w-100"
              style={{ borderRadius: 0 }}
            >
              Register
            </button>
          </div>
          <div className="col-12">
            <Divider sx={{ padding: "30px 0" }}> Or</Divider>
          </div>
          <div className="col-12 ">
            <button
              style={{
                width: "100%",
                backgroundColor: " rgb(66, 133, 244)",
                border: "rgb(66,133,244)",
                color: "white",
                fontWeight: "500",
                padding: 5,
              }}
              className="d-flex align-items-center "
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
        </form>{" "}
      </div>
    </div>
  );
}

export default Register;

import { Grid } from "@mui/material";
import React from "react";
import "./styles/footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="my-5">
      <div
        className="row  align-items-center "
        style={{ width: "80%", marginLeft: "10%" }}
      >
        <div className="col-sm-12 col-md-5" style={{ margin: 0 }}>
          {" "}
          <img src="/extremes-logo.png" width="175px" />
        </div>
        <div className="col-6 footer-section">
          <div className="row">
            <div className="col-4">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <span className="fw-bold">SHOP</span>
                </li>
                <li>Men</li>
                <li>Women</li>
                <li>Brands</li>
              </ul>
            </div>

            <div className="col-4">
              <ul style={{ listStyle: "none" }}>
                <li>
                  {" "}
                  <span className="fw-bold">ABOUT</span>
                </li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Our Story</li>
              </ul>{" "}
            </div>
            <div className="col-4">
              {" "}
              <ul style={{ listStyle: "none" }}>
                <li>
                  {" "}
                  <span className="fw-bold">HELP</span>
                </li>
                <li>Returns </li>
                <li>Contact Us</li>
                <li>Shipping</li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row  mb-3" style={{ marginLeft: "10%" }}>
        <div className="col-6 d-flex gap-4">
          <span>
            {" "}
            <InstagramIcon
              className="instagram-icon"
              sx={{ width: "35px", height: "35px" }}
            />
          </span>
          <span>
            {" "}
            <YouTubeIcon
              className="youtube-icon"
              sx={{ width: "35px", height: "35px" }}
            />
          </span>
          <span>
            <FacebookIcon
              className="facebook-icon"
              sx={{ width: "35px", height: "35px" }}
            />
          </span>
        </div>
        <div className="col-6"></div>
      </div>{" "}
      <hr />
      <div className="row  mb-3" style={{ marginLeft: "10%" }}>
        <div className="col-7">
          <span className="">&#169; 2024 | EXTREMES | All Rights Reserved</span>
        </div>
        <div className="col-4 " style={{ marginLeft: 0 }}>
          <span>
            {" "}
            <a href="#" className="mx-1">
              Terms Of Use{" "}
            </a>{" "}
            |
            <a href="#" className="mx-1">
              Terms Of Sale{" "}
            </a>
            |
            <a href="#" className="mx-1">
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

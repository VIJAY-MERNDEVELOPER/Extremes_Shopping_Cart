import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/SideBar.css";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SideBarComponent from "./SideBarComponent";
import AddIcon from "@mui/icons-material/Add";

function SideBar({ toggleDrawer }) {
  const sideBarData = [
    {
      category: "New Arrivals",
      image:
        "https://culture-kings-sanity.imgix.net/3b5b3e6fdc4c4a5de77df4ded2097b335344bbb3-876x280.jpg?w=600&amp;auto=compress,format",
    },
    {
      category: "Trending Now",
      image:
        "https://culture-kings-sanity.imgix.net/41f101b189cb781e750bd788caa9378cad6e679d-876x280.jpg?w=600&auto=compress,format",
    },
    {
      category: "Upcoming Releases",
      image:
        "https://culture-kings-sanity.imgix.net/2c6d8a36da9a83e7155fc0cf7e372d695217a865-876x280.jpg?w=600&auto=compress,format",
    },
    {
      category: "Tops",
      image:
        "https://culture-kings-sanity.imgix.net/7d1913f0b3d9b4226b34fb1998c7160262f51ea6-876x280.jpg?w=600&auto=compress,format",
    },
  ];

  const data = [
    {
      name: "Sign In",
      icon: "bi bi-person",
      path: "/login",
      add: false,
    },
    {
      name: "Register",
      icon: "bi bi-pencil-square",
      path: "/register",
      add: false,
    },
    {
      name: "Blog",
      icon: "bi bi-info-circle",
      path: "/blog",
      add: false,
    },
    {
      name: "Shipping & Returns",
      icon: "bi bi-bag-check",
      add: false,
    },
    {
      name: "Payment Options",
      icon: "bi bi-credit-card",
      add: true,
    },
  ];

  return (
    <div className="sidebar-container">
      <div
        className="row sidebar-header align-items-center"
        style={{ margin: 0 }}
      >
        <button className="col-4 text-center" aria-selected="true">
          <Link className="category-header"> MEN</Link>
        </button>
        <button className="col-4 text-center">
          {" "}
          <Link className="category-header"> WOMEN</Link>
        </button>
        <button className="col-4 text-center">
          {" "}
          <Link className="category-header"> SALE</Link>
        </button>
      </div>
      <hr />
      <div>
        <div className="row my-3 justify-content-center ">
          <div className="col-11">
            <div className=" input-group ">
              <input
                type="text"
                className="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                placeholder="search for brands and products"
                style={{ borderRadius: "0", borderColor: "rgb(181, 181, 181)" }}
              />

              <button
                className="input-group-text "
                style={{
                  backgroundColor: "rgb(255,0,0)",
                  borderRadius: "0",
                  borderColor: "rgb(181, 181, 181)",
                }}
              >
                <SearchIcon style={{ color: "white" }} />
              </button>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center gap-3 category-list"
          style={{ background: "none" }}
        >
          {sideBarData.map((data, idx) => {
            return (
              <div
                className="row justify-content-center"
                key={idx}
                style={{ width: "100%" }}
              >
                {" "}
                <SideBarComponent
                  data={data}
                  toggleDrawer={toggleDrawer}
                />{" "}
              </div>
            );
          })}{" "}
        </div>
        <div
          className="col-12 justify-content-center  mt-3 position-absolute"
          style={{ width: "100%" }}
        >
          <ul className="list-group" style={{ borderRadius: 0 }}>
            {" "}
            {data.map((data, idx) => {
              return (
                <li key={idx} className="list-group-item  py-3 fs-6 fw-medium">
                  <div className="row align-center">
                    <div className="col-8 col-lg-8 me-3">
                      <span className="me-3">
                        {" "}
                        <i className={data.icon}></i>
                      </span>{" "}
                      <Link to={`${data.path}`} className="route-link">{data.name}</Link>
                    </div>

                    {data.add ? (
                      <span type="button" className="col-2 col-lg-2 fw-bolder ">
                        <AddIcon className="fw-bold " />
                      </span>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

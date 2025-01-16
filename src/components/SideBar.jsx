/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SideBarComponent from "./SideBarComponent";
import AddIcon from "@mui/icons-material/Add";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./styles/sidebar.css";

function SideBar({ toggleDrawer }) {
  const sideBarData = [
    {
      subCategory: "New Arrivals",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/c/g/m-t5-lvd-hikaru-original-imah3572ky5grg4p.jpeg?q=70",
      category: "Men",
      title: "men's new arrivals",
    },
    {
      subCategory: "Trending Now",
      image: "/xxl-pct09201001-polo-plus-original-imafuvp5zyzpfn97 (1).webp",
      category: "Men",
      title: "Trending Now",
    },
    {
      subCategory: "New Arrivals",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kxnl6kw0/t-shirt/w/4/2/s-bi-women-v-neck-105-black-bi-fashion-original-imaga2d8sn286uqk.jpeg?q=70",
      category: "Women",
      title: "wommen's new arrivals",
    },
    {
      subCategory: "Trending Now",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kwgpz0w0/t-shirt/l/5/l/xxl-womens-style-001-youthpoi-original-imag94zrzerxrzyn.jpeg?q=70",
      category: "Women",
      title: "trending now",
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
    // {
    //   name: "Blog",
    //   icon: "bi bi-info-circle",
    //   path: "/blog",
    //   add: false,
    // },
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

  const [filteredCategory, setFilteredCategory] = useState();
  const handleCategoryType = (type) => {
    setFilteredCategory(sideBarData.filter((data) => data.category === type));
  };

  useEffect(() => {
    handleCategoryType("Men");
  }, []);

  return (
    <div className="sidebar-container bg-body-secondary">
      <div
        className="row sidebar-header align-items-center"
        style={{ margin: 0 }}
      >
        <button
          className="col-6 text-center"
          onClick={() => handleCategoryType("Men")}
          aria-selected="true"
        >
          MEN
        </button>
        <button
          className="col-6 text-center"
          onClick={() => handleCategoryType("Women")}
        >
          {" "}
          WOMEN
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
          className="row justify-content-center  category-list"
          style={{ background: "none" }}
        >
          {filteredCategory?.map((data, idx) => {
            return (
              <div
                className="row justify-content-center"
                key={idx}
                style={{ width: "90%" }}
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
          className="col-12 justify-content-center  mt-3 "
          style={{ width: "100%" }}
        >
          <ul className="list-group" style={{ borderRadius: 0 }}>
            <li className="list-group-item  py-3 fs-6 fw-medium">
              <div className="row align-center">
                <div className="col-8 col-lg-8 d-flex ">
                  <span className="me-3">
                    {" "}
                    <DashboardCustomizeOutlinedIcon
                      sx={{ fontSize: "18px", fontWeight: 100 }}
                    />
                  </span>{" "}
                  <Link to={"/admin/dashboard"} className="route-link mt-1">
                    Dashboard
                  </Link>
                </div>
              </div>
            </li>{" "}
            {data.map((data, idx) => {
              return (
                <li key={idx} className="list-group-item  py-3 fs-6 fw-medium">
                  <div className="row align-center">
                    <div className="col-8 col-lg-8 me-3">
                      <span className="me-3">
                        {" "}
                        <i className={data.icon}></i>
                      </span>{" "}
                      <Link to={`${data.path}`} className="route-link">
                        {data.name}
                      </Link>
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

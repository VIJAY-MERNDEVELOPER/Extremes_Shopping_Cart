import React from "react";
import "./sidemenu.css";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="sidemenu-container">
      <h4 className="text-center">Dashboard</h4>
      <ul className="sidemenu-list list-group">
        <li className="list-group-item  py-3 fs-6 fw-medium">
          <div className="row align-center">
            <div className="col-12 col-lg-12 d-flex ">
              <Link to={"addproducts"} className="route-link mt-1">
                Add Products
              </Link>
            </div>
          </div>
        </li>{" "}
        <li className="list-group-item  py-3 fs-6 fw-medium">
          <div className="row align-center">
            <div className="col-12 col-lg-12 d-flex ">
              <Link to={"productsoverview"} className="route-link mt-1">
                Products View
              </Link>
            </div>
          </div>
        </li>
        <li className="list-group-item  py-3 fs-6 fw-medium">
          <div className="row align-center">
            <div className="col-12 col-lg-12 d-flex ">
              <Link to={"usermanagement"} className="route-link mt-1">
                User Management
              </Link>
            </div>
          </div>
        </li>{" "}
      </ul>
    </div>
  );
}

export default SideMenu;

/* eslint-disable react/prop-types */
import React, { Children } from "react";
import SideMenu from "../../components/Admin/SideMenu";
import { Outlet, Route, Routes } from "react-router-dom";
import AddProducts from "../../components/Admin/AddProducts";
import ProductsOveriew from "../../components/Admin/ProductsOveriew";
import UserManagement from "../../components/Admin/UserManagement";

function Dashboard({ children }) {
  return (
    <div className="container" style={{ height: "80vh" }}>
      <div className="row">
        <div
          className="col-6 col-md-3 col-xl-2"
          style={{
            height: "100%",
            position: "fixed",
            top: "85px",
            left: 0,
            padding: 0,
          }}
        >
          <SideMenu />
        </div>
        <div
          className="col-6 col-xl-8"
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            left: "10%",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

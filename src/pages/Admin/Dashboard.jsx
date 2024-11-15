/* eslint-disable react/prop-types */
import React, { Children } from "react";
import SideMenu from "../../components/Admin/SideMenu";
import { Outlet, Route, Routes } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container-fluid" style={{ height: "100%" }}>
      <div className="row">
        <div
          className="col-6 col-md-3 col-xl-2"
          style={{
            position: "sticky",
            top: "85px",
            margin: 0,
            padding: 0,
          }}
        >
          <SideMenu />
        </div>
        <div
          className="col-6 col-xl-8"
          style={{
            width: "80%",
            height: "100%",
            position: "relative",
            left: "2%",
            marginBottom: "20px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

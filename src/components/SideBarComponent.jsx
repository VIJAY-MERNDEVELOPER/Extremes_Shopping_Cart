/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function SideBarComponent({ data, toggleDrawer }) {
  return (
    <div
      onClick={() => toggleDrawer(false)}
      className="row  align-items-center mt-3 "
      style={{
        boxShadow: "",
        padding: 5,
        maxWidth: "100%",
        height: "100",
        backgroundColor: "white",
      }}
    >
      {" "}
      <div className="col-8">
        <Link className="side-category" to={`/products?category=${data.title}`}>
          {data.category}
        </Link>
      </div>{" "}
      <div className="col-4 d-flex justify-content-center   ">
        <img
          alt="New Arrivals"
          loading="lazy"
          src={data.image}
          style={{
            width: "100%",
            height: 100,

            flex: 0,
            objectFit: "contain",

            padding: 0,
          }}
        />
      </div>
    </div>
  );
}

export default SideBarComponent;

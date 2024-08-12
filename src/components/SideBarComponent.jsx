/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function SideBarComponent({ data, toggleDrawer }) {
  return (
    <div className="row justify-content-center mb-5 " style={{}}>
      {" "}
      <img
        alt="New Arrivals"
        className="position-absolute shadow   bg-body-tertiary "
        loading="lazy"
        src={data.image}
        style={{
          width: "91%",
          height: "auto",
          padding: 0,
        }}
      />
      <div className="col-10 col-md-10 col-lg-10 mt-5">
        <div className="row align-items-center">
          <Link
            to={`/products?category=${data.category}`}
            className="position-absolute side-category"
            onClick={() => toggleDrawer(false)}
          >
            {data.category}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBarComponent;

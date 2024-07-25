/* eslint-disable react/prop-types */
import React from "react";

function SideBarComponet({ category, image }) {
  return (
    <aside className=" position-relative mt-2 mb-5 sidebar-list">
      <div className="row justify-content-center mb-5 ">
        {" "}
        <img
          alt="New Arrivals"
          className="position-absolute shadow p-3 mb-5 bg-body-tertiary "
          loading="lazy"
          src={image}
          style={{ width: "91%", height: "15vh" }}
        />
        <div className="col-10 col-md-10 col-lg-10 mt-5">
          <a
            href="/collections/mens-new-arrivals"
            className="position-absolute side-category"
          >
            {category}
          </a>
        </div>
      </div>
    </aside>
  );
}

export default SideBarComponet;
{
  /* <div className="card my-3 " style={{ width: "86%", height: "13vh" }}>
      <div className="card-body">
        <div className="row     ">
          <div className="col-8">
            <h5 className="card-title ">Card title</h5>
          </div>
          <div className="col-4">
            <img src="" alt="" />
          </div>
        </div>
      </div> */
}

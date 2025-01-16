import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ product }) {
  return (
    <div className="row">
      <ol className="breadcrumb">
        <Link to={"/"} className="breadcrumb-item">
          Home
        </Link>
        <Link to={"/men"} className="breadcrumb-item">
          {product.category}{" "}
        </Link>
        <Link className="breadcrumb-item active" aria-current="page">
          {product.subCategory}
        </Link>
      </ol>
    </div>
  );
}

export default BreadCrumb;

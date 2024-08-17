import React, { useState } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import "./addproducts.css";
import { Form } from "react-router-dom";

function AddProducts() {
  const [productImages, setProductImages] = useState([""]);

  return (
    <div className="container" style={{ maxWidth: "100vw" }}>
      <h4 className="d-flex justify-content-center ">Add Products</h4>{" "}
      <form className="row ">
        <div className="d-flex justify-content-center align-content-center ">
          <div className=" row justify-content-center align-items-center  ">
            {productImages.map((input, idx) => {
              return (
                <div className="col-2 m-3" key={idx}>
                  <label
                    htmlFor="uploads"
                    className="upload-btn border border-2 px-5 py-3 text-center"
                  >
                    <CloudUploadOutlinedIcon
                      sx={{ fontSize: "50px", color: "rgb(255,0,0)" }}
                    />
                    <span className="row justify-content-center fw-bold">
                      {" "}
                      Uploads
                    </span>
                  </label>
                  <input
                    type="file"
                    id="uploads"
                    style={{ display: "none" }}
                  />{" "}
                  <button
                    className=" remove-btn "
                    type="button"
                    style={{ width: "150px" }}
                  >
                    ❌
                  </button>
                </div>
              );
            })}{" "}
          </div>{" "}
          <button
            className=" remove-btn  "
            type="button"
            onClick={() => setProductImages([...productImages, ""])}
          >
            ➕
          </button>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <label htmlFor="productName"> Product Name</label>
            <input
              type="text"
              id="productName"
              className="form-control w-75 input-style"
            />
          </div>{" "}
          <div className="col-6">
            <label htmlFor="productName"> Brand Name</label>
            <input
              type="text"
              id="productName"
              className="form-control w-75 input-style"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-1">
            <h6>Category</h6>
          </div>
          <div className="col-10">
            <div className="form-check form-check-inline ">
              <label className="form-check-label" htmlFor="inlineRadio1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="categoryOptions"
                  id="category1"
                  value="men"
                />{" "}
                Men
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineRadio2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="categoryOptions"
                  id="category2"
                  value="women"
                />{" "}
                Women
              </label>
            </div>
          </div>
        </div>
        <div className="row" style={{ width: "87.5%" }}>
          <div className="col-12">
            <label htmlFor="description">Product Description</label>{" "}
            <input
              type="text"
              id="description"
              className="form-control input-style "
            />{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            {" "}
            <label htmlFor="productPrice"> Product Price</label>
            <input
              type="text"
              id="productPrice"
              className="form-control w-50 input-style"
            />
          </div>
          <div className="col-4">
            {" "}
            <label htmlFor="offer"> Offer Percentage</label>
            <input
              type="text"
              id="offer"
              className="form-control w-50 input-style"
            />
          </div>
          <div className="col-4">
            {" "}
            <label htmlFor="discountPrice"> Discount Price</label>
            <input
              type="text"
              id="discountPrice"
              className="form-control w-50 input-style"
            />
          </div>
        </div>
        <div className="row gap-1">
          <div className="col-1 no-spinner">
            <label htmlFor="totalQty"> Total Qty</label>
            <input
              type="number"
              id="totalQty"
              className="form-control w-75 input-style"
            />
          </div>{" "}
          <div className="col-1">
            <label htmlFor="ssize"> S</label>
            <input
              type="number"
              id="ssize"
              className="form-control w-75 input-style"
            />
          </div>{" "}
          <div className="col-1">
            <label htmlFor="msize"> M</label>
            <input
              type="number"
              id="msize"
              className="form-control w-75 input-style"
            />
          </div>{" "}
          <div className="col-1">
            <label htmlFor="lsize">L</label>
            <input
              type="number"
              id="lsize"
              className="form-control w-75 input-style"
            />
          </div>{" "}
          <div className="col-1">
            <label htmlFor="xlsize"> XL</label>
            <input
              type="number"
              id="xlsize"
              className="form-control w-75 input-style"
            />
          </div>
          <div className="col-1 ">
            <label htmlFor="xxlsize"> XXL</label>
            <input
              type="number"
              id="xxlsize"
              className="form-control w-75 input-style"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;

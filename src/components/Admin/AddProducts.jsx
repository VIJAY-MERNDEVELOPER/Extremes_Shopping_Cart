import React, { useEffect, useState } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import "./addproducts.css";
import { Form } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import { useAddProductMutation } from "../../app/features/productFeatures/productApiSlice.js";

function AddProducts() {
  const [addproduct, { isLoading, isError, isSuccess, data, error }] =
    useAddProductMutation();

  // const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      productName: "",
      productBrand: "",
      productDescription: "",
      category: "",
      subCategory: "",
      productImages: [],
      stocks: { total: 0, S: 0, M: 0, L: 0, XL: 0 },
      productPrice: "",
      discountPercentage: "",
      color: "",
      material: "",
    },
  });

  const formData = new FormData();

  const {
    register,
    trigger,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
  } = form;

  const handleTotalStock = (e) => {
    e.preventDefault();

    setValue(
      "stocks.total",
      Number(watch("stocks.S")) +
        Number(watch("stocks.M")) +
        Number(watch("stocks.L")) +
        Number(watch("stocks.XL"))
    );
  };

  const watch_images_field = watch("productImages");

  const handleAddProduct = (data) => {
    formData.append("productName", data.productName);
    formData.append("productBrand", data.productBrand);
    formData.append("productDescription", data.productDescription);
    formData.append("category", data.category);
    formData.append("subCategory", data.subCategory);
    formData.append("stocks", JSON.stringify(data.stocks));
    formData.append("discountPercentage", data.discountPercentage);
    formData.append("productPrice", data.productPrice);
    formData.append("color", data.color);
    formData.append("material", data.material);
    Array.from(watch_images_field).forEach((image, idx) => {
      formData.append("productImages", image);
    });
    // dispatch(addProduct(formData));
    addproduct(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
    if (isError) {
      formData.delete("productImages");
    }
  }, [isSuccess, isError]);

  return (
    <div className="container" style={{ maxWidth: "100vw" }}>
      <h4 className="d-flex justify-content-center ">Add Products</h4>{" "}
      <form
        className="row "
        onSubmit={handleSubmit(handleAddProduct)}
        noValidate
      >
        <div className="d-flex flex-column justify-content-center align-items-center ">
          {" "}
          <div className="mt-1 d-flex  justify-content-center border border-danger border-2 px-4 py-1">
            <div className=" text-center">
              <div className="row">
                <label htmlFor="file-upload" className="upload-label">
                  <span className="fw-bold ">Upload a file </span>
                  <Controller
                    control={control}
                    name="productImages"
                    render={({ field: { onChange, value } }) => (
                      <input
                        {...register(`productImages`)}
                        id="file-upload"
                        accept="image/*"
                        type="file"
                        multiple
                        onBlur={(e) => {
                          onChange([...value, ...Array.from(e.target.files)]);
                          trigger("productImages");
                        }}
                        className="d-none"
                      />
                    )}
                  />
                </label>
              </div>
              <p className="opacity-75 fw-bold text-secondary custom-text">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
          <div className="row mt-2 justify-content-center">
            {Array.from(watch_images_field).map((file, index) => (
              <div
                key={file.name}
                className="position-relative col-xl-2 col-sm-2 col-md-2 col-4 flex justify-content-center mt-2"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />{" "}
                <div
                  className="   fw-medium rmv-btn text-center"
                  onClick={() => {
                    setValue(
                      "productImages",
                      Array.from(watch_images_field).filter(
                        (attached_file) => attached_file.name !== file.name
                      )
                    );
                  }}
                >
                  X
                </div>
              </div>
            ))}
          </div>{" "}
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <label htmlFor="productName">
              {" "}
              Product Name <span className="asterik">&#42;</span>
            </label>
            <input
              type="text"
              id="productName"
              className="form-control w-75 input-style"
              {...register("productName", {
                required: { value: true, message: "Product Name is required" },
              })}
            />{" "}
            <p className="custom-text">{errors.productName?.message}</p>
          </div>{" "}
          <div className="col-6">
            <label htmlFor="brandName">
              {" "}
              Brand Name<span className="asterik">&#42;</span>
            </label>
            <input
              type="text"
              id="brandName"
              className="form-control w-75 input-style"
              {...register("productBrand", {
                required: { value: true, message: "Brand Name is required" },
              })}
            />{" "}
            <p className="custom-text">{errors.productBrand?.message}</p>
          </div>{" "}
        </div>
        <div className="row my-4">
          <div className="col-12 col-md-5">
            <div className="row">
              <h6 className="col-5">
                Category<span className="asterik">&#42;</span>
              </h6>

              <div className="col-6">
                <div className="form-check form-check-inline ">
                  <label className="form-check-label" htmlFor="category1">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="category1"
                      value="Men"
                      {...register("category")}
                    />{" "}
                    Men
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="category2"
                      value="Women"
                      {...register("category", {
                        required: {
                          value: true,
                          message: "Category is required",
                        },
                      })}
                    />{" "}
                    Women
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <h6 className="col-4">
                Sub-Category<span className="asterik">&#42;</span>
              </h6>

              <div className="col-8">
                <div className="form-check form-check-inline ">
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="newArrivals"
                      value="New Arrivals"
                      {...register("subCategory", {
                        required: {
                          value: true,
                          message: "Sub category is required",
                        },
                      })}
                    />{" "}
                    New Arrivals
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="category2"
                      value="Trending Now"
                      {...register("subCategory")}
                    />{" "}
                    Trending Now
                  </label>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ width: "87.5%" }}>
          <div className="col-12">
            <label htmlFor="description">
              Product Description<span className="asterik">&#42;</span>
            </label>{" "}
            <input
              type="text"
              id="description"
              className="form-control input-style "
              {...register("productDescription", {
                required: {
                  value: true,
                  message: "Product Description is required",
                },
              })}
            />{" "}
            <p className="custom-text">{errors.productDescription?.message}</p>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-4">
            {" "}
            <label htmlFor="productPrice">
              {" "}
              Product Price<span className="asterik">&#42;</span>
            </label>
            <input
              type="text"
              id="productPrice"
              className="form-control w-50 input-style"
              {...register("productPrice", {
                required: {
                  value: true,
                  message: "Product Price is required",
                },
              })}
            />{" "}
            <p className="custom-text">{errors.productPrice?.message}</p>
          </div>
          <div className="col-4">
            {" "}
            <label htmlFor="offer">
              {" "}
              Offer Percentage<span className="asterik">&#42;</span>
            </label>
            <input
              type="text"
              id="offer"
              className="form-control w-50 input-style"
              {...register("discountPercentage", {
                required: {
                  value: true,
                  message: "Product Discount is required",
                },
              })}
            />{" "}
            <p className="custom-text">{errors.discountPercentage?.message}</p>
          </div>
        </div>
        <div className="row gap-1 my-4">
          <div className="col-md-2 col-5 ">
            <label htmlFor="totalQty">
              {" "}
              Total Qty<span className="asterik">&#42;</span>
            </label>
            <input
              type="number"
              id="totalQty"
              min={0}
              className="form-control w-100 input-style"
              {...register("stocks.total", {
                min: {
                  value: 1,
                  message: "Minimun quantity is required",
                },
              })}
            />{" "}
            <p className="custom-text">{errors.stocks?.total?.message}</p>
          </div>{" "}
          <div className="col-md-2 col-5 ">
            <label htmlFor="ssize"> S</label>
            <input
              type="number"
              id="ssize"
              min={0}
              className="form-control w-100 input-style"
              {...register("stocks.S", {
                required: {
                  value: true,
                  valueAsNumber: true,
                  message: "total quantity is required",
                },
              })}
              onBlur={handleTotalStock}
            />{" "}
            <p className="custom-text">{errors.stocks?.S?.message}</p>
          </div>{" "}
          <div className="col-md-2 col-5 ">
            <label htmlFor="msize"> M</label>
            <input
              type="number"
              id="msize"
              min={0}
              className="form-control w-100 input-style"
              {...register("stocks.M", {
                required: {
                  value: true,
                  valueAsNumber: true,
                  message: "total quantity is required",
                },
              })}
              onBlur={handleTotalStock}
            />{" "}
            <p className="custom-text">{errors.stocks?.M?.message}</p>
          </div>{" "}
          <div className="col-md-2 col-5">
            <label htmlFor="lsize">L</label>
            <input
              type="number"
              id="lsize"
              min={0}
              className="form-control w-100 input-style"
              {...register("stocks.L", {
                required: {
                  value: true,
                  valueAsNumber: true,
                  message: "total quantity is required",
                },
              })}
              onBlur={handleTotalStock}
            />{" "}
            <p className="custom-text">{errors.stocks?.L?.message}</p>
          </div>{" "}
          <div className="col-md-2 col-5">
            <label htmlFor="xlsize"> XL</label>
            <input
              type="number"
              id="xlsize"
              min={0}
              className="form-control w-100 input-style"
              {...register("stocks.XL", {
                required: {
                  value: true,
                  valueAsNumber: true,
                  message: "total quantity is required",
                },
              })}
              onBlur={handleTotalStock}
            />{" "}
            <p className="custom-text">{errors.stocks?.XL?.message}</p>
          </div>
          {/* <div className="col-1 ">
            <label htmlFor="xxlsize"> XXL</label>
            <input
              type="number"
              id="xxlsize"
              className="form-control w-75 input-style"
            />
          </div> */}
        </div>
        <div className="row my-4">
          <div className="col-4">
            <label htmlFor="color">
              Color<span className="asterik">&#42;</span>
            </label>
            <input
              type="text"
              id="color"
              className="form-control w-75 input-style"
              {...register("color")}
            />
          </div>
          <div className="col-4">
            <label htmlFor="material">
              Material<span className="asterik">&#42;</span>
            </label>
            <input
              type="text"
              id="material"
              className="form-control w-75 input-style"
              {...register("material")}
            />
          </div>
          {/* <div className="col-4">
            <label htmlFor="fit">Fit</label>
            <input
              type="text"
              id="fit"
              className="form-control w-75 input-style"
            />
          </div> */}
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-success  col-3" type="submit">
            {isLoading ? <span>...Adding</span> : <span>Add Product</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;

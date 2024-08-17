import React, { useEffect, useRef, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import PlaceIcon from "@mui/icons-material/Place";
import Chip from "@mui/material/Chip";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuItem, Select } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./styles/Product.css";
import { Link } from "react-router-dom";

function Product() {
  const productView = [
    {
      id: "1",
      product_name: "Goat Crew X The Boys Homelander Vintage T-Shirt",
      product_brand: "Goat Crew ",
      product_description:
        "Men Colorblock Polo Neck Cotton Blend Multicolor T-Shirt",
      product_images: [
        "/Extremes_1.jpg",
        "https://culture-kings.imgix.net/files/02051109-YB017_mens_00020.jpg?v=1721175298&fit=crop&h=1000&w=800&auto=compress,format",
      ],

      brand_logo:
        "https://culture-kings-static.imgix.net/images/logos-centre/brand-goat-crew.jpg?h=100&auto=compress,format",
      product_price: 499,
      offer: 10,
      available_quantity: 10,
      category: "men",
      deliverBy: 4,
    },
  ];

  const address = [
    {
      name: "vijay",
      address: "18c,Sarala Nagar,Sriperumbuthur High School",
      address_type: "home",
    },
    {
      name: "vijay.s",
      address: "xyzz,hgahsdvh,sfsd",
      address_type: "work",
    },
    {
      name: "stanley",
      address: "sdsd, jhbdj,sfsd",
      address_type: "home",
    },
  ];

  const [image, setImage] = useState(productView[0].product_images[0]);

  const [productDetailState, setProductDetailState] = useState(false);

  const productDetailStateRef = useRef();
  const element = document.querySelector(".product-details-list");

  const handleProductDetails = (value) => {
    if (value === "flex") {
      productDetailStateRef.current.style.display = value;
      setProductDetailState(false);
    } else if (value === "none") {
      productDetailStateRef.current.style.display = value;
      setProductDetailState(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ maxHeight: "100%", zIndex: 0 }}>
      <div className="row">
        <div
          className="col-5"
          style={{
            width: "40%",
            padding: 0,
          }}
        >
          <div className="row" style={{ margin: 0 }}>
            <div className="col-2">
              {productView[0].product_images.map((images, idx) => {
                return (
                  <div
                    className="row mb-2 image-list-hover"
                    key={idx}
                    onMouseOver={() => {
                      setImage(images);
                    }}
                  >
                    <button
                      style={{
                        padding: "10px 0px",
                        margin: 0,
                        border: "none",
                      }}
                    >
                      <img
                        src={images}
                        alt={productView[0].product_name}
                        width={"80%"}
                        style={{ padding: 0, margin: 0 }}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="col-9">
              <img
                src={image}
                alt={productView[0].product_name}
                width={"100%"}
                height={"100%"}
                style={{ border: "1px solid black", padding: 0 }}
              />
            </div>
          </div>
          <div className="row mt-3 justify-content-evenly">
            <div className="col-6">
              <button
                style={{
                  width: "80%",
                  backgroundColor: "rgb(255,0,0)",
                  border: "none",
                  color: "white",
                  fontWeight: "bolder",
                  padding: 5,
                }}
              >
                <span>
                  <ShoppingCartIcon />
                </span>{" "}
                ADD TO CART
              </button>
            </div>
            <div className="col-6 ">
              <button
                style={{
                  width: "80%",
                  backgroundColor: "rgb(255,0,0)",
                  border: "none",
                  color: "white",
                  fontWeight: "bolder",
                  padding: 5,
                }}
              >
                <span>
                  <FlashOnIcon />
                </span>{" "}
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-7"
          style={{
            height: "100vh",
          }}
        >
          <div className="row">
            <ol className="breadcrumb">
              <Link to={"/"} className="breadcrumb-item">
                Home
              </Link>
              <Link to={"/men"} className="breadcrumb-item">
                {productView[0].category}{" "}
              </Link>
              <Link className="breadcrumb-item active" aria-current="page">
                {productView[0].product_name}
              </Link>
            </ol>
          </div>
          <span className="row product-title">
            {productView[0].product_brand}&nbsp;
          </span>
          <p className="row product-name">
            {productView[0].product_description}
          </p>
          <div className="row">
            {" "}
            <span className="row" style={{ color: "green" }}>
              Special Price &nbsp;
            </span>
            <div className="col-12" style={{ padding: 0 }}>
              <span className="offer-price">
                ₹
                {productView[0].product_price -
                  Math.round(
                    productView[0].product_price * (productView[0].offer / 100)
                  )}
              </span>{" "}
              <span className="original-price">
                ₹{productView[0].product_price}
              </span>
              <span style={{ marginLeft: 10 }}>
                {productView[0].offer}% off
              </span>
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-1 mt-2" style={{ paddingLeft: 0 }}>
              <span>Size</span>
            </div>
            <div className="col-10">
              <ul
                className="d-flex gap-4 size-list "
                style={{ listStyle: "none", padding: 0 }}
              >
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ paddingLeft: 0 }}>
              <span>
                {" "}
                <PlaceIcon
                  style={{ color: "rgb(40, 116, 240)", fontSize: "1.2rem" }}
                />
              </span>
              <span style={{ padding: 0, marginBottom: 10 }}> Deliver To</span>{" "}
            </div>
            <select
              name=""
              id=""
              style={{
                width: "45%",
                height: 35,
                border: "2px solid rgb(255,0,0)",
                marginBottom: 15,
              }}
            >
              {address.map((address, idx) => {
                return (
                  <option value="" key={idx}>
                    <span style={{ fontWeight: "bold" }}>{address.name}</span>,
                    <span>{address.address}</span>
                  </option>
                );
              })}
              <option value=""></option>
            </select>
          </div>
          <div
            className="row"
            style={{ paddingBottom: "20px", borderBottom: "1px solid grey" }}
          >
            Delivery By 9 Aug ,Fri | Free
          </div>{" "}
          <div className="row my-4 align-items-center" style={{ padding: 0 }}>
            <div className="col-8">
              <h4>Product Details</h4>{" "}
            </div>
            <div className="col-4">
              {productDetailState ? (
                <button
                  style={{ border: "none", background: "none" }}
                  onClick={() => handleProductDetails("flex")}
                >
                  <AddIcon />
                </button>
              ) : (
                <button
                  style={{ border: "none", background: "none" }}
                  onClick={() => handleProductDetails("none")}
                >
                  <RemoveIcon />
                </button>
              )}
            </div>
            <ul
              className="row gap-3 product-details-list"
              style={{ listStyle: "none" }}
              ref={productDetailStateRef}
            >
              <li className="row">
                <div className="col-5">Type</div>
                <div className="col-5">Polo Neck</div>
              </li>
              <li className="row">
                <div className="col-5">Sleeve</div>
                <div className="col-5">Short Sleeve</div>
              </li>
              <li className="row">
                {" "}
                <div className="col-5">Fit</div>
                <div className="col-5">Slim</div>
              </li>
              <li className="row">
                {" "}
                <div className="col-5">Fabric</div>
                <div className="col-5">Cotton Blend</div>
              </li>
              <li className="row">
                {" "}
                <div className="col-5">Sales Package</div>
                <div className="col-5">1 Tshirt</div>
              </li>
              <li className="row">
                {" "}
                <div className="col-5">Pack Of</div>
                <div className="col-5">1</div>
              </li>
              <li className="row">
                {" "}
                <div className="col-5">Neck Type</div>
                <div className="col-5">Polo Neck</div>
              </li>
              <li className="row">
                {" "}
                <div className="col-5">Ideal For</div>
                <div className="col-5">Men</div>
              </li>
              <li className="row">
                {" "}
                <div className="col-5">Size</div>
                <div className="col-5">XL</div>
              </li>
              <li className="row">
                {" "}
                <div className="col-5">Pattern</div>
                <div className="col-5">Solid</div>
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Product;

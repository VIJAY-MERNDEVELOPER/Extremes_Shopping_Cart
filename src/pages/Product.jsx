import React, { useEffect, useRef, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import PlaceIcon from "@mui/icons-material/Place";
import Chip from "@mui/material/Chip";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuItem, Select } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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

  const productDetailRef = useRef();
  const element = document.querySelector(".product-details-list");

  const handleProductDetails = () => {
    if (productDetailState === false) {
      setProductDetailState(true);
    }
    setProductDetailState(false);
  };

  useEffect(() => {
    if (productDetailState === true) {
      element.style.display = "block";
    } else if (productDetailState === false) {
      element.style.display = "inline";
    }
  }, []);
  console.log("product");

  return (
    <div className="container" style={{ width: "100%", height: "auto" }}>
      <div className="row">
        <div
          className="col-5"
          style={{
            width: "40%",
            // backgroundImage: `url(${productView[0].product_image_1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row">
            <div className="col-2">
              {productView[0].product_images.map((images, idx) => {
                return (
                  <div className="row mb-2" key={idx}>
                    <button
                      style={{
                        padding: "10px 0px",
                        margin: 0,
                        border: "1px solid rgb(255,0,0)",
                      }}
                      onMouseOver={() => setImage(images)}
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
                  <FlashOnIcon />
                </span>{" "}
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-6"
          style={{
            height: "80vh",
            width: "60%",
            backgroundColor: "rgb(283,213,0)",
          }}
        >
          <p className="row">{productView[0].product_brand}</p>
          <p className="row">{productView[0].product_description}</p>
          <p className="row" style={{ color: "green" }}>
            Special Price
          </p>
          <div className="row">
            <div className="col-12" style={{ padding: 0 }}>
              <span style={{ fontWeight: "bold" }}>
                ₹
                {productView[0].product_price -
                  Math.round(
                    productView[0].product_price * (productView[0].offer / 100)
                  )}
              </span>{" "}
              <span
                style={{
                  padding: 0,
                  textDecoration: "line-through",
                  fontWeight: "bold",
                  opacity: 0.6,
                  marginLeft: 10,
                }}
              >
                ₹{productView[0].product_price}
              </span>
              <span style={{ marginLeft: 10 }}>
                {productView[0].offer}% off
              </span>
            </div>
          </div>
          <div className="row mt-2">
            <ul
              className="d-flex gap-5"
              style={{ listStyle: "none", padding: 0 }}
            >
              <li>Size</li>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>
          <div className="row">
            <span style={{ padding: 0, marginBottom: 10 }}>
              {" "}
              <PlaceIcon />
              Deliver To
            </span>{" "}
            <select
              name=""
              id=""
              style={{
                width: "45%",
                height: 35,
                border: "2px solid rgb(255,0,0)",
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
          <div className="row">Delivery By 9 Aug ,Fri | Free</div>{" "}
          <div className="row my-5 align-items-center">
            <div className="col-8">
              <h4>Product Details</h4>{" "}
            </div>
            <div className="col-4">
              <button
                style={{ border: "none", background: "none" }}
                onClick={() => handleProductDetails()}
              >
                <AddIcon />
              </button>
            </div>
            <ul
              ref={productDetailRef}
              className="row gap-3 product-details-list"
              style={{ listStyle: "none", display: "none" }}
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

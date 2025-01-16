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
import { Link, useLocation, useParams } from "react-router-dom";
import { useGetProductQuery } from "../app/features/productFeatures/productApiSlice";
import BreadCrumb from "../components/BreadCrumb";
import { discountedPrice } from "../utils/utils";

function Product() {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    error,
  } = useGetProductQuery(id);
  console.log(product);

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

  const [image, setImage] = useState();

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
    if (isSuccess) {
      setImage(product?.productImages[0]?.filename);
    }
    window.scrollTo(0, 0);
  }, [isSuccess]);

  if (isLoading || isFetching) return <div>...isLoading</div>;

  if (isSuccess) {
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
                {product?.productImages.map((images, idx) => {
                  return (
                    <div
                      className="row mb-2 image-list-hover"
                      key={idx}
                      onMouseOver={() => {
                        setImage(images.filename);
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
                          src={`http://localhost:3001/${images.filename}`}
                          alt={images.filename}
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
                  src={`http://localhost:3001/${image}`}
                  alt={image?.filename}
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
              height: "60vh",
            }}
          >
            <BreadCrumb product={product} />
            <span className="row product-title">
              {product.productBrand}&nbsp;
            </span>
            <p className="row product-name">{product.productDescription}</p>
            <div className="row">
              {" "}
              <span className="row" style={{ color: "green" }}>
                Special Price &nbsp;
              </span>
              <div className="col-12" style={{ padding: 0 }}>
                <span className="offer-price">
                  ₹
                  {discountedPrice(
                    product.productPrice,
                    product.discountPercentage
                  )}
                </span>{" "}
                <span className="original-price">₹{product.productPrice}</span>
                <span style={{ marginLeft: 10 }}>
                  {product.discountPercentage}% off
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
                  {Object.keys(product.stocks).map((stock) => {
                    return (
                      stock !== "total" && (
                        <li
                          className={`${
                            product.stocks[stock] === 0 && "disabled"
                          }`}
                        >
                          {stock}
                        </li>
                      )
                    );
                  })}
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
                <span style={{ padding: 0, marginBottom: 10 }}>
                  {" "}
                  Deliver To
                </span>{" "}
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
                      <span style={{ fontWeight: "bold" }}>{address.name}</span>
                      ,<span>{address.address}</span>
                    </option>
                  );
                })}
                <option value=""></option>
              </select>
            </div>
            <div className="row" style={{ paddingBottom: "20px" }}>
              Delivery By 9 Aug ,Fri | Free
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

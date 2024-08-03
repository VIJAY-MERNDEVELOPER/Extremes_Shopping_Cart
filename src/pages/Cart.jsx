/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import CartItem from "../components/CartItem";
import { fetchCart, fetchProductData } from "../api/apiFetch";
import { Divider } from "@mui/material";
import { red } from "@mui/material/colors";
import "./cart.css";

function Cart({ cart, setCart, products, setProducts }) {
  const cartContainer = useRef();

  return (
    <div className="container ">
      {!products ? (
        <span className="d-flex justify-content-center">... cart Loading</span>
      ) : (
        <div className="row cart-wrapper" ref={cartContainer}>
          {" "}
          <div
            className="row row-cols-2 align-items-center"
            style={{
              border: "1px solid rgba(210, 210, 210, 0.6)",
              margin: "0 10px 10px 11px",
              padding: "10px 8px",
              width: "64.8%",
              backgroundColor: "white",
            }}
          >
            <div className="col-8">
              <span>Delivery To:</span>
              <span>18c,SaralaNagar,Sriperumbuthur High School</span>
            </div>
            <div className="col-4 text-end">
              <button
                className=""
                style={{
                  backgroundColor: "rgb(255,0,0)",
                  border: "none",
                  color: "white",
                  fontWeight: "bolder",
                  width: 130,
                  padding: 5,
                }}
              >
                Change
              </button>
            </div>
          </div>
          <div className="col-sm-8 col-mg-12 ">
            <div
              style={{
                border: "1px solid rgba(210, 210, 210, 0.6)",
                backgroundColor: "white",
              }}
            >
              {cart?.map((cart, idx) => {
                return (
                  <>
                    <CartItem
                      key={idx}
                      cart={cart}
                      products={products}
                      setCart={setCart}
                      setProducts={setProducts}
                    />
                    <hr />
                  </>
                );
              })}
            </div>
            <div
              className="row justify-content-end align-content-center text-center checkout-container "
              style={{
                // backgroundColor: "grey",
                position: "sticky",
                bottom: 0,
                width: "100%",
                height: 60,
                marginLeft: 0,
                padding: 10,
              }}
            >
              <button
                className=""
                style={{
                  backgroundColor: "rgb(255,0,0)",
                  border: "none",
                  width: 130,
                  padding: 5,
                  color: "white",
                  font: "20px ",
                  fontWeight: "bolder",
                  marginRight: 10,
                }}
              >
                CheckOut
              </button>
            </div>
          </div>{" "}
          <div
            className="col-sm-12 col-md-3 mx-3"
            style={{ position: "fixed", left: "65%", top: "91px" }}
          >
            <div
              className="row  "
              style={{
                border: "1px solid rgba(210,210,210,0.6)",
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <div
                className="col-12"
                style={{
                  borderBottom: "1px solid rgba(210,210,210,0.6)",
                }}
              >
                {" "}
                <h6 style={{ fontWeight: "bolder", opacity: 0.5 }}>
                  PRICE DETAILS
                </h6>
              </div>{" "}
              <div className="row gap-2">
                <div className="row">
                  <div className="col-8">
                    <span>Price (12 items)</span>
                  </div>
                  <div className="col-4 text-end">
                    <span>₹ 2000</span>
                  </div>
                </div>
                <div className="row">
                  {" "}
                  <div className="col-8">
                    <span>Discount</span>
                  </div>
                  <div className="col-4 text-end">
                    <span> -₹2000</span>
                  </div>
                </div>
                <div className="row">
                  {" "}
                  <div className="col-8 ">
                    <span>Delivery Charges</span>
                  </div>
                  <div className="col-4 text-end">
                    <span>FREE</span>
                  </div>
                </div>
                <div className="row">
                  {" "}
                  <div className="col-8">
                    <span>Packaging Fees</span>
                  </div>
                  <div className="col-4 text-end">
                    <span>₹59</span>
                  </div>
                </div>

                <hr style={{ margin: 0 }} />
                <div className="row">
                  {" "}
                  <div className="col-8 ">
                    <span>
                      <b> Total Amount</b>
                    </span>
                  </div>
                  <div className="col-4 text-end">
                    <span>
                      <b>₹ 2000</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

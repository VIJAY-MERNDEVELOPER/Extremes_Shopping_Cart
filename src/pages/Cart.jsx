/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import CartItem from "../components/CartItem";
import { fetchCart, fetchProductData } from "../api/apiFetch";
import { Divider } from "@mui/material";
import { red } from "@mui/material/colors";
import "./cart.css";
import PriceDetailsCard from "../components/CheckOutButton";
import CheckOutButton from "../components/CheckOutButton";
import PriceDetailComponent from "../components/PriceDetailComponent";

function Cart({ cart, setCart, products, setProducts }) {
  const cartContainer = useRef();

  return (
    <div className="container " style={{ width: "100%" }}>
      {!products ? (
        <span className="d-flex justify-content-center">... cart Loading</span>
      ) : (
        <div className="row  cart-wrapper" ref={cartContainer}>
          {" "}
          <div className="col-md-12 col-xl-8 ">
            <div
              className="row  align-items-center"
              style={{
                border: "1px solid rgba(210, 210, 210, 0.6)",
                marginBottom: 10,
                padding: "10px 8px",
                width: "100%",
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
            <div
              className="row"
              style={{
                border: "1px solid rgba(210, 210, 210, 0.6)",
                backgroundColor: "white",
                width: "100%",
              }}
            >
              {cart?.map((cart, idx) => {
                return (
                  <>
                    {" "}
                    <div key={idx} className="row pb-3">
                      <CartItem
                        cart={cart}
                        products={products}
                        setCart={setCart}
                        setProducts={setProducts}
                      />
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
            <CheckOutButton />
          </div>{" "}
          <div className="col-lg-12 col-xl-3 price-container">
            <PriceDetailComponent />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

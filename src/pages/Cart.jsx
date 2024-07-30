/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import { fetchCart, fetchProductData } from "../api/apiFetch";
import { Divider } from "@mui/material";

function Cart({ cart, setCart, products, setProducts }) {
  useEffect(() => {
    const handleReload = () => {
      fetchCart(setCart);
      console.log(cart);
      fetchProductData(setProducts);
      console.log(products);
    };
    handleReload();
  }, []);
  return (
    <div className="container my-5">
      <h3
        className="d-flex  justify-content-center "
        style={{ color: "rgb(255,0,0)" }}
      >
        Your Shopping Cart
      </h3>{" "}
      {!products ? (
        <span className="d-flex justify-content-center">... cart Loading</span>
      ) : (
        <div className="row">
          <div
            className="col-8"
            style={{
              border: "1px solid rgba(210,210,210,0.6)",
              paddingTop: 10,
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

            <p className="text-end">
              <b>SubTotal(4 items) :</b> ₹ 2550
            </p>
          </div>{" "}
          <div
            className="col-3 mx-3"
            style={{ position: "fixed", left: "60%", top: "10vh" }}
          >
            <div
              className="row  "
              style={{
                border: "1px solid rgba(210,210,210,0.6)",
                width: "100%",
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

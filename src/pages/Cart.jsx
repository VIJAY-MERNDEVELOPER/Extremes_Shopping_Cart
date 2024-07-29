/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import { fetchCart, fetchProductData } from "../api/apiFetch";

const component = `   <div className="container my-5">
      <h3 className="d-flex  justify-content-center ">Your Shopping Cart</h3>
      <div className="row">
        <div
          className="col-9"
          style={{
            border: "1px solid rgba(210,210,210,0.6)",
            paddingTop: 10,
          }}
        >
          {cart?.map((cart, idx) => {
            return (
              <CartItem
                key={idx}
                cart={cart}
                products={products}
                setCart={setCart}
              />
            );
          })}
          <p className="text-end">
            <b>SubTotal(4 items) :</b> ₹ 2550
          </p>
        </div>{" "}
        <div
          className="col-3 "
          style={{ border: "1px solid rgba(210,210,210,0.6)" }}
        >
          <div className="row justify-content-center">
            <p className="text-center">
              <b>SubTotal(4 items) :</b> ₹ 2550
            </p>
            <button
              className="btn btn-warning w-50"
              style={{ borderRadius: 10 }}
            >
              Proceed To Buy
            </button>
          </div>
        </div>
      </div>
    </div>
`;

function Cart({ cart, setCart, products, setProducts }) {
  useEffect(() => {
    // fetchCart(setCart);
    // fetchProductData(setProducts);
    const handleReload = () => {
      fetchCart(setCart);
      fetchProductData(setProducts);
    };

    return () => {
      fetchCart(setCart);
      fetchProductData(setProducts);
    };
  }, []);
  return (
    <>
      {!cart && !products ? (
        <span>...Loading</span>
      ) : (
        <div className="container my-5">
          <h3
            className="d-flex  justify-content-center "
            style={{ color: "rgb(255,0,0 )" }}
          >
            Your Shopping Cart
          </h3>
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
                  <CartItem
                    key={idx}
                    cart={cart}
                    products={products}
                    setCart={setCart}
                  />
                );
              })}
              <p className="text-end">
                <b>SubTotal(4 items) :</b> ₹ 2550
              </p>
            </div>{" "}
            <div className="col-3 mx-3">
              <div
                className="row justify-content-center align-items-start"
                style={{
                  border: "1px solid rgba(210,210,210,0.6)",
                  padding: "50px 10px",
                }}
              >
                <p className="text-center">
                  <b>SubTotal(4 items) :</b> ₹ 2550
                </p>
                <button
                  className="btn btn-warning w-50"
                  style={{ borderRadius: 10 }}
                >
                  Proceed To Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;

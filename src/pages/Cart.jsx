/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import CartItem from "../components/CartItem";
import { fetchCart, fetchProductData } from "../api/apiFetch";
import { Divider } from "@mui/material";
import { red } from "@mui/material/colors";
import "./cart.css";
import PriceDetailsCard from "../components/CheckOutButton";
import CheckOutButton from "../components/CheckOutButton";
import PriceDetailComponent from "../components/PriceDetailComponent";
import { useGetCartProductsQuery } from "../app/features/cartFeatures/cartApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../app/features/orderFeatures/orderApiSlice";
import { useGetProductsQuery } from "../app/features/productFeatures/productApiSlice";

function Cart() {
  const navigate = useNavigate();
  const {
    data: cartData,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    error,
  } = useGetCartProductsQuery();
  const {
    cart: cartItems,
    message,
    totalCartItem,
    totalPrice,
    totalDiscount,
  } = cartData || {};

  const { data: productData } = useGetProductsQuery();
  const { products } = productData || {};
  console.log(products);

  const [
    createOrder,
    {
      isSuccess: iscreateOrderSuccess,
      isLoading: isCreateOrderLoading,
      isError: isCreateOrderError,
      error: createOrderError,
    },
  ] = useCreateOrderMutation();

  const handleCheckOut = async () => {
    if (isCreateOrderLoading) return;
    const orderItems = await cartItems.reduce((acc, cartItem) => {
      const product = products.find(
        (product) => product._id === cartItem.productId
      );
      product &&
        acc.push({
          productId: product._id,
          size: cartItem.size,
          quantity: cartItem.quantity,
          productPrice: product.productPrice,
          discountPercentage: product.discountPercentage,
          productName: product.productName,
          productDescription: product.productDescription,
          productImage: product.productImages[0],
          productBrand: product.productBrand,
        });

      return acc;
    }, []);

    const orderData = {
      orderItems,
      totalItems: totalCartItem,
      totalAmount: totalPrice,
      totalDiscount,
    };

    console.log(orderData);

    try {
      const { order } = await createOrder(orderData).unwrap();
      console.log(order);
      // const { order } = orderResponse;
      // console.log(order);

      if (order) {
        navigate(`/checkout/${order._id}`);
      }
    } catch (error) {
      console.log(createOrderError);
    }
  };

  console.log(cartItems);
  const cartContainer = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isFetching && isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        ... cart Loading
      </div>
    );
  }
  if (totalCartItem === 0) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <h4> No Items in Cart</h4>
      </div>
    );
  }

  return (
    <div className="container " style={{ minHeight: "60vh", height: "100%" }}>
      <div className="row  cart-wrapper" ref={cartContainer}>
        {" "}
        <div className="col-md-12 col-lg-8 ">
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
            {cartItems?.map((cart, idx) => {
              return (
                <div key={cart._id || idx} className="col-xg-10   pb-3">
                  <CartItem cart={cart} />
                  <hr />
                </div>
              );
            })}
          </div>{" "}
          <div
            className="container row align-content-center justify-content-center  checkout-container "
            style={{
              // backgroundColor: "grey",
              position: "sticky",
              bottom: 0,

              height: 60,
              // marginLeft: 0,
              // margin: 0,
              padding: 10,
            }}
          >
            <button
              className="col-10"
              style={{
                backgroundColor: "rgb(255,0,0)",
                border: "none",

                padding: 5,
                color: "white",
                font: "20px ",
                fontWeight: "bolder",
                marginRight: 10,
              }}
              onClick={handleCheckOut}
              disabled={isCreateOrderLoading}
            >
              {isCreateOrderLoading ? "...Loading" : "Proceed To Order"}
            </button>
          </div>
        </div>{" "}
        <div className="col-md-12 col-lg-4 ">
          <PriceDetailComponent
            totalCartItem={totalCartItem}
            totalPrice={totalPrice}
            totalDiscount={totalDiscount}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;

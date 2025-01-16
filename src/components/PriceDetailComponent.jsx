import React from "react";
import CheckOutButton from "./CheckOutButton";
import { Divider } from "@mui/material";
import { useGetCartProductsQuery } from "../app/features/cartFeatures/cartApiSlice";
import { Table } from "react-bootstrap";

function PriceDetailComponent({ totalCartItem, totalPrice, totalDiscount }) {
  return (
    <div className="container">
      <div
        className="row  "
        style={{
          border: "1px solid rgba(210,210,210,0.6)",

          backgroundColor: "white",
        }}
      >
        <div
          className="col-md-12"
          style={{
            borderBottom: "1px solid rgba(210,210,210,0.6)",
          }}
        >
          {" "}
          <h6 style={{ fontWeight: "bolder", opacity: 0.5 }}>PRICE DETAILS</h6>
        </div>{" "}
        <div className="row gap-2">
          <div className="row">
            <div className="col-8">
              <span>Price ({totalCartItem} items)</span>
            </div>
            <div className="col-4 text-end">
              <span>₹ {totalPrice}</span>
            </div>
          </div>
          <div className="row">
            {" "}
            <div className="col-8">
              <span>Discount</span>
            </div>
            <div className="col-4 text-end">
              <span> -₹{totalDiscount}</span>
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
                <b>₹ {totalPrice - totalDiscount + 59}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <CheckOutButton /> */}
    </div>
  );
}

export default PriceDetailComponent;

import React from "react";
import CheckOutButton from "./CheckOutButton";
import { Divider } from "@mui/material";

function PriceDetailComponent() {
  return (
    <>
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
          <h6 style={{ fontWeight: "bolder", opacity: 0.5 }}>PRICE DETAILS</h6>
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
      <CheckOutButton />
    </>
  );
}

export default PriceDetailComponent;

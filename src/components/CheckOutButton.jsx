import React from "react";

function CheckOutButton() {
  return (
    <div
      className="row justify-content-end align-content-center text-center checkout-container "
      style={{
        // backgroundColor: "grey",
        position: "sticky",
        bottom: 0,
        width: "100%",
        height: 60,
        // marginLeft: 0,
        // margin: 0,
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
  );
}

export default CheckOutButton;

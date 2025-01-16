import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetOrderQuery } from "../app/features/orderFeatures/orderApiSlice";
import { useGetAddressByIdQuery } from "../app/features/addressFeatures/addressApiSlice";
import StepperComponent from "../components/StepperComponent";

function OrderSummary() {
  const { orderId } = useParams();
  const { data: orderData } = useGetOrderQuery(orderId);

  const { order, shippingAddress: address } = orderData || {};
  console.log(orderData);
  const productId = order?.orderItems.map((item) => item.productId);
  console.log(productId);
  // const { data: addressData } = useGetAddressByIdQuery(order?.shippingAddress);

  // const { address } = addressData || {};
  console.log(address);
  return (
    <div className="container">
      <h4 className="text-center text-secondary mb-3">SUMMARY OF THE ORDER</h4>
      <div className="row justify-content-center align-items-center border mb-2 bg-light">
        <div className="d-flex flex-wrap">
          <div className="col-12 col-md-5 ">
            <h6 className="text-start fw-medium opacity-75">
              Delivery Address
            </h6>
            <p>{address?.name}</p>
            <p>{address?.street}</p>
            <p>
              {address?.city}-{address?.pincode}
            </p>
            <h6 className="text-start fw-medium opacity-75">Phone Number</h6>
            <p>{address?.contactNumber}</p>
          </div>
          <div className="col-12 col-md-6   ">
            {" "}
            <h6 className="text-center fw-medium opacity-75">
              Download Invoice
            </h6>
          </div>
        </div>
      </div>
      <div className="row border bg-light" style={{ minHeight: 10 }}>
        <h6 className="text-center opacity-75">Ordered Items</h6>
        <div className="d-flex flex-row flex-wrap gap-1 justify-content-center align-items-center">
          {order?.orderItems?.map((item, idx) => {
            console.log(item);
            return (
              <Link
                to={`/product/${item.productId}`}
                className="card align-items-center col-sm-4 col-lg-2 "
                style={{ textDecoration: "none" }}
                key={idx}
              >
                <img
                  src={`http://localhost:3001/${item.productImage.filename}`}
                  alt={item.productName}
                  style={{
                    maxHeight: "100px",
                    maxWidth: "100px",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title p-0 m-1"> {item?.productBrand}</h6>
                  <p className="card-text "> {item?.productName}</p>
                </div>
              </Link>
            );
          })}{" "}
        </div>
      </div>
      <div
        className="row align-items-center  border bg-light mt-2"
        style={{ minHeight: "100px" }}
      >
        <StepperComponent />
      </div>
    </div>
  );
}

export default OrderSummary;

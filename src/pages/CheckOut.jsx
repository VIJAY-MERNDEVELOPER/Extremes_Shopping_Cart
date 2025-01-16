import React from "react";
import CheckOutLoginStage from "../components/CheckOutLoginStage";
import CheckOutAddressStage from "../components/CheckOutAddressStage";
import PriceDetailComponent from "../components/PriceDetailComponent";
import { useGetOrderQuery } from "../app/features/orderFeatures/orderApiSlice";
import { useParams } from "react-router-dom";
import PaymentStage from "../components/PaymentStage";

function CheckOut() {
  const { orderId } = useParams();
  console.log(orderId);

  const {
    data: orderData,
    isLoading,
    isSuccess,
    isError,
  } = useGetOrderQuery(orderId);
  console.log(orderData);

  const { order } = orderData || {};
  console.log(order);

  return (
    <div className="container" style={{ minHeight: "60vh", height: "70%" }}>
      {" "}
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <CheckOutLoginStage />
          <CheckOutAddressStage />
          <PaymentStage />
        </div>
        <div className="col-md-10 col-lg-4">
          <PriceDetailComponent
            totalCartItem={order?.totalItems}
            totalPrice={order?.totalAmount}
            totalDiscount={order?.totalDiscount}
          />
        </div>{" "}
      </div>
    </div>
  );
}

export default CheckOut;

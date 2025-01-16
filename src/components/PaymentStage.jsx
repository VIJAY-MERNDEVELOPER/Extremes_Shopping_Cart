import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useGetOrderQuery } from "../app/features/orderFeatures/orderApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateRazorpPayOrderMutation,
  useVerifyRazorPayPaymentMutation,
} from "../app/features/paymentFeatures/paymentApiSlice";

function PaymentStage() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { data: orderData } = useGetOrderQuery(orderId);
  const { order } = orderData || {};
  console.log(order);
  const [
    createRazorPayOrder,
    {
      isSuccess: isCreateRazorPayOrderSuccess,
      isLoading: isCreateRazorPayOrderLoading,
      isError: isCreateRazorPayOrderError,
      error: createRazorPayOrderError,
    },
  ] = useCreateRazorpPayOrderMutation();

  const [
    verifyRazorPayPayment,
    { isSuccess: isVerifyPaymentSuccess, isLoading: isVerifyPaymentLoading },
  ] = useVerifyRazorPayPaymentMutation();

  const handleCheckOut = async () => {
    console.log(order);
    const orderData = { receipt: order._id, totalAmount: order.totalAmount };
    const createOrderResponse = await createRazorPayOrder(orderData);
    console.log(createOrderResponse);
    const {
      data: { amount, currency, orderId },
    } = createOrderResponse;
    console.log("orderID", orderId);
    const options = {
      key: "rzp_test_XuazY1YVnNXQEM",
      amount: amount,
      currency: currency,
      name: "Extremes",
      description: `Order #${order._id}`,
      order_id: orderId,
      handler: async function (response) {
        console.log(response);
        const responseData = {
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,
        };
        const verifyResponse = await verifyRazorPayPayment(
          responseData
        ).unwrap();
        console.log(verifyResponse);
        if (verifyResponse) {
          console.log(verifyResponse);
          navigate(`/order-success/${order._id}`);
          // alert("Payment Successfull");
        }
      },
      prefill: {
        name: localStorage?.getItem("name"),
        email: "user3@gmail.com ",
        contact: "7010991591",
      },
      notes: { shippingAddress: order.shippingAddress },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <div className="row mb-2 bg-white p-2" style={{ margin: 0 }}>
        <div className="col-8 col-sm-8">
          <span className="badge text-bg-secondary me-3">3</span>
          <span className="text-black fw-bold">PAYMENT</span>
          <button
            data-bs-toggle="collapse"
            data-bs-target="#paymentCollapse"
            aria-expanded="true"
            aria-controls="paymentCollapse"
            className="btn"
          >
            <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>
      <div className="collapse" id="paymentCollapse">
        <div
          className="row bg-white p-2 row-gap-3 justify-content-end"
          style={{ margin: 0 }}
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
            onClick={handleCheckOut}
          >
            Payment
          </button>
        </div>
      </div>
    </>
  );
}

export default PaymentStage;

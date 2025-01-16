import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_APP_PROD_API_URL
    : import.meta.env.VITE_APP_DEV_API_URL;

export const paymentApiSlice = createApi({
  reducerPath: "paymentApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    credentials: "include",
  }),
  tagTypes: ["Payment"],
  endpoints: (builder) => ({
    createRazorpPayOrder: builder.mutation({
      query: (orderData) => ({
        url: "/payment/createorder",
        method: "POST",
        body: orderData,
        /*orderData:{orderId,orderTotal Amount} */
      }),
    }),
    verifyRazorPayPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/payment/verifypayment",
        method: "POST",
        body: paymentData,
        contentType: "application/json",
        /*
        paymentData: {orderId,paymentId,razorpaySignature}
        */
      }),
    }),
  }),
});

export const {
  useCreateRazorpPayOrderMutation,
  useVerifyRazorPayPaymentMutation,
} = paymentApiSlice;

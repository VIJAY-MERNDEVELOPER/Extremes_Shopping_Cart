import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addressApiSlice } from "../addressFeatures/addressApiSlice";

const API =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_APP_PROD_API_URL
    : import.meta.env.VITE_APP_DEV_API_URL;

export const orderApiSlice = createApi({
  reducerPath: "orderApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    credentials: "include",
  }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/order/createorder",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: [{ type: "Order", id: "LIST" }],
    }),
    updateAddress: builder.mutation({
      query: ({ orderId, addressId }) => ({
        url: `/order/adddeliveryaddress/${orderId}`,
        method: "PATCH",
        body: { addressId },
      }),
      invalidatesTags: [{ type: "Order", id: "LIST" }],
      async onQueryStarted(
        { orderId, addressId },
        { dispatch, queryFulfilled }
      ) {
        try {
          const { data } = await queryFulfilled;
          const { address } = await dispatch(
            addressApiSlice.endpoints.getAddressById.initiate(addressId)
          ).unwrap();

          dispatch(
            orderApiSlice.util.updateQueryData("getOrder", orderId, (draft) => {
              draft.shippingAddress = address;
            })
          );
        } catch (error) {
          console.error("Failed to update delivery address:", error);
        }
      },
    }),
    getOrder: builder.query({
      query: (orderId) => `/order/getorder/${orderId}`,
      providesTags: (result, error, orderId) => [
        { type: "Order", id: orderId },
      ],
      async onQueryStarted(orderId, { dispatch, queryFulfilled }) {
        try {
          const {
            data: {
              order: { shippingAddress },
            },
          } = await queryFulfilled;

          // Fetch the shipping address using another query
          const { address } = await dispatch(
            addressApiSlice.endpoints.getAddressById.initiate(shippingAddress)
          ).unwrap();

          // Update the cache with the transformed data
          dispatch(
            orderApiSlice.util.updateQueryData("getOrder", orderId, (draft) => {
              draft.shippingAddress = address;
            })
          );
        } catch (error) {
          console.error("Failed to fetch shipping address:", error);
        }
      },
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useUpdateAddressMutation,
  useGetOrderQuery,
} = orderApiSlice;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_APP_PROD_API_URL
    : import.meta.env.VITE_APP_DEV_API_URL;

export const addressApiSlice = createApi({
  reducerPath: "addressApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    credentials: "include",
  }),
  tagTypes: ["Address"],
  endpoints: (builder) => ({
    getAddress: builder.query({
      query: () => "/address/getaddress",
      providesTags: (result) =>
        result?.address
          ? [
              ...result.address.map(({ id }) => ({ type: "Address", id })),
              { type: "Address", id: "LIST" },
            ]
          : [{ type: "Address", id: "LIST" }],
    }),
    getAddressById: builder.query({
      query: (addressId) => `/address/getaddress/${addressId}`,
      providesTags: (result, error, id) => [{ type: "Address", id }],
    }),
    addAddress: builder.mutation({
      query: (address) => ({
        url: "/address/addaddress",
        method: "POST",
        body: address,
      }),
      invalidatesTags: [{ type: "Address", id: "LIST" }],
    }),
    deleteAddress: builder.mutation({
      query: (addressId) => ({
        url: `/address/deleteaddress/${addressId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Address", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAddressQuery,
  useGetAddressByIdQuery,
  useAddAddressMutation,
  useDeleteAddressMutation,
} = addressApiSlice;

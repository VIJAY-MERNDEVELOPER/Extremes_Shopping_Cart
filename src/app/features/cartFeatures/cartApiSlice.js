import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_APP_PROD_API_URL
    : import.meta.env.VITE_APP_DEV_API_URL;
console.log(API);
export const cartApiSlice = createApi({
  reducerPath: "cartApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    credentials: "include",
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCartProducts: builder.query({
      query: () => `/cart/getcartproduct`,
      providesTags: (result) =>
        result
          ? [
              ...result?.cart.map(({ id }) => ({ type: "Cart", id })),
              { type: "Cart", id: "LIST" },
            ]
          : [{ type: "Cart", id: "LIST" }],
    }),
    addToCart: builder.mutation({
      query: (productData) => ({
        url: `/cart/addtocart`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
    updateCartQuantity: builder.mutation({
      query: ({ cartId, quantity }) => ({
        url: `/cart/updatecartquantity/${cartId}`,
        method: "PUT",
        body: { quantity },
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
    deleteCartProduct: builder.mutation({
      query: (cartId) => ({
        url: `/cart/deleteproduct/${cartId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
  }),
});

export const {
  useGetCartProductsQuery,
  useAddToCartMutation,
  useUpdateCartQuantityMutation,
  useDeleteCartProductMutation,
} = cartApiSlice;

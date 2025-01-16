import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_APP_PROD_API_URL
    : import.meta.env.VITE_APP_DEV_API_URL;

export const productApiSlice = createApi({
  reducerPath: "productApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    headers: {
      withCredentials: true,
    },
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products/getallproducts",

      transformErrorResponse: (res) => res,
      providesTags: ["Product"],
    }),
    getProduct: builder.query({
      query: (id) => `/products/getproduct/${id}`,
      transformResponse: (res) => res.product,
      transformErrorResponse: (res) => res,
      providesTags: ["Product"],
    }),

    getProductsPagination: builder.query({
      query: ({ page = 1, limit = 6, sortName, sort }) => {
        const url = `/products/getallproducts?page=${page}&limit=${limit}&sortName=${sortName}&sort=${sort}`;

        return url;
      },

      providesTags: ["Product"],
    }),
    getProductsByCategory: builder.query({
      query: ({ category, subCategory, sortName, sortValue }) => {
        console.log(category, subCategory, sortName, sortValue);
        const url = `/products/getproducts?category=${category}&subCategory=${subCategory}&sortName=${sortName}&sort=${sortValue}`;

        return url;
      },

      providesTags: ["Product"],
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products/addproduct",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ productId, updateData }) => ({
        url: `/products/editproduct/${productId}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/deleteproduct/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsPaginationQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductsByCategoryQuery,

} = productApiSlice;

// export const productStates = (state) =>
//   productApiSlice.endpoints.getProducts.select()(state);

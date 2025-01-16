import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "./productService.js";

const initialState = {
  product: [],
  status: "idle",
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productReset: (state) => {
      state.product = [];
      state.status = "idle";
      state.message = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
        state.product.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
        state.product = action.payload.products;
        console.log(state.product);
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
        console.log(state.message);
      })
      .addCase(updateProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "success";
        const { message, product } = action.payload;
        state.message = message;
        const index = state.product.findIndex(
          (prod) => prod._id === product._id
        );
        index !== -1 && (state.product[index] = action.payload.product);
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
        console.log(state.message);
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
        state.product = state.product.filter(
          (prod) => prod._id !== action.payload.id
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
        console.log(state.message);
      });
  },
});

export const { productReset } = productSlice.actions;
export const productState = (state) => state.product;
export default productSlice.reducer;

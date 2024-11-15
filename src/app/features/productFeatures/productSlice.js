import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getAllProducts } from "./productService.js";

const initialState = {
  product: [],
  status: "idle",
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(addProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
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
      });
  },
});

export const productState = (state) => state.product;
export default productSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSFeatures/userSlice.js";
import productReducer from "../features/productFeatures/productSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

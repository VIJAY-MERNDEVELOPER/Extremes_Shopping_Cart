import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSFeatures/userSlice.js";
import productReducer from "../features/productFeatures/productSlice.js";
import { productApiSlice } from "../features/productFeatures/productApiSlice.js";
import { cartApiSlice } from "../features/cartFeatures/cartApiSlice.js";
import { addressApiSlice } from "../features/addressFeatures/addressApiSlice.js";
import { orderApiSlice } from "../features/orderFeatures/orderApiSlice.js";
import { paymentApiSlice } from "../features/paymentFeatures/paymentApiSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [cartApiSlice.reducerPath]: cartApiSlice.reducer,
    [addressApiSlice.reducerPath]: addressApiSlice.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
    [paymentApiSlice.reducerPath]: paymentApiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare()
      .concat(productApiSlice.middleware)
      .concat(cartApiSlice.middleware)
      .concat(addressApiSlice.middleware)
      .concat(orderApiSlice.middleware)
      .concat(paymentApiSlice.middleware),
});

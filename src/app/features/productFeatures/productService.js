import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_APP_PROD_API_URL
    : import.meta.env.VITE_APP_DEV_API_URL;
console.log(API);

export const addProduct = createAsyncThunk(
  "product/addproduct",
  async (product, thunkApi) => {
    try {
      const response = await axios.post(API + "/products/addproduct", product, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("product service", product);
      console.log(response);
      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product, thunkApi) => {
    try {
      console.log(product);
      const response = await axios.put(
        `${API}/products/editproduct/${product.productId}`,
        product.updateData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "product/getallproduct",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(API + "/products/getallproducts", {
        withCredentials: true,
      });
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(
        API + `/products/deleteproduct/${id}`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

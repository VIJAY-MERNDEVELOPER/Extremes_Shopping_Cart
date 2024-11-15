import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://extremes-b4pn.onrender.com/api";

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

export const updateStock = createAsyncThunk(
  "product/updatestock",
  async (ProductId, stock, thunkApi) => {
    try {
      const response = await axios.post(
        API + `/products/editproduct/${ProductId}`
      );
      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "product/getallproduct",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(API + "/products/getallproducts");
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

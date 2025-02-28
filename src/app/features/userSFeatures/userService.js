import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_APP_PROD_API_URL
    : import.meta.env.VITE_APP_DEV_API_URL;

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, thunkApi) => {
    console.log(userData);

    try {
      const response = await axios.post(API + "/user/register", userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 201) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        return response.data;
      }
    } catch (error) {
      console.log(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, thunkApi) => {
    console.log(userData);
    try {
      const response = await axios.post(API + "/user/login", userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.log(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "getallproduct",
  async (object, { rejectWithValue }) => {
    try {
      const Products = await axios.get("/api/allproduct");
      // console.log(Posts.data);
      return Products.data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const initialState = {
  Products: [],
  loading: false,
  isSuccess: false,
  message: "",
};
const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
      state.message = "Đang tải dữ liệu!!!";
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Products = payload;
      state.isSuccess = true;
      state.message = "Done!!!";
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default productSlice;

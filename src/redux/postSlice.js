import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "getallpost",
  async (object, { rejectWithValue }) => {
    try {
      const Posts = await axios.get("/api/allpost");
      // console.log(Posts.data);
      return Posts.data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const initialState = {
  Posts: [],
  loading: false,
  isSuccess: false,
  message: "",
};
const postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
      state.message = "Đang tải dữ liệu!!!";
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Posts = payload;
      state.isSuccess = true;
      state.message = "Done!!!";
    },
    [getPosts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default postSlice;

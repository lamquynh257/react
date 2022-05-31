import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Posts: [],
};
export const postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    addPosts: (state, { payload }) => {
      state.Posts = payload;
    },
  },
});

export const { addPosts } = postSlice.actions;
export const getAllPost = (state) => state.Posts.Posts;
export default postSlice.reducer;

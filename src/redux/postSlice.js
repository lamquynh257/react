import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    post_title: "Test cái coi",
    post_content: "",
    post_image: "",
  },
  reducers: {
    update: (state, action) => {
      state.post_title = action.payload.post_title;
      state.post_content = action.payload.post_content;
      state.post_image = action.payload.post_image;
    },
  },
});

export const { update } = postSlice.actions;
export default postSlice.reducer;

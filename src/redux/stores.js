import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postSlice";
import usersReducer from "./userSlice";
import cartsReducer from "./cartSlice";
import productsReducer from "./productSlice";

export default configureStore({
  reducer: {
    Posts: postsReducer.reducer,
    Users: usersReducer.reducer,
    Products: productsReducer.reducer,
    Carts: cartsReducer.reducer,
  },
});

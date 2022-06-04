import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  Products: localStorage.getItem("Products")
    ? JSON.parse(localStorage.getItem("Products"))
    : [],
  cartTotalQuantity: 0,
  cartTotal: 0,
};
const cartSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.Products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.Products[itemIndex].cartQuantity += 1;
        toast("Them thanh cong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.Products.push(tempProduct);
        toast("Them moi thanh cong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      localStorage.setItem("Products", JSON.stringify(state.Products));
    },
    removeFromCart(state, action) {
      const nextCart = state.Products.filter(
        (cart) => cart.id !== action.payload.id
      );
      state.Products = nextCart;
      localStorage.setItem("Products", JSON.stringify(state.Products));
      toast(`🦄 Xoá "${action.payload.name}" thành công!`, {
        position: "top-right",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.Products.findIndex(
        (cart) => cart.id == action.payload.id
      );
      if (state.Products[itemIndex].cartQuantity > 1) {
        state.Products[itemIndex].cartQuantity -= 1;
        toast(` Xoá "${action.payload.name}" thành công!`, {
          position: "top-right",
        });
      } else if (state.Products[itemIndex].cartQuantity === 1) {
        const nextCart = state.Products.filter(
          (cart) => cart.id !== action.payload.id
        );
        state.Products = nextCart;
        toast(` Xoá "${action.payload.name}" thành công!`, {
          position: "top-right",
        });
      }
      localStorage.setItem("Products", JSON.stringify(state.Products));
    },
  },
});
export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;
export default cartSlice;

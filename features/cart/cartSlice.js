import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        const updatedCart = state.cartItems.map((item) =>
          item._id === existingItem._id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        state.cartItems = updatedCart;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItemFromCart: (state, action) => {
      //the payload will be a string
      const updatedCart = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.cartItems = updatedCart;
    },
    increasItemQuantity: (state, action) => {
      // const { id, quantity } = action.payload;
      // const meal = state.cartItems.find((item) => item._id === id);
      // if (meal) {
      //   meal.quantity = quantity;
      // }
      const updatedCart = state.cartItems.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      state.cartItems = updatedCart;
    },
    decreaseItemQuantity: (state, action) => {
      const updatedCart = state.cartItems.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      state.cartItems = updatedCart;
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  increasItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

//selectors
export const getCartTotal = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

export default cartSlice.reducer;

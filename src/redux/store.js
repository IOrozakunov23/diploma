import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice
  }
});

store.subscribe(() => {
  localStorage.setItem('cartItems', JSON.stringify(
    store.getState().cart.items
  ));

  const auth = store.getState().auth;
  if (auth.localId !== null) {
    localStorage.setItem('auth', JSON.stringify(auth));
  }
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cart/cartSlice';
import modalReducer from './Cart/modal';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
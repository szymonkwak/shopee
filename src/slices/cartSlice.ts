import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';

type CartState = Array<Product>;

const initialState: CartState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, payload: PayloadAction<Product>) => {},
    removeItem: (state, payload: PayloadAction<Product>) => {},
    clearCart: (state) => {
      state = [];
    },
    buyItemsFromCart: (state) => {},
  },
});

export const { addItem, removeItem, clearCart, buyItemsFromCart } = cartSlice.actions;

export default cartSlice.reducer;

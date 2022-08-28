import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';

type CartState = Array<Product>;

const initialState: CartState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<Product>) => {},
    clearCart: (state) => {
      state = [];
    },
    buyItemsFromCart: (state) => {},
  },
});

export const { addItem, removeItem, clearCart, buyItemsFromCart } = cartSlice.actions;

export default cartSlice.reducer;

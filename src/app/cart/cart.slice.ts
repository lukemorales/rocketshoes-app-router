import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../products/product';
import { CartProduct } from './cart-product';

type CartState = CartProduct[];

const initialState: CartState = [];

const increaseAmountRequest = createAsyncThunk(
  'cart/increase-amount-request',
  async (productId: number) => {
    const availableStock: number = await fetch(
      `http://localhost:3000/api/stock/${productId}`,
    ).then((res) => res.json());

    return availableStock;
  },
);

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.push({ ...action.payload, amount: 1 });
    },
    remove: (state, action: PayloadAction<{ id: number }>) => {
      const productIndex = state.findIndex((p) => p.id !== action.payload.id);

      if (productIndex < 0) {
        return state;
      }

      state.splice(productIndex, 1);
    },
    updateAmount: (
      state,
      action: PayloadAction<{ id: number; amount: number }>,
    ) => {
      const product = state.find(({ id }) => id === action.payload.id);

      if (!product) {
        return state;
      }

      product.amount = action.payload.amount;

      if (product.amount > 0) {
        return state;
      }

      state.splice(state.indexOf(product), 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(increaseAmountRequest.fulfilled, (state, action) => {
      const product = state.find((product) => product.id === action.meta.arg);

      if (!product) {
        return state;
      }

      const stockLeft = action.payload - product.amount;

      if (stockLeft < 0) {
        return state;
      }

      product.amount++;
    });
  },
});

export const cartActions = {
  ...cartSlice.actions,
  increaseAmountRequest,
};
export const cartReducer = cartSlice.reducer;

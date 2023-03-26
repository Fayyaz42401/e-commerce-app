import { createReducer } from '@reduxjs/toolkit';

const singleApi = `https://fakestoreapi.com/products/`;

export const cartReducer = createReducer(
  { cartItems: [], subtotal: 0, shipping: 0, tax: 0, total: 0 },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find(i => i.id === item.id);

      if (isItemExist) {
        state.cartItems.forEach(i => {
          if (i.id === item.id) i.quantity++;
        });
      } else {
        state.cartItems.push(item);
      }
    },
    decrement: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      state.cartItems.forEach(i => {
        if (item.quantity > 1) i.quantity--;
      });
    },
    delete: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    },

    calculateAmount: state => {
      let sum = 0;
      state.cartItems.forEach(i => (sum += i.price * i.quantity));
      state.subtotal = sum;
      state.shipping = state.subtotal > 1000 ? 0 : 200;
      state.tax = +(state.subtotal * 0.18).toFixed();
      state.total = state.subtotal + state.shipping + state.tax;
    },
  }
);

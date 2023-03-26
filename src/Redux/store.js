import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducer';

const app = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default app;

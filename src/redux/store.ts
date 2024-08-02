import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import CartSlice from "./features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: CartSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loadUser } from "../features/authSlice";
import productsReducer, { productsFetch } from "../features/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});

store.dispatch(productsFetch());
store.dispatch(loadUser(null));

// store.js

import { configureStore } from "@reduxjs/toolkit";
import newsReducer, { newsFetch } from "../redux/fetchNews";

const store = configureStore({
  reducer: { news: newsReducer },
});

store.dispatch(newsFetch());

export default store;

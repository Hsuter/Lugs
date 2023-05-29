// actions.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const newsFetch = createAsyncThunk("news/newsFetch", async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/news");
    const data = response.data;
    console.log("fetch", data);
    return data;
  } catch (error) {
    console.log("Fetching failed", error);
    throw error; // Rethrow the error to be handled in the rejected action
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [newsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [newsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [newsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default newsSlice.reducer;

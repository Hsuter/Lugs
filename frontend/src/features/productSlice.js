import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import { setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}api/products`);

      return response.data;
    } catch (error) {
      console.log("Fetching failed", error);
    }
  }
);

export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}api/products`,
        values,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

export const productsDelete = createAsyncThunk(
  "products/productsDelete",
  async (id) => {
    try {
      console.log(id);
      // Make the DELETE request to your API endpoint
      const response = await axios.delete(`${url}api/products/${id}`);

      // Handle the response (optional)
      console.log(response.data.message);
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(productsFetch.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(productsCreate.pending, (state, action) => {
      state.createStatus = "pending";
    });
    builder.addCase(productsCreate.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Image added!");
    });
    builder.addCase(productsCreate.rejected, (state, action) => {
      state.createStatus = "rejected";
    });
    builder.addCase(productsDelete.pending, (state, action) => {
      state.createStatus = "pending";
    });
    builder.addCase(productsDelete.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Image deleted!");
    });
    builder.addCase(productsDelete.rejected, (state, action) => {
      state.createStatus = "rejected";
    });
  },
});

export default productsSlice.reducer;

// // productSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { apiClient } from "../../axios/apiClient";

// // Новый thunk с фильтрацией по категории
// export const getProduct = createAsyncThunk(
//   "product/fetch",
//   async (category, thunkAPI) => {
//     try {
//       const res = await apiClient.get(`/Hime/Ratatui`, {
//         params: { category }, // фильтрация по категории
//       });
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message || "not found");
//     }
//   }
// );

// // Slice остаётся почти без изменений
// const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     products: [],
//     loading: false,
//     error: null,
//     category: "laptops"
//   },
//   reducers: {
//     setCategory: (state, action) => {
//       state.category = action.payload;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProduct.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getProduct.fulfilled, (state, action) => {
//         state.loading = false;
//         state.products = action.payload;
//       })
//       .addCase(getProduct.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { setCategory } = productSlice.actions;
// export default productSlice.reducer;

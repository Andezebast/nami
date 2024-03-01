import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";
import { IApiResponse } from "../../models/IApiResponse";

const initialState: IApiResponse<IProduct[]> = {
  data: [],
  loading: true,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<IProduct[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProductsError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { fetchProducts, fetchProductsSuccess, fetchProductsError } = productsSlice.actions;

export default productsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";
import { IApiResponse } from "../../models/IApiResponse";

interface IQuantity {
  id: number;
  action: string;
}

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
    quantityShoppingCart(state, action: PayloadAction<IQuantity>) {
      const id = action.payload.id;
      const actions = action.payload.action;
      switch (actions) {
        case "minus":
          state.data.forEach((product) => {
            if (product.id === id && product.quantity >= 2) {
              product.quantity--;
            }
          });
          break;
        case "plus":
          state.data.forEach((product) => {
            if (product.id === id) {
              product.quantity++;
            }
          });
          break;
      }
    },
  },
});
export const { fetchProducts, fetchProductsSuccess, fetchProductsError } =
  productsSlice.actions;

export default productsSlice.reducer;

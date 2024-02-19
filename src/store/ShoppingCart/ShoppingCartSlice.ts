import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

// interface IQuantity {
//   id: number;
//   action: string;
// }
interface ProductsState {
  shoppingCartProducts: IProduct[];
}

const initialState: ProductsState = {
  shoppingCartProducts: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addShoppingCart(state, actions: PayloadAction<IProduct>) {
      state.shoppingCartProducts.push(actions.payload);
      console.log(actions.payload, "shopping store");
    },
    removeShoppingCart() {},
  },
});
export const { addShoppingCart, removeShoppingCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

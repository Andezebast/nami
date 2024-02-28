import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShoppingCart } from "../../models/IShoppingCart";

interface IQuantity {
  id: number;
  action: string;
}
interface ProductsState {
  shoppingCartProducts: IShoppingCart[];
}
const initialState: ProductsState = {
  shoppingCartProducts: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToShoppingCart(state, action: PayloadAction<number>) {
      const cartItem = {
        id: action.payload,
        quantity: 1,
      };
      state.shoppingCartProducts.push(cartItem);
    },
    quantityShoppingCart(state, action: PayloadAction<IQuantity>) {
      const id = action.payload.id;
      const actions = action.payload.action;
      switch (actions) {
        case "minus":
          state.shoppingCartProducts.forEach((product) => {
            if (product.id === id && product.quantity >= 2) {
              product.quantity--;
            }
          });
          break;
        case "plus":
          state.shoppingCartProducts.forEach((product) => {
            if (product.id === id) {
              product.quantity++;
            }
          });
          break;
      }
    },
    removeFromShoppingCart(state, action: PayloadAction<number>) {
      state.shoppingCartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});
export const {
  addToShoppingCart,
  quantityShoppingCart,
  removeFromShoppingCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productSlice from "./Products/productsSlice";
import shoppingCartSlice from "./ShoppingCart/ShoppingCartSlice";
import { AllSaga } from "./Products/ProductsSaga";
const rootReducer = combineReducers({
  productSlice,
  shoppingCartSlice,
});

const sagaMiddleware = createSagaMiddleware();

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });
};

const store = setupStore();

sagaMiddleware.run(AllSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default store;

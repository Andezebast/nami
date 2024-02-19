import axios, { AxiosError } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IProduct } from "../../models/IProduct";
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsError,
} from "./productsSlice";
import { IApiResponse } from "../../models/IApiResponse";

function* productsSage() {
  try {
    const response: IApiResponse<IProduct[]> = yield call(
      axios.get,
      "https://656ca5bae1e03bfd572e97e7.mockapi.io/sushi-products"
    );
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    const axiosError = error as AxiosError;
    yield put(fetchProductsError(axiosError.message));
  }
}
export function* AllSaga() {
  yield all([takeLatest(fetchProducts, productsSage)]);
}

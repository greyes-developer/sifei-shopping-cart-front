import { productTypes } from "../types/products";
import Swal from "sweetalert2";
import {
  getProductsService,
  postBuyProductsService,
} from "../services/products";

const getProductsLoading = () => ({
  type: productTypes.GET_PRODUCTS_LOADING,
});

const getProductsSuccess = (payload) => ({
  type: productTypes.GET_PRODUCTS_SUCCESS,
  payload,
});

const getProductsError = (payload) => ({
  type: productTypes.GET_PRODUCTS_ERROR,
  payload,
});

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsLoading());

    const result = await getProductsService();

    if (result && result.status === "success") {
      dispatch(getProductsSuccess(result.data));
    } else {
      Swal.fire("Error", result.message, "error");
      dispatch(getProductsError(result.data));
    }
  };
};

export const addProduct = (payload) => ({
  type: productTypes.ADD_PRODUCT,
  payload,
});

const buyProductsLoading = () => ({
  type: productTypes.BUY_PRODUCTS_LOADING,
});

const buyProductsSuccess = () => ({
  type: productTypes.BUY_PRODUCTS_SUCCESS,
});

const buyProductsError = (payload) => ({
  type: productTypes.BUY_PRODUCTS_ERROR,
  payload,
});

export const buyProducts = (payload) => {
  return async (dispatch) => {
    dispatch(buyProductsLoading());

    const result = await postBuyProductsService(payload);

    if (result && result.status === "success") {
      dispatch(buyProductsSuccess());
      Swal.fire("Operación exitosa", result.data?.mensaje, "success");
    } else {
      Swal.fire("Error", `${JSON.stringify(result?.message)}`, "error");
      dispatch(buyProductsError(result));
    }
  };
};

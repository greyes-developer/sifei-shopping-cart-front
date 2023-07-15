import { productTypes } from "../types/products";
import Swal from "sweetalert2";
import {
  getProductsService,
  postBuyProductsService,
} from "../services/products";
import { logoutTokenExpired } from "./auth";

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

    try {
      const { data } = await getProductsService();
      if (data && data?.status === "success") {
        dispatch(getProductsSuccess(data?.data));
      }
    } catch (error) {
      const { status, statusText, data } = error;

      if (status === 401 && statusText === "Unauthorized") {
        dispatch(logoutTokenExpired());
      } else {
        Swal.fire("Error", data?.message, "error");
        dispatch(getProductsError(data));
      }
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

    try {
      const { data } = await postBuyProductsService(payload);

      if (data && data.status === "success") {
        dispatch(buyProductsSuccess());
        Swal.fire("Operación exitosa", data.data?.mensaje, "success");
      }
    } catch (error) {
      const { status, statusText, data } = error;

      if (status === 401 && statusText === "Unauthorized") {
        dispatch(logoutTokenExpired());
      } else {
        Swal.fire("Error", data?.message, "error");
        dispatch(buyProductsError(data));
      }
    }
  };
};

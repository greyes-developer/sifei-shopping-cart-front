import { productTypes } from "../types/products";
import Swal from "sweetalert2";
import { getProductsService } from "../services/products";

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
  return async (dispatch, state) => {
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

import { productTypes } from "../types/products";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productTypes.GET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case productTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case productTypes.GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case productTypes.ADD_PRODUCT:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id_producto === action.payload.id_producto) {
            return {
              ...item,
              cantidad_disponible:
                item.cantidad_disponible - action.payload.quantityToBuy,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

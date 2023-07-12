import { authTypes } from "../types/auth";

const initialState = {
  authenticated: false,
  loading: true,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.AUTH_LOGIN_LOADING:
      return {
        ...state,
        authenticated: false,
        loading: true,
      };
    case authTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        data: action.payload,
      };
    case authTypes.AUTH_LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload,
      };
    case authTypes.AUTH_LOGOUT_SUCCESS:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

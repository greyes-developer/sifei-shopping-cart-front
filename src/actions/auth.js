import { authTypes } from "../types/auth";
import { login } from "../services/auth";
import Swal from "sweetalert2";

const loginLoading = () => ({
  type: authTypes.AUTH_LOGIN_LOADING,
});

const loginSuccess = (payload) => ({
  type: authTypes.AUTH_LOGIN_SUCCESS,
  payload,
});

const loginError = (payload) => ({
  type: authTypes.AUTH_LOGIN_ERROR,
  payload,
});

export const startLogin = (user, password) => {
  return async (dispatch) => {
    dispatch(loginLoading());

    const result = await login(user, password);

    if (result && result.status === "success") {
      dispatch(loginSuccess(result.data));
    } else {
      Swal.fire("Error", result.message, "error");
      dispatch(loginError(result.data));
    }
  };
};

const logoutSuccess = () => ({
  type: authTypes.AUTH_LOGOUT_SUCCESS,
});

export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logoutSuccess());
  };
};

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

    const resp = await login(user, password);
    
    if (resp && resp.status === "success") {
      localStorage.setItem("is-authenticated", true);
      dispatch(loginSuccess(resp.data));
    } else {
      Swal.fire("Error", resp.message, "error");
      dispatch(loginError(resp.data));
    }
  };
};

const logoutSuccess = () => ({
  type: authTypes.AUTH_LOGOUT_SUCCESS,
});

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("is-authenticated");
    dispatch(logoutSuccess());
  };
};

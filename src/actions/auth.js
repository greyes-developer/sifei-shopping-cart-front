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

    const { data } = await login(user, password);

    if (data && data?.status === "success") {
      localStorage.setItem("x-token", data?.token);
      localStorage.setItem("id_usuario", data?.data?.id_usuario);
      localStorage.setItem("nombre_usuario", data?.data?.nombre_usuario);
      dispatch(loginSuccess(data?.data));
    } else {
      Swal.fire("Error", data?.message, "error");
      dispatch(loginError(data?.data));
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

export const logoutTokenExpired = () => {
  return (dispatch) => {
    Swal.fire({
      title: "Token expirado.",
      html: "<p>Vuelve a iniciar sesión.</p>",
      timer: 3000,
      timerProgressBar: true,
    });
    localStorage.clear();
    dispatch(logoutSuccess());
  };
};

import { axiosInstance } from "../config/axios";

export const login = (user, password) => {
  const body = {
    nombre: user,
    clave: password,
  };

  const axios = axiosInstance(false);
  return axios({
    method: "post",
    url: "login",
    data: body,
  });
};

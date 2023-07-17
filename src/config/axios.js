import axios from "axios";
import { getXToken } from "./localStorage";

const API_URL = process.env.REACT_APP_API_URL;

export const axiosInstance = (useToken = true) => {
  let config = {};

  if (!useToken) {
    config = {
      baseURL: API_URL,
    };
  } else {
    const token = getXToken();
    if (token) {
      config = {
        baseURL: API_URL,
        headers: {
          "x-token": token,
        },
      };
    }
  }

  let axiosInstance = axios.create(config);

  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error.response);
    }
  );

  return axiosInstance;
};

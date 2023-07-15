import axios from "axios";
import { getXToken } from "./localStorage";

const API_URL = "http://localhost:4000/";

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
      // if (
      //   err.response.status === 401 &&
      //   err.response.statusText === "Unauthorized"
      // ) {
      //   err.response = {
      //     ...err.response,
      //     errorAction: "TokenOutdated",
      //   };
      // }
      return Promise.reject(error.response);
    }
  );

  return axiosInstance;
};

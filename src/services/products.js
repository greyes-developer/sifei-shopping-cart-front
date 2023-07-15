import { axiosInstance } from "../config/axios";

export const getProductsService = () => {
  return axiosInstance()(`api/products`);
};

export const postBuyProductsService = (body) => {
  return axiosInstance()({
    method: "post",
    url: "api/buy",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  });
};

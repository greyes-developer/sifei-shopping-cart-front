const API_URL = "http://localhost:4000"; //Implement in a env file

export const getProductsService = () => {
  return fetch(`${API_URL}/products`).then((res) => res.json());
};

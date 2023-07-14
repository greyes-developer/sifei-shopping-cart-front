const API_URL = "http://localhost:4000"; //Implement in a env file

export const getProductsService = () => {
  return fetch(`${API_URL}/api/products`).then((res) => res.json());
};

export const postBuyProductsService = (body) => {

  return fetch(`${API_URL}/api/buy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

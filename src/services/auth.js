const API_URL = "http://localhost:4000"; //Implement in a env file

export const login = (user, password) => {
  const body = {
    nombre: user,
    clave: password,
  };
  
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json();
  });
};

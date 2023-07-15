export const getXToken = () => {
  return localStorage.getItem("x-token");
};

export const getUserId = () => {
  return localStorage.getItem("id_usuario");
};

export const getUserName = () => {
  return localStorage.getItem("nombre_usuario");
};

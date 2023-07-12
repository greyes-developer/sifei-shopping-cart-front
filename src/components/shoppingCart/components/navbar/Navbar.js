import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../actions/auth";

import "./navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.data);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar-container">
      <h2>Carrito de compras</h2>
      <p className="logout-button" onClick={() => handleLogout()}>
        Cerrar sesión
      </p>
      <p>Nombre del cliente: {user?.nombre_usuario}</p>
    </div>
  );
};

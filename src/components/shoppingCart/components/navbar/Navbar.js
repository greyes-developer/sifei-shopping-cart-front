import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../../actions/auth";

import "./navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const userName = localStorage.getItem("nombre_usuario");

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar-container">
      <h2>Carrito de compras</h2>
      <p className="logout-button" onClick={() => handleLogout()}>
        Cerrar sesión
      </p>
      <p>Nombre del cliente: {userName}</p>
    </div>
  );
};

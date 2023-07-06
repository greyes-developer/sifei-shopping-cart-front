import React from "react";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <h2>Carrito de compras</h2>
      <p className="logout-button">Cerrar sesión</p>
      <p>Nombre del cliente: Gustavo</p>
    </div>
  );
};

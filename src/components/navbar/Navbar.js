import React from "react";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <h2>Productos</h2>
      <div className="navbar-menu">
        <p>Cliente: Gustavo</p>
        <p className="logout-button">Cerrar sesión</p>
        <p>Ir al carrito de compras</p>
      </div>
    </div>
  );
};

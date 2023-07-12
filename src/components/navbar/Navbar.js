import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";
import "./navbar.css";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleGoToShoppingCart = () => {
    navigate("/shopping-cart");
  };

  return (
    <div className="navbar-container">
      <h2>Productos</h2>
      <div className="navbar-menu">
        <p>Cliente: Gustavo</p>
        <p className="logout-button" onClick={() => handleLogout()}>
          Cerrar sesión
        </p>
        <p className="go-to-shopping-cart" onClick={handleGoToShoppingCart}>
          Ir al carrito de compras
        </p>
      </div>
    </div>
  );
};

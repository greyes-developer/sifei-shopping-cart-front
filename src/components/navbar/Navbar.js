import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";
import "./navbar.css";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.auth);

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
        <p>Cliente: {data?.data.nombre_usuario}</p>
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

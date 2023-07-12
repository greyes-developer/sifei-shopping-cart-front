import React from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

import "../auth/login.css";

export const LoginScreen = () => {
  const [formValues, handleInputChange, resetForm] = useForm({
    user: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { user, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(user, password));
    resetForm();
  };

  return (
    <div className="container text-center login-container">
      <h3 className="shopping-title">Carrito de compras</h3>

      <form onSubmit={handleLogin}>
        <div className="key-fields-container">
          <p className="key-field-form">Usuario</p>
          <input
            type="text"
            name="user"
            placeholder="Usuario"
            value={user}
            onChange={handleInputChange}
          />
        </div>
        <div className="key-fields-container">
          <p className="key-field-form">Contraseña</p>
          <input
            type="text"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" className="btnSubmit" value="Iniciar sesión" />
      </form>
    </div>
  );
};

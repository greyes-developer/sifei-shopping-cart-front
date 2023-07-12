import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

import "../auth/login.css";

export const LoginScreen = () => {
  const [formValues, handleInputChange, resetForm] = useForm({
    user: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const dispatch = useDispatch();

  const { user, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(user, password));
    resetForm();
  };

  return (
    <div className="container text-center login-container">
      <h3 className="h3">Carrito de compras</h3>

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
            type="text"
            className="form-control"
            name="user"
            placeholder="Usuario"
            value={user}
            onChange={handleInputChange}
            aria-describedby="userHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <div className="password-container">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={handleInputChange}
              className="form-control"
            />
            <i
              className={
                !isPasswordVisible
                  ? "far fa-eye-slash password-icon eye-icon"
                  : "far fa-eye password-icon eye-icon"
              }
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            ></i>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

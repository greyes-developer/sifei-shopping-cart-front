import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { ProductsScreen } from "../components/products/ProductsScreen";
import { ShoppingCartScreen } from "../components/shoppingCart/ShoppingCartScreen";
import { Protected } from "./Protected";

export const AppRouter = () => {
  const { authenticated } = useSelector((state) => state.auth);
  console.log(`Estado del usuario: ${authenticated}`);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="shopping-cart"
          element={
            <Protected isAuthenticated={authenticated}>
              <ShoppingCartScreen />
            </Protected>
          }
        />
        <Route
          path="/products"
          element={
            <Protected isAuthenticated={authenticated}>
              <ProductsScreen />
            </Protected>
          }
        />
        <Route
          path="/*"
          element={authenticated ? <ProductsScreen /> : <LoginScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
};

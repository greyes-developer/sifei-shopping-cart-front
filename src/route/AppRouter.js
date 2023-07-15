import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { ProductsScreen } from "../components/products/ProductsScreen";
import { ShoppingCartScreen } from "../components/shoppingCart/ShoppingCartScreen";
import { getXToken } from "../config/localStorage";
import ErrorPage from "./ErrorPage";
import { NoProtected } from "./NoProtected";
import { Protected } from "./Protected";

export const AppRouter = () => {
  const token = getXToken();
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <NoProtected isAuthenticated={authenticated || token}>
              <LoginScreen />
            </NoProtected>
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path="shopping-cart"
          element={
            <Protected isAuthenticated={authenticated || token} exact>
              <ShoppingCartScreen />
            </Protected>
          }
        />
        <Route
          path="/"
          element={
            <Protected isAuthenticated={authenticated || token}>
              <ProductsScreen />
            </Protected>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

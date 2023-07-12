import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { ProductsScreen } from "../components/products/ProductsScreen";
import { ShoppingCartScreen } from "../components/shoppingCart/ShoppingCartScreen";

export const AppRouter = () => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="shopping-cart" element={<ShoppingCartScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/*" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

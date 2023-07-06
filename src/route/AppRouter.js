import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { ProductsScreen } from "../components/products/ProductsScreen";

import ErrorPage from "./ErrorPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginScreen />,
//     errorElement: <ErrorPage />,
//   },
// ]);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

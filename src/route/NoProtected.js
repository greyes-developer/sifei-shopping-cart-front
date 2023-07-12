import React from "react";
import { Navigate } from "react-router-dom";

export const NoProtected = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    return <Navigate to={"/"} replace />;
  }

  return children;
};

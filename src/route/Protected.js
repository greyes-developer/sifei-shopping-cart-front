import React from "react";
import { Navigate } from "react-router-dom";

export const Protected = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

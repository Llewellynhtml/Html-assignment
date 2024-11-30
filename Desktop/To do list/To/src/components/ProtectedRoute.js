import React from "react";
import { Navigate } from "react-router-dom";

// ProtectedRoute component to check if the user is logged in
const ProtectedRoute = ({ element: Element }) => {
  const user = localStorage.getItem("user"); // Check if the user is logged in

  // If no user is found, redirect to the login page
  return user ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

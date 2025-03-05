import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { isAuthenticated, loading } = useAuth();

  // If authentication is in process
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If not authenticated, redirect to specified path
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // If authenticated, return children or outlet (for nested routes)
  return children ? children : <Outlet />;
};

export default ProtectedRoute;

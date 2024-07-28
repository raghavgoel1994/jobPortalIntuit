import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const PrivateFreelancerRoute = () => {
  const role = useSelector((state) => state.auth.user.role);

  return role === "freelancer" ? <Outlet /> : <Navigate to="/login" />;
};

const PrivateEmployerRoute = () => {
  const role = useSelector((state) => state.auth.user.role);

  return role === "employer" ? <Outlet /> : <Navigate to="/login" />;
};

export { PrivateEmployerRoute, PrivateFreelancerRoute, PrivateRoute };

export default PrivateRoute;

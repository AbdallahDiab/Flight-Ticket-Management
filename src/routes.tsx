import React from "react";
import { Home, Login, NotFound, Register } from "@pages";
import { Navigate, useRoutes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  const isAuthenticated = false;

  const routing = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: isAuthenticated ? <Home /> : <Navigate to="/login" />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routing;
};

export default AppRoutes;

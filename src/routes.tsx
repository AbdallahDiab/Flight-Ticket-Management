import React from "react";
import { Login, NotFound, Register, FlightDetails, FlightsList } from "@pages";
import { Navigate, useRoutes } from "react-router-dom";
import useAppSelector from "./hooks/useAppSelector";
import { RootState } from "@store";

const AppRoutes: React.FC = () => {
  const { isLoggedIn } = useAppSelector((state: RootState) => state.auth);

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
      path: "/flights",
      element: isLoggedIn ? <FlightsList /> : <Navigate to="/login" />,
    },
    {
      path: "/flights/:id",
      element: isLoggedIn ? <FlightDetails /> : <Navigate to="/login" />,
    },
    {
      path: "/",
      element: <Navigate to="/flights" />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routing;
};

export default AppRoutes;

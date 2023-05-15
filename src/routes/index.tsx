import React from "react";
import Home from "@/Pages/Home";
import { useRoutes } from "react-router-dom";
import History from "@/Pages/History";

export const AppRoutes = () => {
  const commonRoutes = [
    { path: "/", element: <Home /> },
    { path: "/history", element: <History /> },
  ];
  const element = useRoutes(commonRoutes);
  return <>{element}</>;
};

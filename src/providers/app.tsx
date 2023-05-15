import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

interface IChildren {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: IChildren) => {
  return <Router>{children}</Router>;
};

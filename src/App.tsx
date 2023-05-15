import React from "react";
import styled from "styled-components";
import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;

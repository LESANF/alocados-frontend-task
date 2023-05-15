import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { RecoilRoot } from "recoil";
import GlobalStyles from "./styles";
import "@/styles/fonts/Font.css";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <RecoilRoot>
    <GlobalStyles />
    <App />
  </RecoilRoot>
);

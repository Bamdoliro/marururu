import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyled from "styles/global.style";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import "./assets/stylesheet.scss";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { SessionContextProvider } from "./core/context/SessionContext";

ReactDOM.render(
  <BrowserRouter>
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

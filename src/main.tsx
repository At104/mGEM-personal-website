import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./globals.css";

import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/inter";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/jetbrains-mono";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

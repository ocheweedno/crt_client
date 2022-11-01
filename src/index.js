import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} path="*" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

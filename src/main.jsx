import router from "./router";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Footer from "./components/Footer";

// console.log(test());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <RouterProvider router={router} />
    </div>
    <Footer />
  </React.StrictMode>
);

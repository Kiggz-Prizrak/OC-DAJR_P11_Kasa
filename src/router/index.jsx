import React from "react";

import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import Logement from "../pages/Logement";
import About from "../pages/About";
import Home from "../pages/Home";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/logement/:id",
        element: <Logement />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;

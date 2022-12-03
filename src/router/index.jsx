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

const Root = () => {
 return( 
 <>
    <Header />
    <Outlet />
  </>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/logement/:id",
        element: <Logement />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;

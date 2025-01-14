import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/users/Home";
import Absensi from "./components/Pages/users/Absensi";
import Layout from "./components/fragments/Layout";
import Logbook from "./components/Pages/users/Logbook";
import Laporan from "./components/Pages/users/Laporan";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/absensi",
        element: <Absensi />
      },
      {
        path: "/logbook",
        element: <Logbook />
      },
      {
        path: "/laporan",
        element: <Laporan />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
);
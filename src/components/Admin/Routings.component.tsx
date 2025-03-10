import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
  Navigate,
} from "react-router-dom";

export default function Routings() {
  const routings = [
    {
      path: "/",
      element: <Navigate to="All-Items" />,
    },
    {
      path: "/*",
      element: "",
    },
    {
      path: "All-Items",
      element: "",
    },
    {
      path: "Favorites",
      element: "",
    },
    {
      path: "labels/:tagId",
      element: "",
    },
  ];
  const route = window.process
    ? createHashRouter(routings)
    : createBrowserRouter(routings);

  return <RouterProvider router={route} />;
}

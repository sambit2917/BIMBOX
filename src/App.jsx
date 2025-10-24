import React from "react";
import HomeSection from "./components/sectionContainers/HomeSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import AboutPage from "./components/pages/AboutPage";
import ProductPage from "./components/pages/ProductPage";
import PricingPage from "./components/pages/PricingPage";
import HomePage from "./components/pages/HomePage";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true, //? Make <HomePage /> load automatically for "/"
          element: <HomePage />,
        },
        {
          path: "/homeSection",
          element: <HomeSection />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/product",
          element: <ProductPage />,
        },
        {
          path: "/pricing",
          element: <PricingPage />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [],
    },
  ]);
  return (
    <RouterProvider router={routes} />
  );
};

export default App;

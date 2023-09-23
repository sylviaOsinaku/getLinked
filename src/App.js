import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomePage from "./pages/HomePage";
import Root from "./global/Root";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import "./App.css";

function AnimatedRoutes() {
  // Wrap your routes in a TransitionGroup and CSSTransition
  const location = window.location.pathname; // Get the current location
  return (
    <TransitionGroup>
      <CSSTransition key={location} classNames="fade" timeout={300}>
        <Outlet /> {/* Outlet renders the matched child route */}
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "register",
          element: <Registration />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <AnimatedRoutes /> {/* Use AnimatedRoutes */}
    </RouterProvider>
  );
}

export default App;

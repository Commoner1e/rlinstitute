import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Course from "./pages/Course";
import Faculty from "./pages/Faculty";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "About",
    element: <About/>
  },
  {
    path: "Course",
    element: <Course/>
  },
  {
    path: "Faculty",
    element: <Faculty/>
  },
  {
    path: "Admission",
    element: <Admission/>
  },
  {
    path: "Contact",
    element: <Contact/>
  },
  {
    path: "Login",
    element: <Login/>
  }

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
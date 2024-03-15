import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Cert from "./components/pages/cert";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/cert",
        element: <Cert />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

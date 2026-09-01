import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import Landing from "./pages/Landing";
import Certificate from "./pages/Certificate";
import ErrorPage from "./pages/ErrorPage";

// Stop the browser from silently restoring the last scroll position (e.g. the
// Resume section) on refresh/back-forward; Landing's own hash effect owns scrolling.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Landing /> },
      { path: "certificate", element: <Certificate /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

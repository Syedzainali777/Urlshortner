import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./pages/Applayout.jsx";
import Landingpage from "./pages/landingpage.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Link from "./pages/link.jsx";
import Redirectlink from "./pages/redirectLink.jsx";
import Auth from "./pages/auth.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/link/:id", // Use `:id` to indicate a dynamic segment
        element: <Link />,
      },
      {
        path: "/redirectlink",
        element: <Redirectlink />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

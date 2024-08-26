import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./pages/Applayout.jsx";
import Landingpage from "./pages/landingpage.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Link from "./pages/link.jsx";
import Redirectlink from "./pages/redirectLink.jsx";
import Auth from "./pages/auth.jsx";
import "./App.css";
import UrlProvider from "./context.jsx";
import RequireAuth from "./components/requiredAuth.jsx";

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
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id", // Use `:id` to indicate a dynamic segment
        element: (
          <RequireAuth>
            <Link />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
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
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
}

export default App;

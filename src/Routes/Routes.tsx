import { createBrowserRouter } from "react-router";
import App from "@/App";
import PrivateLayout from "@/layouts/PrivateLayout";
import Déclaration from "@/pages/Déclaration";
import ErrorPage from "@/ErrorPage";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "private", element: <PrivateLayout />,
      children: [
        {path: "declaration", element: <Déclaration />},
      ]
     }],
  },
]);

export default router;

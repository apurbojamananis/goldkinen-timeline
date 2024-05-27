// import App from "@/App";
import App from "@/App";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import Test from "@/Pages/test/Test";
import MainLayout from "@/components/Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <App />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
  {
    path: "test2",
    element: <Test />,
  },
]);

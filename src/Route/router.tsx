import App from "@/App";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import MainLayout from "@/components/Layout/MainLayout";
import TimelinePost from "@/components/Timelines/TimelinePost/TimelinePost";
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
        path: "/post",
        element: <TimelinePost />,
      },
    ],
  },
]);

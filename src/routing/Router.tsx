import { createBrowserRouter } from "react-router-dom";
import { HomePage, AboutPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
]);

import { createHashRouter } from "react-router-dom";
import { HomePage, AboutPage } from "../pages";

export const router = createHashRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
]);

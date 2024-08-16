import { createHashRouter } from "react-router-dom";
import { HomePage, AboutPage } from "../pages";

export const router = createHashRouter([
    {
        path: "/GeoSiteList/",
        element: <HomePage />,
    },
    {
        path: "/GeoSiteList/about",
        element: <AboutPage />,
    },
]);

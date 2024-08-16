import { createBrowserRouter } from "react-router-dom";
import { HomePage, AboutPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/GeoSiteList/",
        element: <HomePage />,
    },
    {
        path: "/GeoSiteList/about/",
        element: <AboutPage />,
    },
]);

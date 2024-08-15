import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { MantineProvider } from "@mantine/core";

export const App = () => {
    return (
        <MantineProvider defaultColorScheme="dark">
            <RouterProvider router={router} />
        </MantineProvider>
    );
};

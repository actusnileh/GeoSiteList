import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export const App = () => {
    return (
        <MantineProvider defaultColorScheme="dark">
            <Notifications/>
                <RouterProvider router={router} />
        </MantineProvider>
    );
};

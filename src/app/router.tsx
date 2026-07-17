import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@app/layout/RootLayout";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'connexion',
                element: <LoginPage />,
            },
        ],
    },
]);
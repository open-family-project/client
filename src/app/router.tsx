import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage.tsx";

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
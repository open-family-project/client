import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/app/layout/RootLayout";
import AuthenticatedLayout from "@/app/layout/AuthenticatedLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import UnauthenticatedLayout from "@/app/layout/UnauthenticatedLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                element: <UnauthenticatedLayout />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: 'login',
                        element: <LoginPage />,
                    },
                ]
            },
            {
                element: <AuthenticatedLayout />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: 'dashboard',
                        element: <DashboardPage />,
                    },
                ]
            },
        ],
    },
]);
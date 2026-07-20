import { Navigate, Outlet } from "react-router-dom";

import { useSession } from "@/app/session/useSession";
import Topbar from "@/shared/ui/Navbar/Topbar";

export default function UnauthenticatedLayout() {

    const { authenticated } = useSession();

    if (authenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <>
            <Topbar />

            <main>
                <Outlet />
            </main>
        </>
    );
}
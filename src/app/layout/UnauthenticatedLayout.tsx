import { Navigate, Outlet, NavLink } from "react-router-dom";

import { useSession } from "@/app/session/useSession";
import Topbar, { RightArea } from "@/shared/ui/Navbar/Topbar";

export default function UnauthenticatedLayout() {

    const { authenticated } = useSession();

    if (authenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <>
            <Topbar>
                <RightArea>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "btn btn-primary" : "btn btn-ghost"
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? "btn btn-primary" : "btn btn-ghost"
                        }
                    >
                        Connexion
                    </NavLink>
                </RightArea>
            </Topbar>

            <main>
                <Outlet />
            </main>
        </>
    );
}
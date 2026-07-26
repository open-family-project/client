import { Navigate, Outlet, Link } from "react-router-dom";
import { useSession } from "@/app/session/useSession";
import Topbar, { RightArea } from "@/shared/ui/Navbar/Topbar";

export default function AuthenticatedLayout() {
    const { authenticated } = useSession();

    if (!authenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>

            <div className="drawer-content">
                <Topbar>
                    <RightArea>
                        <Link to="/login" className="btn btn-ghost">Déconnexion</Link>
                    </RightArea>
                </Topbar>
                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
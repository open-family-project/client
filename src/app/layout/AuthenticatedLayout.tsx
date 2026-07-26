import {Navigate, Outlet, Link} from "react-router-dom";
import {useSession} from "@/app/session/useSession";
import Topbar, {RightArea} from "@/shared/ui/Navbar/Topbar";
import Drawer from "@/shared/ui/Drawer/Drawer";

export default function AuthenticatedLayout() {
    const {authenticated} = useSession();

    if (!authenticated) {
        return <Navigate to="/login" replace/>;
    }

    return (
        <Drawer
            sidebarCenter={
                <>
                    <Link to="/dashboard">Dashboard</Link>
                </>
            }
            sidebarBottom={
                <Link to="/profile">Profil</Link>
            }
        >
            <Topbar>
                <RightArea>
                    <Link to="/login" className="btn btn-ghost">Déconnexion</Link>
                </RightArea>
            </Topbar>
            <main className="p-4">
                <Outlet/>
            </main>
        </Drawer>
    );
}
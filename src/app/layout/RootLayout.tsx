import {Outlet} from "react-router-dom";
import Topbar from "../../shared/ui/Navbar/Topbar.tsx";

export default function RootLayout() {
    return (
        <>
            <Topbar />

            <main>
                <Outlet />
            </main>
        </>
    );
}
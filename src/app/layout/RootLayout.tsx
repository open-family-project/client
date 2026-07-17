import {Outlet} from "react-router-dom";
import Topbar from "@/shared/ui/Navbar/Topbar";

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
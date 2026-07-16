import {Outlet} from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <header>
                Open Family
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}
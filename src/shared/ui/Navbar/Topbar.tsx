import {Link, NavLink} from "react-router-dom";

export default function Topbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link
                    to="/"
                    className="btn btn-ghost text-xl"
                >
                    Open Family
                </Link>
            </div>

            <div className="flex-none gap-2">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "btn btn-primary" : "btn btn-ghost"}
                >
                    Accueil
                </NavLink>

                <NavLink
                    to="/login"
                    className={({ isActive }) => isActive ? "btn btn-primary" : "btn btn-ghost"}
                >
                    Connexion
                </NavLink>
            </div>
        </div>
    );
}
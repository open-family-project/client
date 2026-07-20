import { useSessionStore } from "@/app/session/session.store";

export function useSession() {

    const session = useSessionStore(state => state.session);

    const login = useSessionStore(state => state.login);

    const logout = useSessionStore(state => state.logout);

    return {
        session,
        login,
        logout,
        authenticated: session !== null,
    };
}
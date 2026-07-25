import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Session } from "@/app/session/models/Session";

interface SessionStore {

    session: Session | null;

    login(session: Session): void;

    logout(): void;
}

export const useSessionStore = create<SessionStore>()(
    persist(
        (set) => ({
            session: null,

            login(session) {
                set({
                    session,
                });
            },

            logout() {
                set({
                    session: null,
                });
            },
        }),
        {
            name: 'session-storage',
        }
    )
);
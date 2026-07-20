import { login as loginApi } from "@/features/auth/api/auth.api";
import type { LoginRequest } from "@/features/auth/models/LoginRequest";
import { useSession } from "@/app/session/useSession";
import type {LoginResponse} from "@/features/auth/models/LoginResponse";

export function useLogin() {

    const { login } = useSession();

    async function authenticate(data: LoginRequest) {
        const response: LoginResponse = await loginApi(data);

        login({
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
        });
    }

    return {
        authenticate,
    };
}
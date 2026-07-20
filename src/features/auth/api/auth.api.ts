import type { LoginRequest } from "@/features/auth/models/LoginRequest";
import type {LoginResponse} from "@/features/auth/models/LoginResponse.ts";

export async function login(request: LoginRequest): Promise<LoginResponse> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (
        request.email === "john.doe@example.com" &&
        request.password === "password"
    ) {
        return {
            accessToken: "fake-access-token",
            refreshToken: "fake-refresh-token",
        };
    }

    throw new Error("Email ou mot de passe invalide");
}
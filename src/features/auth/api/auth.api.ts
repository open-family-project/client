import type { LoginRequest } from "@/features/auth/models/LoginRequest";
import type {LoginResponse} from "@/features/auth/models/LoginResponse";
import {httpClient} from "@/shared/api/httpClient.ts";

export async function login(request: LoginRequest): Promise<LoginResponse> {
    return httpClient.post<LoginResponse>(
        "/api/auth/token",
        request,
    );
}
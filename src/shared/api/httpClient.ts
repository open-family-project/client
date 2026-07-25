import {ApiError} from "@/shared/api/ApiError";
import type {RequestOptions} from "@/shared/api/types";

class HttpClient {

    async get<T>(
        url: string,
        options?: RequestOptions,
    ): Promise<T> {
        return this.request<T>(
            url,
            {
                method: "GET",
                ...options,
            },
        );
    }

    async post<T>(
        url: string,
        body?: unknown,
        options?: RequestOptions,
    ): Promise<T> {
        return this.request<T>(
            url,
            {
                method: "POST",
                body: body ? JSON.stringify(body) : undefined,
                headers: {
                    "Content-Type": "application/json",
                    ...options?.headers,
                },
            },
        );
    }

    private async request<T>(
        url: string,
        init: RequestInit,
    ): Promise<T> {
        const response = await fetch(url, init);

        if (!response.ok) {

            const error = await response.json();

            throw new ApiError(
                response.status,
                error.error,
                error.message,
            );
        }

        return response.json();
    }
}

export const httpClient = new HttpClient();

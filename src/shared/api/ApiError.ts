export class ApiError extends Error {

    public readonly status: number;
    public readonly error: string;
    public readonly detail: string | null;

    constructor(
        status: number,
        error: string,
        detail: string | null = null,
    ) {
        super(error);

        this.status = status;
        this.error = error;
        this.detail = detail;
    }
}
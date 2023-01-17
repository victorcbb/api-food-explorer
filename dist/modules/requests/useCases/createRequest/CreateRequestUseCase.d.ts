interface ICreateRequest {
    userId: string;
    requests: string[];
}
export declare class CreateRequestUseCase {
    execute({ userId, requests }: ICreateRequest): Promise<void>;
}
export {};

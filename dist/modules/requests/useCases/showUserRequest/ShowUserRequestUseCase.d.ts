interface IShowUserRequest {
    userId: string;
}
export declare class ShowUserRequestUseCase {
    execute({ userId }: IShowUserRequest): Promise<{
        id: number;
        details: import(".prisma/client").Product[];
        createdAt: Date;
        userId: string;
        status: import(".prisma/client").Status;
    }[]>;
}
export {};

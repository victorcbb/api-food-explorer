interface IShowAdminRequest {
    adminId: string;
}
export declare class ShowAdminRequestUseCase {
    execute({ adminId }: IShowAdminRequest): Promise<(import(".prisma/client").Request & {
        details: import(".prisma/client").Product[];
    })[]>;
}
export {};

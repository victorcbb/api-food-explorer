interface IUpdateStatusRequest {
    adminId: string;
    status: "PENDING" | "PREPARING" | "DELIVERED";
    id: number;
}
export declare class UpdateStatusRequestUseCase {
    execute({ adminId, status, id }: IUpdateStatusRequest): Promise<void>;
}
export {};
